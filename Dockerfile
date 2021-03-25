FROM node:12.18.3 AS compile-image
WORKDIR /usr
COPY package.json ./
RUN npm install
COPY . . 
RUN npm run build
EXPOSE 80

FROM nginx:1.18.0
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /usr/dist/disp-frontend /usr/share/nginx/html


### tak til https://betterprogramming.pub/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac ###