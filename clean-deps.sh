#!/bin/bash
# Script to clean dependencies and create a fresh package-lock.json

# Remove existing node_modules and lock files
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Install dependencies with a clean slate
npm install --no-package-lock
npm install

echo "Dependencies cleaned and reinstalled"
