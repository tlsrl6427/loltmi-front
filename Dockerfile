FROM node:20-alpine
WORKDIR /loltmi-front

COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT [ "npm", "start"]
EXPOSE 3000
