'use strict';var _exports;function init(){const a=require('async');chrome.debugger;var b={};chrome.debugger.onEvent.addListener(function(d,e,f){let g=d.targetId;b[g]&&b[g].onEventCall(d,e,f)}),chrome.debugger.onDetach.addListener(function(d,e){let f=d.targetId;b[f]&&(b[f].onDetachCall(d,e),delete b[f])}),_exports={start:function(d,e,f,g,h){let i=[];i.push(function(k){chrome.debugger.getTargets(l=>{k(null,l)})}),i.push(function(k,l){let m=k.find(o=>{return o.url===d.src});var n={targetId:m.id};chrome.debugger.attach(n,'1.1',()=>{b[n.targetId]={onEventCall:g,onDetachCall:h},l(null,n)})}),i.push(function(k,l){chrome.debugger.sendCommand(k,'DOM.enable',()=>{l(null,k)})}),i.push(function(k,l){chrome.debugger.sendCommand(k,'CSS.enable',()=>{l(null,k)})}),i.push(function(k,l){chrome.debugger.sendCommand(k,'Emulation.setTouchEmulationEnabled',{enabled:!0,configuration:'mobile'},()=>{l(null,k)})}),i.push(function(k,l){let m=e.webviewOffset;chrome.debugger.sendCommand(k,'Emulation.setDeviceMetricsOverride',{width:parseInt(m.width),height:parseInt(m.height),deviceScaleFactor:m.dpr,mobile:!0,fitWindow:!1},()=>{l(null,k)})}),a.waterfall(i,(j,k)=>{f&&f(k)})},sendCommand:function(d,e,f,g){f?chrome.debugger.sendCommand(d,e,f,g):chrome.debugger.sendCommand(d,e,g)}}}init(),module.exports=_exports;