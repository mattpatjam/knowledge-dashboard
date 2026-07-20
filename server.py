#!/usr/bin/env python3
"""Local server for the Knowledge Dashboard's live AI research ("Ask AI") feature.

Serves the static dashboard files and one JSON endpoint, /api/ask, that reads
the relevant book reference docs under .claude/knowledge/books/<slug>/ and
asks Claude to synthesize a cited answer. Run via start.command, or directly:

    python3 server.py

Then open http://localhost:8420/
"""

import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from anthropic import Anthropic

DASHBOARD_DIR = Path(__file__).resolve().parent
REPO_ROOT = DASHBOARD_DIR.parents[1]
BOOKS_DIR = REPO_ROOT / ".claude" / "knowledge" / "books"
CATEGORIES_JSON = DASHBOARD_DIR / "categories.json"
PORT = 8420


def load_env(env_path):
    env = {}
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            env[key.strip()] = value.strip()
    return env


ENV = load_env(DASHBOARD_DIR / ".env")
API_KEY = os.environ.get("ANTHROPIC_API_KEY") or ENV.get("ANTHROPIC_API_KEY")
MODEL = os.environ.get("ANTHROPIC_MODEL") or ENV.get("ANTHROPIC_MODEL", "claude-sonnet-5")

if not API_KEY:
    raise RuntimeError(
        "No ANTHROPIC_API_KEY found. Add it to Automations/knowledge-dashboard/.env"
    )

client = Anthropic(api_key=API_KEY)


def load_categories():
    with open(CATEGORIES_JSON) as f:
        return json.load(f)


def shelves_with_content():
    """Category slugs that have at least one .md reference file."""
    found = []
    if not BOOKS_DIR.exists():
        return found
    for shelf_dir in sorted(BOOKS_DIR.iterdir()):
        if shelf_dir.is_dir() and any(shelf_dir.glob("*.md")):
            found.append(shelf_dir.name)
    return found


def read_shelf(slug):
    """Return list of (filename, text) for every reference doc in a shelf."""
    shelf_dir = BOOKS_DIR / slug
    docs = []
    if not shelf_dir.exists():
        return docs
    for md_file in sorted(shelf_dir.glob("*.md")):
        docs.append((md_file.name, md_file.read_text(encoding="utf-8")))
    return docs


SYSTEM_PROMPT = """You are answering a business question for Matthieu by reading actual \
book-framework reference files and synthesizing a recommendation across them, with every \
point cited to the book it came from. Not a passage dump, not a book report — a direct \
answer to the question, grounded in what the books actually say.

Structure your answer:
1. Direct recommendation first — one or two lines, no preamble.
2. The reasoning, point by point, each point cited to its book by title.
3. Where the books agree or diverge — convergence is signal; if they conflict, name the \
tension and say which side fits better and why.
4. If a relevant shelf had no content, say so plainly at the end.

Reason across the books, don't concatenate them. Weight by relevance to the specific \
question. Concrete over vague — use the book's actual numbers, checklists, and named \
frameworks. Bullet points over paragraphs. No em dashes. Blunt about trade-offs and about \
gaps in the knowledge base."""


def ask_claude(question, category):
    all_shelves = shelves_with_content()
    if category and category in all_shelves:
        shelves_to_use = [category]
    else:
        shelves_to_use = all_shelves

    context_parts = []
    shelves_used = []
    for slug in shelves_to_use:
        docs = read_shelf(slug)
        if not docs:
            continue
        shelves_used.append(slug)
        for filename, text in docs:
            context_parts.append(f"=== Shelf: {slug} | File: {filename} ===\n{text}")

    missing_shelves = [s["slug"] for s in load_categories() if s["slug"] not in shelves_used]

    if not context_parts:
        return {
            "answer": "No book content is indexed yet for this category. Nothing to answer from.",
            "shelves_used": [],
            "shelves_missing": missing_shelves,
        }

    user_message = (
        f"Question: {question}\n\n"
        f"Available book reference files below. Answer using only these.\n\n"
        + "\n\n".join(context_parts)
    )

    response = client.messages.create(
        model=MODEL,
        max_tokens=2000,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": user_message}],
    )

    answer_text = "".join(
        block.text for block in response.content if block.type == "text"
    )

    return {
        "answer": answer_text,
        "shelves_used": shelves_used,
        "shelves_missing": missing_shelves,
    }


MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
}


class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        print("[dashboard]", format % args)

    def do_GET(self):
        path = self.path.split("?")[0]
        if path == "/":
            path = "/index.html"
        file_path = (DASHBOARD_DIR / path.lstrip("/")).resolve()

        if DASHBOARD_DIR not in file_path.parents and file_path != DASHBOARD_DIR:
            self.send_error(403, "Forbidden")
            return
        if not file_path.exists() or not file_path.is_file():
            self.send_error(404, "Not found")
            return

        content_type = MIME_TYPES.get(file_path.suffix, "application/octet-stream")
        body = file_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path != "/api/ask":
            self.send_error(404, "Not found")
            return

        length = int(self.headers.get("Content-Length", 0))
        raw_body = self.rfile.read(length)
        try:
            payload = json.loads(raw_body)
            question = payload.get("question", "").strip()
            category = payload.get("category") or None
        except (json.JSONDecodeError, AttributeError):
            self.send_error(400, "Bad request")
            return

        if not question:
            self.send_error(400, "Missing question")
            return

        try:
            result = ask_claude(question, category)
            status = 200
        except Exception as exc:
            result = {"error": str(exc)}
            status = 500

        body = json.dumps(result).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("localhost", PORT), Handler)
    print(f"Knowledge Dashboard running at http://localhost:{PORT}/")
    print(f"Model: {MODEL}")
    print(f"Shelves with content: {shelves_with_content()}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping.")
        server.shutdown()
