const Track = require("../Classes/track")
const Error = require("../Classes/error")
const analyser = require("./analyseDatas")
const validate = require("./validate")
const resolver = require("./resolve")

/**
 * 
 * @param {string} Arg 
 * @returns {Promise<Track|Error>}
 */
module.exports = async (token, Arg) => {
    return new Promise(async (resolve, reject) => {
        if(Arg && typeof Arg === "string" && validate(Arg)){
            let resolved = await resolver(token, Arg).catch(err => reject(err))
            if(!resolved) return
            if(resolved.type !== "track") return reject(new Error("Incorrect URL", 2))
            Arg = resolved.datas
        }
        if(!Arg || typeof Arg !== "object") return reject(new Error("No valid argument given", 1))
        return resolve(new Track(analyser(Arg)))
    })
}