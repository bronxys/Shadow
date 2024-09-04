/**
 * @param {string} url 
 * @param {string} [filter]
 * @returns {boolean|null}
 */
module.exports = (url, filter) => {
    if(typeof url !== "string" || !url.includes("https://") || (filter && !["track", "album", "playlist"].includes(filter))) return false
    if(filter && filter !== "track") return null
    if(url.startsWith("https://www.")) url = url.split("https://www.")[1]
    else if(url.startsWith("https://")) url = url.split("https://")[1]
    if(!url) return false

    if(!url.startsWith("soundcloud.com/") && !url.startsWith("on.soundcloud.com/")) return false

    if(url.startsWith("on.soundcloud.com/")){

        if(filter) return null
        
        url = url.split("on.soundcloud.com/")[1]
        
        if(!url) return false

        url = url.split("")
        let compare = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        url = url.filter(caracter => caracter.toLowerCase() === caracter.toUpperCase() && !compare.includes(caracter))
        if(url.length) return false

        return true
    }
    
    url = url.split("soundcloud.com/")[1]
    if(!url) return false

    if(url.includes("secret-service-")){
        if(!url.startsWith("secret-service-")) return false
        url = url.split("secret-service-")[1]

        if(!url) return false

        url = url.split("/")
    
        if(url.length < 2) return false
    
        if(isNaN(url[0]) || !url[0].length) return false
    }else{
        url = url.split("/")
    
        if(url.length < 2) return false
    
        if(!isNaN(url[0])) return false
    }

    if (url[1].includes('sets')) {
        if(filter && url[1].includes("sets")) return false
    
        if(!url[1].includes("sets") && !url[1].includes("?")) return false
    
        else if (url[1].includes("sets") && (!url[2] || !url[2].includes("?"))) return false
    } else if (url.length !== 2) {
        return false
    }

    return true
}