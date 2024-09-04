# MusicSearch
MusicSearch is a simple to use module that allows you to retrieve informations about a song on various platforms

## Installation
```js
npm i @kamkam1_0/music-search
```

## Available Platforms
- Youtube
- SoundCloud
- Deezer
- Spotify

## How to use

### Initiating the module
```js
const MusicSearch = require("@kamkam1_0/music-search")
let Youtube = new MusicSearch.Youtube()
let Deezer = new MusicSearch.Deezer()
let SoundCloud = new MusicSearch.SoundCloud()
let Spotify = new MusicSearch.Spotify("CLIENT KEY", "SECRET KEY")
```

### General Use
You can use the eval command to tell you the general informations about the song
```js
let song = MusicSearch.eval("URL/NAME")
//expected output: {plateform: "", link: "URL/NAME", type: ""}
//The platform is one of the listed before
//The link corresponding to the given argument
//The type is the command to execute for the given argument
```

Validator Link Command

```js
    Platform.validateURL("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
    /*
        true
    */


    Platform.validateURL("https://www.youtebcom/watch?v=kJQP7kiw5Fk")
    /*
        false
    */
```

Track Command

```js
    let song = await Platform.getTrack("https://www.youtube.com/watch?v=kJQP7kiw5Fk")
    /*
        Track {
        title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
        url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
        time: 282,
        artist_name: 'LuisFonsiVEVO',
        artist_url: 'https://www.youtube.com/channel/UCLp8RBhQHu9wSsq62j_Md6A',
        thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCuffhiAPaneh-5dnyfyvY_mDwxhQ',
        plateform: 'Youtube',
        type: 'Track'
    */
```

Playlist Command

```js
    let song = await Platform.getPlaylist("https://www.youtube.com/watch?v=kJQP7kiw5Fk&list=PLVKH3RmLAlPgSVRlwh7RfbCGUO4P80i-A")
    /*
        Playlist {
            title: 'Despacito Playlist',
            thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBEbPjZNLOTWKK9IgpBYcBjav7eVw',
            channel_name: 'skassira12',
            channel_url: 'https://www.youtube.com/channel/UC65xgmFhe679BVFdML8ilgA',
            url: 'https://www.youtube.com/playlist?list=PLVKH3RmLAlPgSVRlwh7RfbCGUO4P80i-A',
            songs: [
                Track {
                title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
                url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
                time: 282,
                artist_name: 'Luis Fonsi',
                artist_url: 'https://www.youtube.com/channel/UCxoq-PAQeAdk_zyg8YS0JqA',
                thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCuffhiAPaneh-5dnyfyvY_mDwxhQ',
                plateform: 'Youtube',
                type: 'Track'
                },
                ...
            ]
        }
    */
```

Album Command

```js
    let song = await Platform.getAlbum("https://www.deezer.com/fr/album/15478674")
    /*
        Playlist {
            title: 'Despacito Playlist',
            thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBEbPjZNLOTWKK9IgpBYcBjav7eVw',
            channel_name: 'skassira12',
            channel_url: 'https://www.youtube.com/channel/UC65xgmFhe679BVFdML8ilgA',
            url: 'https://www.youtube.com/playlist?list=PLVKH3RmLAlPgSVRlwh7RfbCGUO4P80i-A',
            songs: [
                Track {
                title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
                url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
                time: 282,
                artist_name: 'Luis Fonsi',
                artist_url: 'https://www.youtube.com/channel/UCxoq-PAQeAdk_zyg8YS0JqA',
                thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCuffhiAPaneh-5dnyfyvY_mDwxhQ',
                plateform: 'Youtube',
                type: 'Track'
                },
                ...
            ]
        }
    */
```

Search

```js
    let search = await Platform.search("despacito")
    /*Expected Output:
    [
        Track {
            title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
            url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
            time: 282,
            artist_name: 'Luis Fonsi',
            artist_url: 'https://www.youtube.com/channel/UCxoq-PAQeAdk_zyg8YS0JqA',
            thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCg9eudi8DoM9M-qjPgJBGGkuIgA',
            plateform: 'Youtube',
            type: 'Track'
        },
        Track {
            title: 'Luis Fonsi ‒ Despacito (Lyrics / Lyric Video) ft. Daddy Yankee',
            url: 'https://www.youtube.com/watch?v=gm3-m2CFVWM',
            time: 241,
            artist_name: 'Taz Network',
            artist_url: 'https://www.youtube.com/channel/UCJ6ERWrxZzb9Ua3oeRcIe0g',
            thumbnail: 'https://i.ytimg.com/vi/gm3-m2CFVWM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdnMRJ4yJ6vHumS_nU46yxFLqRjQ',
            plateform: 'Youtube',
            type: 'Track'
        },
        ...
    ]
    */
```

