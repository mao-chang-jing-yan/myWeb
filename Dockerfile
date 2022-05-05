FROM node:14.19.0

ADD . /root/app
WORKDIR /root/app

#RUN yarn config set registry https://registry.npmmirror.com
#RUN yarn config set sass_binary_site https://npmmirror.com/mirrors/node-sass
#RUN yarn global add @angular/cli

#RUN npm install -g npm-check-updates
#RUN npm install -g npm
#RUN ncu && ncu -u

RUN yarn
RUN npm run build

FROM nginx

RUN ls /usr/share/nginx/html/
COPY --from=0 /root/app/dist/my-web /usr/share/nginx/html
RUN ls /usr/share/nginx/html

EXPOSE 80
