// FULL - ONLINE
const axios = require('axios');
const cheerio = require('cheerio');

async function instaStalker(user) {
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            url: 'https://privatephotoviewer.com/wp-json/instagram-viewer/v1/fetch-profile',
            data: { find: user },
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'X-Requested-With': "sijmXMLHttpRequest",
            }
        }).then(({ data: html }) => {
            const $ = cheerio.load(html.html);
            const profilePicture = $("#profile-insta img").attr("src");
            const nickname = $(".col-md-8 h4").text().trim();
            const username = $(".col-md-8 h5").text().trim();
            const posts = $(".col-md-8 .text-center").eq(0).find("strong").text().trim();
            const followers = $(".col-md-8 .text-center").eq(1).find("strong").text().trim();const following = $(".col-md-8 .text-center").eq(2).find("strong").text().trim();
            const biography = $(".col-md-8 p").html().replace(/<br\s*\/?>/g, "\n").trim();

            return resolve({
                profilePicture,
                nickname,
                username,
                biography: biography.replaceAll('\n\n', '\n'),
                posts,
                followers,
                following,
                profileUrl: "https://www.instagram.com/" + username.replace('@', ''),
            });
        }).catch((error) => reject(error));
    });
}

module.exports = instaStalker;