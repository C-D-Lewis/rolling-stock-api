FROM node:10-alpine

# Install dependencies
WORKDIR /project
ADD package* ./
RUN npm ci

ADD . /project

# Run dredd tests
ENTRYPOINT ["npm", "start"]