/*!
 * Name: redbot-help-pages
 * Id: redbot-help-pages
 * Version: 1.0.0
 * Description:
 * Author: undefined (undefined)
 * Repository: undefined
 */
define(["react","lodash","code-plug","../../src/components/content"],(e,t,r,p)=>(()=>{"use strict";var o={108:e=>{e.exports=p},737:e=>{e.exports=r},980:e=>{e.exports=t},650:t=>{t.exports=e}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return o[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{a.r(n);a(650),a(980);var e=a(737),t=a(108);(0,e.plug)("sidebar",null,{id:"help-pages",label:"Help pages",url:"/help",icon:"file-text",options:[{label:"Posts",url:"/help",id:"help-pages"}]}),(0,e.plug)("pages",t.Contents,{url:"/help",title:"Help pages",id:"help-pages",namespace:"help-pages",labels:{createContent:"Create help page",emptyContent:"No help pages",saveContent:"Save help page"}})})(),n})());