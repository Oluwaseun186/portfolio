FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm ci --only=production

EXPOSE 4400

CMD ["node", "app.js"]
