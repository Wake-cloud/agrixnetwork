#!/bin/bash
# Custom build script for Vercel

# Install dependencies with force flag to bypass peer dependency issues
npm install --force

# Run the build
npm run build
