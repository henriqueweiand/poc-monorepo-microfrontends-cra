FROM node:13.12.0-alpine

WORKDIR /app

CMD [ "npm", "run", "start:cra" ]