sudo pacman -S openssh
sudo systemctl enable sshd
sudo systemctl start sshd
sudo systemctl status sshd

# FireWall
# إذا كنت تستخدم UFW
sudo ufw allow ssh
# أو
sudo ufw allow 22/tcp
sudo ufw enable

