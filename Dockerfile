# Stage 1: Build the app
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm i --save-dev @types/node

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with a lightweight server
FROM nginx:stable-alpine

# Copy the built files from the first stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]