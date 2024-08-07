# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy build files to the Nginx HTML directory
COPY dist/ /usr/share/nginx/html/

# Copy custom Nginx configuration file if you have one
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
