/*!
 * MIT License
 *
 * Copyright (c) 2023 SiYuan 思源笔记
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */(()=>{"use strict";var B={};B.d=(n,t)=>{for(var e in t)B.o(t,e)&&!B.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},B.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),B.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var Q={};B.r(Q),B.d(Q,{default:()=>tt});const b=require("siyuan"),L=JSON.parse('{"u2":"siyuan-plugin-background-cover","i8":"0.4.8"}');var _=(n=>(n[n.image=0]="image",n[n.video=1]="video",n[n.live2d=2]="live2d",n))(_||{});const ke=2097152,N=`/data/public/${L.u2}/assets`,E=`${N}/images`.toString(),nt=`${N}/live2d`.toString();let j="",z=window.siyuan.config.system.workspaceDir;window.siyuan.config.system.os==="windows"?(z=z.replaceAll("\\","/"),j=`${z}${N}`):j=`${z}${N}`;const H=198,q=[".png",".jpeg",".jpg",".jiff",".jfif"],Z="bg-cover-setting.json",ee="./plugins/siyuan-plugin-background-cover/static/FyBE0bUakAELfeF.jpg";var te={autoRefresh:!0,bgObj:void 0,opacity:.5,blur:5,activate:!0,prevTheme:"",fileidx:{},version:L.i8,inDev:!1,blockTheme:{light:{},dark:{}}};const Be={iconLogo:`<symbol id="iconLogo" viewBox="0 0 32 32">
    <path d="M26 28h-20v-4l6-10 8.219 10 5.781-4v8z"></path>
    <path d="M26 15c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3c1.657 0 3 1.343 3 3z"></path>
    <path d="M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z"></path>
    </symbol>`};var ne=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())});class De{constructor(){this.settings=structuredClone(te)}setPlugin(t){this.plugin=t}get(t){var e;return(e=this.settings)==null?void 0:e[t]}set(t,e){if(!(t in this.settings)){S(`"${t}" is not a setting`);return}this.settings[t]=e}reset(){return ne(this,null,function*(){this.settings=structuredClone(te),this.save()})}load(){return ne(this,null,function*(){let t=yield this.plugin.loadData(Z);if(t==null||t==null||t=="")d("\u6CA1\u6709\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E"),this.save("[configs][load init]");else{d(`\u8BFB\u5165\u914D\u7F6E\u6587\u4EF6: ${Z}`),typeof t=="string"&&(t=JSON.parse(t));try{for(let e in t)e in te&&this.set(e,t[e])}catch(e){S(`Setting load error: ${e}`)}this.save("[configs][load update]")}})}save(t){return ne(this,null,function*(){let e=JSON.stringify(this.settings);d(t?`${t}\u5199\u5165\u914D\u7F6E\u6587\u4EF6:`:"\u5199\u5165\u914D\u7F6E\u6587\u4EF6:",e),this.plugin.saveData(Z,e)})}}const o=new De;var M=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())});function O(...n){console.log(`[BgCover Plugin][INFO] ${n}`)}function d(...n){o.get("inDev")&&console.log("[BgCover Plugin][DEBUG]",...n)}function S(...n){console.error(`[BgCover][ERROR] ${n}`)}function it(...n){console.warn(`[BgCover][WARN] ${n}`)}function T(){const n=window.siyuan.config.appearance.mode;let t="";return n===0?t=window.siyuan.config.appearance.themeLight:t=window.siyuan.config.appearance.themeDark,[n,t]}function Ae(){const n=window.siyuan.config.appearance.lightThemes,t=window.siyuan.config.appearance.darkThemes;return[n,t]}class Le{merge(t,e){return[...new Set([...t,...e])]}}class W{addAlpha(t,e){return t.replace(")",`, ${e})`).replace("rgb","rgba")}removeAlpha(t){let e=t.split(",");return console.log(e),e[0].replace("rgba","rgb")+e[1]+e[2]+")"}editAlpha(t,e){return t.replace(/[\d\.]+\)$/g,`${e})`)}getAlpha(t){return t.slice(0,4)!=="rgba"?null:parseFloat(t.split(",")[3])}hex2rgba(t,e=-1){t=t.replace("#","");var i=parseInt(t.length==3?t.slice(0,1).repeat(2):t.slice(0,2),16),l=parseInt(t.length==3?t.slice(1,2).repeat(2):t.slice(2,4),16),s=parseInt(t.length==3?t.slice(2,3).repeat(2):t.slice(4,6),16);return e>=0?"rgba("+i+", "+l+", "+s+", "+e+")":"rgb("+i+", "+l+", "+s+")"}hsl2rgb(t){function e(w,F,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?w+(F-w)*6*h:h<1/2?F:h<2/3?w+(F-w)*(2/3-h)*6:w}var i=t.replace(/ /g,"").split(","),l=parseFloat(i[0]),s=parseFloat(i[1].slice(0,-1))/100,a=parseFloat(i[2].slice(0,-1))/100;l=l%360/360;var u,r,c;if(s===0)u=r=c=a;else{var g=a<.5?a*(1+s):a+s-a*s,f=2*a-g;u=e(f,g,l+1/3),r=e(f,g,l),c=e(f,g,l-1/3)}return"rgb("+Math.round(u*255)+", "+Math.round(r*255)+", "+Math.round(c*255)+")"}changeColorOpacity(t,e){let i="",l=getComputedStyle(document.querySelector(":root"));if(t.slice(0,1)==="#")i=this.hex2rgba(t,e);else if(t.slice(0,4)==="var("){let s=t.slice(4,-1),a=l.getPropertyValue(s);d(`[utils][CV2.changeColorOpacity] input colorStr = ${t}, extract css variable ${s} and obtained value as ${a}`),i=this.changeColorOpacity(a,e)}else if(t==="transparent"||t.replaceAll(" ","")==="rgb(0,0,0)"||t.replaceAll(" ","")==="rgb(0,0,0,0)"||t.replaceAll(" ","")==="rgba(0,0,0,0)"){const[s,a]=T();s==="light"?i=`rgba(255, 255, 255, ${e})`:i=`rgba(0, 0, 0, ${e})`}else if(t.slice(0,4)==="rgb("&&t.split(",").length===3)i=this.addAlpha(t,e);else if(t.slice(0,4)==="rgb("&&t.split(",").length===4)t=t.replace("rgb(","rgba("),i=this.editAlpha(t,e);else if(t.slice(0,4)==="rgba")i=this.editAlpha(t,e);else if(t.slice(0,4)==="hsl("){let s=this.hsl2rgb(t);i=this.addAlpha(s,e)}else S(`Unable to parse the color string [${t}], not 'var(--xxx)', 'rgb(xxx)', 'rgba(xxx)', '#hex'`);return i}getImageSize(t){return new Promise((e,i)=>{const l=new Image;l.src=t,l.onload=()=>{const{naturalWidth:s,naturalHeight:a}=l;e({width:s,height:a})},l.onerror=()=>{i(new Error("\u65E0\u6CD5\u52A0\u8F7D\u56FE\u50CF"))}})}getFullSide(t,e,i,l){const s=t/e,a=i/l;let u="";return s>a?u="X":u="Y",d(`container W:H = [${t} / ${e} = ${s}], image W:H = [${i} / ${l} = ${a}], fullsize = ${u}`),u}}class K{constructor(){this.ka=new le}rmtree(t){return M(this,null,function*(){let e=yield this.listdir(t);for(let i in e){let l=e[i];if(l.isDir)this.rmtree(`${t}/${l.name}/`);else{let s=`${t}/${l.name}`;yield this.ka.removeFile(s)}}t.slice(-1)==="/"?yield this.ka.removeFile(t):yield this.ka.removeFile(t+"/")})}listdir(t){return M(this,null,function*(){var e;let i=yield this.ka.readDir(t);return(i!==null||i!==void 0)&&(d("[os.listdir] out.data ->",i.data),e=i.data),e})}splitext(t){let e=t.substring(t.lastIndexOf(".")+1,t.length)||t;return[t.substring(0,t.lastIndexOf("."))||t,e]}openFile(t,e,i){return M(this,null,function*(){try{const s=yield(yield fetch(t)).blob();return new File([s],e,{type:i})}catch(l){return console.error("Error fetching the file:",l),null}})}openFilePicker(t){return M(this,null,function*(){return new Promise((e,i)=>{const l=document.createElement("input");l.type="file",l.multiple=!1,l.value="",t&&(l.accept=t),l.addEventListener("change",()=>{l.files?e(Array.from(l.files)):i(new Error("No file selected"))}),l.click()})})}openFolderPicker(){return M(this,null,function*(){return new Promise((t,e)=>{const i=document.createElement("input");i.type="file",i.webkitdirectory=!0,i.multiple=!0,i.value="",i.addEventListener("change",()=>{if(i.files&&i.files.length>0){const l=i.files[0];t(Array.from(i.files))}else e(new Error("No folder selected"))}),i.click()})})}}function Me(n){var t=Oe(Te(Re(Se(n),8*n.length)));return t.toLowerCase()}function Oe(n){for(var t,e="0123456789ABCDEF",i="",l=0;l<n.length;l++)t=n.charCodeAt(l),i+=e.charAt(t>>>4&15)+e.charAt(15&t);return i}function Se(n){for(var t=Array(n.length>>2),e=0;e<t.length;e++)t[e]=0;for(e=0;e<8*n.length;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function Te(n){for(var t="",e=0;e<32*n.length;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function Re(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var e=1732584193,i=-271733879,l=-1732584194,s=271733878,a=0;a<n.length;a+=16){var u=e,r=i,c=l,g=s;i=y(i=y(i=y(i=y(i=m(i=m(i=m(i=m(i=p(i=p(i=p(i=p(i=v(i=v(i=v(i=v(i,l=v(l,s=v(s,e=v(e,i,l,s,n[a+0],7,-680876936),i,l,n[a+1],12,-389564586),e,i,n[a+2],17,606105819),s,e,n[a+3],22,-1044525330),l=v(l,s=v(s,e=v(e,i,l,s,n[a+4],7,-176418897),i,l,n[a+5],12,1200080426),e,i,n[a+6],17,-1473231341),s,e,n[a+7],22,-45705983),l=v(l,s=v(s,e=v(e,i,l,s,n[a+8],7,1770035416),i,l,n[a+9],12,-1958414417),e,i,n[a+10],17,-42063),s,e,n[a+11],22,-1990404162),l=v(l,s=v(s,e=v(e,i,l,s,n[a+12],7,1804603682),i,l,n[a+13],12,-40341101),e,i,n[a+14],17,-1502002290),s,e,n[a+15],22,1236535329),l=p(l,s=p(s,e=p(e,i,l,s,n[a+1],5,-165796510),i,l,n[a+6],9,-1069501632),e,i,n[a+11],14,643717713),s,e,n[a+0],20,-373897302),l=p(l,s=p(s,e=p(e,i,l,s,n[a+5],5,-701558691),i,l,n[a+10],9,38016083),e,i,n[a+15],14,-660478335),s,e,n[a+4],20,-405537848),l=p(l,s=p(s,e=p(e,i,l,s,n[a+9],5,568446438),i,l,n[a+14],9,-1019803690),e,i,n[a+3],14,-187363961),s,e,n[a+8],20,1163531501),l=p(l,s=p(s,e=p(e,i,l,s,n[a+13],5,-1444681467),i,l,n[a+2],9,-51403784),e,i,n[a+7],14,1735328473),s,e,n[a+12],20,-1926607734),l=m(l,s=m(s,e=m(e,i,l,s,n[a+5],4,-378558),i,l,n[a+8],11,-2022574463),e,i,n[a+11],16,1839030562),s,e,n[a+14],23,-35309556),l=m(l,s=m(s,e=m(e,i,l,s,n[a+1],4,-1530992060),i,l,n[a+4],11,1272893353),e,i,n[a+7],16,-155497632),s,e,n[a+10],23,-1094730640),l=m(l,s=m(s,e=m(e,i,l,s,n[a+13],4,681279174),i,l,n[a+0],11,-358537222),e,i,n[a+3],16,-722521979),s,e,n[a+6],23,76029189),l=m(l,s=m(s,e=m(e,i,l,s,n[a+9],4,-640364487),i,l,n[a+12],11,-421815835),e,i,n[a+15],16,530742520),s,e,n[a+2],23,-995338651),l=y(l,s=y(s,e=y(e,i,l,s,n[a+0],6,-198630844),i,l,n[a+7],10,1126891415),e,i,n[a+14],15,-1416354905),s,e,n[a+5],21,-57434055),l=y(l,s=y(s,e=y(e,i,l,s,n[a+12],6,1700485571),i,l,n[a+3],10,-1894986606),e,i,n[a+10],15,-1051523),s,e,n[a+1],21,-2054922799),l=y(l,s=y(s,e=y(e,i,l,s,n[a+8],6,1873313359),i,l,n[a+15],10,-30611744),e,i,n[a+6],15,-1560198380),s,e,n[a+13],21,1309151649),l=y(l,s=y(s,e=y(e,i,l,s,n[a+4],6,-145523070),i,l,n[a+11],10,-1120210379),e,i,n[a+2],15,718787259),s,e,n[a+9],21,-343485551),e=x(e,u),i=x(i,r),l=x(l,c),s=x(s,g)}return Array(e,i,l,s)}function J(n,t,e,i,l,s){return x(Ue(x(x(t,n),x(i,s)),l),e)}function v(n,t,e,i,l,s,a){return J(t&e|~t&i,n,t,l,s,a)}function p(n,t,e,i,l,s,a){return J(t&i|e&~i,n,t,l,s,a)}function m(n,t,e,i,l,s,a){return J(t^e^i,n,t,l,s,a)}function y(n,t,e,i,l,s,a){return J(e^(t|~i),n,t,l,s,a)}function x(n,t){var e=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(e>>16)<<16|65535&e}function Ue(n,t){return n<<t|n>>>32-t}var C=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())});const pe="",ie="";class Ne{siyuanRequest(t,e){return C(this,null,function*(){const i=`${pe}${t}`,l={body:JSON.stringify(e),method:"POST"};ie!==""&&Object.assign(l,{headers:{Authorization:`Token ${ie}`}}),d("\u5F00\u59CB\u5411\u601D\u6E90\u8BF7\u6C42\u6570\u636E\uFF0CreqUrl=>",i),d("\u5F00\u59CB\u5411\u601D\u6E90\u8BF7\u6C42\u6570\u636E\uFF0CfetchOps=>",l);const a=yield(yield fetch(i,l)).json();if(d("\u601D\u6E90\u8BF7\u6C42\u6570\u636E\u8FD4\u56DE\uFF0CresJson=>",a),a.code===-1)throw new Error(a.msg);return a})}}class le extends Ne{lsNotebooks(){return C(this,null,function*(){return yield this.siyuanRequest("/api/notebook/lsNotebooks",{})})}openNotebook(t){return C(this,null,function*(){return yield this.siyuanRequest("/api/notebook/openNotebook",{notebook:t})})}readDir(t){return C(this,null,function*(){return yield this.siyuanRequest("/api/file/readDir",{path:t})})}putFile(t,e){const i=new FormData;return i.append("path",t),i.append("isDir","false"),i.append("modTime",Math.floor(Date.now()/1e3).toString()),i.append("file",e),new Promise((l,s)=>{(0,b.fetchPost)("/api/file/putFile",i,a=>{a.code===0?l(a):s(a)})})}saveTextData(t,e){return C(this,null,function*(){return new Promise(i=>{const l=`/temp/convert/pandoc/${t}`,s=new File([new Blob([e])],l.split("/").pop()),a=new FormData;a.append("path",l),a.append("file",s),a.append("isDir","false"),(0,b.fetchPost)("/api/file/putFile",a,u=>{i(u)})})})}getFile(t,e){return C(this,null,function*(){const i=yield fetch(`${pe}/api/file/getFile`,{method:"POST",headers:{Authorization:`Token ${ie}`},body:JSON.stringify({path:t})});if(i.status===200){if(e==="text")return yield i.text();if(e==="json")return(yield i.json()).data}return null})}removeFile(t){return C(this,null,function*(){const e={path:t};return yield this.siyuanRequest("/api/file/removeFile",e)})}createDocWithMd(t,e,i){return C(this,null,function*(){const l={notebook:t,path:e,markdown:i};return yield this.siyuanRequest("/api/filetree/createDocWithMd",l)})}getInstalledTheme(){return C(this,null,function*(){return yield this.siyuanRequest("api/bazaar/getInstalledTheme",{})})}}function lt(){showMessage(`${window.bgCoverPlugin.i18n.mobileNotSupported}`,1e3,"info")}function me(n=""){const t=new b.Dialog({title:`${window.bgCoverPlugin.i18n.inDevTitle}`,content:`<div class="b3-dialog__content">${window.bgCoverPlugin.i18n.inDev}<span>${n}</span></div>`,width:window.bgCoverPlugin.isMobileLayout?"92vw":"520px"})}function je(){const n=new b.Dialog({title:`${window.bgCoverPlugin.i18n.bugReportLabel}`,content:`
        <div class="b3-dialog__content">${window.bgCoverPlugin.i18n.bugReportConfirmText}</div>
        <div class="b3-dialog__action">
            <button class="b3-button b3-button--cancel">${window.bgCoverPlugin.i18n.cancel}</button><div class="fn__space"></div>
            <button class="b3-button b3-button--text">${window.bgCoverPlugin.i18n.confirmBugReport}</button>
        </div>
        <div class="b3-dialog__action">
        `,width:window.bgCoverPlugin.isMobileLayout?"92vw":"520px"}),t=n.element.querySelectorAll(".b3-button");t[0].addEventListener("click",()=>{n.destroy()}),t[1].addEventListener("click",()=>{window.open("https://github.com/HowcanoeWang/siyuan-plugin-background-cover/issues","_blank"),n.destroy()})}function ze(){const n=new b.Dialog({title:`${window.bgCoverPlugin.i18n.themeOnChangeTitle}`,content:`
        <div class="b3-dialog__content">${window.bgCoverPlugin.i18n.themeOnChangeMsg}</div>
        <div class="b3-dialog__action">
            <button class="b3-button b3-button--cancel">${window.bgCoverPlugin.i18n.cancel}</button><div class="fn__space"></div>
            <button class="b3-button b3-button--text">${window.bgCoverPlugin.i18n.themeRefresh}</button>
        </div>
        <div class="b3-dialog__action">
        `,width:window.bgCoverPlugin.isMobileLayout?"92vw":"520px"}),t=n.element.querySelectorAll(".b3-button");t[0].addEventListener("click",()=>{n.destroy()}),t[1].addEventListener("click",()=>{n.destroy(),window.location.reload()})}function He(){let n=document.getElementsByClassName("b3-dialog__container")[0];n!==void 0&&n.parentElement.parentElement.remove()}var qe=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())});let at=new W;function We(){var n=document.createElement("canvas");n.id="bglayer",n.style.backgroundRepeat="no-repeat",n.style.backgroundAttachment="fixed",n.style.backgroundSize="cover",n.style.backgroundPosition="center center",n.style.width="100%",n.style.height="100%",n.style.position="absolute",n.style.zIndex="-10000";var t=document.documentElement;t.insertBefore(n,document.head),d("[bgRender][createBgLayer] bgLayer created")}function V(){d("[bgRender][applySettings] \u6CA1\u6709\u7F13\u5B58\u4EFB\u4F55\u56FE\u7247\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u7684\u4E86\u4E86\u59B9\u56FE\u7247ULR\u6765\u5F53\u4F5C\u80CC\u666F\u56FE"),D(ee,_.image),o.set("bgObj",void 0)}function D(n,t){var e=document.getElementById("bglayer");t===_.image?(d(`[bgRender][changeBackgroundContent] \u66FF\u6362\u5F53\u524D\u80CC\u666F\u56FE\u7247\u4E3A${n}`),e.style.setProperty("background-image",`url('${n}')`)):t==_.video||t==_.live2d?me():S(`[SwitchBgCover Plugin][Error] Background type [${t}] is not supported, `,7e3,"error")}function ye(){var n=o.get("blockTheme");const t=["light","dark"],[e,i]=T();var l=n[t[e]][i];return d(`[bgRender][isBlockTheme] search mode='${t[e]}', name='${i}' result is ${l}`),l}function ae(n){let t=.99-.25*n;o.get("activate")&&!ye()&&n!==0?document.body.style.setProperty("opacity",t.toString()):document.body.style.removeProperty("opacity")}function se(n){var t=document.getElementById("bglayer");t.style.setProperty("filter",`blur(${n}px)`)}function oe(n,t){var e=document.getElementById("bglayer");n==null||n==null?(d("[bgRender][changeBgPosition] xy\u672A\u5B9A\u4E49\uFF0C\u4E0D\u8FDB\u884C\u6539\u53D8"),e.style.setProperty("background-position","center")):(d(`[bgRender][changeBgPosition] \u4FEE\u6539background-position\u4E3A${n}% ${t}%`),e.style.setProperty("background-position",`${n}% ${t}%`))}function R(){return qe(this,null,function*(){var n=document.getElementById("bglayer");d(n),o.get("activate")&&!ye()?n.style.removeProperty("display"):n.style.setProperty("display","none");const t=P();if(d(`[bgRender][applySettings] cacheImgNum= ${t}`),t===0)V();else if(o.get("bgObj")===void 0)d("[bgRender][applySettings] \u7F13\u5B58\u4E2D\u67091\u5F20\u4EE5\u4E0A\u7684\u56FE\u7247\uFF0C\u4F46\u662F\u8BBE\u7F6E\u7684bjObj\u5374\u662Fundefined\uFF0C\u968F\u673A\u62BD\u4E00\u5F20"),yield U();else{d("[bgRender][applySettings] \u7F13\u5B58\u4E2D\u67091\u5F20\u4EE5\u4E0A\u7684\u56FE\u7247\uFF0CbjObj\u4E5F\u6709\u5185\u5BB9\u4E14\u56FE\u7247\u5B58\u5728");let e=o.get("bgObj"),i=o.get("fileidx");e.hash in i&&!o.get("autoRefresh")?(d("[bgRender][applySettings] \u6CA1\u6709\u5F00\u542F\u542F\u52A8\u81EA\u52A8\u66F4\u6362\u56FE\u7247\uFF0C\u5219\u76F4\u63A5\u663E\u793A\u5F53\u524D\u56FE\u7247"),D(e.path,e.mode)):(d("[bgRender][applySettings] \u7528\u6237\u9009\u62E9\u968F\u673A\u56FE\u7247\uFF0C\u5219\u968F\u673A\u8C03\u4E00\u5F20\u4F5C\u4E3AbjObj"),yield U())}ae(o.get("opacity")),se(o.get("blur")),o.get("bgObj")===void 0?oe(null,null):oe(o.get("bgObj").offx,o.get("bgObj").offy),G()})}var A=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())});let I=new K,re=new W,X=new le;function P(){let n,t=o.get("fileidx");return t===null||t==null?n=0:n=Object.keys(o.get("fileidx")).length,n}function Ke(){return A(this,null,function*(){if(window.siyuan.config.system.kernelVersion>="2.9.3"){let a=`/data/plugins/${L.u2}/assets`,u=yield I.listdir(a);u!==null&&u.length>0&&((0,b.showMessage)(window.bgCoverPlugin.i18n.cacheDirectoryMove,7e3,"info"),yield I.rmtree(a))}o.get("version")<"0.3.2"&&((0,b.showMessage)(window.bgCoverPlugin.i18n.updateHashNotice,7e3,"info"),yield we(_.image),o.set("version",L.i8));let n=yield I.listdir(E),t={},e=o.get("fileidx"),i=[],l=[],s=[];e==null&&d("The settings.fileidx is empty {}");for(let a of n)if(!a.isDir)if(d(`[fileManagerUI][checkCacheDirectory] Check ${a.name} in cached dir`),a.name.slice(0,5)==="hash-"){const[u,r]=I.splitext(a.name.split("-")[1]);if(d("[fileManagerUI][checkCacheDirectory] hash_name: ",u,e,l),u in e){let c=e[u];if(c.offx===void 0||c.width===void 0||c.width===0){const g=yield re.getImageSize(c.path);let f={name:c.name,path:c.path,hash:c.hash,mode:c.mode,offx:50,offy:50,height:g.height,width:g.width};t[u]=f,d("settings.fileidx\u4E3A\u65E7\u7248\u914D\u7F6E\uFF0C\u5DF2\u66F4\u65B0",f)}else t[u]=c}else{l.push(a.name);const c=`${E.slice(5)}/${a.name}`,g=yield re.getImageSize(c);d(`[fileManagerUI][checkCacheDirectory] the cached local file ${a.name} has md5: ${u}`);let f={name:a.name,path:c,hash:u,mode:_.image,offx:50,offy:50,height:g.height,width:g.width};t[u]=f}}else i.push(a.name),X.removeFile(`${E}/${a.name}`);for(let a in e)a in t||s.push(e[a].name);if(o.set("fileidx",t),yield o.save("[fileManagerUI][checkCacheDirectory]"),i.length!==0){let a=`${window.bgCoverPlugin.i18n.cacheImgWrongName}<br>[${i}]<br>${window.bgCoverPlugin.i18n.doNotOperateCacheFolder}`;(0,b.showMessage)(a,7e3,"info"),O(a)}if(l.length!==0){let a=`${window.bgCoverPlugin.i18n.cacheImgExtra}<br>[${l}]<br>${window.bgCoverPlugin.i18n.doNotOperateCacheFolder}`;(0,b.showMessage)(a,7e3,"info"),O(a)}if(s.length!==0){let a=`${window.bgCoverPlugin.i18n.cacheImgMissing}<br>[${s}]<br>${window.bgCoverPlugin.i18n.doNotOperateCacheFolder}`;(0,b.showMessage)(a,7e3,"info"),O(a)}})}function we(n){return A(this,null,function*(){if(n==_.image){let e=yield I.listdir(E),i=o.get("fileidx");for(let a in e){let u=e[a];if(u.isDir)I.rmtree(`${E}/${u.name}/`);else{let r=`${E}/${u.name}`;yield X.removeFile(r);const[c,g]=I.splitext(u.name.split("-")[1]);delete i[c]}}o.set("fileidx",i);let l=document.getElementById("cacheImgList");l&&(l.innerHTML=null);let s=document.getElementById("displayCanvas");s&&(s.innerHTML=null)}else n==_.live2d;P()===0&&V(),yield o.save("[fileManagerUI][clearCacheFolder]")})}function _e(n,t=!0){return A(this,null,function*(){let e=o.get("fileidx");var l=File.prototype.slice.call(n,0,Math.min(n.size,ke));let s=yield l.text();var a=Me(`${s}${n.size}`).slice(0,15);if(d(`[fileManagerUI][imgExistsInCache] Blob content: [${s.slice(20,40)} ...] with length = ${s.length}file.size=${n.size}`),e!==void 0&&a in e){if(t){const u=new b.Dialog({title:`${window.bgCoverPlugin.i18n.inDevTitle}`,content:`<div class="b3-dialog__content">${window.bgCoverPlugin.i18n.imageFileExist}</div>`,width:window.bgCoverPlugin.isMobileLayout?"92vw":"520px"})}else d(`[fileManagerUI][imgIsInCache] \u5F53\u524D\u56FE\u7247${n.name}\u5DF2\u5B58\u5728`);return"exists"}else return a})}function Ee(n){return A(this,null,function*(){let t=n.size/1024/1024,e=yield _e(n);e!=="exists"&&(0,b.showMessage)(`${n.name}-${t.toFixed(2)}MB<br>${window.bgCoverPlugin.i18n.addSingleImageUploadNotice}`,3e3,"info");let i=o.get("fileidx");if(i==null&&(i={}),e!=="exists"){const[l,s]=I.splitext(n.name),a=`hash-${e}.${s}`,u=yield X.putFile(`${E}/${a}`,n);if(u.code===0){const r=`${E.slice(5)}/${a}`,c=yield re.getImageSize(r);let g={name:n.name,hash:e,mode:_.image,path:r,offx:50,offy:50,width:c.width,height:c.height};return i[g.hash]=g,o.set("bgObj",g),o.set("fileidx",i),d(`[fileManagerUI][addSingleLocalImageFile]: fileidx ${i}`),g}else return S(`fail to upload file ${n.name} with error code ${u}`),null}})}function Ce(n,t=!1){return A(this,null,function*(){let e;if(d("[fileManagerUI][batchUploadImages] fileArray",n),n.length===0)d("[fileManagerUI][batchUploadImages] fileArray\u4E3A\u7A7A\uFF0C\u4E0D\u5B58\u5728\u9700\u8981\u4E0A\u4F20\u7684\u56FE\u7247");else{for(let i of n)e=yield Ee(i),d("[fileManagerUI][batchUploadImages] \u5728\u4E0A\u4F20\u7684\u5FAA\u73AF\u5185",e);yield o.save("[fileManagerUI][batchUploadImages]"),t&&(d("[fileManagerUI][batchUploadImages] \u5728\u5E94\u7528\u8BBE\u7F6E\u7684\u5224\u65AD\u5185",e),D(e.path,e.mode),G())}})}function Je(){return A(this,null,function*(){const n=new b.Dialog({title:window.bgCoverPlugin.i18n.selectPictureManagerTitle,width:window.bgCoverPlugin.isMobileLayout?"92vw":"520px",height:"92vh",content:`
        <div class="fn__flex-column" style="height: 100%">
            <div class="layout-tab-bar fn__flex">

                <!-- tab 1 title -->
                <div class="item item--full item--focus" data-type="remove">
                    <span class="fn__flex-1"></span>
                    <span class="item__text">${window.bgCoverPlugin.i18n.selectPictureManagerTab1}</span>
                    <span class="fn__flex-1"></span>
                </div>

                <!-- tab 2 title -->
                <!--div class="item item--full" data-type="missing">
                    <span class="fn__flex-1"></span>
                    <span class="item__text">${window.bgCoverPlugin.i18n.selectPictureManagerTab2}</span>
                    <span class="fn__flex-1"></span>
                </div-->
            </div>
            <div class="fn__flex-1">

                <!-- tab 1 -->

                <div class="config-assets" data-type="remove" data-init="true">
                    <div class="fn__hr--b"></div>

                    <label class="fn__flex" style="justify-content: flex-end;">
                        <button id="removeAllImgs" class="b3-button b3-button--outline fn__flex-center fn__size200">
                            <svg class="svg"><use xlink:href="#iconTrashcan"></use></svg>
                            ${window.bgCoverPlugin.i18n.deleteAll}
                        </button>
                        <div class="fn__space"></div>
                    </label>

                    <div class="fn__hr"></div>

                    <ul id="cacheImgList" class="b3-list b3-list--background config-assets__list">

                        <li data-path="20230609230328-7vp057x.png" class="b3-list-item b3-list-item--hide-action">
                            <span class="b3-list-item__text">
                                20230609230328-7vp057x.png
                            </span>
                            <span data-type="open" class="b3-tooltips b3-tooltips__w b3-list-item__action" aria-label="${window.bgCoverPlugin.i18n.setAsBg}">
                                <svg><use xlink:href="#iconHideDock"></use></svg>
                            </span>
                            <span data-type="clear" class="b3-tooltips b3-tooltips__w b3-list-item__action" aria-label="${window.bgCoverPlugin.i18n.delete}">
                                <svg><use xlink:href="#iconTrashcan"></use></svg>
                            </span>
                        </li>
                        
                    </ul>

                    <!-- after rendering -->
                    <!--div class="config-assets__preview" data-path="assets/xxxx.png">
                        <img style="max-height: 100%" src="assets/xxxx.png">
                    </div-->

                    <!-- default empty -->
                    <div id="displayCanvas" class="config-assets__preview"></div>
                </div>

                <!-- tab 2, class add fn__none to cancle display -->

                <!--div class="fn__none config-assets" data-type="missing">
                    <div class="fn__hr"></div>
                    <ul class="b3-list b3-list--background config-assets__list">
                        <li class="fn__loading"><img src="/stage/loading-pure.svg"></li>
                    </ul>
                    <div class="fn__hr"></div>
                </div>
            </div>
        </div>
        `});let t=Ve();const e=document.getElementById("cacheImgList");e.innerHTML="";for(const l of t)e.appendChild(l);d("[fileManagerUI][selectPictureByHand]",t,e),document.getElementById("removeAllImgs").addEventListener("click",()=>A(this,null,function*(){yield we(_.image)}))})}function Ve(){let n=[],t=o.get("fileidx");for(const e in t){let i=t[e],s=new DOMParser().parseFromString(`
        <li data-hash="${i.hash}" class="b3-list-item b3-list-item--hide-action">
            <span class="b3-list-item__text">
                ${i.name}
            </span>
            <span data-type="open" class="b3-tooltips b3-tooltips__w b3-list-item__action" aria-label="${window.bgCoverPlugin.i18n.setAsBg}">
                <svg><use xlink:href="#iconHideDock"></use></svg>
            </span>
            <span data-type="clear" class="b3-tooltips b3-tooltips__w b3-list-item__action" aria-label="${window.bgCoverPlugin.i18n.delete}">
                <svg><use xlink:href="#iconTrashcan"></use></svg>
            </span>
        </li>
        `,"text/html").body.firstChild,a=s.querySelectorAll("span")[1],u=s.querySelectorAll("span")[2];a.addEventListener("click",()=>{D(i.path,i.mode),o.set("bgObj",i),o.save("[fileManagerUI][generateCacheImgList][setBgBtn.click]")}),u.addEventListener("click",()=>{d("Remove the background"),document.getElementById("cacheImgList").querySelectorAll(`[data-hash="${i.hash}"]`)[0].remove();let g=document.getElementById("displayCanvas");g.innerHTML=null,U();let f=o.get("fileidx");delete f[i.hash],o.set("fileidx",f),d(`[fileManagerUI][_rmBg] \u79FB\u9664\u4E0B\u5217\u8DEF\u5F84\u7684\u56FE\u7247\uFF1A${E}/${i.name}`),X.removeFile(`data/${i.path}`),P()===0&&V(),o.save("[fileManagerUI][generateCacheImgList][delBtn.click]")}),s.addEventListener("mouseenter",()=>{let r=document.getElementById("displayCanvas");r.innerHTML=`<img style="max-height: 100%" src="${i.path}">`}),n.push(s)}return n}var ue=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())});let Xe=new K,Fe=new W;function $e(n){const t=P(),e=new b.Dialog({title:`${window.bgCoverPlugin.i18n.addTopBarIcon}(v${L.i8}) ${window.bgCoverPlugin.i18n.settingLabel}`,width:window.bgCoverPlugin.isMobileLayout?"92vw":"max(520px, 50vw)",height:"max(520px, 90vh)",content:`
        <div class="config__tab-container" style="background-color: var(--b3-theme-background)">
        <!--
        // info panel part
        -->
        <label class="fn__flex b3-label">
            <div class="fn__flex-1">
                ${window.bgCoverPlugin.i18n.imgPathLabel}
                <div class="b3-label__text">
                    <code id="crtImgName" class="fn__code">${o.get("bgObj")===void 0?ee:o.get("bgObj").name}</code>
                </div>
            </div>
            <div class="fn__flex-center">  
                <div>
                    <label for="cx">X</label> 
                    <input id="cx" class="b3-slider fn__size50"  max="100" min="0" step="5" type="range" value=${o.get("bgObj")===void 0?"50":o.get("bgObj").offx}>
                </div>
                <div>
                    <label for="cy">Y</label> 
                    <input id="cy" class="b3-slider fn__size50"  max="100" min="0" step="5" type="range" value=${o.get("bgObj")===void 0?"50":o.get("bgObj").offy}>
                </div>
            </div>
        </label>
        <label class="fn__flex b3-label config__item">
            <div class="fn__flex-1">
                <div class="fn__flex">
                    ${window.bgCoverPlugin.i18n.cacheDirectoryLabel}
                    <span class="fn__space"></span>
                    <span style="color: var(--b3-theme-on-surface)">${window.bgCoverPlugin.i18n.cacheDirectoryDes}</span>
                    <span id="cacheImgNumElement" class="selected" style="color: rgb(255,0,0)">
                        [ ${t} ]
                    </span>
                </div>
                <div class="b3-label__text">
                    <a href="file:///${j}/" style="word-break: break-all">${j}</a>
                </div>
            </div>
            <span class="fn__space"></span>
            <button id="cacheManagerBtn" class="b3-button b3-button--outline fn__flex-center fn__size100" id="appearanceRefresh">
                <svg><use xlink:href="#iconDatabase"></use></svg>
                ${window.bgCoverPlugin.i18n.cacheManager}
            </button>
        </label>

        <!--
        // onoff switch part
        -->

        <label class="fn__flex b3-label config__item">
            <div class="fn__flex-1">
                ${window.bgCoverPlugin.i18n.openBackgroundLabel}
                <div class="b3-label__text">
                    ${window.bgCoverPlugin.i18n.openBackgroundLabelDes}
                </div>
            </div>
            <span class="fn__flex-center" />
            <input
                id="onoffInput"
                class="b3-switch fn__flex-center"
                type="checkbox"
                value="${o.get("activate")}"
            />
        </label>

        
        <!--
        // theme black list
        -->

        <div class="b3-label config__item">
            ${window.bgCoverPlugin.i18n.blockThemeTitle}
            <!-- light theme block -->
            <div class="b3-label__text">${window.bgCoverPlugin.i18n.themeAdaptEditorMode0}</div>
            <div class="b3-label">
                <div class="config-query" id="lightThemeBlockContainer">

                    <!-- label item add by for loop -->

                </div>
            </div>

            <!-- dark theme block -->
            <div class="b3-label__text">${window.bgCoverPlugin.i18n.themeAdaptEditorMode1}</div>
            <div class="b3-label">
                <div class="config-query" id="darkThemeBlockContainer">
                    
                    <!-- label item add by for loop -->

                </div>
            </div>
            
        </div>

        
        <!--
        // \u81EA\u52A8\u66F4\u65B0\u6309\u94AE
        -->

        <label class="fn__flex b3-label config__item">
            <div class="fn__flex-1">
                ${window.bgCoverPlugin.i18n.autoRefreshLabel}
                <div class="b3-label__text">
                    ${window.bgCoverPlugin.i18n.autoRefreshDes}
                </div>
            </div>
            <span class="fn__flex-center" />
            <input
                id="autoRefreshInput"
                class="b3-switch fn__flex-center"
                type="checkbox"
                value="${o.get("autoRefresh")}"
            />
        </label>

        <!--
        // slider part Input[4] - Input [5]
        -->

        <label class="fn__flex b3-label config__item">
            <div class="fn__flex-1">
                ${window.bgCoverPlugin.i18n.opacityLabel}
                <div class="b3-label__text">
                    ${window.bgCoverPlugin.i18n.opacityDes}
                </div>
            </div>
            <div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="${o.get("opacity")}">   
                <input id="opacityInput" class="b3-slider fn__size200" max="1" min="0" step="0.05" type="range" value="${o.get("opacity")}">
            </div>
        </label>
        <label class="fn__flex b3-label config__item">
            <div class="fn__flex-1">
                ${window.bgCoverPlugin.i18n.blurLabel}
                <div class="b3-label__text">
                    ${window.bgCoverPlugin.i18n.blurDes}
                </div>
            </div>
            <div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="${o.get("blur")}">   
                <input id="blurInput" class="b3-slider fn__size200" max="10" min="0" step="1" type="range" value="${o.get("blur")}">
            </div>
        </label>

        <!--
        // reset panel part, Button[0]
        -->

        <label class="b3-label config__item fn__flex">
            <div class="fn__flex-1">
            ${window.bgCoverPlugin.i18n.resetConfigLabel}
                <div class="b3-label__text">
                    ${window.bgCoverPlugin.i18n.resetConfigDes}<span class="selected" style="color:rgb(255,0,0)">${window.bgCoverPlugin.i18n.resetConfigDes2}
                    </span>
                </div>
            </div>
            <span class="fn__space"></span>
            <button id="resetBtn" class="b3-button b3-button--outline fn__flex-center fn__size100" id="appearanceRefresh">
                <svg><use xlink:href="#iconRefresh"></use></svg>
                ${window.bgCoverPlugin.i18n.reset}
            </button>
        </label>

        <!--
        // debug panel part
        -->

        <label class="fn__flex b3-label config__item">
            <div class="fn__flex-1">
                ${window.bgCoverPlugin.i18n.inDevModeLabel}
                <div class="b3-label__text">
                    ${window.bgCoverPlugin.i18n.inDevModeDes} \u2022 
                    FrontEnd: <code class="fn__code">${(0,b.getFrontend)()}</code> \u2022 BackEnd: <code class="fn__code">${(0,b.getBackend)()}</code> \u2022 
                    isMobileLayout: <code class="fn__code">${window.bgCoverPlugin.isMobileLayout}</code> \u2022 
                    isBrowser: <code class="fn__code">${window.bgCoverPlugin.isBrowser}</code> \u2022 
                    isAndroid: <code class="fn__code">${window.bgCoverPlugin.isAndroid}</code>
                </div>
            </div>
            <span class="fn__flex-center" />
            <input
                id="devModeInput"
                class="b3-switch fn__flex-center"
                type="checkbox"
                value="${o.get("inDev")}"
            />
        </label>

        <!--
        Donations Section
        -->
         <label class="fn__flex b3-label config__item"> 
             <div class="fn__flex-1"> 
                 ${window.bgCoverPlugin.i18n.donationTitle} 
                  <div class="b3-abel__text" style="text-align: center;"> 
                      <table style="width: 50%; margin-left: auto; margin-right: auto;"> 
                         <thead> 
                             <tr> 
                                 <th>${window.bgCoverPlugin.i18n.donationAlipay}</th> 
                                 <th>${window.bgCoverPlugin.i18n.donationWechat}</th> 
                             </tr> 
                         </thead> 
                         <tbody> 
                             <tr> 
                                 <td style="text-align: center;"> 
                                     <img width="256px" alt="" src="./plugins/siyuan-plugin-background-cover/static/ali.jpg"> 
                                 </td> 
                                 <td style="text-align: center;"> 
                                     <img width="256px" alt="" src="./plugins/siyuan-plugin-background-cover/static/wechat.png"> 
                                 </td> 
                             </tr> 
                         </tbody> 
                     </table> 
                 </div> 
             </div> 
         </label>

        </div>`}),i=document.getElementById("cx"),l=document.getElementById("cy");de(),window.addEventListener("resize",de);let s=[i,l];for(let F=0;F<2;F++)s[F].addEventListener("input",()=>{d(s,i.value,l.value),oe(i.value,l.value)}),s[F].addEventListener("change",()=>{let h=o.get("bgObj");if(h!==void 0){h.offx=i.value,h.offy=l.value,o.set("bgObj",h);let $=o.get("fileidx");$[h.hash]=h,o.set("fileidx",$),o.save("[settingsUI][openSettingDialog][cxyElement.change]")}});document.getElementById("cacheManagerBtn").addEventListener("click",()=>ue(this,null,function*(){e.destroy(),be()}));const u=document.getElementById("onoffInput");u.checked=o.get("activate"),u.addEventListener("click",()=>{o.set("activate",!o.get("activate")),u.value=o.get("activate"),o.save("[settingsUI][openSettingDialog][activateElement.change]"),R()}),Ye();const r=document.getElementById("autoRefreshInput");r.checked=o.get("autoRefresh"),r.addEventListener("click",()=>{o.set("autoRefresh",!o.get("autoRefresh")),r.value=`${o.get("autoRefresh")}`,o.save("[settingsUI][openSettingDialog][autoRefreshElement.change]")});const c=document.getElementById("opacityInput");c.addEventListener("change",()=>{o.set("opacity",parseFloat(c.value)),o.get("activate")&&ae(o.get("opacity")),o.save("[settingsUI][openSettingDialog][opacityElement.change]")}),c.addEventListener("input",()=>{c.parentElement.setAttribute("aria-label",c.value)});const g=document.getElementById("blurInput");g.addEventListener("change",()=>{o.set("blur",parseFloat(g.value)),o.get("activate")&&se(o.get("blur")),o.save("[settingsUI][openSettingDialog][blurElement.change]")}),g.addEventListener("input",()=>{g.parentElement.setAttribute("aria-label",g.value)}),document.getElementById("resetBtn").addEventListener("click",()=>ue(this,null,function*(){Xe.rmtree(E),o.reset(),yield o.save("[settingsUI][openSettingDialog][resetSettingElement.click]"),yield R()}));const w=document.getElementById("devModeInput");w.checked=o.get("inDev"),w.addEventListener("click",()=>{o.set("inDev",!o.get("inDev")),w.value=`${o.get("inDev")}`,o.save("[settingsUI][openSettingDialog][devModeElement.change]")})}function Ye(){const[n,t]=T(),e=Ae(),i=[document.getElementById("lightThemeBlockContainer"),document.getElementById("darkThemeBlockContainer")];var l=o.get("blockTheme");const s=["light","dark"];d("[settingsUI][generateBlockThemeElement] Current block theme config:",l);for(var a=0;a<e.length;a++)for(var u=e[a],r=0;r<u.length;r++){var c=u[r],g,f=l[s[a]];c.name in f?g=f[c.name]:(g=!1,f[c.name]=g);var w=new DOMParser().parseFromString(`
            <label class="fn__flex">
                <div class="fn__flex-1">
                    ${c.label}
                </div>
                <span class="fn__space"></span>
                <input class="b3-switch" data-mode="${s[a]}" data-theme="${c.name}" type="checkbox">
            </label>`,"text/html").body.firstChild;if(i[a].appendChild(w),n===a&&c.name===t){let $=w.querySelectorAll("div")[0];$.style.setProperty("color","var(--b3-theme-primary)"),$.textContent+=`[${window.bgCoverPlugin.i18n.crtThemeText}]`}let h=w.querySelectorAll("input")[0];h.checked=g,h.addEventListener("click",()=>ue(this,null,function*(){var $=o.get("blockTheme");let fe=h.getAttribute("data-mode"),ve=h.getAttribute("data-theme");$[fe][ve]=!$[fe][ve],d(`[settingsUI] User changed blockTheme ${ve} in ${fe} mode`),o.set("blockTheme",$),o.save("[settingsUI][generateBlockThemeElement][onOffBtn.click]"),yield R()}))}o.set("blockTheme",l),o.save("[settingsUI][generateBlockThemeElement]")}function Y(n,t,e=!0){let i=document.getElementById(n);i==null||(i.value=t,e&&i.parentElement.setAttribute("aria-label",t))}function ce(n,t){let e=document.getElementById(n);e==null||(e.checked=t)}function xe(n){var t=o.get("opacity");if(n?t=Number((t+.1).toFixed(2)):t=Number((t-.1).toFixed(2)),t>1||t<0){(0,b.showMessage)(`[${window.bgCoverPlugin.i18n.addTopBarIcon}]${window.bgCoverPlugin.i18n.opacityShortcutOverflow}`,4e3,"info");return}else o.set("opacity",t),o.save("[settingsUI][opacityShortcut]"),o.get("activate")&&ae(t),Y("opacityInput",`${t}`)}function Ie(n){var t=o.get("blur");if(n?t=Number((t+1).toFixed(0)):t=Number((t-1).toFixed(0)),t>10||t<0){(0,b.showMessage)(`[${window.bgCoverPlugin.i18n.addTopBarIcon}]${window.bgCoverPlugin.i18n.blurShortcutOverflow}`,4e3,"info");return}else o.set("blur",t),o.save("[settingsUI][blurShortcut]"),o.get("activate")&&se(t),Y("blurInput",`${t}`)}function G(){let n=document.getElementById("crtImgName");if(n!=null){let e=o.get("bgObj");o.get("bgObj")===void 0?n.textContent=ee.toString():n.textContent=e.name}de();let t=document.getElementById("cacheImgNumElement");if(t!=null){const e=P();t.textContent=`[ ${e} ]`}ce("onoffInput",o.get("activate")),ce("autoRefreshInput",o.get("autoRefresh")),Y("opacityInput",o.get("opacity")),Y("blurInput",o.get("blur")),ce("devModeInput",o.get("inDev"))}function de(){let n=document.getElementById("cx"),t=document.getElementById("cy");if(n!=null){let e=document.getElementById("bglayer");if(o.get("activate")){const i=parseInt(getComputedStyle(e).height),l=parseInt(getComputedStyle(e).width);let s;o.get("bgObj")===void 0?(s=Fe.getFullSide(l,i,2458,1383),n.value="50",t.value="50"):s=Fe.getFullSide(l,i,o.get("bgObj").width,o.get("bgObj").height),s==="X"?(n.disabled=!0,t.disabled=!1,n.style.setProperty("opacity","0.1"),t.style.removeProperty("opacity")):(t.disabled=!0,n.disabled=!1,t.style.setProperty("opacity","0.1"),n.style.removeProperty("opacity"))}else t.disabled=!0,n.disabled=!0,t.style.setProperty("opacity","0.1"),n.style.setProperty("opacity","0.1")}}var k=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())}),Ge=(n,t,e)=>(t=n[Symbol.asyncIterator],e=(i,l)=>(l=n[i])&&(t[i]=s=>new Promise((a,u,r)=>(s=l.call(n,s),r=s.done,Promise.resolve(s.value).then(c=>a({value:c,done:r}),u)))),t?t.call(n):(n=n[Symbol.iterator](),t={},e("next"),e("return"),t));let ge=new K;function Qe(n){return k(this,null,function*(){const t=n.addTopBar({icon:"iconLogo",title:window.bgCoverPlugin.i18n.addTopBarIcon,position:"right",callback:()=>{d("[topbarUI][initTopbar] click and open toolbar")}});t.addEventListener("click",()=>k(this,null,function*(){let e=t.getBoundingClientRect();e.width===0&&(e=document.querySelector("#barMore").getBoundingClientRect()),e.width===0&&(e=document.querySelector("#barPlugins").getBoundingClientRect());const i=new b.Menu("topBarSample",()=>{});i.addItem({icon:"iconIndent",label:`${window.bgCoverPlugin.i18n.selectPictureLabel}`,type:"submenu",submenu:[{icon:"iconHand",label:`${window.bgCoverPlugin.i18n.selectPictureManualLabel}`,accelerator:n.commands[0].customHotkey,click:()=>{be()}},{icon:"iconMark",label:`${window.bgCoverPlugin.i18n.selectPictureRandomLabel}`,accelerator:n.commands[1].customHotkey,click:()=>{U(!0)}}]});let l=[{icon:"iconImage",label:`${window.bgCoverPlugin.i18n.addSingleImageLabel}`,click:()=>{Ze()}},{icon:"iconFolder",label:`${window.bgCoverPlugin.i18n.addDirectoryLabel}`,click:()=>{et()}}];const s=(0,b.getFrontend)(),a=(0,b.getBackend)();window.bgCoverPlugin.isAndroid&&!window.bgCoverPlugin.isBrowser&&l.unshift({icon:"iconSparkles",label:`${window.bgCoverPlugin.i18n.androidLimitNotice}`,type:"readonly"}),i.addItem({icon:"iconAdd",label:`${window.bgCoverPlugin.i18n.addImageLabel}`,type:"submenu",submenu:l}),i.addItem({id:"pluginOnOffMenu",icon:`${o.get("activate")?"iconClose":"iconSelect"}`,label:`${o.get("activate")?window.bgCoverPlugin.i18n.closeBackgroundLabel:window.bgCoverPlugin.i18n.openBackgroundLabel}`,accelerator:n.commands[2].customHotkey,click:()=>{Pe()}}),i.addSeparator(),i.addItem({icon:"iconGithub",label:`${window.bgCoverPlugin.i18n.bugReportLabel}`,click:()=>{je()}}),i.addItem({icon:"iconSettings",label:`${window.bgCoverPlugin.i18n.settingLabel}`,click:()=>{$e(n)}}),window.bgCoverPlugin.isMobileLayout?i.fullscreen():i.open({x:e.right,y:e.bottom,isLeft:!0})}))})}function Pe(){return k(this,null,function*(){o.set("activate",!o.get("activate")),o.save("[topbarUI][pluginOnOff]"),R()})}function be(){return k(this,null,function*(){yield Je()})}function U(n=!1){return k(this,null,function*(){const t=P();if(t===0)V(),(0,b.showMessage)(`${window.bgCoverPlugin.i18n.noCachedImg4random}`,3e3,"info");else if(t===1){if(n&&(0,b.showMessage)(`${window.bgCoverPlugin.i18n.selectPictureRandomNotice}`,3e3,"info"),document.getElementById("bglayer").style.getPropertyValue("background-image")===""){let i=o.get("bgObj");D(i.path,i.mode)}}else{let e=o.get("fileidx"),i=o.get("bgObj").hash,l="";for(;;){let s=Math.floor(Math.random()*t);if(l=Object.keys(e)[s],d(`[topbarUI][selectPictureRandom] \u968F\u673A\u62BD\u4E00\u5F20\uFF0C\u4E4B\u524D\uFF1A${i}\uFF0C\u968F\u673A\u5230\uFF1A${l}`),l!==i){d(`[topbarUI][selectPictureRandom] \u5DF2\u62BD\u5230\u4E0D\u540C\u7684\u80CC\u666F\u56FE${l}\uFF0C\u8FDB\u884C\u66FF\u6362`);break}}d("[topbarUI][selectPictureRandom] \u8DF3\u51FA\u62BD\u5361\u6B7B\u5FAA\u73AF,\u524D\u666F\u56FE\u4E3A\uFF1A",e[l]),D(e[l].path,e[l].mode),o.set("bgObj",e[l])}yield o.save("[topbarUI][selectPictureRandom]"),G()})}function Ze(){return k(this,null,function*(){if(P()>=H)(0,b.showMessage)(window.bgCoverPlugin.i18n.addSingleImageExceed1+H+window.bgCoverPlugin.i18n.addSingleImageExceed2,7e3,"error");else{let e=(yield ge.openFilePicker(q.toString()))[0],i=yield Ee(e);i!==void 0&&(yield o.save("[topbarUI][addSinglelocalImageFile]"),D(i.path,i.mode),G())}})}function et(){return k(this,null,function*(){const n=P(),t=yield ge.openFolderPicker();let e=[];try{for(var i=Ge(t),l,s,a;l=!(s=yield i.next()).done;l=!1){const u=s.value,r=u.name,[c,g]=ge.splitext(r);if(d(`[topbarUI][addDirectory] \u5F53\u524D\u56FE\u7247${r}\u540E\u7F00\u4E3A${g}, \u5B58\u5728\u4E8E\u5141\u8BB8\u7684\u56FE\u7247\u540E\u7F00(${q})\u4E2D\uFF1A${q.includes(`.${g}`)}`),q.includes(`.${g}`)){let f=yield _e(u,!1);f!=="exists"?e.push(u):d(`[topbarUI][addDirectory] \u5F53\u524D\u56FE\u7247${r}md5\u4E3A${f}, \u5B58\u5728\u4E8E\u7F13\u5B58\u4E2D`)}if(d("[topbarUI][addDirectory] fileContainer",e),e.length>=H-n){(0,b.showMessage)(window.bgCoverPlugin.i18n.addDirectoryLabelError1+H+window.bgCoverPlugin.i18n.addDirectoryLabelError2,7e3,"error");break}}}catch(u){a=[u]}finally{try{l&&(s=i.return)&&(yield s.call(i))}finally{if(a)throw a[0]}}e.length>=30?(0,b.confirm)(window.bgCoverPlugin.i18n.addDirectoryLabelConfirmTitle,`${window.bgCoverPlugin.i18n.addDirectoryLabelConfirm1} ${e.length} ${window.bgCoverPlugin.i18n.addDirectoryLabelConfirm2}`,()=>k(this,null,function*(){yield Ce(e,!0)})):yield Ce(e,!0)})}var he=(n,t,e)=>new Promise((i,l)=>{var s=r=>{try{u(e.next(r))}catch(c){l(c)}},a=r=>{try{u(e.throw(r))}catch(c){l(c)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(s,a);u((e=e.apply(n,t)).next())});let st=new K,ot=new le,rt=new W,ut=new Le;class tt extends b.Plugin{constructor(){super(...arguments),this.htmlThemeNode=document.getElementsByTagName("html")[0]}onload(){return he(this,null,function*(){const t=(0,b.getFrontend)(),e=(0,b.getBackend)();this.isMobileLayout=t==="mobile"||t==="browser-mobile",this.isBrowser=t.includes("browser"),this.isAndroidBackend=e==="android",window.bgCoverPlugin={i18n:this.i18n,isMobileLayout:this.isMobileLayout,isBrowser:this.isBrowser,isAndroid:this.isAndroidBackend};const i=document.createElement("style");i.id="snippetCSS-pluginsStylesiyuan-plugin-background-cover";const s=yield(yield fetch("./index.scss")).text();i.textContent=s,document.head.appendChild(i),this.addIcons(Be.iconLogo),o.setPlugin(this),yield o.load(),yield Qe(this),this.addCommand({langKey:"selectPictureManualLabel",hotkey:"\u21E7\u2318F6",callback:()=>{be()}}),this.addCommand({langKey:"selectPictureRandomLabel",hotkey:"\u21E7\u2318F7",callback:()=>{U(!0)}}),this.addCommand({langKey:"openBackgroundLabel",hotkey:"\u21E7\u2318F4",callback:()=>{Pe()}}),this.addCommand({langKey:"reduceBackgroundOpacityLabel",hotkey:"\u21E7\u23187",callback:()=>{xe(!1)}}),this.addCommand({langKey:"addBackgroundOpacityLabel",hotkey:"\u21E7\u23188",callback:()=>{xe(!0)}}),this.addCommand({langKey:"reduceBackgroundBlurLabel",hotkey:"\u21E7\u23189",callback:()=>{Ie(!1)}}),this.addCommand({langKey:"addBackgroundBlurLabel",hotkey:"\u21E7\u23180",callback:()=>{Ie(!0)}}),new MutationObserver(yield this.themeOnChange.bind(this)).observe(this.htmlThemeNode,{attributes:!0}),O(this.i18n.helloPlugin)})}onLayoutReady(){return he(this,null,function*(){We(),yield Ke();const[t,e]=T();o.set("prevTheme",e),yield R(),d(`frontend: ${(0,b.getFrontend)()}; backend: ${(0,b.getBackend)()}`),He()})}onunload(){O(`${this.i18n.byePlugin}`),o.save("[index.ts][onunload]");var t=document.getElementById("bglayer");t.remove(),document.body.style.removeProperty("opacity")}themeOnChange(){return he(this,null,function*(){const[t,e]=T();let i=o.get("prevTheme");d(`Theme changed! from ${i} to ${t} | ${e}`),i!==e&&(o.set("prevTheme",e),yield o.save("[index][themeOnChange]"),ze())})}openSetting(){$e(this)}}module.exports=Q})();
