const Track = require("../Classes/track")
const Playlist = require("../Classes/playlist")
const Error = require("../Classes/error")
const fetch = require("node-fetch")
const validate = require("./validate")

/**
 * @param {string} token
 * @param {string} Arg 
 * @returns {Promise<Playlist|Error>}
 */
module.exports = async (token, Arg) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(!validate(Arg, "playlist")) return reject(new Error("Incorrect URL", 2))
        let base = Arg.split("playlist/")[1]
        let datas;
        try {
            datas = await fetch(`https://api.spotify.com/v1/playlists/${base.includes("?") ? base.split("?")[0]: base}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            datas = await datas.json()
        } catch(err) {
            return reject(err)
        }
        
        if(datas.error?.status === 404) return reject(new Error("Could not find the playlist", 7))
        
        let result = {
            list: {
                title: datas.name,
                thumbnail: datas.images[0].url,
                channel_name: datas.owner.display_name,
                channel_url: datas.owner.external_urls.spotify,
                url: datas.external_urls.spotify
            },
            songs: datas.tracks.items.filter(song => song.track !== null).map(song => {
                song = song.track
                if(song) return new Track({title: song.name, url: song.external_urls.spotify, time: Math.round(song.duration_ms / 1000), thumbnail: null, artist_name: song.artists[0].name, artist_url: song.artists[0].external_urls.spotify})
                return undefined
            }).filter(Boolean)
        }
        
        return resolve(new Playlist(result))
    })
}