const Base = require("./base")
class Album extends Base{
    constructor(datas){
        super(datas)
        this.title = datas.list.title
        this.thumbnail = datas.list.thumbnail
        this.channel_name = datas.list.channel_name
        this.channel_url = datas.list.channel_url
        this.songs = datas.songs
        this.type = "Album"
    }
}

module.exports = Album