!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Paragraph=t():e.Paragraph=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t){function n(e,t,n){var r,o,i,a,s;function c(){var u=Date.now()-a;u<t&&u>=0?r=setTimeout(c,t-u):(r=null,n||(s=e.apply(i,o),i=o=null))}null==t&&(t=100);var u=function(){i=this,o=arguments,a=Date.now();var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(s=e.apply(i,o),i=o=null),s};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(s=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},u}n.debounce=n,e.exports=n},function(e,t,n){(function(r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(o=++r)}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(3)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n(2))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function a(...e){if(!a.enabled)return;const t=a,o=Number(new Date),i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;s++;const i=r.formatters[o];if("function"==typeof i){const r=e[s];n=i.call(t,r),e.splice(s,1),s--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return a.namespace=e,a.enabled=r.enabled(e),a.useColors=r.useColors(),a.color=t(e),a.destroy=o,a.extend=i,"function"==typeof r.init&&r.init(a),r.instances.push(a),a}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){const n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(a),...r.skips.map(a).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n(4),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},function(e,t){var n=1e3,r=6e4,o=36e5,i=24*o;function a(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var s=typeof e;if("string"===s&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(e);if("number"===s&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);return t>=i?a(e,t,i,"day"):t>=o?a(e,t,o,"hour"):t>=r?a(e,t,r,"minute"):t>=n?a(e,t,n,"second"):e+" ms"}(e):function(e){var t=Math.abs(e);return t>=i?Math.round(e/i)+"d":t>=o?Math.round(e/o)+"h":t>=r?Math.round(e/r)+"m":t>=n?Math.round(e/n)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,n){"use strict";n.r(t);const r=(e,t)=>{if(e.parentNode){const n=e.parentNode.querySelectorAll("."+t.styles.settingsButton);Array.from(n).forEach(e=>e.classList.remove(t.styles.settingsButtonActive))}e.classList.add(t.styles.settingsButtonActive)},o=e=>{const t=document.createRange(),n=window.getSelection();t.selectNodeContents(e),t.collapse(!1),n.removeAllRanges(),n.addRange(t)},i=e=>{let t,n;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();const a=document.createElement("div");a.innerHTML=e;for(var r,o,i=document.createDocumentFragment();r=a.firstChild;)o=i.appendChild(r);n.insertNode(i),o&&((n=n.cloneRange()).setStartAfter(o),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}},a=function(e){if(document.body.createTextRange){const t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){const t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}else console.warn("Could not select text in node: Unsupported browser.")};var s=n(1),c=n.n(s);const u="object"==typeof document&&null!==document,l="object"==typeof window&&null!==window&&window.self===window;if(()=>u&&l){let t;try{"undefined"!=typeof window&&(t=window.localStorage.debug)}catch(e){console.error("groupher could not enable debug.")}c.a.enable(t)}var d=(e,t="@editor/")=>c()(`${t}${e}`);const f="cdx-mention",p="&nbsp;",h="inline_tmp_anchor",m=d("utils:markdown"),g="HEADER_1",y="HEADER_2",v="HEADER_3",b="UNORDERED_LIST",C="ORDERED_LIST",w="QUOTE",x="CODE",F={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINE_CODE:new RegExp(/\`([\S]{1,})\`/)},k=function(e){return{md:e[0],content:e[1],isValid:!0}},E=e=>{switch(e){case g:return{type:"header",toolData:{level:1},config:{}};case y:return{type:"header",toolData:{level:2},config:{}};case v:return{type:"header",toolData:{level:3},config:{}};case b:return{type:"list",toolData:{style:"unordered"},config:{}};case C:return{type:"list",toolData:{style:"ordered"},config:{}};case w:return{type:"quote",toolData:{},config:{}};case x:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}};var T=n(0),S=n.n(T);const L=function(e,t,n){let r=document.createElement("script");r.src=e,r.onload=t,r.onreadystatechange=t,n.appendChild(r)},A=(e,t=null,n={})=>{let r=document.createElement(e);Array.isArray(t)?r.classList.add(...t):t&&r.classList.add(t);for(let e in n)"placeholder"===e?r.setAttribute("placeholder",n[e]):0===e.indexOf("data-")?r.setAttribute(e,n[e]):r[e]=n[e];return r},R=e=>{for(var t in e)return!1;return!0},M=(e,t)=>{const{length:n}=e;let r=-1;for(;++r<n;)if(t(e[r],r,e))return r;return-1},O=(e,t,n={})=>{const r=Object.assign({markdown:!1,inlineMarkdown:!0,mention:!0,emoji:!0},n);t.listeners.on(e,"input",e=>S()(((e,t,n)=>{n.markdown&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n),{isValidMDStatus:o,MDType:i}=((e,t)=>{const n=e.textContent.trim();let r=!0,o="";const i=" "===t;if(n.length>7)return{isValidMDStatus:!1,MDType:o};switch(!0){case"#"===n&&i:o=g;break;case"##"===n&&i:o=y;break;case("###"===n||"####"===n||"#####"===n||"######"===n)&&i:o=v;break;case"-"===n&&i:o=b;break;case"1"===n&&i:o=C;break;case">"===n&&i:o=w;break;case"```"===n:o=x;break;default:r=!1}return{isValidMDStatus:r,MDType:o}})(r,e.data);if(!o)return!1;const{isInvalid:a,type:s,toolData:c,config:u}=E(i);m("markdownBlockConfig(MDType) -> ",E(i)),a||(t.blocks.delete(n),t.blocks.insert(s,c,u,n),t.caret.setToBlock(n,"start"))})(e,t),n.inlineMarkdown&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n),{isValid:o,md:s,html:c}=((e,t)=>{const n=e.textContent.trim(),{BOLD:r,ITALIC:o,MARKER:i,INLINE_CODE:a}=F,s=n.match(r);if(s){const{isValid:e,md:t,content:n}=k(s);return{isValid:e,md:t,html:`<b>${n}</b>`}}const c=n.match(i);if(c){const{isValid:e,md:t,content:n}=k(c);return{isValid:e,md:t,html:`<mark class=cdx-marker>${n}</mark>`}}const u=n.match(o);if(u){const{isValid:e,md:t,content:n}=k(u);return{isValid:e,md:t,html:`<i>${n}</i>`}}const l=n.match(a);if(l){const{isValid:e,md:t,content:n}=k(l);return{isValid:e,md:t,html:`<code class=inline-code>${n}</code>`}}return{isValid:!1,text:""}})(r,e.data);o&&(i(`<span id="${h}" />`),e.target.innerHTML=e.target.innerHTML.replace(s,c),a(document.querySelector(`#${h}`)),document.querySelector(`#${h}`).remove(),i(p))})(e,t),n.mention&&(e=>{if("@"===e.data){const e=`<span class="${f}" contenteditable="false" id="${f}" tabindex="1">&nbsp;</span>`,t=`#${f}`;i(e),i(p),i(p);const n=document.querySelector(t).parentElement;n.innerHTML=n.innerHTML.replace("@"+e,e),a(document.querySelector(t))}})(e)})(e,t,r),100),!0)};n.d(t,"debounce",function(){return T.debounce}),n.d(t,"loadJS",function(){return L}),n.d(t,"make",function(){return A}),n.d(t,"isEmptyObj",function(){return R}),n.d(t,"findIndex",function(){return M}),n.d(t,"highlightSettingIcon",function(){return r}),n.d(t,"moveCaretToEnd",function(){return o}),n.d(t,"selectNode",function(){return a}),n.d(t,"insertHtmlAtCaret",function(){return i}),n.d(t,"enhanceBlock",function(){return O}),n.d(t,"buildLog",function(){return d})}])},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(1),o=n.n(r),i=n(0),a=n.n(i),s=n(2),c=(n(4),function(){function e(t){var n=t.data,r=t.config,i=t.api;o()(this,e),this.api=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph",mention:"cdx-mention"},this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=r.placeholder?r.placeholder:e.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this.data=n}return a()(e,null,[{key:"toolbox",get:function(){return{icon:'<svg width="14" t="1575341316491" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3017" width="200" height="200"><path d="M537.6 281.6H358.4v256h179.2a128 128 0 1 0 0-256zM256 153.6h332.8v1.28a256 256 0 0 1 0 509.44V665.6H358.4v204.8a51.2 51.2 0 0 1-51.2 51.2H256a51.2 51.2 0 0 1-51.2-51.2V204.8a51.2 51.2 0 0 1 51.2-51.2z" p-id="3018"></path></svg>',title:"段落"}}},{key:"DEFAULT_PLACEHOLDER",get:function(){return"输入 'Tab' 快捷插入内容"}}]),a()(e,[{key:"onKeyUp",value:function(e){"Backspace"!==e.code&&"Delete"!==e.code||(this.deleteTagsIfNeed(),""===this._element.textContent&&(this._element.innerHTML=""))}},{key:"deleteTagsIfNeed",value:function(){if(window.getSelection){var e=window.getSelection();e.anchorNode.parentNode.className===this._CSS.mention&&e.anchorNode.parentNode.remove()}else console.log("editor paragraph plugin, window dfgetSelection is not supported.")}},{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block),e.contentEditable=!0,e.dataset.placeholder=this._placeholder,e.addEventListener("keyup",this.onKeyUp),Object(s.enhanceBlock)(e,this.api,{markdown:!0}),e}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(e){var t={text:this.data.text+e.text};this.data=t}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"save",value:function(e){return{text:e.innerHTML}}},{key:"onPaste",value:function(e){var t={text:e.detail.data.innerHTML};this.data=t}},{key:"data",get:function(){var e=this._element.innerHTML;return this._data.text=e,this._data},set:function(e){this._data=e||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}}]),e}())},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".ce-paragraph {\n  line-height: 1.6em;\n  outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\ncontent: attr(data-placeholder);\ncolor: #707684;\nfont-weight: normal;\nopacity: 0;\n}\n\n.ce-paragraph[data-placeholder]:focus:empty::before{\n  opacity: 0.5;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\nopacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\nopacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n  margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n  margin-bottom: 0;\n}\n\n\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],u=n(8);function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(g(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(g(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function f(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=a||(a=h(t)),r=v.bind(null,n,c,!1),o=v.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&l(d(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]).default});