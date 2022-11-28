FROM node:19-alpine
MAINTAINER "Tobias Haber <kontakt@t-haber.de>"
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm i
EXPOSE 3000
CMD ["node","index.js"]
