function _0x23a9(){const _0x33cca6=['6WtyhaA','110CgqEcW','29685ulAYRW','existsSync','alloc','3073020VWNVyY','6646080CjoNfR','test','fs-extra','base64','./exif2','sendMessage','40ciGkrJ','from','81582Pbcsyq','readFileSync','../funcoes/functions.js','1KyBsNA','packname','189trshZu','exports','5295aJmSul','850487NltFRm','author','split','230864HfbQhB','isBuffer'];_0x23a9=function(){return _0x33cca6;};return _0x23a9();}const _0x1b28a0=_0x4ff6;(function(_0x311321,_0x230d3c){const _0x394459=_0x4ff6,_0x35849a=_0x311321();while(!![]){try{const _0x2ade63=-parseInt(_0x394459(0x1e3))/0x1*(-parseInt(_0x394459(0x1e0))/0x2)+-parseInt(_0x394459(0x1e7))/0x3*(parseInt(_0x394459(0x1de))/0x4)+-parseInt(_0x394459(0x1d4))/0x5*(-parseInt(_0x394459(0x1d2))/0x6)+parseInt(_0x394459(0x1d8))/0x7+parseInt(_0x394459(0x1d0))/0x8*(parseInt(_0x394459(0x1e5))/0x9)+-parseInt(_0x394459(0x1d3))/0xa*(parseInt(_0x394459(0x1cd))/0xb)+-parseInt(_0x394459(0x1d7))/0xc;if(_0x2ade63===_0x230d3c)break;else _0x35849a['push'](_0x35849a['shift']());}catch(_0x6dd6c){_0x35849a['push'](_0x35849a['shift']());}}}(_0x23a9,0x74b0c));function _0x4ff6(_0x553b34,_0x1d7ae2){const _0x23a9c8=_0x23a9();return _0x4ff6=function(_0x4ff61e,_0x3bbddc){_0x4ff61e=_0x4ff61e-0x1cd;let _0x7a79ad=_0x23a9c8[_0x4ff61e];return _0x7a79ad;},_0x4ff6(_0x553b34,_0x1d7ae2);}const fs=require(_0x1b28a0(0x1da)),{imageToWebp2,videoToWebp2,writeExifImg2,writeExifVid2}=require(_0x1b28a0(0x1dc)),{getBuffer}=require(_0x1b28a0(0x1e2)),sendImageAsSticker2=async(_0x1c9e9a,_0x4fc996,_0x471e1e,_0x2c52c6,_0x369f47={})=>{const _0x37dc38=_0x1b28a0;let _0x3dcb0e=Buffer['isBuffer'](_0x471e1e)?_0x471e1e:/^data:.*?\/.*?;base64,/i['test'](_0x471e1e)?Buffer['from'](_0x471e1e['split']`,`[0x1],_0x37dc38(0x1db)):/^https?:\/\//['test'](_0x471e1e)?await await getBuffer(_0x471e1e):fs[_0x37dc38(0x1d5)](_0x471e1e)?fs[_0x37dc38(0x1e1)](_0x471e1e):Buffer[_0x37dc38(0x1d6)](0x0),_0x55d2fc;return _0x369f47&&(_0x369f47[_0x37dc38(0x1e4)]||_0x369f47[_0x37dc38(0x1ce)])?_0x55d2fc=await writeExifImg2(_0x3dcb0e,_0x369f47):_0x55d2fc=await imageToWebp2(_0x3dcb0e),await _0x1c9e9a[_0x37dc38(0x1dd)](_0x4fc996,{'sticker':{'url':_0x55d2fc},..._0x369f47},{'quoted':_0x2c52c6}),_0x55d2fc;},sendVideoAsSticker2=async(_0x5896a3,_0x1649ae,_0x9641de,_0xde2a41,_0x320c34={})=>{const _0x31a003=_0x1b28a0;let _0x2aab38=Buffer[_0x31a003(0x1d1)](_0x9641de)?_0x9641de:/^data:.*?\/.*?;base64,/i[_0x31a003(0x1d9)](_0x9641de)?Buffer[_0x31a003(0x1df)](_0x9641de[_0x31a003(0x1cf)]`,`[0x1],_0x31a003(0x1db)):/^https?:\/\//[_0x31a003(0x1d9)](_0x9641de)?await await getBuffer(_0x9641de):fs[_0x31a003(0x1d5)](_0x9641de)?fs[_0x31a003(0x1e1)](_0x9641de):Buffer[_0x31a003(0x1d6)](0x0),_0x14d980;return _0x320c34&&(_0x320c34[_0x31a003(0x1e4)]||_0x320c34[_0x31a003(0x1ce)])?_0x14d980=await writeExifVid2(_0x2aab38,_0x320c34):_0x14d980=await videoToWebp2(_0x2aab38),await _0x5896a3[_0x31a003(0x1dd)](_0x1649ae,{'sticker':{'url':_0x14d980},..._0x320c34},{'quoted':_0xde2a41}),_0x14d980;};module[_0x1b28a0(0x1e6)]={'sendVideoAsSticker2':sendVideoAsSticker2,'sendImageAsSticker2':sendImageAsSticker2};