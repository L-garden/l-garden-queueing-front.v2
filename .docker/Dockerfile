FROM nginx

COPY ./.docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./.docker/nginx/conf.d /etc/nginx/conf.d
COPY ./out /usr/share/nginx/html/out

ENTRYPOINT ["nginx", "-g", "daemon off;"]