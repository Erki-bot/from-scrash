FROM node:14.21.3-alpine
RUN apk --no-cache add git
RUN apk --no-cache add ssh
RUN addgroup app && adduser -S -G app app
RUN npm install -g parse-server mongodb-runner
USER app
WORKDIR /parse-server
COPY package*.json .
RUN npm install
ENV APP_ID="erki-app-0r3dj3" MONGOBD_URI='mongodb://localhost:27017/dev' SERVER_URL='http://localhost:1337/parse' MASTER_KEY='diA2_dbdj#293un@@djh20'
EXPOSE 1337
COPY . .
CMD [ "mongodb-runner","start" ]
