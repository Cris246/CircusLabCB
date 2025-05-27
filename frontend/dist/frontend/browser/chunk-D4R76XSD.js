import{f as it}from"./chunk-TMMUDDY5.js";import{$ as oe,Ha as nt,Ma as y,P as vt,Pa as At,Q as re,Rb as X,Sa as fe,V as _,Z as z,_ as se,_a as ce,ab as ue,ea as L,hb as at,ja as le,kb as kt,lb as Ct,qa as xt,xb as R}from"./chunk-QX2Z6O4Y.js";function Nn(t,n,e){return(n=Mn(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function de(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?de(Object(e),!0).forEach(function(a){Nn(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):de(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Tn(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Mn(t){var n=Tn(t,"string");return typeof n=="symbol"?n:n+""}var me=()=>{},Vt={},je={},We=null,He={mark:me,measure:me};try{typeof window<"u"&&(Vt=window),typeof document<"u"&&(je=document),typeof MutationObserver<"u"&&(We=MutationObserver),typeof performance<"u"&&(He=performance)}catch{}var{userAgent:he=""}=Vt.navigator||{},N=Vt,p=je,pe=We,rt=He,ji=!!N.document,E=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Ye=~he.indexOf("MSIE")||~he.indexOf("Trident/"),Dn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,_n=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ue={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},zn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$e=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],g="classic",ut="duotone",Ln="sharp",Rn="sharp-duotone",Be=[g,ut,Ln,Rn],jn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Wn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Hn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Yn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Un=["fak","fa-kit","fakd","fa-kit-duotone"],ge={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$n=["kit"],Bn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Vn=["fak","fakd"],Gn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ye={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Kn=["fak","fa-kit","fakd","fa-kit-duotone"],qn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Jn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Zn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ft=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Xn,...Zn],ta=["solid","regular","light","thin","duotone","brands"],Ve=[1,2,3,4,5,6,7,8,9,10],ea=Ve.concat([11,12,13,14,15,16,17,18,19,20]),na=[...Object.keys(Jn),...ta,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY].concat(Ve.map(t=>"".concat(t,"x"))).concat(ea.map(t=>"w-".concat(t))),aa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},S="___FONT_AWESOME___",Nt=16,Ge="fa",Xe="svg-inline--fa",W="data-fa-i2svg",Tt="data-fa-pseudo-element",ia="data-fa-pseudo-element-pending",Gt="data-prefix",Xt="data-icon",be="fontawesome-i2svg",ra="async",sa=["HTML","HEAD","STYLE","SCRIPT"],Ke=(()=>{try{return!0}catch{return!1}})();function tt(t){return new Proxy(t,{get(n,e){return e in n?n[e]:n[g]}})}var qe=o({},Ue);qe[g]=o(o(o(o({},{"fa-duotone":"duotone"}),Ue[g]),ge.kit),ge["kit-duotone"]);var oa=tt(qe),Mt=o({},Yn);Mt[g]=o(o(o(o({},{duotone:"fad"}),Mt[g]),ye.kit),ye["kit-duotone"]);var ve=tt(Mt),Dt=o({},Pt);Dt[g]=o(o({},Dt[g]),Gn.kit);var Kt=tt(Dt),_t=o({},Qn);_t[g]=o(o({},_t[g]),Bn.kit);var Wi=tt(_t),la=Dn,Qe="fa-layers-text",fa=_n,ca=o({},jn),Hi=tt(ca),ua=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt=zn,da=[...$n,...na],q=N.FontAwesomeConfig||{};function ma(t){var n=p.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function ha(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[e,a]=n,i=ha(ma(e));i!=null&&(q[a]=i)});var Je={styleDefault:"solid",familyDefault:g,cssPrefix:Ge,replacementClass:Xe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q.familyPrefix&&(q.cssPrefix=q.familyPrefix);var V=o(o({},Je),q);V.autoReplaceSvg||(V.observeMutations=!1);var f={};Object.keys(Je).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(n){V[t]=n,Q.forEach(e=>e(f))},get:function(){return V[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,Q.forEach(n=>n(f))},get:function(){return V.cssPrefix}});N.FontAwesomeConfig=f;var Q=[];function pa(t){return Q.push(t),()=>{Q.splice(Q.indexOf(t),1)}}var F=Nt,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ga(t){if(!t||!E)return;let n=p.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;let e=p.head.childNodes,a=null;for(let i=e.length-1;i>-1;i--){let r=e[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return p.head.insertBefore(n,a),t}var ya="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let t=12,n="";for(;t-- >0;)n+=ya[Math.random()*62|0];return n}function G(t){let n=[];for(let e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function qt(t){return t.classList?G(t.classList):(t.getAttribute("class")||"").split(" ").filter(n=>n)}function Ze(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ba(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,'="').concat(Ze(t[e]),'" '),"").trim()}function dt(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,": ").concat(t[e].trim(),";"),"")}function Qt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function va(t){let{transform:n,containerWidth:e,iconWidth:a}=t,i={transform:"translate(".concat(e/2," 256)")},r="translate(".concat(n.x*32,", ").concat(n.y*32,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(r," ").concat(s," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:u,path:c}}function xa(t){let{transform:n,width:e=Nt,height:a=Nt,startCentered:i=!1}=t,r="";return i&&Ye?r+="translate(".concat(n.x/F-e/2,"em, ").concat(n.y/F-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(n.x/F,"em), calc(-50% + ").concat(n.y/F,"em)) "):r+="translate(".concat(n.x/F,"em, ").concat(n.y/F,"em) "),r+="scale(".concat(n.size/F*(n.flipX?-1:1),", ").concat(n.size/F*(n.flipY?-1:1),") "),r+="rotate(".concat(n.rotate,"deg) "),r}var Aa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function tn(){let t=Ge,n=Xe,e=f.cssPrefix,a=f.replacementClass,i=Aa;if(e!==t||a!==n){let r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");i=i.replace(r,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(l,".".concat(a))}return i}var xe=!1;function It(){f.autoAddCss&&!xe&&(ga(tn()),xe=!0)}var ka={mixout(){return{dom:{css:tn,insertCss:It}}},hooks(){return{beforeDOMElementCreation(){It()},beforeI2svg(){It()}}}},O=N||{};O[S]||(O[S]={});O[S].styles||(O[S].styles={});O[S].hooks||(O[S].hooks={});O[S].shims||(O[S].shims=[]);var w=O[S],en=[],nn=function(){p.removeEventListener("DOMContentLoaded",nn),ft=1,en.map(t=>t())},ft=!1;E&&(ft=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),ft||p.addEventListener("DOMContentLoaded",nn));function Ca(t){E&&(ft?setTimeout(t,0):en.push(t))}function et(t){let{tag:n,attributes:e={},children:a=[]}=t;return typeof t=="string"?Ze(t):"<".concat(n," ").concat(ba(e),">").concat(a.map(et).join(""),"</").concat(n,">")}function Ae(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var wa=function(n,e){return function(a,i,r,s){return n.call(e,a,i,r,s)}},St=function(n,e,a,i){var r=Object.keys(n),s=r.length,l=i!==void 0?wa(e,i):e,u,c,d;for(a===void 0?(u=1,d=n[r[0]]):(u=0,d=a);u<s;u++)c=r[u],d=l(d,n[c],c,n);return d};function Ia(t){let n=[],e=0,a=t.length;for(;e<a;){let i=t.charCodeAt(e++);if(i>=55296&&i<=56319&&e<a){let r=t.charCodeAt(e++);(r&64512)==56320?n.push(((i&1023)<<10)+(r&1023)+65536):(n.push(i),e--)}else n.push(i)}return n}function zt(t){let n=Ia(t);return n.length===1?n[0].toString(16):null}function Sa(t,n){let e=t.length,a=t.charCodeAt(n),i;return a>=55296&&a<=56319&&e>n+1&&(i=t.charCodeAt(n+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function ke(t){return Object.keys(t).reduce((n,e)=>{let a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n},{})}function Lt(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=e,i=ke(n);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(t,ke(n)):w.styles[t]=o(o({},w.styles[t]||{}),i),t==="fas"&&Lt("fa",n)}var{styles:Z,shims:Oa}=w,an=Object.keys(Kt),Ea=an.reduce((t,n)=>(t[n]=Object.keys(Kt[n]),t),{}),Jt=null,rn={},sn={},on={},ln={},fn={};function Pa(t){return~da.indexOf(t)}function Fa(t,n){let e=n.split("-"),a=e[0],i=e.slice(1).join("-");return a===t&&i!==""&&!Pa(i)?i:null}var cn=()=>{let t=a=>St(Z,(i,r,s)=>(i[s]=St(r,a,{}),i),{});rn=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),sn=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),fn=t((a,i,r)=>{let s=i[2];return a[r]=r,s.forEach(l=>{a[l]=r}),a});let n="far"in Z||f.autoFetchSvg,e=St(Oa,(a,i)=>{let r=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof r=="string"&&(a.names[r]={prefix:s,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});on=e.names,ln=e.unicodes,Jt=mt(f.styleDefault,{family:f.familyDefault})};pa(t=>{Jt=mt(t.styleDefault,{family:f.familyDefault})});cn();function Zt(t,n){return(rn[t]||{})[n]}function Na(t,n){return(sn[t]||{})[n]}function j(t,n){return(fn[t]||{})[n]}function un(t){return on[t]||{prefix:null,iconName:null}}function Ta(t){let n=ln[t],e=Zt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function T(){return Jt}var dn=()=>({prefix:null,iconName:null,rest:[]});function Ma(t){let n=g,e=an.reduce((a,i)=>(a[i]="".concat(f.cssPrefix,"-").concat(i),a),{});return Be.forEach(a=>{(t.includes(e[a])||t.some(i=>Ea[a].includes(i)))&&(n=a)}),n}function mt(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=g}=n,a=oa[e][t];if(e===ut&&!t)return"fad";let i=ve[e][t]||ve[e][a],r=t in w.styles?t:null;return i||r||null}function Da(t){let n=[],e=null;return t.forEach(a=>{let i=Fa(f.cssPrefix,a);i?e=i:a&&n.push(a)}),{iconName:e,rest:n}}function Ce(t){return t.sort().filter((n,e,a)=>a.indexOf(n)===e)}function ht(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=n,a=null,i=Ft.concat(Kn),r=Ce(t.filter(h=>i.includes(h))),s=Ce(t.filter(h=>!Ft.includes(h))),l=r.filter(h=>(a=h,!$e.includes(h))),[u=null]=l,c=Ma(r),d=o(o({},Da(s)),{},{prefix:mt(u,{family:c})});return o(o(o({},d),Ra({values:t,family:c,styles:Z,config:f,canonical:d,givenPrefix:a})),_a(e,a,d))}function _a(t,n,e){let{prefix:a,iconName:i}=e;if(t||!a||!i)return{prefix:a,iconName:i};let r=n==="fa"?un(i):{},s=j(a,i);return i=r.iconName||s||i,a=r.prefix||a,a==="far"&&!Z.far&&Z.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var za=Be.filter(t=>t!==g||t!==ut),La=Object.keys(Pt).filter(t=>t!==g).map(t=>Object.keys(Pt[t])).flat();function Ra(t){let{values:n,family:e,canonical:a,givenPrefix:i="",styles:r={},config:s={}}=t,l=e===ut,u=n.includes("fa-duotone")||n.includes("fad"),c=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||c||d)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&za.includes(e)&&(Object.keys(r).find(m=>La.includes(m))||s.autoFetchSvg)){let m=Hn.get(e).defaultShortPrefixId;a.prefix=m,a.iconName=j(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=T()||"fas"),a}var Rt=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];let i=e.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=o(o({},this.definitions[r]||{}),i[r]),Lt(r,i[r]);let s=Kt[g][r];s&&Lt(s,i[r]),cn()})}reset(){this.definitions={}}_pullDefinitions(n,e){let a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(i=>{let{prefix:r,iconName:s,icon:l}=a[i],u=l[2];n[r]||(n[r]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(n[r][c]=l)}),n[r][s]=l}),n}},we=[],$={},B={},ja=Object.keys(B);function Wa(t,n){let{mixoutsTo:e}=n;return we=t,$={},Object.keys(B).forEach(a=>{ja.indexOf(a)===-1&&delete B[a]}),we.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(e[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(s=>{e[r]||(e[r]={}),e[r][s]=i[r][s]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(s=>{$[s]||($[s]=[]),$[s].push(r[s])})}a.provides&&a.provides(B)}),e}function jt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),i=2;i<e;i++)a[i-2]=arguments[i];return($[t]||[]).forEach(s=>{n=s.apply(null,[n,...a])}),n}function H(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];($[t]||[]).forEach(r=>{r.apply(null,e)})}function M(){let t=arguments[0],n=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,n):void 0}function Wt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:n}=t,e=t.prefix||T();if(n)return n=j(e,n)||n,Ae(mn.definitions,e,n)||Ae(w.styles,e,n)}var mn=new Rt,Ha=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,H("noAuto")},Ya={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(H("beforeI2svg",t),M("pseudoElements2svg",t),M("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Ca(()=>{$a({autoReplaceSvgRoot:n}),H("watch",t)})}},Ua={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=mt(t[0]);return{prefix:e,iconName:j(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(la))){let n=ht(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||T(),iconName:j(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){let n=T();return{prefix:n,iconName:j(n,t)||t}}}},x={noAuto:Ha,config:f,dom:Ya,parse:Ua,library:mn,findIconDefinition:Wt,toHtml:et},$a=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=p}=t;(Object.keys(w.styles).length>0||f.autoFetchSvg)&&E&&f.autoReplaceSvg&&x.dom.i2svg({node:n})};function pt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>et(e))}}),Object.defineProperty(t,"node",{get:function(){if(!E)return;let e=p.createElement("div");return e.innerHTML=t.html,e.children}}),t}function Ba(t){let{children:n,main:e,mask:a,attributes:i,styles:r,transform:s}=t;if(Qt(s)&&e.found&&!a.found){let{width:l,height:u}=e,c={x:l/u/2,y:.5};i.style=dt(o(o({},r),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:n}]}function Va(t){let{prefix:n,iconName:e,children:a,attributes:i,symbol:r}=t,s=r===!0?"".concat(n,"-").concat(f.cssPrefix,"-").concat(e):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},i),{},{id:s}),children:a}]}]}function te(t){let{icons:{main:n,mask:e},prefix:a,iconName:i,transform:r,symbol:s,title:l,maskId:u,titleId:c,extra:d,watchable:h=!1}=t,{width:m,height:b}=e.found?e:n,P=Vn.includes(a),D=[f.replacementClass,i?"".concat(f.cssPrefix,"-").concat(i):""].filter(U=>d.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(d.classes).join(" "),A={children:[],attributes:o(o({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:D,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})},I=P&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};h&&(A.attributes[W]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||J())},children:[l]}),delete A.attributes.title);let v=o(o({},A),{},{prefix:a,iconName:i,main:n,mask:e,maskId:u,transform:r,symbol:s,styles:o(o({},I),d.styles)}),{children:k,attributes:Y}=e.found&&n.found?M("generateAbstractMask",v)||{children:[],attributes:{}}:M("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=k,v.attributes=Y,s?Va(v):Ba(v)}function Ie(t){let{content:n,width:e,height:a,transform:i,title:r,extra:s,watchable:l=!1}=t,u=o(o(o({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});l&&(u[W]="");let c=o({},s.styles);Qt(i)&&(c.transform=xa({transform:i,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);let d=dt(c);d.length>0&&(u.style=d);let h=[];return h.push({tag:"span",attributes:u,children:[n]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function Ga(t){let{content:n,title:e,extra:a}=t,i=o(o(o({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),r=dt(a.styles);r.length>0&&(i.style=r);let s=[];return s.push({tag:"span",attributes:i,children:[n]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}var{styles:Ot}=w;function Ht(t){let n=t[0],e=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:e,icon:i}}var Xa={found:!1,width:512,height:512};function Ka(t,n){!Ke&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Yt(t,n){let e=n;return n==="fa"&&f.styleDefault!==null&&(n=T()),new Promise((a,i)=>{if(e==="fa"){let r=un(t)||{};t=r.iconName||t,n=r.prefix||n}if(t&&n&&Ot[n]&&Ot[n][t]){let r=Ot[n][t];return a(Ht(r))}Ka(t,n),a(o(o({},Xa),{},{icon:f.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var Se=()=>{},Ut=f.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:Se,measure:Se},K='FA "6.7.2"',qa=t=>(Ut.mark("".concat(K," ").concat(t," begins")),()=>hn(t)),hn=t=>{Ut.mark("".concat(K," ").concat(t," ends")),Ut.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))},ee={begin:qa,end:hn},ot=()=>{};function Oe(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function Qa(t){let n=t.getAttribute?t.getAttribute(Gt):null,e=t.getAttribute?t.getAttribute(Xt):null;return n&&e}function Ja(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function Za(){return f.autoReplaceSvg===!0?lt.replace:lt[f.autoReplaceSvg]||lt.replace}function ti(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function ei(t){return p.createElement(t)}function pn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=t.tag==="svg"?ti:ei}=n;if(typeof t=="string")return p.createTextNode(t);let a=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(pn(r,{ceFn:e}))}),a}function ni(t){let n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var lt={replace:function(t){let n=t[0];if(n.parentNode)if(t[1].forEach(e=>{n.parentNode.insertBefore(pn(e),n)}),n.getAttribute(W)===null&&f.keepOriginalSource){let e=p.createComment(ni(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){let n=t[0],e=t[1];if(~qt(n).indexOf(f.replacementClass))return lt.replace(t);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let r=e[0].attributes.class.split(" ").reduce((s,l)=>(l===f.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});e[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}let i=e.map(r=>et(r)).join(`
`);n.setAttribute(W,""),n.innerHTML=i}};function Ee(t){t()}function gn(t,n){let e=typeof n=="function"?n:ot;if(t.length===0)e();else{let a=Ee;f.mutateApproach===ra&&(a=N.requestAnimationFrame||Ee),a(()=>{let i=Za(),r=ee.begin("mutate");t.map(i),r(),e()})}}var ne=!1;function yn(){ne=!0}function $t(){ne=!1}var ct=null;function Pe(t){if(!pe||!f.observeMutations)return;let{treeCallback:n=ot,nodeCallback:e=ot,pseudoElementsCallback:a=ot,observeMutationsRoot:i=p}=t;ct=new pe(r=>{if(ne)return;let s=T();G(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Oe(l.addedNodes[0])&&(f.searchPseudoElements&&a(l.target),n(l.target)),l.type==="attributes"&&l.target.parentNode&&f.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Oe(l.target)&&~ua.indexOf(l.attributeName))if(l.attributeName==="class"&&Qa(l.target)){let{prefix:u,iconName:c}=ht(qt(l.target));l.target.setAttribute(Gt,u||s),c&&l.target.setAttribute(Xt,c)}else Ja(l.target)&&e(l.target)})}),E&&ct.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ai(){ct&&ct.disconnect()}function ii(t){let n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce((a,i)=>{let r=i.split(":"),s=r[0],l=r.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),e}function ri(t){let n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=ht(qt(t));return i.prefix||(i.prefix=T()),n&&e&&(i.prefix=n,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=Na(i.prefix,t.innerText)||Zt(i.prefix,zt(t.innerText))),!i.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function si(t){let n=G(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(e?n["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||J()):(n["aria-hidden"]="true",n.focusable="false")),n}function oi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fe(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:a,rest:i}=ri(t),r=si(t),s=jt("parseNodeAttributes",{},t),l=n.styleParser?ii(t):[];return o({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},s)}var{styles:li}=w;function bn(t){let n=f.autoReplaceSvg==="nest"?Fe(t,{styleParser:!1}):Fe(t);return~n.extra.classes.indexOf(Qe)?M("generateLayersText",t,n):M("generateSvgReplacementMutation",t,n)}function fi(){return[...Un,...Ft]}function Ne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();let e=p.documentElement.classList,a=d=>e.add("".concat(be,"-").concat(d)),i=d=>e.remove("".concat(be,"-").concat(d)),r=f.autoFetchSvg?fi():$e.concat(Object.keys(li));r.includes("fa")||r.push("fa");let s=[".".concat(Qe,":not([").concat(W,"])")].concat(r.map(d=>".".concat(d,":not([").concat(W,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=G(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let u=ee.begin("onTree"),c=l.reduce((d,h)=>{try{let m=bn(h);m&&d.push(m)}catch(m){Ke||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,h)=>{Promise.all(c).then(m=>{gn(m,()=>{a("active"),a("complete"),i("pending"),typeof n=="function"&&n(),u(),d()})}).catch(m=>{u(),h(m)})})}function ci(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bn(t).then(e=>{e&&gn([e],n)})}function ui(t){return function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Wt(n||{}),{mask:i}=e;return i&&(i=(i||{}).icon?i:Wt(i||{})),t(a,o(o({},e),{},{mask:i}))}}var di=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=C,symbol:a=!1,mask:i=null,maskId:r=null,title:s=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=n;if(!t)return;let{prefix:h,iconName:m,icon:b}=t;return pt(o({type:"icon"},t),()=>(H("beforeDOMElementCreation",{iconDefinition:t,params:n}),f.autoA11y&&(s?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(l||J()):(c["aria-hidden"]="true",c.focusable="false")),te({icons:{main:Ht(b),mask:i?Ht(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:o(o({},C),e),symbol:a,title:s,maskId:r,titleId:l,extra:{attributes:c,styles:d,classes:u}})))},mi={mixout(){return{icon:ui(di)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ne,t.nodeCallback=ci,t}}},provides(t){t.i2svg=function(n){let{node:e=p,callback:a=()=>{}}=n;return Ne(e,a)},t.generateSvgReplacementMutation=function(n,e){let{iconName:a,title:i,titleId:r,prefix:s,transform:l,symbol:u,mask:c,maskId:d,extra:h}=e;return new Promise((m,b)=>{Promise.all([Yt(a,s),c.iconName?Yt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[D,A]=P;m([n,te({icons:{main:D,mask:A},prefix:s,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:r,extra:h,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){let{children:e,attributes:a,main:i,transform:r,styles:s}=n,l=dt(s);l.length>0&&(a.style=l);let u;return Qt(r)&&(u=M("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:a}}}},hi={mixout(){return{layer(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=n;return pt({type:"layer"},()=>{H("beforeDOMElementCreation",{assembler:t,params:n});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}}}},pi={mixout(){return{counter(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:a=[],attributes:i={},styles:r={}}=n;return pt({type:"counter",content:t},()=>(H("beforeDOMElementCreation",{content:t,params:n}),Ga({content:t.toString(),title:e,extra:{attributes:i,styles:r,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},gi={mixout(){return{text(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=C,title:a=null,classes:i=[],attributes:r={},styles:s={}}=n;return pt({type:"text",content:t},()=>(H("beforeDOMElementCreation",{content:t,params:n}),Ie({content:t,transform:o(o({},C),e),title:a,extra:{attributes:r,styles:s,classes:["".concat(f.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(n,e){let{title:a,transform:i,extra:r}=e,s=null,l=null;if(Ye){let u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return f.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([n,Ie({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:r,watchable:!0})])}}},yi=new RegExp('"',"ug"),Te=[1105920,1112319],Me=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),Wn),aa),qn),Bt=Object.keys(Me).reduce((t,n)=>(t[n.toLowerCase()]=Me[n],t),{}),bi=Object.keys(Bt).reduce((t,n)=>{let e=Bt[n];return t[n]=e[900]||[...Object.entries(e)][0][1],t},{});function vi(t){let n=t.replace(yi,""),e=Sa(n,0),a=e>=Te[0]&&e<=Te[1],i=n.length===2?n[0]===n[1]:!1;return{value:zt(i?n[0]:n),isSecondary:a||i}}function xi(t,n){let e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),i=isNaN(a)?"normal":a;return(Bt[e]||{})[i]||bi[e]}function De(t,n){let e="".concat(ia).concat(n.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(e)!==null)return a();let s=G(t.children).filter(m=>m.getAttribute(Tt)===n)[0],l=N.getComputedStyle(t,n),u=l.getPropertyValue("font-family"),c=u.match(fa),d=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&h!=="none"&&h!==""){let m=l.getPropertyValue("content"),b=xi(u,d),{value:P,isSecondary:D}=vi(m),A=c[0].startsWith("FontAwesome"),I=Zt(b,P),v=I;if(A){let k=Ta(P);k.iconName&&k.prefix&&(I=k.iconName,b=k.prefix)}if(I&&!D&&(!s||s.getAttribute(Gt)!==b||s.getAttribute(Xt)!==v)){t.setAttribute(e,v),s&&t.removeChild(s);let k=oi(),{extra:Y}=k;Y.attributes[Tt]=n,Yt(I,b).then(U=>{let Pn=te(o(o({},k),{},{icons:{main:U,mask:dn()},prefix:b,iconName:v,extra:Y,watchable:!0})),bt=p.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=Pn.map(Fn=>et(Fn)).join(`
`),t.removeAttribute(e),a()}).catch(i)}else a()}else a()})}function Ai(t){return Promise.all([De(t,"::before"),De(t,"::after")])}function ki(t){return t.parentNode!==document.head&&!~sa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _e(t){if(E)return new Promise((n,e)=>{let a=G(t.querySelectorAll("*")).filter(ki).map(Ai),i=ee.begin("searchPseudoElements");yn(),Promise.all(a).then(()=>{i(),$t(),n()}).catch(()=>{i(),$t(),e()})})}var Ci={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=_e,t}}},provides(t){t.pseudoElements2svg=function(n){let{node:e=p}=n;f.searchPseudoElements&&_e(e)}}},ze=!1,wi={mixout(){return{dom:{unwatch(){yn(),ze=!0}}}},hooks(){return{bootstrap(){Pe(jt("mutationObserverCallbacks",{}))},noAuto(){ai()},watch(t){let{observeMutationsRoot:n}=t;ze?$t():Pe(jt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Le=t=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,a)=>{let i=a.toLowerCase().split("-"),r=i[0],s=i.slice(1).join("-");if(r&&s==="h")return e.flipX=!0,e;if(r&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(r){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},n)},Ii={mixout(){return{parse:{transform:t=>Le(t)}}},hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-transform");return e&&(t.transform=Le(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(n){let{main:e,transform:a,containerWidth:i,iconWidth:r}=n,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(r/2*-1," -256)")},m={outer:s,inner:d,path:h};return{tag:"g",attributes:o({},m.outer),children:[{tag:"g",attributes:o({},m.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),m.path)}]}]}}}},Et={x:0,y:0,width:"100%",height:"100%"};function Re(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Si(t){return t.tag==="g"?t.children:[t]}var Oi={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-mask"),a=e?ht(e.split(" ").map(i=>i.trim())):dn();return a.prefix||(a.prefix=T()),t.mask=a,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(n){let{children:e,attributes:a,main:i,mask:r,maskId:s,transform:l}=n,{width:u,icon:c}=i,{width:d,icon:h}=r,m=va({transform:l,containerWidth:d,iconWidth:u}),b={tag:"rect",attributes:o(o({},Et),{},{fill:"white"})},P=c.children?{children:c.children.map(Re)}:{},D={tag:"g",attributes:o({},m.inner),children:[Re(o({tag:c.tag,attributes:o(o({},c.attributes),m.path)},P))]},A={tag:"g",attributes:o({},m.outer),children:[D]},I="mask-".concat(s||J()),v="clip-".concat(s||J()),k={tag:"mask",attributes:o(o({},Et),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,A]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Si(h)},k]};return e.push(Y,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(I,")")},Et)}),{children:e,attributes:a}}}},Ei={provides(t){let n=!1;N.matchMedia&&(n=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let e=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=o(o({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},r),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:o(o({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:o(o({},r),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:o(o({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Pi={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-symbol"),a=e===null?!1:e===""?!0:e;return t.symbol=a,t}}}},Fi=[ka,mi,hi,pi,gi,Ci,wi,Ii,Oi,Ei,Pi];Wa(Fi,{mixoutsTo:x});var Yi=x.noAuto,vn=x.config,Ui=x.library,xn=x.dom,ae=x.parse,$i=x.findIconDefinition,Bi=x.toHtml,An=x.icon,Vi=x.layer,kn=x.text,Cn=x.counter;var In=["*"],Ni=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Ti=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Sn=t=>{let n={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(n).map(e=>n[e]?e:null).filter(e=>e)},ie=new WeakSet,wn="fa-auto-css";function gt(t,n){if(!n.autoAddCss||ie.has(t))return;if(t.getElementById(wn)!=null){n.autoAddCss=!1,ie.add(t);return}let e=t.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",wn),e.innerHTML=xn.css();let a=t.head.childNodes,i=null;for(let r=a.length-1;r>-1;r--){let s=a[r],l=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(i=s)}t.head.insertBefore(e,i),n.autoAddCss=!1,ie.add(t)}var Mi=t=>t.prefix!==void 0&&t.iconName!==void 0,Di=(t,n)=>Mi(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:n,iconName:t},yt=(()=>{class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){vn.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=vt({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),_i=(()=>{class t{constructor(){this.definitions={}}addIcons(...e){for(let a of e){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let i of a.icon[2])typeof i=="string"&&(this.definitions[a.prefix][i]=a)}}addIconPacks(...e){for(let a of e){let i=Object.keys(a).map(r=>a[r]);this.addIcons(...i)}}getIconDefinition(e,a){return e in this.definitions&&a in this.definitions[e]?this.definitions[e][a]:null}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=vt({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),zi=(()=>{class t{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275dir=oe({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[L]})}}return t})(),Li=(()=>{class t{constructor(e,a){this.renderer=e,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||t)(y(At),y(xt))}}static{this.\u0275cmp=z({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[L,R],ngContentSelectors:In,decls:1,vars:0,template:function(a,i){a&1&&(kt(),Ct(0))},encapsulation:2})}}return t})(),Ri=(()=>{class t{constructor(e,a,i,r,s){this.sanitizer=e,this.config=a,this.iconLibrary=i,this.stackItem=r,this.document=_(X),s!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){Ti();return}if(e){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let i=this.buildParams();gt(this.document,this.config);let r=An(a,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let a=Di(e,this.config.defaultPrefix);if("icon"in a)return a;let i=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return i??(Ni(a),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?ae.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:Sn(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(a){return new(a||t)(y(it),y(yt),y(_i),y(zi,8),y(Li,8))}}static{this.\u0275cmp=z({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,i){a&2&&(at("innerHTML",i.renderedIconHTML,nt),ce("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[L,R],decls:0,vars:0,template:function(a,i){},encapsulation:2})}}return t})(),sr=(()=>{class t extends Ri{findIconDefinition(e){let a=super.findIconDefinition(e);if(a!=null&&!Array.isArray(a.icon[4]))throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${a.iconName}']"></fa-duotone-icon> or use: <fa-icon icon="${a.iconName}"></fa-icon> instead.`);return a}buildParams(){let e=super.buildParams();return(this.swapOpacity===!0||this.swapOpacity==="true")&&(Array.isArray(e.classes)?e.classes.push("fa-swap-opacity"):typeof e.classes=="string"?e.classes=[e.classes,"fa-swap-opacity"]:e.classes=["fa-swap-opacity"]),e.styles==null&&(e.styles={}),this.primaryOpacity!=null&&(e.styles["--fa-primary-opacity"]=this.primaryOpacity.toString()),this.secondaryOpacity!=null&&(e.styles["--fa-secondary-opacity"]=this.secondaryOpacity.toString()),this.primaryColor!=null&&(e.styles["--fa-primary-color"]=this.primaryColor),this.secondaryColor!=null&&(e.styles["--fa-secondary-color"]=this.secondaryColor),e}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=le(t)))(i||t)}})()}static{this.\u0275cmp=z({type:t,selectors:[["fa-duotone-icon"]],inputs:{swapOpacity:"swapOpacity",primaryOpacity:"primaryOpacity",secondaryOpacity:"secondaryOpacity",primaryColor:"primaryColor",secondaryColor:"secondaryColor"},standalone:!0,features:[fe,R],decls:0,vars:0,template:function(a,i){},encapsulation:2})}}return t})(),On=(t,n,e)=>{if(!t)throw new Error(`${e} should be used as child of ${n} only.`)},En=(()=>{class t{constructor(e,a,i){this.renderer=e,this.elementRef=a,this.config=i,this.document=_(X)}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-layers"),gt(this.document,this.config),this.fixedWidth=typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||t)(y(At),y(xt),y(yt))}}static{this.\u0275cmp=z({type:t,selectors:[["fa-layers"]],hostVars:2,hostBindings:function(a,i){a&2&&ue("fa-fw",i.fixedWidth)},inputs:{size:"size",fixedWidth:"fixedWidth"},standalone:!0,features:[L,R],ngContentSelectors:In,decls:1,vars:0,template:function(a,i){a&1&&(kt(),Ct(0))},encapsulation:2})}}return t})(),or=(()=>{class t{constructor(e,a){this.parent=e,this.sanitizer=a,this.document=_(X),this.config=_(yt),On(this.parent,"FaLayersComponent",this.constructor.name)}ngOnChanges(e){if(e){let a=this.buildParams();this.updateContent(a)}}buildParams(){return{title:this.title,classes:this.position!=null?[`fa-layers-${this.position}`]:void 0}}updateContent(e){gt(this.document,this.config),this.renderedHTML=this.sanitizer.bypassSecurityTrustHtml(Cn(this.content||"",e).html.join(""))}static{this.\u0275fac=function(a){return new(a||t)(y(En,8),y(it))}}static{this.\u0275cmp=z({type:t,selectors:[["fa-layers-counter"]],hostAttrs:[1,"ng-fa-layers-counter"],hostVars:1,hostBindings:function(a,i){a&2&&at("innerHTML",i.renderedHTML,nt)},inputs:{content:"content",title:"title",position:"position"},standalone:!0,features:[L,R],decls:0,vars:0,template:function(a,i){},encapsulation:2})}}return t})(),lr=(()=>{class t{constructor(e,a){this.parent=e,this.sanitizer=a,this.document=_(X),this.config=_(yt),On(this.parent,"FaLayersComponent",this.constructor.name)}ngOnChanges(e){if(e){let a=this.buildParams();this.updateContent(a)}}buildParams(){let e={flip:this.flip,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:this.fixedWidth};return{transform:typeof this.transform=="string"?ae.transform(this.transform):this.transform,classes:Sn(e),title:this.title}}updateContent(e){gt(this.document,this.config),this.renderedHTML=this.sanitizer.bypassSecurityTrustHtml(kn(this.content||"",e).html.join(`
`))}static{this.\u0275fac=function(a){return new(a||t)(y(En,8),y(it))}}static{this.\u0275cmp=z({type:t,selectors:[["fa-layers-text"]],hostAttrs:[1,"ng-fa-layers-text"],hostVars:1,hostBindings:function(a,i){a&2&&at("innerHTML",i.renderedHTML,nt)},inputs:{content:"content",title:"title",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform"},standalone:!0,features:[L,R],decls:0,vars:0,template:function(a,i){},encapsulation:2})}}return t})(),fr=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=se({type:t})}static{this.\u0275inj=re({})}}return t})();export{yt as a,_i as b,zi as c,Li as d,Ri as e,sr as f,En as g,or as h,lr as i,fr as j};
