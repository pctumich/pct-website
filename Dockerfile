FROM node:14.17

WORKDIR /app

ENV PORT 80

COPY package.json .

RUN yarn install

COPY . /app

CMD [ "yarn", "start" ]