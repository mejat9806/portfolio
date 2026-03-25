## Builder image - installs deps and builds the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

## Production image - runs the built app with `next start`
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
RUN npm ci --production
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "start"]