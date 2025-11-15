# Use Bun official image
FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package files first
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build TypeScript -> dist/
RUN bun run build

# Expose API port
EXPOSE 5000

# Start the app
CMD ["bun", "dist/index.js"]
