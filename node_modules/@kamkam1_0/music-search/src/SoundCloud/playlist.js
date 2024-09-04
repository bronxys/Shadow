const Playlist = require("../Classes/playlist")
const analyseAlbumAndPlaylist = require("./treatAlbum&Playlist")
/**
 * @param {string} token
 * @param {string} Arg 
 * @returns {Promise<Playlist|Error>}
 */
module.exports = async (token, datas) => {
    return new Promise(async (resolve, reject) => {
        analyseAlbumAndPlaylist(token, datas, "playlist")
        .then(e => resolve(e))
        .catch(e => reject(e))
    })
}