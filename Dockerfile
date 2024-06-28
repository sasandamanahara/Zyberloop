# Use an official Node.js runtime as a parent image
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Use a lightweight Node.js image to serve the app
FROM node:14-slim

# Install serve globally
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the build output from the previous stage
COPY --from=build /usr/src/app/build ./build

# Expose port 3000
EXPOSE 3000

# Start the app with serve
CMD ["serve", "-s", "build", "-l", "3000"]
