#!/bin/bash

set -eu

# Build
./node_modules/.bin/tsc

# Copy extra files
mkdir -p dist/schemas
cp src/schemas/* dist/schemas/
