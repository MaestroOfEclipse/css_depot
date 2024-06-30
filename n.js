/* jssdk-n.v2.js 2024-06-12 11:24 528eda76d750c0654bc56a3a2fbd3f186bb56e8e */
!function(){"use strict";var O=void 0;function U(e){return e&&document.cookie.length&&(e=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))&&e.length&&e[1]?decodeURIComponent(e[1]):O}var P={self:"",outer:"mn-outer",thumb:"mn-thumb",thumbImg:"mn-thumb__img",label:"mn-thumb__label",container:"mn-related-container",innerContainer:"mn-container",headlineLink:"mn-thumb__label-title-link",brandnameLabel:"mn-thumb__label-brand",brandnameLink:"mn-thumb__label-brand-link",image:"mn-thumb__aspect",closeButton:"mn-position-fixed__close-button",tracking:"mn-thumb__tracker_",holder:"mn-thumb__holder",streamCanvas:"mn-thumb-stream-canvas",streamHls:"mn-thumb__hls-wrapper"},c="prev_banners",M="fixed";function H(e){return document.getElementById(e)}function $(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,a,r=n.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(o=r.next()).done;)i.push(o.value)}catch(e){a={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function j(e,t,n){if(n||2===arguments.length)for(var o,a=0,r=t.length;a<r;a++)!o&&a in t||((o=o||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))}var G=3,u="Undefined",m="",de={thumb:{width:"".concat(200,"px"),"margin-left":"".concat(10,"px"),"margin-right":"0px"}},e={BACKUP_SCRIPT_URL: "//cdn.tsyndicate.com/sdk/v1/backup.v2.js", BASE_ROTATOR_URL: "//tsyndicate.com/do2/", CANVAS_PLAYER_SCRIPT_URL: "//cdn.tsyndicate.com/sdk/v1/adstreamcanvas.player.v2.js", HLS_PLAYER_SCRIPT_URL: "//cdn.tsyndicate.com/sdk/v1/hls.light.min.js", STYLE_URL: "//cdn.tsyndicate.com/sdk/v1/n.v2.css", METRICS_COLLECTOR_URL:"//m.tsyndicate.com/ad_stat"},p=e.BASE_ROTATOR_URL,q=e.METRICS_COLLECTOR_URL,ue=e.STYLE_URL,v=e.BACKUP_SCRIPT_URL,me=e.HLS_PLAYER_SCRIPT_URL,fe=e.CANVAS_PLAYER_SCRIPT_URL;function F(e){return document.createElement(e)}function Y(e,t){for(var n={},o=Object.keys(e),a=Object.keys(t),r=0;r<o.length;r++)n[o[r]]=e[o[r]];for(var i=0;i<a.length;i++)n[a[i]]=t[a[i]];return n}function V(e,t){return"@media screen and (max-width: ".concat(e,") {").concat(t,"}")}function W(e){return"object"==typeof e&&!Array.isArray(e)}function K(e){return W(e)}function z(n,o,e){var t="#".concat(n),a="} ",r="";return Object.entries(e).forEach(function(e){var e=$(e,2),t=e[0],e=e[1];K(e)?a+=z(n,"".concat(o).concat(t),e):r+="".concat(t,": ").concat(e,"; ")}),"".concat(t+t," ").concat(o," { ").concat(r).concat(a)}function J(e){void 0===e&&(e=5);for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function X(e,t,n){var o,a,r,i=F("script"),c="callback_".concat(J());return n&&(i.className="mn-cdn-backup-script"),o=t,a=c,r=i,window[a]=function(e){o(e),null!=(e=r.parentNode)&&e.removeChild(r),window[a]=O},i.src="".concat(e,"&callback=").concat(c),document.body.appendChild(i),i}var t=(e={}).cookieName,e=void 0===(e=e.chanceLimit)?2e3:e,t=Number(U(void 0===t?"ts_slaEventsRandomChanceCount":t)),f=!!(e=Number.isNaN(t)?e:t)&&0===Math.floor(Math.random()*e);function Z(){return f?Date.now():O}function Q(e,t,n,o){var a=void 0===(a=(o=void 0===o?{}:o).method)?"GET":a,r=void 0===(r=o.body)?"":r,i=void 0===(i=o.headers)?[]:i,o=void 0!==(o=o.withCredentials)&&o,c=new XMLHttpRequest;c.withCredentials=o,c.onload=function(){if(200===c.status){var e=void 0;try{e=JSON.parse(c.response)}catch(e){}t(e)}else n()},c.onerror=n,c.open(a,e,!0),i.forEach(function(e){var t=(e=$(e,2))[0],e=e[1];c.setRequestHeader(t,e)}),c.send(r)}function ee(e){var t=e.spot,n=e.format,o=e.serviceBaseUrl,a=e.details,e=e.eventType,n=["ad_format=".concat(encodeURIComponent(n)),"spot=".concat(encodeURIComponent(t)),"event_type=".concat(encodeURIComponent(e))].join("&"),t=o.startsWith("//")?"https:".concat(o):o;Q("".concat(t,"?").concat(n),function(){},function(){return O},{method:"POST",headers:[["Content-Type","application/json"]],body:a?JSON.stringify(a):O})}function s(e){return e.map(function(e){return null==e?void 0:e.trim()}).filter(Boolean).join(",").replace(/,+/g,",").replace(/\s*,\s*/g,",").replace(/\s+/g," ").replace(/^,|,$/g,"")}var te=["param1","param2","param3","subid","subid_1","subid_2","subid_3","subid_4","subid_5","subid_6","extid","xhid","abt","xoc","xvr","xsrc","xprf","xch","xou","xma","xtype","cookie","xu"];function l(e){try{return window.localStorage.getItem(e)}catch(e){return null}}function ne(e,t){var n,o,a,t=void 0===t?{}:t,r=t.isBackup,r=void 0!==r&&r,i=t.thumbCountDiff,i=void 0===i?0:i,t=t.useDsa,t=void 0!==t&&t,i=[r?"spot=".concat(e.spot):O,r&&t?"use_dsa=true":O,(n=e,o=void 0===(t={}.fallbackValues)?{}:t,te.map(function(e){var t;return[e,null!=(t=n[e])?t:o[e]]}).map(function(e){var t=(e=$(e,2))[0];return(e=e[1])?"".concat(t,"=").concat(e):""}).filter(Boolean).join("&")),(t=i||e.rows*e.cols,"count=".concat(!t||t<=0?G:t)),function(){var e=l(c);if(e){var t=c;try{window.localStorage.removeItem(t)}catch(t){}return"prev_banners=".concat(e)}return O}(),(i=void 0===(i=window.devicePixelRatio)?1:i,(t=window.screen)&&t.width&&t.height?(a=t.width*i,t=t.height*i,"w=".concat(a,"&h=").concat(t)):O),(t=(i={keywords:[e.keywords,(i=void 0===(i={}.collectFromPath)||i,a=function(){for(var e=document.getElementsByTagName("meta"),t=[],n=0;n<e.length;n++){var o=e[n].getAttribute("name");"description"!==o&&"keywords"!==o||(o=e[n].getAttribute("content"))&&t.push(o)}return t}(),document.title&&a.push(document.title),i&&a.push.apply(a,j([],$((t=(t=window.location.pathname.split("/"))[t.length-1].split(/[?#]/)[0])&&t.replace(/(x?html?)$/gi,"").match(/([a-zA-Z0-9]+)/g)||[]),!1)),s(a))],charLimitCount:3e3}).keywords,a=i.charLimitCount,i=i.queryParamKey,(t=s(t).substring(0,a))?"".concat(i||"keywords","=").concat(encodeURIComponent(t)):void 0),function(e){var t="",n=e.fixed,n=n&&n.position;if(n)switch(n){case"center":t="toast";break;case"left":t="im-left";break;case"right":t="im-right"}return"adtype=".concat(t||e.type)}(e),(a=(new Date).getTimezoneOffset(),"tz=".concat(a).replace("-","%2D"))].filter(Boolean).join("&");return(r?"".concat(v,"?"):"".concat(p).concat(e.spot,"/dynamic?format=jsonp&")).concat(i)}function oe(e,t){var n=t.onSuccess;return X(ne(e,{isBackup:!0,thumbCountDiff:t.thumbCountDiff,useDsa:t.useDsa}),n,!0)}var ae="m3u8",pe="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;function d(e){return e.adsByUrl||(t=(e={utmContent:e.type,utmTerm:"native"}).utmContent,n=e.utmTerm,o=void 0===(o=e.utmCampaign)?"AdsBy":o,a=void 0===(a=e.campaignType)?"shows":a,r=void 0===(r=e.deviceType)?"all":r,i=void 0===(i=e.utmSource)?window.location.host:i,c=void 0===(c=e.p1)?"AdsBy":c,s=void 0===(s=e.p2)?window.location.host:s,l=void 0===(l=e.segment)?"new":l,e=void 0===(e=e.cluster)?"mixed":e,"https://trafficstars.com?".concat(["utm_source=".concat(i),"utm_campaign=".concat(o),"utm_content=".concat(t),"utm_term=".concat(n),"p1=".concat(c),"p2=".concat(s),"campaign_type=".concat(a),"device_type=".concat(r),"segment=".concat(l),"cluster=".concat(e)].join("&")));var t,n,o,a,r,i,c,s,l}function re(e,t){var n,o=t.adsByPosition;return-1!==e.indexOf(o)?(n=t.showLogoInfo?(e=o,n=d(o=t),o=o.noBlank?"_top":"_blank",'<a rel="nofollow noopener" tabindex="-1" '+'class="mn-container-adsby-info" href="'.concat(n,'" target="').concat(o,'">')+'<span class="mn-container-adsby-info__icon"></span>'+'<span class="mn-container-adsby-info__msg mn-container-adsby-info__msg_'.concat(e,'">').concat("Ads by TrafficStars","</span>")+"</a>"):(o=d(n=t),e=n.noBlank?"_top":"_blank",'<a rel="nofollow noopener" tabindex="-1" '+'class="mn-container-adsby__link" href="'.concat(o,'" target="').concat(e,'">')+'Ads by <span class="mn-container-adsby__a">TrafficStars</span></a>'),'<div class="mn-container-adsby mn-container-adsby_position_'.concat(t.adsByPosition,'">').concat(n,"</div>")):""}var ie="data-id",o=!(!(t=document.createElement("canvas")).getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp");function _(e,i){function t(e){return e.filter(function(e){return"image"===e.type}).forEach(function(e){var t,n,o,a=r&&r.w!==O&&e.w!==O&&r.w>e.w;(!r||a||(a=e.w,t=r,o=.9*((o=H(i.elementId))?(o=o.offsetWidth,n=window.innerWidth<760?1:i.cols,parseInt(String(o/n),10)):0),a!==O&&o<=a&&!t.w))&&(r=e)}),r&&r.src||function(e){for(var t=0;t<e.length;t++){var n=e[t],o=n.src;if(o&&!n.w)return o}return O}(e)||function(e){for(var t=0;t<e.length;t++){var n=e[t].src;if(n)return n}return O}(e);var r}return e.thumbs&&(n=e.thumbs,(o?t(n.filter(function(e){e=e.src;return Boolean(e&&-1!==e.indexOf(".webp"))})):O)||t(e.thumbs));var n}function ce(e){return"".concat(P.tracking).concat(e.id)}function ve(o,a,e){var t,e=(void 0===e?{}:e).genderIconHtml,r=void 0===e?"":e,n="";switch(o.advname&&(n+=(e=o.advname,e="This slot is a paid ad by ".concat(e,". You are seeing this ad because of several factors, including advertiser bid and relevance to your search criteria."),t=d(a),'<div class="dsa-info"><div class="dsa-icon__wrapper"><div class="dsa-icon"><div class="dsa-icon__text">AD</div></div></div><div class="dsa-info__wrapper"><div class="dsa-info__content">'+'<div class="dsa-info__text">'.concat(e,"<br /><br />")+'<div class="dsa-info__link">Ads by <a  href="'.concat(t,'" target="_blank">TrafficStars</a></div></div></div>')+'<div class="dsa-info__close"></div></div></div>')),a.type){case"image":n+=i();break;case"img-left":case"img-right":case"label-over":case"label-under":n+="".concat(i()).concat(c());break;case"text":n+=c()}function i(){var e=o.link,t=_(o,a)?"":"mn-thumb__img_no-img",n=a.noBlank?"_top":"_blank";return'<a rel="nofollow noopener" tabindex="-1" target="'.concat(n,'" href="').concat(e,'">')+'<div class="mn-thumb__holder">'+"<span ".concat(ie,'="').concat(o.id,'" class="mn-thumb__img ').concat(t,'"></span>')+"".concat(r)+'<div class="'.concat(P.image,'"></div>')+"</div></a>"}function c(){var e=o.link,t=o.id,n=a.noBlank?"_top":"_blank";return'<span class="'.concat(P.label,'">')+'<span class="mn-thumb__label-title">'+'<a rel="nofollow noopener" tabindex="-1" '.concat(ie,'="').concat(t,'" class="').concat(P.headlineLink,'" target="').concat(n,'" href="').concat(e,'">')+"".concat(o.headline||u)+'</a></span><span class="mn-thumb__label-brand">'+'<a rel="nofollow noopener" tabindex="-1" '.concat(ie,'="').concat(t,'" class="').concat(P.brandnameLink,'" target="').concat(n,'" href="').concat(e,'">')+"".concat(o.brandname||m,"</a>")+"</span></span>"}return n+(e=ce(o),'<div id="'.concat(e,'" class="mn-thumb__tracker"></div>'))}function _e(e,t){return t.reduce(function(e,t){return e.replace(new RegExp("\\{"+t.name+"\\}","gm"),t.value)},e)}var be=["male","female","couple","group","gays","lesbians","females","femaleTranny","maleFemale","males","maleTranny","tranny","trannies"];function se(e){return"".concat(P.thumb,"_").concat(e.id)}function he(e,t,n,o){ee({spot:e,eventType:n,format:"native-dynamic",serviceBaseUrl:q,details:{url:t,reason:o||null}})}function ge(e){var t=e.isLoading,n=e.isLoaded,o=e.onBeforeLoad,a=e.onSuccess,r=e.scriptUrl,i=e.eventName;t||n?n?a():document.addEventListener(i,a):(o(),e=r,t=function(){a(),document.dispatchEvent(new CustomEvent(i))},(n=F("script")).src=e,n.addEventListener("load",t),document.body.appendChild(n))}(e={})[MediaError.MEDIA_ERR_ABORTED]="error_MEDIA_ERR_ABORTED",e[MediaError.MEDIA_ERR_NETWORK]="error_MEDIA_ERR_NETWORK",e[MediaError.MEDIA_ERR_DECODE]="error_MEDIA_ERR_DECODE",e[MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED]="error_MEDIA_ERR_SRC_NOT_SUPPORTED";var ye=e;function we(e){return document.querySelector("#".concat(e," .mn-container"))}function Ee(){try{return window.self!==window.top}catch(e){return 1}}function b(e){return new URL(/^http(s)?:/.test(e)?e:"https://".concat(e)).hostname}function h(e){return"navigation"===e.entryType}var g={};function Se(c,s,l){var e,t,d,u=_(c,s),m=document.querySelector("[".concat(ie,'="').concat(c.id,'"]'));m&&u?(t=document.createElement("img"),d=Z(),t.addEventListener("load",function(){var e,t,n,o,a,r=c.cw,i=c.ch;m.style.backgroundImage="url(".concat(u,")"),r!==O&&i!==O&&(m.style.backgroundPosition="".concat(r,"% ").concat(i,"%")),i=(r={settings:s,startTime:d,imageUrl:u,thumbIndex:l}).settings,t=r.imageUrl,(e=r.startTime)===O||e<0||(o=i.cols*i.rows,r=r.thumbIndex+1,e=Date.now()-e,n="rtb"===i.spotType?"native-rtb":"native-direct",t=b(t),ee({format:n,spot:i.spot,serviceBaseUrl:q,eventType:"CREATIVE_LOADED",details:{total_thumb_count:o,thumb_count:r,loading_time:e,cdn_domain:t}})),g[s.spot]||(n=s,f&&(i=void 0===(i=(a=void 0===a?{}:a).performance)?window.performance:i,a=a.currentTimeInMillis,o=i&&"function"==typeof i.getEntries&&(a=a===O?i.now():a,i=i.getEntries().find(h))?a-i.domContentLoadedEventEnd:O,ee({spot:n.spot,format:"direct"===n.spotType?"native-direct":"native-rtb",serviceBaseUrl:q,eventType:"FIRST_CREATIVE_APPEARED",details:{loading_time:o}})),g[s.spot]=!0)}),t.addEventListener("error",function(){var e=(t={settings:s,imageUrl:u}).settings,t=t.imageUrl,n="rtb"===e.spotType?"native-rtb":"native-direct",o=b(t);ee({format:n,spot:e.spot,serviceBaseUrl:q,eventType:"error_IMG_LOADING",details:{cdn_domain:o,url:t}})}),t.src=u):u||ee({format:"rtb"===(e=(t={settings:s,bannerId:c.banner_id}).settings).spotType?"native-rtb":"native-direct",spot:e.spot,serviceBaseUrl:q,eventType:"error_NO_IMG",details:{banner_id:t.bannerId}})}function le(e){return e.filter(function(e){return!e.isTracked})}function Le(n,e){var o,t,a;e&&(a=n,t=".".concat(P.thumbImg),a=(a=a.parentNode)&&a.querySelector(t),o=a?"&ir=".concat(a.offsetWidth,"x").concat(a.offsetHeight):"",e.forEach(function(e){var e=e+o,t=F("img");t.setAttribute("src",e),t.setAttribute("height","1px"),t.setAttribute("width","1px"),n.appendChild(t)}))}function Re(e,t){if(t.isTracked=!0,t.urls){Le(e,t.urls);e=t.bannerId;if(e){var t=(t=l(c))?t.split(","):[],n=c,t=j(j([],$(t),!1),[e],!1).join(",");try{window.localStorage.setItem(n,t)}catch(n){}}}}function Te(r,e){le(e).forEach(function(e){var t,n,o,a=H(e.domId);a&&(Ee()||(n=r,o=(t=a).getBoundingClientRect().top<=window.innerHeight,n.scrollable?o&&(t=t,n=H(n.elementId))&&(t=t.getBoundingClientRect(),n=n.getBoundingClientRect(),t.top<=n.bottom)&&t.left<=n.right&&t.right>=n.left&&t.bottom>=n.top:o))&&Re(a,e)})}var Ie={self:{width:"100%"},container:{width:"100%"},thumb:{width:"100%",display:"none",":first-child":{display:"block"}}};window.NativeAd=function(e){var o,R,r,i,c,T,s,l,d,n,a,u,t,m,f,p,v,_,b,h,g,y,w,E,S,L,I,k,A,x,C,N=(e=e)&&(w=e.element_id,k=e.cols,L=e.rows,S=e.mobileEnabled,w)?Y((o=e,te.reduce(function(e,t){var n=o[t];return e[t]="number"==typeof n&&!Number.isNaN(n)||"string"==typeof n&&""!==n?String(n):O,e},{})),{elementId:String(w),spot:String(e.spot),cols:k===O?G:Number(k),rows:L===O?1:Number(L),titlePosition:function(e){switch(e){case"left":case"right":case"none":return e;default:return"left"}}(e.titlePosition),adsByPosition:function(e,t){switch(void 0===t&&(t="right"),e){case"bottom-left":case"bottom-right":case"right":case"left":case"none":return e;default:return t}}(e.adsByPosition),adsByUrl:e.adsByUrl?String(e.adsByUrl):O,type:function(e,t){switch(void 0===t&&(t="label-under"),e){case"label-over":case"label-under":case"img-left":case"img-right":case"image":case"text":return e;default:return t}}(e.type),styles:(w=e.styles)&&"object"==typeof w?(k=w.self,L=w.outer,I=w.thumb,N=w.thumbImg,f=w.label,x=w.container,C=w.innerContainer,p=w.headlineLink,b=w.brandnameLink,v=w.brandnameLabel,_=w.image,h=w.closeButton,t=w.tracking,y=w.holder,A=w.streamCanvas,w=w.streamHls,{self:K(k)?k:O,outer:K(L)?L:O,thumb:K(I)?I:O,thumbImg:K(N)?N:O,label:K(f)?f:O,container:K(x)?x:O,innerContainer:K(C)?C:O,headlineLink:K(p)?p:O,brandnameLabel:K(v)?v:O,brandnameLink:K(b)?b:O,image:K(_)?_:O,closeButton:K(h)?h:O,tracking:K(t)?t:O,holder:K(y)?y:O,streamCanvas:K(A)?A:O,streamHls:K(w)?w:O}):{},mobileEnabled:S===O||Boolean(S),scrollable:Boolean(e.scrollable),breakpoints:(k=e.breakpoints,Array.isArray(k)?k.filter(function(e){return W(e)&&"number"==typeof e.cols&&"number"==typeof e.width}):O),title:String(e.title||""),fixed:W(L=e.fixed)?{position:function(e){switch(e){case"center":case"left":case"right":return e;default:return"left"}}(L.position),cookieExpiresInMillis:3600*("number"!=typeof(I=L.cookieExpires)&&"string"!=typeof I||(I=Number(I),!Number.isFinite(I))?0:I)*1e3}:O,keywords:String(e.keywords||""),noBlank:Boolean(e.noBlank),showLogoInfo:Boolean(e.showLogoInfo),spotType:"direct"}):O;function B(e){var t=R,n=T,o=D,a=H(t.elementId);if(a){var r,i,e=e.map(function(e){return Y(e,{id:J()})}),c=(r=t.rows,s=t.scrollable,d=(c=e).length,d=Array.from({length:d},function(e,t){return t}),i=j([],$(c),!1).sort(function(e,t){return(t.rate||0)-(e.rate||0)}),s?(d.sort(function(e,t){return e%r-t%r||e-t}),d.map(function(e){return i[e]})):i),s=e.map(function(e){var t=e.imgtrackers;return{domId:ce(e),bannerId:e.banner_id,isTracked:!1,urls:t&&t.length?t:O}}),l=t,d=n,u=a,m=c,f=s,e=o,p={},t=P.innerContainer,v=P.thumb,_=l.elementId,b=l.scrollable,h=l.type,n=l.cols,a=l.titlePosition,c=l.title,g="text"!==l.type,y={};if(u.addEventListener("click",function(e){var t,e=e.target,n=null==(n=null==(n=e.parentElement)?void 0:n.closest(".dsa-info"))?void 0:n.querySelector(".dsa-info__wrapper"),o=null==(o=null==(o=null==n?void 0:n.parentElement)?void 0:o.closest("div[id]"))?void 0:o.id;e.className.includes("dsa-info")&&n?L(n,o):e.className.includes("dsa-icon")&&n?S(n,o):(t=(n=e).getAttribute(ie)||(o=n.querySelector("[".concat(ie,"]")))&&o.getAttribute(ie)||O)&&(e=m.find(function(e){return e.id===t}))&&(n=e.clicktrackers)&&(o=H(ce(e)))&&Le(o,n)}),u.innerHTML=(e="".concat((s=l.mobileEnabled?"":" mn-related-container_no-responsive",'<div class="'.concat(P.container).concat(s,'">')+(e?e():"")+(c&&"none"!==a?'<div class="mn-container-title mn-container-title_position_'.concat(a,' ">').concat(c,"</div>"):"")+re(["left","right"],l)),'<div class="').concat(t,'">')+'<div class="'.concat(P.outer," mn-thumbnails_col-").concat(n," mn-thumbnails_").concat(h,'"').concat(b?(o=d&&d.thumb?parseInt(String(d.thumb.width||""),10):NaN,s=d&&d.thumb?parseInt(String(d.thumb["margin-left"]||""),10):NaN,' style="width:'.concat(n*o+n*s,'px"')):"",">"),a=m.reduce(function(e,t){return"".concat(e).concat((t=(e=t).assetsurl!==O,n=(t=g&&t)?"".concat(v,"_deferred-loading"):"",o=t?(t=h,o=P.label,o='<span class="'.concat(o,' mn-thumb__label_deferred">')+"</span>",t="image"===t?"":o,'<div class="mn-thumb__holder">'.concat('<div class="mn-thumb-spinner"><div class="mn-thumb-spinner__disc mn-thumb-spinner__disc-1"></div><div class="mn-thumb-spinner__disc mn-thumb-spinner__disc-2"></div><div class="mn-thumb-spinner__disc mn-thumb-spinner__disc-3"></div></div>','<div class="mn-thumb__aspect">')+"</div>"+"</div>".concat(t)):ve(e,l),'<div id="'.concat(se(e),'" class="').concat(v," ").concat(n,'">')+"".concat(o)+"</div>"));var n,o},""),c='<div class="mn-clear"></div></div></div>'+'<div class="mn-clear"></div>'.concat(re(["bottom-left","bottom-right"],l),"</div>"),"".concat(e).concat(a).concat(c)),g&&m.forEach(function(e,a){e.assetsurl!==O?function t(o,a,r){function v(){oe(a,{onSuccess:function(e){e=Y(o,e.list[0]);e.assetsurl!==O?t(e,a,r):_(e)},thumbCountDiff:1})}function _(e,t){var t=(void 0===t?{}:t).genderIconHtml,t=void 0===t?"":t,n=H(se(e));n&&(n.innerHTML=ve(e,a,{genderIconHtml:t}))}o.assetsurl&&Q(o.assetsurl,function(e){var t,n,i,c,s,l,d,u,m,f,p;(null==e?void 0:e.assets)!==O&&(n=o,e=e.assets,u=d=l="",m=!1,f=[],p=[],e.forEach(function(e){var t,n;if(e.title!==O)i=e.title.text||"";else if(e.link!==O)d=e.link.url||"";else{if(e.data!==O){var o,a=e.data,r=a.value;switch(a.type){case 500:p.push({name:"country",value:r});break;case 1e3:l="true"===r?"online":"offline",p.push({name:"is_online",value:l});break;case 1001:p.push({name:"gender",value:r}),c=-1!==be.indexOf(t=r)?t:O;break;case 1002:p.push({name:"username",value:r});break;default:(o=a.ext)&&o.name&&p.push({name:o.name,value:r})}}e.img!==O&&(e=(n=e.img).url,3===n.type)&&((o=n.ext)&&o.stream&&(m=!0,u=e,s=o.stream_format),f.push({type:"image",src:e,w:function(){var e={small:250,big:500,snapshot:1e3},t=n.ext;if(t){if(t.size)return e[t.size];if("snapshot"===t.name)return e.snapshot}return O}()}))}}),n=(e=Y(n,{headline:n.headline?_e(n.headline,p):i,brandname:n.brandname?_e(n.brandname,p):"",onlineLabel:l,link:d,streamUrl:u,thumbs:f,gender:c,streamFormat:s,isStream:m})).gender,t=e.advname,_(e,{genderIconHtml:n?'<div class="gender-icon__wrapper" style="right: '.concat(t?"36px":"6px",'">')+'<div class="gender-icon gender-icon__'.concat(n,'">')+"</div></div>":""}),e.streamUrl?r(e):e.isStream&&he(a.spot,e.assetsurl||"","error_NO_STREAM_URL_PROVIDED"),t=e.thumbs)&&t.some(function(e){return Boolean(e.src)})||v()},v)}(e,l,function(e){var o,t,n;Se(o=e,l,a),e=o.streamFormat===ae,o.isStream&&(!e||(e=document.createElement("video"),Boolean(e.canPlayType("application/vnd.apple.mpegURL")))||(e=window.MediaSource||window.WebKitMediaSource)&&(n=window.SourceBuffer||window.WebKitSourceBuffer,e=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),n=!n||n.prototype&&"function"==typeof n.prototype.appendBuffer&&"function"==typeof n.prototype.remove,Boolean(e))&&Boolean(n))&&(t=o,e=function(){function e(){function f(){return null!==H(se(p))}var e,p,v,_,t,n=l;(t=H(se(e=o)))&&(v=t,_=n,(p=e).streamFormat===ae?requestAnimationFrame(function(){var t,e,n,o,a,r,i,c,s,l,d=P.thumbImg,d=((l=F("div")).className=P.streamHls,v.querySelector(".".concat(d))),u=l,m=d;f()&&(l=P.holder,d=p.id,(s=F("video")).controls=!1,s.autoplay=!1,s.muted=!0,s.playsInline=!0,s.setAttribute("webkitplaysinline","webkitplaysinline"),s.setAttribute(ie,d),s.className=P.streamCanvas,t=s,e=v.querySelector(".".concat(l)),TS_HLS)&&e&&(n=new TS_HLS({maxMaxBufferLength:100}),o=!1,a=0,r=function(e,t){return he(_.spot,p.streamUrl,e,t)},setTimeout(function(){f()?o||t.currentTime||t.paused||(r("error_MEDIA_ERR_TIMEOUT","unknown_reason"),o=!0,n.destroy()):n.destroy()},1e4),u.appendChild(t),e.appendChild(u),i=function(){u.style.backdropFilter="blur(0px)",u.style["-webkit-backdrop-filter"]="blur(0px)",e.style.backgroundColor="unset",t.style.display="none",m&&(m.style.opacity="1")},c=function(){0<t.currentTime&&(u.style.backdropFilter="blur(5px)",u.style["-webkit-backdrop-filter"]="blur(5px)",e.style.backgroundColor="#000",m&&(m.style.opacity=".6"),t.removeEventListener("timeupdate",c))},t.addEventListener("timeupdate",c),TS_HLS.isSupported()?(n.on(TS_HLS.Events.MANIFEST_PARSED,function(){t.play()}),n.on(TS_HLS.Events.ERROR,function(e,t){f()?t.fatal&&(t.type===TS_HLS.ErrorTypes.MEDIA_ERROR?(1<++a&&n.swapAudioCodec(),n.recoverMediaError()):o||(o=!0,i(),r("error_".concat(t.type),t.details),n.off(TS_HLS.Events.ERROR),n.destroy())):n.destroy()}),n.loadSource(p.streamUrl),n.attachMedia(t)):(t.addEventListener("loadedmetadata",function(){t.play()}),t.addEventListener("error",function(){var e;!o&&f()&&(e=null!=(e=t.error)&&e.code?ye[t.error.code]:"error_MEDIA_ERR_OTHER",i(),r(e),o=!0)}),t.src=p.streamUrl))}):requestAnimationFrame(function(){t=p.id,(e=F("canvas")).setAttribute(ie,t),e.className=P.streamCanvas;var e,t=e,n=(e=p.streamUrl,n=t,AdStreamCanvasPlayer?(new AdStreamCanvasPlayer).setCanvasRef(n).setStreamUrl(e):O);n&&f()&&(e=t,t=n,n=P.holder,(n=v.querySelector(".".concat(n)))&&n.appendChild(e),t.mount())}))}o.streamFormat===ae?ge({isLoading:window.$_TS_HLS_PLAYER_LOADING_IN_PROGRESS_$,isLoaded:Boolean(window.TS_HLS),scriptUrl:me,eventName:"$_TS_HLS_PLAYER_LOADED_$",onBeforeLoad:function(){window.$_TS_HLS_PLAYER_LOADING_IN_PROGRESS_$=!0},onSuccess:function(){e(),window.$_TS_HLS_PLAYER_LOADING_IN_PROGRESS_$=!1}}):ge({isLoading:window.$_TS_CANVAS_PLAYER_LOADING_IN_PROGRESS_$,isLoaded:Boolean(window.AdStreamCanvasPlayer),scriptUrl:fe,eventName:"$_TS_CANVAS_PLAYER_LOADED_$",onBeforeLoad:function(){window.$_TS_CANVAS_PLAYER_LOADING_IN_PROGRESS_$=!0},onSuccess:function(){e(),window.$_TS_CANVAS_PLAYER_LOADING_IN_PROGRESS_$=!1}})},(n=f.find(function(e){return e.domId===ce(t)}))&&n.isTracked?e():p[o.id]=e)}):Se(e,l,a)}),b)for(var w=document.getElementsByClassName(t),E=0;E<w.length;E++)w[E].scrollTop=0,w[E].scrollLeft=0;setTimeout(function(){var e,n,t,o,a;pe?((t=new IntersectionObserver(function(e){var o=t;e.forEach(function(e){var t,n=o;(Ee()||e.isIntersecting)&&(t=e.target,(e=f.find(function(e){return e.domId===t.id}))&&(Re(t,e),e=e.domId.slice(P.tracking.length),p[e])&&(p[e](),delete p[e]),n.unobserve(t),0===le(f).length)&&n.disconnect()})})).observe(u),f.forEach(function(e){e=H(e.domId);e&&t.observe(e)})):(o=200,a=null,n=function(){a=a||window.setTimeout(function(){var e,t;Te(l,f),le(f).length||(t=l,e=n,window.removeEventListener("scroll",e),t.scrollable&&(t=we(t.elementId))&&t.removeEventListener("scroll",e)),a=null},o)},Te(l,f),window.addEventListener("scroll",n),b&&(e=we(_))&&e.addEventListener("scroll",n))},500);var S=function(e,t){e.classList.add("dsa-info__visible");var n=window.setTimeout(function(){return L(e,t)},6e4);t&&(y[t]=n)},L=function(e,t){e.classList.remove("dsa-info__visible"),t&&((e=y[t])&&window.clearTimeout(e),y[t]=null)}}}function D(){var e;return c?(e=P.closeButton,'<div class="'.concat(e,'"></div>')):""}N&&(C=H(x=(f=N).elementId),!U("".concat(M).concat(x)))&&C&&(r=C,i=(R=f).elementId,c=R.fixed,t=[(p=(u=R).fixed,v=R.styles,a=R.elementId,b=p&&"center"===p.position,h=String(null==(_=null==v?void 0:v.container)?void 0:_.width),b&&h?(n="",Object.keys(Ie).forEach(function(e){var t="self"===e?"":".".concat(P[e]);n+=z(a,t,Ie[e])}),V(h,n)):"")],g=u.elementId,y=u.scrollable,A=u.styles,w=u.breakpoints,E=Y({},A||{}),y&&(E.thumb=Y(de.thumb||{},(A||{}).thumb||{})),S=ue,L=void 0===(L=(k={}).type)?"text/css":L,I=void 0===(I=k.rel)?"stylesheet":I,e=k.onLoad,k=k.onError,(N=document.head).querySelector('[href="'.concat(S,'"]'))?e&&e():((x=document.createElement("link")).type=L,x.rel=I,x.href=S,e&&x.addEventListener("load",e),k&&x.addEventListener("error",k),N.appendChild(x)),(A=j([y?(f="".concat(-1*(C=E.thumb,parseInt(String(C&&C["margin-left"]),10)),"px "),p=P.outer,v=P.innerContainer,_={"margin-left":f},b=z(g,".".concat(v),{"overflow-y":"scroll"}),h=z(g,".".concat(p),_),"".concat(b).concat(h)):"",w!==O&&j([],$(w),!1).sort(function(e,t){return t.width-e.width}).map(function(e){var t=P.thumb,n=P.container;return V("".concat(e.width,"px"),"#".concat(u.elementId," .").concat(n," .").concat(t," { width: ").concat(100/e.cols-1,"% }"))}).join(" ")||"",(m="",Object.keys(E).forEach(function(e){var t=E[e];P[e]&&K(t)&&(m+=z(g,".".concat(P[e]),t))}),m)],$(t),!1).join(""))&&((L=F("style")).appendChild(document.createTextNode(A)),document.body.appendChild(L)),T=E,(I=H(i))&&c&&(S=R.rows,e=R.type,N=((k=T.container)?parseInt(String(k.height),10):100)/S-("label-under"===e?82:0),I.className+=" mn-position-fixed mn-position-fixed_".concat(c&&c.position||""),T.image={"padding-bottom":"".concat(N,"px")}),r.addEventListener("click",function(e){var t,n,o,a;e.target.className===P.closeButton&&c&&((e=r.parentNode)&&e.removeChild(r),(e=c&&c.cookieExpiresInMillis)!==O)&&(a="".concat(M).concat(i),o=(e={lifetimeInMillis:e}).lifetimeInMillis,n=e.domain,e=void 0===(e=e.path)?"/":e,o=o!==O?new Date((new Date).getTime()+o):O,a=["".concat(a,"=").concat("1"),(t=(o={expireDate:o,shouldDelete:!1}).expireDate,o.shouldDelete?"expires=Thu, 01 Jan 1970 00:00:00 GMT":t?"expires=".concat(t.toUTCString()):""),n?"domain=".concat(n):"","path=".concat(e)].filter(Boolean).join(";"),document.cookie=a)}),s=R,l=(x={onSuccess:function(e){var t,n=B,o=R.cols*R.rows,a=e&&e.list||[],e=null==e?void 0:e.use_dsa;0<(t=o-a.length)?oe(R,{onSuccess:function(e){return n(j(j([],$(a),!1),$(e.list),!1))},thumbCountDiff:t,useDsa:e}):n(a.slice(0,o))},onError:function(){return oe(R,{onSuccess:function(e){return B(e.list)}})}}).onSuccess,y=x.onError,d=Z(),X(ne(s),function(e){try{o=(t={spot:s.spot,format:"direct"===s.spotType?"native-direct":"native-rtb",startTime:d}).spot,r=t.format,(a=t.startTime)===O||a<0||(n=Date.now()-a,ee({format:r,spot:o,serviceBaseUrl:q,eventType:"SPOT_DATA_LOADED",details:{loading_time:n}}))}catch(e){}var t,n,o,a,r;l(e)}).addEventListener("error",y))}}();
