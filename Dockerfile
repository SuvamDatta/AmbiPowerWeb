# Stage 1: Use npm to build the app
FROM node:16 as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm
COPY . ./
RUN npm build

# Stage 2: Copy the JS React SPA into the Nginx HTML directory
FROM bitnami/nginx:latest
COPY --from=builder /usr/src/app/build /app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]