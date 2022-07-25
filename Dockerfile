FROM node:18

# pasta para aonde vai o build
WORKDIR /app

COPY . .
RUN npm i --legacy-peer-deps
RUN npm run build

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app