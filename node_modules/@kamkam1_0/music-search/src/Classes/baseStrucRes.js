const base = require("./baseStrucAl")

class BaseResolve extends base{
    constructor(name){
        super(name)
    }

    /**
     * 
     * @param {string} Arg 
     * @returns {Playlist|Album|Track}
     */
    resolve(Arg){
        return this._requestMaker("resolve", Arg)
    }
}

module.exports = BaseResolve