FROM node:19

EXPOSE 3000
WORKDIR /app

COPY . .

RUN npm i --force

RUN npm run build

CMD ["npx", "serve", "build"]