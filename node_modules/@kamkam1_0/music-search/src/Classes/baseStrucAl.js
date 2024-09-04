const base = require("./baseStructure")

class BaseAlbum extends base{
    constructor(name){
        super(name)
    }

    /**
     * 
     * @param {string} Arg 
     * @returns {Album}
     */
    getAlbum(Arg){
        return this._requestMaker("album", Arg)
    }
}

module.exports = BaseAlbum