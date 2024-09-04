const Track = require("../Classes/track")
const Error = require("../Classes/error")
const vm = require("node:vm")
const querystring = require("node:querystring")
const fetch = require("node-fetch")
const validate = require("./validate")

/**
 * 
 * @param {string} Arg 
 * @returns {Promise<Track|Error>}
 */
module.exports = async (Arg, state) => {
    return new Promise(async (resolve, reject) => {
        if(!Arg || typeof Arg !== "string") return reject(new Error("No valid argument given", 1))
        if(!validate(Arg, "track")) return reject(new Error("Incorrect URL", 2))
        if(Arg.includes("/watch?v=")) var ID = Arg.split("/watch?v=")[1]
        else var ID = Arg.split(".be/")[1]
        if(!ID) return reject(new Error("Could not find the ID of the track", 8))
        ID.split("&")[0]
        let datas;
        try {
          let data = await fetch(`https://www.youtube.com/watch?v=${ID}&has_verified=1`, {
              headers: {
                  'accept-language': 'en-US,en-IN;q=0.9,en;q=0.8,hi;q=0.7',
                  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
              }
          })
          datas = await data.text()
        } catch(err) {
            return reject(err)
        }

        if (datas.indexOf('Our systems have detected unusual traffic from your computer network.') !== -1) return reject(new Error("Error interacting with youtube", 6))
        
        let vdatas = datas
        .split('var ytInitialPlayerResponse = ')

        if(!vdatas[0] || !vdatas[1]) return reject(new Error("Could not find the track", 9))
        
        vdatas = vdatas[1]
        .split(';</script>')
        
        if(!vdatas[0]) return reject(new Error("Could not find the track", 9))
        
        vdatas = vdatas[0]
        .split(/;\s*(var|const|let)/)
        
        if(!vdatas[0]) return reject(new Error("Could not find the track", 9))
        
        vdatas = JSON.parse(vdatas[0])
        
        if (vdatas.playabilityStatus.status !== 'OK') return reject(new Error("Could not find the track", 9))
        
        if(String(vdatas.videoDetails.isLiveContent) === "true") return reject(new Error("The track is live", 10))

        if(typeof state === "object" && state.platform === "youtube" && state.link === "stream"){

            let html5player = /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/ .exec(datas)
            html5player = html5player ? html5player[1] || html5player[2] : null
            
            let formats = [...(vdatas.streamingData.formats ?? []), ...(vdatas.streamingData.adaptiveFormats ?? [])]
            if(html5player && formats.length){
                let decipheredFormats = [];
                html5player = "https://www.youtube.com"+html5player
                html5player = await fetch(html5player)
                html5player = await html5player.text()
                let functions = exports.extractFunctions(html5player);
                const decipherScript = functions.length ? new vm.Script(functions[0]) : null;
                const nTransformScript = functions.length > 1 ? new vm.Script(functions[1]) : null;
                formats.forEach(format => {
                    exports.setDownloadURL(format, decipherScript, nTransformScript);
                    decipheredFormats.push(format)
                });
                formats = decipheredFormats
            }
            return resolve(formats)
        }

        let title = vdatas.videoDetails.title
        let url = `https://www.youtube.com/watch?v=${vdatas.videoDetails.videoId}`
        let time = Number(vdatas.videoDetails.lengthSeconds)
        let thumbnail = vdatas.videoDetails.thumbnail.thumbnails[0].url
        let artist_name = vdatas.videoDetails.author
        let artist_url = `https://www.youtube.com/channel/${vdatas.videoDetails.channelId}`
        return resolve(new Track({title, url, time, thumbnail, artist_name, artist_url}))
    })
}

exports.setDownloadURL = (format, decipherScript, nTransformScript) => {
    const decipher = url => {
      const args = querystring.parse(url);
      if (!args.s || !decipherScript) return args.url;
      const components = new URL(decodeURIComponent(args.url));
      components.searchParams.set(args.sp ? args.sp : 'signature',
        decipherScript.runInNewContext({ sig: decodeURIComponent(args.s) }));
      return components.toString();
    };
    const ncode = url => {
      const components = new URL(decodeURIComponent(url));
      const n = components.searchParams.get('n');
      if (!n || !nTransformScript) return url;
      components.searchParams.set('n', nTransformScript.runInNewContext({ ncode: n }));
      return components.toString();
    };
    const cipher = !format.url;
    const url = format.url || format.signatureCipher || format.cipher;
    format.url = cipher ? ncode(decipher(url)) : ncode(url);
    delete format.signatureCipher;
    delete format.cipher;
  };

exports.extractFunctions = body => {
    const functions = [];
    const extractManipulations = caller => {
      const functionName = between(caller, `a=a.split("");`, `.`);
      if (!functionName) return '';
      const functionStart = `var ${functionName}={`;
      const ndx = body.indexOf(functionStart);
      if (ndx < 0) return '';
      const subBody = body.slice(ndx + functionStart.length - 1);
      return `var ${functionName}=${cutAfterJS(subBody)}`;
    };
    const extractDecipher = () => {
      const functionName = between(body, `a.set("alr","yes");c&&(c=`, `(decodeURIC`);
      if (functionName && functionName.length) {
        const functionStart = `${functionName}=function(a)`;
        const ndx = body.indexOf(functionStart);
        if (ndx >= 0) {
          const subBody = body.slice(ndx + functionStart.length);
          let functionBody = `var ${functionStart}${cutAfterJS(subBody)}`;
          functionBody = `${extractManipulations(functionBody)};${functionBody};${functionName}(sig);`;
          functions.push(functionBody);
        }
      }
    };
    const extractNCode = () => {
      let functionName = between(body, `&&(b=a.get("n"))&&(b=`, `(b)`);
      if (functionName.includes('[')) functionName = between(body, `${functionName.split('[')[0]}=[`, `]`);
      if (functionName && functionName.length) {
        const functionStart = `${functionName}=function(a)`;
        const ndx = body.indexOf(functionStart);
        if (ndx >= 0) {
          const subBody = body.slice(ndx + functionStart.length);
          const functionBody = `var ${functionStart}${cutAfterJS(subBody)};${functionName}(ncode);`;
          functions.push(functionBody);
        }
      }
    };
    extractDecipher();
    extractNCode();
    return functions;
  };

  function between(haystack, left, right) {
    let pos;
    if (left instanceof RegExp) {
      const match = haystack.match(left);
      if (!match) { return ''; }
      pos = match.index + match[0].length;
    } else {
      pos = haystack.indexOf(left);
      if (pos === -1) { return ''; }
      pos += left.length;
    }
    haystack = haystack.slice(pos);
    pos = haystack.indexOf(right);
    if (pos === -1) { return ''; }
    haystack = haystack.slice(0, pos);
    return haystack;
  };
  
  /**
   * Escape sequences for cutAfterJS
   * @param {string} start the character string the escape sequence
   * @param {string} end the character string to stop the escape seequence
   * @param {undefined|Regex} startPrefix a regex to check against the preceding 10 characters
   */
  const ESCAPING_SEQUENZES = [
    // Strings
    { start: '"', end: '"' },
    { start: "'", end: "'" },
    { start: '`', end: '`' },
    // RegeEx
    { start: '/', end: '/', startPrefix: /(^|[[{:;,])\s?$/ },
  ];
  
  /**
   * Match begin and end braces of input JS, return only JS
   *
   * @param {string} mixedJson
   * @returns {string}
  */
  function cutAfterJS (mixedJson){
    let open, close;
    if (mixedJson[0] === '[') {
      open = '[';
      close = ']';
    } else if (mixedJson[0] === '{') {
      open = '{';
      close = '}';
    }
  
    if (!open) {
      throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${mixedJson[0]}`);
    }
  
    // States if the loop is currently inside an escaped js object
    let isEscapedObject = null;
  
    // States if the current character is treated as escaped or not
    let isEscaped = false;
  
    // Current open brackets to be closed
    let counter = 0;
  
    let i;
    // Go through all characters from the start
    for (i = 0; i < mixedJson.length; i++) {
      // End of current escaped object
      if (!isEscaped && isEscapedObject !== null && mixedJson[i] === isEscapedObject.end) {
        isEscapedObject = null;
        continue;
      // Might be the start of a new escaped object
      } else if (!isEscaped && isEscapedObject === null) {
        for (const escaped of ESCAPING_SEQUENZES) {
          if (mixedJson[i] !== escaped.start) continue;
          // Test startPrefix against last 10 characters
          if (!escaped.startPrefix || mixedJson.substring(i - 10, i).match(escaped.startPrefix)) {
            isEscapedObject = escaped;
            break;
          }
        }
        // Continue if we found a new escaped object
        if (isEscapedObject !== null) {
          continue;
        }
      }
  
      // Toggle the isEscaped boolean for every backslash
      // Reset for every regular character
      isEscaped = mixedJson[i] === '\\' && !isEscaped;
  
      if (isEscapedObject !== null) continue;
  
      if (mixedJson[i] === open) {
        counter++;
      } else if (mixedJson[i] === close) {
        counter--;
      }
  
      // All brackets have been closed, thus end of JSON is reached
      if (counter === 0) {
        // Return the cut JSON
        return mixedJson.substring(0, i + 1);
      }
    }
  
    // We ran through the whole string and ended up with an unclosed bracket
    throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
  };