const Base = require("./base")

class Track extends Base{
    constructor(song){
        super(song)
        this.title = song.title
        this.url = song.url
        this.time = song.time
        this.artist_name = song.artist_name
        this.artist_url = song.artist_url
        this.thumbnail = song.thumbnail
        this.type = "Track"
    }

    /**
     * @returns {Track}
     */
    convertYTB(){
        return new Promise(async (resolve, reject) => {
            if(this.plateform === "Youtube") return resolve(this)
            else{
                require("../Youtube/search")(`${this.title} ${this.artist_name}`)
                .catch(err => reject(err))
                .then(datas => resolve(datas[0]))
            }
        })
    }
}

module.exports = Track