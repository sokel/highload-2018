FROM mhart/alpine-node:latest

RUN apk add --update git && \
    git clone https://github.com/cubedro/eth-netstats && \
    apk del git && \
    cd /eth-netstats && \
    npm install && npm install -g grunt-cli && grunt
WORKDIR /eth-netstats

EXPOSE  3000

CMD ["npm", "start"]