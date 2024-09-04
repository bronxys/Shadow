const Track = require("../Classes/track")
const Error = require("../Classes/error")
const fetch = require("node-fetch")
const validate = require("./validate")

/**
 * @param {string} token 
 * @param {string} Arg 
 * @param {boolean} state 
 * @returns {Promise<Track|Error>}
 */
module.exports = async (token, Arg, state) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(!validate(Arg, "track")) return reject(new Error("Incorrect URL", 2))
        let base = Arg.split("track/")[1]
        let datas;
        try {
            datas = await fetch(`https://api.spotify.com/v1/tracks/${base.includes("?") ? base.split("?")[0]: base}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            datas = await datas.json()
        } catch(err) {
            return reject(err)
        }
        
        if(datas.error?.status === 404) return reject(new Error("Could not find the track", 9))

        let title = datas.name
        let url = datas.external_urls.spotify
        let time = Math.round(datas.duration_ms / 1000)
        let thumbnail = null
        let artist_name = datas.artists[0].name
        let artist_url = datas.artists[0].external_urls.spotify
        let track = new Track({title, url, time, thumbnail, artist_name, artist_url})
        if(!state) return resolve(track)
        track.convertYTB()
        .then(e => resolve(e))
        .reject(e => reject(e))
    })
}