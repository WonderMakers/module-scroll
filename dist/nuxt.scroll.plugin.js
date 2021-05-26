/*! For license information please see nuxt.scroll.plugin.js.LICENSE.txt */
(()=>{var t={796:(t,e,i)=>{t.exports=i(643)},264:t=>{"use strict";var e=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:e,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:e&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:e&&!!window.screen,isInWorker:!e};t.exports=i},518:t=>{var e,i,n,s,o,l,r,a,c,d,h,u,p,f,m,v=!1;function g(){if(!v){v=!0;var t=navigator.userAgent,g=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),w=/(Mac OS X)|(Windows)|(Linux)/.exec(t);if(u=/\b(iPhone|iP[ao]d)/.exec(t),p=/\b(iP[ao]d)/.exec(t),d=/Android/i.exec(t),f=/FBAN\/\w+;/i.exec(t),m=/Mobile/i.exec(t),h=!!/Win64/.exec(t),g){(e=g[1]?parseFloat(g[1]):g[5]?parseFloat(g[5]):NaN)&&document&&document.documentMode&&(e=document.documentMode);var x=/(?:Trident\/(\d+.\d+))/.exec(t);l=x?parseFloat(x[1])+4:e,i=g[2]?parseFloat(g[2]):NaN,n=g[3]?parseFloat(g[3]):NaN,(s=g[4]?parseFloat(g[4]):NaN)?(g=/(?:Chrome\/(\d+\.\d+))/.exec(t),o=g&&g[1]?parseFloat(g[1]):NaN):o=NaN}else e=i=n=o=s=NaN;if(w){if(w[1]){var b=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);r=!b||parseFloat(b[1].replace("_","."))}else r=!1;a=!!w[2],c=!!w[3]}else r=a=c=!1}}var w={ie:function(){return g()||e},ieCompatibilityMode:function(){return g()||l>e},ie64:function(){return w.ie()&&h},firefox:function(){return g()||i},opera:function(){return g()||n},webkit:function(){return g()||s},safari:function(){return w.webkit()},chrome:function(){return g()||o},windows:function(){return g()||a},osx:function(){return g()||r},linux:function(){return g()||c},iphone:function(){return g()||u},mobile:function(){return g()||u||p||d||m},nativeApp:function(){return g()||f},android:function(){return g()||d},ipad:function(){return g()||p}};t.exports=w},534:(t,e,i)=>{"use strict";var n,s=i(264);s.canUseDOM&&(n=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),t.exports=function(t,e){if(!s.canUseDOM||e&&!("addEventListener"in document))return!1;var i="on"+t,o=i in document;if(!o){var l=document.createElement("div");l.setAttribute(i,"return;"),o="function"==typeof l[i]}return!o&&n&&"wheel"===t&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}},643:(t,e,i)=>{"use strict";var n=i(518),s=i(534);function o(t){var e=0,i=0,n=0,s=0;return"detail"in t&&(i=t.detail),"wheelDelta"in t&&(i=-t.wheelDelta/120),"wheelDeltaY"in t&&(i=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=i,i=0),n=10*e,s=10*i,"deltaY"in t&&(s=t.deltaY),"deltaX"in t&&(n=t.deltaX),(n||s)&&t.deltaMode&&(1==t.deltaMode?(n*=40,s*=40):(n*=800,s*=800)),n&&!e&&(e=n<1?-1:1),s&&!i&&(i=s<1?-1:1),{spinX:e,spinY:i,pixelX:n,pixelY:s}}o.getEventType=function(){return n.firefox()?"DOMMouseScroll":s("wheel")?"wheel":"mousewheel"},t.exports=o}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n={};(()=>{"use strict";i.d(n,{default:()=>g});var t=!1;if("undefined"!=typeof window){var e={get passive(){t=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var s="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),o=[],l=!1,r=-1,a=void 0,c=void 0,d=function(t){return o.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},h=function(t){var e=t||window.event;return!!d(e.target)||e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1)},u=function(e,i){if(e){if(!o.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:i||{}};o=[].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(o),[n]),s?(e.ontouchstart=function(t){1===t.targetTouches.length&&(r=t.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(t,e){var i=t.targetTouches[0].clientY-r;!d(t.target)&&(e&&0===e.scrollTop&&i>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&i<0?h(t):t.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",h,t?{passive:!1}:void 0),l=!0)):function(t){if(void 0===c){var e=!!t&&!0===t.reserveScrollBarGap,i=window.innerWidth-document.documentElement.clientWidth;e&&i>0&&(c=document.body.style.paddingRight,document.body.style.paddingRight=i+"px")}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(i)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=i(796),f=i.n(p);const m=["easeInOutQuad","easeInCubic","inOutQuintic"];class v{constructor(t=document.scrollingElement,e={}){this.$scrollContainer=t===document.scrollingElement?window:t,this.$scrollingElement=t,this.scrollTop=0,this.scrollLeft=0,this.deltaX=0,this.deltaY=0,this.deltaLastUpdateTime=0,this.deltaUpdateDelay=30,this.lastDeltaScrollTop=0,this.lastDeltaScrollLeft=0,this.progressTop=0,this.progressLeft=0,this.scrollTopMax=0,this.scrollLeftMax=0,this.scrollHeight=0,this.scrollWidth=0,this.raf=null,this.callbacks={scroll:[],tick:[],wheel:[]},this.locks=[],this._animateOptions=null,this.options=Object.assign({},{},e),this.events={resize:this.resize.bind(this),tick:this.tick.bind(this),scroll:this.scroll.bind(this),wheel:this.wheel.bind(this)},window.addEventListener("resize",this.events.resize),this.$scrollContainer.addEventListener("scroll",this.events.scroll),this.$scrollContainer.addEventListener("wheel",this.events.wheel),this.tick()}get scrollData(){return{x:this.scrollLeft,y:this.scrollTop,deltaX:this.deltaX,deltaY:this.deltaY,progressY:this.progressTop,progressX:this.progressLeft}}recalc(){this.scrollHeight=this.$scrollingElement.scrollHeight,this.scrollWidth=this.$scrollingElement.scrollWidth,this.scrollTopMax=this.scrollHeight-this.$scrollingElement.clientHeight,this.scrollLeftMax=this.scrollWidth-this.$scrollingElement.clientWidth}tick(){this.recalc(),this.calcDelta(),this.update(),this._animate(),this.sendEvent("tick"),this.raf=requestAnimationFrame(this.events.tick)}scroll(t){this.update(),this.sendEvent("scroll",t)}wheel(t){const e=f()(t);this._animateOptions&&this._animateOptions.cancelable?(this._animateOptions.resolve(),this._animateOptions=null):this._animateOptions&&!this._animateOptions.cancelable&&t.preventDefault(),this.sendEvent("wheel",{original:t,normalize:e})}calcDelta(){const t=Date.now();t-this.deltaLastUpdateTime>this.deltaUpdateDelay&&(this.deltaX=this.scrollLeft-this.lastDeltaScrollLeft,this.deltaY=this.scrollTop-this.lastDeltaScrollTop,this.lastDeltaScrollTop=this.scrollTop,this.lastDeltaScrollLeft=this.scrollLeft,this.deltaLastUpdateTime=t)}update(){const t=this.$scrollingElement.scrollTop,e=this.$scrollingElement.scrollLeft;return this.scrollTop=t,this.scrollLeft=e,this.progressTop=this.scrollTopMax?this.scrollTop/this.scrollTopMax:0,this.progressLeft=this.scrollLeftMax?this.scrollLeft/this.scrollLeftMax:0,this}sendEvent(t,e){const i=this.callbacks[t],n=this.scrollData;for(const t of i)t.callback(n,e)}on(t,e,i={}){return this.callbacks[t]&&this.callbacks[t].push({callback:e,options:i}),this}off(t,e){if(this.callbacks[t]){const i=this.callbacks[t].findIndex((t=>t.callback===e));i>-1&&this.callbacks[t].splice(i,1)}return this}resize(){}lock(e,i,n={}){if(!(i instanceof HTMLElement))throw new Error("scrollContainer argument required");const r=this.locks.find((t=>t.active));var d;if(r&&((d=r.scrollContainer)?(o=o.filter((function(t){return t.targetElement!==d})),s?(d.ontouchstart=null,d.ontouchmove=null,l&&0===o.length&&(document.removeEventListener("touchmove",h,t?{passive:!1}:void 0),l=!1)):o.length||(void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."),r.active=!1),e)this.locks.push({scrollContainer:i,options:n,active:!0}),u(i,n);else{const t=this.locks.findIndex((t=>t.scrollContainer===i));if(t>-1&&this.locks.splice(t,1),this.locks.length){const t=this.locks[this.locks.length-1];t&&(t.active=!0,u(t.scrollContainer,t.options))}}return this}scrollTo({x:t=0,y:e=0,offsetX:i=0,offsetY:n=0,element:s=null,duration:o=0,easing:l="easeInOutQuad",cancelable:r=!0}){const a=this.isSafari();if(!m.includes(l))throw new Error(`Incorrect variable 'easing' value. Available:[${m.join(",")}]`);return new Promise((c=>{s instanceof HTMLElement&&(e=s.getBoundingClientRect().top+s.ownerDocument.defaultView.pageYOffset);const d={resolve:c,duration:o,cancelable:r,easing:l,time:Date.now(),start:{y:this.scrollTop,x:this.scrollLeft},distention:{y:e+n,x:t+i}};a||this.$scrollingElement.style.setProperty("scroll-snap-type","none"),o?this._animateOptions=d:(this.setPosition(d.distention.x,d.distention.y),d.resolve())})).then((()=>{a||this.$scrollingElement.style.removeProperty("scroll-snap-type")}))}_animate(){if(!this._animateOptions)return!1;const t=Date.now(),e=t-this._animateOptions.time,i=v[this._animateOptions.easing](e,this._animateOptions.start.x,this._animateOptions.distention.x,this._animateOptions.duration),n=v[this._animateOptions.easing](e,this._animateOptions.start.y,this._animateOptions.distention.y,this._animateOptions.duration);this.setPosition(i,n),t>=this._animateOptions.time+this._animateOptions.duration&&(this._animateOptions.resolve(),this._animateOptions=null)}setPosition(t,e){return this.$scrollingElement.scrollLeft=t,this.$scrollingElement.scrollTop=e,this}destroy(){cancelAnimationFrame(this.raf),document.removeEventListener("resize",this.events.resize),this.$scrollContainer.removeEventListener("scroll",this.events.scroll)}isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static easeInOutQuad(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}static easeInCubic(t,e,i,n){return e+i*((t/=n)*t*t)}static inOutQuintic(t,e,i,n){const s=(t/=n)*t,o=s*t;return e+i*(6*o*s+-15*s*s+10*o)}}const g=({app:t},e)=>{const i=JSON.parse('<%= JSON.stringify(options).replace(/^"/, "\'").replace(/"$/, "\'") %>');e("scroll",new v(document.scrollingElement,i))}})(),module.exports=n.default})();