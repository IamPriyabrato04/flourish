# Stage 1 — deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* bun.lock* ./
RUN npm ci --production

# Stage 2 — builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Stage 3 — runner
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
# copy only what's needed
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
