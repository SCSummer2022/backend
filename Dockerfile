FROM node
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
RUN npm rebuild
ENTRYPOINT ["node", "index.js"]