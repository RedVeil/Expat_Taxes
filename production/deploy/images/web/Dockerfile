FROM nginx:alpine

COPY ./production/deploy/images/web/conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./app/build /srv/app/www
