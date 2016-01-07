FROM node:latest

ADD ./web/package.json /web

RUN cd /web && \
    npm install

ADD web /web

EXPOSE 80
