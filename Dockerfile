FROM node:22 AS build-front

WORKDIR /app/Front

# Build Angular frontend
COPY Front/package*.json ./
RUN npm install

COPY Front/ ./
RUN npm run build

# Production stage
FROM node:22

WORKDIR /app

# Copy and install API dependencies
COPY api/package*.json ./
RUN npm install --production

# Copy API code
COPY api/ ./

# Copy built Angular app
COPY --from=build-front /app/Front/dist/tp06 ./public

EXPOSE 3000

CMD ["npm", "start"]