# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the Vite dev server will run on
EXPOSE 8000

# Start the application
CMD ["npm", "run", "dev"]
