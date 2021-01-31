FROM node:14.15.4-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

CMD yarn build && yarn start
