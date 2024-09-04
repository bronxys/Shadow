const Album = require("../Classes/album")
const analyseAlbumAndPlaylist = require("./treatAlbum&Playlist")
/**
 * @param {string} token
 * @param {string} Arg 
 * @returns {Promise<Album|Error>}
 */
module.exports = async (token, datas) => {
    return new Promise(async (resolve, reject) => {
        analyseAlbumAndPlaylist(token, datas, "album")
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
}