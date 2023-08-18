# Get Alpine Linux
FROM node:16.10.0-alpine AS node

# change working directory
WORKDIR /angular

# copy package.json
COPY package.json ./

# Install Angular CLI
RUN npm install -g @angular/cli@14.2.0

# install dependencies
RUN npm install

# Copy source code
COPY . .

# build production code
RUN npm run build --prod

# Get Nginx
FROM nginx:1.21.3-alpine

# Copy source code
COPY --from=node /angular/dist/ui-fpgen /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# Export port 80
EXPOSE 80