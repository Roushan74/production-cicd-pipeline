#!/bin/bash

echo "=============================="
echo "DevOps Project Environment"
echo "=============================="

echo ""
echo "Checking installed tools..."

if command -v node >/dev/null 2>&1; then
    echo "Node.js: $(node -v)"
else
    echo "Node.js is not installed"
fi

if command -v npm >/dev/null 2>&1; then
    echo "npm: $(npm -v)"
else
    echo "npm is not installed"
fi

if command -v git >/dev/null 2>&1; then
    echo "Git: $(git --version)"
else
    echo "Git is not installed"
fi

echo ""
echo "Environment check complete."