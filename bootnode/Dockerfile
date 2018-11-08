FROM ubuntu:16.04

RUN apt-get update && apt-get install software-properties-common -y && \
    add-apt-repository ppa:ethereum/ethereum -y && apt-get update && \
    apt-get install bootnode -y

EXPOSE 30303
EXPOSE 30303/udp

CMD bootnode -genkey /boot.key && bootnode -nodekey=/boot.key -addr=":30301"
