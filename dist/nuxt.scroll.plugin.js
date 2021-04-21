/*! For license information please see nuxt.scroll.plugin.js.LICENSE.txt */
(()=>{var e={796:(e,t,i)=>{e.exports=i(643)},264:e=>{"use strict";var t=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:t,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen,isInWorker:!t};e.exports=i},518:e=>{var t,i,n,s,o,l,r,a,c,d,h,u,p,m,f,v=!1;function w(){if(!v){v=!0;var e=navigator.userAgent,w=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),g=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(u=/\b(iPhone|iP[ao]d)/.exec(e),p=/\b(iP[ao]d)/.exec(e),d=/Android/i.exec(e),m=/FBAN\/\w+;/i.exec(e),f=/Mobile/i.exec(e),h=!!/Win64/.exec(e),w){(t=w[1]?parseFloat(w[1]):w[5]?parseFloat(w[5]):NaN)&&document&&document.documentMode&&(t=document.documentMode);var x=/(?:Trident\/(\d+.\d+))/.exec(e);l=x?parseFloat(x[1])+4:t,i=w[2]?parseFloat(w[2]):NaN,n=w[3]?parseFloat(w[3]):NaN,(s=w[4]?parseFloat(w[4]):NaN)?(w=/(?:Chrome\/(\d+\.\d+))/.exec(e),o=w&&w[1]?parseFloat(w[1]):NaN):o=NaN}else t=i=n=o=s=NaN;if(g){if(g[1]){var y=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);r=!y||parseFloat(y[1].replace("_","."))}else r=!1;a=!!g[2],c=!!g[3]}else r=a=c=!1}}var g={ie:function(){return w()||t},ieCompatibilityMode:function(){return w()||l>t},ie64:function(){return g.ie()&&h},firefox:function(){return w()||i},opera:function(){return w()||n},webkit:function(){return w()||s},safari:function(){return g.webkit()},chrome:function(){return w()||o},windows:function(){return w()||a},osx:function(){return w()||r},linux:function(){return w()||c},iphone:function(){return w()||u},mobile:function(){return w()||u||p||d||f},nativeApp:function(){return w()||m},android:function(){return w()||d},ipad:function(){return w()||p}};e.exports=g},534:(e,t,i)=>{"use strict";var n,s=i(264);s.canUseDOM&&(n=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=function(e,t){if(!s.canUseDOM||t&&!("addEventListener"in document))return!1;var i="on"+e,o=i in document;if(!o){var l=document.createElement("div");l.setAttribute(i,"return;"),o="function"==typeof l[i]}return!o&&n&&"wheel"===e&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}},643:(e,t,i)=>{"use strict";var n=i(518),s=i(534);function o(e){var t=0,i=0,n=0,s=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),n=10*t,s=10*i,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||s)&&e.deltaMode&&(1==e.deltaMode?(n*=40,s*=40):(n*=800,s*=800)),n&&!t&&(t=n<1?-1:1),s&&!i&&(i=s<1?-1:1),{spinX:t,spinY:i,pixelX:n,pixelY:s}}o.getEventType=function(){return n.firefox()?"DOMMouseScroll":s("wheel")?"wheel":"mousewheel"},e.exports=o}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{"use strict";i.d(n,{default:()=>v});var e=!1;if("undefined"!=typeof window){var t={get passive(){e=!0}};window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}var s="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),o=[],l=!1,r=-1,a=void 0,c=void 0,d=function(e){return o.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},h=function(e){var t=e||window.event;return!!d(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},u=i(796),p=i.n(u);class m{constructor(e=document.scrollingElement,t={}){this.$scrollContainer=e===document.scrollingElement?window:e,this.$scrollingElement=e,this.scrollTop=0,this.scrollLeft=0,this.deltaX=0,this.deltaY=0,this.deltaLastUpdateTime=0,this.deltaUpdateDelay=30,this.lastDeltaScrollTop=0,this.lastDeltaScrollLeft=0,this.progressTop=0,this.progressLeft=0,this.scrollTopMax=0,this.scrollLeftMax=0,this.scrollHeight=0,this.scrollWidth=0,this.raf=null,this.callbacks={scroll:[],tick:[],wheel:[]},this.lockNamespaces=[],this._animateOptions=null,this.options=Object.assign({},{},t),this.events={resize:this.resize.bind(this),tick:this.tick.bind(this),scroll:this.scroll.bind(this),wheel:this.wheel.bind(this)},window.addEventListener("resize",this.events.resize),this.$scrollContainer.addEventListener("scroll",this.events.scroll),this.$scrollContainer.addEventListener("wheel",this.events.wheel),this.tick()}get scrollData(){return{x:this.scrollLeft,y:this.scrollTop,deltaX:this.deltaX,deltaY:this.deltaY,progressY:this.progressTop,progressX:this.progressLeft}}recalc(){this.scrollHeight=this.$scrollingElement.scrollHeight,this.scrollWidth=this.$scrollingElement.scrollWidth,this.scrollTopMax=this.scrollHeight-this.$scrollingElement.clientHeight,this.scrollLeftMax=this.scrollWidth-this.$scrollingElement.clientWidth}tick(){this.recalc(),this.calcDelta(),this.update(),this.animate(),this.sendEvent("tick"),this.raf=requestAnimationFrame(this.events.tick)}scroll(e){this.update(),this.sendEvent("scroll",e)}wheel(e){const t=p()(e);this._animateOptions&&this._animateOptions.cancelable?(this._animateOptions.resolve(),this._animateOptions=null):this._animateOptions&&!this._animateOptions.cancelable&&e.preventDefault(),this.sendEvent("wheel",{original:e,normalize:t})}calcDelta(){const e=Date.now();e-this.deltaLastUpdateTime>this.deltaUpdateDelay&&(this.deltaX=this.scrollLeft-this.lastDeltaScrollLeft,this.deltaY=this.scrollTop-this.lastDeltaScrollTop,this.lastDeltaScrollTop=this.scrollTop,this.lastDeltaScrollLeft=this.scrollLeft,this.deltaLastUpdateTime=e)}update(){const e=this.$scrollingElement.scrollTop,t=this.$scrollingElement.scrollLeft;this.scrollTop=e,this.scrollLeft=t,this.progressTop=this.scrollTopMax?this.scrollTop/this.scrollTopMax:0,this.progressLeft=this.scrollLeftMax?this.scrollLeft/this.scrollLeftMax:0}sendEvent(e,t){const i=this.callbacks[e],n=this.scrollData;for(const e of i)e.callback(n,t)}on(e,t,i={}){this.callbacks[e]&&this.callbacks[e].push({callback:t,options:i})}off(e,t){if(this.callbacks[e]){const i=this.callbacks[e].findIndex((e=>e.callback===t));i>-1&&this.callbacks[e].splice(i,1)}}resize(){}lock(t,i,n){if(t)(function(t,i){if(t){if(!o.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:i||{}};o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}(o),[n]),s?(t.ontouchstart=function(e){1===e.targetTouches.length&&(r=e.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(e,t){var i=e.targetTouches[0].clientY-r;!d(e.target)&&(t&&0===t.scrollTop&&i>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&i<0?h(e):e.stopPropagation())}(e,t)},l||(document.addEventListener("touchmove",h,e?{passive:!1}:void 0),l=!0)):function(e){if(void 0===c){var t=!!e&&!0===e.reserveScrollBarGap,i=window.innerWidth-document.documentElement.clientWidth;t&&i>0&&(c=document.body.style.paddingRight,document.body.style.paddingRight=i+"px")}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(i)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")})(n||this.$scrollContainer),i&&this.lockNamespaces.push(i);else{if(i){const e=this.lockNamespaces.indexOf(i);e>-1&&this.lockNamespaces.splice(e,1)}this.lockNamespaces.length||((u=n||this.$scrollContainer)?(o=o.filter((function(e){return e.targetElement!==u})),s?(u.ontouchstart=null,u.ontouchmove=null,l&&0===o.length&&(document.removeEventListener("touchmove",h,e?{passive:!1}:void 0),l=!1)):o.length||(void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."))}var u}scrollTo({x:e=0,y:t=0,element:i=null,duration:n=0,cancelable:s=!0}){const o=this.isSafari();return new Promise((l=>{i instanceof HTMLElement&&(t=i.offsetTop);const r={resolve:l,duration:n,cancelable:s,time:Date.now(),start:{y:this.scrollTop,x:this.scrollLeft},distention:{y:t-this.scrollTop,x:e-this.scrollLeft}};o||this.$scrollingElement.style.setProperty("scroll-snap-type","none"),n?this._animateOptions=r:(this.setPosition(r.distention.x,r.distention.y),r.resolve())})).then((()=>{o||this.$scrollingElement.style.setProperty("scroll-snap-type","none")}))}animate(){if(!this._animateOptions)return!1;const e=Date.now(),t=e-this._animateOptions.time,i=f(t,this._animateOptions.start.x,this._animateOptions.distention.x,this._animateOptions.duration),n=f(t,this._animateOptions.start.y,this._animateOptions.distention.y,this._animateOptions.duration);this.setPosition(i,n),e>=this._animateOptions.time+this._animateOptions.duration&&(this._animateOptions.resolve(),this._animateOptions=null)}setPosition(e,t){this.$scrollingElement.scrollLeft=e,this.$scrollingElement.scrollTop=t}destroy(){cancelAnimationFrame(this.raf),document.removeEventListener("resize",this.events.resize),this.$scrollContainer.removeEventListener("scroll",this.events.scroll)}isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}}function f(e,t,i,n){return(e/=n/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t}const v=({app:e},t)=>{const i=JSON.parse('<%= JSON.stringify(options).replace(/^"/, "\'").replace(/"$/, "\'") %>');t("scroll",new m(document.scrollingElement,i))}})(),module.exports=n.default})();