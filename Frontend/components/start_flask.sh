#!/bin/bash

# Check if Flask is already running
if lsof -i :5000 >/dev/null; then
    echo "Flask app is already running on port 5000."
else
    echo "Flask app is not running. Starting Flask..."
    # Start Flask app
    FLASK_APP=app.py flask run
fi
