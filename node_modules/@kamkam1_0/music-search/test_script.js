const moduleIndex = require('./src/index')

// Initiating all plateforms
const youtube = new moduleIndex.Youtube()
const soundcloud = new moduleIndex.SoundCloud()
const deezer = new moduleIndex.Deezer()
const spotify = new moduleIndex.Spotify('CLIENT_ID', 'CLIENT_SECRET')

// Youtube tests
console.log('Youtube tests')

console.log('availableNegativeTest: ' + youtube.available)
console.log()

let youtubeValidateURLPostiveTest = youtube.validateURL('https://www.youtube.com/watch?v=kJQP7kiw5Fk')
console.log('youtubeValidateURLPostiveTest: ' + youtubeValidateURLPostiveTest)

let youtubeValidateURLNegativeTest = youtube.validateURL('https://www.youtube.comsd5Fk')
console.log('youtubeValidateURLNegativeTest: ' + youtubeValidateURLNegativeTest)
console.log()

youtube.search('despacito')
.then(data => {
    console.log('searchPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('searchNegativeTest: failed')
    console.log(err)
    console.log()
})

youtube.getTrack('https://www.youtube.com/watch?v=kJQP7kiw5Fk')
.then(data => {
    console.log('getTrackPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getTrackNegativeTest: failed')
    console.log(err)
    console.log()
})

youtube.getPlaylist('https://www.youtube.com/playlist?list=PLxI6IWh7Z6bqIMMIzWyVMcgrfEj6K43i5')
.then(data => {
    console.log('getPlaylistPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getPlaylistNegativeTest: failed')
    console.log(err)
    console.log()
})

// Soundcloud tests
console.log('Soundcloud tests')

console.log('availableNegativeTest: ' + soundcloud.available)
console.log()

let soundcloudValidateURLPostiveTest = soundcloud.validateURL('https://soundcloud.com/luisfonsiofficial/despacito?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
console.log('soundcloudValidateURLPostiveTest: ' + soundcloudValidateURLPostiveTest)

let soundcloudValidateURLNegativeTest = soundcloud.validateURL('https://soundcloud.com/luisfonsioff')
console.log('soundcloudValidateURLNegativeTest: ' + soundcloudValidateURLNegativeTest)
console.log()

soundcloud.getTrack('https://soundcloud.com/luisfonsiofficial/despacito?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
.then(data => {
    console.log('getTrackPositiveTest')
    console.log(data)
    console.log()

    data.convertYTB()
    .then(convertedData => {
        console.log('convertTrackPositiveTest')
        console.log(convertedData)
        console.log()
    })
    .catch(err => {
        console.log('convertTrackNegativeTest: failed')
        console.log(err)
        console.log()
    })
})
.catch(err => {
    console.log('getTrackNegativeTest: failed')
    console.log(err)
    console.log()
})

soundcloud.getPlaylist('https://soundcloud.com/user83971661/sets/despacito-party-latin-mix-2020?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
.then(data => {
    console.log('getPlaylistPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getPlaylistNegativeTest: failed')
    console.log(err)
    console.log()
})

soundcloud.getAlbum('https://soundcloud.com/elvayvendelamorofficial/sets/de-la-mano-de-dios-9?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
.then(data => {
    console.log('getAlbumPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getAlbumNegativeTest: failed')
    console.log(err)
    console.log()
})

soundcloud.resolve('https://soundcloud.com/luisfonsiofficial/despacito?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
.then(data => {
    console.log('resolvePositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('resolveNegativeTest: failed')
    console.log(err)
    console.log()
})

soundcloud.search('despacito')
.then(data => {
    console.log('searchPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('searchNegativeTest: failed')
    console.log(err)
    console.log()
})

// Deezer tests
console.log('Deezer tests')

console.log('availableNegativeTest: ' + deezer.available)
console.log()

let deezerValidateURLPostiveTest = deezer.validateURL('https://deezer.page.link/mCYzX2nvG7k5eqUj9')
console.log('deezerValidateURLPostiveTest: ' + deezerValidateURLPostiveTest)

let deezerValidateURLNegativeTest = deezer.validateURL('https://deezer.com/zefzf')
console.log('deezerValidateURLNegativeTest: ' + deezerValidateURLNegativeTest)
console.log()

deezer.getTrack('https://deezer.page.link/mCYzX2nvG7k5eqUj9')
.then(data => {
    console.log('getTrackPositiveTest')
    console.log(data)
    console.log()

    data.convertYTB()
    .then(convertedData => {
        console.log('convertTrackPositiveTest')
        console.log(convertedData)
        console.log()
    })
    .catch(err => {
        console.log('convertTrackNegativeTest: failed')
        console.log(err)
        console.log()
    })
})
.catch(err => {
    console.log('getTrackNegativeTest: failed')
    console.log(err)
    console.log()
})

deezer.getPlaylist('https://deezer.page.link/e1Liub5NaYSwTQDJ8')
.then(data => {
    console.log('getPlaylistPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getPlaylistNegativeTest: failed')
    console.log(err)
    console.log()
})

deezer.getAlbum('https://deezer.page.link/7ackZ6AK3TsHp4U57')
.then(data => {
    console.log('getAlbumPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getAlbumNegativeTest: failed')
    console.log(err)
    console.log()
})

deezer.resolve('https://deezer.page.link/mCYzX2nvG7k5eqUj9')
.then(data => {
    console.log('resolvePositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('resolveNegativeTest: failed')
    console.log(err)
    console.log()
})

deezer.search('despacito')
.then(data => {
    console.log('searchPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('searchNegativeTest: failed')
    console.log(err)
    console.log()
})

// Spotify tests
console.log('Spotify tests')

console.log('availableNegativeTest: ' + spotify.available)
console.log()

let spotifyValidateURLPostiveTest = spotify.validateURL('https://open.spotify.com/intl-fr/track/6habFhsOp2NvshLv26DqMb')
console.log('spotifyValidateURLPostiveTest: ' + spotifyValidateURLPostiveTest)

let spotifyValidateURLNegativeTest = spotify.validateURL('https://spotify.com/zefzf')
console.log('spotifyValidateURLNegativeTest: ' + spotifyValidateURLNegativeTest)
console.log()

spotify.getTrack('https://open.spotify.com/intl-fr/track/6habFhsOp2NvshLv26DqMb')
.then(data => {
    console.log('getTrackPositiveTest')
    console.log(data)
    console.log()

    data.convertYTB()
    .then(convertedData => {
        console.log('convertTrackPositiveTest')
        console.log(convertedData)
        console.log()
    })
    .catch(err => {
        console.log('convertTrackNegativeTest: failed')
        console.log(err)
        console.log()
    })
})
.catch(err => {
    console.log('getTrackNegativeTest: failed')
    console.log(err)
    console.log()
})

spotify.getPlaylist('https://open.spotify.com/intl-fr/playlist/3WwADVxUeEu8q92hI4NnsX')
.then(data => {
    console.log('getPlaylistPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getPlaylistNegativeTest: failed')
    console.log(err)
    console.log()
})

spotify.getAlbum('https://open.spotify.com/intl-fr/album/5qnvJbamuZLbsasuYKRy1l')
.then(data => {
    console.log('getAlbumPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('getAlbumNegativeTest: failed')
    console.log(err)
    console.log()
})

spotify.search('despacito')
.then(data => {
    console.log('searchPositiveTest')
    console.log(data)
    console.log()
})
.catch(err => {
    console.log('searchNegativeTest: failed')
    console.log(err)
    console.log()
})