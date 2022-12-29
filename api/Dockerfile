FROM node:18-alpine

WORKDIR /app

# install python 3 (required by node-gyp)
RUN apk update && apk upgrade && apk add python3

# install essentials
RUN apk add g++ gcc make libtool automake autoconf build-base libtool nasm

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . .

RUN yarn install

# build arguments
ARG CI
ARG NODE_ENV

RUN yarn build

CMD [ "yarn", "start" ]
