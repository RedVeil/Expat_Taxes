#!/usr/bin/env bash

set -e

PROJECT_ROOT="`cd "$(dirname "$BASH_SOURCE")/../..";pwd`"
source ${PROJECT_ROOT}/config.sh

echo ${PROJECT_ROOT}
echo ${APP_NAME}

docker build \
    --build-arg USER_ID=$UID \
    --build-arg USER_GID=$(id -g $USER) \
    -t builder_${APP_NAME} -f ${PROJECT_ROOT}/build/Dockerfile ${PROJECT_ROOT}


[ -f /etc/ssh/ssh_known_hosts ] && V_SSH_KNOWN_HOSTS="-v /etc/ssh/ssh_known_hosts:/etc/ssh/ssh_known_hosts" || V_SSH_KNOWN_HOSTS=""

mkdir -p ~/.config ~/.npm

docker run \
    --userns=host \
    -v ${PROJECT_ROOT}:/project \
    -e "APP_NAME=${APP_NAME}" \
    -e "APP_BUILD_ID=${CI_PIPELINE_IID}" \
    -e "APP_REVISION=${CI_COMMIT_SHA}" \
    -v ~/.npm:/home/deploy/.config \
    -v ~/.npm:/home/deploy/.npm \
    -v ~/.ssh:/home/deploy/.ssh \
    -w=/project/production/build \
    $V_SSH_KNOWN_HOSTS \
    builder_${APP_NAME}
