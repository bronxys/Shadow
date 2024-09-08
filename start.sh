#!/bin/bash
GREEN='\033[1;32m'
# Exibe uma mensagem informando que o bot está rodando
echo "${GREEN}Shadow Bot - Este script contém auto reconexão ativada para prevenção de quedas...\n"
    
# Executa o comando node
node connect.js --code sim
    
# Pausa por 1 segundo antes de reiniciar
sleep 1
    
# Mensagem informando que o programa foi fechado e será reiniciado
echo "${GREEN}\nPrograma fechado! Iniciando bot novamente...\n"