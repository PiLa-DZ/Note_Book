# How connect WiFi from tarminal
	# Use networkmanager tool
		$ ip link
		$ sudo pacman -S networkmanager
		$ sudo systemctl start NetworkManager
		$ nmcli d
		$ nmcli r wifi on
		$ nmcli d wifi list
		$ nmcli d wifi connect SSID password "Your Password"


	# Use iwctl tool
		# 0 -> Test your Internet
			$ ping google.com
		# 1 -> list the connections
			$ ip link
		# 2 ->
			$ iwctl
		# 3 -> list all Wi-Fi devices
			$ device list
		# 4 -> turn it on
			$ device "Your device" set-property Powered on
			$ station "Your device" scan
		# 5 -> list all available networks
			$ station "Your device" get-networks
		# 6 -> connect to a network
			$ station "Your device" connect SSID

