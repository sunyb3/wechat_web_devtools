'use strict';var _exports;function init(){const a=require('path'),b=require('../lib/react.js'),c=require('./popup/popup.js'),d=require('./menubar/menubar.js'),e=require('./toolbar/toolbar.js'),f=require('./sidebar/sidebar.js'),g=require('./develop/develop.js'),h=require('./detail/detail.js');require('./setting/setting.js');const i=require('./edit/edit.js'),j=require('../weapp/utils/projectManager.js').manager,k=require('../actions/projectActions.js'),l=require('./dialog/dialog.js'),m=require('./about/about.js'),n=require('../stores/windowStores.js'),o=require('../actions/windowActions.js');require('../stores/webviewStores.js'),require('../actions/webviewActions.js');var q,r=0;const s=b.createClass({displayName:'Main',getInitialState:function(){let t=this.props.project?n.getLastShow():'debug';return{show:t,memory:0,cpu:0}},optProject:function(t){n.setLastShow(t),this.setState({show:t})},_projectWatcher:function(t,u,v,w){if(this.props.project){let A=t.watcher||'edit'===this.state.show;A&&(q&&(clearTimeout(q),r++),q=setTimeout(()=>{if(2<r)k.restart(this.props.project);else{let B=a.extname(v);if('.swp'===B)return;'.json'===B||'.js'===B||'.wxml'===B?k.restart(this.props.project):k.restart(this.props.project)}r=0,q=void 0},100))}},_openProjectFile:function(){this.optProject('edit')},_memory:function(t={}){let v,u=0;for(let w in this._memoryTime++,t){let x=t[w];x.privateMemory&&(u+=x.privateMemory)}u=parseInt(u/1024/1024),this._memorySum+=u,v=parseInt(this._memorySum/this._memoryTime),this.setState({memory:u,memoryPre:v})},_onUpdated:function(t={}){let u=0,v=0;for(let w in this._cpuTime++,t){let x=t[w];x.cpu&&(u+=x.cpu)}this._cpuSUm+=u,u=u.toFixed(2),v=(this._cpuSUm/this._cpuTime).toFixed(2),this.setState({cpu:u,cpuPre:v})},componentDidMount:function(t){j.on('FILE_CHANGE',this._projectWatcher),n.on('OPEN_PROJECT_FILE',this._openProjectFile),this._memoryTime=0,this._memorySum=0,this._cpuTime=0,this._cpuSUm=0,global.appConfig.isDev&&(chrome.processes.onUpdatedWithMemory.addListener(this._memory),chrome.processes.onUpdated.addListener(this._onUpdated))},componentWillMount:function(){j.removeListener('FILE_CHANGE',this._projectWatcher),n.removeListener('OPEN_PROJECT_FILE',this._openProjectFile),global.appConfig.isDev&&(chrome.processes.onUpdatedWithMemory.removeListener(this._memory),chrome.processes.onUpdated.removeListener(this._onUpdated))},showSetting:function(){o.showSetting()},render:function(){let t='',u='';this.props.project&&(t=b.createElement(i,{show:this.state.show,project:this.props.project}),u=b.createElement(h,{project:this.props.project,optProject:this.optProject,show:this.state.show}));let v='';return global.appConfig.isDev&&(v=b.createElement('div',{style:{position:'absolute',bottom:0,left:60,marginBottom:10}},'\u5185\u5B58\u5360\u7528 ',this.state.memory,'/',this.state.memoryPre,' mb, CPU ',this.state.cpu,'/',this.state.cpuPre,'%')),b.createElement('div',{className:'main'},b.createElement(d,{lastWinStatus:this.props.lastWinStatus,appQuit:this.props.appQuit,appMin:this.props.appMin,appMax:this.props.appMax,showSetting:this.showSetting,project:this.props.project}),b.createElement(e,{project:this.props.project}),b.createElement('div',{className:'body'},b.createElement(f,{show:this.state.show,project:this.props.project,optProject:this.optProject}),b.createElement(g,{show:this.state.show,optDebugger:this.optDebugger,project:this.props.project}),t,u),b.createElement(l,null),b.createElement(c,null),b.createElement(m,null),v)}});_exports=s}init(),module.exports=_exports;