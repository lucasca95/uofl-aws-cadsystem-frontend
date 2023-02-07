FROM node:19

ARG TESTPARAM=terminator

ENV REACT_APP_TEST1=$TESTPARAM
ENV REACT_APP_TEST2 agustin
ENV REACT_APP_TEST3 camino

EXPOSE 3000
WORKDIR /app

COPY . .

RUN npm i --force

RUN npm run build

CMD ["npx", "serve", "build"]