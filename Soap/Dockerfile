# Use the official Node.js 18 image based on Alpine Linux
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 5555

# Command to run the application when the container starts
CMD ["node", "index.js"]
