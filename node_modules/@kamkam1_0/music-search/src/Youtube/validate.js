/**
* 
* @param {string} url 
* @param {string} [filter]
* @returns {boolean}
*/
module.exports = (url, filter) => {
    if(typeof url !== "string" || !url.includes("https://") || (filter && !["track", "playlist"].includes(filter))) return false
    if(url.startsWith("https://www.")) url = url.split("https://www.")[1]
    else if(url.startsWith("https://")) url = url.split("https://")[1]
    if(!url) return false
    
    if(!url.includes("youtube") && !url.includes("youtu.be")) return false

    if(url.includes("youtu.be")){
        if(!url.startsWith("youtu.be/")) return false
        url = url.split("youtu.be/")[1]

        if(!url || url.includes('/') || url.includes("?")) return false

        if(filter && filter !== "track") return false
        
        return true
    }

    if(!url.startsWith("youtube.com/")) return false

    url = url.split("youtube.com/")[1]
    if(!url) return false

    if(!url.includes("?")) return false

    url = url.split("?")

    if(url.length < 2) return false

    if(!["playlist", "watch"].includes(url[0])) return false

    if(filter === "playlist" && (url[0] !== "playlist" && !url[1].includes("list="))) return false
    else if(filter === "track" && (url[0] !== "watch" || url[1].includes("list="))) return false

    if(url[1].includes("/") || !url[1].includes("=")) return false

    return true
}