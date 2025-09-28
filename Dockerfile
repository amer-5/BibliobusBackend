FROM node:20-alpine

WORKDIR /app

# Instaliraj build tools za Prisma binary
RUN apk add --no-cache bash build-base python3

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

# Generiši Prisma client unutar kontejnera prije dev servera
CMD sh -c "npx prisma generate && npm run dev"
