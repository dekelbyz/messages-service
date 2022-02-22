FROM node:14-alpine
WORKDIR /src/server
ARG PORT=2000
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production --silent
COPY . .
RUN npm run build
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["npm", "run", "start:prod"]