var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(){return t=" ",document.createTextNode(t);var t}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let m;function g(t){m=t}function h(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const v=[],$=[],b=[],w=[],y=Promise.resolve();let x=!1;function _(t){b.push(t)}let k=!1;const C=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];g(e),I(e.$$)}for(v.length=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while(v.length);for(;w.length;)w.pop()();x=!1,k=!1,C.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const S=new Set;let T;function M(){T={r:0,c:[],p:T}}function N(){T.r||o(T.c),T=T.p}function A(t,e){t&&t.i&&(S.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),T.c.push(()=>{S.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function R(t){t&&t.c()}function W(t,n,i){const{fragment:l,on_mount:s,on_destroy:c,after_update:a}=t.$$;l&&l.m(n,i),_(()=>{const n=s.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),a.forEach(_)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(v.push(t),x||(x=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,r,i,l,s,a,u=[-1]){const d=m;g(e);const f=r.props||{},p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let h=!1;if(p.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),h&&B(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=(v=r.target,Array.from(v.childNodes));p.fragment&&p.fragment.l(t),t.forEach(c)}else p.fragment&&p.fragment.c();r.intro&&A(e.$$.fragment),W(e,r.target,r.anchor),E()}var v;g(d)}class Y{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function O(t,e,n){const o=t.slice();return o[1]=e[n],o}function q(e){let n,o,r,i,u,f,m,g,h,v;return{c(){n=a("div"),o=a("img"),i=d(),u=a("img"),m=d(),g=a("img"),v=d(),p(o,"class","poster_banner svelte-14l4m0m"),o.src!==(r=e[1].banner)&&p(o,"src",r),p(o,"alt",""),p(u,"class","poster_bannerBlur svelte-14l4m0m"),u.src!==(f=e[1].bannerBlur)&&p(u,"src",f),p(u,"alt",""),p(g,"class","poster_logo svelte-14l4m0m"),g.src!==(h=e[1].logo)&&p(g,"src",h),p(g,"alt",""),p(n,"class","poster svelte-14l4m0m")},m(t,e){s(t,n,e),l(n,o),l(n,i),l(n,u),l(n,m),l(n,g),l(n,v)},p:t,d(t){t&&c(n)}}}function j(e){let n,o=e[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=q(O(e,o,t));return{c(){n=a("div");for(let t=0;t<r.length;t+=1)r[t].c();p(n,"class","wrapper svelte-14l4m0m")},m(t,e){s(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(1&e){let i;for(o=t[0],i=0;i<o.length;i+=1){const l=O(t,o,i);r[i]?r[i].p(l,e):(r[i]=q(l),r[i].c(),r[i].m(n,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=o.length}},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function D(t){return[[{title:"AIWS",logo:"static/gif/AIWS transp from Encoder.gif",banner:"static/banners/AIWS banner wide.png",bannerBlur:"static/banners/AIWS banner wide blur.png"},{title:"SYN",logo:"static/gif/SYN transp from Encoder.gif",banner:"static/banners/SYN banner wide.png",bannerBlur:"static/banners/SYN banner wide blur.png"},{title:"RTI",logo:"static/gif/RTI Transp from Encoder.gif",banner:"static/banners/RTI banner wide.png",bannerBlur:"static/banners/RTI banner wide blur.png"}]]}class P extends Y{constructor(t){super(),H(this,t,D,j,i,{})}}function F(e){let n,o,r,i,u,f,m,g,h,v,$,b,w,y,x,_,k,C;return{c(){var t,l,s;n=a("div"),o=a("div"),r=a("div"),i=a("img"),f=d(),m=a("img"),h=d(),v=a("div"),$=a("img"),w=d(),(y=a("div")).innerHTML='<div style="width: 60%; margin-right: 20px;"><video style="width: 100%;" src="static/videos/1.mp4" type="video/mp4" muted="" autoplay="" loop=""></video></div> \n        <div>What is synesthesia?</div>',x=d(),(_=a("div")).innerHTML='<div style="width: 25%; overflow: hidden; position: relative; margin-right: 40px; margin-left: 250px;"><video style="width: 1200px; position: absolute; left: -430px;" src="static/videos/2.mp4" type="video/mp4" muted="" autoplay="" loop=""></video></div> \n        <div style="width: 75%;"><div style="padding: 20px 40px 20px 20px; text-align: right;">The causes of the phenomenon</div> \n            <div><img src="static/screen2/2.png" alt=""></div></div>',k=d(),(C=a("div")).innerHTML='<div style="width: 60%;"><div style="padding-bottom: 40px; padding-left: 20px;">How many synaesthetes are there in the world?</div> \n            <div><video style="width: 100%;" src="static/videos/5.mp4" type="video/mp4" muted="" autoplay="" loop=""></video></div></div> \n        \n        <div style="width: 40%;margin-top: -40px; padding-left: 40px;"><div style="padding-left: 40px;">How does it feel to be a synaesthete?</div> \n            <div><div><img src="static/screen2/4.png" alt=""></div></div></div>',p(i,"class","poster_left svelte-12h7oai"),i.src!==(u=e[1][e[0]].banner)&&p(i,"src",u),p(i,"alt",""),p(m,"class","poster_right svelte-12h7oai"),m.src!==(g=e[1][e[0]].banner)&&p(m,"src",g),p(m,"alt",""),p(r,"class","poster_background svelte-12h7oai"),p($,"class","poster_logo svelte-12h7oai"),$.src!==(b=e[1][e[0]].logo)&&p($,"src",b),p($,"alt",""),p(v,"class","poster_logo_wrapper svelte-12h7oai"),p(o,"class","second_screen_banner_wrapper svelte-12h7oai"),p(y,"class","row svelte-12h7oai"),p(_,"class","row svelte-12h7oai"),t="padding",l="0 20px",_.style.setProperty(t,l,s?"important":""),p(C,"class","row svelte-12h7oai")},m(t,e){s(t,n,e),l(n,o),l(o,r),l(r,i),l(r,f),l(r,m),l(o,h),l(o,v),l(v,$),l(n,w),l(n,y),l(n,x),l(n,_),l(n,k),l(n,C)},p(t,[e]){1&e&&i.src!==(u=t[1][t[0]].banner)&&p(i,"src",u),1&e&&m.src!==(g=t[1][t[0]].banner)&&p(m,"src",g),1&e&&$.src!==(b=t[1][t[0]].logo)&&p($,"src",b)},i:t,o:t,d(t){t&&c(n)}}}function U(t,e,n){let{poster:o}=e;return t.$set=(t=>{"poster"in t&&n(0,o=t.poster)}),[o,{aliceInWonderland:{title:"AIWS",logo:"static/gif/AIWS transp from Encoder.gif",banner:"static/banners/AIWS banner wide.png"},synthesia:{title:"SYN",logo:"static/gif/SYN transp from Encoder.gif",banner:"static/banners/SYN banner wide.png"},theRoomTiltIllusion:{title:"RTI",logo:"static/gif/RTI Transp from Encoder.gif",banner:"static/banners/RTI banner wide.png"}}]}class G extends Y{constructor(t){super(),H(this,t,U,F,i,{poster:0})}}function J(e){let n,o,i,d,m,g;return{c(){n=a("div"),o=u("svg"),i=u("rect"),d=u("rect"),m=u("rect"),p(i,"width","379"),p(i,"height","44"),p(i,"fill",e[1]),p(d,"y","132"),p(d,"width","379"),p(d,"height","44"),p(d,"fill",e[1]),p(m,"y","66"),p(m,"width","379"),p(m,"height","44"),p(m,"fill",e[1]),p(o,"width","90"),p(o,"height","30"),p(o,"viewBox","0 0 379 176"),p(o,"fill","none"),p(o,"xmlns","http://www.w3.org/2000/svg"),p(n,"class","menuButton svelte-skw4r0")},m(t,c,a){s(t,n,c),l(n,o),l(o,i),l(o,d),l(o,m),a&&g(),g=f(n,"click",function(){r(e[0])&&e[0].apply(this,arguments)})},p(t,[n]){e=t,2&n&&p(i,"fill",e[1]),2&n&&p(d,"fill",e[1]),2&n&&p(m,"fill",e[1])},i:t,o:t,d(t){t&&c(n),g()}}}function K(t,e,n){let{onClick:o}=e,{color:r}=e;return t.$set=(t=>{"onClick"in t&&n(0,o=t.onClick),"color"in t&&n(1,r=t.color)}),[o,r]}class Q extends Y{constructor(t){super(),H(this,t,K,J,i,{onClick:0,color:1})}}function V(t){let e,n,i,u,m,g,h,v,$,b,w,y,x;const _=new Q({props:{onClick:t[0],color:"white"}});return{c(){e=a("div"),n=a("div"),R(_.$$.fragment),i=d(),u=a("div"),(m=a("div")).textContent="HOME",g=d(),(h=a("div")).textContent="SYNETHESIA",v=d(),($=a("div")).textContent="THE ROOM TILT ILLUSION",b=d(),(w=a("div")).textContent="ALICE IN WONDERLAND",p(n,"class","menu_button svelte-1erzhvl"),p(m,"class","menu_list-item svelte-1erzhvl"),p(h,"class","menu_list-item svelte-1erzhvl"),p($,"class","menu_list-item svelte-1erzhvl"),p(w,"class","menu_list-item svelte-1erzhvl"),p(u,"class","menu_list svelte-1erzhvl"),p(e,"class","menu svelte-1erzhvl")},m(c,a,d){s(c,e,a),l(e,n),W(_,n,null),l(e,i),l(e,u),l(u,m),l(u,g),l(u,h),l(u,v),l(u,$),l(u,b),l(u,w),y=!0,d&&o(x),x=[f(m,"click",t[2]),f(h,"click",t[3]),f($,"click",t[4]),f(w,"click",t[5]),f(e,"click",function(){r(t[0])&&t[0].apply(this,arguments)})]},p(e,[n]){t=e;const o={};1&n&&(o.onClick=t[0]),_.$set(o)},i(t){y||(A(_.$$.fragment,t),y=!0)},o(t){z(_.$$.fragment,t),y=!1},d(t){t&&c(e),L(_),o(x)}}}function X(t,e,n){let{onCloseClick:o}=e,{onMenuElementClick:r}=e;return t.$set=(t=>{"onCloseClick"in t&&n(0,o=t.onCloseClick),"onMenuElementClick"in t&&n(1,r=t.onMenuElementClick)}),[o,r,()=>r("home"),()=>r("synthesia"),()=>r("theRoomTiltIllusion"),()=>r("aliceInWonderland")]}class Z extends Y{constructor(t){super(),H(this,t,X,V,i,{onCloseClick:0,onMenuElementClick:1})}}function tt(e){let n,o;const r=new Q({props:{onClick:e[2],color:"black"}});return{c(){n=a("div"),R(r.$$.fragment),p(n,"class","menu_button svelte-zyqsbr")},m(t,e){s(t,n,e),W(r,n,null),o=!0},p:t,i(t){o||(A(r.$$.fragment,t),o=!0)},o(t){z(r.$$.fragment,t),o=!1},d(t){t&&c(n),L(r)}}}function et(t){let e;const n=new Z({props:{onCloseClick:t[2],onMenuElementClick:t[0]}});return{c(){R(n.$$.fragment)},m(t,o){W(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.onMenuElementClick=t[0]),n.$set(o)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function nt(t){let e,n,o,r,i,u,f,m,g,h;const v=[et,tt],$=[];function b(t,e){return t[1]?0:1}return m=b(t),g=$[m]=v[m](t),{c(){e=a("div"),n=a("img"),r=d(),i=a("img"),f=d(),g.c(),p(n,"class","header_logo svelte-zyqsbr"),n.src!==(o="static/logo/black_tittel1.png")&&p(n,"src","static/logo/black_tittel1.png"),p(n,"alt",""),p(i,"class","header_logo svelte-zyqsbr"),i.src!==(u="static/logo/black_tittel2 destort.png")&&p(i,"src","static/logo/black_tittel2 destort.png"),p(i,"alt",""),p(e,"class","header svelte-zyqsbr")},m(t,o){s(t,e,o),l(e,n),l(e,r),l(e,i),l(e,f),$[m].m(e,null),h=!0},p(t,[n]){let o=m;(m=b(t))===o?$[m].p(t,n):(M(),z($[o],1,1,()=>{$[o]=null}),N(),(g=$[m])||(g=$[m]=v[m](t)).c(),A(g,1),g.m(e,null))},i(t){h||(A(g),h=!0)},o(t){z(g),h=!1},d(t){t&&c(e),$[m].d()}}}function ot(t,e,n){let{onMenuElementClick:o}=e,r=!1;return t.$set=(t=>{"onMenuElementClick"in t&&n(0,o=t.onMenuElementClick)}),[o,r,()=>n(1,r=!r)]}class rt extends Y{constructor(t){super(),H(this,t,ot,nt,i,{onMenuElementClick:0})}}function it(t){let e;const n=new G({props:{poster:t[0]}});return{c(){R(n.$$.fragment)},m(t,o){W(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.poster=t[0]),n.$set(o)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function lt(e){let n;const o=new P({});return{c(){R(o.$$.fragment)},m(t,e){W(o,t,e),n=!0},p:t,i(t){n||(A(o.$$.fragment,t),n=!0)},o(t){z(o.$$.fragment,t),n=!1},d(t){L(o,t)}}}function st(t){let e,n,o,r,i,l;const u=new rt({props:{onMenuElementClick:t[1]}}),f=[lt,it],m=[];function g(t,e){return null==t[0]||"home"===t[0]?0:1}return r=g(t),i=m[r]=f[r](t),{c(){e=a("header"),R(u.$$.fragment),n=d(),o=a("main"),i.c(),p(e,"class","svelte-29vcro"),p(o,"class","svelte-29vcro")},m(t,i){s(t,e,i),W(u,e,null),s(t,n,i),s(t,o,i),m[r].m(o,null),l=!0},p(t,[e]){let n=r;(r=g(t))===n?m[r].p(t,e):(M(),z(m[n],1,1,()=>{m[n]=null}),N(),(i=m[r])||(i=m[r]=f[r](t)).c(),A(i,1),i.m(o,null))},i(t){l||(A(u.$$.fragment,t),A(i),l=!0)},o(t){z(u.$$.fragment,t),z(i),l=!1},d(t){t&&c(e),L(u),t&&c(n),t&&c(o),m[r].d()}}}function ct(t,e,n){h(()=>{});let o=null;return[o,t=>n(0,o=t)]}return new class extends Y{constructor(t){super(),H(this,t,ct,st,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
