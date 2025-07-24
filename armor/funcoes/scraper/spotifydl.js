// Módulos (Usei também a documentação do "betabotz-tools" para fornecer o download) :
const axios = require("axios")
const Spotify = require('spotify-finder');

// Consumidor (Client Key e Client Secret são disponibilizados no Developers do Spotify) :
const client = new Spotify({consumer: {key: '271f6e790fb943cdb34679a4adcc34cc', secret: 'c009525564304209b7d8b705c28fd294'}});

function SpotifySearchDL(q) {
return new Promise((resolve, reject) => {
try {
client.search({q: q, type: 'track', limit: 1}).then(data => {
const track = data.tracks.items[0];
const artists = track.artists.map((artist) => ({name: artist.name, url: artist.external_urls.spotify}));
axios.get(`https://tools.betabotz.org/tools/spotify-search?q=${q}`).then((pSpotify) => {
axios.get(`https://tools.betabotz.org/tools/spotifydl?url=${pSpotify.data.result.data[0].url}`).then((spotifyDL) => {
resolve({trackName: track.name, albumName: track.album.name, artists: artists, explicit: track.explicit, duration: pSpotify.data.result.data[0].duration, preview: pSpotify.data.result.data[0].preview, popularity: pSpotify.data.result.data[0].popularity, link: pSpotify.data.result.data[0].url, release_data: track.album.release_date, archive: pSpotify.data.result.data[0].title+".mp3", size: spotifyDL.data.result.size, dl_link: spotifyDL.data.result.url})
})})})} catch(e) {reject(e)}})}

module.exports = { SpotifySearchDL }