const got = require("got")
const axios = require("axios")

async function tikmate(url) {
return new Promise((resolve, reject) => {
got.post('https://api.tikmate.app/api/lookup', {
headers: {accept: '*/*', 'accept-language': 'en-US,en;q=0.9', 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', origin: 'https://tikmate.app', referer: 'https://tikmate.app/', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'},form: {url}
}).json().then(async(data) => {
try {
const res = {author: {username: `@${data.author_id}`, nickname: data.author_name, foto_de_perfil: data.author_avatar }, video: {noWatermark: `https://tikmate.app/download/${data.token}/${data.id}.mp4`, noWatermark_HD: `https://tikmate.app/download/${data.token}/${data.id}.mp4?hd=1`}
};
return resolve(res)
} catch (e) {
return resolve({message: "Erro ao executar o scraper! Por favor, entre em contato com o adminstrador.", status: false})
}
})
})
}

function tiklydown(url) {
return new Promise((resolve, reject) => {
if(!url) return reject(new Error("a entrada do URL é obrigatória."));
axios.get("https://api.tiklydown.link/api/download", { params: { url } })
.then((b) => resolve(b.data)).catch(reject);
});
}
  
module.exports = { tikmate, tiklydown }