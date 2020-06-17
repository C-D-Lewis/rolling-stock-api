FROM node:14-alpine

# Install dependencies
WORKDIR /project

ADD package* /project/

RUN npm ci

ADD . /project/

ENTRYPOINT ["npm", "start"]
