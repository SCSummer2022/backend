FROM node
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm rebuild
ENTRYPOINT ["node", "index.js"]