#!/usr/bin/env bash

set -e

PROJECT_ROOT="`cd "$(dirname "$BASH_SOURCE")/../..";pwd`"
source ${PROJECT_ROOT}/config.sh
[ -z "$APP_NAME" ] && { echo "APP_NAME environment variable is not set."; exit 1; }
[ -z "$PUBLIC_PORT_WEB" ] && { echo "PUBLIC_PORT_WEB environment variable is not set."; exit 1; }

docker tag ${APP_NAME}_web:build docker.intern:5000/${APP_NAME}_web

docker push docker.intern:5000/${APP_NAME}_web

cp production/deploy/docker-stack.yml /tmp/docker-stack_${APP_NAME}.yml
sed -i -e "s/\${APP_NAME}/${APP_NAME}/g" /tmp/docker-stack_${APP_NAME}.yml
sed -i -e "s/\${PUBLIC_PORT_WEB}/${PUBLIC_PORT_WEB}/g" /tmp/docker-stack_${APP_NAME}.yml

docker stack deploy -c /tmp/docker-stack_${APP_NAME}.yml --prune ${APP_NAME}
