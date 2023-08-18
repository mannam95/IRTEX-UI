# Get Alpine Linux
FROM node:16.14.0-alpine AS node

# change working directory
WORKDIR /angular

# copy package.json
COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli@14.2.12

# install dependencies
RUN npm install --force

# Copy source code
COPY . .

# build production code
RUN npm run build --prod

# Get Nginx
FROM nginx:1.21.3-alpine

# Copy source code
COPY --from=node /angular/dist/IRTEX-UI /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# Export port 80
EXPOSE 80


# Start a long-running process to keep the container running
# CMD [ "tail", "-f", "/dev/null" ]