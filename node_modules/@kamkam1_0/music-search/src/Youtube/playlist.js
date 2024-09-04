const Track = require("../Classes/track")
const Playlist = require("../Classes/playlist")
const Error = require("../Classes/error")
const validate = require('./validate')
const fetch = require("node-fetch")

/**
 * 
 * @param {string} Arg 
 * @returns {Promise<Playlist|Error>}
 */
module.exports = async (Arg) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(!validate(Arg, "playlist")) return reject(new Error("Incorrect URL", 2))
        let ID = Arg.split("list=")[1]
        if(!ID) return reject(new Error("Could not find the ID of the playlist", 3))
        ID.split("&")[0]
        let datas;
        try {
            datas = await fetch(`https://www.youtube.com/playlist?list=${ID}`, {
                headers: {
                    'accept-language': 'en-US,en-IN;q=0.9,en;q=0.8,hi;q=0.7',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
                }
            })
            datas = await datas.text()
        } catch(err) {
            return reject(err)
        }
        
        if (datas.indexOf('Our systems have detected unusual traffic from your computer network.') !== -1) return reject(new Error("Error interacting with youtube", 6))
        
        const first_datas = JSON.parse(datas.split('var ytInitialData = ')[1].split(';</script>')[0]);
        
        if(!first_datas.sidebar) return reject(new Error("Could not find the plyalist", 7))
        
        const playlistDetails = JSON.parse(datas.split('{"playlistSidebarRenderer":')[1].split('}};</script>')[0]).items
        
        let rawVideos = JSON.parse(`${datas.split('{"playlistVideoListRenderer":{"contents":')[1].split('}],"playlistId"')[0]}}]`);
        
        let songs = rawVideos
        .map(music =>{
            music = music.playlistVideoRenderer
            if (!music || !music.lengthSeconds) {
                return undefined
            }

            let title = music.title.runs[0].text
            let url = `https://www.youtube.com/watch?v=${music.videoId}`
            let time = Number(music.lengthSeconds)
            let thumbnail = music.thumbnail.thumbnails[0].url
            let artist_name = music.shortBylineText.runs[0].text
            let artist_url = `https://www.youtube.com/channel/${music.shortBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId}`
            return new Track({title, url, time, thumbnail, artist_name, artist_url})
        })
        .filter(Boolean)

        let result = {
            list: {
                title: playlistDetails[0].playlistSidebarPrimaryInfoRenderer.title.runs[0].text,
                thumbnail: playlistDetails[0].playlistSidebarPrimaryInfoRenderer.thumbnailRenderer.playlistVideoThumbnailRenderer.thumbnail.thumbnails[0].url,
                channel_name: playlistDetails[1].playlistSidebarSecondaryInfoRenderer.videoOwner.videoOwnerRenderer.title.runs[0].text,
                channel_url: `https://www.youtube.com/channel/${playlistDetails[1].playlistSidebarSecondaryInfoRenderer.videoOwner.videoOwnerRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId}`,
                url: `https://www.youtube.com/playlist?list=${playlistDetails[0].playlistSidebarPrimaryInfoRenderer.title.runs[0].navigationEndpoint.watchEndpoint.playlistId}`
            },
            songs
        }
        
        return resolve(new Playlist(result))
    })
}