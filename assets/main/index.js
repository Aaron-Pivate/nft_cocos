System.register("chunks:///_virtual/page.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,s,a,i,r,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,s=t.systemEvent,a=t.SystemEvent,i=t.v3,r=t.Quat,c=t.Component}],execute:function(){var u;n._RF.push({},"2b9edBOe3dN4o2W/LMRMlUm","page",void 0);var l=o.ccclass;o.property,t("Page",l("Page")(u=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.onLoad=function(){s.on(a.EventType.TOUCH_MOVE,this.onKeyDown,this)},o.onKeyDown=function(t,e){var n=e.getDelta();Math.abs(n.x)>Math.abs(n.y)&&this.setAngle(.1*n.x)},o.setAngle=function(t){var e=i(0,1,0),n=new r;r.fromAxisAngle(n,e,t*(Math.PI/180));var o=new r,s=new r;this.node.getRotation(o),r.multiply(s,n,o),this.node.setRotation(s)},n}(c))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/base64Img.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,n,o,u,a,s,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,u=e._decorator,a=e.Texture2D,s=e.ModelComponent,c=e.Component}],execute:function(){var l,p,f,h,y,m,x;o._RF.push({},"4afc8z/dStAQIykychWH+eb","base64Img",void 0);var g=u.ccclass,b=u.property;e("Base64Img",(l=g("Base64Img"),p=b({type:a}),f=b(a),l((m=t((y=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o))||this,i(n(t),"texture1",m,n(t)),i(n(t),"texture2",x,n(t)),t}r(t,e);var o=t.prototype;return o.start=function(){var e=this;setTimeout((function(){e.swithcTextue()}),1e3)},o.swithcTextue=function(){var e=this.node.getComponent(s).materials[0],t=e.getProperty("mainTexture");e.setProperty("mainTexture",t===this.texture1?this.texture2:this.texture1)},t}(c)).prototype,"texture1",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(y.prototype,"texture2",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=y))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/pao.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,o,s,i,a;return{setters:[function(e){t=e.inheritsLoose,n=e.defineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,i=e.Animation,a=e.Component}],execute:function(){var c;o._RF.push({},"90821FMVgtCB6zq+RtA0/Fd","pao",void 0);var u=s.ccclass,p=(s.property,s.menu);e("Pao",u("Pao")(c=p("RenderTexture/UseRenderTextureAsset")(c=function(e){function o(){for(var t,o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,n(r(t),"_renderTex",null),t}return t(o,e),o.prototype.start=function(){this.node.getComponent(i).play()},o}(a))||c)||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./page.ts","./base64Img.ts","./pao.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});