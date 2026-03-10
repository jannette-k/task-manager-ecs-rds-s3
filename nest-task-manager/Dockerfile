FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
COPY . .

RUN npx prisma generate
RUN npm run build

RUN npm prune --omit=dev
CMD ["node", "dist/main.js"]

# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --omit=dev
# COPY prisma ./prisma
# COPY . .
# RUN npx prisma generate
# CMD ["node", "dist/main.js"]


