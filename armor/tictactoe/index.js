const _0x230219=_0x2886;(function(_0x573517,_0x112563){const _0x46a1fd=_0x2886,_0xbd7136=_0x573517();while(!![]){try{const _0x5bea38=parseInt(_0x46a1fd(0x132))/0x1+-parseInt(_0x46a1fd(0x120))/0x2*(parseInt(_0x46a1fd(0x112))/0x3)+-parseInt(_0x46a1fd(0x124))/0x4+-parseInt(_0x46a1fd(0x11b))/0x5*(parseInt(_0x46a1fd(0x119))/0x6)+parseInt(_0x46a1fd(0x12f))/0x7*(parseInt(_0x46a1fd(0x115))/0x8)+parseInt(_0x46a1fd(0x128))/0x9+-parseInt(_0x46a1fd(0x12d))/0xa;if(_0x5bea38===_0x112563)break;else _0xbd7136['push'](_0xbd7136['shift']());}catch(_0x1252e7){_0xbd7136['push'](_0xbd7136['shift']());}}}(_0x4dc5,0x5799c));const fs=require('fs'),dbdir=_0x230219(0x11f);function defineSave(_0x39d1ba,_0x3fab92,_0x1e905d){const _0x3036f1=_0x230219;mine=_0x39d1ba;const _0xd16053=_0x3036f1(0x12c)+_0x1e905d+_0x3036f1(0x123);fs[_0x3036f1(0x121)](_0xd16053,JSON[_0x3036f1(0x116)](_0x3fab92,null,0x2));}function setGame(_0x368b83){const _0x506c57=_0x230219,_0x5efb29=[],_0x5e6130=_0x506c57(0x12c)+_0x368b83+_0x506c57(0x123);if(!fs['existsSync'](_0x5e6130)){_0x5efb29[0x0]=[_0x506c57(0x134),'2️⃣',_0x506c57(0x127)],_0x5efb29[0x1]=['4️⃣',_0x506c57(0x129),'6️⃣'],_0x5efb29[0x2]=[_0x506c57(0x12b),_0x506c57(0x12e),_0x506c57(0x111)];const _0x50c89d={'status':!![],'session':_0x368b83,'turn':'X','X':null,'O':null,'isWin':![],'winner':null,'nine_push':[],'_matrix':_0x5efb29};return defineSave(_0x5e6130,_0x50c89d,_0x368b83),_0x50c89d;}else{const _0x14979b=JSON[_0x506c57(0x11c)](fs['readFileSync'](_0x5e6130));return _0x14979b;}}function horizontal(_0x2339b1){const _0x9674ff=_0x230219;let _0x437eb3=_0x2339b1[_0x9674ff(0x133)];for(let _0x41e485=0x0;_0x41e485<_0x437eb3;_0x41e485++){let _0x59c607=0x1,_0x13ccf6=null;for(let _0x8aa97=0x0;_0x8aa97<_0x437eb3;_0x8aa97++){let _0x2d5a2f=_0x2339b1[_0x41e485][_0x8aa97];if(null==_0x13ccf6)_0x13ccf6=_0x2d5a2f;else{if(_0x2d5a2f===_0x13ccf6){_0x59c607++;if(_0x59c607>=_0x437eb3)return _0x2d5a2f;}}}}return![];}function vertical(_0x8d03a2){const _0x269366=_0x230219;let _0xc61e85=_0x8d03a2[_0x269366(0x133)];for(let _0x288935=0x0;_0x288935<_0xc61e85;_0x288935++){let _0xe8500d=0x1,_0x14f3e3=null;for(let _0x5a2024=0x0;_0x5a2024<_0xc61e85;_0x5a2024++){let _0x1ad04e=_0x8d03a2[_0x5a2024][_0x288935];if(null==_0x14f3e3)_0x14f3e3=_0x1ad04e;else{if(_0x1ad04e===_0x14f3e3){_0xe8500d++;if(_0xe8500d>=_0xc61e85)return _0x1ad04e;}}}}return![];}function _0x4dc5(){const _0x3f9d9c=['516qAtaDa','setGame','3585DHSwyQ','parse','exports','isWin','s0viet','8ohbxMp','writeFileSync','nine_push','.json','2295744RgBQVV','Game\x20telah\x20dimenangkan\x20oleh\x20','winner','3️⃣','4829247mVVqds','5️⃣','Titik\x20ini\x20telah\x20diisi\x20oleh\x20❌','7️⃣','./armor/tictactoe/db/','2440lFFLDO','8️⃣','1887613PfKQfp','push','turn','341600lvKuVn','length','1️⃣','9️⃣','114891jraqNm','SERI','_matrix','8sjSibd','stringify','validmove','Titik\x20ini\x20telah\x20diisi\x20oleh\x20⭕'];_0x4dc5=function(){return _0x3f9d9c;};return _0x4dc5();}function diagonalLTR(_0x4c2dce){let _0x36bf8d=_0x4c2dce['length'],_0x4f0dee=0x1,_0x2fdf6c=null;for(let _0x175d33=0x0;_0x175d33<_0x36bf8d;_0x175d33++){let _0x20f704=_0x175d33,_0x153e92=_0x4c2dce[_0x175d33][_0x20f704];if(null==_0x2fdf6c)_0x2fdf6c=_0x153e92;else{if(_0x153e92===_0x2fdf6c){_0x4f0dee++;if(_0x4f0dee>=_0x36bf8d)return _0x153e92;}}}return![];}function diagonalRTL(_0x2edd23){const _0x242789=_0x230219;let _0x67d8c7=_0x2edd23[_0x242789(0x133)],_0x2344e6=0x1,_0x5c6a0c=null;for(let _0xb4712d=0x0;_0xb4712d<_0x67d8c7;_0xb4712d++){let _0xedd291=_0x67d8c7-0x1-_0xb4712d,_0x51d439=_0x2edd23[_0xb4712d][_0xedd291];if(null==_0x5c6a0c)_0x5c6a0c=_0x51d439;else{if(_0x51d439===_0x5c6a0c){_0x2344e6++;if(_0x2344e6>=_0x67d8c7)return _0x51d439;}}}return![];}function _0x2886(_0x52e7dc,_0x3e7485){const _0x4dc549=_0x4dc5();return _0x2886=function(_0x288654,_0x13c69f){_0x288654=_0x288654-0x111;let _0x4d65b6=_0x4dc549[_0x288654];return _0x4d65b6;},_0x2886(_0x52e7dc,_0x3e7485);}function move(_0xdf5920,_0x4b4813,_0x202942){const _0x1597f6=_0x230219,_0x442e40=_0x202942,_0x256f58=setGame(_0x442e40);if(_0x256f58['isWin'])return{'status':![],'message':_0x1597f6(0x125)+_0x256f58[_0x1597f6(0x126)]};if(_0x256f58[_0x1597f6(0x114)][_0xdf5920][_0x4b4813]=='❌')return{'status':![],'message':_0x1597f6(0x12a)};if(_0x256f58['_matrix'][_0xdf5920][_0x4b4813]=='⭕')return{'status':![],'message':_0x1597f6(0x118)};if(_0x256f58['turn']=='X')_0x256f58[_0x1597f6(0x114)][_0xdf5920][_0x4b4813]='❌',_0x256f58[_0x1597f6(0x122)][_0x1597f6(0x130)]('❌'),_0x256f58[_0x1597f6(0x131)]='O';else _0x256f58['turn']=='O'&&(_0x256f58[_0x1597f6(0x114)][_0xdf5920][_0x4b4813]='⭕',_0x256f58['nine_push']['push']('⭕'),_0x256f58[_0x1597f6(0x131)]='X');defineSave(dbdir,_0x256f58,_0x442e40);if(horizontal(setGame(_0x442e40)['_matrix'])=='❌'||horizontal(setGame(_0x442e40)[_0x1597f6(0x114)])=='⭕')_0x256f58[_0x1597f6(0x11e)]=!![],_0x256f58[_0x1597f6(0x131)]=='X'?_0x256f58[_0x1597f6(0x126)]='O':_0x256f58[_0x1597f6(0x126)]='X',defineSave(dbdir,_0x256f58,_0x442e40);else{if(vertical(setGame(_0x442e40)[_0x1597f6(0x114)])=='❌'||vertical(setGame(_0x442e40)[_0x1597f6(0x114)])=='⭕')_0x256f58[_0x1597f6(0x11e)]=!![],_0x256f58[_0x1597f6(0x131)]=='X'?_0x256f58[_0x1597f6(0x126)]='O':_0x256f58[_0x1597f6(0x126)]='X',defineSave(dbdir,_0x256f58,_0x442e40);else{if(diagonalLTR(setGame(_0x442e40)[_0x1597f6(0x114)])=='❌'||diagonalLTR(setGame(_0x442e40)[_0x1597f6(0x114)])=='⭕')_0x256f58[_0x1597f6(0x11e)]=!![],_0x256f58['turn']=='X'?_0x256f58['winner']='O':_0x256f58['winner']='X',defineSave(dbdir,_0x256f58,_0x442e40);else{if(diagonalRTL(setGame(_0x442e40)[_0x1597f6(0x114)])=='❌'||diagonalRTL(setGame(_0x442e40)[_0x1597f6(0x114)])=='⭕')_0x256f58[_0x1597f6(0x11e)]=!![],_0x256f58[_0x1597f6(0x131)]=='X'?_0x256f58[_0x1597f6(0x126)]='O':_0x256f58['winner']='X',defineSave(dbdir,_0x256f58,_0x442e40);else _0x256f58[_0x1597f6(0x122)][_0x1597f6(0x133)]>=0x9&&(_0x256f58[_0x1597f6(0x11e)]=!![],_0x256f58['winner']=_0x1597f6(0x113));}}}return defineSave(dbdir,_0x256f58,_0x442e40),_0x256f58;}function validmove(_0x1cf763,_0x5b5188){const _0x4470b6=_0x5b5188;if(Number(_0x1cf763)==0x1)return move(0x0,0x0,_0x4470b6);else{if(Number(_0x1cf763)==0x2)return move(0x0,0x1,_0x4470b6);else{if(Number(_0x1cf763)==0x3)return move(0x0,0x2,_0x4470b6);else{if(Number(_0x1cf763)==0x4)return move(0x1,0x0,_0x4470b6);else{if(Number(_0x1cf763)==0x5)return move(0x1,0x1,_0x4470b6);else{if(Number(_0x1cf763)==0x6)return move(0x1,0x2,_0x4470b6);else{if(Number(_0x1cf763)==0x7)return move(0x2,0x0,_0x4470b6);else{if(Number(_0x1cf763)==0x8)return move(0x2,0x1,_0x4470b6);else return Number(_0x1cf763)==0x9?move(0x2,0x2,_0x4470b6):![];}}}}}}}}module[_0x230219(0x11d)][_0x230219(0x11a)]=setGame,module['exports'][_0x230219(0x117)]=validmove;