const Playlist = require("../Classes/playlist")
const Track = require("../Classes/track")
const Error = require("../Classes/error")
const validate = require("./validate")
const fetch = require("node-fetch")
const resolver = require('./resolve')
/**
 * @param {string} Arg 
 * @returns {Promise<Playlist|Error>}
 */
module.exports = async (Arg) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(Arg.startsWith("https://deezer.page.link")) {
            let resolved = await resolver(Arg).catch(err => reject(err))
            Arg = resolved?.link
            if(!Arg) return
        }
        if(!validate(Arg, "playlist")) return reject(new Error("Incorrect URL", 2))

        let ID = Arg.split("/playlist/")[1]
        let datas;
        try {
            datas = await fetch(`https://api.deezer.com/playlist/${ID.includes("?") ? ID.split("?")[0]: ID}`)
            datas = await datas.json()
        } catch (err) {
            return reject(err)
        }

        if(datas.error?.type === "OAuthException" && datas.error?.code === 200) return reject(new Error("Could not find the playlist", 7))

        if(!datas || datas.error?.code === 800) return reject(new Error("Could not find the playlist", 7))

        let result = {
            list: {
                title: datas.title,
                thumbnail: `https://e-cdns-images.dzcdn.net/images/cover/${datas.md5_image}/250x250-000000-80-0-0.jpg`,
                channel_name: datas.creator.name,
                channel_url: `https://www.deezer.com/fr/${datas.creator.type}/${datas.creator.id}`,
                url: `https://www.deezer.com/fr/album/${datas.id}`
            },
            songs: datas.tracks.data.map(song => {
                let title = song.title
                let url = song.link
                let time = Number(song.duration)
                let thumbnail = `https://e-cdns-images.dzcdn.net/images/cover/${song.md5_image}/250x250-000000-80-0-0.jpg`
                let artist_name = song.artist.name
                let artist_url = `https://www.deezer.com/fr/artist/${song.artist.id}`
                return new Track({title, url, time, thumbnail, artist_name, artist_url})
            })
        }
        return resolve(new Playlist(result))
    })
}