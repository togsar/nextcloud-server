/*! For license information please see comments-init.js.LICENSE.txt */
!function(){var t,e={93335:function(t,e,n){"use strict";var r=n(77958),i=n(17499),o=n(31352),a=(n(62520),n(79753));n(14596),n(26721);const s=null===(u=(0,r.ts)())?(0,i.IY)().setApp("files").build():(0,i.IY)().setApp("files").setUid(u.uid).build();var u,c=(t=>(t.DEFAULT="default",t.HIDDEN="hidden",t))(c||{}),l=(t=>(t[t.NONE=0]="NONE",t[t.CREATE=4]="CREATE",t[t.READ=1]="READ",t[t.UPDATE=2]="UPDATE",t[t.DELETE=8]="DELETE",t[t.SHARE=16]="SHARE",t[t.ALL=31]="ALL",t))(l||{}),f=(t=>(t.Folder="folder",t.File="file",t))(f||{}),h=(t=>(t.NEW="new",t.FAILED="failed",t.LOADING="loading",t.LOCKED="locked",t))(h||{});(0,a.generateRemoteUrl)("dav");var d={};!function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n="["+e+"]["+e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+n+"$");t.isExist=function(t){return typeof t<"u"},t.isEmptyObject=function(t){return 0===Object.keys(t).length},t.merge=function(t,e,n){if(e){const r=Object.keys(e),i=r.length;for(let o=0;o<i;o++)t[r[o]]="strict"===n?[e[r[o]]]:e[r[o]]}},t.getValue=function(e){return t.isExist(e)?e:""},t.isName=function(t){const e=r.exec(t);return!(null===e||typeof e>"u")},t.getAllMatches=function(t,e){const n=[];let r=e.exec(t);for(;r;){const i=[];i.startIndex=e.lastIndex-r[0].length;const o=r.length;for(let t=0;t<o;t++)i.push(r[t]);n.push(i),r=e.exec(t)}return n},t.nameRegexp=n}(d);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var p={};const g={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t}};p.buildOptions=function(t){return Object.assign({},g,t)},p.defaultOptions=g,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,d.nameRegexp),new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var m={};function y(t,e,n){let r;const i={};for(let o=0;o<t.length;o++){const a=t[o],s=v(a);let u="";if(u=void 0===n?s:n+"."+s,s===e.textNodeName)void 0===r?r=a[s]:r+=""+a[s];else{if(void 0===s)continue;if(a[s]){let t=y(a[s],e,u);const n=x(t,e);a[":@"]?b(t,a[":@"],u,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==i[s]&&i.hasOwnProperty(s)?(Array.isArray(i[s])||(i[s]=[i[s]]),i[s].push(t)):e.isArray(s,u,n)?i[s]=[t]:i[s]=t}}}return"string"==typeof r?r.length>0&&(i[e.textNodeName]=r):void 0!==r&&(i[e.textNodeName]=r),i}function v(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function b(t,e,n,r){if(e){const i=Object.keys(e),o=i.length;for(let a=0;a<o;a++){const o=i[a];r.isArray(o,n+"."+o,!0,!0)?t[o]=[e[o]]:t[o]=e[o]}}}function x(t,e){const{textNodeName:n}=e,r=Object.keys(t).length;return!(0!==r&&(1!==r||!t[n]&&"boolean"!=typeof t[n]&&0!==t[n]))}m.prettify=function(t,e){return y(t,e)};const{buildOptions:N}=p,{prettify:w}=m;function E(t,e,n,r){let i="",o=!1;for(let a=0;a<t.length;a++){const s=t[a],u=A(s);let c="";if(c=0===n.length?u:`${n}.${u}`,u===e.textNodeName){let t=s[u];P(c,e)||(t=e.tagValueProcessor(u,t),t=L(t,e)),o&&(i+=r),i+=t,o=!1;continue}if(u===e.cdataPropName){o&&(i+=r),i+=`<![CDATA[${s[u][0][e.textNodeName]}]]>`,o=!1;continue}if(u===e.commentPropName){i+=r+`\x3c!--${s[u][0][e.textNodeName]}--\x3e`,o=!0;continue}if("?"===u[0]){const t=O(s[":@"],e),n="?xml"===u?"":r;let a=s[u][0][e.textNodeName];a=0!==a.length?" "+a:"",i+=n+`<${u}${a}${t}?>`,o=!0;continue}let l=r;""!==l&&(l+=e.indentBy);const f=r+`<${u}${O(s[":@"],e)}`,h=E(s[u],e,c,l);-1!==e.unpairedTags.indexOf(u)?e.suppressUnpairedNode?i+=f+">":i+=f+"/>":h&&0!==h.length||!e.suppressEmptyNode?h&&h.endsWith(">")?i+=f+`>${h}${r}</${u}>`:(i+=f+">",h&&""!==r&&(h.includes("/>")||h.includes("</"))?i+=r+e.indentBy+h+r:i+=h,i+=`</${u}>`):i+=f+"/>",o=!0}return i}function A(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function O(t,e){let n="";if(t&&!e.ignoreAttributes)for(let r in t){let i=e.attributeValueProcessor(r,t[r]);i=L(i,e),!0===i&&e.suppressBooleanAttributes?n+=` ${r.substr(e.attributeNamePrefix.length)}`:n+=` ${r.substr(e.attributeNamePrefix.length)}="${i}"`}return n}function P(t,e){let n=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let r in e.stopNodes)if(e.stopNodes[r]===t||e.stopNodes[r]==="*."+n)return!0;return!1}function L(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const r=e.entities[n];t=t.replace(r.regex,r.val)}return t}const j=function(t,e){let n="";return e.format&&e.indentBy.length>0&&(n="\n"),E(t,e,"",n)},T={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function _(t){this.options=Object.assign({},T,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=S),this.processTextOrObjNode=F,this.options.format?(this.indentate=I,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function F(t,e,n){const r=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,n):this.buildObjectNode(r.val,e,r.attrStr,n)}function I(t){return this.options.indentBy.repeat(t)}function S(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}_.prototype.build=function(t){return this.options.preserveOrder?j(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},_.prototype.j2x=function(t,e){let n="",r="";for(let i in t)if(typeof t[i]>"u")this.isAttribute(i)&&(r+="");else if(null===t[i])this.isAttribute(i)?r+="":"?"===i[0]?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)r+=this.buildTextValNode(t[i],i,"",e);else if("object"!=typeof t[i]){const o=this.isAttribute(i);if(o)n+=this.buildAttrPairStr(o,""+t[i]);else if(i===this.options.textNodeName){let e=this.options.tagValueProcessor(i,""+t[i]);r+=this.replaceEntitiesValue(e)}else r+=this.buildTextValNode(t[i],i,"",e)}else if(Array.isArray(t[i])){const n=t[i].length;let o="";for(let a=0;a<n;a++){const n=t[i][a];typeof n>"u"||(null===n?"?"===i[0]?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar:"object"==typeof n?this.options.oneListGroup?o+=this.j2x(n,e+1).val:o+=this.processTextOrObjNode(n,i,e):o+=this.buildTextValNode(n,i,"",e))}this.options.oneListGroup&&(o=this.buildObjectNode(o,i,"",e)),r+=o}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){const e=Object.keys(t[i]),r=e.length;for(let o=0;o<r;o++)n+=this.buildAttrPairStr(e[o],""+t[i][e[o]])}else r+=this.processTextOrObjNode(t[i],i,e);return{attrStr:n,val:r}},_.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},_.prototype.buildObjectNode=function(t,e,n,r){if(""===t)return"?"===e[0]?this.indentate(r)+"<"+e+n+"?"+this.tagEndChar:this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let i="</"+e+this.tagEndChar,o="";return"?"===e[0]&&(o="?",i=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===o.length?this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(r)+"<"+e+n+o+this.tagEndChar+t+this.indentate(r)+i:this.indentate(r)+"<"+e+n+o+">"+t+i}},_.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},_.prototype.buildTextValNode=function(t,e,n,r){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(r)+"<"+e+n+"?"+this.tagEndChar;{let i=this.options.tagValueProcessor(e,t);return i=this.replaceEntitiesValue(i),""===i?this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(r)+"<"+e+n+">"+i+"</"+e+this.tagEndChar}},_.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t};var C=(0,i.IY)().setApp("comments").detectUser().build();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function k(){k=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,i){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),s=new O(i||[]);return r(a,"_invoke",{value:N(t,n,s)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function h(){}function d(){}function p(){}var g={};u(g,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(P([])));y&&y!==e&&n.call(y,o)&&(g=y);var v=p.prototype=h.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(r,o,a,s){var u=l(t[r],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==V(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return i("throw",t,a,s)}))}s(u.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function N(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function w(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var i=l(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,r(v,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(c(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(v),u(v,s,"Generator"),u(v,o,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function D(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i)}var $=new class{_action;constructor(t){this.validateAction(t),this._action=t}get id(){return this._action.id}get displayName(){return this._action.displayName}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get default(){return this._action.default}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(t){if(!t.id||"string"!=typeof t.id)throw new Error("Invalid id");if(!t.displayName||"function"!=typeof t.displayName)throw new Error("Invalid displayName function");if(!t.iconSvgInline||"function"!=typeof t.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!t.exec||"function"!=typeof t.exec)throw new Error("Invalid exec function");if("enabled"in t&&"function"!=typeof t.enabled)throw new Error("Invalid enabled function");if("execBatch"in t&&"function"!=typeof t.execBatch)throw new Error("Invalid execBatch function");if("order"in t&&"number"!=typeof t.order)throw new Error("Invalid order");if(t.default&&!Object.values(c).includes(t.default))throw new Error("Invalid default");if("inline"in t&&"function"!=typeof t.inline)throw new Error("Invalid inline function");if("renderInline"in t&&"function"!=typeof t.renderInline)throw new Error("Invalid renderInline function")}}({id:"comments-unread",title:function(t){var e=t[0].attributes["comments-unread"];return e>=0?(0,o.uN)("comments","1 new comment","{unread} new comments",e,{unread:e}):(0,o.Iu)("comments","Comment")},displayName:function(){return""},iconSvgInline:function(){return'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-comment-processing" viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M17,11V9H15V11H17M13,11V9H11V11H13M9,11V9H7V11H9Z" /></svg>'},enabled:function(t){var e=t[0].attributes["comments-unread"];return"number"==typeof e&&e>0},exec:function(t){return(e=k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,window.OCA.Files.Sidebar.setActiveTab("comments"),e.next=4,window.OCA.Files.Sidebar.open(t.path);case 4:return e.abrupt("return",null);case 7:return e.prev=7,e.t0=e.catch(0),C.error("Error while opening sidebar",{error:e.t0}),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(t){D(o,r,i,a,s,"next",t)}function s(t){D(o,r,i,a,s,"throw",t)}a(void 0)}))})();var e},inline:function(){return!0},order:-140});!function(t){typeof window._nc_fileactions>"u"&&(window._nc_fileactions=[],s.debug("FileActions initialized")),window._nc_fileactions.find((e=>e.id===t.id))?s.error(`FileAction ${t.id} already registered`,{action:t}):window._nc_fileactions.push(t)}($)},24654:function(){},52361:function(){},94616:function(){}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,t=[],r.O=function(e,n,i,o){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],o=t[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,i,o]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.e=function(){return Promise.resolve()},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.j=4860,function(){r.b=document.baseURI||self.location.href;var t={4860:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,a=n[0],s=n[1],u=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(u)var l=u(r)}for(e&&e(n);c<a.length;c++)o=a[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),r.nc=void 0;var i=r.O(void 0,[7874],(function(){return r(93335)}));i=r.O(i)}();
//# sourceMappingURL=comments-init.js.map?v=d5917d4a555fa162c0f9