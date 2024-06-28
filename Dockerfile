# Stage 1: Build the app
FROM node:14 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the built files from the previous stage
COPY --from=build /usr/src/app/build ./build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Command to serve the app
CMD ["serve", "-s", "build"]
