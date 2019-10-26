!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Paragraph=t():e.Paragraph=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".ce-paragraph {\n  line-height: 1.6em;\n  outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\ncontent: attr(data-placeholder);\ncolor: #707684;\nfont-weight: normal;\nopacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\nopacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\nopacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n  margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n  margin-bottom: 0;\n}\n\n\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),i=null,c=0,s=[],l=n(6);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(v(o.parts[i],t))}else{var c=[];for(i=0;i<o.parts.length;i++)c.push(v(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:c}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var s=c++;n=i||(i=h(t)),r=g.bind(null,n,s,!1),o=g.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return u(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(c=r[i.id]).refs--,o.push(c)}e&&u(d(e,t),t);for(a=0;a<o.length;a++){var c;if(0===(c=o[a]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function g(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i=n.n(a),c=(n(2),"&nbsp;"),s="inline_tmp_anchor",l="HEADER_1",u="HEADER_2",d="HEADER_3",f="UNORDERED_LIST",p="ORDERED_LIST",h="QUOTE",m="CODE",v={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINECODE:new RegExp(/\`([\S]{1,})\`/)},y=function(e){return{md:e[0],content:e[1],isValid:!0}},g=function(e){var t,n;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();var r=document.createElement("div");r.innerHTML=e;for(var o,a,i=document.createDocumentFragment();o=r.firstChild;)a=i.appendChild(o);n.insertNode(i),a&&((n=n.cloneRange()).setStartAfter(a),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}},b=function(e){if(document.body.createTextRange){var t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){var n=window.getSelection(),r=document.createRange();r.selectNodeContents(e),n.removeAllRanges(),n.addRange(r)}else console.warn("Could not select text in node: Unsupported browser.")};n.d(t,"default",function(){return x});
/**
 * Base Paragraph Block for the Editor.js.
 * Represents simple paragraph
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var x=function(){function e(t){var n=t.data,r=t.config,a=t.api;o()(this,e),this.api=a,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph",mention:"cdx-mention"},this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=r.placeholder?r.placeholder:e.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this.data=n}return i()(e,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),i()(e,[{key:"onKeyUp",value:function(e){"Backspace"!==e.code&&"Delete"!==e.code||(console.log("delete detect"),this.deleteTagsIfNeed(),""===this._element.textContent&&(this._element.innerHTML=""))}},{key:"deleteTagsIfNeed",value:function(){if(window.getSelection){var e=window.getSelection();e.anchorNode.parentNode.className===this._CSS.mention&&e.anchorNode.parentNode.remove()}else console.log("editor paragraph plugin, window dfgetSelection is not supported.")}},{key:"handleInlineMDShortcut",value:function(e){var t=this.api.blocks.getCurrentBlockIndex(),n=function(e,t){var n=e.textContent.trim(),r=v.BOLD,o=v.ITALIC,a=v.MARKER,i=v.INLINECODE,c=n.match(r);if(c){var s=y(c),l=s.isValid,u=s.md,d=s.content;return{isValid:l,md:u,html:"<b>".concat(d,"</b>")}}var f=n.match(a);if(f){var p=y(f),h=p.isValid,m=p.md,g=p.content;return{isValid:h,md:m,html:'<mark class="cdx-marker">'.concat(g,"</mark>")}}var b=n.match(o);if(b){var x=y(b),w=x.isValid,S=x.md,k=x.content;return{isValid:w,md:S,html:"<i>".concat(k,"</i>")}}var E=n.match(i);if(E){var L=y(E),R=L.isValid,D=L.md,T=L.content;return{isValid:R,md:D,html:'<code class="inline-code">'.concat(T,"</code>")}}return{isValid:!1,text:""}}(this.api.blocks.getBlockByIndex(t),e.data),r=n.isValid,o=n.md,a=n.html;if(r){var i='<span id="'.concat(s,'" />');g(i),e.target.innerHTML=e.target.innerHTML.replace(o,a),b(document.querySelector("#".concat(s))),document.querySelector("#".concat(s)).remove(),g(c)}}},{key:"handleMDShortcut",value:function(e){var t=this.api.blocks.getCurrentBlockIndex(),n=function(e,t){var n=e.textContent.trim(),r=!0,o="",a=" "===t;if(n.length>7)return{isValidMDStatus:!1,MDType:o};switch(!0){case"#"===n&&a:o=l;break;case"##"===n&&a:o=u;break;case("###"===n||"####"===n||"#####"===n||"######"===n)&&a:o=d;break;case"-"===n&&a:o=f;break;case"1"===n&&a:o=p;break;case">"===n&&a:o=h;break;case"```"===n:o=m;break;default:r=!1}return{isValidMDStatus:r,MDType:o}}(this.api.blocks.getBlockByIndex(t),e.data),r=n.isValidMDStatus,o=n.MDType;if(!r)return!1;var a=function(e){switch(e){case l:return{type:"header",toolData:{level:1},config:{}};case u:return{type:"header",toolData:{level:2},config:{}};case d:return{type:"header",toolData:{level:3},config:{}};case f:return{type:"list",toolData:{style:"unordered"},config:{}};case p:return{type:"list",toolData:{style:"ordered"},config:{}};case h:return{type:"quote",toolData:{},config:{}};case m:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}}(o),i=a.isInvalid,c=a.type,s=a.toolData,v=a.config;i||(this.api.blocks.delete(t),this.api.blocks.insert(c,s,v,t),this.api.caret.setToBlock(t,"start"))}},{key:"handleMention",value:function(e){if("@"===e.data){var t=this._CSS.mention,n='<span class="'.concat(t,'" contenteditable="false" id="').concat(t,'" tabindex="1" style="opacity: 1;">.</span>'),r="#".concat(t);g(n),g(c),g(c);var o=document.querySelector(r).parentElement;console.log("mentionParent ",o.innerHTML),o.innerHTML=o.innerHTML.replace("@"+n,n),b(document.querySelector(r))}}},{key:"drawView",value:function(){var e=this,t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!0,t.dataset.placeholder=this._placeholder,t.addEventListener("keyup",this.onKeyUp),this.api.listeners.on(t,"input",function(t){e.handleMDShortcut(t),e.handleInlineMDShortcut(t),e.handleMention(t)},!0),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(e){var t={text:this.data.text+e.text};this.data=t}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"save",value:function(e){return{text:e.innerHTML}}},{key:"onPaste",value:function(e){var t={text:e.detail.data.innerHTML};this.data=t}},{key:"data",get:function(){var e=this._element.innerHTML;return this._data.text=e,this._data},set:function(e){this._data=e||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}}]),e}()}]).default});