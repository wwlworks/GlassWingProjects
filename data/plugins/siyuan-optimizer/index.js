"use strict";var P=Object.defineProperty;var O=(d,i,e)=>i in d?P(d,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[i]=e;var h=(d,i,e)=>O(d,typeof i!="symbol"?i+"":i,e);const m=require("siyuan");async function b(d,i){let e=await m.fetchSyncPost(d,i);return e.code===0?e.data:null}async function z(d,i){return b("/api/filetree/removeDoc",{notebook:d,path:i})}async function M(d,i,e){return b("/api/block/appendBlock",{dataType:d,data:i,parentID:e})}async function $(d,i,e,t=!0){return b("/api/block/transferBlockRef",{fromID:d,toID:i,refIDs:e,reloadUI:t})}async function E(d){return b("/api/query/sql",{stmt:d})}async function T(d){return b("/api/export/exportMdContent",{id:d})}async function x(d){let i="";return i=`SELECT content, COUNT(*) as count,
                     GROUP_CONCAT(id) as ids,
                     GROUP_CONCAT(hpath) as hpaths,
                     GROUP_CONCAT(box) as boxes,
                     GROUP_CONCAT(path) as paths,
                     GROUP_CONCAT(updated) as updateds,
                     GROUP_CONCAT(length(content)) as sizes
                     FROM blocks
                     WHERE type = 'd'
                     GROUP BY content
                     HAVING COUNT(*) > 1
                     ORDER BY count DESC, content`,await E(i)}async function q(){return await E(`
        SELECT b.id, b.content, b.hpath, b.box, b.path, b.updated
        FROM blocks b
        WHERE b.type = 'd'
          AND NOT EXISTS (
              SELECT 1 FROM blocks c WHERE c.root_id = b.id AND c.type != 'd' AND c.markdown != ''
          )
        ORDER BY b.updated DESC`)}async function v(d){const i=`SELECT b.id, b.content, b.hpath, b.box, b.path, b.root_id, b.updated
                       FROM refs r
                       JOIN blocks b ON b.id = r.block_id
                       WHERE r.def_block_id = '${d}'
                       ORDER BY b.updated DESC`;return await E(i)}async function L(d,i){return $(d,i,[],!1)}async function A(d,i){try{const e=await T(i),t=(e==null?void 0:e.content)||"";return await M("markdown",t,d)}catch(e){throw console.error("Error merging document content:",e),e}}const S=Object.freeze(Object.defineProperty({__proto__:null,appendBlock:M,exportMdContent:T,findDuplicateDocuments:x,findEmptyDocuments:q,getDocumentReferences:v,mergeDocumentContent:A,removeDoc:z,request:b,sql:E,transferAllReferences:L,transferBlockRef:$},Symbol.toStringTag,{value:"Module"}));class R{async getDuplicateDocumentGroups(){try{const i=await x(),e=[];for(const t of i){const n=t.ids.split(","),o=t.hpaths.split(","),r=t.boxes.split(","),s=t.paths.split(","),c=t.updateds.split(","),l=t.sizes.split(","),a=[];for(let p=0;p<n.length;p++)a.push({id:n[p],title:t.content,hpath:o[p],box:r[p],path:s[p],updated:parseInt(c[p]),size:parseInt(l[p])});e.push({title:t.content,documents:a,count:t.count})}for(const t of e)for(const n of t.documents)try{const o=await v(n.id);n.refCount=Array.isArray(o)?o.length:0}catch{}return e}catch(i){throw console.error("Error getting duplicate document groups:",i),i}}async getEmptyDocuments(){try{const e=(await q()).map(t=>({id:t.id,title:t.content,hpath:t.hpath,box:t.box,path:t.path,updated:t.updated,size:0,refCount:0}));for(const t of e)try{const n=await v(t.id);t.refCount=Array.isArray(n)?n.length:0}catch{}return e}catch(i){throw console.error("Error getting empty documents:",i),i}}async mergeDocuments(i,e){try{for(const t of e){if(t===i)continue;await L(t,i),await A(i,t);const n=await this.getDocumentInfo(t);n&&await z(n.box,n.path)}m.showMessage(`成功合并 ${e.length} 个文档`)}catch(t){throw console.error("Error merging documents:",t),m.showMessage(`合并失败: ${t.message}`),t}}async deleteEmptyDocuments(i){try{let e=0;for(const t of i){const n=await this.getDocumentInfo(t);n&&(await z(n.box,n.path),e++)}m.showMessage(`成功删除 ${e} 个空文档`)}catch(e){throw console.error("Error deleting empty documents:",e),m.showMessage(`删除失败: ${e.message}`),e}}async getDocumentInfo(i){try{const e=await E(`SELECT id, content, hpath, box, path, updated, length(content) as size
                                      FROM blocks
                                      WHERE id = '${i}' AND type = 'd'`);if(e.length>0){const t=e[0];return{id:t.id,title:t.content,hpath:t.hpath,box:t.box,path:t.path,updated:t.updated,size:t.size}}return null}catch(e){return console.error("Error getting document info:",e),null}}async canSafelyDelete(i){try{return(await v(i)).length===0}catch(e){return console.error("Error checking if document can be safely deleted:",e),!1}}async getDocumentReferenceCount(i){try{return(await v(i)).length}catch(e){return console.error("Error getting document reference count:",e),0}}}const B=d=>{const{title:i,content:e,confirm:t,cancel:n,width:o,height:r}=d,s=new m.Dialog({title:i,content:`<div class="b3-dialog__content">
    <div class="ft__breakword">
    </div>
</div>
<div class="b3-dialog__action">
    <button class="b3-button b3-button--cancel">${window.siyuan.languages.cancel}</button><div class="fn__space"></div>
    <button class="b3-button b3-button--text" id="confirmDialogConfirmBtn">${window.siyuan.languages.confirm}</button>
</div>`,width:o,height:r}),c=s.element.querySelector(".b3-dialog__content>div.ft__breakword");typeof e=="string"?c.innerHTML=e:c.appendChild(e);const l=s.element.querySelectorAll(".b3-button");l[0].addEventListener("click",()=>{n&&n(c),s.destroy()}),l[1].addEventListener("click",()=>{t&&t(c),s.destroy()})};class H{constructor(i,e,t="merge",n){h(this,"element");h(this,"optimizer");h(this,"i18n");h(this,"defaultTab");h(this,"app");h(this,"duplicateGroupsCache",[]);h(this,"emptyDocsCache",[]);h(this,"excludeUntitled",!1);h(this,"hideBacklinkedInEmpty",!1);h(this,"previewEditors",new Map);this.element=i,this.optimizer=new R,this.i18n=e,this.defaultTab=t,this.app=n,this.init()}init(){this.element.innerHTML=this.getMainHTML(),this.bindEvents()}getMainHTML(){return`
            <div class="optimizer-container">
                <div class="optimizer-header">
                    <h2>${this.defaultTab==="delete"?this.i18n.deleteEmptyDocs:this.i18n.mergeDuplicateDocs}</h2>
                    <div class="optimizer-actions">
                        <button class="b3-button b3-button--outline" id="refreshBtn">
                            <svg><use xlink:href="#iconRefresh"></use></svg>
                            ${this.i18n.refresh}
                        </button>
                        <button class="b3-button b3-button--outline" id="closeBtn">
                            <svg><use xlink:href="#iconClose"></use></svg>
                            ${this.i18n.close}
                        </button>
                    </div>
                </div>

                <div class="optimizer-tabs">
                    <div class="optimizer-tab-content">
                        <div class="optimizer-tab-panel" id="mergePanel">
                            <div class="optimizer-loading" id="mergeLoading">
                                <svg class="fn__rotate"><use xlink:href="#iconLoading"></use></svg>
                                ${this.i18n.searchingDocs}
                            </div>
                            <div class="optimizer-content" id="mergeContent" style="display: none;"></div>
                        </div>

                        <div class="optimizer-tab-panel" id="deletePanel" style="display: none;">
                            <div class="optimizer-loading" id="deleteLoading">
                                <svg class="fn__rotate"><use xlink:href="#iconLoading"></use></svg>
                                ${this.i18n.searchingDocs}
                            </div>
                            <div class="optimizer-content" id="deleteContent" style="display: none;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `}bindEvents(){var t,n;(t=this.element.querySelector("#refreshBtn"))==null||t.addEventListener("click",()=>{this.refresh()}),(n=this.element.querySelector("#closeBtn"))==null||n.addEventListener("click",()=>{this.close()});const i=this.element.querySelector("#mergePanel"),e=this.element.querySelector("#deletePanel");this.defaultTab==="delete"?(i&&(i.style.display="none"),e&&(e.style.display="block"),this.loadDeletePanel()):(i&&(i.style.display="block"),e&&(e.style.display="none"),this.loadMergePanel())}async loadMergePanel(){const i=this.element.querySelector("#mergeLoading"),e=this.element.querySelector("#mergeContent");i.style.display="block",e.style.display="none";try{this.destroyAllPreviews();const t=await this.optimizer.getDuplicateDocumentGroups();this.duplicateGroupsCache=t,i.style.display="none",e.style.display="block";const n=this.applyMergeFilters(this.duplicateGroupsCache);n.length===0?e.innerHTML=`
                    <div class="optimizer-empty">
                        <svg><use xlink:href="#iconInfo"></use></svg>
                        <p>${this.i18n.noDuplicateDocsFound}</p>
                    </div>
                `:(e.innerHTML=this.getMergeContentHTML(n),this.bindMergeEvents())}catch(t){i.style.display="none",e.style.display="block",e.innerHTML=`
                <div class="optimizer-error">
                    <svg><use xlink:href="#iconCloseRound"></use></svg>
                    <p>${this.i18n.mergeError.replace("${error}",t.message)}</p>
                </div>
            `}}async loadDeletePanel(){const i=this.element.querySelector("#deleteLoading"),e=this.element.querySelector("#deleteContent");i.style.display="block",e.style.display="none";try{this.destroyAllPreviews();const t=await this.optimizer.getEmptyDocuments();this.emptyDocsCache=t,i.style.display="none",e.style.display="block";const n=this.applyDeleteFilters(this.emptyDocsCache);n.length===0?e.innerHTML=`
                    <div class="optimizer-empty">
                        <svg><use xlink:href="#iconInfo"></use></svg>
                        <p>${this.i18n.noEmptyDocsFound}</p>
                    </div>
                `:(e.innerHTML=this.getDeleteContentHTML(n),this.bindDeleteEvents())}catch(t){i.style.display="none",e.style.display="block",e.innerHTML=`
                <div class="optimizer-error">
                    <svg><use xlink:href="#iconCloseRound"></use></svg>
                    <p>${this.i18n.deleteError.replace("${error}",t.message)}</p>
                </div>
            `}}getMergeContentHTML(i){let e=`
            <div class="optimizer-summary">
                <p>${this.i18n.foundDuplicateDocs.replace("${count}",i.length.toString())}</p>
                <label class="b3-form__checkbox" style="margin-left: 8px;">
                    <input type="checkbox" id="excludeUntitledToggle" ${this.excludeUntitled?"checked":""}>
                    ${this.i18n.excludeUntitled||"排除未命名文档"}
                </label>
            </div>
        `;return i.forEach((t,n)=>{e+=`
                <div class="optimizer-group" data-group="${n}">
                    <div class="optimizer-group-header">
                        <h3>${t.title}</h3>
                        <span class="optimizer-count">${t.count} ${this.i18n.docTitle}</span>
                    </div>
                    <div class="optimizer-group-content">
                        ${t.documents.map((o,r)=>`
                            <div class="optimizer-doc-item" data-doc-id="${o.id}">
                                <div class="optimizer-doc-body">
                                    <span class="optimizer-doc-info">
                                        <a href="#" class="optimizer-doc-title" data-open-id="${o.id}" title="${o.hpath}">${o.title}</a>
                                        <span class="optimizer-doc-path">${o.hpath}</span>
                                        <span class="optimizer-doc-meta">
                                            ${this.formatDate(o.updated)} | 反链: ${o.refCount??"-"}
                                        </span>
                                    </span>
                                </div>
                                <div class="optimizer-doc-actions">
                                    <button class="b3-button b3-button--primary fn__none" data-action="confirmMerge" data-group="${n}" data-doc="${r}">
                                        ${this.i18n.mergeSelected}
                                    </button>
                                    <button class="b3-button" data-action="setMain" data-group="${n}" data-doc="${r}">
                                        ${this.i18n.setAsMainDoc}
                                    </button>
                                    <button class="b3-button" data-action="previewDoc" data-doc-id="${o.id}" style="display: none;">
                                        ${this.i18n.preview||"预览"}
                                    </button>
                                    <button class="b3-button b3-button--remove" data-action="deleteDoc" data-doc-id="${o.id}" data-box="${o.box}" data-path="${o.path}">
                                        ${this.i18n.delete}
                                    </button>
                                </div>
                                <div class="optimizer-preview fn__flex-1" style="margin-top: 4px; display: none;"></div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `}),e}getDeleteContentHTML(i){let e=`
            <div class="optimizer-summary">
                <p>${this.i18n.foundEmptyDocs.replace("${count}",i.length.toString())}</p>
            </div>
            <div class="optimizer-actions-bar">
                <button class="b3-button b3-button--primary" id="deleteSelected">
                    ${this.i18n.deleteSelected}
                </button>
                <label class="b3-form__checkbox" style="margin-left: 8px;">
                    <input type="checkbox" id="hideBacklinkedToggle" ${this.hideBacklinkedInEmpty?"checked":""}>
                    ${this.i18n.hideBacklinked||"过滤掉有反链的文档"}
                </label>
            </div>
            <div class="optimizer-doc-list">
        `;return i.forEach(t=>{e+=`
                <div class="optimizer-doc-item" data-doc-id="${t.id}">
                    <div class="optimizer-doc-body">
                        <span class="optimizer-doc-info">
                            <a href="#" class="optimizer-doc-title" data-open-id="${t.id}" title="${t.hpath}">${t.title}</a>
                            <span class="optimizer-doc-path">${t.hpath}</span>
                            <span class="optimizer-doc-meta">
                                ${this.formatDate(t.updated)} | 反链: ${t.refCount??"-"}
                            </span>
                        </span>
                    </div>
                    <div class="optimizer-doc-actions">
                        <button class="b3-button" data-action="previewDoc" data-doc-id="${t.id}" style="display: none;">${this.i18n.preview||"预览"}</button>
                        <input type="checkbox" class="b3-form__checkbox empty-doc-checkbox" data-id="${t.id}">
                    </div>
                    <div class="optimizer-preview fn__flex-1" style="margin-top: 4px; display: none;"></div>
                </div>
            `}),e+="</div>",e}bindMergeEvents(){this.element.querySelectorAll(".optimizer-doc-title").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=t.currentTarget.getAttribute("data-open-id");n&&this.element.dispatchEvent(new CustomEvent("optimizer-open-doc",{detail:{id:n,position:"right"}}))})});const i=this.element.querySelector("#excludeUntitledToggle");i&&i.addEventListener("change",()=>{this.excludeUntitled=!!i.checked,this.renderMergeContentFromCache()}),this.element.querySelectorAll('[data-action="setMain"]').forEach(e=>{e.addEventListener("click",t=>{const n=t.currentTarget,o=Number(n.getAttribute("data-group")),r=Number(n.getAttribute("data-doc"));if(Number.isNaN(o)||Number.isNaN(r))return;this.setMainDocument(o,r);const s=this.element.querySelector(`[data-group="${o}"]`);s&&s.querySelectorAll(".optimizer-doc-item").forEach((c,l)=>{const a=c.querySelector('[data-action="setMain"]'),p=c.querySelector('[data-action="confirmMerge"]');l===r?(a.classList.add("fn__none"),p.classList.remove("fn__none")):(a.classList.add("fn__none"),p.classList.add("fn__none"))})})}),this.element.querySelectorAll('[data-action="confirmMerge"]').forEach(e=>{e.addEventListener("click",t=>{const n=t.currentTarget,o=Number(n.getAttribute("data-group"));Number.isNaN(o)||(this.element.querySelectorAll('[data-action="deleteDoc"]').forEach(r=>{r.addEventListener("click",async s=>{var p,u,g;const c=s.currentTarget,l=c.getAttribute("data-box"),a=c.getAttribute("data-path");if(!(!l||!a))try{const{removeDoc:y}=await Promise.resolve().then(()=>S);await y(l,a);const D=c.closest(".optimizer-doc-item"),w=c.closest(".optimizer-group");if(D==null||D.remove(),w&&w.querySelectorAll(".optimizer-doc-item").length===0){const f=this.element.querySelector("#mergeContent");w.remove();const k=f==null?void 0:f.querySelector(".optimizer-summary p");if(k){const _=f.querySelectorAll(".optimizer-group").length;k.textContent=this.i18n.foundDuplicateDocs.replace("${count}",_.toString())}f.querySelectorAll(".optimizer-group").length===0&&(f.innerHTML=`
                                <div class="optimizer-empty">
                                    <svg><use xlink:href="#iconInfo"></use></svg>
                                    <p>${this.i18n.noDuplicateDocsFound}</p>
                                </div>
                            `)}}catch(y){console.error("Delete doc failed:",y),(g=(u=(p=window.siyuan)==null?void 0:p.ws)==null?void 0:u.showMessage)==null||g.call(u,this.i18n.deleteError.replace("${error}",y.message))}})}),this.mergeGroup(o))})}),this.element.querySelectorAll('[data-action="previewDoc"]').forEach(e=>{e.addEventListener("click",t=>{const n=t.currentTarget,o=n.getAttribute("data-doc-id");if(!o)return;const r=n.closest(".optimizer-doc-item");r&&this.togglePreviewForDoc(o,r)})}),this.element.addEventListener("click",async e=>{var r,s,c;const t=e.target.closest('[data-action="deleteDoc"]');if(!t||!this.element.contains(t))return;const n=t.getAttribute("data-box"),o=t.getAttribute("data-path");if(!(!n||!o))try{const{removeDoc:l}=await Promise.resolve().then(()=>S);await l(n,o);const a=t.closest(".optimizer-doc-item"),p=t.closest(".optimizer-group");if(a==null||a.remove(),p&&p.querySelectorAll(".optimizer-doc-item").length===0){const u=this.element.querySelector("#mergeContent");p.remove();const g=u==null?void 0:u.querySelector(".optimizer-summary p");if(g){const y=u.querySelectorAll(".optimizer-group").length;g.textContent=this.i18n.foundDuplicateDocs.replace("${count}",y.toString())}u.querySelectorAll(".optimizer-group").length===0&&(u.innerHTML=`
                            <div class="optimizer-empty">
                                <svg><use xlink:href="#iconInfo"></use></svg>
                                <p>${this.i18n.noDuplicateDocsFound}</p>
                            </div>
                        `)}}catch(l){console.error("Delete doc failed:",l),(c=(s=(r=window.siyuan)==null?void 0:r.ws)==null?void 0:s.showMessage)==null||c.call(s,this.i18n.deleteError.replace("${error}",(l==null?void 0:l.message)??l))}})}bindDeleteEvents(){var e,t,n;this.element.querySelectorAll("#deleteContent .optimizer-doc-title").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const s=r.currentTarget.getAttribute("data-open-id");s&&this.element.dispatchEvent(new CustomEvent("optimizer-open-doc",{detail:{id:s,position:"right"}}))})});const i=this.element.querySelector("#hideBacklinkedToggle");i&&i.addEventListener("change",()=>{this.hideBacklinkedInEmpty=!!i.checked,this.renderDeleteContentFromCache()}),this.element.querySelectorAll('[data-action="previewDoc"]').forEach(o=>{o.addEventListener("click",r=>{const s=r.currentTarget,c=s.getAttribute("data-doc-id");if(!c)return;const l=s.closest(".optimizer-doc-item");l&&this.togglePreviewForDoc(c,l)})}),(e=this.element.querySelector("#selectAllEmpty"))==null||e.addEventListener("click",()=>{this.selectAllEmptyDocs(!0)}),(t=this.element.querySelector("#deselectAllEmpty"))==null||t.addEventListener("click",()=>{this.selectAllEmptyDocs(!1)}),(n=this.element.querySelector("#deleteSelected"))==null||n.addEventListener("click",()=>{this.deleteSelectedEmptyDocs()})}setMainDocument(i,e){var o;const t=this.element.querySelector(`[data-group="${i}"]`);if(!t)return;t.querySelectorAll(".optimizer-doc-item").forEach(r=>{r.classList.remove("optimizer-main-doc")});const n=(o=t.querySelector(`[data-doc="${e}"]`))==null?void 0:o.closest(".optimizer-doc-item");n&&n.classList.add("optimizer-main-doc")}selectAllEmptyDocs(i){this.element.querySelectorAll(".empty-doc-checkbox").forEach(t=>{t.checked=i})}async mergeGroup(i){var r,s,c;const e=this.element.querySelector(`[data-group="${i}"]`);if(!e)return;const t=e.querySelector(".optimizer-main-doc");if(!t){m.showMessage("请先设置主文档");return}const n=t.getAttribute("data-doc-id"),o=[];e.querySelectorAll(".optimizer-doc-item").forEach(l=>{const a=l.getAttribute("data-doc-id");a&&a!==n&&o.push(a)});try{const l=e.querySelector('[data-action="confirmMerge"]');l&&(l.textContent=this.i18n.merging,l.disabled=!0),await this.optimizer.mergeDocuments(n,o);const a=this.element.querySelector("#mergeContent");e.remove();const p=a==null?void 0:a.querySelector(".optimizer-summary p");if(p){const u=a.querySelectorAll(".optimizer-group").length;p.textContent=this.i18n.foundDuplicateDocs.replace("${count}",u.toString())}a.querySelectorAll(".optimizer-group").length===0&&(a.innerHTML=`
                    <div class="optimizer-empty">
                        <svg><use xlink:href="#iconInfo"></use></svg>
                        <p>${this.i18n.noDuplicateDocsFound}</p>
                    </div>
                `)}catch(l){console.error("Merge failed:",l),(c=(s=(r=window.siyuan)==null?void 0:r.ws)==null?void 0:s.showMessage)==null||c.call(s,this.i18n.mergeError.replace("${error}",l.message))}}async deleteSelectedEmptyDocs(){var n,o,r,s,c,l;const i=[];if(this.element.querySelectorAll(".empty-doc-checkbox:checked").forEach(a=>{const p=a.closest(".optimizer-doc-item"),u=p==null?void 0:p.getAttribute("data-doc-id");u&&i.push(u)}),i.length===0){(r=(o=(n=window.siyuan)==null?void 0:n.ws)==null?void 0:o.showMessage)==null||r.call(o,"请选择要删除的空文档");return}const t=document.createElement("div");t.textContent=this.i18n.confirmDelete,B({title:this.i18n.deleteEmptyDocs,content:t,confirm:async()=>{var a,p,u;try{const g=this.element.querySelector("#deleteSelected");g.textContent=this.i18n.deleting,g.disabled=!0,await this.optimizer.deleteEmptyDocuments(i),this.loadDeletePanel()}catch(g){console.error("Delete failed:",g),(u=(p=(a=window.siyuan)==null?void 0:a.ws)==null?void 0:p.showMessage)==null||u.call(p,this.i18n.deleteError.replace("${error}",g.message))}}});try{const a=this.element.querySelector("#deleteSelected");a.textContent=this.i18n.deleting,a.disabled=!0,await this.optimizer.deleteEmptyDocuments(i),this.loadDeletePanel()}catch(a){console.error("Delete failed:",a),(l=(c=(s=window.siyuan)==null?void 0:s.ws)==null?void 0:c.showMessage)==null||l.call(c,this.i18n.deleteError.replace("${error}",a.message))}}formatDate(i){const e=String(i||"").trim();if(/^\d{14}$/.test(e)){const n=e.slice(0,4),o=e.slice(4,6),r=e.slice(6,8),s=e.slice(8,10),c=e.slice(10,12),l=e.slice(12,14);return`${n}-${o}-${r} ${s}:${c}:${l}`}const t=Number(i);if(!Number.isNaN(t)){const n=t>1e12?t:t*1e3;return new Date(n).toLocaleString()}return String(i??"")}refresh(){const i=this.element.querySelector("#mergePanel");this.element.querySelector("#deletePanel"),!!i&&i.style.display!=="none"?this.loadMergePanel():this.loadDeletePanel()}close(){this.element.dispatchEvent(new CustomEvent("close-tab"))}applyMergeFilters(i){var t,n;if(!this.excludeUntitled)return i;const e=(((n=(t=window==null?void 0:window.siyuan)==null?void 0:t.languages)==null?void 0:n._kernel[16])??"Untitled").trim();return i.filter(o=>(o.title||"").trim()!==e)}applyDeleteFilters(i){return this.hideBacklinkedInEmpty?i.filter(e=>(e.refCount??0)===0):i}renderMergeContentFromCache(){const i=this.element.querySelector("#mergeContent");if(!i)return;const e=this.applyMergeFilters(this.duplicateGroupsCache);if(e.length===0){i.innerHTML=`
                <div class="optimizer-empty">
                    <svg><use xlink:href="#iconInfo"></use></svg>
                    <p>${this.i18n.noDuplicateDocsFound}</p>
                </div>
            `;return}i.innerHTML=this.getMergeContentHTML(e),this.bindMergeEvents()}renderDeleteContentFromCache(){const i=this.element.querySelector("#deleteContent");if(!i)return;const e=this.applyDeleteFilters(this.emptyDocsCache);if(e.length===0){i.innerHTML=`
                <div class="optimizer-empty">
                    <svg><use xlink:href="#iconInfo"></use></svg>
                    <p>${this.i18n.noEmptyDocsFound}</p>
                </div>
            `;return}i.innerHTML=this.getDeleteContentHTML(e),this.bindDeleteEvents()}togglePreviewForDoc(i,e){var r;const t=e.querySelector(".optimizer-preview");if(!t)return;if(t.style.display!=="none"){const s=this.previewEditors.get(i);try{(r=s==null?void 0:s.destroy)==null||r.call(s)}catch{}this.previewEditors.delete(i),t.style.display="none",t.innerHTML="";return}t.style.display="block";const o=window.Protyle;if(!o||!this.app){this.element.dispatchEvent(new CustomEvent("optimizer-open-doc",{detail:{id:i,position:"right"}}));return}try{const s=new o(this.app,t,{blockId:i,rootId:i,mode:"wysiwyg",action:[],render:{title:!1,background:!1,scroll:!0}});this.previewEditors.set(i,s)}catch(s){console.warn("Protyle preview failed, fallback to open tab",s),this.element.dispatchEvent(new CustomEvent("optimizer-open-doc",{detail:{id:i,position:"right"}}))}}destroyAllPreviews(){this.previewEditors.forEach(i=>{var e;try{(e=i==null?void 0:i.destroy)==null||e.call(i)}catch{}}),this.previewEditors.clear(),this.element.querySelectorAll(".optimizer-preview").forEach(i=>{i.style.display="none",i.innerHTML=""})}}const C="optimizer_tab";class N extends m.Plugin{constructor(){super(...arguments);h(this,"isMobile")}async onload(){console.log("loading siyuan-optimizer",this.i18n);const e=m.getFrontend();this.isMobile=e==="mobile"||e==="browser-mobile",this.addIcons(`
            <symbol id="iconOptimizer" viewBox="0 0 32 32">
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
                <path d="M22 11h-3V8c0-.553-.447-1-1-1h-4c-.553 0-1 .447-1 1v3h-3c-.553 0-1 .447-1 1v4c0 .553.447 1 1 1h3v3c0 .553.447 1 1 1h4c.553 0 1-.447 1-1v-3h3c.553 0 1-.447 1-1v-4c0-.553-.447-1-1-1z"/>
            </symbol>
        `);const t=this.addTopBar({icon:"iconOptimizer",title:this.i18n.addTopBarIcon,position:"right",callback:()=>{if(this.isMobile)this.addMenu();else{let o=t.getBoundingClientRect();o.width===0&&(o=document.querySelector("#barMore").getBoundingClientRect()),o.width===0&&(o=document.querySelector("#barPlugins").getBoundingClientRect()),this.addMenu(o)}}});this.addCommand({langKey:"mergeDuplicateDocs",hotkey:"⇧⌘M",callback:()=>{this.openOptimizerTab("merge")}}),this.addCommand({langKey:"deleteEmptyDocs",hotkey:"⇧⌘D",callback:()=>{this.openOptimizerTab("delete")}});const n=this.i18n;this.addTab({type:C,init(){this.element.innerHTML='<div class="optimizer-tab-container"></div>';const o=this.element.querySelector(".optimizer-tab-container"),r=this.data&&this.data.defaultTab||"merge";new H(o,n,r,this.app),o.addEventListener("optimizer-open-doc",s=>{const{id:c,position:l}=s.detail||{};c&&m.openTab({app:this.app,doc:{id:c},position:l||"right"})})}})}openOptimizerTab(e){const t=e==="delete"?this.i18n.deleteEmptyDocs:this.i18n.mergeDuplicateDocs,n=m.openTab({app:this.app,custom:{icon:"iconOptimizer",title:t,data:{defaultTab:e||"merge"},id:this.name+C}});try{const o=document.querySelector(".optimizer-tab-container");o&&o.addEventListener("close-tab",()=>{var r,s;if(n!=null&&n.remove)n.remove();else if((r=n==null?void 0:n.parent)!=null&&r.removeTab)n.parent.removeTab(n.id);else{const c=(s=n.headElement)==null?void 0:s.querySelector(".b3-list-item__close");c==null||c.click()}})}catch(o){console.warn("close-tab binding failed",o)}console.log("Opened optimizer tab:",n)}addMenu(e){const t=new m.Menu("optimizerMenu",()=>{console.log(this.i18n.byeMenu)});t.addItem({icon:"iconCombine",label:this.i18n.mergeDuplicateDocs,click:()=>{this.openOptimizerTab("merge")}}),t.addItem({icon:"iconTrashcan",label:this.i18n.deleteEmptyDocs,click:()=>{this.openOptimizerTab("delete")}}),this.isMobile?t.fullscreen():t.open({x:e.right,y:e.bottom,isLeft:!0})}}module.exports=N;
