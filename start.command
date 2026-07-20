#!/bin/bash
# Double-click this file to start the Knowledge Dashboard with live AI research.
cd "$(dirname "$0")"

PYTHON="../../.venv/bin/python3"
if [ ! -x "$PYTHON" ]; then
  PYTHON="python3"
fi

"$PYTHON" server.py &
SERVER_PID=$!

sleep 1
open "http://localhost:8420/"

echo "Knowledge Dashboard server running (PID $SERVER_PID). Close this window to stop it."
wait $SERVER_PID
