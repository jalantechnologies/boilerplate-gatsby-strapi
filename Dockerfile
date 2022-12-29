FROM node:18-alpine

WORKDIR /app

# install python 3 (required by node-gyp)
RUN apk update && apk upgrade && apk add python3

# install essentials
RUN apk add g++ gcc make libtool automake autoconf build-base libtool nasm

# install vips (required by sharp)
RUN apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing \
  vips-dev \
  fftw-dev \
  libc6-compat

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
ARG STRAPI_API_URL
ARG STRAPI_TOKEN

RUN yarn build

CMD [ "yarn", "serve" ]
