const base = require("../Classes/baseStructure")
const searchYoutube = require("./search")
const streamResolver = require('./stream')
const streamDownloader = require('../utils/stream')

class Youtube extends base{
    constructor(){
        super("Youtube")
    }

    /**
     * 
     * @param {string} Arg 
     * @returns {object[]}
     */
    search(Arg){
        return searchYoutube(Arg)
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
        return streamResolver.link(link, format, withDetails)
    }

    /**
     * @param {string} link
     * @returns {Buffer}
     */
    async stream(link){
        return streamDownloader(link)
    }
}

module.exports = Youtube