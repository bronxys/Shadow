const Track = require("../Classes/track")
const Error = require("../Classes/error")
const fetch = require("node-fetch")

/**
 * 
 * @param {string} Arg 
 * @returns {Promise<object[]|Error>}
 */
module.exports = async (Arg) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        let datas;
        try {
            datas = await fetch(`https://www.youtube.com/results?search_query=${Arg}&sp=EgIQAQ%253D%253D`, {
                headers: {
                    'accept-language': 'en-US,en;q=0.9',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
                }
            })
            
            datas = await datas.text()
        } catch(err) {
            return reject(err)
        }
        
        const data = datas
            .split('var ytInitialData = ')?.[1]
            ?.split(';</script>')[0]
            ?.split(/;\s*(var|const|let)/)[0];

        if(!data) return reject(new Error("Could not find videos", 4))

        try{
            var json_data = JSON.parse(data);
        }catch(err){
            return reject(new Error("Could not find videos", 4))
        }

        let details = json_data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
        
            
        if(!details || !details[0])  return reject(new Error("Could not find videos", 4))
        
        details = details.filter(c => c.videoRenderer)
        
        if(!details[0])  return reject(new Error("Could not find videos", 4))
        
        details = details.filter(song => song.videoRenderer.lengthText?.simpleText).splice(0, 25)
        
        details = details.map(song => {
            if(song) song = song.videoRenderer; 
            if(song) return new Track({title: song.title.runs[0].text, url: `https://www.youtube.com/watch?v=${song.videoId}`, time: Number(`${(Number(song.lengthText.simpleText.split(":")[0]) * 60) + Number(song.lengthText.simpleText.split(":")[1])}`), thumbnail: song.thumbnail.thumbnails[0].url, artist_name: song.ownerText.runs[0].text, artist_url: `https://www.youtube.com/channel/${song.ownerText.runs[0].navigationEndpoint.browseEndpoint.browseId}`})
            return undefined
        }).filter(Boolean)
        
        if(!details[0]) return reject(new Error("Could not find videos", 4))
        return resolve(details)
    })
}