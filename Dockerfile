#Dockerfile

# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine AS development
ENV NODE_ENV development
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package*.json ./

# Copy app files
COPY config-overrides.js ./

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install

# Bundle app source
COPY . .
# Expose port
EXPOSE 3001
# Starting our application
CMD ["npm", "start"]