FROM mcr.microsoft.com/oss/nginx/nginx:1.25-alpine
# Light node runtime for demonstration
FROM node:18-alpine
WORKDIR /app
COPY server.js .
EXPOSE 8080
CMD ["node", "server.js"]