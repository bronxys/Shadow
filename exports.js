/*
🚫 AVISO IMPORTANTE! 🚫

Olá! Eu sou o Vitu, criador do Shadow e venho, por meio desta mensagem, informar que a venda e o compartilhamento da Base/Cases do mesmo estão estritamente proibidas.
Esta medida visa garantir que as informações permaneçam confidenciais e utilizadas apenas para fins autorizados. Não gaste dinheiro atoa apenas para vazar o Bot, pois isso é tolice!

Peço a sua colaboração para respeitar esta diretriz e evitar qualquer tipo de infração. Agradeço pela compreensão e respeito ao meu trabalho.
Obs: Se você adquiriu a Base por meio de terceiros, esteja ciente de que você NÃO terá direito à suporte caso ocorra algum problema. Eu sei cada um que comprou comigo, então nem perca o seu tempo!
(¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.->ツ<¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.--.¸¸.·´¯`·.¸¸.·´¯)
ATENCIOSAMENTE: KAYSER/VITU-KJK
*/

const { 
'default': makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap, prepareWAMessageMedia } = require('@itsukichan/baileys');

// Módulos:
const { Boom }  = require('@hapi/boom');
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const PhoneNumber = require('awesome-phonenumber');
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const yts = require('yt-search');
const infoSystem = require('os')
const { x2 } = require('x2download')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();

// Hora:
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
const sendHours = (formato) => {moment.locale("pt")
return moment.tz('America/Sao_Paulo').format(formato)}

// Funções:
const { sendVideoAsSticker, sendImageAsSticker } = require('./armor/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./armor/sticker/rename.js');
const { arcloud } = require('./armor/js/arcc.js') 
const { addLimit, getLimit } = require('./armor/js/limit.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");
const { validmove, setGame } = require('./armor/tictactoe');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./armor/js/addcmd.js');
const { palavrasANA, quizanimais } = require('./armor/games/jogos.js');
const { garticArchives } = require('./armor/games/advinhar.js');
const { enigmaArchive } = require('./armor/games/enigma.js');
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('./armor/funcoes/functions.js'); // É necessário para algumas funções funcionar perfeitamente.
const { addVote, delVote } = require('./armor/js/vote');
const { infoClima } = require('./armor/funcoes/infoclima.js')
const { isFiltered, addFilter } = require('./armor/funcoes/functions.js');

// [JSON] - Funções Abaixo >>> :
const voting = JSON.parse(fs.readFileSync('./armor/funcoes/voting.json'));
const sotoy = JSON.parse(fs.readFileSync('./armor/funcoes/sotoy.json'));
const countMessage = JSON.parse(fs.readFileSync('./settings/media/countmsg.json'));
const comandos = JSON.parse(fs.readFileSync('./settings/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./database/usuarios/diario.json'));
const nescessario = JSON.parse(fs.readFileSync('./settings/nescessario.json'));
const premium = JSON.parse(fs.readFileSync('./settings/media/premium.json'));
const ban = JSON.parse(fs.readFileSync('./database/usuarios/banned.json'));
const muted = JSON.parse(fs.readFileSync('./database/usuarios/muted.json'))
const limitefll = JSON.parse(fs.readFileSync('./database/usuarios/flood.json'));
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha.json'));
const { randomCantadas } = require('./armor/js/cantadas.js');
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha2.json'));
const antispam = JSON.parse(fs.readFileSync('./settings/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./database/func/tabela/anotar.json"));
const setting = JSON.parse(fs.readFileSync('./settings/settings.json'));
const logoslink = JSON.parse(fs.readFileSync('./settings/logos.json'));
const black_ = JSON.parse(fs.readFileSync("./database/grupos/avisos.json"));

// Arquivos - JS - Menus / Informações:
const { linguagem, mess, inform } = require('./settings/lib');
const { tabela } = require('./armor/js/tabela.js');
const { conselhob } = require('./armor/js/conselhob.js');
const { fatos } = require('./armor/js/fatos.js');
const { palavrasc } = require('./armor/js/conselhos.js');

// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// Template - Definição para o uso do botões:
if(!nescessario.botoes_) {
var EnvBotao = async (id, MR, yurizin, text1, desc1, X) => {
if(X.split("|")[1] != "0") {
yurizin.sendMessage(id, {image: {url: X.split("|")[1]}, caption: text1, mentions: [MR]})} else {yurizin.sendMessage(id, {text: text1, mentions: [MR]})}}
} else {
var EnvBotao = async(id, MR, yurizin, text1, desc1, X, TXT = [], vr) => {
var DMN_ = X.split("|")[0].charAt(0);
var QNT_B = DMN_ == "1" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}] : DMN_ == "2" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}] : DMN_ == "3" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}, {buttonId: TXT[4], buttonText: {displayText: TXT[5]}, type: 1}]: "";
if(X.split("|")[1] == "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
text: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
image: {url: X.split("|")[1]},
caption: text1, footer: desc1, buttons: QNT_B, 
headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && X.split("|")[0].includes("v")) {
var buttonMessage = {
video: {url: X.split("|")[1]},
caption: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [ME]}}
yurizin.sendMessage(id, buttonMessage, {quoted: vr}).catch(e => {
return console.log("Erro no botão, Tente novamente ou avalie o que pode está errando.. "+e);
})}}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos.`;
}

// FUNÇÃO DO BAILEYS PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};


// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (vitu, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
vitu.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};


const RSM_FUNC = async(vitu, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case '07:00:00': case '12:00:00': case '18:00:00': case '00:00:00':
exec("cd database/qr-code && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
}

const comand = (vitu, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {
}
}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}

module.exports = { PhoneNumber, P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, qrterminal, exec, spawn, yts, execSync, limitefll, moment, time, hora, date, infoSystem, RSM_FUNC, comand, addVote, delVote, getBuffer, convertSticker, fetchJson, fetchText, getBase64, createExif, addLimit, getLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, prepareWAMessageMedia, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner, banner2, banner3, temporizador, chyt, antispam, anotar, voting, sotoy, addVote, delVote, countMessage, comandos, daily, muted, nescessario, premium, ban, black_, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, linguagem, inform, mess, tabela, conselhob, fatos, palavrasc, recognize, colors, cheerio, NodeCache, kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, x2, arcloud, EmojiAPI, emoji, infoClima, os, garticArchives, enigmaArchive, randomCantadas, isFiltered, addFilter, sendHours }