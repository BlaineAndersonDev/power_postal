# Use the official image as a parent image
FROM node:current-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the file from your host to your current location
COPY package.json .

# Run the command inside your image filesystem
RUN npm install
RUN npm install -g gatsby-cli

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# Run the specified command within the container.
CMD [ "npm", "start", "-H", "0.0.0.0" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .