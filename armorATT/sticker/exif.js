const _0x3d9339=_0xc307;function _0xc307(_0x163a5b,_0x31c18c){const _0x203ce4=_0x203c();return _0xc307=function(_0xc307ab,_0x1b622c){_0xc307ab=_0xc307ab-0x111;let _0x12bfa0=_0x203ce4[_0xc307ab];return _0x12bfa0;},_0xc307(_0x163a5b,_0x31c18c);}(function(_0x310b14,_0x528838){const _0x4354d7=_0xc307,_0x1fea23=_0x310b14();while(!![]){try{const _0x138cce=parseInt(_0x4354d7(0x119))/0x1*(-parseInt(_0x4354d7(0x11e))/0x2)+parseInt(_0x4354d7(0x129))/0x3+parseInt(_0x4354d7(0x114))/0x4+-parseInt(_0x4354d7(0x122))/0x5+-parseInt(_0x4354d7(0x111))/0x6*(-parseInt(_0x4354d7(0x139))/0x7)+-parseInt(_0x4354d7(0x123))/0x8+parseInt(_0x4354d7(0x131))/0x9;if(_0x138cce===_0x528838)break;else _0x1fea23['push'](_0x1fea23['shift']());}catch(_0x565dc6){_0x1fea23['push'](_0x1fea23['shift']());}}}(_0x203c,0xb0cdf));const fs=require('fs'),{tmpdir}=require('os'),Crypto=require(_0x3d9339(0x121)),ff=require('fluent-ffmpeg'),webp=require(_0x3d9339(0x126)),path=require(_0x3d9339(0x134));async function imageToWebp(_0x5de22a){const _0x29ffaf=_0x3d9339,_0x1d840e=path[_0x29ffaf(0x113)](tmpdir(),Crypto[_0x29ffaf(0x12f)](0x6)[_0x29ffaf(0x13b)](0x0,0x6)[_0x29ffaf(0x130)](0x24)+'.webp'),_0x123496=path[_0x29ffaf(0x113)](tmpdir(),Crypto[_0x29ffaf(0x12f)](0x6)[_0x29ffaf(0x13b)](0x0,0x6)['toString'](0x24)+_0x29ffaf(0x142));fs['writeFileSync'](_0x123496,_0x5de22a),await new Promise((_0x459881,_0x5ab432)=>{const _0x101982=_0x29ffaf;ff(_0x123496)['on'](_0x101982(0x13d),_0x5ab432)['on'](_0x101982(0x127),()=>_0x459881(!![]))[_0x101982(0x143)]([_0x101982(0x135),_0x101982(0x133),_0x101982(0x12c),_0x101982(0x132)])[_0x101982(0x118)]('webp')['save'](_0x1d840e);});const _0x265cbf=fs[_0x29ffaf(0x12e)](_0x1d840e);return fs['unlinkSync'](_0x1d840e),fs[_0x29ffaf(0x13a)](_0x123496),_0x265cbf;}async function videoToWebp(_0x478b9a){const _0x57d588=_0x3d9339,_0x37a677=path[_0x57d588(0x113)](tmpdir(),Crypto[_0x57d588(0x12f)](0x6)['readUIntLE'](0x0,0x6)['toString'](0x24)+_0x57d588(0x140)),_0x66c858=path[_0x57d588(0x113)](tmpdir(),Crypto[_0x57d588(0x12f)](0x6)[_0x57d588(0x13b)](0x0,0x6)[_0x57d588(0x130)](0x24)+_0x57d588(0x138));fs[_0x57d588(0x112)](_0x66c858,_0x478b9a),await new Promise((_0xae66ee,_0x40f6c2)=>{const _0x25b54a=_0x57d588;ff(_0x66c858)['on'](_0x25b54a(0x13d),_0x40f6c2)['on'](_0x25b54a(0x127),()=>_0xae66ee(!![]))[_0x25b54a(0x143)]([_0x25b54a(0x135),_0x25b54a(0x133),_0x25b54a(0x12c),_0x25b54a(0x132),_0x25b54a(0x13e),'0',_0x25b54a(0x11c),_0x25b54a(0x146),'-t',_0x25b54a(0x11d),_0x25b54a(0x128),_0x25b54a(0x12a),'-an',_0x25b54a(0x11f),'0'])[_0x25b54a(0x118)]('webp')['save'](_0x37a677);});const _0x11bc9f=fs['readFileSync'](_0x37a677);return fs['unlinkSync'](_0x37a677),fs[_0x57d588(0x13a)](_0x66c858),_0x11bc9f;}async function writeExifImg(_0x485ff8,_0x521d10){const _0x5b218c=_0x3d9339;let _0x4c6618=await imageToWebp(_0x485ff8);const _0x2291f2=path[_0x5b218c(0x113)](tmpdir(),Crypto[_0x5b218c(0x12f)](0x6)[_0x5b218c(0x13b)](0x0,0x6)[_0x5b218c(0x130)](0x24)+_0x5b218c(0x140)),_0x5e42f6=path[_0x5b218c(0x113)](tmpdir(),Crypto[_0x5b218c(0x12f)](0x6)[_0x5b218c(0x13b)](0x0,0x6)[_0x5b218c(0x130)](0x24)+_0x5b218c(0x140));fs['writeFileSync'](_0x2291f2,_0x4c6618);if(_0x521d10['packname']||_0x521d10[_0x5b218c(0x120)]){const _0x19ef52=new webp[(_0x5b218c(0x136))](),_0x18c98f={'sticker-pack-id':_0x5b218c(0x124),'sticker-pack-name':_0x521d10[_0x5b218c(0x12d)],'sticker-pack-publisher':_0x521d10[_0x5b218c(0x120)],'emojis':_0x521d10[_0x5b218c(0x137)]?_0x521d10[_0x5b218c(0x137)]:['']},_0x50330c=Buffer['from']([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x5bcbdf=Buffer[_0x5b218c(0x13f)](JSON[_0x5b218c(0x144)](_0x18c98f),_0x5b218c(0x12b)),_0x458025=Buffer['concat']([_0x50330c,_0x5bcbdf]);return _0x458025[_0x5b218c(0x13c)](_0x5bcbdf[_0x5b218c(0x117)],0xe,0x4),await _0x19ef52[_0x5b218c(0x145)](_0x2291f2),fs[_0x5b218c(0x13a)](_0x2291f2),_0x19ef52[_0x5b218c(0x141)]=_0x458025,await _0x19ef52['save'](_0x5e42f6),_0x5e42f6;}}async function writeExifVid(_0x3e3d45,_0x3b7400){const _0x4d0c2b=_0x3d9339;let _0x374764=await videoToWebp(_0x3e3d45);const _0xe5083f=path[_0x4d0c2b(0x113)](tmpdir(),Crypto[_0x4d0c2b(0x12f)](0x6)[_0x4d0c2b(0x13b)](0x0,0x6)[_0x4d0c2b(0x130)](0x24)+'.webp'),_0x227a09=path[_0x4d0c2b(0x113)](tmpdir(),Crypto[_0x4d0c2b(0x12f)](0x6)[_0x4d0c2b(0x13b)](0x0,0x6)[_0x4d0c2b(0x130)](0x24)+_0x4d0c2b(0x140));fs['writeFileSync'](_0xe5083f,_0x374764);if(_0x3b7400['packname']||_0x3b7400[_0x4d0c2b(0x120)]){const _0x5e626e=new webp[(_0x4d0c2b(0x136))](),_0x320660={'sticker-pack-id':_0x4d0c2b(0x124),'sticker-pack-name':_0x3b7400[_0x4d0c2b(0x12d)],'sticker-pack-publisher':_0x3b7400[_0x4d0c2b(0x120)],'emojis':_0x3b7400[_0x4d0c2b(0x137)]?_0x3b7400['categories']:['']},_0x516e58=Buffer['from']([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x59716c=Buffer['from'](JSON[_0x4d0c2b(0x144)](_0x320660),_0x4d0c2b(0x12b)),_0x300f7e=Buffer[_0x4d0c2b(0x116)]([_0x516e58,_0x59716c]);return _0x300f7e[_0x4d0c2b(0x13c)](_0x59716c[_0x4d0c2b(0x117)],0xe,0x4),await _0x5e626e[_0x4d0c2b(0x145)](_0xe5083f),fs['unlinkSync'](_0xe5083f),_0x5e626e[_0x4d0c2b(0x141)]=_0x300f7e,await _0x5e626e[_0x4d0c2b(0x115)](_0x227a09),_0x227a09;}}function _0x203c(){const _0x3c224=['90006WRUQgU','writeFileSync','join','5101732uDGyQo','save','concat','length','toFormat','2081hsWxdV','test','data','-ss','00:00:05','858IWyJGu','-vsync','author','crypto','3116750byiuKw','1752936CmDGbB','https://github.com/DikaArdnt/Hisoka-Morou','mimetype','node-webpmux','end','-preset','1010298SuPbeY','default','utf-8','-vf','packname','readFileSync','randomBytes','toString','2089503HJnUbc','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','libwebp','path','-vcodec','Image','categories','.mp4','287eIdEuN','unlinkSync','readUIntLE','writeUIntLE','error','-loop','from','.webp','exif','.jpg','addOutputOptions','stringify','load','00:00:00'];_0x203c=function(){return _0x3c224;};return _0x203c();}async function writeExif(_0x489128,_0x2a28a9){const _0x40bd24=_0x3d9339;let _0x536a1d=/webp/['test'](_0x489128[_0x40bd24(0x125)])?_0x489128[_0x40bd24(0x11b)]:/image/['test'](_0x489128[_0x40bd24(0x125)])?await imageToWebp(_0x489128[_0x40bd24(0x11b)]):/video/[_0x40bd24(0x11a)](_0x489128[_0x40bd24(0x125)])?await videoToWebp(_0x489128[_0x40bd24(0x11b)]):'';const _0x41ab3a=path[_0x40bd24(0x113)](tmpdir(),Crypto[_0x40bd24(0x12f)](0x6)[_0x40bd24(0x13b)](0x0,0x6)[_0x40bd24(0x130)](0x24)+_0x40bd24(0x140)),_0xc50dcf=path[_0x40bd24(0x113)](tmpdir(),Crypto['randomBytes'](0x6)[_0x40bd24(0x13b)](0x0,0x6)[_0x40bd24(0x130)](0x24)+_0x40bd24(0x140));fs[_0x40bd24(0x112)](_0x41ab3a,_0x536a1d);if(_0x2a28a9[_0x40bd24(0x12d)]||_0x2a28a9[_0x40bd24(0x120)]){const _0x391a71=new webp['Image'](),_0x2a0b35={'sticker-pack-id':_0x40bd24(0x124),'sticker-pack-name':_0x2a28a9[_0x40bd24(0x12d)],'sticker-pack-publisher':_0x2a28a9['author'],'emojis':_0x2a28a9[_0x40bd24(0x137)]?_0x2a28a9[_0x40bd24(0x137)]:['']},_0x3d374d=Buffer[_0x40bd24(0x13f)]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x1ea349=Buffer[_0x40bd24(0x13f)](JSON[_0x40bd24(0x144)](_0x2a0b35),_0x40bd24(0x12b)),_0x13e1f7=Buffer[_0x40bd24(0x116)]([_0x3d374d,_0x1ea349]);return _0x13e1f7[_0x40bd24(0x13c)](_0x1ea349[_0x40bd24(0x117)],0xe,0x4),await _0x391a71[_0x40bd24(0x145)](_0x41ab3a),fs[_0x40bd24(0x13a)](_0x41ab3a),_0x391a71['exif']=_0x13e1f7,await _0x391a71['save'](_0xc50dcf),_0xc50dcf;}}module['exports']={'imageToWebp':imageToWebp,'videoToWebp':videoToWebp,'writeExifImg':writeExifImg,'writeExifVid':writeExifVid,'writeExif':writeExif};