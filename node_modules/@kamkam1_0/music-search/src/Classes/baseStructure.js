const Playlist = require("./playlist")
const Track = require("./track")
const Error = require("./error")
const fs = require("node:fs")
const os = require('node:os')

let osSpace = "/"
if(os.platform() === "win32")  osSpace = "\\"

class Base{
    constructor(name){
        this.type = name

        this.available = ["track", "resolve", "playlist", "album", "search", "validate", "stream"]
        .filter(element => fs.readdirSync(require.resolve(`../${this.type}/structure`).split(osSpace + "structure")[0]).find(dispo => dispo.split(".")[0] === element))
    }

    /**
     * 
     * @param {string} Arg 
     * @returns {Track}
     */
    getTrack(Arg, state){
        return this._requestMaker("track", Arg, state)
    }

    /**
     * 
     * @param {string} Arg 
     * @returns {Playlist}
     */
    getPlaylist(Arg){
        return this._requestMaker("playlist", Arg)
    }

    /**
     * 
     * @param {string} type 
     * @param {string} Arg 
     * @returns {Track|Playlist|Album}
     */
    get(type, Arg){
        return new Promise(async (resolve, reject) => {
            if(!this.available.includes(type)) return reject(new Error("Invalid type of research", 15))
            this._requestMaker(type, Arg)
            .catch(err => reject(err))
            .then(datas => resolve(datas))
        })
    }

    /**
    * 
    * @param {string} url 
    * @param {string} [filter]
    * @returns {boolean}
    */
    validateURL(url, filter){
        return require(`../${this.type}/validate.js`)(url, filter)
    }

    /**
     * @private
     * @param {string} type 
     * @param {string} arg 
     * @param {boolean} state 
     * @returns 
     */
    _requestMaker(type, arg, state){
        return new Promise(async (resolve, reject) => {
            this._getToken()
            .then(() => {
                if(this._token) require(`../${this.type}/${type}`)(this._token, arg, state).catch(err => reject(err)).then(datas => resolve(datas))
                else require(`../${this.type}/${type}`)(arg, state).catch(err => reject(err)).then(datas => resolve(datas))
            })
            .catch(err => reject(err))
        })
    }

    /**
     * 
     * @returns {undefined}
     */
    _getToken(){
        return new Promise(async (resolve, reject) => {
            resolve()
        })
    }
}

module.exports = Base