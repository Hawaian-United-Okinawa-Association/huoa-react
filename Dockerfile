FROM node:12.20.1

WORKDIR /huoa

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
