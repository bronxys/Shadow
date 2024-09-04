const base = require("../Classes/baseStrucRes")
const fetch = require("node-fetch")
const streamResolver = require("./stream")
const searchSoundcloud = require('./search')
const streamDownloader = require('../utils/stream')

class SoundCloud extends base{
    constructor(){
        super("SoundCloud")
        /**
         * @private
         * @type {string}
         */
        this._token = null
        /**
         * @private
         * @type {string}
         */
        this._timestamp = null
    }

    /**
     * @private
     * @returns {string}
     */
    _getToken(){
        return new Promise(async (resolve, reject) => {
            if((Date.now() - Number(this._timestamp)) >= (1000 * 60 * 60)){
                fetch("https://soundcloud.com/").then(async res => {
                    res = await res.text()
                    res = String(res).split('</script>')
                    res = res.filter(r => r.startsWith('\n<script crossorigin src='))
                    res = res[res.length - 1].split('src="')[1].split('">')[0]
                    fetch(res).then(async datas => {
                        datas = await datas.text()
                        datas = datas.split(',client_id:"')[1]
                        datas = datas.split('"')[0]
                        this._token = datas
                        this._timestamp = Date.now()
                        return resolve(this._token)
                    }).catch(() => {})
                }).catch(() => {})
                
            }else return resolve(this._token)
        })
    }

    /**
     * @param {string} link
     * @param {object} [format]
     * @param {string} [format.type]
     * @param {string} [format.codec]
     * @param {boolean} [withDetails]
     * @returns {string|object|Error}
     */
    async streamLink(link, format, withDetails){
        return new Promise(async (resolve, reject) => {
            this._getToken()
            .then(() => {
                streamResolver.link(this._token, link, format, withDetails)
                .catch(err => reject(err) )
                .then(datas => resolve(datas))
            })
            .catch(err => reject(err))
        })
    }
    
    /**
     * 
     * @param {string} Arg 
     * @returns {object[]}
     */
    search(Arg){
        return new Promise(async (resolve, reject) => {
            this._getToken()
            .then(() => {
                searchSoundcloud(this._token, Arg)
                .catch(err => reject(err) )
                .then(datas => resolve(datas))
            })
            .catch(err => reject(err))
        })
    }

    /**
     * @param {string} link
     * @returns {Buffer}
     */
    async stream(link){
        return new Promise(async (resolve, reject) => {
            return resolve('Function not handled yet')
            streamDownloader(link)
            .catch(err => reject(err) )
            .then(datas => resolve(datas))
        })
    }
}

module.exports = SoundCloud