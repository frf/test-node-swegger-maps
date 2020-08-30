FROM node:12.18.3-alpine3.12

WORKDIR /home/node/app
ADD package*.json ./

COPY . .

RUN yarn install

USER node