FROM ubuntu:20.04
WORKDIR /usr/src/my_app
ADD ./tests ./tests
ADD ./package.json ./
RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get install git -y \
  && apt-get install curl -y \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get install nodejs -y \
  && npm i
CMD npm run jest:test
