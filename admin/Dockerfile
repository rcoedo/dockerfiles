FROM node:latest

ADD ./web/package.json /web/package.json
RUN cd /web/ && npm install

ADD web /web

EXPOSE 80
