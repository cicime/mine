FROM node:latest

ENV NODE_ENV=production NODE_PORT=8080

WORKDIR /usr/src/app

COPY ./ .

RUN npm install --production --no-progress

CMD ["npm", "server"]
