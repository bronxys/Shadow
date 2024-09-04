const base = require("../Classes/baseStrucRes")
const searchDeezer = require('./search')

class Deezer extends base{
    constructor(){
        super('Deezer')
    }

    /**
     * 
     * @param {string} Arg 
     * @returns {object[]}
     */
    search(Arg){
        return searchDeezer(Arg)
    }
}

module.exports = Deezer