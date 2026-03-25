# Step 1: Build the app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npx next export \
	&& echo "-- /app after export --" \
	&& ls -la /app || true \
	&& if [ -d /app/out ]; then mkdir -p /app/dist && cp -r /app/out/* /app/dist/; fi \
	&& echo "-- /app/dist contents --" \
	&& ls -la /app/dist || true

# Step 2: Serve the app with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]