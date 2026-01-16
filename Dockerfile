# Build timestamp: 2026-01-16 - Force rebuild
FROM node:22

WORKDIR /app

COPY api/package*.json ./
RUN npm install

COPY api/ ./

EXPOSE 3000

CMD ["npm", "start"]