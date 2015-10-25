/*

Modernizr 3.1.0
Source: https://github.com/modernizr/modernizr

Copyright 2015
License: http://opensource.org/licenses/MIT

Build: http://modernizr.com/download/?-csstransforms3d-csstransitions-inputtypes-notification-touchevents-domprefixes-prefixed-prefixes-shiv-testallprops-testprop-teststyles

*/

!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),y.push((i?"":"no-")+s.join("-"))}}function o(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?w.className.baseVal=t:w.className=t)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(){var e=t.body;return e||(e=l(_?"svg":"body"),e.fake=!0),e}function c(e,n,r,i){var o,a,s,c,f="modernizr",d=l("div"),p=u();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=i?i[r]:f+(r+1),d.appendChild(s);return o=l("style"),o.type="text/css",o.id="s"+f,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=c,w.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?f(i,n||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+p(t[i])+":"+r+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,i,o){function u(){f&&(delete D.style,delete D.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var c=m(e,i);if(!r(c,"undefined"))return c}for(var f,d,p,h,v,g=["modernizr","tspan"];!D.style;)f=!0,D.modElem=l(g.shift()),D.style=D.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=D.style[h],s(h,"-")&&(h=a(h)),D.style[h]!==n){if(o||r(i,"undefined"))return u(),"pfx"==t?h:!0;try{D.style[h]=i}catch(y){}if(D.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function v(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,i,o):(s=(e+" "+E.join(a+" ")+a).split(" "),d(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],b={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("notification","Notification"in e&&"permission"in e.Notification&&"requestPermission"in e.Notification);var S=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];b._prefixes=S;var x="Moz O ms Webkit",E=b._config.usePrefixes?x.toLowerCase().split(" "):[];b._domPrefixes=E;var w=t.documentElement,_="svg"===w.nodeName.toLowerCase();_||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function o(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||m.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)i.createElement(s[a]);return i}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=o(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:i};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var k="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",k||N);var T=b._config.usePrefixes?x.split(" "):[];b._cssomPrefixes=T;var z=function(t){var r,i=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=S[a],l=s.toUpperCase()+"_"+r;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};b.atRule=z;var P=l("input"),j="search tel url email datetime date month week time datetime-local number range color".split(" "),F={};Modernizr.inputtypes=function(e){for(var r,i,o,a=e.length,s=":)",l=0;a>l;l++)P.setAttribute("type",r=e[l]),o="text"!==P.type&&"style"in P,o&&(P.value=s,P.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&P.style.WebkitAppearance!==n?(w.appendChild(P),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(P,null).WebkitAppearance&&0!==P.offsetHeight,w.removeChild(P)):/^(search|tel)$/.test(r)||(o=/^(url|email|number)$/.test(r)?P.checkValidity&&P.checkValidity()===!1:P.value!=s)),F[e[l]]=!!o;return F}(j);var L=b.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");L(r,function(e){n=9===e.offsetTop})}return n});var A={elem:l("modernizr")};Modernizr._q.push(function(){delete A.elem});var D={style:A.elem.style};Modernizr._q.unshift(function(){delete D.style});b.testProp=function(e,t,r){return h([e],n,t,r)};b.testAllProps=v;b.prefixed=function(e,t,n){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};b.testAllProps=g,Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n;Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",L(n,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0)),i(),o(y),delete b.addTest,delete b.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);