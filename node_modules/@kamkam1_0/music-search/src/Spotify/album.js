const Track = require("../Classes/track")
const Album = require("../Classes/album")
const Error = require("../Classes/error")
const fetch = require("node-fetch")
const validate = require("./validate")

/**
 * @param {string} token
 * @param {string} Arg 
 * @returns {Promise<Album|Error>}
 */
module.exports = async (token, Arg) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(!validate(Arg, "album")) return reject(new Error("Incorrect URL", 2))
        let base = Arg.split("album/")[1]
        let datas;
        try {
            datas = await fetch(`https://api.spotify.com/v1/albums/${base.includes("?") ? base.split("?")[0]: base}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            datas = await datas.json()
        } catch(err) {
            return reject(err)
        }
        
        if(datas.error?.status === 404) return reject(new Error("Could not find the album", 11))

        let result = {
            list: {
                title: datas.name,
                thumbnail: datas.images[0].url,
                channel_name: datas.artists[0].name,
                channel_url: datas.artists[0].external_urls.spotify,
                url: datas.external_urls.spotify
            },
            songs: datas.tracks.items.map(song => new Track({title: song.name, url: song.external_urls.spotify, time: Math.round(song.duration_ms / 1000), thumbnail: null, artist_name: song.artists[0].name, artist_url: song.artists[0].external_urls.spotify}))
        }
        return resolve(new Album(result))
    })
}