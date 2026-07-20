FROM node:20-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package.json ./
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist

# Don't run as root in production containers.
RUN useradd --create-home mcpuser
USER mcpuser

CMD ["node", "dist/server.js"]