#### Resolve

Deezer resolve

```js
    let songs = await Deezer.resolve("https://deezer.page.link/E4tkv3WubWS1JP8Q6")
    /*{
        id: '1924639057',
        type: 'track',
        link: 'https://www.deezer.com/fr/track/1924639057'
    }*/

```

SoundCloud resolve

```js
    const MusicSearch = require("@kamkam1_0/music-search")
    let SoundCloud = new MusicSearch.SoundCloud()
    let songs = await SoundCloud.resolve("https://soundcloud.com/secret-service-862007284/old-town-road-remix-feat-billy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing")
    /*{
        type: 'track',
        datas: {
            artwork_url: 'https://i1.sndcdn.com/artworks-iplou0yOnRRC-0-large.jpg',
            caption: null,
            commentable: true,
            comment_count: 47525,
            created_at: '2019-04-04T17:30:48Z',
            description: null,
            downloadable: false,
            download_count: 0,
            duration: 157100,
            full_duration: 157100,
            embeddable_by: 'all',
            genre: 'Country',
            has_downloads_left: false,
            id: 600964365,
            kind: 'track',
            label_name: 'Columbia',
            last_modified: '2023-02-18T11:49:48Z',
            license: 'all-rights-reserved',
            likes_count: 736419,
            permalink: 'old-town-road-remix-feat-billy',
            permalink_url: 'https://soundcloud.com/secret-service-862007284/old-town-road-remix-feat-billy',
            playback_count: 59223974,
            public: true,
            publisher_metadata: {
            id: 600964365,
            urn: 'soundcloud:tracks:600964365',
            artist: 'Lil Nas X feat. Billy Ray Cyrus',
            album_title: 'Old Town Road',
            contains_music: true,
            upc_or_ean: '886447659168',
            isrc: 'USSM11902498',
            explicit: false,
            p_line: '(P) 2019 Columbia Records, a Division of Sony Music Entertainment',
            p_line_for_display: '℗ 2019 Columbia Records, a Division of Sony Music Entertainment',
            writer_composer: 'Montero Lamar Hill, Michael Trent Reznor, Atticus Matthew Ross, Jocelyn Donald, Kiowa Roukema',
            release_title: 'Old Town Road (Remix) [feat. Billy Ray Cyrus]'
            },
            purchase_title: null,
            purchase_url: null,
            release_date: '2019-04-05T00:00:00Z',
            reposts_count: 20958,
            secret_token: null,
            sharing: 'public',
            state: 'finished',
            streamable: true,
            tag_list: '"Hip Hop" Pop Rap',
            title: 'Old Town Road (Remix) [feat. Billy Ray Cyrus]',
            track_format: 'single-track',
            uri: 'https://api.soundcloud.com/tracks/600964365',
            urn: 'soundcloud:tracks:600964365',
            user_id: 174817271,
            visuals: null,
            waveform_url: 'https://wave.sndcdn.com/tKwL6JXtaxFP_m.json',
            display_date: '2019-04-05T00:00:00Z',
            media: { transcodings: [Array] },
            station_urn: 'soundcloud:system-playlists:track-stations:600964365',
            station_permalink: 'track-stations:600964365',
            track_authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJnZW8iOiJGUiIsInN1YiI6IiIsInJpZCI6IjRkMjE5ZDAzLWQyYzctNGI5NC1iNTg0LWU2NjZiOTQ1NTUyNSIsImlhdCI6MTY3NzM2Mjc5OH0.psRopZZJ9t-y5z-wDgZI7koHYxxgVbOa759RSjqXrd8',
            monetization_model: 'AD_SUPPORTED',
            policy: 'MONETIZE',
            user: {
            avatar_url: 'https://i1.sndcdn.com/avatars-IGb20NzhIPOeyzeg-82HlKA-large.jpg',
            city: 'ATL',
            comments_count: 0,
            country_code: null,
            created_at: '2015-09-16T22:40:20Z',
            creator_subscriptions: [Array],
            creator_subscription: [Object],
            description: 'swag lol.',
            followers_count: 387814,
            followings_count: 19,
            first_name: 'Lil Nas',
            full_name: 'Lil Nas X',
            groups_count: 0,
            id: 174817271,
            kind: 'user',
            last_modified: '2021-09-17T04:01:57Z',
            last_name: 'X',
            likes_count: 15,
            playlist_likes_count: 1,
            permalink: 'secret-service-862007284',
            permalink_url: 'https://soundcloud.com/secret-service-862007284',
            playlist_count: 10,
            reposts_count: null,
            track_count: 41,
            uri: 'https://api.soundcloud.com/users/174817271',
            urn: 'soundcloud:users:174817271',
            username: 'Lil Nas X',
            verified: true,
            visuals: [Object],
            badges: [Object],
            station_urn: 'soundcloud:system-playlists:artist-stations:174817271',
            station_permalink: 'artist-stations:174817271'
            }
        }
    }*/

```

