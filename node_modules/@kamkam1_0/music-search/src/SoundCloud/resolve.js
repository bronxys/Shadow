const Track = require("../Classes/track")
const Album = require("../Classes/album")
const Playlist = require("../Classes/playlist")
const Error = require("../Classes/error")
const fetch = require("node-fetch")
const validate = require("./validate")

/**
 * @param {string} token
 * @param {string} Arg 
 * @returns {Promise<Track|Album|Playlist|Error>}
 */
module.exports = async (token, Arg) => {
    return new Promise(async (resolve, reject) => {

        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(!validate(Arg)) return reject(new Error("Incorrect URL", 2))
        let datas;

        if(Arg.includes("on.soundcloud.com")){
            try {
                datas = await fetch(Arg)
                datas = await datas.text()
            } catch (err) {
                return reject(err)
            }
            let titleFoundOrNot = datas.split("<title>")?.[1]?.split("</title>")?.[0]
            if(!titleFoundOrNot) return reject(new Error("Cannot resolve this URL", 14))
            titleFoundOrNot = titleFoundOrNot.toLowerCase().replaceAll(" ", "")
            if(titleFoundOrNot.includes("linknotfound")) return reject(new Error("Cannot resolve this URL", 14))
            if(!datas.includes('[{"hydratable"')) return reject(new Error("Cannot resolve this URL", 14))
            datas = '[{"hydratable"'+datas.split('[{"hydratable"')?.[1]
            if(!datas || !datas.includes(";</script>")) return reject(new Error("Cannot resolve this URL", 14))
            datas = datas.split(";</script>")[0]?.trim()
            if(!datas) return reject(new Error("Cannot resolve this URL", 14))
            datas = datas.split('{"hydratable"').filter(data => data.includes("}")).map(data => {
                data = '{"hydratable"'+data
                if(data.endsWith(",") || data.endsWith("]")) data = data.slice(0, -1)
                return JSON.parse(data).data
            })
            if(!datas || !datas[0]) return reject(new Error("Cannot resolve this URL", 14))
            datas = datas.find(data => ["track", "playlist", "album"].includes(data.kind))
            if(!datas) return reject(new Error("Incorrect URL", 2))
            return resolve({type: datas.kind, datas})
        }

        try {
            datas = await fetch(`https://api-v2.soundcloud.com/resolve?url=${encodeURI(Arg)}&client_id=${token}`)
            datas = await datas.json()
        } catch (err) {
            return reject(err)
        }

        if(["playlist", "track", "album"].includes(datas.kind)) return resolve({type: datas.kind, datas})
        return reject(new Error("Cannot resolve this URL", 14))
    })
}