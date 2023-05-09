#!/bin/sh

if [ -d "node_modules" ]; then
  echo "node_modules folder already exists, skipping npm ci"
else
  echo "node_modules folder not found, executing npm ci"
  npm ci
fi

sleep infinity
