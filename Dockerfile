FROM node:lts-alpine

WORKDIR /usr/src/nuxt-app

COPY package.json yarn.lock* ./

CMD [ -d "node_modules" ] && yarn dev || yarn && yarn dev
