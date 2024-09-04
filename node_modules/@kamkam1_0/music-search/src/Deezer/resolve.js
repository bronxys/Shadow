const Error = require("../Classes/error")
const validate = require("./validate")
const fetch = require("node-fetch")
/**
 * @param {string} Arg 
 * @returns {Promise<Track|Album|Playlist|Error>}
 */
module.exports = async (Arg) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(!validate(Arg)) return reject(new Error("Incorrect URL to resolve", 2))

        let first_data;
        try {
            first_data = await fetch(Arg)
            first_data = await first_data.text()
        } catch (err) {
            return reject(err)
        }

        first_data = String(first_data)

        first_data = String(first_data.split('{"DATA":{')[1])


        if(first_data.startsWith('"SNG_ID"')){
            first_data = String(first_data.slice(10))
            if(!first_data) return reject(new Error("Could not resolve the URL", 12))
            let ID = first_data.split('"')[0]
            if(!ID) return reject(new Error("Could not resolve the URL", 12))
            return resolve({id: ID, type: "track", link: `https://www.deezer.com/fr/track/${ID}`})
        }else if(first_data.startsWith('"ALB_ID"')){
            first_data = String(first_data.slice(10))
            if(!first_data) return reject(new Error("Could not resolve the URL", 12))
            let ID = first_data.split('"')[0]
            if(!ID) return reject(new Error("Could not resolve the URL", 12))
            return resolve({id: ID, type: "album", link: `https://www.deezer.com/fr/album/${ID}`})
        }else if(first_data.startsWith('"PLAYLIST_ID"')){
            first_data = String(first_data.slice(15))
            if(!first_data) return reject(new Error("Could not resolve the URL", 12))
            let ID = first_data.split('"')[0]
            if(!ID) return reject(new Error("Could not resolve the URL", 12))
            return resolve({id: ID, type: "playlist", link: `https://www.deezer.com/fr/playlist/${ID}`})
        }else return reject(new Error("Could not resolve the URL", 12))
    })
}