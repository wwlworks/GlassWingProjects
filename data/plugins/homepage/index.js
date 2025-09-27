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
 */(()=>{"use strict";var l={};l.d=(i,t)=>{for(var u in t)l.o(t,u)&&!l.o(i,u)&&Object.defineProperty(i,u,{enumerable:!0,get:t[u]})},l.o=(i,t)=>Object.prototype.hasOwnProperty.call(i,t),l.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var h={};l.r(h),l.d(h,{default:()=>y});const c=require("siyuan");var F=(i,t,u)=>new Promise((e,s)=>{var a=o=>{try{n(u.next(o))}catch(f){s(f)}},r=o=>{try{n(u.throw(o))}catch(f){s(f)}},n=o=>o.done?e(o.value):Promise.resolve(o.value).then(a,r);n((u=u.apply(i,t)).next())});const d="Homepageid",p="note",E="pageallopen",m="pagealwaysopen",b="dock_tab";class y extends c.Plugin{openTabById(){return F(this,null,function*(){const t=yield this.loadData(d),u=yield this.loadData(E),e=t.iddata.split(`
`);if(u==="open"){const s=e[0].trim();(0,c.openTab)({app:this.app,doc:{id:s}})}else if(t)for(const s of e){const a=s.trim();(0,c.openTab)({app:this.app,doc:{id:a}})}})}openTabByIdalways(){return F(this,null,function*(){const t=yield this.loadData(d),u=yield this.loadData(E),e=yield this.loadData(m),s=t.iddata.split(`
`),a=!0;if(e==="open"){if(u==="open"){const r=s[0].trim();(0,c.openTab)({app:this.app,doc:{id:r},keepCursor:a})}else if(t)for(const r of s){const n=r.trim();(0,c.openTab)({app:this.app,doc:{id:n},keepCursor:a})}}})}onLayoutReady(){return F(this,null,function*(){this.openTabById()})}onload(){return F(this,null,function*(){this.openTabById();try{const n=yield this.loadData(p);this.data[p].notedata=n.notedata}catch{this.data[p]={notedata:""}}try{const n=yield this.loadData(d);this.data[d].iddata=n.iddata}catch{this.data[d]={iddata:""}}const t=document.createElement("textarea"),u=document.createElement("textarea");this.addIcons(`<symbol id="HOME" viewBox="0 0 1024 1024">
        <path d="M562.9 80.9C535.4 56 493.5 56 466 80.9L74 453.1c-14.7 13.5-15.7 36.4-2.2 51.1 13.3 14.5 35.8 15.7 50.6 2.6l6.2-5.9v388.4c0 39.9 32.3 72.4 72.2 72.4h210.5V744c0-28.1 22.7-50.9 50.8-51h99.1c28.1 0 50.9 22.8 50.9 50.9V961.7h215.4c39.9 0 72.3-32.4 72.3-72.3V505.7c16.1 14.5 38.9 13.4 52.2-1.5 13.4-14.8 12.2-37.7-2.6-51.1L562.9 80.9z" fill="#ff001a"></path>
        </symbol>
        <symbol id="iconHouse" viewBox="0 0 1024 1024">
        <path d="M562.9 80.9C535.4 56 493.5 56 466 80.9L74 453.1c-14.7 13.5-15.7 36.4-2.2 51.1 13.3 14.5 35.8 15.7 50.6 2.6l6.2-5.9v388.4c0 39.9 32.3 72.4 72.2 72.4h210.5V744c0-28.1 22.7-50.9 50.8-51h99.1c28.1 0 50.9 22.8 50.9 50.9V961.7h215.4c39.9 0 72.3-32.4 72.3-72.3V505.7c16.1 14.5 38.9 13.4 52.2-1.5 13.4-14.8 12.2-37.7-2.6-51.1L562.9 80.9z" fill="#ff001a"></path>
</symbol>
`),this.setting=new c.Setting({confirmCallback:()=>{this.saveData(d,{iddata:t.value}),this.saveData(p,{notedata:u.value})}}),this.setting.addItem({title:"\u9996\u9875\u6587\u6863id",description:"\u652F\u6301\u591A\u9875\u7B7E,\u9ED8\u8BA4\u7B2C\u4E00\u4E2A\u4E3A\u9996\u9875,\u6309\u4E0BShift+Enter\u6362\u884C\u8F93\u5165\u65B0id,\u4E00\u884C\u4E00\u4E2A",createActionElement:()=>(t.className="b3-text-field fn__block ids",t.placeholder="\u8BF7\u8F93\u5165\u4F60\u7684\u9996\u9875\u6587\u6863id",t.value=this.data[d].iddata,t)}),this.setting.addItem({title:"\u5907\u6CE8\u6846",description:"\u5728\u6B64\u53EF\u4EE5\u8F93\u5165\u5BF9\u9996\u9875id\u7684\u5907\u6CE8,\u65B9\u4FBF\u7BA1\u7406,\u4EC5\u8BB0\u5F55\u6587\u672C,\u65E0\u5176\u4ED6\u4F5C\u7528,\u6309\u4E0BShift+Enter\u6362\u884C",createActionElement:()=>(u.className="b3-text-field fn__block note",u.placeholder="\u8BF7\u8F93\u5165\u4F60\u7684\u5907\u6CE8",u.value=this.data[p].notedata,u)});const e=document.createElement("button");e.className="b3-button b3-button--outline fn__flex-center fn__size200",(yield this.loadData(E))==="open"?e.textContent="\u5F53\u524D\uFF1A\u5F00\u542F":e.textContent="\u5F53\u524D\uFF1A\u5173\u95ED",e.addEventListener("click",()=>{const n="pageallopen";let o="open";e.textContent==="\u5F53\u524D\uFF1A\u5173\u95ED"?(o="open",e.textContent="\u5F53\u524D\uFF1A\u6253\u5F00"):(o="close",e.textContent="\u5F53\u524D\uFF1A\u5173\u95ED"),this.saveData(n,o)}),this.setting.addItem({title:"\u4EC5\u81EA\u52A8\u6253\u5F00\u9996\u9875",description:"\u5173\u95ED\u65F6\u5C06\u6253\u5F00\u5217\u8868\u91CC\u7684\u6240\u6709\u9875\u7B7E",actionElement:e});const a=document.createElement("button");a.className="b3-button b3-button--outline fn__flex-center fn__size200",(yield this.loadData(m))==="open"?a.textContent="\u5F53\u524D\uFF1A\u5F00\u542F":a.textContent="\u5F53\u524D\uFF1A\u5173\u95ED",a.addEventListener("click",()=>{const n="pagealwaysopen";let o="open";a.textContent==="\u5F53\u524D\uFF1A\u5173\u95ED"?(o="open",a.textContent="\u5F53\u524D\uFF1A\u6253\u5F00"):(o="close",a.textContent="\u5F53\u524D\uFF1A\u5173\u95ED"),this.saveData(n,o)}),this.setting.addItem({title:"\u9501\u5B9A\u9996\u9875\u6253\u5F00\u72B6\u6001",description:"\u5F53\u9996\u9875\u53CA\u5176\u4ED6\u9875\u7B7E\u88AB\u5173\u95ED\u65F6\u81EA\u52A8\u91CD\u65B0\u6253\u5F00,\u5F00\u542F\u540E\u8FD8\u9700\u8981\u70B9\u4E00\u4E0B\u9996\u9875\u7684dock\u952E\u5F00\u542F\u76D1\u542C",actionElement:a}),this.addDock({config:{position:"LeftTop",size:{width:200,height:0},icon:"HOME",title:"\u9996\u9875\u76D1\u542C"},data:{text:"\u6B63\u5728\u76D1\u542C"},type:b,resize:()=>{this.openTabByIdalways()},init(){this.element.innerHTML=`<div class="fn__flex-1 fn__flex-column">
    <div class="block__icons">
        <div class="block__logo">
            <svg><use xlink:href="#iconEmoji"></use></svg>
            \u9996\u9875\u9875\u7B7E\u76D1\u542C
        </div>
        <span class="fn__flex-1 fn__space"></span>
        <span data-type="min" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="Min ${(0,c.adaptHotkey)("\u2318W")}"><svg><use xlink:href="#iconMin"></use></svg></span>
    </div>
    <div class="fn__flex-1 plugin-sample__custom-dock">
    \u5DF2\u5F00\u542F\u9875\u7B7E\u5173\u95ED\u76D1\u542C,\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u9009\u62E9\u662F\u5426\u81EA\u52A8\u6062\u590D\u5173\u95ED\u7684\u9996\u9875\u9875\u7B7E,\u5F00\u542F\u540E\u70B9\u51FBdock\u952E\u4F1A\u6253\u5F00\u9996\u9875\u5E76\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6
    </div>
</div>`},update(){console.log("\u54C8\u54C8\u54C8\u54C8")},destroy(){console.log("destroy dock:",b)}}),this.addCommand({langKey:"Homepage",hotkey:"\u21E7\u2318H",callback:()=>{console.log("\u6253\u5F00\u9996\u9875"),this.openTabById}}),this.addTopBar({icon:"iconHouse",title:this.i18n.addTopBarIcon,position:"left",callback:()=>{this.openTabById()}})})}}module.exports=h})();
