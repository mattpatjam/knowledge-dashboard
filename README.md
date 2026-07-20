# Knowledge Dashboard

A browsable, searchable library of framework references distilled from 75 business/self-help books across 12 categories, plus an optional AI research assistant that answers questions grounded in the same content.

## Browse and search (no setup)

Just open `index.html` in a browser — double-click it, or drag it into a browser window. Everything (all 75 books, ~1,070 sections) is baked into `data.js`, so it works fully offline, with no server, no build step, and no account.

## Ask AI (requires an Anthropic API key)

The "Ask AI" tab calls Claude to answer questions across the book library. To enable it:

1. Install dependencies: `pip install -r requirements.txt`
2. Copy `.env.example` to `.env` and add your own Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com))
3. Run `./start.command` (macOS) or `python3 server.py`, then open `http://localhost:8420/`

Without a `.env` file, the static dashboard still works — only the Ask AI tab will be unavailable.

## Rebuilding after adding books

Reference docs live in `books/<category>/*.md`, one file per book, each following a fixed structure (see any existing file as a template: H1 title, italic disclaimer, `## N. Section Name` blocks separated by `---`). After adding or editing a file, regenerate `data.js`:

```
python3 build.py
```

`categories.json` defines the 12 categories; `book-list.md` tracks which books belong in each one.
