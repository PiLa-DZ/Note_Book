# Reset
e='\033[0m'       # Text Reset

# Regular Colors
a1='\033[0;30m'     # Black
a2='\033[0;31m'		# Red
a3='\033[0;32m'     # Green
a4='\033[0;33m'     # Yellow
a5='\033[0;34m'     # Blue
a6='\033[0;35m'     # Purple
a7='\033[0;36m'     # Cyan
a8='\033[0;37m'     # White

# Bold
b1='\033[1;30m'     # Black
b2='\033[1;31m'     # Red
b3='\033[1;32m'     # Green
b4='\033[1;33m'     # Yellow
b5='\033[1;34m'     # Blue
b6='\033[1;35m'     # Purple
b7='\033[1;36m'     # Cyan
b8='\033[1;37m'     # White

# High Intensity
c1='\033[0;90m'     # Black
c2='\033[0;91m'     # Red
c3='\033[0;92m'     # Green
c4='\033[0;93m'     # Yellow
c5='\033[0;94m'     # Blue
c6='\033[0;95m'     # Purple
c7='\033[0;96m'     # Cyan
c8='\033[0;97m'     # White

# Bold High Intensity
d1='\033[1;90m'     # Black
d2='\033[1;91m'     # Red
d3='\033[1;92m'     # Green
d4='\033[1;93m'     # Yellow
d5='\033[1;94m'     # Blue
d6='\033[1;95m'     # Purple
d7='\033[1;96m'     # Cyan
d8='\033[1;97m'     # White

#e='\033[0m'       # Text Reset
#c7='\033[0;96m'     # Cyan
echo -e "${c7}================================================${e}"
# printf "I ${RED}love${NC} Stack Overflow\n"

g1=$c7 # Border
g2=$d2 # Header
g3=$c8 # Commend
g4=$c6 # Arrow
g5=$c5 # Descreption

# echo -e "${g1}+----------------+-----------------------------------------+${e}"
# echo -e "${g1}|${g2}                ${g1}|${g3}        ${g4}-->${g5}                              ${g1}|${e}"
# echo -e "${g1}+----------------+-----------------------------------------+${e}"

clear
echo -e "${g1}+-----------+----------------------------------------+${e}"
echo -e "${g1}|${g2} General   ${g1}|${g3} e      ${g4}-->${g5} Exit                        ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} r      ${g4}-->${g5} Ranger                      ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} ud     ${g4}-->${g5} Update and Upgrade          ${g1}|${e}"
echo -e "${g1}+-----------+----------------------------------------+${e}"
echo -e "${g1}|${g2} Language  ${g1}|${g3} js     ${g4}-->${g5} node ./app.js               ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} py     ${g4}-->${g5} python3 ./app.py            ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} c      ${g4}-->${g5} c++ -o app app.cpp; ./app   ${g1}|${e}"
echo -e "${g1}+-----------+----------------------------------------+${e}"
echo -e "${g1}|${g2} Git       ${g1}|${g3} gs     ${g4}-->${g5} git status                  ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} ga     ${g4}-->${g5} git add .                   ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} gl     ${g4}-->${g5} git log --oneline           ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} gc     ${g4}-->${g5} git commit -m               ${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} gp     ${g4}-->${g5} git push origin main        ${g1}|${e}"
echo -e "${g1}|           |                                        |${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} gca    ${g4}-->${g5} git commit -m 'Some Updates'${g1}|${e}"
echo -e "${g1}|${g2}           ${g1}|${g3} gauto  ${g4}-->${g5} git add & commit & push     ${g1}|${e}" 
echo -e "${g1}+-----------+----------------------------------------+${e}"

