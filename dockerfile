# Use a lightweight Nginx image as the base image
FROM nginx:alpine

# Copy your HTML files into the container's web root
COPY constructing/* /usr/share/nginx/html

# Expose port 80 to make the web server accessible
EXPOSE 80

# Command to start the Nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]