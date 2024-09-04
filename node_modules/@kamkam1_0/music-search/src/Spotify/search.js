const fetch = require("node-fetch")
const Error = require("../Classes/error")
const Track = require("../Classes/track")

module.exports = async (token, searchArg) => {
    return new Promise(async (resolve, reject) => {
        if (typeof searchArg !== 'string') {
            return reject(new Error("No valid argument given", 1))
        } 

        let requestData;
        try {
            let request = await fetch(`https://api.spotify.com/v1/search?q=${searchArg}&type=track&limit=25`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            requestData = await request.json()
        } catch(err) {
            return reject(err)
        }

        if (typeof requestData !== 'object') {
            return reject(new Error("Cannot resolve this search", 15))
        }

        if (!requestData?.tracks?.items) {
            return reject(new Error("Cannot resolve this search", 15))
        }

        if (!requestData.tracks.items.length) {
            return resolve([])
        }

        return resolve(requestData.tracks.items.map(songData => {
            let title = songData.name
            let url = songData.external_urls.spotify
            let time = Math.round(songData.duration_ms / 1000)
            let thumbnail = null
            let artist_name = songData.artists[0].name
            let artist_url = songData.artists[0].external_urls.spotify

            return new Track({title, url, time, thumbnail, artist_name, artist_url})
        }))
    })
}