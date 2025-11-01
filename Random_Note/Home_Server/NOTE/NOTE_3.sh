# Create Dir for Nginx-proxy-manager
cd ~
mkdir nginx-proxy-manager
cd nginx-proxy-manager

# Create docker-compose.yml
vim docker-compose.yml
# -------------------------------------------- >
version: '3.8'

services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    container_name: nginx-proxy-manager
    restart: always
    ports:
      # Port 80: HTTP requests
      - '80:80'
      # Port 443: HTTPS requests
      - '443:443'
      # Port 81: NPM web interface (the admin panel)
      - '81:81'
    environment:
      # تحديد قاعدة البيانات: نستخدم SQLite البسيطة
      DB_MYSQL_HOST: "db"
      DB_MYSQL_PORT: 3306
      DB_MYSQL_USER: "npm"
      DB_MYSQL_PASSWORD: "password" # يفضل تغيير هذا في بيئة إنتاجية
      DB_MYSQL_NAME: "npm"
    volumes:
      # volumes مهمة جداً لضمان استمرار البيانات
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt

  db:
    image: mariadb:10.6
    container_name: npm_database
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 'npm_root_password' # كلمة مرور الجذر لقاعدة البيانات
      MYSQL_DATABASE: 'npm'
      MYSQL_USER: 'npm'
      MYSQL_PASSWORD: 'password'
    volumes:
      - ./mysql:/var/lib/mysql
# -------------------------------------------- <

# Start Nginx-proxy-manager Container
docker compose up -d

docker ps
	# nginx-proxy-manager
	# npm-database

# Open Your Browser 
	http://192.168.0.199:81
	#// Default info
		Email: admin@example.com
		Passwd: changeme
	#// Chanche Email&Password
	#// Add Proxy Host
		#// Domain Name:           node.local
		#// Forward Hostname / IP: 192.168.0.199
		#// Port:                  8080
		#// Block Common Exploits: True
# Open Your Terminal in Arch linux
sudo vim /etc/hosts
	192.168.0.199   node.local
# Open Your Browser
http://node.local
