'use strict';var _exports;function init(){const a=require('../../actions/webviewActions.js'),b=require('../../stores/webviewStores.js'),c=require('../../actions/windowActions.js');_exports={reBuild:()=>{let d=b.getCurrentWebviewID();a.setWebviewAction(d,{act:'reBuild'})},showAbout:()=>{c.showAbout()},reload:()=>{let d=b.getCurrentWebviewID();a.setWebviewAction(d,{act:'reLoad'})},goback:()=>{let d=b.getCurrentWebviewID();a.setWebviewAction(d,{act:'goBack'})},goforward:()=>{let d=b.getCurrentWebviewID();a.setWebviewAction(d,{act:'goForward'})},focusAddressBar:()=>{let d=b.getCurrentWebviewID();c.focusAddressBar(d)},showSetting:()=>{c.showSetting()}}}init(),module.exports=_exports;