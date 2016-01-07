FROM nodesource/trusty:5.3.0

RUN apt-get -yqq update && apt-get -yqq install docker.io

ADD ./web/package.json /web/package.json
RUN cd /web/ && npm install

ADD web /web

EXPOSE 80

CMD ["npm", "start"]
