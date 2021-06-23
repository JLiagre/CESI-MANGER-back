FROM node
WORKDIR /usr/src/app
COPY . /usr/src/app
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait
RUN npm install
EXPOSE 40253
CMD "/wait" && "npm" "start"