### Stream

Construction: platform.streamLink(url, format, details)

- url (required) : string of the url of the song (can only be a track)

- format (optional) : object containing a type and a codec
- format.type choices: "audio", "video"
- format.codec examples: "opus", "mp4" 

- details (optional) : boolean, indicates if you only wants the url of the stream or all the details


Youtube Stream
```js
    const MusicSearch = require("@kamkam1_0/music-search")
    let Youtube = new MusicSearch.Youtube()
    let streamLink = await Youtube.streamLink("https://www.youtube.com/watch?v=kJQP7kiw5Fk", {type: "audio", codec: "opus"}, false)
    /*
        https://rr2---sn-25glenez.googlevideo.com/  ....
    */

    let streamLinkWithDetails = await Youtube.streamLink("https://www.youtube.com/watch?v=kJQP7kiw5Fk", {type: "audio", codec: "opus"}, true)
    /*
        {
            itag: 249,
            mimeType: 'audio/webm; codecs="opus"',
            bitrate: 63273,
            initRange: { start: '0', end: '265' },
            indexRange: { start: '266', end: '754' },
            lastModified: '1648896794579340',
            contentLength: '1793236',
            quality: 'tiny',
            projectionType: 'RECTANGULAR',
            averageBitrate: 50958,
            audioQuality: 'AUDIO_QUALITY_LOW',
            approxDurationMs: '281521',
            audioSampleRate: '48000',
            audioChannels: 2,
            loudnessDb: 5.71,
            url: 'https://rr2---sn-25glenez.googlevideo.com/' ...
        }
    */

    let streamLinkWithoutFormat = await SoundCloud.streamLink("https://www.youtube.com/watch?v=kJQP7kiw5Fk", null)
    /*
        [
            {
                itag: 250,
                mimeType: 'audio/webm; codecs="opus"',
                bitrate: 79723,
                initRange: { start: '0', end: '265' },
                indexRange: { start: '266', end: '755' },
                lastModified: '1648896795931253',
                contentLength: '2356527',
                quality: 'tiny',
                projectionType: 'RECTANGULAR',
                averageBitrate: 66965,
                audioQuality: 'AUDIO_QUALITY_LOW',
                approxDurationMs: '281521',
                audioSampleRate: '48000',
                audioChannels: 2,
                loudnessDb: 5.71,
                url: 'https://rr2---sn-25glenez.googlevideo.com/ ...'
            },
            {
                itag: 251,
                mimeType: 'audio/webm; codecs="opus"',
                bitrate: 148041,
                initRange: { start: '0', end: '265' },
                indexRange: { start: '266', end: '755' },
                lastModified: '1648896796384001',
                contentLength: '4605080',
                quality: 'tiny',
                projectionType: 'RECTANGULAR',
                averageBitrate: 130862,
                audioQuality: 'AUDIO_QUALITY_MEDIUM',
                approxDurationMs: '281521',
                audioSampleRate: '48000',
                audioChannels: 2,
                loudnessDb: 5.71,
                url: 'https://rr2---sn-25glenez.googlevideo.com/ ...'
            }
        ]
    */
```

SoundCloud Stream
```js
    const MusicSearch = require("@kamkam1_0/music-search")
    let SoundCloud = new MusicSearch.SoundCloud()
    let streamLink = await SoundCloud.streamLink("https://soundcloud.com/secret-service-862007284/old-town-road-remix-feat-billy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", {type: "audio", codec: "opus"}, false)
    /*
        https://cf-hls-media.sndcdn.com/  ....
    */

    let streamLinkWithDetails = await SoundCloud.streamLink("https://soundcloud.com/secret-service-862007284/old-town-road-remix-feat-billy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", {type: "audio", codec: "opus"}, true)
    /*
        {
            url: 'https://cf-hls-media.sndcdn.com/ ....',
            preset: 'mp3_0_1',
            duration: 157100,
            snipped: false,
            format: { protocol: 'hls', mime_type: 'audio/mpeg' },
            quality: 'sq'
        }
    */

    let streamLinkWithoutFormat = await SoundCloud.streamLink("https://soundcloud.com/secret-service-862007284/old-town-road-remix-feat-billy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", null)
    /*
        https://cf-hls-media.sndcdn.com/  ....
    */
```