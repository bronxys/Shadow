const Track = require("../Classes/track")
const Album = require("../Classes/album")
const Playlist = require("../Classes/playlist")
const Error = require("../Classes/error")
const fetch = require("node-fetch")
const analyser = require("./analyseDatas")
const validate = require("./validate")
const resolver = require("./resolve")
/**
 * @param {string} token
 * @param {string} Arg 
 * @returns {Promise<Album|Playlist|Error>}
 */
module.exports = async (token, datas, type) => {
    return new Promise(async (resolve, reject) => {
        if(datas && typeof datas === "string" && validate(datas)){
            let resolved = await resolver(token, datas).catch(err => reject(err))
            if(!resolved) return
            if(resolved.type !== "playlist") return reject(new Error("Incorrect URL", 2))
            datas = resolved.datas
        }
        if(!datas || typeof datas !== "object") return reject(new Error("No valid argument given", 1))
        let res = datas.tracks.filter(track => track.title && track.media)

        if (res.length) {
            res = res.map(track =>  new Track({...analyser(track), token}))
        }

        let to_search = datas.tracks.filter(track => !track.title || !track.media)

        if(to_search.length){
            if (to_search.length > 50) {
                to_search = to_search.map(track => track.id)
                let allIds = []
                while(to_search.length > 50) {
                    allIds.push(to_search.slice(0, 49))
                    to_search = to_search.slice(49, to_search.length - 1)
                }
                allIds.push(to_search)
                let jsonRequest;
                try {
                    let requests = await Promise.all(allIds.map(ids => fetch(`https://api-v2.soundcloud.com/tracks?ids=${ids.toString()}&client_id=${token}`)))
                    jsonRequest = await Promise.all(requests.map(request => request.json()))
                } catch {}
                if (jsonRequest) {
                    res.push(...jsonRequest.flat().map(track =>  new Track({...analyser(track), token})))
                }
            } else {
                let restmusic;
                try {
                    restmusic = await fetch(`https://api-v2.soundcloud.com/tracks?ids=${to_search.map(track => track.id).slice(0, 50).toString()}&client_id=${token}`)
                    restmusic = await restmusic.json()
                } catch{}
                if (restmusic) {
                    res.push(...restmusic.map(track =>  new Track({...analyser(track), token})))
                }
            }
        }
        
        let result = {
            list: {
                title: datas.permalink,
                thumbnail: datas.artwork_url,
                channel_name: datas.user.full_name,
                channel_url: `https://soundcloud.com/${datas.user.permalink}`,
                url: datas.permalink_url,
                type: datas.kind
            },
            songs: res
        }
        let resultReturn = type === "Album" ? new Album(result) : new Playlist(result)
        return resolve(resultReturn)
    })
}