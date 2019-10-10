FROM node:alpine

ARG USER_ID
ARG USER_GID
RUN apk --update add --no-cache bash git openssh && \
    addgroup -g $USER_GID "deploy" && \
    adduser -D -u $USER_ID -G "deploy" "deploy"

USER "deploy"
VOLUME ["/project", "/home/deploy/.config", "/home/deploy/.npm", "/home/deploy/.ssh", "/etc/ssh/ssh_known_hosts"]

WORKDIR /project

CMD /bin/bash main.sh
