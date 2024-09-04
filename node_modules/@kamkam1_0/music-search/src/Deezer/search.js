const fetch = require("node-fetch")
const Error = require("../Classes/error")
const Track = require("../Classes/track")

module.exports = async (searchArg) => {
    return new Promise(async (resolve, reject) => {
        if (typeof searchArg !== 'string') {
            return reject(new Error("No valid argument given", 1))
        } 

        let requestData;
        try {
            const request = await fetch(`https://api.deezer.com/search?q=track:"${searchArg}"&index:25`)
            requestData = await request.json()
        } catch (err) {
            return reject(err)
        }
        if (typeof requestData !== 'object') {
            return reject(new Error("Cannot resolve this search", 15))
        }

        if (!requestData.data.length) {
            return resolve([])
        }
        
        return resolve(requestData.data.map(songData => {
            let title = songData.title
            let url = songData.link
            let time = Number(songData.duration)
            let thumbnail = `https://e-cdns-images.dzcdn.net/images/cover/${songData.md5_image}/250x250-000000-80-0-0.jpg`
            let artist_name = songData.artist.name
            let artist_url = songData.artist.link
            return new Track({title, url, time, thumbnail, artist_name, artist_url})
        }))
    })
}