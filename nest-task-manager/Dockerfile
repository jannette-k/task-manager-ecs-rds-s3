FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "dist/main.js"]

# Stage 1: Build
# FROM node:24-alpine AS build

# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install all dependencies (including dev)
# RUN npm ci

# # Copy source code
# COPY . .

# # Build the app (NestJS compiles to dist/)
# RUN npm run build

# # Stage 2: Production runtime
# FROM node:24-alpine AS runtime

# WORKDIR /app

# # Only copy package files and install production deps
# COPY package*.json ./
# RUN npm install --omit=dev

# # Copy compiled code from build stage
# COPY --from=build /app/dist ./dist

# # Copy any other assets needed at runtime (like .env if required)
# COPY --from=build /app/.env ./

# # Expose backend port
# EXPOSE 5000

# # Run production server
# CMD ["node", "dist/main.js"]

# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --only=production
# COPY . .
# CMD ["node", "dist/main.js"]

# FROM node:24-alpine
# WORKDIR /app
# COPY ./package*.json ./
# RUN npm ci
# COPY . .
# CMD ["npm", "run", "start"]


