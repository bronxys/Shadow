const Error = require("../Classes/error")
const fetch = require("node-fetch");
const streamResolver = require("./resolve")
const validate = require("./validate")
/**
 * 
 * @param {string} token 
 * @param {string} stream_url 
 * @param {object} [format]
 * @param {boolean} [withDetails]
 * @returns {string|Error}
 */
module.exports.link = async (token, stream_url, format, withDetails) => {
    return new Promise(async (resolve, reject) => {
        if(!stream_url) return reject(new Error("Incorrect URL", 2))
        if(!validate(stream_url))  return reject(new Error("Incorrect URL", 2))
        streamResolver(token, stream_url)
        .then(async song => {
            if(song.type !== "track") return reject(new Error("The link does not redirect to a song but to a "+song.type, 3))
            let datas = song.datas
            if(!datas.media || !datas.media.transcodings) return reject(new Error("No stream link available for this song", 4))

            if(!format) format = false
            else if(typeof format !== "object" || typeof format.codec !== "string" || typeof format.type !== "string") format = false
            else if(!["hls", "progressive"].includes(format.protocol)) format.protocol = "progressive"
            let streamInfos;
            if(format) streamInfos = datas.media.transcodings.find(transcode => transcode.format.mime_type === format.type && transcode.format.protocol === format.protocol && transcode.preset.startWith(format.codec))
            if(!streamInfos)  streamInfos = datas.media.transcodings[0]

            if(!streamInfos || typeof streamInfos.url !== "string") return reject(new Error("No stream link available for this song", 4))
            if(typeof withDetails !== "boolean") withDetails = false

            let stream;
            try {
                const received = await fetch(`${streamInfos.url}?client_id=${token}`);
                stream = await received.json();
            } catch (err) {
                return reject(err)
            }

            if(!stream || !stream.url) return reject(new Error("The stream could not be resolved", 16))
            
            if(withDetails){
                streamInfos.url = stream.url
                return resolve(streamInfos)
            }

            return resolve(stream.url)
        })
        .catch(err => reject(err))
    })
}