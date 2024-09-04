const base = require("../Classes/baseStrucAl")
const fetch = require("node-fetch")
const searchSpotify = require('./search')

class Spotify extends base{
    constructor(client_id, client_secret){
        super("Spotify")
        /**
         * @private
         * @type {string}
         */
        this._id = client_id
        /**
         * @private
         * @type {string}
         */
        this._secret = client_secret
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
     * 
     * @param {string} Arg 
     * @returns {object[]}
     */
    search(Arg){
        return new Promise(async (resolve, reject) => {
            this._getToken()
            .then(() => {
                searchSpotify(this._token, Arg)
                .catch(err => reject(err) )
                .then(datas => resolve(datas))
            })
            .catch(err => reject(err))
        })
    }

    /**
     * @private
     * @returns {string}
     */
    _getToken(){
        return new Promise(async (resolve, reject) => {
            if((Date.now() - Number(this._timestamp)) >= (1000 * 60 * 60)){
                
                const encode = new Buffer.from(`${this._id}:${this._secret}`).toString("base64")
                const opts = {
                    body: 'grant_type=client_credentials',
                    headers: {
                        'Authorization': `Basic ${encode}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: "POST",
                    json: true
                }
                
                let datas;
                try {
                    datas = await fetch("https://accounts.spotify.com/api/token", opts)
                    datas = await datas.json()
                } catch(err) {
                    return reject(err)
                }
                
                let token = datas.access_token

                if(token){
                    this._token = token
                    this._timestamp = Date.now()
                    return resolve(token)
                }else return reject(datas.error_description)
                
            }
            
            return resolve(this._token)
        })
    }
}

module.exports = Spotify