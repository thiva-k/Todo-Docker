# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port that the Express app will run on
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]
