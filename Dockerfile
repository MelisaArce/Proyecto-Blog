# Dockerfile for a react app
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install -g vite
RUN npm install

# Copy the source code
COPY . .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]