FROM node

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

COPY ./ecosystem.config.js .
COPY ./app.js .
COPY ./views .
COPY ./static .

RUN npm install --production --no-progress

USER node

CMD ["npm", "start"]
