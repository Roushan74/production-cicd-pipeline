#!/bin/bash

set -e

echo "===================================="
echo "Starting CI verification"
echo "===================================="

echo ""
echo "1. Installing dependencies..."
cd app
npm ci

echo ""
echo "2. Running tests..."
npm test

echo ""
echo "3. Generating test coverage..."
npm run test:coverage

echo ""
echo "===================================="
echo "CI verification completed successfully"
echo "===================================="