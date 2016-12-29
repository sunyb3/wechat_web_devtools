'use strict';var _exports;function init(){const a=require('path'),b=require('fs'),c=require('url'),d=require('../../stores/projectStores.js');require('../../config/config.js');const f=require('../../config/dirConfig.js'),g=require('../../stores/windowStores.js');_exports={},_exports.noBrowser=['window','document','frames','self','location','navigator','localStorage','history','Caches','screen','alert','confirm','prompt','XMLHttpRequest','WebSocket','webkit','WeixinJSCore','WeixinJSBridge','Reporter'],_exports.whiteFileExtName={'.wxml':!0,'.wxss':!0,'.png':!0,'.jpg':!0,'.jpeg':!0,'.gif':!0,'.js':!0,'.json':!0},_exports.getBaseURL=function(h){return`http://${h.hash}.debug.open.weixin.qq.com/`},_exports.getUrlFromFilePath=function(h,i){return _exports.getBaseURL(h)+i},_exports.getProjectHashFromURL=function(h){let i=h.replace(/https?:\/\//,'').split('.');return i[0]},_exports.getProject=function(h){let i=this.getProjectHashFromURL(h);return d.getProjectByHash(i)},_exports.getFileRelativePath=function(h,i){let j=c.parse(h),k=j.pathname||'';if(k=k.replace(/^\//,''),''===k){let l;try{l=_exports.getProjectConfig(i)}catch(o){return''}let n=l.pages||[];return n[0]?`${n[0]}.wxml`:'index.wxml'}return k.replace(/\.html$/,'.wxml')},_exports.getFilePath=function(h,i){let j=this.getFileRelativePath(h,i),k=i.projectpath;return a.join(k,j)},_exports.isWxmlFile=function(h){return /\.wxml$/.test(h)},_exports.isWxssFile=function(h){return /\.wxss$/.test(h)},_exports.isWxmlURL=function(h){let i=c.parse(h),j=i.pathname,k=a.extname(j);return''===k||'.html'===k||'.wxml'===k},_exports.getWxImports=function(h){let i=h.match(/\<wx-import.*\<\/wx-import\>/g)||[],j=[];return i.forEach(k=>{let l=k.match(/src="(.*?)"/),n=l?l[1]:'';n&&(!/$\.wxml/.test(n)&&(n+='.wxml'),j.push(n))}),j},_exports.getFileNameFromUrl=function(h,i){return this.getFileRelativePath(h,i)},_exports.getPageCssFiles=function(h,i){let j=this.getFileRelativePath(h,i),k=j.replace(/\..*$/g,'.wxss');return b.existsSync(a.join(i.projectpath,k))?a.parse(k).base:''},_exports.getProjectStorage=function(h){let i=h.appid,j=h.appname,k=g.getUserInfo(),l=k?k.openid:'unknow',n=a.join(f.WeappStorage,`${i}_${j}_${l}.data.json`),o;try{o=b.readFileSync(n,'utf8')}catch(p){o='{}'}return JSON.parse(o)}}init(),module.exports=_exports;