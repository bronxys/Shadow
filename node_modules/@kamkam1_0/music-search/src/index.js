/**
 * @returns {string}
 */
exports.version = require("../package.json").version
const Youtube = require("./Youtube/structure")
const Spotify = require("./Spotify/structure")
const SoundCloud = require("./SoundCloud/structure")
const Deezer = require("./Deezer/structure")
/**
 * @returns {Youtube}
 */
exports.Youtube = Youtube
/**
 * @returns {Spotify}
 */
exports.Spotify = Spotify
/**
 * @returns {SoundCloud}
 */
exports.SoundCloud = SoundCloud
/**
 * @returns {Deezer}
 */
exports.Deezer = Deezer
/**
 * @returns {object}
 */
exports.eval = require('./utils/eval')