const Error = require("../Classes/error")
const track = require("./track")
const validate = require("./validate")

/**
 * @param {string} stream_url 
 * @param {object} [format]
 * @param {boolean} [withDetails]
 * @returns {object|string|object[]|Error}
 */
module.exports.link = async (stream_url, format, withDetails) => {
    return new Promise(async (resolve, reject) => {
        if(!stream_url) return reject(new Error("Incorrect URL", 2))
        if(!format) format = false
        else if(typeof format !== "object" || typeof format.codec !== "string" || typeof format.type !== "string") format = false
        if(typeof withDetails !== "boolean") withDetails = false
        if(!validate(stream_url))  return reject(new Error("Incorrect URL", 2))
        track(stream_url, {platform: "youtube", link: "stream"})
        .then(links => {
            if(!format) return resolve(links)
            let link = links.find(e => e.mimeType.startsWith(format.type) && e.mimeType.includes(format.codec))
            if(!link) return reject(new Error("No stream link found", 3))
            if(withDetails) return resolve(link)
            return resolve(link.url)
        })
        .catch(err => reject(err))
    })
}