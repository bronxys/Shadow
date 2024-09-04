const fetch = require("node-fetch")
const getTrack = require('./track')
const Error = require("../Classes/error")

module.exports = async (token, searchArg) => {
    return new Promise(async (resolve, reject) => {
        if (typeof searchArg !== 'string') {
            return reject(new Error("No valid argument given", 1))
        } 
        let requestData;
        try {
            const request = await fetch(`https://soundcloud.com/search?q=${searchArg}`)
            requestData = await request.text()
        } catch (err) {
            return reject(err)
        }

        if (typeof requestData !== 'string') {
            return reject(new Error("Cannot resolve this search", 15))
        }
        let ul = requestData.split('<ul>')[2]
        if (!ul || !ul.includes('</ul>')) {
            return reject(new Error("Cannot resolve this search", 15))
        }
        let ulContent = ul.split('</ul>')[0]
        if (!ulContent) {
            return reject(new Error("Cannot resolve this search", 15))
        }
        let rawLinks = ulContent.split('h2')?.filter(link => link.includes('<a'))
        if (!rawLinks) {
            return reject(new Error("Cannot resolve this search", 15))
        }
        
        let links = rawLinks
        .map(rawLink => {
            let link = rawLink.split('">')?.[0]
            if (link) {
                link = link.split('href="')?.[1]
            }
            if (link) {
                link = 'https://soundcloud.com' + link
            }
            return link
        })
        .filter(Boolean)
        
        Promise.allSettled(links.map(link => getTrack(token, link)))
        .then(requests => {
            let successRequests = requests.filter(request => request.status === 'fulfilled')
            if (successRequests.length) {
                return resolve(successRequests.map(request => request.value))
            }

            return resolve([])
        })
    })
}