#!bin/bash
GREEN='\033[1;32m'
while : 
do
printf "${GREEN}︎Shadow Bot - Esta script contém auto reconexão ativada para prevenção de quedas...\n"
node connect.js --code
sleep 1
printf "${GREEN}\nPrograma fechado! Iniciando bot novamente...\n"
done