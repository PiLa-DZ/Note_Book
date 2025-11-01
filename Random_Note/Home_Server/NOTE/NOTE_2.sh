Images
Container


vim Dockerfile
	FROM node:lts-alpine
	WORKDIR /usr/src/app
	COPY package*.json ./
	RUN npm install
	COPY . .
	EXPOSE 3000
	CMD [ "npm", "start" ]

vim .dockerignore
	.git
	README.md

# Build Docker Image
docker build -t my-node-app .
# Build Docker Container And Run in the background
docker run -d --name node-api -p 8080:3000 my-node-app
# Just Build Docker Container
docker create --name nade-api -p 8080:3000 my-node-app

docker ps             # List Runing Containers
docker ps -a          # List All Containers
docker images         # List All Images
docker rm    node-api # Remove Container
docker logs  node-api # Print Container Logs
docker stop  node-api # Stop Runing Container
docker start node-api # Start Runing Container


vim docker-compose.yml
version: '3.8'
services:
  web-app:
    build: . # لكي يتم بناء الصورة من Dockerfile الموجود في نفس المجلد
    container_name: my-node-service-v1
    restart: always 
    ports:
      - "8080:3000"

# --> Docker Compose <-- #
# NOTE: $ cd Your app project
docker compose up -d
docker compose up -d --build # ReBuild image
docker compose build

docker compose stop    # Just Stop Container
docker compose down    # Stop and Remove Container With out remove Volumes
docker compose down -v # Stop and Remove Container and remove Volumes

docker compose ps
docker compose logs -f
docker compose logs -f web-app

docker compose restart
docker compose exec web-app bash
