/**
 * 
 * @param {string} url 
 * @param {string} [filter]
 * @returns {boolean|null}
 */
module.exports = (url, filter) => {
    if(typeof url !== "string" || !url.includes("https://") || (filter && !["track", "album", "playlist"].includes(filter))) return false
    if(url.startsWith("https://www.")) url = url.split("https://www.")[1]
    else if(url.startsWith("https://")) url = url.split("https://")[1]
    if(!url) return false

    if(!url.startsWith("deezer")) return false
    
    url = url.split("deezer")[1]
    if(!url) return false

    if(url.startsWith(".page.link/")){
        url = url.split(".page.link/")[1]

        if(!url) return false

        url = url.split("")
        let compare = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        url = url.filter(caracter => caracter.toLowerCase() === caracter.toUpperCase() && !compare.includes(caracter))
        if(url.length) return false

        if(filter) return null
        return true
    }
    
    if(!url.startsWith(".com/")) return false

    url = url.split("/")
    url.shift()

    if(url.length !== 3) return false

    if(!isNaN(url[0]) || url[0].length >5) return false

    if(!["track", "album", 'playlist'].includes(url[1])) return false

    if(filter && url[1] !== filter) return false

    url = url [2]

    if(!url) return false

    if(url.includes("?")) url = url.split("?")[0]

    if(isNaN(url)) return false

    return true
}