#!/usr/bin/env bash

set -e

PROJECT_ROOT="`cd "$(dirname "$BASH_SOURCE")/../..";pwd`"
source ${PROJECT_ROOT}/config.sh
[ -z "$APP_NAME" ] && { echo "APP_NAME environment variable is not set."; exit 1; }

docker build --no-cache -t ${APP_NAME}_web:build -f production/deploy/images/web/Dockerfile .
