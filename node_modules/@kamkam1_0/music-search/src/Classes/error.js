class Error{
    constructor(text, number){
        this.state = false
        this.error = text
        this.code = number
    }
}

module.exports = Error