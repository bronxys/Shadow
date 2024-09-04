const Track = require("../Classes/track")
const Error = require("../Classes/error")
const validate = require("./validate")
const fetch = require("node-fetch")
const resolver = require("./resolve")
/**
 * 
 * @param {string} Arg 
 * @returns {Promise<Track|Error>}
 */
module.exports = async (Arg, state) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(Arg.startsWith("https://deezer.page.link")) {
            let resolved = await resolver(Arg).catch(err => reject(err))
            Arg = resolved?.link
            if(!Arg) return
        }
        if(!validate(Arg, "track")) return reject(new Error("Incorrect URL", 2))

        let ID = Arg.split("/track/")[1]
        let datas;
        try {
            datas = await fetch(`https://api.deezer.com/track/${ID.includes("?") ? ID.split("?")[0]: ID}`)
            datas = await datas.json()
        } catch (err) {
            return reject(err)
        }

        if(!datas || datas.error?.code === 800) return reject(new Error("Could not find the track", 9))
        
        let title = datas.title
        let url = datas.link
        let time = Number(datas.duration)
        let thumbnail = `https://e-cdns-images.dzcdn.net/images/cover/${datas.md5_image}/250x250-000000-80-0-0.jpg`
        let artist_name = datas.artist.name
        let artist_url = datas.artist.link
        let track = new Track({title, url, time, thumbnail, artist_name, artist_url})
        if(!state) return resolve(track)
        track.convertYTB()
        .then(e => resolve(e))
        .reject(e => reject(e))
    })
}