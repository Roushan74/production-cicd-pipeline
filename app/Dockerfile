FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY index.js ./
COPY server.js ./

EXPOSE 3000

USER node

CMD ["node", "index.js"]