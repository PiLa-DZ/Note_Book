echo admin | base64
	# Output: YWRtaW4K
nmtui

curl -s --header "Referer: http://<modem_ip>/index.html" -d 'isTest=false&goformId=SET_NETWORK_PARAM&PrimaryDNS=<Pihole_IP>&SecondaryDNS=<Backup_DNS>' http://<modem_ip>/goform/goform_set_cmd_process

curl -X POST -s --header "Referer: http://192.168.0.1/index.html" -d 'isTest=false&goformId=SET_NETWORK_PARAM&PrimaryDNS=192.168.0.199&SecondaryDNS=1.1.1.1' http://192.168.0.1/goform/goform_set_cmd_process

curl -X POST -s --header "Referer: http://192.168.0.1/index.html" -d 'isTest=false&goformId=SET_WAN_DNS&PrimaryDNS=192.168.0.199&SecondaryDNS=1.1.1.1' http://192.168.0.1/goform/goform_set_cmd_process

curl -X POST -s --header "Referer: http://192.168.0.1/index.html" -d 'isTest=false&goformId=SET_DNS_INFO&PrimaryDNS=192.168.0.199&SecondaryDNS=1.1.1.1' http://192.168.0.1/goform/goform_set_cmd_process

curl -X POST -s --header "Referer: http://192.168.0.1/index.html" -d 'isTest=false&goformId=DNS&PrimaryDNS=192.168.0.199&SecondaryDNS=1.1.1.1' http://192.168.0.1/goform/goform_set_cmd_process

الوظيفة المطلوبة,الأمر المتوقع في الـ API (goformId)
تعيين DNS,SET_DNS_INFO أو SET_WAN_DNS أو SET_NETWORK_PARAM
تعيين وضع DNS,SET_DNS_MODE (لتغييرها من تلقائي/Automatic إلى يدوي/Manual)
