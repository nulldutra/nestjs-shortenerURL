FROM node:20-alpine

WORKDIR /usr/app

COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./

COPY src/ src/

RUN yarn

COPY . ./

EXPOSE 3000

ENTRYPOINT ["yarn", "start:dev"]
