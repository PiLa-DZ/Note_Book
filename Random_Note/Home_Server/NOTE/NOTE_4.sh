cd ~
mkdir pihole
cd pihole

vim docker-compose.yml
# ------------------------ >
services:
  pihole:
    image: pihole/pihole:latest
    container_name: pihole
    environment:
      # قم بتعيين منطقتك الزمنية (مثال: 'Africa/Algiers')
      TZ: 'Africa/Algiers' 
      # هام جداً: غيّر كلمة المرور الافتراضية هذه!
      WEBPASSWORD: 'SetAPasswordHere' 
      DNSMASQ_LISTENING: 'all'
    ports:
      # منفذ DNS الأساسي، يجب أن يكون 53
      - "53:53/tcp"
      - "53:53/udp"
      # منفذ واجهة الويب: نستخدم 8088 بدلاً من 80 لتجنب التعارض مع NPM
      - "8088:80/tcp" 
    volumes:
      # Volumes لحفظ البيانات والإعدادات
      - ./etc-pihole:/etc/pihole/
      - ./etc-dnsmasq.d:/etc/dnsmasq.d/
    # إذن خاص يتطلبه Pi-hole للعمل كخادم DNS
    cap_add:
      - NET_ADMIN
    restart: unless-stopped
# ------------------------ <

# Create Pi-Hole Container
docker compose up -d

#TODO: Solve Problem !!!! Start
الرسالة واضحة تمامًا: failed to bind host port for 0.0.0.0:53... address already in use.

# See if systemd-resolve Or dnsmasq in prot 53
sudo lsof -i :53
# Stop systemd-resolved servise
sudo systemctl stop systemd-resolved
# Stop AutoStart systemd-resolved servise
sudo systemctl disable systemd-resolved
# Delete (Symlink)
sudo rm /etc/resolv.conf
# Create resolv.conf
sudo touch /etc/resolv.conf
# Add DNS
sudo vim /etc/resolv.conf
	nameserver 1.1.1.1
# ReStart Pi-Hole
cd ~/pihole
docker compose up -d

#TODO: Solve Problem !!!! End

#TODO: Solve Problem !!!! Start
# Wrong Pi-Hole Password

docker compose exec pihole bash
	$ pihole setpassword

#TODO: Solve Problem !!!! End

# Open Your Browser
http://192.168.0.199:8088/admin
	#//Password: nabilnabil
