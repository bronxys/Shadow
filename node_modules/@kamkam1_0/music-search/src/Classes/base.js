class base{
    constructor(datas){
        this.url = datas.list?.url || datas.url
        this.plateform = this.#getPlatform()
    }

    #getPlatform(){
        let platform;
        switch(true) {
            case(this.url.includes("youtube")):
                platform = "Youtube"
            break;
            case(this.url.includes("spotify")):
                platform = "Spotify"
            break;
            case(this.url.includes("soundcloud")):
                platform = "SoundCloud"
            break;
            case(this.url.includes("deezer")):
                platform = "Deezer"
            break;
        }
        return platform
    }
}

module.exports = base