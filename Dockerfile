FROM node:latest

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

COPY ./ecosystem.config.js .
COPY ./app.js .
COPY ./views ./views
COPY ./static ./static

RUN npm install --production --no-progress

USER node

CMD ["npm", "server"]
