(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const je={},nr=[],Mn=()=>{},SI=()=>!1,ac=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qh=n=>n.startsWith("onUpdate:"),Vt=Object.assign,Yh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},PI=Object.prototype.hasOwnProperty,Fe=(n,e)=>PI.call(n,e),ue=Array.isArray,sr=n=>la(n)==="[object Map]",Nr=n=>la(n)==="[object Set]",Fp=n=>la(n)==="[object Date]",_e=n=>typeof n=="function",lt=n=>typeof n=="string",$n=n=>typeof n=="symbol",He=n=>n!==null&&typeof n=="object",j_=n=>(He(n)||_e(n))&&_e(n.then)&&_e(n.catch),q_=Object.prototype.toString,la=n=>q_.call(n),kI=n=>la(n).slice(8,-1),$_=n=>la(n)==="[object Object]",Jh=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yo=zh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},NI=/-(\w)/g,mn=lc(n=>n.replace(NI,(e,t)=>t?t.toUpperCase():"")),DI=/\B([A-Z])/g,ii=lc(n=>n.replace(DI,"-$1").toLowerCase()),cc=lc(n=>n.charAt(0).toUpperCase()+n.slice(1)),_u=lc(n=>n?`on${cc(n)}`:""),Ls=(n,e)=>!Object.is(n,e),tl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},W_=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},yl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Up;const uc=()=>Up||(Up=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xh(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=lt(s)?LI(s):Xh(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(lt(n)||He(n))return n}const xI=/;(?![^(]*\))/g,OI=/:([^]+)/,MI=/\/\*[^]*?\*\//g;function LI(n){const e={};return n.replace(MI,"").split(xI).forEach(t=>{if(t){const s=t.split(OI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function hc(n){let e="";if(lt(n))e=n;else if(ue(n))for(let t=0;t<n.length;t++){const s=hc(n[t]);s&&(e+=s+" ")}else if(He(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const VI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",FI=zh(VI);function H_(n){return!!n||n===""}function UI(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=Ai(n[s],e[s]);return t}function Ai(n,e){if(n===e)return!0;let t=Fp(n),s=Fp(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=$n(n),s=$n(e),t||s)return n===e;if(t=ue(n),s=ue(e),t||s)return t&&s?UI(n,e):!1;if(t=He(n),s=He(e),t||s){if(!t||!s)return!1;const i=Object.keys(n).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ai(n[o],e[o]))return!1}}return String(n)===String(e)}function Zh(n,e){return n.findIndex(t=>Ai(t,e))}const G_=n=>!!(n&&n.__v_isRef===!0),ne=n=>lt(n)?n:n==null?"":ue(n)||He(n)&&(n.toString===q_||!_e(n.toString))?G_(n)?ne(n.value):JSON.stringify(n,K_,2):String(n),K_=(n,e)=>G_(e)?K_(n,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],r)=>(t[yu(s,r)+" =>"]=i,t),{})}:Nr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>yu(t))}:$n(e)?yu(e):He(e)&&!ue(e)&&!$_(e)?String(e):e,yu=(n,e="")=>{var t;return $n(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class BI{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function jI(){return nn}let $e;const vu=new WeakSet;class z_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vu.has(this)&&(vu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Y_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bp(this),J_(this);const e=$e,t=In;$e=this,In=!0;try{return this.fn()}finally{X_(this),$e=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nd(e);this.deps=this.depsTail=void 0,Bp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ku(this)&&this.run()}get dirty(){return Ku(this)}}let Q_=0,vo,Eo;function Y_(n,e=!1){if(n.flags|=8,e){n.next=Eo,Eo=n;return}n.next=vo,vo=n}function ed(){Q_++}function td(){if(--Q_>0)return;if(Eo){let e=Eo;for(Eo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;vo;){let e=vo;for(vo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function J_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function X_(n){let e,t=n.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),nd(s),qI(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}n.deps=e,n.depsTail=t}function Ku(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Z_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Z_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vo))return;n.globalVersion=Vo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ku(n)){n.flags&=-3;return}const t=$e,s=In;$e=n,In=!0;try{J_(n);const i=n.fn(n._value);(e.version===0||Ls(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{$e=t,In=s,X_(n),n.flags&=-3}}function nd(n,e=!1){const{dep:t,prevSub:s,nextSub:i}=n;if(s&&(s.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)nd(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function qI(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const ey=[];function ri(){ey.push(In),In=!1}function oi(){const n=ey.pop();In=n===void 0?!0:n}function Bp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=$e;$e=void 0;try{e()}finally{$e=t}}}let Vo=0;class $I{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!In||$e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$e)t=this.activeLink=new $I($e,this),$e.deps?(t.prevDep=$e.depsTail,$e.depsTail.nextDep=t,$e.depsTail=t):$e.deps=$e.depsTail=t,ty(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=$e.depsTail,t.nextDep=void 0,$e.depsTail.nextDep=t,$e.depsTail=t,$e.deps===t&&($e.deps=s)}return t}trigger(e){this.version++,Vo++,this.notify(e)}notify(e){ed();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{td()}}}function ty(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ty(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const zu=new WeakMap,Ii=Symbol(""),Qu=Symbol(""),Fo=Symbol("");function kt(n,e,t){if(In&&$e){let s=zu.get(n);s||zu.set(n,s=new Map);let i=s.get(t);i||(s.set(t,i=new sd),i.map=s,i.key=t),i.track()}}function Zn(n,e,t,s,i,r){const o=zu.get(n);if(!o){Vo++;return}const a=c=>{c&&c.trigger()};if(ed(),e==="clear")o.forEach(a);else{const c=ue(n),u=c&&Jh(t);if(c&&t==="length"){const h=Number(s);o.forEach((f,g)=>{(g==="length"||g===Fo||!$n(g)&&g>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Fo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Ii)),sr(n)&&a(o.get(Qu)));break;case"delete":c||(a(o.get(Ii)),sr(n)&&a(o.get(Qu)));break;case"set":sr(n)&&a(o.get(Ii));break}}td()}function Hi(n){const e=Ve(n);return e===n?e:(kt(e,"iterate",Fo),pn(n)?e:e.map(Nt))}function dc(n){return kt(n=Ve(n),"iterate",Fo),n}const WI={__proto__:null,[Symbol.iterator](){return Eu(this,Symbol.iterator,Nt)},concat(...n){return Hi(this).concat(...n.map(e=>ue(e)?Hi(e):e))},entries(){return Eu(this,"entries",n=>(n[1]=Nt(n[1]),n))},every(n,e){return Qn(this,"every",n,e,void 0,arguments)},filter(n,e){return Qn(this,"filter",n,e,t=>t.map(Nt),arguments)},find(n,e){return Qn(this,"find",n,e,Nt,arguments)},findIndex(n,e){return Qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qn(this,"findLast",n,e,Nt,arguments)},findLastIndex(n,e){return Qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return wu(this,"includes",n)},indexOf(...n){return wu(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return wu(this,"lastIndexOf",n)},map(n,e){return Qn(this,"map",n,e,void 0,arguments)},pop(){return to(this,"pop")},push(...n){return to(this,"push",n)},reduce(n,...e){return jp(this,"reduce",n,e)},reduceRight(n,...e){return jp(this,"reduceRight",n,e)},shift(){return to(this,"shift")},some(n,e){return Qn(this,"some",n,e,void 0,arguments)},splice(...n){return to(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return to(this,"unshift",n)},values(){return Eu(this,"values",Nt)}};function Eu(n,e,t){const s=dc(n),i=s[e]();return s!==n&&!pn(n)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=t(r.value)),r}),i}const HI=Array.prototype;function Qn(n,e,t,s,i,r){const o=dc(n),a=o!==n&&!pn(n),c=o[e];if(c!==HI[e]){const f=c.apply(n,r);return a?Nt(f):f}let u=t;o!==n&&(a?u=function(f,g){return t.call(this,Nt(f),g,n)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,n)}));const h=c.call(o,u,s);return a&&i?i(h):h}function jp(n,e,t,s){const i=dc(n);let r=t;return i!==n&&(pn(n)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,n)}):r=function(o,a,c){return t.call(this,o,Nt(a),c,n)}),i[e](r,...s)}function wu(n,e,t){const s=Ve(n);kt(s,"iterate",Fo);const i=s[e](...t);return(i===-1||i===!1)&&od(t[0])?(t[0]=Ve(t[0]),s[e](...t)):i}function to(n,e,t=[]){ri(),ed();const s=Ve(n)[e].apply(n,t);return td(),oi(),s}const GI=zh("__proto__,__v_isRef,__isVue"),ny=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($n));function KI(n){$n(n)||(n=String(n));const e=Ve(this);return kt(e,"has",n),e.hasOwnProperty(n)}class sy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?sC:ay:r?oy:ry).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ue(e);if(!i){let c;if(o&&(c=WI[t]))return c;if(t==="hasOwnProperty")return KI}const a=Reflect.get(e,t,Mt(e)?e:s);return($n(t)?ny.has(t):GI(t))||(i||kt(e,"get",t),r)?a:Mt(a)?o&&Jh(t)?a:a.value:He(a)?i?cy(a):fc(a):a}}class iy extends sy{constructor(e=!1){super(!1,e)}set(e,t,s,i){let r=e[t];if(!this._isShallow){const c=Ri(r);if(!pn(s)&&!Ri(s)&&(r=Ve(r),s=Ve(s)),!ue(e)&&Mt(r)&&!Mt(s))return c?!1:(r.value=s,!0)}const o=ue(e)&&Jh(t)?Number(t)<e.length:Fe(e,t),a=Reflect.set(e,t,s,Mt(e)?e:i);return e===Ve(i)&&(o?Ls(s,r)&&Zn(e,"set",t,s):Zn(e,"add",t,s)),a}deleteProperty(e,t){const s=Fe(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Zn(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!$n(t)||!ny.has(t))&&kt(e,"has",t),s}ownKeys(e){return kt(e,"iterate",ue(e)?"length":Ii),Reflect.ownKeys(e)}}class zI extends sy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const QI=new iy,YI=new zI,JI=new iy(!0);const Yu=n=>n,Wa=n=>Reflect.getPrototypeOf(n);function XI(n,e,t){return function(...s){const i=this.__v_raw,r=Ve(i),o=sr(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...s),h=t?Yu:e?Ju:Nt;return!e&&kt(r,"iterate",c?Qu:Ii),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function Ha(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ZI(n,e){const t={get(i){const r=this.__v_raw,o=Ve(r),a=Ve(i);n||(Ls(i,a)&&kt(o,"get",i),kt(o,"get",a));const{has:c}=Wa(o),u=e?Yu:n?Ju:Nt;if(c.call(o,i))return u(r.get(i));if(c.call(o,a))return u(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!n&&kt(Ve(i),"iterate",Ii),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Ve(r),a=Ve(i);return n||(Ls(i,a)&&kt(o,"has",i),kt(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=Ve(a),u=e?Yu:n?Ju:Nt;return!n&&kt(c,"iterate",Ii),a.forEach((h,f)=>i.call(r,u(h),u(f),o))}};return Vt(t,n?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(i){!e&&!pn(i)&&!Ri(i)&&(i=Ve(i));const r=Ve(this);return Wa(r).has.call(r,i)||(r.add(i),Zn(r,"add",i,i)),this},set(i,r){!e&&!pn(r)&&!Ri(r)&&(r=Ve(r));const o=Ve(this),{has:a,get:c}=Wa(o);let u=a.call(o,i);u||(i=Ve(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,r),u?Ls(r,h)&&Zn(o,"set",i,r):Zn(o,"add",i,r),this},delete(i){const r=Ve(this),{has:o,get:a}=Wa(r);let c=o.call(r,i);c||(i=Ve(i),c=o.call(r,i)),a&&a.call(r,i);const u=r.delete(i);return c&&Zn(r,"delete",i,void 0),u},clear(){const i=Ve(this),r=i.size!==0,o=i.clear();return r&&Zn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=XI(i,n,e)}),t}function id(n,e){const t=ZI(n,e);return(s,i,r)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(Fe(t,i)&&i in s?t:s,i,r)}const eC={get:id(!1,!1)},tC={get:id(!1,!0)},nC={get:id(!0,!1)};const ry=new WeakMap,oy=new WeakMap,ay=new WeakMap,sC=new WeakMap;function iC(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rC(n){return n.__v_skip||!Object.isExtensible(n)?0:iC(kI(n))}function fc(n){return Ri(n)?n:rd(n,!1,QI,eC,ry)}function ly(n){return rd(n,!1,JI,tC,oy)}function cy(n){return rd(n,!0,YI,nC,ay)}function rd(n,e,t,s,i){if(!He(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=i.get(n);if(r)return r;const o=rC(n);if(o===0)return n;const a=new Proxy(n,o===2?s:t);return i.set(n,a),a}function ir(n){return Ri(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function Ri(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function od(n){return n?!!n.__v_raw:!1}function Ve(n){const e=n&&n.__v_raw;return e?Ve(e):n}function oC(n){return!Fe(n,"__v_skip")&&Object.isExtensible(n)&&W_(n,"__v_skip",!0),n}const Nt=n=>He(n)?fc(n):n,Ju=n=>He(n)?cy(n):n;function Mt(n){return n?n.__v_isRef===!0:!1}function qt(n){return uy(n,!1)}function aC(n){return uy(n,!0)}function uy(n,e){return Mt(n)?n:new lC(n,e)}class lC{constructor(e,t){this.dep=new sd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ve(e),this._value=t?e:Nt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||pn(e)||Ri(e);e=s?e:Ve(e),Ls(e,t)&&(this._rawValue=e,this._value=s?e:Nt(e),this.dep.trigger())}}function rr(n){return Mt(n)?n.value:n}const cC={get:(n,e,t)=>e==="__v_raw"?n:rr(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return Mt(i)&&!Mt(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function hy(n){return ir(n)?n:new Proxy(n,cC)}class uC{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new sd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Y_(this,!0),!0}get value(){const e=this.dep.track();return Z_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hC(n,e,t=!1){let s,i;return _e(n)?s=n:(s=n.get,i=n.set),new uC(s,i,t)}const Ga={},vl=new WeakMap;let yi;function dC(n,e=!1,t=yi){if(t){let s=vl.get(t);s||vl.set(t,s=[]),s.push(n)}}function fC(n,e,t=je){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=t,u=G=>i?G:pn(G)||i===!1||i===0?es(G,1):es(G);let h,f,g,m,C=!1,N=!1;if(Mt(n)?(f=()=>n.value,C=pn(n)):ir(n)?(f=()=>u(n),C=!0):ue(n)?(N=!0,C=n.some(G=>ir(G)||pn(G)),f=()=>n.map(G=>{if(Mt(G))return G.value;if(ir(G))return u(G);if(_e(G))return c?c(G,2):G()})):_e(n)?e?f=c?()=>c(n,2):n:f=()=>{if(g){ri();try{g()}finally{oi()}}const G=yi;yi=h;try{return c?c(n,3,[m]):n(m)}finally{yi=G}}:f=Mn,e&&i){const G=f,ve=i===!0?1/0:i;f=()=>es(G(),ve)}const D=jI(),j=()=>{h.stop(),D&&D.active&&Yh(D.effects,h)};if(r&&e){const G=e;e=(...ve)=>{G(...ve),j()}}let q=N?new Array(n.length).fill(Ga):Ga;const $=G=>{if(!(!(h.flags&1)||!h.dirty&&!G))if(e){const ve=h.run();if(i||C||(N?ve.some((Ee,A)=>Ls(Ee,q[A])):Ls(ve,q))){g&&g();const Ee=yi;yi=h;try{const A=[ve,q===Ga?void 0:N&&q[0]===Ga?[]:q,m];c?c(e,3,A):e(...A),q=ve}finally{yi=Ee}}}else h.run()};return a&&a($),h=new z_(f),h.scheduler=o?()=>o($,!1):$,m=G=>dC(G,!1,h),g=h.onStop=()=>{const G=vl.get(h);if(G){if(c)c(G,4);else for(const ve of G)ve();vl.delete(h)}},e?s?$(!0):q=h.run():o?o($.bind(null,!0),!0):h.run(),j.pause=h.pause.bind(h),j.resume=h.resume.bind(h),j.stop=j,j}function es(n,e=1/0,t){if(e<=0||!He(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Mt(n))es(n.value,e,t);else if(ue(n))for(let s=0;s<n.length;s++)es(n[s],e,t);else if(Nr(n)||sr(n))n.forEach(s=>{es(s,e,t)});else if($_(n)){for(const s in n)es(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&es(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ca(n,e,t,s){try{return s?n(...s):n()}catch(i){pc(i,e,t)}}function Wn(n,e,t,s){if(_e(n)){const i=ca(n,e,t,s);return i&&j_(i)&&i.catch(r=>{pc(r,e,t)}),i}if(ue(n)){const i=[];for(let r=0;r<n.length;r++)i.push(Wn(n[r],e,t,s));return i}}function pc(n,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||je;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}a=a.parent}if(r){ri(),ca(r,null,10,[n,c,u]),oi();return}}pC(n,t,i,s,o)}function pC(n,e,t,s=!0,i=!1){if(i)throw n;console.error(n)}const $t=[];let Nn=-1;const or=[];let Ss=null,Ki=0;const dy=Promise.resolve();let El=null;function ad(n){const e=El||dy;return n?e.then(this?n.bind(this):n):e}function gC(n){let e=Nn+1,t=$t.length;for(;e<t;){const s=e+t>>>1,i=$t[s],r=Uo(i);r<n||r===n&&i.flags&2?e=s+1:t=s}return e}function ld(n){if(!(n.flags&1)){const e=Uo(n),t=$t[$t.length-1];!t||!(n.flags&2)&&e>=Uo(t)?$t.push(n):$t.splice(gC(e),0,n),n.flags|=1,fy()}}function fy(){El||(El=dy.then(gy))}function mC(n){ue(n)?or.push(...n):Ss&&n.id===-1?Ss.splice(Ki+1,0,n):n.flags&1||(or.push(n),n.flags|=1),fy()}function qp(n,e,t=Nn+1){for(;t<$t.length;t++){const s=$t[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;$t.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function py(n){if(or.length){const e=[...new Set(or)].sort((t,s)=>Uo(t)-Uo(s));if(or.length=0,Ss){Ss.push(...e);return}for(Ss=e,Ki=0;Ki<Ss.length;Ki++){const t=Ss[Ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ss=null,Ki=0}}const Uo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gy(n){try{for(Nn=0;Nn<$t.length;Nn++){const e=$t[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ca(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<$t.length;Nn++){const e=$t[Nn];e&&(e.flags&=-2)}Nn=-1,$t.length=0,py(),El=null,($t.length||or.length)&&gy()}}let rn=null,my=null;function wl(n){const e=rn;return rn=n,my=n&&n.type.__scopeId||null,e}function Yt(n,e=rn,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&Xp(-1);const r=wl(e);let o;try{o=n(...i)}finally{wl(r),s._d&&Xp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function De(n,e){if(rn===null)return n;const t=yc(rn),s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=je]=e[i];r&&(_e(r)&&(r={mounted:r,updated:r}),r.deep&&es(o),s.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function mi(n,e,t,s){const i=n.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(ri(),Wn(c,t,8,[n.el,a,n,e]),oi())}}const _C=Symbol("_vte"),yC=n=>n.__isTeleport;function cd(n,e){n.shapeFlag&6&&n.component?(n.transition=e,cd(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _y(n,e){return _e(n)?Vt({name:n.name},e,{setup:n}):n}function yy(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Tl(n,e,t,s,i=!1){if(ue(n)){n.forEach((C,N)=>Tl(C,e&&(ue(e)?e[N]:e),t,s,i));return}if(wo(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Tl(n,e,t,s.component.subTree);return}const r=s.shapeFlag&4?yc(s.component):s.el,o=i?null:r,{i:a,r:c}=n,u=e&&e.r,h=a.refs===je?a.refs={}:a.refs,f=a.setupState,g=Ve(f),m=f===je?()=>!1:C=>Fe(g,C);if(u!=null&&u!==c&&(lt(u)?(h[u]=null,m(u)&&(f[u]=null)):Mt(u)&&(u.value=null)),_e(c))ca(c,a,12,[o,h]);else{const C=lt(c),N=Mt(c);if(C||N){const D=()=>{if(n.f){const j=C?m(c)?f[c]:h[c]:c.value;i?ue(j)&&Yh(j,r):ue(j)?j.includes(r)||j.push(r):C?(h[c]=[r],m(c)&&(f[c]=h[c])):(c.value=[r],n.k&&(h[n.k]=c.value))}else C?(h[c]=o,m(c)&&(f[c]=o)):N&&(c.value=o,n.k&&(h[n.k]=o))};o?(D.id=-1,tn(D,t)):D()}}}uc().requestIdleCallback;uc().cancelIdleCallback;const wo=n=>!!n.type.__asyncLoader,vy=n=>n.type.__isKeepAlive;function vC(n,e){Ey(n,"a",e)}function EC(n,e){Ey(n,"da",e)}function Ey(n,e,t=Ot){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(gc(e,s,t),t){let i=t.parent;for(;i&&i.parent;)vy(i.parent.vnode)&&wC(s,e,t,i),i=i.parent}}function wC(n,e,t,s){const i=gc(e,n,s,!0);wy(()=>{Yh(s[e],i)},t)}function gc(n,e,t=Ot,s=!1){if(t){const i=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ri();const a=ua(t),c=Wn(e,t,n,o);return a(),oi(),c});return s?i.unshift(r):i.push(r),r}}const ms=n=>(e,t=Ot)=>{(!jo||n==="sp")&&gc(n,(...s)=>e(...s),t)},TC=ms("bm"),ud=ms("m"),IC=ms("bu"),CC=ms("u"),hd=ms("bum"),wy=ms("um"),AC=ms("sp"),RC=ms("rtg"),bC=ms("rtc");function SC(n,e=Ot){gc("ec",n,e)}const PC="components";function Ht(n,e){return NC(PC,n,!0,e)||n}const kC=Symbol.for("v-ndc");function NC(n,e,t=!0,s=!1){const i=rn||Ot;if(i){const r=i.type;{const a=yA(r,!1);if(a&&(a===e||a===mn(e)||a===cc(mn(e))))return r}const o=$p(i[n]||r[n],e)||$p(i.appContext[n],e);return!o&&s?r:o}}function $p(n,e){return n&&(n[e]||n[mn(e)]||n[cc(mn(e))])}function On(n,e,t,s){let i;const r=t,o=ue(n);if(o||lt(n)){const a=o&&ir(n);let c=!1;a&&(c=!pn(n),n=dc(n)),i=new Array(n.length);for(let u=0,h=n.length;u<h;u++)i[u]=e(c?Nt(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,r)}else if(He(n))if(n[Symbol.iterator])i=Array.from(n,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(n);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(n[h],h,c,r)}}else i=[];return i}const Xu=n=>n?$y(n)?yc(n):Xu(n.parent):null,To=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xu(n.parent),$root:n=>Xu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Iy(n),$forceUpdate:n=>n.f||(n.f=()=>{ld(n.update)}),$nextTick:n=>n.n||(n.n=ad.bind(n.proxy)),$watch:n=>XC.bind(n)}),Tu=(n,e)=>n!==je&&!n.__isScriptSetup&&Fe(n,e),DC={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(Tu(s,e))return o[e]=1,s[e];if(i!==je&&Fe(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&Fe(u,e))return o[e]=3,r[e];if(t!==je&&Fe(t,e))return o[e]=4,t[e];Zu&&(o[e]=0)}}const h=To[e];let f,g;if(h)return e==="$attrs"&&kt(n.attrs,"get",""),h(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==je&&Fe(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,Fe(g,e))return g[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:r}=n;return Tu(i,e)?(i[e]=t,!0):s!==je&&Fe(s,e)?(s[e]=t,!0):Fe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!t[o]||n!==je&&Fe(n,o)||Tu(e,o)||(a=r[0])&&Fe(a,o)||Fe(s,o)||Fe(To,o)||Fe(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Fe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Wp(n){return ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Zu=!0;function xC(n){const e=Iy(n),t=n.proxy,s=n.ctx;Zu=!1,e.beforeCreate&&Hp(e.beforeCreate,n,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:m,updated:C,activated:N,deactivated:D,beforeDestroy:j,beforeUnmount:q,destroyed:$,unmounted:G,render:ve,renderTracked:Ee,renderTriggered:A,errorCaptured:v,serverPrefetch:I,expose:R,inheritAttrs:b,components:P,directives:T,filters:Ut}=e;if(u&&OC(u,s,null),o)for(const Pe in o){const Ae=o[Pe];_e(Ae)&&(s[Pe]=Ae.bind(t))}if(i){const Pe=i.call(t,t);He(Pe)&&(n.data=fc(Pe))}if(Zu=!0,r)for(const Pe in r){const Ae=r[Pe],Zt=_e(Ae)?Ae.bind(t,t):_e(Ae.get)?Ae.get.bind(t,t):Mn,_n=!_e(Ae)&&_e(Ae.set)?Ae.set.bind(t):Mn,hn=vn({get:Zt,set:_n});Object.defineProperty(s,Pe,{enumerable:!0,configurable:!0,get:()=>hn.value,set:Je=>hn.value=Je})}if(a)for(const Pe in a)Ty(a[Pe],s,t,Pe);if(c){const Pe=_e(c)?c.call(t):c;Reflect.ownKeys(Pe).forEach(Ae=>{nl(Ae,Pe[Ae])})}h&&Hp(h,n,"c");function st(Pe,Ae){ue(Ae)?Ae.forEach(Zt=>Pe(Zt.bind(t))):Ae&&Pe(Ae.bind(t))}if(st(TC,f),st(ud,g),st(IC,m),st(CC,C),st(vC,N),st(EC,D),st(SC,v),st(bC,Ee),st(RC,A),st(hd,q),st(wy,G),st(AC,I),ue(R))if(R.length){const Pe=n.exposed||(n.exposed={});R.forEach(Ae=>{Object.defineProperty(Pe,Ae,{get:()=>t[Ae],set:Zt=>t[Ae]=Zt})})}else n.exposed||(n.exposed={});ve&&n.render===Mn&&(n.render=ve),b!=null&&(n.inheritAttrs=b),P&&(n.components=P),T&&(n.directives=T),I&&yy(n)}function OC(n,e,t=Mn){ue(n)&&(n=eh(n));for(const s in n){const i=n[s];let r;He(i)?"default"in i?r=Ln(i.from||s,i.default,!0):r=Ln(i.from||s):r=Ln(i),Mt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Hp(n,e,t){Wn(ue(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ty(n,e,t,s){let i=s.includes(".")?Vy(t,s):()=>t[s];if(lt(n)){const r=e[n];_e(r)&&sl(i,r)}else if(_e(n))sl(i,n.bind(t));else if(He(n))if(ue(n))n.forEach(r=>Ty(r,e,t,s));else{const r=_e(n.handler)?n.handler.bind(t):e[n.handler];_e(r)&&sl(i,r,n)}}function Iy(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!t&&!s?c=e:(c={},i.length&&i.forEach(u=>Il(c,u,o,!0)),Il(c,e,o)),He(e)&&r.set(e,c),c}function Il(n,e,t,s=!1){const{mixins:i,extends:r}=e;r&&Il(n,r,t,!0),i&&i.forEach(o=>Il(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=MC[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const MC={data:Gp,props:Kp,emits:Kp,methods:uo,computed:uo,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:uo,directives:uo,watch:VC,provide:Gp,inject:LC};function Gp(n,e){return e?n?function(){return Vt(_e(n)?n.call(this,this):n,_e(e)?e.call(this,this):e)}:e:n}function LC(n,e){return uo(eh(n),eh(e))}function eh(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function uo(n,e){return n?Vt(Object.create(null),n,e):e}function Kp(n,e){return n?ue(n)&&ue(e)?[...new Set([...n,...e])]:Vt(Object.create(null),Wp(n),Wp(e??{})):e}function VC(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const s in e)t[s]=jt(n[s],e[s]);return t}function Cy(){return{app:null,config:{isNativeTag:SI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let FC=0;function UC(n,e){return function(s,i=null){_e(s)||(s=Vt({},s)),i!=null&&!He(i)&&(i=null);const r=Cy(),o=new WeakSet,a=[];let c=!1;const u=r.app={_uid:FC++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:EA,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&_e(h.install)?(o.add(h),h.install(u,...f)):_e(h)&&(o.add(h),h(u,...f))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,f){return f?(r.components[h]=f,u):r.components[h]},directive(h,f){return f?(r.directives[h]=f,u):r.directives[h]},mount(h,f,g){if(!c){const m=u._ceVNode||Se(s,i);return m.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),n(m,h,g),c=!0,u._container=h,h.__vue_app__=u,yc(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Wn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return r.provides[h]=f,u},runWithContext(h){const f=ar;ar=u;try{return h()}finally{ar=f}}};return u}}let ar=null;function nl(n,e){if(Ot){let t=Ot.provides;const s=Ot.parent&&Ot.parent.provides;s===t&&(t=Ot.provides=Object.create(s)),t[n]=e}}function Ln(n,e,t=!1){const s=Ot||rn;if(s||ar){const i=ar?ar._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&_e(e)?e.call(s&&s.proxy):e}}const Ay={},Ry=()=>Object.create(Ay),by=n=>Object.getPrototypeOf(n)===Ay;function BC(n,e,t,s=!1){const i={},r=Ry();n.propsDefaults=Object.create(null),Sy(n,e,i,r);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=s?i:ly(i):n.type.props?n.props=i:n.props=r,n.attrs=r}function jC(n,e,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=n,a=Ve(i),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(mc(n.emitsOptions,g))continue;const m=e[g];if(c)if(Fe(r,g))m!==r[g]&&(r[g]=m,u=!0);else{const C=mn(g);i[C]=th(c,a,C,m,n,!1)}else m!==r[g]&&(r[g]=m,u=!0)}}}else{Sy(n,e,i,r)&&(u=!0);let h;for(const f in a)(!e||!Fe(e,f)&&((h=ii(f))===f||!Fe(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(i[f]=th(c,a,f,void 0,n,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Fe(e,f))&&(delete r[f],u=!0)}u&&Zn(n.attrs,"set","")}function Sy(n,e,t,s){const[i,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(yo(c))continue;const u=e[c];let h;i&&Fe(i,h=mn(c))?!r||!r.includes(h)?t[h]=u:(a||(a={}))[h]=u:mc(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Ve(t),u=a||je;for(let h=0;h<r.length;h++){const f=r[h];t[f]=th(i,c,f,u[f],n,!Fe(u,f))}}return o}function th(n,e,t,s,i,r){const o=n[t];if(o!=null){const a=Fe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=i;if(t in u)s=u[t];else{const h=ua(i);s=u[t]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(t,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ii(t))&&(s=!0))}return s}const qC=new WeakMap;function Py(n,e,t=!1){const s=t?qC:e.propsCache,i=s.get(n);if(i)return i;const r=n.props,o={},a=[];let c=!1;if(!_e(n)){const h=f=>{c=!0;const[g,m]=Py(f,e,!0);Vt(o,g),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!c)return He(n)&&s.set(n,nr),nr;if(ue(r))for(let h=0;h<r.length;h++){const f=mn(r[h]);zp(f)&&(o[f]=je)}else if(r)for(const h in r){const f=mn(h);if(zp(f)){const g=r[h],m=o[f]=ue(g)||_e(g)?{type:g}:Vt({},g),C=m.type;let N=!1,D=!0;if(ue(C))for(let j=0;j<C.length;++j){const q=C[j],$=_e(q)&&q.name;if($==="Boolean"){N=!0;break}else $==="String"&&(D=!1)}else N=_e(C)&&C.name==="Boolean";m[0]=N,m[1]=D,(N||Fe(m,"default"))&&a.push(f)}}const u=[o,a];return He(n)&&s.set(n,u),u}function zp(n){return n[0]!=="$"&&!yo(n)}const ky=n=>n[0]==="_"||n==="$stable",dd=n=>ue(n)?n.map(xn):[xn(n)],$C=(n,e,t)=>{if(e._n)return e;const s=Yt((...i)=>dd(e(...i)),t);return s._c=!1,s},Ny=(n,e,t)=>{const s=n._ctx;for(const i in n){if(ky(i))continue;const r=n[i];if(_e(r))e[i]=$C(i,r,s);else if(r!=null){const o=dd(r);e[i]=()=>o}}},Dy=(n,e)=>{const t=dd(e);n.slots.default=()=>t},xy=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},WC=(n,e,t)=>{const s=n.slots=Ry();if(n.vnode.shapeFlag&32){const i=e._;i?(xy(s,e,t),t&&W_(s,"_",i,!0)):Ny(e,s)}else e&&Dy(n,e)},HC=(n,e,t)=>{const{vnode:s,slots:i}=n;let r=!0,o=je;if(s.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:xy(i,e,t):(r=!e.$stable,Ny(e,i)),o=e}else e&&(Dy(n,e),o={default:1});if(r)for(const a in i)!ky(a)&&o[a]==null&&delete i[a]},tn=rA;function GC(n){return KC(n)}function KC(n,e){const t=uc();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:m=Mn,insertStaticContent:C}=n,N=(E,w,S,M=null,U=null,V=null,Q=void 0,K=null,W=!!w.dynamicChildren)=>{if(E===w)return;E&&!no(E,w)&&(M=O(E),Je(E,U,V,!0),E=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:B,ref:le,shapeFlag:J}=w;switch(B){case _c:D(E,w,S,M);break;case bi:j(E,w,S,M);break;case il:E==null&&q(w,S,M,Q);break;case ot:P(E,w,S,M,U,V,Q,K,W);break;default:J&1?ve(E,w,S,M,U,V,Q,K,W):J&6?T(E,w,S,M,U,V,Q,K,W):(J&64||J&128)&&B.process(E,w,S,M,U,V,Q,K,W,te)}le!=null&&U&&Tl(le,E&&E.ref,V,w||E,!w)},D=(E,w,S,M)=>{if(E==null)s(w.el=a(w.children),S,M);else{const U=w.el=E.el;w.children!==E.children&&u(U,w.children)}},j=(E,w,S,M)=>{E==null?s(w.el=c(w.children||""),S,M):w.el=E.el},q=(E,w,S,M)=>{[E.el,E.anchor]=C(E.children,w,S,M,E.el,E.anchor)},$=({el:E,anchor:w},S,M)=>{let U;for(;E&&E!==w;)U=g(E),s(E,S,M),E=U;s(w,S,M)},G=({el:E,anchor:w})=>{let S;for(;E&&E!==w;)S=g(E),i(E),E=S;i(w)},ve=(E,w,S,M,U,V,Q,K,W)=>{w.type==="svg"?Q="svg":w.type==="math"&&(Q="mathml"),E==null?Ee(w,S,M,U,V,Q,K,W):I(E,w,U,V,Q,K,W)},Ee=(E,w,S,M,U,V,Q,K)=>{let W,B;const{props:le,shapeFlag:J,transition:se,dirs:fe}=E;if(W=E.el=o(E.type,V,le&&le.is,le),J&8?h(W,E.children):J&16&&v(E.children,W,null,M,U,Iu(E,V),Q,K),fe&&mi(E,null,M,"created"),A(W,E,E.scopeId,Q,M),le){for(const ye in le)ye!=="value"&&!yo(ye)&&r(W,ye,null,le[ye],V,M);"value"in le&&r(W,"value",null,le.value,V),(B=le.onVnodeBeforeMount)&&kn(B,M,E)}fe&&mi(E,null,M,"beforeMount");const ce=zC(U,se);ce&&se.beforeEnter(W),s(W,w,S),((B=le&&le.onVnodeMounted)||ce||fe)&&tn(()=>{B&&kn(B,M,E),ce&&se.enter(W),fe&&mi(E,null,M,"mounted")},U)},A=(E,w,S,M,U)=>{if(S&&m(E,S),M)for(let V=0;V<M.length;V++)m(E,M[V]);if(U){let V=U.subTree;if(w===V||Uy(V.type)&&(V.ssContent===w||V.ssFallback===w)){const Q=U.vnode;A(E,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},v=(E,w,S,M,U,V,Q,K,W=0)=>{for(let B=W;B<E.length;B++){const le=E[B]=K?Ps(E[B]):xn(E[B]);N(null,le,w,S,M,U,V,Q,K)}},I=(E,w,S,M,U,V,Q)=>{const K=w.el=E.el;let{patchFlag:W,dynamicChildren:B,dirs:le}=w;W|=E.patchFlag&16;const J=E.props||je,se=w.props||je;let fe;if(S&&_i(S,!1),(fe=se.onVnodeBeforeUpdate)&&kn(fe,S,w,E),le&&mi(w,E,S,"beforeUpdate"),S&&_i(S,!0),(J.innerHTML&&se.innerHTML==null||J.textContent&&se.textContent==null)&&h(K,""),B?R(E.dynamicChildren,B,K,S,M,Iu(w,U),V):Q||Ae(E,w,K,null,S,M,Iu(w,U),V,!1),W>0){if(W&16)b(K,J,se,S,U);else if(W&2&&J.class!==se.class&&r(K,"class",null,se.class,U),W&4&&r(K,"style",J.style,se.style,U),W&8){const ce=w.dynamicProps;for(let ye=0;ye<ce.length;ye++){const ke=ce[ye],Ct=J[ke],yt=se[ke];(yt!==Ct||ke==="value")&&r(K,ke,Ct,yt,U,S)}}W&1&&E.children!==w.children&&h(K,w.children)}else!Q&&B==null&&b(K,J,se,S,U);((fe=se.onVnodeUpdated)||le)&&tn(()=>{fe&&kn(fe,S,w,E),le&&mi(w,E,S,"updated")},M)},R=(E,w,S,M,U,V,Q)=>{for(let K=0;K<w.length;K++){const W=E[K],B=w[K],le=W.el&&(W.type===ot||!no(W,B)||W.shapeFlag&70)?f(W.el):S;N(W,B,le,null,M,U,V,Q,!0)}},b=(E,w,S,M,U)=>{if(w!==S){if(w!==je)for(const V in w)!yo(V)&&!(V in S)&&r(E,V,w[V],null,U,M);for(const V in S){if(yo(V))continue;const Q=S[V],K=w[V];Q!==K&&V!=="value"&&r(E,V,K,Q,U,M)}"value"in S&&r(E,"value",w.value,S.value,U)}},P=(E,w,S,M,U,V,Q,K,W)=>{const B=w.el=E?E.el:a(""),le=w.anchor=E?E.anchor:a("");let{patchFlag:J,dynamicChildren:se,slotScopeIds:fe}=w;fe&&(K=K?K.concat(fe):fe),E==null?(s(B,S,M),s(le,S,M),v(w.children||[],S,le,U,V,Q,K,W)):J>0&&J&64&&se&&E.dynamicChildren?(R(E.dynamicChildren,se,S,U,V,Q,K),(w.key!=null||U&&w===U.subTree)&&Oy(E,w,!0)):Ae(E,w,S,le,U,V,Q,K,W)},T=(E,w,S,M,U,V,Q,K,W)=>{w.slotScopeIds=K,E==null?w.shapeFlag&512?U.ctx.activate(w,S,M,Q,W):Ut(w,S,M,U,V,Q,W):un(E,w,W)},Ut=(E,w,S,M,U,V,Q)=>{const K=E.component=fA(E,M,U);if(vy(E)&&(K.ctx.renderer=te),pA(K,!1,Q),K.asyncDep){if(U&&U.registerDep(K,st,Q),!E.el){const W=K.subTree=Se(bi);j(null,W,w,S)}}else st(K,E,w,S,U,V,Q)},un=(E,w,S)=>{const M=w.component=E.component;if(sA(E,w,S))if(M.asyncDep&&!M.asyncResolved){Pe(M,w,S);return}else M.next=w,M.update();else w.el=E.el,M.vnode=w},st=(E,w,S,M,U,V,Q)=>{const K=()=>{if(E.isMounted){let{next:J,bu:se,u:fe,parent:ce,vnode:ye}=E;{const At=My(E);if(At){J&&(J.el=ye.el,Pe(E,J,Q)),At.asyncDep.then(()=>{E.isUnmounted||K()});return}}let ke=J,Ct;_i(E,!1),J?(J.el=ye.el,Pe(E,J,Q)):J=ye,se&&tl(se),(Ct=J.props&&J.props.onVnodeBeforeUpdate)&&kn(Ct,ce,J,ye),_i(E,!0);const yt=Yp(E),dn=E.subTree;E.subTree=yt,N(dn,yt,f(dn.el),O(dn),E,U,V),J.el=yt.el,ke===null&&iA(E,yt.el),fe&&tn(fe,U),(Ct=J.props&&J.props.onVnodeUpdated)&&tn(()=>kn(Ct,ce,J,ye),U)}else{let J;const{el:se,props:fe}=w,{bm:ce,m:ye,parent:ke,root:Ct,type:yt}=E,dn=wo(w);_i(E,!1),ce&&tl(ce),!dn&&(J=fe&&fe.onVnodeBeforeMount)&&kn(J,ke,w),_i(E,!0);{Ct.ce&&Ct.ce._injectChildStyle(yt);const At=E.subTree=Yp(E);N(null,At,S,M,E,U,V),w.el=At.el}if(ye&&tn(ye,U),!dn&&(J=fe&&fe.onVnodeMounted)){const At=w;tn(()=>kn(J,ke,At),U)}(w.shapeFlag&256||ke&&wo(ke.vnode)&&ke.vnode.shapeFlag&256)&&E.a&&tn(E.a,U),E.isMounted=!0,w=S=M=null}};E.scope.on();const W=E.effect=new z_(K);E.scope.off();const B=E.update=W.run.bind(W),le=E.job=W.runIfDirty.bind(W);le.i=E,le.id=E.uid,W.scheduler=()=>ld(le),_i(E,!0),B()},Pe=(E,w,S)=>{w.component=E;const M=E.vnode.props;E.vnode=w,E.next=null,jC(E,w.props,M,S),HC(E,w.children,S),ri(),qp(E),oi()},Ae=(E,w,S,M,U,V,Q,K,W=!1)=>{const B=E&&E.children,le=E?E.shapeFlag:0,J=w.children,{patchFlag:se,shapeFlag:fe}=w;if(se>0){if(se&128){_n(B,J,S,M,U,V,Q,K,W);return}else if(se&256){Zt(B,J,S,M,U,V,Q,K,W);return}}fe&8?(le&16&&Kt(B,U,V),J!==B&&h(S,J)):le&16?fe&16?_n(B,J,S,M,U,V,Q,K,W):Kt(B,U,V,!0):(le&8&&h(S,""),fe&16&&v(J,S,M,U,V,Q,K,W))},Zt=(E,w,S,M,U,V,Q,K,W)=>{E=E||nr,w=w||nr;const B=E.length,le=w.length,J=Math.min(B,le);let se;for(se=0;se<J;se++){const fe=w[se]=W?Ps(w[se]):xn(w[se]);N(E[se],fe,S,null,U,V,Q,K,W)}B>le?Kt(E,U,V,!0,!1,J):v(w,S,M,U,V,Q,K,W,J)},_n=(E,w,S,M,U,V,Q,K,W)=>{let B=0;const le=w.length;let J=E.length-1,se=le-1;for(;B<=J&&B<=se;){const fe=E[B],ce=w[B]=W?Ps(w[B]):xn(w[B]);if(no(fe,ce))N(fe,ce,S,null,U,V,Q,K,W);else break;B++}for(;B<=J&&B<=se;){const fe=E[J],ce=w[se]=W?Ps(w[se]):xn(w[se]);if(no(fe,ce))N(fe,ce,S,null,U,V,Q,K,W);else break;J--,se--}if(B>J){if(B<=se){const fe=se+1,ce=fe<le?w[fe].el:M;for(;B<=se;)N(null,w[B]=W?Ps(w[B]):xn(w[B]),S,ce,U,V,Q,K,W),B++}}else if(B>se)for(;B<=J;)Je(E[B],U,V,!0),B++;else{const fe=B,ce=B,ye=new Map;for(B=ce;B<=se;B++){const vt=w[B]=W?Ps(w[B]):xn(w[B]);vt.key!=null&&ye.set(vt.key,B)}let ke,Ct=0;const yt=se-ce+1;let dn=!1,At=0;const Ts=new Array(yt);for(B=0;B<yt;B++)Ts[B]=0;for(B=fe;B<=J;B++){const vt=E[B];if(Ct>=yt){Je(vt,U,V,!0);continue}let fn;if(vt.key!=null)fn=ye.get(vt.key);else for(ke=ce;ke<=se;ke++)if(Ts[ke-ce]===0&&no(vt,w[ke])){fn=ke;break}fn===void 0?Je(vt,U,V,!0):(Ts[fn-ce]=B+1,fn>=At?At=fn:dn=!0,N(vt,w[fn],S,null,U,V,Q,K,W),Ct++)}const qr=dn?QC(Ts):nr;for(ke=qr.length-1,B=yt-1;B>=0;B--){const vt=ce+B,fn=w[vt],Sa=vt+1<le?w[vt+1].el:M;Ts[B]===0?N(null,fn,S,Sa,U,V,Q,K,W):dn&&(ke<0||B!==qr[ke]?hn(fn,S,Sa,2):ke--)}}},hn=(E,w,S,M,U=null)=>{const{el:V,type:Q,transition:K,children:W,shapeFlag:B}=E;if(B&6){hn(E.component.subTree,w,S,M);return}if(B&128){E.suspense.move(w,S,M);return}if(B&64){Q.move(E,w,S,te);return}if(Q===ot){s(V,w,S);for(let J=0;J<W.length;J++)hn(W[J],w,S,M);s(E.anchor,w,S);return}if(Q===il){$(E,w,S);return}if(M!==2&&B&1&&K)if(M===0)K.beforeEnter(V),s(V,w,S),tn(()=>K.enter(V),U);else{const{leave:J,delayLeave:se,afterLeave:fe}=K,ce=()=>s(V,w,S),ye=()=>{J(V,()=>{ce(),fe&&fe()})};se?se(V,ce,ye):ye()}else s(V,w,S)},Je=(E,w,S,M=!1,U=!1)=>{const{type:V,props:Q,ref:K,children:W,dynamicChildren:B,shapeFlag:le,patchFlag:J,dirs:se,cacheIndex:fe}=E;if(J===-2&&(U=!1),K!=null&&Tl(K,null,S,E,!0),fe!=null&&(w.renderCache[fe]=void 0),le&256){w.ctx.deactivate(E);return}const ce=le&1&&se,ye=!wo(E);let ke;if(ye&&(ke=Q&&Q.onVnodeBeforeUnmount)&&kn(ke,w,E),le&6)Pn(E.component,S,M);else{if(le&128){E.suspense.unmount(S,M);return}ce&&mi(E,null,w,"beforeUnmount"),le&64?E.type.remove(E,w,S,te,M):B&&!B.hasOnce&&(V!==ot||J>0&&J&64)?Kt(B,w,S,!1,!0):(V===ot&&J&384||!U&&le&16)&&Kt(W,w,S),M&&Xe(E)}(ye&&(ke=Q&&Q.onVnodeUnmounted)||ce)&&tn(()=>{ke&&kn(ke,w,E),ce&&mi(E,null,w,"unmounted")},S)},Xe=E=>{const{type:w,el:S,anchor:M,transition:U}=E;if(w===ot){ws(S,M);return}if(w===il){G(E);return}const V=()=>{i(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(E.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,W=()=>Q(S,V);K?K(E.el,V,W):W()}else V()},ws=(E,w)=>{let S;for(;E!==w;)S=g(E),i(E),E=S;i(w)},Pn=(E,w,S)=>{const{bum:M,scope:U,job:V,subTree:Q,um:K,m:W,a:B}=E;Qp(W),Qp(B),M&&tl(M),U.stop(),V&&(V.flags|=8,Je(Q,E,w,S)),K&&tn(K,w),tn(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Kt=(E,w,S,M=!1,U=!1,V=0)=>{for(let Q=V;Q<E.length;Q++)Je(E[Q],w,S,M,U)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=g(E.anchor||E.el),S=w&&w[_C];return S?g(S):w};let X=!1;const Y=(E,w,S)=>{E==null?w._vnode&&Je(w._vnode,null,null,!0):N(w._vnode||null,E,w,null,null,null,S),w._vnode=E,X||(X=!0,qp(),py(),X=!1)},te={p:N,um:Je,m:hn,r:Xe,mt:Ut,mc:v,pc:Ae,pbc:R,n:O,o:n};return{render:Y,hydrate:void 0,createApp:UC(Y)}}function Iu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function zC(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Oy(n,e,t=!1){const s=n.children,i=e.children;if(ue(s)&&ue(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Ps(i[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Oy(o,a)),a.type===_c&&(a.el=o.el)}}function QC(n){const e=n.slice(),t=[0];let s,i,r,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(i=t[t.length-1],n[i]<u){e[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function My(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:My(e)}function Qp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const YC=Symbol.for("v-scx"),JC=()=>Ln(YC);function sl(n,e,t){return Ly(n,e,t)}function Ly(n,e,t=je){const{immediate:s,deep:i,flush:r,once:o}=t,a=Vt({},t),c=e&&s||!e&&r!=="post";let u;if(jo){if(r==="sync"){const m=JC();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Mn,m.resume=Mn,m.pause=Mn,m}}const h=Ot;a.call=(m,C,N)=>Wn(m,h,C,N);let f=!1;r==="post"?a.scheduler=m=>{tn(m,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,C)=>{C?m():ld(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=fC(n,e,a);return jo&&(u?u.push(g):c&&g()),g}function XC(n,e,t){const s=this.proxy,i=lt(n)?n.includes(".")?Vy(s,n):()=>s[n]:n.bind(s,s);let r;_e(e)?r=e:(r=e.handler,t=e);const o=ua(this),a=Ly(i,r.bind(s),t);return o(),a}function Vy(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const ZC=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${mn(e)}Modifiers`]||n[`${ii(e)}Modifiers`];function eA(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||je;let i=t;const r=e.startsWith("update:"),o=r&&ZC(s,e.slice(7));o&&(o.trim&&(i=t.map(h=>lt(h)?h.trim():h)),o.number&&(i=t.map(yl)));let a,c=s[a=_u(e)]||s[a=_u(mn(e))];!c&&r&&(c=s[a=_u(ii(e))]),c&&Wn(c,n,6,i);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Wn(u,n,6,i)}}function Fy(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const r=n.emits;let o={},a=!1;if(!_e(n)){const c=u=>{const h=Fy(u,e,!0);h&&(a=!0,Vt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(He(n)&&s.set(n,null),null):(ue(r)?r.forEach(c=>o[c]=null):Vt(o,r),He(n)&&s.set(n,o),o)}function mc(n,e){return!n||!ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(n,e[0].toLowerCase()+e.slice(1))||Fe(n,ii(e))||Fe(n,e))}function Yp(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:g,setupState:m,ctx:C,inheritAttrs:N}=n,D=wl(n);let j,q;try{if(t.shapeFlag&4){const G=i||s,ve=G;j=xn(u.call(ve,G,h,f,m,g,C)),q=a}else{const G=e;j=xn(G.length>1?G(f,{attrs:a,slots:o,emit:c}):G(f,null)),q=e.props?a:tA(a)}}catch(G){Io.length=0,pc(G,n,1),j=Se(bi)}let $=j;if(q&&N!==!1){const G=Object.keys(q),{shapeFlag:ve}=$;G.length&&ve&7&&(r&&G.some(Qh)&&(q=nA(q,r)),$=pr($,q,!1,!0))}return t.dirs&&($=pr($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(t.dirs):t.dirs),t.transition&&cd($,t.transition),j=$,wl(D),j}const tA=n=>{let e;for(const t in n)(t==="class"||t==="style"||ac(t))&&((e||(e={}))[t]=n[t]);return e},nA=(n,e)=>{const t={};for(const s in n)(!Qh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function sA(n,e,t){const{props:s,children:i,component:r}=n,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Jp(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==s[g]&&!mc(u,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Jp(s,o,u):!0:!!o;return!1}function Jp(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==n[r]&&!mc(t,r))return!0}return!1}function iA({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Uy=n=>n.__isSuspense;function rA(n,e){e&&e.pendingBranch?ue(n)?e.effects.push(...n):e.effects.push(n):mC(n)}const ot=Symbol.for("v-fgt"),_c=Symbol.for("v-txt"),bi=Symbol.for("v-cmt"),il=Symbol.for("v-stc"),Io=[];let on=null;function ie(n=!1){Io.push(on=n?null:[])}function oA(){Io.pop(),on=Io[Io.length-1]||null}let Bo=1;function Xp(n,e=!1){Bo+=n,n<0&&on&&e&&(on.hasOnce=!0)}function By(n){return n.dynamicChildren=Bo>0?on||nr:null,oA(),Bo>0&&on&&on.push(n),n}function re(n,e,t,s,i,r){return By(y(n,e,t,s,i,r,!0))}function aA(n,e,t,s,i){return By(Se(n,e,t,s,i,!0))}function Cl(n){return n?n.__v_isVNode===!0:!1}function no(n,e){return n.type===e.type&&n.key===e.key}const jy=({key:n})=>n??null,rl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?lt(n)||Mt(n)||_e(n)?{i:rn,r:n,k:e,f:!!t}:n:null);function y(n,e=null,t=null,s=0,i=null,r=n===ot?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jy(e),ref:e&&rl(e),scopeId:my,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:rn};return a?(fd(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=lt(t)?8:16),Bo>0&&!o&&on&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&on.push(c),c}const Se=lA;function lA(n,e=null,t=null,s=0,i=null,r=!1){if((!n||n===kC)&&(n=bi),Cl(n)){const a=pr(n,e,!0);return t&&fd(a,t),Bo>0&&!r&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(vA(n)&&(n=n.__vccOpts),e){e=cA(e);let{class:a,style:c}=e;a&&!lt(a)&&(e.class=hc(a)),He(c)&&(od(c)&&!ue(c)&&(c=Vt({},c)),e.style=Xh(c))}const o=lt(n)?1:Uy(n)?128:yC(n)?64:He(n)?4:_e(n)?2:0;return y(n,e,t,s,i,o,r,!0)}function cA(n){return n?od(n)||by(n)?Vt({},n):n:null}function pr(n,e,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=n,u=e?uA(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&jy(u),ref:e&&e.ref?t&&r?ue(r)?r.concat(rl(e)):[r,rl(e)]:rl(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ot?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pr(n.ssContent),ssFallback:n.ssFallback&&pr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&cd(h,c.clone(h)),h}function oe(n=" ",e=0){return Se(_c,null,n,e)}function qy(n,e){const t=Se(il,null,n);return t.staticCount=e,t}function Vn(n="",e=!1){return e?(ie(),aA(bi,null,n)):Se(bi,null,n)}function xn(n){return n==null||typeof n=="boolean"?Se(bi):ue(n)?Se(ot,null,n.slice()):Cl(n)?Ps(n):Se(_c,null,String(n))}function Ps(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pr(n)}function fd(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(ue(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fd(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!by(e)?e._ctx=rn:i===3&&rn&&(rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:rn},t=32):(e=String(e),s&64?(t=16,e=[oe(e)]):t=8);n.children=e,n.shapeFlag|=t}function uA(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=hc([e.class,s.class]));else if(i==="style")e.style=Xh([e.style,s.style]);else if(ac(i)){const r=e[i],o=s[i];o&&r!==o&&!(ue(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function kn(n,e,t,s=null){Wn(n,e,7,[t,s])}const hA=Cy();let dA=0;function fA(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||hA,r={uid:dA++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new BI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Py(s,i),emitsOptions:Fy(s,i),emit:null,emitted:null,propsDefaults:je,inheritAttrs:s.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=eA.bind(null,r),n.ce&&n.ce(r),r}let Ot=null,Al,nh;{const n=uc(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Al=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),nh=e("__VUE_SSR_SETTERS__",t=>jo=t)}const ua=n=>{const e=Ot;return Al(n),n.scope.on(),()=>{n.scope.off(),Al(e)}},Zp=()=>{Ot&&Ot.scope.off(),Al(null)};function $y(n){return n.vnode.shapeFlag&4}let jo=!1;function pA(n,e=!1,t=!1){e&&nh(e);const{props:s,children:i}=n.vnode,r=$y(n);BC(n,s,r,e),WC(n,i,t);const o=r?gA(n,e):void 0;return e&&nh(!1),o}function gA(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,DC);const{setup:s}=t;if(s){ri();const i=n.setupContext=s.length>1?_A(n):null,r=ua(n),o=ca(s,n,0,[n.props,i]),a=j_(o);if(oi(),r(),(a||n.sp)&&!wo(n)&&yy(n),a){if(o.then(Zp,Zp),e)return o.then(c=>{eg(n,c)}).catch(c=>{pc(c,n,0)});n.asyncDep=o}else eg(n,o)}else Wy(n)}function eg(n,e,t){_e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:He(e)&&(n.setupState=hy(e)),Wy(n)}function Wy(n,e,t){const s=n.type;n.render||(n.render=s.render||Mn);{const i=ua(n);ri();try{xC(n)}finally{oi(),i()}}}const mA={get(n,e){return kt(n,"get",""),n[e]}};function _A(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,mA),slots:n.slots,emit:n.emit,expose:e}}function yc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hy(oC(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in To)return To[t](n)},has(e,t){return t in e||t in To}})):n.proxy}function yA(n,e=!0){return _e(n)?n.displayName||n.name:n.name||e&&n.__name}function vA(n){return _e(n)&&"__vccOpts"in n}const vn=(n,e)=>hC(n,e,jo);function Hy(n,e,t){const s=arguments.length;return s===2?He(e)&&!ue(e)?Cl(e)?Se(n,null,[e]):Se(n,e):Se(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Cl(t)&&(t=[t]),Se(n,e,t))}const EA="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sh;const tg=typeof window<"u"&&window.trustedTypes;if(tg)try{sh=tg.createPolicy("vue",{createHTML:n=>n})}catch{}const Gy=sh?n=>sh.createHTML(n):n=>n,wA="http://www.w3.org/2000/svg",TA="http://www.w3.org/1998/Math/MathML",Xn=typeof document<"u"?document:null,ng=Xn&&Xn.createElement("template"),IA={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?Xn.createElementNS(wA,n):e==="mathml"?Xn.createElementNS(TA,n):t?Xn.createElement(n,{is:t}):Xn.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>Xn.createTextNode(n),createComment:n=>Xn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{ng.innerHTML=Gy(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=ng.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},CA=Symbol("_vtc");function AA(n,e,t){const s=n[CA];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Rl=Symbol("_vod"),Ky=Symbol("_vsh"),ih={beforeMount(n,{value:e},{transition:t}){n[Rl]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):so(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:s}){!e!=!t&&(s?e?(s.beforeEnter(n),so(n,!0),s.enter(n)):s.leave(n,()=>{so(n,!1)}):so(n,e))},beforeUnmount(n,{value:e}){so(n,e)}};function so(n,e){n.style.display=e?n[Rl]:"none",n[Ky]=!e}const RA=Symbol(""),bA=/(^|;)\s*display\s*:/;function SA(n,e,t){const s=n.style,i=lt(t);let r=!1;if(t&&!i){if(e)if(lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ol(s,a,"")}else for(const o in e)t[o]==null&&ol(s,o,"");for(const o in t)o==="display"&&(r=!0),ol(s,o,t[o])}else if(i){if(e!==t){const o=s[RA];o&&(t+=";"+o),s.cssText=t,r=bA.test(t)}}else e&&n.removeAttribute("style");Rl in n&&(n[Rl]=r?s.display:"",n[Ky]&&(s.display="none"))}const sg=/\s*!important$/;function ol(n,e,t){if(ue(t))t.forEach(s=>ol(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=PA(n,e);sg.test(t)?n.setProperty(ii(s),t.replace(sg,""),"important"):n[s]=t}}const ig=["Webkit","Moz","ms"],Cu={};function PA(n,e){const t=Cu[e];if(t)return t;let s=mn(e);if(s!=="filter"&&s in n)return Cu[e]=s;s=cc(s);for(let i=0;i<ig.length;i++){const r=ig[i]+s;if(r in n)return Cu[e]=r}return e}const rg="http://www.w3.org/1999/xlink";function og(n,e,t,s,i,r=FI(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(rg,e.slice(6,e.length)):n.setAttributeNS(rg,e,t):t==null||r&&!H_(t)?n.removeAttribute(e):n.setAttribute(e,r?"":$n(t)?String(t):t)}function ag(n,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Gy(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=H_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(i||e)}function ts(n,e,t,s){n.addEventListener(e,t,s)}function kA(n,e,t,s){n.removeEventListener(e,t,s)}const lg=Symbol("_vei");function NA(n,e,t,s,i=null){const r=n[lg]||(n[lg]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=DA(e);if(s){const u=r[e]=MA(s,i);ts(n,a,u,c)}else o&&(kA(n,a,o,c),r[e]=void 0)}}const cg=/(?:Once|Passive|Capture)$/;function DA(n){let e;if(cg.test(n)){e={};let s;for(;s=n.match(cg);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ii(n.slice(2)),e]}let Au=0;const xA=Promise.resolve(),OA=()=>Au||(xA.then(()=>Au=0),Au=Date.now());function MA(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Wn(LA(s,t.value),e,5,[s])};return t.value=n,t.attached=OA(),t}function LA(n,e){if(ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ug=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,VA=(n,e,t,s,i,r)=>{const o=i==="svg";e==="class"?AA(n,s,o):e==="style"?SA(n,t,s):ac(e)?Qh(e)||NA(n,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):FA(n,e,s,o))?(ag(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&og(n,e,s,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!lt(s))?ag(n,mn(e),s,r,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),og(n,e,s,o))};function FA(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&ug(e)&&_e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ug(e)&&lt(t)?!1:e in n}const Hs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ue(e)?t=>tl(e,t):e};function UA(n){n.target.composing=!0}function hg(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gn=Symbol("_assign"),ut={created(n,{modifiers:{lazy:e,trim:t,number:s}},i){n[gn]=Hs(i);const r=s||i.props&&i.props.type==="number";ts(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=yl(a)),n[gn](a)}),t&&ts(n,"change",()=>{n.value=n.value.trim()}),e||(ts(n,"compositionstart",UA),ts(n,"compositionend",hg),ts(n,"change",hg))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:i,number:r}},o){if(n[gn]=Hs(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?yl(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||i&&n.value.trim()===c)||(n.value=c))}},BA={deep:!0,created(n,e,t){n[gn]=Hs(t),ts(n,"change",()=>{const s=n._modelValue,i=gr(n),r=n.checked,o=n[gn];if(ue(s)){const a=Zh(s,i),c=a!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Nr(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(zy(n,r))})},mounted:dg,beforeUpdate(n,e,t){n[gn]=Hs(t),dg(n,e,t)}};function dg(n,{value:e,oldValue:t},s){n._modelValue=e;let i;if(ue(e))i=Zh(e,s.props.value)>-1;else if(Nr(e))i=e.has(s.props.value);else{if(e===t)return;i=Ai(e,zy(n,!0))}n.checked!==i&&(n.checked=i)}const io={created(n,{value:e},t){n.checked=Ai(e,t.props.value),n[gn]=Hs(t),ts(n,"change",()=>{n[gn](gr(n))})},beforeUpdate(n,{value:e,oldValue:t},s){n[gn]=Hs(s),e!==t&&(n.checked=Ai(e,s.props.value))}},Co={deep:!0,created(n,{value:e,modifiers:{number:t}},s){const i=Nr(e);ts(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?yl(gr(o)):gr(o));n[gn](n.multiple?i?new Set(r):r:r[0]),n._assigning=!0,ad(()=>{n._assigning=!1})}),n[gn]=Hs(s)},mounted(n,{value:e}){fg(n,e)},beforeUpdate(n,e,t){n[gn]=Hs(t)},updated(n,{value:e}){n._assigning||fg(n,e)}};function fg(n,e){const t=n.multiple,s=ue(e);if(!(t&&!s&&!Nr(e))){for(let i=0,r=n.options.length;i<r;i++){const o=n.options[i],a=gr(o);if(t)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Zh(e,a)>-1}else o.selected=e.has(a);else if(Ai(gr(o),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function gr(n){return"_value"in n?n._value:n.value}function zy(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const jA=["ctrl","shift","alt","meta"],qA={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>jA.some(t=>n[`${t}Key`]&&!e.includes(t))},Ci=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=qA[e[o]];if(a&&a(i,e))return}return n(i,...r)})},$A={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},WA=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=i=>{if(!("key"in i))return;const r=ii(i.key);if(e.some(o=>o===r||$A[o]===r))return n(i)})},HA=Vt({patchProp:VA},IA);let pg;function GA(){return pg||(pg=GC(HA))}const KA=(...n)=>{const e=GA().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=QA(s);if(!i)return;const r=e._component;!_e(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,zA(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zA(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function QA(n){return lt(n)?document.querySelector(n):n}const Gt=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t},YA={name:"App"},JA={id:"app"};function XA(n,e,t,s,i,r){const o=Ht("router-view");return ie(),re("div",JA,[Se(o)])}const ZA=Gt(YA,[["render",XA]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zi=typeof document<"u";function Qy(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function eR(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Qy(n.default)}const Le=Object.assign;function Ru(n,e){const t={};for(const s in e){const i=e[s];t[s]=Rn(i)?i.map(n):n(i)}return t}const Ao=()=>{},Rn=Array.isArray,Yy=/#/g,tR=/&/g,nR=/\//g,sR=/=/g,iR=/\?/g,Jy=/\+/g,rR=/%5B/g,oR=/%5D/g,Xy=/%5E/g,aR=/%60/g,Zy=/%7B/g,lR=/%7C/g,ev=/%7D/g,cR=/%20/g;function pd(n){return encodeURI(""+n).replace(lR,"|").replace(rR,"[").replace(oR,"]")}function uR(n){return pd(n).replace(Zy,"{").replace(ev,"}").replace(Xy,"^")}function rh(n){return pd(n).replace(Jy,"%2B").replace(cR,"+").replace(Yy,"%23").replace(tR,"%26").replace(aR,"`").replace(Zy,"{").replace(ev,"}").replace(Xy,"^")}function hR(n){return rh(n).replace(sR,"%3D")}function dR(n){return pd(n).replace(Yy,"%23").replace(iR,"%3F")}function fR(n){return n==null?"":dR(n).replace(nR,"%2F")}function qo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const pR=/\/$/,gR=n=>n.replace(pR,"");function bu(n,e,t="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=n(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=vR(s??e,t),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:qo(o)}}function mR(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function gg(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function _R(n,e,t){const s=e.matched.length-1,i=t.matched.length-1;return s>-1&&s===i&&mr(e.matched[s],t.matched[i])&&tv(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function mr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function tv(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!yR(n[t],e[t]))return!1;return!0}function yR(n,e){return Rn(n)?mg(n,e):Rn(e)?mg(e,n):n===e}function mg(n,e){return Rn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function vR(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Rs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $o;(function(n){n.pop="pop",n.push="push"})($o||($o={}));var Ro;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ro||(Ro={}));function ER(n){if(!n)if(zi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),gR(n)}const wR=/^[^#]+#/;function TR(n,e){return n.replace(wR,"#")+e}function IR(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const vc=()=>({left:window.scrollX,top:window.scrollY});function CR(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=IR(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _g(n,e){return(history.state?history.state.position-e:-1)+n}const oh=new Map;function AR(n,e){oh.set(n,e)}function RR(n){const e=oh.get(n);return oh.delete(n),e}let bR=()=>location.protocol+"//"+location.host;function nv(n,e){const{pathname:t,search:s,hash:i}=e,r=n.indexOf("#");if(r>-1){let a=i.includes(n.slice(r))?n.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),gg(c,"")}return gg(t,n)+s+i}function SR(n,e,t,s){let i=[],r=[],o=null;const a=({state:g})=>{const m=nv(n,location),C=t.value,N=e.value;let D=0;if(g){if(t.value=m,e.value=g,o&&o===C){o=null;return}D=N?g.position-N.position:0}else s(m);i.forEach(j=>{j(t.value,C,{delta:D,type:$o.pop,direction:D?D>0?Ro.forward:Ro.back:Ro.unknown})})};function c(){o=t.value}function u(g){i.push(g);const m=()=>{const C=i.indexOf(g);C>-1&&i.splice(C,1)};return r.push(m),m}function h(){const{history:g}=window;g.state&&g.replaceState(Le({},g.state,{scroll:vc()}),"")}function f(){for(const g of r)g();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function yg(n,e,t,s=!1,i=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:i?vc():null}}function PR(n){const{history:e,location:t}=window,s={value:nv(n,t)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,h){const f=n.indexOf("#"),g=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:bR()+n+c;try{e[h?"replaceState":"pushState"](u,"",g),i.value=u}catch(m){console.error(m),t[h?"replace":"assign"](g)}}function o(c,u){const h=Le({},e.state,yg(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,h,!0),s.value=c}function a(c,u){const h=Le({},i.value,e.state,{forward:c,scroll:vc()});r(h.current,h,!0);const f=Le({},yg(s.value,c,null),{position:h.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function kR(n){n=ER(n);const e=PR(n),t=SR(n,e.state,e.location,e.replace);function s(r,o=!0){o||t.pauseListeners(),history.go(r)}const i=Le({location:"",base:n,go:s,createHref:TR.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function NR(n){return typeof n=="string"||n&&typeof n=="object"}function sv(n){return typeof n=="string"||typeof n=="symbol"}const iv=Symbol("");var vg;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(vg||(vg={}));function _r(n,e){return Le(new Error,{type:n,[iv]:!0},e)}function Yn(n,e){return n instanceof Error&&iv in n&&(e==null||!!(n.type&e))}const Eg="[^/]+?",DR={sensitive:!1,strict:!1,start:!0,end:!0},xR=/[.+*?^${}()[\]/\\]/g;function OR(n,e){const t=Le({},DR,e),s=[];let i=t.start?"^":"";const r=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(t.sensitive?.25:0);if(g.type===0)f||(i+="/"),i+=g.value.replace(xR,"\\$&"),m+=40;else if(g.type===1){const{value:C,repeatable:N,optional:D,regexp:j}=g;r.push({name:C,repeatable:N,optional:D});const q=j||Eg;if(q!==Eg){m+=10;try{new RegExp(`(${q})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${C}" (${q}): `+G.message)}}let $=N?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;f||($=D&&u.length<2?`(?:/${$})`:"/"+$),D&&($+="?"),i+=$,m+=20,D&&(m+=-8),N&&(m+=-20),q===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",C=r[g-1];f[C.name]=m&&C.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const g of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of g)if(m.type===0)h+=m.value;else if(m.type===1){const{value:C,repeatable:N,optional:D}=m,j=C in u?u[C]:"";if(Rn(j)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const q=Rn(j)?j.join("/"):j;if(!q)if(D)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);h+=q}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function MR(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function rv(n,e){let t=0;const s=n.score,i=e.score;for(;t<s.length&&t<i.length;){const r=MR(s[t],i[t]);if(r)return r;t++}if(Math.abs(i.length-s.length)===1){if(wg(s))return 1;if(wg(i))return-1}return i.length-s.length}function wg(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const LR={type:0,value:""},VR=/[a-zA-Z0-9_]/;function FR(n){if(!n)return[[]];if(n==="/")return[[LR]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=0,s=t;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,u="",h="";function f(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):g();break;case 4:g(),t=s;break;case 1:c==="("?t=2:VR.test(c)?g():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function UR(n,e,t){const s=OR(FR(n.path),t),i=Le(s,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function BR(n,e){const t=[],s=new Map;e=Ag({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,g,m){const C=!m,N=Ig(f);N.aliasOf=m&&m.record;const D=Ag(e,f),j=[N];if("alias"in f){const G=typeof f.alias=="string"?[f.alias]:f.alias;for(const ve of G)j.push(Ig(Le({},N,{components:m?m.record.components:N.components,path:ve,aliasOf:m?m.record:N})))}let q,$;for(const G of j){const{path:ve}=G;if(g&&ve[0]!=="/"){const Ee=g.record.path,A=Ee[Ee.length-1]==="/"?"":"/";G.path=g.record.path+(ve&&A+ve)}if(q=UR(G,g,D),m?m.alias.push(q):($=$||q,$!==q&&$.alias.push(q),C&&f.name&&!Cg(q)&&o(f.name)),ov(q)&&c(q),N.children){const Ee=N.children;for(let A=0;A<Ee.length;A++)r(Ee[A],q,m&&m.children[A])}m=m||q}return $?()=>{o($)}:Ao}function o(f){if(sv(f)){const g=s.get(f);g&&(s.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const g=$R(f,t);t.splice(g,0,f),f.record.name&&!Cg(f)&&s.set(f.record.name,f)}function u(f,g){let m,C={},N,D;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw _r(1,{location:f});D=m.record.name,C=Le(Tg(g.params,m.keys.filter($=>!$.optional).concat(m.parent?m.parent.keys.filter($=>$.optional):[]).map($=>$.name)),f.params&&Tg(f.params,m.keys.map($=>$.name))),N=m.stringify(C)}else if(f.path!=null)N=f.path,m=t.find($=>$.re.test(N)),m&&(C=m.parse(N),D=m.record.name);else{if(m=g.name?s.get(g.name):t.find($=>$.re.test(g.path)),!m)throw _r(1,{location:f,currentLocation:g});D=m.record.name,C=Le({},g.params,f.params),N=m.stringify(C)}const j=[];let q=m;for(;q;)j.unshift(q.record),q=q.parent;return{name:D,path:N,params:C,matched:j,meta:qR(j)}}n.forEach(f=>r(f));function h(){t.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function Tg(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function Ig(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:jR(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jR(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function Cg(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function qR(n){return n.reduce((e,t)=>Le(e,t.meta),{})}function Ag(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function $R(n,e){let t=0,s=e.length;for(;t!==s;){const r=t+s>>1;rv(n,e[r])<0?s=r:t=r+1}const i=WR(n);return i&&(s=e.lastIndexOf(i,s-1)),s}function WR(n){let e=n;for(;e=e.parent;)if(ov(e)&&rv(n,e)===0)return e}function ov({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function HR(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Jy," "),o=r.indexOf("="),a=qo(o<0?r:r.slice(0,o)),c=o<0?null:qo(r.slice(o+1));if(a in e){let u=e[a];Rn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Rg(n){let e="";for(let t in n){const s=n[t];if(t=hR(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Rn(s)?s.map(r=>r&&rh(r)):[s&&rh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function GR(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Rn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const KR=Symbol(""),bg=Symbol(""),Ec=Symbol(""),av=Symbol(""),ah=Symbol("");function ro(){let n=[];function e(s){return n.push(s),()=>{const i=n.indexOf(s);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ks(n,e,t,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(_r(4,{from:t,to:e})):g instanceof Error?c(g):NR(g)?c(_r(2,{from:e,to:g})):(o&&s.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),a())},h=r(()=>n.call(s&&s.instances[i],e,t,u));let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Su(n,e,t,s,i=r=>r()){const r=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Qy(c)){const h=(c.__vccOpts||c)[e];h&&r.push(ks(h,t,s,o,a,i))}else{let u=c();r.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=eR(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&ks(m,t,s,o,a,i)()}))}}return r}function Sg(n){const e=Ln(Ec),t=Ln(av),s=vn(()=>{const c=rr(n.to);return e.resolve(c)}),i=vn(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=t.matched;if(!h||!f.length)return-1;const g=f.findIndex(mr.bind(null,h));if(g>-1)return g;const m=Pg(c[u-2]);return u>1&&Pg(h)===m&&f[f.length-1].path!==m?f.findIndex(mr.bind(null,c[u-2])):g}),r=vn(()=>i.value>-1&&XR(t.params,s.value.params)),o=vn(()=>i.value>-1&&i.value===t.matched.length-1&&tv(t.params,s.value.params));function a(c={}){if(JR(c)){const u=e[rr(n.replace)?"replace":"push"](rr(n.to)).catch(Ao);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:vn(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function zR(n){return n.length===1?n[0]:n}const QR=_y({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sg,setup(n,{slots:e}){const t=fc(Sg(n)),{options:s}=Ln(Ec),i=vn(()=>({[kg(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[kg(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&zR(e.default(t));return n.custom?r:Hy("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},r)}}}),YR=QR;function JR(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function XR(n,e){for(const t in e){const s=e[t],i=n[t];if(typeof s=="string"){if(s!==i)return!1}else if(!Rn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Pg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const kg=(n,e,t)=>n??e??t,ZR=_y({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Ln(ah),i=vn(()=>n.route||s.value),r=Ln(bg,0),o=vn(()=>{let u=rr(r);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=vn(()=>i.value.matched[o.value]);nl(bg,vn(()=>o.value+1)),nl(KR,a),nl(ah,i);const c=qt();return sl(()=>[c.value,a.value,n.name],([u,h,f],[g,m,C])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!mr(h,m)||!g)&&(h.enterCallbacks[f]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=i.value,h=n.name,f=a.value,g=f&&f.components[h];if(!g)return Ng(t.default,{Component:g,route:u});const m=f.props[h],C=m?m===!0?u.params:typeof m=="function"?m(u):m:null,D=Hy(g,Le({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Ng(t.default,{Component:D,route:u})||D}}});function Ng(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const eb=ZR;function tb(n){const e=BR(n.routes,n),t=n.parseQuery||HR,s=n.stringifyQuery||Rg,i=n.history,r=ro(),o=ro(),a=ro(),c=aC(Rs);let u=Rs;zi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ru.bind(null,O=>""+O),f=Ru.bind(null,fR),g=Ru.bind(null,qo);function m(O,X){let Y,te;return sv(O)?(Y=e.getRecordMatcher(O),te=X):te=O,e.addRoute(te,Y)}function C(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function N(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function j(O,X){if(X=Le({},X||c.value),typeof O=="string"){const S=bu(t,O,X.path),M=e.resolve({path:S.path},X),U=i.createHref(S.fullPath);return Le(S,M,{params:g(M.params),hash:qo(S.hash),redirectedFrom:void 0,href:U})}let Y;if(O.path!=null)Y=Le({},O,{path:bu(t,O.path,X.path).path});else{const S=Le({},O.params);for(const M in S)S[M]==null&&delete S[M];Y=Le({},O,{params:f(S)}),X.params=f(X.params)}const te=e.resolve(Y,X),xe=O.hash||"";te.params=h(g(te.params));const E=mR(s,Le({},O,{hash:uR(xe),path:te.path})),w=i.createHref(E);return Le({fullPath:E,hash:xe,query:s===Rg?GR(O.query):O.query||{}},te,{redirectedFrom:void 0,href:w})}function q(O){return typeof O=="string"?bu(t,O,c.value.path):Le({},O)}function $(O,X){if(u!==O)return _r(8,{from:X,to:O})}function G(O){return A(O)}function ve(O){return G(Le(q(O),{replace:!0}))}function Ee(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:Y}=X;let te=typeof Y=="function"?Y(O):Y;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=q(te):{path:te},te.params={}),Le({query:O.query,hash:O.hash,params:te.path!=null?{}:O.params},te)}}function A(O,X){const Y=u=j(O),te=c.value,xe=O.state,E=O.force,w=O.replace===!0,S=Ee(Y);if(S)return A(Le(q(S),{state:typeof S=="object"?Le({},xe,S.state):xe,force:E,replace:w}),X||Y);const M=Y;M.redirectedFrom=X;let U;return!E&&_R(s,te,Y)&&(U=_r(16,{to:M,from:te}),hn(te,te,!0,!1)),(U?Promise.resolve(U):R(M,te)).catch(V=>Yn(V)?Yn(V,2)?V:_n(V):Ae(V,M,te)).then(V=>{if(V){if(Yn(V,2))return A(Le({replace:w},q(V.to),{state:typeof V.to=="object"?Le({},xe,V.to.state):xe,force:E}),X||M)}else V=P(M,te,!0,w,xe);return b(M,te,V),V})}function v(O,X){const Y=$(O,X);return Y?Promise.reject(Y):Promise.resolve()}function I(O){const X=ws.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function R(O,X){let Y;const[te,xe,E]=nb(O,X);Y=Su(te.reverse(),"beforeRouteLeave",O,X);for(const S of te)S.leaveGuards.forEach(M=>{Y.push(ks(M,O,X))});const w=v.bind(null,O,X);return Y.push(w),Kt(Y).then(()=>{Y=[];for(const S of r.list())Y.push(ks(S,O,X));return Y.push(w),Kt(Y)}).then(()=>{Y=Su(xe,"beforeRouteUpdate",O,X);for(const S of xe)S.updateGuards.forEach(M=>{Y.push(ks(M,O,X))});return Y.push(w),Kt(Y)}).then(()=>{Y=[];for(const S of E)if(S.beforeEnter)if(Rn(S.beforeEnter))for(const M of S.beforeEnter)Y.push(ks(M,O,X));else Y.push(ks(S.beforeEnter,O,X));return Y.push(w),Kt(Y)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),Y=Su(E,"beforeRouteEnter",O,X,I),Y.push(w),Kt(Y))).then(()=>{Y=[];for(const S of o.list())Y.push(ks(S,O,X));return Y.push(w),Kt(Y)}).catch(S=>Yn(S,8)?S:Promise.reject(S))}function b(O,X,Y){a.list().forEach(te=>I(()=>te(O,X,Y)))}function P(O,X,Y,te,xe){const E=$(O,X);if(E)return E;const w=X===Rs,S=zi?history.state:{};Y&&(te||w?i.replace(O.fullPath,Le({scroll:w&&S&&S.scroll},xe)):i.push(O.fullPath,xe)),c.value=O,hn(O,X,Y,w),_n()}let T;function Ut(){T||(T=i.listen((O,X,Y)=>{if(!Pn.listening)return;const te=j(O),xe=Ee(te);if(xe){A(Le(xe,{replace:!0,force:!0}),te).catch(Ao);return}u=te;const E=c.value;zi&&AR(_g(E.fullPath,Y.delta),vc()),R(te,E).catch(w=>Yn(w,12)?w:Yn(w,2)?(A(Le(q(w.to),{force:!0}),te).then(S=>{Yn(S,20)&&!Y.delta&&Y.type===$o.pop&&i.go(-1,!1)}).catch(Ao),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),Ae(w,te,E))).then(w=>{w=w||P(te,E,!1),w&&(Y.delta&&!Yn(w,8)?i.go(-Y.delta,!1):Y.type===$o.pop&&Yn(w,20)&&i.go(-1,!1)),b(te,E,w)}).catch(Ao)}))}let un=ro(),st=ro(),Pe;function Ae(O,X,Y){_n(O);const te=st.list();return te.length?te.forEach(xe=>xe(O,X,Y)):console.error(O),Promise.reject(O)}function Zt(){return Pe&&c.value!==Rs?Promise.resolve():new Promise((O,X)=>{un.add([O,X])})}function _n(O){return Pe||(Pe=!O,Ut(),un.list().forEach(([X,Y])=>O?Y(O):X()),un.reset()),O}function hn(O,X,Y,te){const{scrollBehavior:xe}=n;if(!zi||!xe)return Promise.resolve();const E=!Y&&RR(_g(O.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return ad().then(()=>xe(O,X,E)).then(w=>w&&CR(w)).catch(w=>Ae(w,O,X))}const Je=O=>i.go(O);let Xe;const ws=new Set,Pn={currentRoute:c,listening:!0,addRoute:m,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:j,options:n,push:G,replace:ve,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:st.add,isReady:Zt,install(O){const X=this;O.component("RouterLink",YR),O.component("RouterView",eb),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>rr(c)}),zi&&!Xe&&c.value===Rs&&(Xe=!0,G(i.location).catch(xe=>{}));const Y={};for(const xe in Rs)Object.defineProperty(Y,xe,{get:()=>c.value[xe],enumerable:!0});O.provide(Ec,X),O.provide(av,ly(Y)),O.provide(ah,c);const te=O.unmount;ws.add(O),O.unmount=function(){ws.delete(O),ws.size<1&&(u=Rs,T&&T(),T=null,c.value=Rs,Xe=!1,Pe=!1),te()}}};function Kt(O){return O.reduce((X,Y)=>X.then(()=>I(Y)),Promise.resolve())}return Pn}function nb(n,e){const t=[],s=[],i=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(u=>mr(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>mr(u,c))||i.push(c))}return[t,s,i]}function wc(){return Ln(Ec)}const sb=()=>{};var Dg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e){if(!n)throw Dr(e)},Dr=function(n){return new Error("Firebase Database ("+lv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ib=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),s.push(t[h],t[f],t[g],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ib(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw new rb;const g=r<<2|a>>4;if(s.push(g),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const C=u<<6&192|f;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uv=function(n){const e=cv(n);return gd.encodeByteArray(e,!0)},bl=function(n){return uv(n).replace(/\./g,"")},Sl=function(n){try{return gd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(n){return hv(void 0,n)}function hv(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ab(t)||(n[t]=hv(n[t],e[t]));return n}function ab(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=()=>lb().__FIREBASE_DEFAULTS__,ub=()=>{if(typeof process>"u"||typeof Dg>"u")return;const n=Dg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sl(n[1]);return e&&JSON.parse(e)},Tc=()=>{try{return sb()||cb()||ub()||hb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dv=n=>{var e,t;return(t=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fv=n=>{const e=dv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},pv=()=>{var n;return(n=Tc())===null||n===void 0?void 0:n.config},gv=n=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bl(JSON.stringify(t)),bl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function db(){var n;const e=(n=Tc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gb(){const n=Ft();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mb(){return lv.NODE_ADMIN===!0}function _b(){return!db()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yb(){try{return typeof indexedDB=="object"}catch{return!1}}function vb(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="FirebaseError";class _s extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Eb,Object.setPrototypeOf(this,_s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?wb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _s(i,a,s)}}function wb(n,e){return n.replace(Tb,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Tb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n){return JSON.parse(n)}function ht(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Wo(Sl(r[0])||""),t=Wo(Sl(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ib=function(n){const e=yv(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Cb=function(n){const e=yv(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function yr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function lh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pl(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Gs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(xg(r)&&xg(o)){if(!Gs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function xg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ho(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function fo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):f<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const g=(i<<5|i>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Rb(n,e){const t=new bb(n,e);return t.subscribe.bind(t)}class bb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Sb(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pu(){}function vv(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,H(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ic=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Ks{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new md;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Db(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nb(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nb(n){return n===vi?void 0:n}function Db(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const Ob={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Mb=Ie.INFO,Lb={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Vb=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Lb[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=Mb,this._logHandler=Vb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const Fb=(n,e)=>e.some(t=>n instanceof t);let Og,Mg;function Ub(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bb(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ev=new WeakMap,ch=new WeakMap,wv=new WeakMap,ku=new WeakMap,yd=new WeakMap;function jb(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Vs(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ev.set(t,n)}).catch(()=>{}),yd.set(e,n),e}function qb(n){if(ch.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ch.set(n,e)}let uh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ch.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $b(n){uh=n(uh)}function Wb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Nu(this),e,...t);return wv.set(s,e.sort?e.sort():[e]),Vs(s)}:Bb().includes(n)?function(...e){return n.apply(Nu(this),e),Vs(Ev.get(this))}:function(...e){return Vs(n.apply(Nu(this),e))}}function Hb(n){return typeof n=="function"?Wb(n):(n instanceof IDBTransaction&&qb(n),Fb(n,Ub())?new Proxy(n,uh):n)}function Vs(n){if(n instanceof IDBRequest)return jb(n);if(ku.has(n))return ku.get(n);const e=Hb(n);return e!==n&&(ku.set(n,e),yd.set(e,n)),e}const Nu=n=>yd.get(n);function Gb(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Vs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Vs(o.result),c.oldVersion,c.newVersion,Vs(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Kb=["get","getKey","getAll","getAllKeys","count"],zb=["put","add","delete","clear"],Du=new Map;function Lg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Du.get(e))return Du.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=zb.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kb.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Du.set(e,r),r}$b(n=>({...n,get:(e,t,s)=>Lg(e,t)||n.get(e,t,s),has:(e,t)=>!!Lg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yb(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Yb(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hh="@firebase/app",Vg="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Cc("@firebase/app"),Jb="@firebase/app-compat",Xb="@firebase/analytics-compat",Zb="@firebase/analytics",eS="@firebase/app-check-compat",tS="@firebase/app-check",nS="@firebase/auth",sS="@firebase/auth-compat",iS="@firebase/database",rS="@firebase/data-connect",oS="@firebase/database-compat",aS="@firebase/functions",lS="@firebase/functions-compat",cS="@firebase/installations",uS="@firebase/installations-compat",hS="@firebase/messaging",dS="@firebase/messaging-compat",fS="@firebase/performance",pS="@firebase/performance-compat",gS="@firebase/remote-config",mS="@firebase/remote-config-compat",_S="@firebase/storage",yS="@firebase/storage-compat",vS="@firebase/firestore",ES="@firebase/vertexai",wS="@firebase/firestore-compat",TS="firebase",IS="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="[DEFAULT]",CS={[hh]:"fire-core",[Jb]:"fire-core-compat",[Zb]:"fire-analytics",[Xb]:"fire-analytics-compat",[tS]:"fire-app-check",[eS]:"fire-app-check-compat",[nS]:"fire-auth",[sS]:"fire-auth-compat",[iS]:"fire-rtdb",[rS]:"fire-data-connect",[oS]:"fire-rtdb-compat",[aS]:"fire-fn",[lS]:"fire-fn-compat",[cS]:"fire-iid",[uS]:"fire-iid-compat",[hS]:"fire-fcm",[dS]:"fire-fcm-compat",[fS]:"fire-perf",[pS]:"fire-perf-compat",[gS]:"fire-rc",[mS]:"fire-rc-compat",[_S]:"fire-gcs",[yS]:"fire-gcs-compat",[vS]:"fire-fst",[wS]:"fire-fst-compat",[ES]:"fire-vertex","fire-js":"fire-js",[TS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Map,AS=new Map,fh=new Map;function Fg(n,e){try{n.container.addComponent(e)}catch(t){us.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Si(n){const e=n.name;if(fh.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;fh.set(e,n);for(const t of kl.values())Fg(t,n);for(const t of AS.values())Fg(t,n);return!0}function Ac(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function sn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fs=new ha("app","Firebase",RS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=IS;function Tv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Fs.create("bad-app-name",{appName:String(i)});if(t||(t=pv()),!t)throw Fs.create("no-options");const r=kl.get(i);if(r){if(Gs(t,r.options)&&Gs(s,r.config))return r;throw Fs.create("duplicate-app",{appName:i})}const o=new xb(i);for(const c of fh.values())o.addComponent(c);const a=new bS(t,s,o);return kl.set(i,a),a}function vd(n=dh){const e=kl.get(n);if(!e&&n===dh&&pv())return Tv();if(!e)throw Fs.create("no-app",{appName:n});return e}function Fn(n,e,t){var s;let i=(s=CS[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}Si(new Ks(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebase-heartbeat-database",PS=1,Ho="firebase-heartbeat-store";let xu=null;function Iv(){return xu||(xu=Gb(SS,PS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ho)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fs.create("idb-open",{originalErrorMessage:n.message})})),xu}async function kS(n){try{const t=(await Iv()).transaction(Ho),s=await t.objectStore(Ho).get(Cv(n));return await t.done,s}catch(e){if(e instanceof _s)us.warn(e.message);else{const t=Fs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(t.message)}}}async function Ug(n,e){try{const s=(await Iv()).transaction(Ho,"readwrite");await s.objectStore(Ho).put(e,Cv(n)),await s.done}catch(t){if(t instanceof _s)us.warn(t.message);else{const s=Fs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});us.warn(s.message)}}}function Cv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=1024,DS=30;class xS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MS(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>DS){const o=LS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){us.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bg(),{heartbeatsToSend:s,unsentEntries:i}=OS(this._heartbeatsCache.heartbeats),r=bl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return us.warn(t),""}}}function Bg(){return new Date().toISOString().substring(0,10)}function OS(n,e=NS){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),jg(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class MS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yb()?vb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jg(n){return bl(JSON.stringify({version:2,heartbeats:n})).length}function LS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(n){Si(new Ks("platform-logger",e=>new Qb(e),"PRIVATE")),Si(new Ks("heartbeat",e=>new xS(e),"PRIVATE")),Fn(hh,Vg,n),Fn(hh,Vg,"esm2017"),Fn("fire-js","")}VS("");var FS="firebase",US="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(FS,US,"app");var qg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Us,Av;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function I(){}I.prototype=v.prototype,A.D=v.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(R,b,P){for(var T=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)T[Ut-2]=arguments[Ut];return v.prototype[b].apply(R,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,I){I||(I=0);var R=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)R[b]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(b=0;16>b;++b)R[b]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=A.g[0],I=A.g[1],b=A.g[2];var P=A.g[3],T=v+(P^I&(b^P))+R[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+R[1]+3905402710&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+R[2]+606105819&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+R[3]+3250441966&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(P^I&(b^P))+R[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+R[5]+1200080426&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+R[6]+2821735955&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+R[7]+4249261313&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(P^I&(b^P))+R[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+R[9]+2336552879&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+R[10]+4294925233&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+R[11]+2304563134&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(P^I&(b^P))+R[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=P+(b^v&(I^b))+R[13]+4254626195&4294967295,P=v+(T<<12&4294967295|T>>>20),T=b+(I^P&(v^I))+R[14]+2792965006&4294967295,b=P+(T<<17&4294967295|T>>>15),T=I+(v^b&(P^v))+R[15]+1236535329&4294967295,I=b+(T<<22&4294967295|T>>>10),T=v+(b^P&(I^b))+R[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+R[6]+3225465664&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+R[11]+643717713&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+R[0]+3921069994&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(I^b))+R[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+R[10]+38016083&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+R[15]+3634488961&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+R[4]+3889429448&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(I^b))+R[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+R[14]+3275163606&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+R[3]+4107603335&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+R[8]+1163531501&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(b^P&(I^b))+R[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=P+(I^b&(v^I))+R[2]+4243563512&4294967295,P=v+(T<<9&4294967295|T>>>23),T=b+(v^I&(P^v))+R[7]+1735328473&4294967295,b=P+(T<<14&4294967295|T>>>18),T=I+(P^v&(b^P))+R[12]+2368359562&4294967295,I=b+(T<<20&4294967295|T>>>12),T=v+(I^b^P)+R[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+R[8]+2272392833&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+R[11]+1839030562&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+R[14]+4259657740&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^P)+R[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+R[4]+1272893353&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+R[7]+4139469664&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+R[10]+3200236656&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^P)+R[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+R[0]+3936430074&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+R[3]+3572445317&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+R[6]+76029189&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(I^b^P)+R[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=P+(v^I^b)+R[12]+3873151461&4294967295,P=v+(T<<11&4294967295|T>>>21),T=b+(P^v^I)+R[15]+530742520&4294967295,b=P+(T<<16&4294967295|T>>>16),T=I+(b^P^v)+R[2]+3299628645&4294967295,I=b+(T<<23&4294967295|T>>>9),T=v+(b^(I|~P))+R[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+R[7]+1126891415&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+R[14]+2878612391&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+R[5]+4237533241&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~P))+R[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+R[3]+2399980690&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+R[10]+4293915773&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+R[1]+2240044497&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~P))+R[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+R[15]+4264355552&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+R[6]+2734768916&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+R[13]+1309151649&4294967295,I=b+(T<<21&4294967295|T>>>11),T=v+(b^(I|~P))+R[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=P+(I^(v|~b))+R[11]+3174756917&4294967295,P=v+(T<<10&4294967295|T>>>22),T=b+(v^(P|~I))+R[2]+718787259&4294967295,b=P+(T<<15&4294967295|T>>>17),T=I+(P^(b|~v))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+P&4294967295}s.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var I=v-this.blockSize,R=this.B,b=this.h,P=0;P<v;){if(b==0)for(;P<=I;)i(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<v;)if(R[b++]=A.charCodeAt(P++),b==this.blockSize){i(this,R),b=0;break}}else for(;P<v;)if(R[b++]=A[P++],b==this.blockSize){i(this,R),b=0;break}}this.h=b,this.o+=v},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var I=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=I&255,I/=256;for(this.u(A),A=Array(16),v=I=0;4>v;++v)for(var R=0;32>R;R+=8)A[I++]=this.g[v]>>>R&255;return A};function r(A,v){var I=a;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=v(A)}function o(A,v){this.h=v;for(var I=[],R=!0,b=A.length-1;0<=b;b--){var P=A[b]|0;R&&P==v||(I[b]=P,R=!1)}this.g=I}var a={};function c(A){return-128<=A&&128>A?r(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return f;if(0>A)return D(u(-A));for(var v=[],I=1,R=0;A>=I;R++)v[R]=A/I|0,I*=4294967296;return new o(v,0)}function h(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return D(h(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(v,8)),R=f,b=0;b<A.length;b+=8){var P=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+P),v);8>P?(P=u(Math.pow(v,P)),R=R.j(P).add(u(T))):(R=R.j(I),R=R.add(u(T)))}return R}var f=c(0),g=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(N(this))return-D(this).m();for(var A=0,v=1,I=0;I<this.g.length;I++){var R=this.i(I);A+=(0<=R?R:4294967296+R)*v,v*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(N(this))return"-"+D(this).toString(A);for(var v=u(Math.pow(A,6)),I=this,R="";;){var b=G(I,v).g;I=j(I,b.j(v));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=b,C(I))return P+R;for(;6>P.length;)P="0"+P;R=P+R}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function N(A){return A.h==-1}n.l=function(A){return A=j(this,A),N(A)?-1:C(A)?0:1};function D(A){for(var v=A.g.length,I=[],R=0;R<v;R++)I[R]=~A.g[R];return new o(I,~A.h).add(g)}n.abs=function(){return N(this)?D(this):this},n.add=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0,b=0;b<=v;b++){var P=R+(this.i(b)&65535)+(A.i(b)&65535),T=(P>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);R=T>>>16,P&=65535,T&=65535,I[b]=T<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function j(A,v){return A.add(D(v))}n.j=function(A){if(C(this)||C(A))return f;if(N(this))return N(A)?D(this).j(D(A)):D(D(this).j(A));if(N(A))return D(this.j(D(A)));if(0>this.l(m)&&0>A.l(m))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,I=[],R=0;R<2*v;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<A.g.length;b++){var P=this.i(R)>>>16,T=this.i(R)&65535,Ut=A.i(b)>>>16,un=A.i(b)&65535;I[2*R+2*b]+=T*un,q(I,2*R+2*b),I[2*R+2*b+1]+=P*un,q(I,2*R+2*b+1),I[2*R+2*b+1]+=T*Ut,q(I,2*R+2*b+1),I[2*R+2*b+2]+=P*Ut,q(I,2*R+2*b+2)}for(R=0;R<v;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=v;R<2*v;R++)I[R]=0;return new o(I,0)};function q(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function $(A,v){this.g=A,this.h=v}function G(A,v){if(C(v))throw Error("division by zero");if(C(A))return new $(f,f);if(N(A))return v=G(D(A),v),new $(D(v.g),D(v.h));if(N(v))return v=G(A,D(v)),new $(D(v.g),v.h);if(30<A.g.length){if(N(A)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,R=v;0>=R.l(A);)I=ve(I),R=ve(R);var b=Ee(I,1),P=Ee(R,1);for(R=Ee(R,2),I=Ee(I,2);!C(R);){var T=P.add(R);0>=T.l(A)&&(b=b.add(I),P=T),R=Ee(R,1),I=Ee(I,1)}return v=j(A,b.j(v)),new $(b,v)}for(b=f;0<=A.l(v);){for(I=Math.max(1,Math.floor(A.m()/v.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),P=u(I),T=P.j(v);N(T)||0<T.l(A);)I-=R,P=u(I),T=P.j(v);C(P)&&(P=g),b=b.add(P),A=j(A,T)}return new $(b,A)}n.A=function(A){return G(this,A).h},n.and=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0;R<v;R++)I[R]=this.i(R)&A.i(R);return new o(I,this.h&A.h)},n.or=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0;R<v;R++)I[R]=this.i(R)|A.i(R);return new o(I,this.h|A.h)},n.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0;R<v;R++)I[R]=this.i(R)^A.i(R);return new o(I,this.h^A.h)};function ve(A){for(var v=A.g.length+1,I=[],R=0;R<v;R++)I[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(I,A.h)}function Ee(A,v){var I=v>>5;v%=32;for(var R=A.g.length-I,b=[],P=0;P<R;P++)b[P]=0<v?A.i(P+I)>>>v|A.i(P+I+1)<<32-v:A.i(P+I);return new o(b,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Av=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Us=o}).apply(typeof qg<"u"?qg:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rv,po,bv,al,ph,Sv,Pv,kv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function i(l,d){if(d)e:{var p=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var k=l[_];if(!(k in p))break e;p=p[k]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function r(l,d){l instanceof String&&(l+="");var p=0,_=!1,k={next:function(){if(!_&&p<l.length){var x=p++;return{value:d(x,l[x]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(l){return l||function(){return r(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),l.apply(d,k)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function m(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function C(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,k,x){for(var z=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)z[Be-2]=arguments[Be];return d.prototype[k].apply(_,z)}}function N(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function D(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const k=l.length||0,x=_.length||0;l.length=k+x;for(let z=0;z<x;z++)l[k+z]=_[z]}else l.push(_)}}class j{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function q(l){return/^[\s\xa0]*$/.test(l)}function $(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function G(l){return G[" "](l),l}G[" "]=function(){};var ve=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Ee(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function A(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function v(l){const d={};for(const p in l)d[p]=l[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)l[p]=_[p];for(let x=0;x<I.length;x++)p=I[x],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function b(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function P(l){a.setTimeout(()=>{throw l},0)}function T(){var l=Zt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Ut{constructor(){this.h=this.g=null}add(d,p){const _=un.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var un=new j(()=>new st,l=>l.reset());class st{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ae=!1,Zt=new Ut,_n=()=>{const l=a.Promise.resolve(void 0);Pe=()=>{l.then(hn)}};var hn=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){P(p)}var d=un;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}Ae=!1};function Je(){this.s=this.s,this.C=this.C}Je.prototype.s=!1,Je.prototype.ma=function(){this.s||(this.s=!0,this.N())},Je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var ws=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Pn(l,d){if(Xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ve){e:{try{G(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Kt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pn.aa.h.call(this)}}C(Pn,Xe);var Kt={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(l,d,p,_,k){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=k,this.key=++X,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function xe(l){this.src=l,this.g={},this.h=0}xe.prototype.add=function(l,d,p,_,k){var x=l.toString();l=this.g[x],l||(l=this.g[x]=[],this.h++);var z=w(l,d,_,k);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new Y(d,this.src,x,!!_,k),d.fa=p,l.push(d)),d};function E(l,d){var p=d.type;if(p in l.g){var _=l.g[p],k=Array.prototype.indexOf.call(_,d,void 0),x;(x=0<=k)&&Array.prototype.splice.call(_,k,1),x&&(te(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function w(l,d,p,_){for(var k=0;k<l.length;++k){var x=l[k];if(!x.da&&x.listener==d&&x.capture==!!p&&x.ha==_)return k}return-1}var S="closure_lm_"+(1e6*Math.random()|0),M={};function U(l,d,p,_,k){if(Array.isArray(d)){for(var x=0;x<d.length;x++)U(l,d[x],p,_,k);return null}return p=fe(p),l&&l[O]?l.K(d,p,u(_)?!!_.capture:!1,k):V(l,d,p,!1,_,k)}function V(l,d,p,_,k,x){if(!d)throw Error("Invalid event type");var z=u(k)?!!k.capture:!!k,Be=J(l);if(Be||(l[S]=Be=new xe(l)),p=Be.add(d,p,_,z,x),p.proxy)return p;if(_=Q(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)ws||(k=z),k===void 0&&(k=!1),l.addEventListener(d.toString(),_,k);else if(l.attachEvent)l.attachEvent(B(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Q(){function l(p){return d.call(l.src,l.listener,p)}const d=le;return l}function K(l,d,p,_,k){if(Array.isArray(d))for(var x=0;x<d.length;x++)K(l,d[x],p,_,k);else _=u(_)?!!_.capture:!!_,p=fe(p),l&&l[O]?(l=l.i,d=String(d).toString(),d in l.g&&(x=l.g[d],p=w(x,p,_,k),-1<p&&(te(x[p]),Array.prototype.splice.call(x,p,1),x.length==0&&(delete l.g[d],l.h--)))):l&&(l=J(l))&&(d=l.g[d.toString()],l=-1,d&&(l=w(d,p,_,k)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[O])E(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(B(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=J(d))?(E(p,l),p.h==0&&(p.src=null,d[S]=null)):te(l)}}}function B(l){return l in M?M[l]:M[l]="on"+l}function le(l,d){if(l.da)l=!0;else{d=new Pn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&W(l),l=p.call(_,d)}return l}function J(l){return l=l[S],l instanceof xe?l:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(l){return typeof l=="function"?l:(l[se]||(l[se]=function(d){return l.handleEvent(d)}),l[se])}function ce(){Je.call(this),this.i=new xe(this),this.M=this,this.F=null}C(ce,Je),ce.prototype[O]=!0,ce.prototype.removeEventListener=function(l,d,p,_){K(this,l,d,p,_)};function ye(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Xe(d,l);else if(d instanceof Xe)d.target=d.target||l;else{var k=d;d=new Xe(_,l),R(d,k)}if(k=!0,p)for(var x=p.length-1;0<=x;x--){var z=d.g=p[x];k=ke(z,_,!0,d)&&k}if(z=d.g=l,k=ke(z,_,!0,d)&&k,k=ke(z,_,!1,d)&&k,p)for(x=0;x<p.length;x++)z=d.g=p[x],k=ke(z,_,!1,d)&&k}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)te(p[_]);delete l.g[d],l.h--}}this.F=null},ce.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},ce.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function ke(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,x=0;x<d.length;++x){var z=d[x];if(z&&!z.da&&z.capture==p){var Be=z.listener,Et=z.ha||z.src;z.fa&&E(l.i,z),k=Be.call(Et,_)!==!1&&k}}return k&&!_.defaultPrevented}function Ct(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function yt(l){l.g=Ct(()=>{l.g=null,l.i&&(l.i=!1,yt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class dn extends Je{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(l){Je.call(this),this.h=l,this.g={}}C(At,Je);var Ts=[];function qr(l){Ee(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}At.prototype.N=function(){At.aa.N.call(this),qr(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vt=a.JSON.stringify,fn=a.JSON.parse,Sa=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function nu(){}nu.prototype.h=null;function Kf(l){return l.h||(l.h=l.i())}function zf(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function su(){Xe.call(this,"d")}C(su,Xe);function iu(){Xe.call(this,"c")}C(iu,Xe);var di={},Qf=null;function Pa(){return Qf=Qf||new ce}di.La="serverreachability";function Yf(l){Xe.call(this,di.La,l)}C(Yf,Xe);function Wr(l){const d=Pa();ye(d,new Yf(d))}di.STAT_EVENT="statevent";function Jf(l,d){Xe.call(this,di.STAT_EVENT,l),this.stat=d}C(Jf,Xe);function Bt(l){const d=Pa();ye(d,new Jf(d,l))}di.Ma="timingevent";function Xf(l,d){Xe.call(this,di.Ma,l),this.size=d}C(Xf,Xe);function Hr(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function rI(l,d,p,_,k,x){l.info(function(){if(l.g)if(x)for(var z="",Be=x.split("&"),Et=0;Et<Be.length;Et++){var Oe=Be[Et].split("=");if(1<Oe.length){var Rt=Oe[0];Oe=Oe[1];var bt=Rt.split("_");z=2<=bt.length&&bt[1]=="type"?z+(Rt+"="+Oe+"&"):z+(Rt+"=redacted&")}}else z=null;else z=x;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+d+`
`+p+`
`+z})}function oI(l,d,p,_,k,x,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+d+`
`+p+`
`+x+" "+z})}function ji(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+lI(l,p)+(_?" "+_:"")})}function aI(l,d){l.info(function(){return"TIMEOUT: "+d})}Gr.prototype.info=function(){};function lI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var z=1;z<k.length;z++)k[z]=""}}}}return vt(p)}catch{return d}}var ka={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ru;function Na(){}C(Na,nu),Na.prototype.g=function(){return new XMLHttpRequest},Na.prototype.i=function(){return{}},ru=new Na;function Is(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ep}function ep(){this.i=null,this.g="",this.h=!1}var tp={},ou={};function au(l,d,p){l.L=1,l.v=Ma(Kn(d)),l.m=p,l.P=!0,np(l,null)}function np(l,d){l.F=Date.now(),Da(l),l.A=Kn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),mp(p.i,"t",_),l.C=0,p=l.j.J,l.h=new ep,l.g=Op(l.j,p?d:null,!l.m),0<l.O&&(l.M=new dn(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ts[0]=k.toString()),k=Ts);for(var x=0;x<k.length;x++){var z=U(p,k[x],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Wr(),rI(l.i,l.u,l.A,l.l,l.R,l.m)}Is.prototype.ca=function(l){l=l.target;const d=this.M;d&&zn(l)==3?d.j():this.Y(l)},Is.prototype.Y=function(l){try{if(l==this.g)e:{const bt=zn(this.g);var d=this.g.Ba();const Wi=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Ip(this.g)))){this.J||bt!=4||d==7||(d==8||0>=Wi?Wr(3):Wr(2)),lu(this);var p=this.g.Z();this.X=p;t:if(sp(this)){var _=Ip(this.g);l="";var k=_.length,x=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),Kr(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(x&&d==k-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,oI(this.i,this.u,this.A,this.l,this.R,bt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Et=this.g;if((Be=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Be)){var Oe=Be;break t}}Oe=null}if(p=Oe)ji(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cu(this,p);else{this.o=!1,this.s=3,Bt(12),fi(this),Kr(this);break e}}if(this.P){p=!0;let yn;for(;!this.J&&this.C<z.length;)if(yn=cI(this,z),yn==ou){bt==4&&(this.s=4,Bt(14),p=!1),ji(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==tp){this.s=4,Bt(15),ji(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else ji(this.i,this.l,yn,null),cu(this,yn);if(sp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||z.length!=0||this.h.h||(this.s=1,Bt(16),p=!1),this.o=this.o&&p,!p)ji(this.i,this.l,z,"[Invalid Chunked Response]"),fi(this),Kr(this);else if(0<z.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),gu(Rt),Rt.M=!0,Bt(11))}}else ji(this.i,this.l,z,null),cu(this,z);bt==4&&fi(this),this.o&&!this.J&&(bt==4?kp(this.j,this):(this.o=!1,Da(this)))}else RI(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),fi(this),Kr(this)}}}catch{}finally{}};function sp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function cI(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?ou:(p=Number(d.substring(p,_)),isNaN(p)?tp:(_+=1,_+p>d.length?ou:(d=d.slice(_,_+p),l.C=_+p,d)))}Is.prototype.cancel=function(){this.J=!0,fi(this)};function Da(l){l.S=Date.now()+l.I,ip(l,l.I)}function ip(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Hr(g(l.ba,l),d)}function lu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Is.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(aI(this.i,this.A),this.L!=2&&(Wr(),Bt(17)),fi(this),this.s=2,Kr(this)):ip(this,this.S-l)};function Kr(l){l.j.G==0||l.J||kp(l.j,l)}function fi(l){lu(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,qr(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function cu(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||uu(p.h,l))){if(!l.K&&uu(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)ja(p),Ua(p);else break e;pu(p),Bt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=Hr(g(p.Za,p),6e3));if(1>=ap(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else gi(p,11)}else if((l.K||p.g==l)&&ja(p),!q(d))for(k=p.Da.g.parse(d),d=0;d<k.length;d++){let Oe=k[d];if(p.T=Oe[0],Oe=Oe[1],p.G==2)if(Oe[0]=="c"){p.K=Oe[1],p.ia=Oe[2];const Rt=Oe[3];Rt!=null&&(p.la=Rt,p.j.info("VER="+p.la));const bt=Oe[4];bt!=null&&(p.Aa=bt,p.j.info("SVER="+p.Aa));const Wi=Oe[5];Wi!=null&&typeof Wi=="number"&&0<Wi&&(_=1.5*Wi,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const yn=l.g;if(yn){const $a=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($a){var x=_.h;x.g||$a.indexOf("spdy")==-1&&$a.indexOf("quic")==-1&&$a.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(hu(x,x.h),x.h=null))}if(_.D){const mu=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;mu&&(_.ya=mu,Ke(_.I,_.D,mu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=l;if(_.qa=xp(_,_.J?_.ia:null,_.W),z.K){lp(_.h,z);var Be=z,Et=_.L;Et&&(Be.I=Et),Be.B&&(lu(Be),Da(Be)),_.g=z}else Sp(_);0<p.i.length&&Ba(p)}else Oe[0]!="stop"&&Oe[0]!="close"||gi(p,7);else p.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?gi(p,7):fu(p):Oe[0]!="noop"&&p.l&&p.l.ta(Oe),p.v=0)}}Wr(4)}catch{}}var uI=class{constructor(l,d){this.g=l,this.map=d}};function rp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function op(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ap(l){return l.h?1:l.g?l.g.size:0}function uu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function hu(l,d){l.g?l.g.add(d):l.h=d}function lp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}rp.prototype.cancel=function(){if(this.i=cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function cp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return N(l.i)}function hI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function dI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function up(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=dI(l),_=hI(l),k=_.length,x=0;x<k;x++)d.call(void 0,_[x],p&&p[x],l)}var hp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),k=null;if(0<=_){var x=l[p].substring(0,_);k=l[p].substring(_+1)}else x=l[p];d(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function pi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof pi){this.h=l.h,xa(this,l.j),this.o=l.o,this.g=l.g,Oa(this,l.s),this.l=l.l;var d=l.i,p=new Yr;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),dp(this,p),this.m=l.m}else l&&(d=String(l).match(hp))?(this.h=!1,xa(this,d[1]||"",!0),this.o=zr(d[2]||""),this.g=zr(d[3]||"",!0),Oa(this,d[4]),this.l=zr(d[5]||"",!0),dp(this,d[6]||"",!0),this.m=zr(d[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}pi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Qr(d,fp,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Qr(d,fp,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Qr(p,p.charAt(0)=="/"?mI:gI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Qr(p,yI)),l.join("")};function Kn(l){return new pi(l)}function xa(l,d,p){l.j=p?zr(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Oa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function dp(l,d,p){d instanceof Yr?(l.i=d,vI(l.i,l.h)):(p||(d=Qr(d,_I)),l.i=new Yr(d,l.h))}function Ke(l,d,p){l.i.set(d,p)}function Ma(l){return Ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function zr(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Qr(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,pI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function pI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var fp=/[#\/\?@]/g,gI=/[#\?:]/g,mI=/[#\?]/g,_I=/[#\?@]/g,yI=/#/g;function Yr(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Cs(l){l.g||(l.g=new Map,l.h=0,l.i&&fI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Yr.prototype,n.add=function(l,d){Cs(this),this.i=null,l=qi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function pp(l,d){Cs(l),d=qi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function gp(l,d){return Cs(l),d=qi(l,d),l.g.has(d)}n.forEach=function(l,d){Cs(this),this.g.forEach(function(p,_){p.forEach(function(k){l.call(d,k,_,this)},this)},this)},n.na=function(){Cs(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const k=l[_];for(let x=0;x<k.length;x++)p.push(d[_])}return p},n.V=function(l){Cs(this);let d=[];if(typeof l=="string")gp(this,l)&&(d=d.concat(this.g.get(qi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return Cs(this),this.i=null,l=qi(this,l),gp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function mp(l,d,p){pp(l,d),0<p.length&&(l.i=null,l.g.set(qi(l,d),N(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const x=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var k=x;z[_]!==""&&(k+="="+encodeURIComponent(String(z[_]))),l.push(k)}}return this.i=l.join("&")};function qi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function vI(l,d){d&&!l.j&&(Cs(l),l.i=null,l.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(pp(this,_),mp(this,k,p))},l)),l.j=d}function EI(l,d){const p=new Gr;if(a.Image){const _=new Image;_.onload=m(As,p,"TestLoadImage: loaded",!0,d,_),_.onerror=m(As,p,"TestLoadImage: error",!1,d,_),_.onabort=m(As,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(As,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function wI(l,d){const p=new Gr,_=new AbortController,k=setTimeout(()=>{_.abort(),As(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(x=>{clearTimeout(k),x.ok?As(p,"TestPingServer: ok",!0,d):As(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),As(p,"TestPingServer: error",!1,d)})}function As(l,d,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function TI(){this.g=new Sa}function II(l,d,p){const _=p||"";try{up(l,function(k,x){let z=k;u(k)&&(z=vt(k)),d.push(_+x+"="+encodeURIComponent(z))})}catch(k){throw d.push(_+"type="+encodeURIComponent("_badmap")),k}}function La(l){this.l=l.Ub||null,this.j=l.eb||!1}C(La,nu),La.prototype.g=function(){return new Va(this.l,this.j)},La.prototype.i=function(l){return function(){return l}}({});function Va(l,d){ce.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Va,ce),n=Va.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Xr(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_p(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function _p(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Jr(this):Xr(this),this.readyState==3&&_p(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Jr(this))},n.Qa=function(l){this.g&&(this.response=l,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Xr(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Xr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function yp(l){let d="";return Ee(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function du(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=yp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ke(l,d,p))}function Ze(l){ce.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ze,ce);var CI=/^https?$/i,AI=["POST","PUT"];n=Ze.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ru.g(),this.v=this.o?Kf(this.o):Kf(ru),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(x){vp(this,x);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const x of _.keys())p.set(x,_.get(x));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(AI,d,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,z]of p)this.g.setRequestHeader(x,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tp(this),this.u=!0,this.g.send(l),this.u=!1}catch(x){vp(this,x)}};function vp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Ep(l),Fa(l)}function Ep(l){l.A||(l.A=!0,ye(l,"complete"),ye(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ye(this,"complete"),ye(this,"abort"),Fa(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fa(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wp(this):this.bb())},n.bb=function(){wp(this)};function wp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||zn(l)!=4||l.Z()!=2)){if(l.u&&zn(l)==4)Ct(l.Ea,0,l);else if(ye(l,"readystatechange"),zn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=z===0){var k=String(l.D).match(hp)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),_=!CI.test(k?k.toLowerCase():"")}p=_}if(p)ye(l,"complete"),ye(l,"success");else{l.m=6;try{var x=2<zn(l)?l.g.statusText:""}catch{x=""}l.l=x+" ["+l.Z()+"]",Ep(l)}}finally{Fa(l)}}}}function Fa(l,d){if(l.g){Tp(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ye(l,"ready");try{p.onreadystatechange=_}catch{}}}function Tp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),fn(d)}};function Ip(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function RI(l){const d={};l=(l.g&&2<=zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(q(l[_]))continue;var p=b(l[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=d[k]||[];d[k]=x,x.push(p)}A(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Cp(l){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,l),this.cb=Zr("retryDelaySeedMs",1e4,l),this.Wa=Zr("forwardChannelMaxRetries",2,l),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new rp(l&&l.concurrentRequestLimit),this.Da=new TI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cp.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,_){Bt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=xp(this,null,this.W),Ba(this)};function fu(l){if(Ap(l),l.G==3){var d=l.U++,p=Kn(l.I);if(Ke(p,"SID",l.K),Ke(p,"RID",d),Ke(p,"TYPE","terminate"),eo(l,p),d=new Is(l,l.j,d),d.L=2,d.v=Ma(Kn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Op(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Da(d)}Dp(l)}function Ua(l){l.g&&(gu(l),l.g.cancel(),l.g=null)}function Ap(l){Ua(l),l.u&&(a.clearTimeout(l.u),l.u=null),ja(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ba(l){if(!op(l.h)&&!l.s){l.s=!0;var d=l.Ga;Pe||_n(),Ae||(Pe(),Ae=!0),Zt.add(d,l),l.B=0}}function bI(l,d){return ap(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Hr(g(l.Ga,l,d),Np(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new Is(this,this.j,l);let x=this.o;if(this.S&&(x?(x=v(x),R(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=bp(this,k,d),p=Kn(this.I),Ke(p,"RID",l),Ke(p,"CVER",22),this.D&&Ke(p,"X-HTTP-Session-Id",this.D),eo(this,p),x&&(this.O?d="headers="+encodeURIComponent(String(yp(x)))+"&"+d:this.m&&du(p,this.m,x)),hu(this.h,k),this.Ua&&Ke(p,"TYPE","init"),this.P?(Ke(p,"$req",d),Ke(p,"SID","null"),k.T=!0,au(k,p,null)):au(k,p,d),this.G=2}}else this.G==3&&(l?Rp(this,l):this.i.length==0||op(this.h)||Rp(this))};function Rp(l,d){var p;d?p=d.l:p=l.U++;const _=Kn(l.I);Ke(_,"SID",l.K),Ke(_,"RID",p),Ke(_,"AID",l.T),eo(l,_),l.m&&l.o&&du(_,l.m,l.o),p=new Is(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=bp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),hu(l.h,p),au(p,_,d)}function eo(l,d){l.H&&Ee(l.H,function(p,_){Ke(d,_,p)}),l.l&&up({},function(p,_){Ke(d,_,p)})}function bp(l,d,p){p=Math.min(l.i.length,p);var _=l.l?g(l.l.Na,l.l,l):null;e:{var k=l.i;let x=-1;for(;;){const z=["count="+p];x==-1?0<p?(x=k[0].g,z.push("ofs="+x)):x=0:z.push("ofs="+x);let Be=!0;for(let Et=0;Et<p;Et++){let Oe=k[Et].g;const Rt=k[Et].map;if(Oe-=x,0>Oe)x=Math.max(0,k[Et].g-100),Be=!1;else try{II(Rt,z,"req"+Oe+"_")}catch{_&&_(Rt)}}if(Be){_=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function Sp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Pe||_n(),Ae||(Pe(),Ae=!0),Zt.add(d,l),l.v=0}}function pu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Hr(g(l.Fa,l),Np(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Pp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Hr(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Bt(10),Ua(this),Pp(this))};function gu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Pp(l){l.g=new Is(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Kn(l.qa);Ke(d,"RID","rpc"),Ke(d,"SID",l.K),Ke(d,"AID",l.T),Ke(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ke(d,"TO",l.ja),Ke(d,"TYPE","xmlhttp"),eo(l,d),l.m&&l.o&&du(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ma(Kn(d)),p.m=null,p.P=!0,np(p,l)}n.Za=function(){this.C!=null&&(this.C=null,Ua(this),pu(this),Bt(19))};function ja(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function kp(l,d){var p=null;if(l.g==d){ja(l),gu(l),l.g=null;var _=2}else if(uu(l.h,d))p=d.D,lp(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var k=l.B;_=Pa(),ye(_,new Xf(_,p)),Ba(l)}else Sp(l);else if(k=d.s,k==3||k==0&&0<d.X||!(_==1&&bI(l,d)||_==2&&pu(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),k){case 1:gi(l,5);break;case 4:gi(l,10);break;case 3:gi(l,6);break;default:gi(l,2)}}}function Np(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function gi(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),_=l.Xa;const k=!_;_=new pi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xa(_,"https"),Ma(_),k?EI(_.toString(),p):wI(_.toString(),p)}else Bt(2);l.G=0,l.l&&l.l.sa(d),Dp(l),Ap(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function Dp(l){if(l.G=0,l.ka=[],l.l){const d=cp(l.h);(d.length!=0||l.i.length!=0)&&(D(l.ka,d),D(l.ka,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.ra()}}function xp(l,d,p){var _=p instanceof pi?Kn(p):new pi(p);if(_.g!="")d&&(_.g=d+"."+_.g),Oa(_,_.s);else{var k=a.location;_=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var x=new pi(null);_&&xa(x,_),d&&(x.g=d),k&&Oa(x,k),p&&(x.l=p),_=x}return p=l.D,d=l.ya,p&&d&&Ke(_,p,d),Ke(_,"VER",l.la),eo(l,_),_}function Op(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ze(new La({eb:p})):new Ze(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mp(){}n=Mp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function qa(){}qa.prototype.g=function(l,d){return new en(l,d)};function en(l,d){ce.call(this),this.g=new Cp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!q(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!q(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new $i(this)}C(en,ce),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){fu(this.g)},en.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=vt(l),l=p);d.i.push(new uI(d.Ya++,l)),d.G==3&&Ba(d)},en.prototype.N=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,en.aa.N.call(this)};function Lp(l){su.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}C(Lp,su);function Vp(){iu.call(this),this.status=1}C(Vp,iu);function $i(l){this.g=l}C($i,Mp),$i.prototype.ua=function(){ye(this.g,"a")},$i.prototype.ta=function(l){ye(this.g,new Lp(l))},$i.prototype.sa=function(l){ye(this.g,new Vp)},$i.prototype.ra=function(){ye(this.g,"b")},qa.prototype.createWebChannel=qa.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,kv=function(){return new qa},Pv=function(){return Pa()},Sv=di,ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ka.NO_ERROR=0,ka.TIMEOUT=8,ka.HTTP_ERROR=6,al=ka,Zf.COMPLETE="complete",bv=Zf,zf.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",ce.prototype.listen=ce.prototype.K,po=zf,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,Rv=Ze}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});const $g="@firebase/firestore",Wg="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Cc("@firebase/firestore");function Qi(){return Pi.logLevel}function Z(n,...e){if(Pi.logLevel<=Ie.DEBUG){const t=e.map(Ed);Pi.debug(`Firestore (${Or}): ${n}`,...t)}}function hs(n,...e){if(Pi.logLevel<=Ie.ERROR){const t=e.map(Ed);Pi.error(`Firestore (${Or}): ${n}`,...t)}}function vr(n,...e){if(Pi.logLevel<=Ie.WARN){const t=e.map(Ed);Pi.warn(`Firestore (${Or}): ${n}`,...t)}}function Ed(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+n;throw hs(e),new Error(e)}function Ue(n,e){n||pe()}function me(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends _s{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pt.UNAUTHENTICATED))}shutdown(){}}class jS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qS{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new os;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new os,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new os)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new Nv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Pt(e)}}class $S{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class WS{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new $S(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HS{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,sn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0);const s=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Hg(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new Hg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=GS(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function we(n,e){return n<e?-1:n>e?1:0}function gh(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),i=e.codePointAt(t);if(s!==i){if(s<128&&i<128)return we(s,i);{const r=Dv(),o=KS(r.encode(Gg(n,t)),r.encode(Gg(e,t)));return o!==0?o:we(s,i)}}t+=s>65535?2:1}return we(n.length,e.length)}function Gg(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function KS(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return we(n[t],e[t]);return we(n.length,e.length)}function Er(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=-62135596800,zg=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*zg);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Kg)throw new ee(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zg}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Kg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ft(0,0))}static max(){return new ge(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="__name__";class Dn{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(),s===void 0?s=e.length-t:s>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=Dn.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return we(e.length,t.length)}static compareSegments(e,t){const s=Dn.isNumericId(e),i=Dn.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?Dn.extractNumericId(e).compare(Dn.extractNumericId(t)):gh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Us.fromString(e.substring(4,e.length-2))}}class Ye extends Dn{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const zS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Dn{construct(e,t,s){return new Tt(e,t,s)}static isValidIdentifier(e){return zS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qg}static keyField(){return new Tt([Qg])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ee(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ee(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ee(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(t)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Ye.fromString(e))}static fromName(e){return new ae(Ye.fromString(e).popFirst(5))}static empty(){return new ae(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=-1;function QS(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new zs(i,ae.empty(),e)}function YS(n){return new zs(n.readTime,n.key,Go)}class zs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new zs(ge.min(),ae.empty(),Go)}static max(){return new zs(ge.max(),ae.empty(),Go)}}function JS(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:we(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==XS)throw n;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,s)=>{t(e)})}static reject(e){return new F((t,s)=>{s(e)})}static waitFor(e){return new F((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=F.resolve(!1);for(const s of e)t=t.next(i=>i?F.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new F((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,t){return new F((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function e0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Lr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Rc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=-1;function bc(n){return n==null}function Nl(n){return n===0&&1/n==-1/0}function t0(n){return typeof n=="number"&&Number.isInteger(n)&&!Nl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="";function n0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Yg(e)),e=s0(n.get(t),e);return Yg(e)}function s0(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case Ov:t+="";break;default:t+=r}}return t}function Yg(n){return n+Ov+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ai(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Mv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=class mh{constructor(e,t){this.comparator=e,this.root=t||Bs.EMPTY}insert(e,t){return new mh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Bs.BLACK,null,null))}remove(e){return new mh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}},za=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Bs=class Jn{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Jn.RED,this.left=i??Jn.EMPTY,this.right=r??Jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Jn(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Jn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}};Bs.EMPTY=null,Bs.RED=!0,Bs.BLACK=!1;Bs.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,t,s,i,r){return this}insert(e,t,s){return new Bs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xg(this.data.getIterator())}getIteratorFrom(e){return new Xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new an([])}unionWith(e){let t=new pt(Tt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new an(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Lv("Invalid base64 string: "+r):r}}(e);return new It(t)}static fromUint8Array(e){const t=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new It(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const i0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qs(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=i0.exec(n);if(Ue(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ys(n){return typeof n=="string"?It.fromBase64String(n):It.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="server_timestamp",Fv="__type__",Uv="__previous_value__",Bv="__local_write_time__";function Td(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fv])===null||t===void 0?void 0:t.stringValue)===Vv}function Sc(n){const e=n.mapValue.fields[Uv];return Td(e)?Sc(e):e}function Ko(n){const e=Qs(n.mapValue.fields[Bv].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,s,i,r,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}const Dl="(default)";class zo{constructor(e,t){this.projectId=e,this.database=t||Dl}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database===Dl}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="__type__",o0="__max__",Qa={mapValue:{}},qv="__vector__",xl="value";function Js(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Td(n)?4:l0(n)?9007199254740991:a0(n)?10:11:pe()}function Hn(n,e){if(n===e)return!0;const t=Js(n);if(t!==Js(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ko(n).isEqual(Ko(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Qs(i.timestampValue),a=Qs(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Ys(i.bytesValue).isEqual(Ys(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return tt(i.geoPointValue.latitude)===tt(r.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return tt(i.integerValue)===tt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=tt(i.doubleValue),a=tt(r.doubleValue);return o===a?Nl(o)===Nl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Er(n.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Jg(o)!==Jg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Hn(o[c],a[c])))return!1;return!0}(n,e);default:return pe()}}function Qo(n,e){return(n.values||[]).find(t=>Hn(t,e))!==void 0}function wr(n,e){if(n===e)return 0;const t=Js(n),s=Js(e);if(t!==s)return we(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return we(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=tt(r.integerValue||r.doubleValue),c=tt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Zg(n.timestampValue,e.timestampValue);case 4:return Zg(Ko(n),Ko(e));case 5:return gh(n.stringValue,e.stringValue);case 6:return function(r,o){const a=Ys(r),c=Ys(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=we(a[u],c[u]);if(h!==0)return h}return we(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=we(tt(r.latitude),tt(o.latitude));return a!==0?a:we(tt(r.longitude),tt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return em(n.arrayValue,e.arrayValue);case 10:return function(r,o){var a,c,u,h;const f=r.fields||{},g=o.fields||{},m=(a=f[xl])===null||a===void 0?void 0:a.arrayValue,C=(c=g[xl])===null||c===void 0?void 0:c.arrayValue,N=we(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:em(m,C)}(n.mapValue,e.mapValue);case 11:return function(r,o){if(r===Qa.mapValue&&o===Qa.mapValue)return 0;if(r===Qa.mapValue)return 1;if(o===Qa.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=gh(c[f],h[f]);if(g!==0)return g;const m=wr(a[c[f]],u[h[f]]);if(m!==0)return m}return we(c.length,h.length)}(n.mapValue,e.mapValue);default:throw pe()}}function Zg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return we(n,e);const t=Qs(n),s=Qs(e),i=we(t.seconds,s.seconds);return i!==0?i:we(t.nanos,s.nanos)}function em(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=wr(t[i],s[i]);if(r)return r}return we(t.length,s.length)}function Tr(n){return _h(n)}function _h(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Qs(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ys(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ae.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=_h(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${_h(t.fields[o])}`;return i+"}"}(n.mapValue):pe()}function ll(n){switch(Js(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sc(n);return e?16+ll(e):16;case 5:return 2*n.stringValue.length;case 6:return Ys(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+ll(r),0)}(n.arrayValue);case 10:case 11:return function(s){let i=0;return ai(s.fields,(r,o)=>{i+=r.length+ll(o)}),i}(n.mapValue);default:throw pe()}}function tm(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yh(n){return!!n&&"integerValue"in n}function Id(n){return!!n&&"arrayValue"in n}function nm(n){return!!n&&"nullValue"in n}function sm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cl(n){return!!n&&"mapValue"in n}function a0(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[jv])===null||t===void 0?void 0:t.stringValue)===qv}function bo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ai(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=bo(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function l0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===o0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!cl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(t)}setAll(e){let t=Tt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=bo(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());cl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];cl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){ai(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Qt(bo(this.value))}}function $v(n){const e=[];return ai(n.fields,(t,s)=>{const i=new Tt([t]);if(cl(s)){const r=$v(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,ge.min(),ge.min(),ge.min(),Qt.empty(),0)}static newFoundDocument(e,t,s,i){return new Dt(e,1,t,ge.min(),s,i,0)}static newNoDocument(e,t){return new Dt(e,2,t,ge.min(),ge.min(),Qt.empty(),0)}static newUnknownDocument(e,t){return new Dt(e,3,t,ge.min(),ge.min(),Qt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.position=e,this.inclusive=t}}function im(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=ae.comparator(ae.fromName(o.referenceValue),t.key):s=wr(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function rm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Hn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t="asc"){this.field=e,this.dir=t}}function c0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{}class at extends Wv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new h0(e,t,s):t==="array-contains"?new p0(e,s):t==="in"?new g0(e,s):t==="not-in"?new m0(e,s):t==="array-contains-any"?new _0(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new d0(e,s):new f0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(wr(t,this.value)):t!==null&&Js(this.value)===Js(t)&&this.matchesComparison(wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends Wv{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new bn(e,t)}matches(e){return Hv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Hv(n){return n.op==="and"}function Gv(n){return u0(n)&&Hv(n)}function u0(n){for(const e of n.filters)if(e instanceof bn)return!1;return!0}function vh(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+Tr(n.value);if(Gv(n))return n.filters.map(e=>vh(e)).join(",");{const e=n.filters.map(t=>vh(t)).join(",");return`${n.op}(${e})`}}function Kv(n,e){return n instanceof at?function(s,i){return i instanceof at&&s.op===i.op&&s.field.isEqual(i.field)&&Hn(s.value,i.value)}(n,e):n instanceof bn?function(s,i){return i instanceof bn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Kv(o,i.filters[a]),!0):!1}(n,e):void pe()}function zv(n){return n instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${Tr(t.value)}`}(n):n instanceof bn?function(t){return t.op.toString()+" {"+t.getFilters().map(zv).join(" ,")+"}"}(n):"Filter"}class h0 extends at{constructor(e,t,s){super(e,t,s),this.key=ae.fromName(s.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class d0 extends at{constructor(e,t){super(e,"in",t),this.keys=Qv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class f0 extends at{constructor(e,t){super(e,"not-in",t),this.keys=Qv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ae.fromName(s.referenceValue))}class p0 extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Id(t)&&Qo(t.arrayValue,this.value)}}class g0 extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qo(this.value.arrayValue,t)}}class m0 extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qo(this.value.arrayValue,t)}}class _0 extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Id(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Qo(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.le=null}}function om(n,e=null,t=[],s=[],i=null,r=null,o=null){return new y0(n,e,t,s,i,r,o)}function Cd(n){const e=me(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>vh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Tr(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Tr(s)).join(",")),e.le=t}return e.le}function Ad(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!c0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rm(n.startAt,e.startAt)&&rm(n.endAt,e.endAt)}function Eh(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function v0(n,e,t,s,i,r,o,a){return new Vr(n,e,t,s,i,r,o,a)}function Pc(n){return new Vr(n)}function am(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Yv(n){return n.collectionGroup!==null}function So(n){const e=me(n);if(e.he===null){e.he=[];const t=new Set;for(const r of e.explicitOrderBy)e.he.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pt(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.he.push(new Yo(r,s))}),t.has(Tt.keyField().canonicalString())||e.he.push(new Yo(Tt.keyField(),s))}return e.he}function Un(n){const e=me(n);return e.Pe||(e.Pe=E0(e,So(n))),e.Pe}function E0(n,e){if(n.limitType==="F")return om(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Yo(i.field,r)});const t=n.endAt?new Ol(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ol(n.startAt.position,n.startAt.inclusive):null;return om(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function wh(n,e){const t=n.filters.concat([e]);return new Vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Th(n,e,t){return new Vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function kc(n,e){return Ad(Un(n),Un(e))&&n.limitType===e.limitType}function Jv(n){return`${Cd(Un(n))}|lt:${n.limitType}`}function Yi(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>zv(i)).join(", ")}]`),bc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>Tr(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>Tr(i)).join(",")),`Target(${s})`}(Un(n))}; limitType=${n.limitType})`}function Nc(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):ae.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of So(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=im(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,So(s),i)||s.endAt&&!function(o,a,c){const u=im(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,So(s),i))}(n,e)}function w0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xv(n){return(e,t)=>{let s=!1;for(const i of So(n)){const r=T0(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function T0(n,e,t){const s=n.field.isKeyField()?ae.comparator(e.key,t.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?wr(c,u):pe()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ai(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Mv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new ct(ae.comparator);function ds(){return I0}const Zv=new ct(ae.comparator);function go(...n){let e=Zv;for(const t of n)e=e.insert(t.key,t);return e}function eE(n){let e=Zv;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function wi(){return Po()}function tE(){return Po()}function Po(){return new Vi(n=>n.toString(),(n,e)=>n.isEqual(e))}const C0=new ct(ae.comparator),A0=new pt(ae.comparator);function Re(...n){let e=A0;for(const t of n)e=e.add(t);return e}const R0=new pt(we);function b0(){return R0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function nE(n){return{integerValue:""+n}}function S0(n,e){return t0(e)?nE(e):Rd(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this._=void 0}}function P0(n,e,t){return n instanceof Ml?function(i,r){const o={fields:{[Fv]:{stringValue:Vv},[Bv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Td(r)&&(r=Sc(r)),r&&(o.fields[Uv]=r),{mapValue:o}}(t,e):n instanceof Jo?iE(n,e):n instanceof Xo?rE(n,e):function(i,r){const o=sE(i,r),a=lm(o)+lm(i.Ie);return yh(o)&&yh(i.Ie)?nE(a):Rd(i.serializer,a)}(n,e)}function k0(n,e,t){return n instanceof Jo?iE(n,e):n instanceof Xo?rE(n,e):t}function sE(n,e){return n instanceof Ll?function(s){return yh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Ml extends Dc{}class Jo extends Dc{constructor(e){super(),this.elements=e}}function iE(n,e){const t=oE(e);for(const s of n.elements)t.some(i=>Hn(i,s))||t.push(s);return{arrayValue:{values:t}}}class Xo extends Dc{constructor(e){super(),this.elements=e}}function rE(n,e){let t=oE(e);for(const s of n.elements)t=t.filter(i=>!Hn(i,s));return{arrayValue:{values:t}}}class Ll extends Dc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function lm(n){return tt(n.integerValue||n.doubleValue)}function oE(n){return Id(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function N0(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof Jo&&i instanceof Jo||s instanceof Xo&&i instanceof Xo?Er(s.elements,i.elements,Hn):s instanceof Ll&&i instanceof Ll?Hn(s.Ie,i.Ie):s instanceof Ml&&i instanceof Ml}(n.transform,e.transform)}class D0{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xc{}function aE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cE(n.key,Cn.none()):new da(n.key,n.data,Cn.none());{const t=n.data,s=Qt.empty();let i=new pt(Tt.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new li(n.key,s,new an(i.toArray()),Cn.none())}}function x0(n,e,t){n instanceof da?function(i,r,o){const a=i.value.clone(),c=um(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof li?function(i,r,o){if(!ul(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=um(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(lE(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ko(n,e,t,s){return n instanceof da?function(r,o,a,c){if(!ul(r.precondition,o))return a;const u=r.value.clone(),h=hm(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof li?function(r,o,a,c){if(!ul(r.precondition,o))return a;const u=hm(r.fieldTransforms,c,o),h=o.data;return h.setAll(lE(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(r,o,a){return ul(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function O0(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=sE(s.transform,i||null);r!=null&&(t===null&&(t=Qt.empty()),t.set(s.field,r))}return t||null}function cm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Er(s,i,(r,o)=>N0(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class da extends xc{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class li extends xc{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function um(n,e,t){const s=new Map;Ue(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,k0(o,a,t[i]))}return s}function hm(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,P0(r,o,e))}return s}class cE extends xc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M0 extends xc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&x0(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ko(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ko(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=tE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=aE(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,(t,s)=>cm(t,s))&&Er(this.baseMutations,e.baseMutations,(t,s)=>cm(t,s))}}class bd{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){Ue(e.mutations.length===s.length);let i=function(){return C0}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new bd(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Ne;function U0(n){switch(n){case L.OK:return pe();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return pe()}}function uE(n){if(n===void 0)return hs("GRPC error has no .code"),L.UNKNOWN;switch(n){case it.OK:return L.OK;case it.CANCELLED:return L.CANCELLED;case it.UNKNOWN:return L.UNKNOWN;case it.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case it.INTERNAL:return L.INTERNAL;case it.UNAVAILABLE:return L.UNAVAILABLE;case it.UNAUTHENTICATED:return L.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case it.NOT_FOUND:return L.NOT_FOUND;case it.ALREADY_EXISTS:return L.ALREADY_EXISTS;case it.PERMISSION_DENIED:return L.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case it.ABORTED:return L.ABORTED;case it.OUT_OF_RANGE:return L.OUT_OF_RANGE;case it.UNIMPLEMENTED:return L.UNIMPLEMENTED;case it.DATA_LOSS:return L.DATA_LOSS;default:return pe()}}(Ne=it||(it={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Us([4294967295,4294967295],0);function dm(n){const e=Dv().encode(n),t=new Av;return t.update(e),new Uint8Array(t.digest())}function fm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Us([t,s],0),new Us([i,r],0)]}class Sd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new mo(`Invalid padding: ${t}`);if(s<0)throw new mo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new mo(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Us.fromNumber(this.Ee)}Ae(e,t,s){let i=e.add(t.multiply(Us.fromNumber(s)));return i.compare(B0)===1&&(i=new Us([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=dm(e),[s,i]=fm(t);for(let r=0;r<this.hashCount;r++){const o=this.Ae(s,i,r);if(!this.Re(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Sd(r,i,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const t=dm(e),[s,i]=fm(t);for(let r=0;r<this.hashCount;r++){const o=this.Ae(s,i,r);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,fa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Oc(ge.min(),i,new ct(we),ds(),Re())}}class fa{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new fa(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t,s,i){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=i}}class hE{constructor(e,t){this.targetId=e,this.ge=t}}class dE{constructor(e,t,s=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class pm{constructor(){this.pe=0,this.ye=gm(),this.we=It.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Re(),t=Re(),s=Re();return this.ye.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:pe()}}),new fa(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=gm()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ue(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class j0{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ds(),this.$e=Ya(),this.Ue=Ya(),this.Ke=new ct(we)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,s=e.ge.count,i=this.Xe(t);if(i){const r=i.target;if(Eh(r))if(s===0){const o=new ae(r.path);this.ze(t,o,Dt.newNoDocument(o,ge.min()))}else Ue(s===1);else{const o=this.et(t);if(o!==s){const a=this.tt(e),c=a?this.nt(a,e,o):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,a;try{o=Ys(s).toUint8Array()}catch(c){if(c instanceof Lv)return vr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Sd(o,i,r)}catch(c){return vr(c instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ee===0?null:a}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.ze(t,r,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&Eh(a.target)){const c=new ae(a.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,Dt.newNoDocument(c,e))}r.ve&&(t.set(o,r.Fe()),r.Me())}});let s=Re();this.Ue.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Qe.forEach((r,o)=>o.setReadTime(e));const i=new Oc(e,t,this.Ke,this.Qe,s);return this.Qe=ds(),this.$e=Ya(),this.Ue=Ya(),this.Ke=new ct(we),i}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new pm,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new pt(we),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new pt(we),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||Z("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new pm),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Ya(){return new ct(ae.comparator)}function gm(){return new ct(ae.comparator)}const q0={asc:"ASCENDING",desc:"DESCENDING"},$0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},W0={and:"AND",or:"OR"};class H0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ih(n,e){return n.useProto3Json||bc(e)?e:{value:e}}function Vl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function G0(n,e){return Vl(n,e.toTimestamp())}function Bn(n){return Ue(!!n),ge.fromTimestamp(function(t){const s=Qs(t);return new ft(s.seconds,s.nanos)}(n))}function Pd(n,e){return Ch(n,e).canonicalString()}function Ch(n,e){const t=function(i){return new Ye(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function pE(n){const e=Ye.fromString(n);return Ue(vE(e)),e}function Ah(n,e){return Pd(n.databaseId,e.path)}function Ou(n,e){const t=pE(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(mE(t))}function gE(n,e){return Pd(n.databaseId,e)}function K0(n){const e=pE(n);return e.length===4?Ye.emptyPath():mE(e)}function Rh(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mE(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function mm(n,e,t){return{name:Ah(n,e),fields:t.value.mapValue.fields}}function z0(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(Ue(h===void 0||typeof h=="string"),It.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),It.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?L.UNKNOWN:uE(u.code);return new ee(h,u.message||"")}(o);t=new dE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ou(n,s.document.name),r=Bn(s.document.updateTime),o=s.document.createTime?Bn(s.document.createTime):ge.min(),a=new Qt({mapValue:{fields:s.document.fields}}),c=Dt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new hl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ou(n,s.document),r=s.readTime?Bn(s.readTime):ge.min(),o=Dt.newNoDocument(i,r),a=s.removedTargetIds||[];t=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ou(n,s.document),r=s.removedTargetIds||[];t=new hl([],r,i,null)}else{if(!("filter"in e))return pe();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new F0(i,r),a=s.targetId;t=new hE(a,o)}}return t}function Q0(n,e){let t;if(e instanceof da)t={update:mm(n,e.key,e.value)};else if(e instanceof cE)t={delete:Ah(n,e.key)};else if(e instanceof li)t={update:mm(n,e.key,e.data),updateMask:iP(e.fieldMask)};else{if(!(e instanceof M0))return pe();t={verify:Ah(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw pe()}(0,s))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:G0(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:pe()}(n,e.precondition)),t}function Y0(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(i,r){let o=i.updateTime?Bn(i.updateTime):Bn(r);return o.isEqual(ge.min())&&(o=Bn(r)),new D0(o,i.transformResults||[])}(t,e))):[]}function J0(n,e){return{documents:[gE(n,e.path)]}}function X0(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=gE(n,i);const r=function(u){if(u.length!==0)return yE(bn.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Ji(g.field),direction:tP(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Ih(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:i}}function Z0(n){let e=K0(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Ue(s===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];t.where&&(r=function(f){const g=_E(f);return g instanceof bn&&Gv(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(C){return new Yo(Xi(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,bc(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,m=f.values||[];return new Ol(m,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new Ol(m,g)}(t.endAt)),v0(e,i,o,r,a,"F",c,u)}function eP(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _E(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xi(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Xi(t.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xi(t.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xi(t.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(n):n.fieldFilter!==void 0?function(t){return at.create(Xi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return bn.create(t.compositeFilter.filters.map(s=>_E(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return pe()}}(t.compositeFilter.op))}(n):pe()}function tP(n){return q0[n]}function nP(n){return $0[n]}function sP(n){return W0[n]}function Ji(n){return{fieldPath:n.canonicalString()}}function Xi(n){return Tt.fromServerFormat(n.fieldPath)}function yE(n){return n instanceof at?function(t){if(t.op==="=="){if(sm(t.value))return{unaryFilter:{field:Ji(t.field),op:"IS_NAN"}};if(nm(t.value))return{unaryFilter:{field:Ji(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sm(t.value))return{unaryFilter:{field:Ji(t.field),op:"IS_NOT_NAN"}};if(nm(t.value))return{unaryFilter:{field:Ji(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ji(t.field),op:nP(t.op),value:t.value}}}(n):n instanceof bn?function(t){const s=t.getFilters().map(i=>yE(i));return s.length===1?s[0]:{compositeFilter:{op:sP(t.op),filters:s}}}(n):pe()}function iP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,s,i,r=ge.min(),o=ge.min(),a=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ms(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.Tt=e}}function oP(n){const e=Z0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Th(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.Tn=new lP}addToCollectionParentIndex(e,t){return this.Tn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(zs.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(zs.min())}updateCollectionGroup(e,t,s){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class lP{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new pt(Ye.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new pt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},EE=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(EE,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Ir(0)}static Kn(){return new Ir(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="LruGarbageCollector",cP=1048576;function vm([n,e],[t,s]){const i=we(n,t);return i===0?we(e,s):i}class uP{constructor(e){this.Hn=e,this.buffer=new pt(vm),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vm(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hP{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Z(ym,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Lr(t)?Z(ym,"Ignoring IndexedDB error during garbage collection: ",t):await Mr(t)}await this.er(3e5)})}}class dP{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Rc.ae);const s=new uP(t);return this.tr.forEachTarget(e,i=>s.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>s.Zn(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(_m)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_m):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,i,r,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(r=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Qi()<=Ie.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:f})))}}function fP(n,e){return new dP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.changes=new Vi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?F.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&ko(s.mutation,i,an.empty(),ft.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Re()){const i=wi();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=go();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=wi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Re()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=ds();const o=Po(),a=function(){return Po()}();return t.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof li)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ko(h.mutation,u,h.mutation.getFieldMask(),ft.now())):o.set(u.key,an.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var f;return a.set(u,new gP(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Po();let i=new ct((o,a)=>o-a),r=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||an.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(i.get(a.batchId)||Re()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=tE();h.forEach(g=>{if(!r.has(g)){const m=aE(t.get(g),s.get(g));m!==null&&f.set(g,m),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return F.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):F.resolve(wi());let a=Go,c=r;return o.next(u=>F.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,Re())).next(h=>({batchId:a,changes:eE(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next(s=>{let i=go();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=go();return this.indexManager.getCollectionParents(e,r).next(a=>F.forEach(a,c=>{const u=function(f,g){return new Vr(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Dt.newInvalidDocument(h)))});let a=go();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&ko(h.mutation,u,an.empty(),ft.now()),Nc(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return F.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Bn(i.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:oP(i.bundledQuery),readTime:Bn(i.readTime)}}(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.overlays=new ct(ae.comparator),this.Rr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const s=wi();return F.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.Et(e,t,r)}),F.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Rr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Rr.delete(s)),F.resolve()}getOverlaysForCollection(e,t,s){const i=wi(),r=t.length+1,o=new ae(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return F.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new ct((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=wi(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=wi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return F.resolve(a)}Et(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(s.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new V0(t,s));let r=this.Rr.get(t);r===void 0&&(r=Re(),this.Rr.set(t,r)),this.Rr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.Vr=new pt(mt.mr),this.gr=new pt(mt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new mt(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new mt(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new ae(new Ye([])),s=new mt(t,e),i=new mt(t,e+1),r=[];return this.gr.forEachInRange([s,i],o=>{this.wr(o),r.push(o.key)}),r}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ae(new Ye([])),s=new mt(t,e),i=new mt(t,e+1);let r=Re();return this.gr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new mt(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class mt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ae.comparator(e.key,t.key)||we(e.Cr,t.Cr)}static pr(e,t){return we(e.Cr,t.Cr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new pt(mt.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new L0(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.Mr=this.Mr.add(new mt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,t){return F.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Nr(s),r=i<0?0:i;return F.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?wd:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new mt(t,0),i=new mt(t,Number.POSITIVE_INFINITY),r=[];return this.Mr.forEachInRange([s,i],o=>{const a=this.Or(o.Cr);r.push(a)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(we);return t.forEach(i=>{const r=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([r,o],a=>{s=s.add(a.Cr)})}),F.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;ae.isDocumentKey(r)||(r=r.child(""));const o=new mt(new ae(r),0);let a=new pt(we);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Cr)),!0)},o),F.resolve(this.Br(a))}Br(e){const t=[];return e.forEach(s=>{const i=this.Or(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ue(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return F.forEach(t.mutations,i=>{const r=new mt(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new mt(t,0),i=this.Mr.firstAfterOrEqual(s);return F.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.kr=e,this.docs=function(){return new ct(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return F.resolve(s?s.document.mutableCopy():Dt.newInvalidDocument(t))}getEntries(e,t){let s=ds();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Dt.newInvalidDocument(i))}),F.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=ds();const o=t.path,a=new ae(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||JS(YS(h),s)<=0||(i.has(h.key)||Nc(t,h))&&(r=r.insert(h.key,h.mutableCopy()))}return F.resolve(r)}getAllFromCollectionGroup(e,t,s,i){pe()}qr(e,t){return F.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new TP(this)}getSize(e){return F.resolve(this.size)}}class TP extends pP{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(s)}),F.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.persistence=e,this.Qr=new Vi(t=>Cd(t),Ad),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.$r=0,this.Ur=new kd,this.targetCount=0,this.Kr=Ir.Un()}forEachTarget(e,t){return this.Qr.forEach((s,i)=>t(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),F.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Ir(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.zn(t),F.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Qr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(r).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return F.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),F.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),F.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return F.resolve(s)}containsKey(e,t){return F.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Rc(0),this.zr=!1,this.zr=!0,this.jr=new vP,this.referenceDelegate=e(this),this.Hr=new IP(this),this.indexManager=new aP,this.remoteDocumentCache=function(i){return new wP(i)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new rP(t),this.Yr=new _P(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new EP(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){Z("MemoryPersistence","Starting transaction:",e);const i=new CP(this.Gr.next());return this.referenceDelegate.Zr(),s(i).next(r=>this.referenceDelegate.Xr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}ei(e,t){return F.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class CP extends ZS{constructor(e){super(),this.currentSequenceNumber=e}}class Nd{constructor(e){this.persistence=e,this.ti=new kd,this.ni=null}static ri(e){return new Nd(e)}get ii(){if(this.ni)return this.ni;throw pe()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),F.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),F.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.ii.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,s=>{const i=ae.fromPath(s);return this.si(e,i).next(r=>{r||t.removeEntry(i,ge.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return F.or([()=>F.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Fl{constructor(e,t){this.persistence=e,this.oi=new Vi(s=>n0(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=fP(this,t)}static ri(e,t){return new Fl(e,t)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return F.forEach(this.oi,(s,i)=>this.ar(e,s,i).next(r=>r?F.resolve():t(i)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,t).next(a=>{a||(s++,r.removeEntry(o,ge.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),F.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ll(e.data.value)),t}ar(e,t,s){return F.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return F.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=i}static Yi(e,t){let s=Re(),i=Re();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Dd(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _b()?8:e0(Ft())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.rs(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ss(e,t,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new AP;return this._s(e,t,o).next(a=>{if(r.result=a,this.Xi)return this.us(e,t,o,a.size)})}).next(()=>r.result)}us(e,t,s,i){return s.documentReadCount<this.es?(Qi()<=Ie.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Yi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(Qi()<=Ie.DEBUG&&Z("QueryEngine","Query:",Yi(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ts*i?(Qi()<=Ie.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Yi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(t))):F.resolve())}rs(e,t){if(am(t))return F.resolve(null);let s=Un(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Th(t,null,"F"),s=Un(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Re(...r);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.cs(t,a);return this.ls(t,u,o,c.readTime)?this.rs(e,Th(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,s,i){return am(t)||i.isEqual(ge.min())?F.resolve(null):this.ns.getDocuments(e,s).next(r=>{const o=this.cs(t,r);return this.ls(t,o,s,i)?F.resolve(null):(Qi()<=Ie.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yi(t)),this.hs(e,o,t,QS(i,Go)).next(a=>a))})}cs(e,t){let s=new pt(Xv(e));return t.forEach((i,r)=>{Nc(e,r)&&(s=s.add(r))}),s}ls(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}_s(e,t,s){return Qi()<=Ie.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Yi(t)),this.ns.getDocumentsMatchingQuery(e,t,zs.min(),s)}hs(e,t,s,i){return this.ns.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="LocalStore",bP=3e8;class SP{constructor(e,t,s,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new ct(we),this.Is=new Vi(r=>Cd(r),Ad),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mP(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function PP(n,e,t,s){return new SP(n,e,t,s)}async function TE(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=Re();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function kP(n,e){const t=me(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.ds.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,g=f.keys();let m=F.resolve();return g.forEach(C=>{m=m.next(()=>h.getEntry(c,C)).next(N=>{const D=u.docVersions.get(C);Ue(D!==null),N.version.compareTo(D)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=Re();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function IE(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function NP(n,e){const t=me(n),s=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const g=i.get(f);if(!g)return;a.push(t.Hr.removeMatchingKeys(r,h.removedDocuments,f).next(()=>t.Hr.addMatchingKeys(r,h.addedDocuments,f)));let m=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(It.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(N,D,j){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=bP?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,m,h)&&a.push(t.Hr.updateTargetData(r,m))});let c=ds(),u=Re();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(DP(r,o,e.documentUpdates).next(h=>{c=h.Vs,u=h.fs})),!s.isEqual(ge.min())){const h=t.Hr.getLastRemoteSnapshotVersion(r).next(f=>t.Hr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return F.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.Ts=i,r))}function DP(n,e,t){let s=Re(),i=Re();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=ds();return t.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Z(xd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:i}})}function xP(n,e){const t=me(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=wd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function OP(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Hr.getTargetData(s,e).next(r=>r?(i=r,F.resolve(i)):t.Hr.allocateTargetId(s).next(o=>(i=new Ms(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function bh(n,e,t){const s=me(n),i=s.Ts.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Lr(o))throw o;Z(xd,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ts=s.Ts.remove(e),s.Is.delete(i.target)}function Em(n,e,t){const s=me(n);let i=ge.min(),r=Re();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=me(c),g=f.Is.get(h);return g!==void 0?F.resolve(f.Ts.get(g)):f.Hr.getTargetData(u,h)}(s,o,Un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ps.getDocumentsMatchingQuery(o,e,t?i:ge.min(),t?r:Re())).next(a=>(MP(s,w0(e),a),{documents:a,gs:r})))}function MP(n,e,t){let s=n.Es.get(e)||ge.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Es.set(e,s)}class wm{constructor(){this.activeTargetIds=b0()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LP{constructor(){this.ho=new wm,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new wm,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="ConnectivityMonitor";class Im{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Z(Tm,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Z(Tm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja=null;function Sh(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="RestConnection",FP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UP{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database===Dl?`project_id=${s}`:`project_id=${s}&database_id=${i}`}So(e,t,s,i,r){const o=Sh(),a=this.bo(e,t.toUriEncodedString());Z(Mu,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,r),this.vo(e,a,c,s).then(u=>(Z(Mu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw vr(Mu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}Co(e,t,s,i,r,o){return this.So(e,t,s,i,r)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}bo(e,t){const s=FP[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class jP extends UP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,i){const r=Sh();return new Promise((o,a)=>{const c=new Rv;c.setWithCredentials(!0),c.listenOnce(bv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case al.NO_ERROR:const h=c.getResponseJson();Z(St,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case al.TIMEOUT:Z(St,`RPC '${e}' ${r} timed out`),a(new ee(L.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const f=c.getStatus();if(Z(St,`RPC '${e}' ${r} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const C=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(j)>=0?j:L.UNKNOWN}(m.status);a(new ee(C,m.message))}else a(new ee(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ee(L.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{Z(St,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);Z(St,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",u,s,15)})}Wo(e,t,s){const i=Sh(),r=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kv(),a=Pv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=r.join("");Z(St,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,m=!1;const C=new BP({Fo:D=>{m?Z(St,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(Z(St,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),Z(St,`RPC '${e}' stream ${i} sending:`,D),f.send(D))},Mo:()=>f.close()}),N=(D,j,q)=>{D.listen(j,$=>{try{q($)}catch(G){setTimeout(()=>{throw G},0)}})};return N(f,po.EventType.OPEN,()=>{m||(Z(St,`RPC '${e}' stream ${i} transport opened.`),C.Qo())}),N(f,po.EventType.CLOSE,()=>{m||(m=!0,Z(St,`RPC '${e}' stream ${i} transport closed`),C.Uo())}),N(f,po.EventType.ERROR,D=>{m||(m=!0,vr(St,`RPC '${e}' stream ${i} transport errored:`,D),C.Uo(new ee(L.UNAVAILABLE,"The operation could not be completed")))}),N(f,po.EventType.MESSAGE,D=>{var j;if(!m){const q=D.data[0];Ue(!!q);const $=q,G=($==null?void 0:$.error)||((j=$[0])===null||j===void 0?void 0:j.error);if(G){Z(St,`RPC '${e}' stream ${i} received error:`,G);const ve=G.status;let Ee=function(I){const R=it[I];if(R!==void 0)return uE(R)}(ve),A=G.message;Ee===void 0&&(Ee=L.INTERNAL,A="Unknown error status: "+ve+" with message "+G.message),m=!0,C.Uo(new ee(Ee,A)),f.close()}else Z(St,`RPC '${e}' stream ${i} received:`,q),C.Ko(q)}}),N(a,Sv.STAT_EVENT,D=>{D.stat===ph.PROXY?Z(St,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===ph.NOPROXY&&Z(St,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function Lu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){return new H0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=i,this.jo=r,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-s);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="PersistentStream";class AE{constructor(e,t,s,i,r,o,a,c){this.Ti=e,this.n_=s,this.r_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new CE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(hs(t.toString()),hs("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.i_===t&&this.V_(s,i)},s=>{e(()=>{const i=new ee(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(i)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{s(()=>this.m_(i))}),this.stream.onMessage(i=>{s(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Z(Cm,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(Z(Cm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qP extends AE{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=z0(this.serializer,e),s=function(r){if(!("targetChange"in r))return ge.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Bn(o.readTime):ge.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=Rh(this.serializer),t.addTarget=function(r,o){let a;const c=o.target;if(a=Eh(c)?{documents:J0(r,c)}:{query:X0(r,c).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=fE(r,o.resumeToken);const u=Ih(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Vl(r,o.snapshotVersion.toTimestamp());const u=Ih(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=eP(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=Rh(this.serializer),t.removeTarget=e,this.I_(t)}}class $P extends AE{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Y0(e.writeResults,e.commitTime),s=Bn(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=Rh(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Q0(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{}class HP extends WP{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new ee(L.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(e,Ch(t,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ee(L.UNKNOWN,r.toString())})}Co(e,t,s,i,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,Ch(t,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(L.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class GP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(hs(t),this.N_=!1):Z("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="RemoteStore";class KP{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=r,this.z_.To(o=>{s.enqueueAndForget(async()=>{Fi(this)&&(Z(ki,"Restarting streams for network reachability change."),await async function(c){const u=me(c);u.W_.add(4),await pa(u),u.j_.set("Unknown"),u.W_.delete(4),await Lc(u)}(this))})}),this.j_=new GP(s,i)}}async function Lc(n){if(Fi(n))for(const e of n.G_)await e(!0)}async function pa(n){for(const e of n.G_)await e(!1)}function RE(n,e){const t=me(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Vd(t)?Ld(t):Fr(t).c_()&&Md(t,e))}function Od(n,e){const t=me(n),s=Fr(t);t.K_.delete(e),s.c_()&&bE(t,e),t.K_.size===0&&(s.c_()?s.P_():Fi(t)&&t.j_.set("Unknown"))}function Md(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fr(n).y_(e)}function bE(n,e){n.H_.Ne(e),Fr(n).w_(e)}function Ld(n){n.H_=new j0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.j_.B_()}function Vd(n){return Fi(n)&&!Fr(n).u_()&&n.K_.size>0}function Fi(n){return me(n).W_.size===0}function SE(n){n.H_=void 0}async function zP(n){n.j_.set("Online")}async function QP(n){n.K_.forEach((e,t)=>{Md(n,e)})}async function YP(n,e){SE(n),Vd(n)?(n.j_.q_(e),Ld(n)):n.j_.set("Unknown")}async function JP(n,e,t){if(n.j_.set("Online"),e instanceof dE&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.K_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.K_.delete(a),i.H_.removeTarget(a))}(n,e)}catch(s){Z(ki,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ul(n,s)}else if(e instanceof hl?n.H_.We(e):e instanceof hE?n.H_.Ze(e):n.H_.je(e),!t.isEqual(ge.min()))try{const s=await IE(n.localStore);t.compareTo(s)>=0&&await function(r,o){const a=r.H_.ot(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.K_.get(u);h&&r.K_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=r.K_.get(c);if(!h)return;r.K_.set(c,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),bE(r,c);const f=new Ms(h.target,c,u,h.sequenceNumber);Md(r,f)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){Z(ki,"Failed to raise snapshot:",s),await Ul(n,s)}}async function Ul(n,e,t){if(!Lr(e))throw e;n.W_.add(1),await pa(n),n.j_.set("Offline"),t||(t=()=>IE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Z(ki,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Lc(n)})}function PE(n,e){return e().catch(t=>Ul(n,t,e))}async function Vc(n){const e=me(n),t=Xs(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:wd;for(;XP(e);)try{const i=await xP(e.localStore,s);if(i===null){e.U_.length===0&&t.P_();break}s=i.batchId,ZP(e,i)}catch(i){await Ul(e,i)}kE(e)&&NE(e)}function XP(n){return Fi(n)&&n.U_.length<10}function ZP(n,e){n.U_.push(e);const t=Xs(n);t.c_()&&t.S_&&t.b_(e.mutations)}function kE(n){return Fi(n)&&!Xs(n).u_()&&n.U_.length>0}function NE(n){Xs(n).start()}async function ek(n){Xs(n).C_()}async function tk(n){const e=Xs(n);for(const t of n.U_)e.b_(t.mutations)}async function nk(n,e,t){const s=n.U_.shift(),i=bd.from(s,e,t);await PE(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Vc(n)}async function sk(n,e){e&&Xs(n).S_&&await async function(s,i){if(function(o){return U0(o)&&o!==L.ABORTED}(i.code)){const r=s.U_.shift();Xs(s).h_(),await PE(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Vc(s)}}(n,e),kE(n)&&NE(n)}async function Am(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),Z(ki,"RemoteStore received new credentials");const s=Fi(t);t.W_.add(3),await pa(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Lc(t)}async function ik(n,e){const t=me(n);e?(t.W_.delete(2),await Lc(t)):e||(t.W_.add(2),await pa(t),t.j_.set("Unknown"))}function Fr(n){return n.J_||(n.J_=function(t,s,i){const r=me(t);return r.M_(),new qP(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{xo:zP.bind(null,n),No:QP.bind(null,n),Lo:YP.bind(null,n),p_:JP.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Vd(n)?Ld(n):n.j_.set("Unknown")):(await n.J_.stop(),SE(n))})),n.J_}function Xs(n){return n.Y_||(n.Y_=function(t,s,i){const r=me(t);return r.M_(),new $P(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:ek.bind(null,n),Lo:sk.bind(null,n),D_:tk.bind(null,n),v_:nk.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Vc(n)):(await n.Y_.stop(),n.U_.length>0&&(Z(ki,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Fd(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ud(n,e){if(hs("AsyncQueue",`${e}: ${n}`),Lr(n))return new ee(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{static emptySet(e){return new lr(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ae.comparator(t.key,s.key):(t,s)=>ae.comparator(t.key,s.key),this.keyedMap=go(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.Z_=new ct(ae.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):pe():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Cr{constructor(e,t,s,i,r,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Cr(e,t,lr.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class ok{constructor(){this.queries=bm(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const i=me(t),r=i.queries;i.queries=bm(),r.forEach((o,a)=>{for(const c of a.ta)c.onError(s)})})(this,new ee(L.ABORTED,"Firestore shutting down"))}}function bm(){return new Vi(n=>Jv(n),kc)}async function Bd(n,e){const t=me(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.na()&&e.ra()&&(s=2):(r=new rk,s=e.ra()?0:1);try{switch(s){case 0:r.ea=await t.onListen(i,!0);break;case 1:r.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Ud(o,`Initialization of query '${Yi(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.ta.push(e),e.sa(t.onlineState),r.ea&&e.oa(r.ea)&&qd(t)}async function jd(n,e){const t=me(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.ta.indexOf(e);o>=0&&(r.ta.splice(o,1),r.ta.length===0?i=e.ra()?0:1:!r.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ak(n,e){const t=me(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.ta)a.oa(i)&&(s=!0);o.ea=i}}s&&qd(t)}function lk(n,e,t){const s=me(n),i=s.queries.get(e);if(i)for(const r of i.ta)r.onError(t);s.queries.delete(e)}function qd(n){n.ia.forEach(e=>{e.next()})}var Ph,Sm;(Sm=Ph||(Ph={}))._a="default",Sm.Cache="cache";class $d{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Cr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Ph.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.key=e}}class xE{constructor(e){this.key=e}}class ck{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Re(),this.mutatedKeys=Re(),this.ya=Xv(e),this.wa=new lr(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new Rm,i=t?t.wa:this.wa;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const g=i.get(h),m=Nc(this.query,f)?f:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;g&&m?g.data.isEqual(m.data)?C!==N&&(s.track({type:3,doc:m}),D=!0):this.va(g,m)||(s.track({type:2,doc:m}),D=!0,(c&&this.ya(m,c)>0||u&&this.ya(m,u)<0)&&(a=!0)):!g&&m?(s.track({type:0,doc:m}),D=!0):g&&!m&&(s.track({type:1,doc:g}),D=!0,(c||u)&&(a=!0)),D&&(m?(o=o.add(m),r=N?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{wa:o,Da:s,ls:a,mutatedKeys:r}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(m,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return N(m)-N(C)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(s),i=i!=null&&i;const a=t&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new Cr(this.query,e.wa,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Rm,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Re(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new xE(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new DE(s))}),t}Oa(e){this.fa=e.gs,this.pa=Re();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Cr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Wd="SyncEngine";class uk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class hk{constructor(e){this.key=e,this.Ba=!1}}class dk{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Vi(a=>Jv(a),kc),this.qa=new Map,this.Qa=new Set,this.$a=new ct(ae.comparator),this.Ua=new Map,this.Ka=new kd,this.Wa={},this.Ga=new Map,this.za=Ir.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function fk(n,e,t=!0){const s=UE(n);let i;const r=s.ka.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Na()):i=await OE(s,e,t,!0),i}async function pk(n,e){const t=UE(n);await OE(t,e,!0,!1)}async function OE(n,e,t,s){const i=await OP(n.localStore,Un(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let a;return s&&(a=await gk(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&RE(n.remoteStore,i),a}async function gk(n,e,t,s,i){n.Ha=(f,g,m)=>async function(N,D,j,q){let $=D.view.ba(j);$.ls&&($=await Em(N.localStore,D.query,!1).then(({documents:A})=>D.view.ba(A,$)));const G=q&&q.targetChanges.get(D.targetId),ve=q&&q.targetMismatches.get(D.targetId)!=null,Ee=D.view.applyChanges($,N.isPrimaryClient,G,ve);return km(N,D.targetId,Ee.Ma),Ee.snapshot}(n,f,g,m);const r=await Em(n.localStore,e,!0),o=new ck(e,r.gs),a=o.ba(r.documents),c=fa.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);km(n,t,u.Ma);const h=new uk(e,t,o);return n.ka.set(e,h),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function mk(n,e,t){const s=me(n),i=s.ka.get(e),r=s.qa.get(i.targetId);if(r.length>1)return s.qa.set(i.targetId,r.filter(o=>!kc(o,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await bh(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&Od(s.remoteStore,i.targetId),kh(s,i.targetId)}).catch(Mr)):(kh(s,i.targetId),await bh(s.localStore,i.targetId,!0))}async function _k(n,e){const t=me(n),s=t.ka.get(e),i=t.qa.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Od(t.remoteStore,s.targetId))}async function yk(n,e,t){const s=Ak(n);try{const i=await function(o,a){const c=me(o),u=ft.now(),h=a.reduce((m,C)=>m.add(C.key),Re());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let C=ds(),N=Re();return c.ds.getEntries(m,h).next(D=>{C=D,C.forEach((j,q)=>{q.isValidDocument()||(N=N.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,C)).next(D=>{f=D;const j=[];for(const q of a){const $=O0(q,f.get(q.key).overlayedDocument);$!=null&&j.push(new li(q.key,$,$v($.value.mapValue),Cn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,j,a)}).next(D=>{g=D;const j=D.applyToLocalDocumentSet(f,N);return c.documentOverlayCache.saveOverlays(m,D.batchId,j)})}).then(()=>({batchId:g.batchId,changes:eE(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new ct(we)),u=u.insert(a,c),o.Wa[o.currentUser.toKey()]=u}(s,i.batchId,t),await ga(s,i.changes),await Vc(s.remoteStore)}catch(i){const r=Ud(i,"Failed to persist write");t.reject(r)}}async function ME(n,e){const t=me(n);try{const s=await NP(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.Ua.get(r);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?Ue(o.Ba):i.removedDocuments.size>0&&(Ue(o.Ba),o.Ba=!1))}),await ga(t,s,e)}catch(s){await Mr(s)}}function Pm(n,e,t){const s=me(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ka.forEach((r,o)=>{const a=o.view.sa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=me(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.ta)g.sa(a)&&(u=!0)}),u&&qd(c)}(s.eventManager,e),i.length&&s.La.p_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vk(n,e,t){const s=me(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Ua.get(e),r=i&&i.key;if(r){let o=new ct(ae.comparator);o=o.insert(r,Dt.newNoDocument(r,ge.min()));const a=Re().add(r),c=new Oc(ge.min(),new Map,new ct(we),o,a);await ME(s,c),s.$a=s.$a.remove(r),s.Ua.delete(e),Hd(s)}else await bh(s.localStore,e,!1).then(()=>kh(s,e,t)).catch(Mr)}async function Ek(n,e){const t=me(n),s=e.batch.batchId;try{const i=await kP(t.localStore,e);VE(t,s,null),LE(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ga(t,i)}catch(i){await Mr(i)}}async function wk(n,e,t){const s=me(n);try{const i=await function(o,a){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ue(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);VE(s,e,t),LE(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ga(s,i)}catch(i){await Mr(i)}}function LE(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function VE(n,e,t){const s=me(n);let i=s.Wa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Wa[s.currentUser.toKey()]=i}}function kh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.qa.get(e))n.ka.delete(s),t&&n.La.Ja(s,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(s=>{n.Ka.containsKey(s)||FE(n,s)})}function FE(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Od(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Hd(n))}function km(n,e,t){for(const s of t)s instanceof DE?(n.Ka.addReference(s.key,e),Tk(n,s)):s instanceof xE?(Z(Wd,"Document no longer in limbo: "+s.key),n.Ka.removeReference(s.key,e),n.Ka.containsKey(s.key)||FE(n,s.key)):pe()}function Tk(n,e){const t=e.key,s=t.path.canonicalString();n.$a.get(t)||n.Qa.has(s)||(Z(Wd,"New document in limbo: "+t),n.Qa.add(s),Hd(n))}function Hd(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ae(Ye.fromString(e)),s=n.za.next();n.Ua.set(s,new hk(t)),n.$a=n.$a.insert(t,s),RE(n.remoteStore,new Ms(Un(Pc(t.path)),s,"TargetPurposeLimboResolution",Rc.ae))}}async function ga(n,e,t){const s=me(n),i=[],r=[],o=[];s.ka.isEmpty()||(s.ka.forEach((a,c)=>{o.push(s.Ha(c,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Dd.Yi(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.La.p_(i),await async function(c,u){const h=me(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(u,g=>F.forEach(g.Hi,m=>h.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>F.forEach(g.Ji,m=>h.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!Lr(f))throw f;Z(xd,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=h.Ts.get(g),C=m.snapshotVersion,N=m.withLastLimboFreeSnapshotVersion(C);h.Ts=h.Ts.insert(g,N)}}}(s.localStore,r))}async function Ik(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){Z(Wd,"User change. New user:",e.toKey());const s=await TE(t.localStore,e);t.currentUser=e,function(r,o){r.Ga.forEach(a=>{a.forEach(c=>{c.reject(new ee(L.CANCELLED,o))})}),r.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ga(t,s.Rs)}}function Ck(n,e){const t=me(n),s=t.Ua.get(e);if(s&&s.Ba)return Re().add(s.key);{let i=Re();const r=t.qa.get(e);if(!r)return i;for(const o of r){const a=t.ka.get(o);i=i.unionWith(a.view.Sa)}return i}}function UE(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ME.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ck.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vk.bind(null,e),e.La.p_=ak.bind(null,e.eventManager),e.La.Ja=lk.bind(null,e.eventManager),e}function Ak(n){const e=me(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ek.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wk.bind(null,e),e}class Bl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return PP(this.persistence,new RP,e.initialUser,this.serializer)}Xa(e){return new wE(Nd.ri,this.serializer)}Za(e){return new LP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bl.provider={build:()=>new Bl};class Rk extends Bl{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ue(this.persistence.referenceDelegate instanceof Fl);const s=this.persistence.referenceDelegate.garbageCollector;return new hP(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new wE(s=>Fl.ri(s,t),this.serializer)}}class Nh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ik.bind(null,this.syncEngine),await ik(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ok}()}createDatastore(e){const t=Mc(e.databaseInfo.databaseId),s=function(r){return new jP(r)}(e.databaseInfo);return function(r,o,a,c){return new HP(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,o,a){return new KP(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Pm(this.syncEngine,t,0),function(){return Im.D()?new Im:new VP}())}createSyncEngine(e,t){return function(i,r,o,a,c,u,h){const f=new dk(i,r,o,a,c,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const r=me(i);Z(ki,"RemoteStore shutting down."),r.W_.add(5),await pa(r),r.z_.shutdown(),r.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Nh.provider={build:()=>new Nh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):hs("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="FirestoreClient";class bk{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{Z(Zs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z(Zs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ud(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vu(n,e){n.asyncQueue.verifyOperationInProgress(),Z(Zs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await TE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Sk(n);Z(Zs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Am(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Am(e.remoteStore,i)),n._onlineComponents=e}async function Sk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Z(Zs,"Using user provided OfflineComponentProvider");try{await Vu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;vr("Error using user provided cache. Falling back to memory cache: "+t),await Vu(n,new Bl)}}else Z(Zs,"Using default OfflineComponentProvider"),await Vu(n,new Rk(void 0));return n._offlineComponents}async function BE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Z(Zs,"Using user provided OnlineComponentProvider"),await Nm(n,n._uninitializedComponentsProvider._online)):(Z(Zs,"Using default OnlineComponentProvider"),await Nm(n,new Nh))),n._onlineComponents}function Pk(n){return BE(n).then(e=>e.syncEngine)}async function jl(n){const e=await BE(n),t=e.eventManager;return t.onListen=fk.bind(null,e.syncEngine),t.onUnlisten=mk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_k.bind(null,e.syncEngine),t}function kk(n,e,t={}){const s=new os;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new Gd({next:g=>{h.su(),o.enqueueAndForget(()=>jd(r,f));const m=g.docs.has(a);!m&&g.fromCache?u.reject(new ee(L.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&c&&c.source==="server"?u.reject(new ee(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new $d(Pc(a.path),h,{includeMetadataChanges:!0,Ta:!0});return Bd(r,f)}(await jl(n),n.asyncQueue,e,t,s)),s.promise}function Nk(n,e,t={}){const s=new os;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new Gd({next:g=>{h.su(),o.enqueueAndForget(()=>jd(r,f)),g.fromCache&&c.source==="server"?u.reject(new ee(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new $d(a,h,{includeMetadataChanges:!0,Ta:!0});return Bd(r,f)}(await jl(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n,e,t){if(!t)throw new ee(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Dk(n,e,t,s){if(e===!0&&s===!0)throw new ee(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xm(n){if(!ae.isDocumentKey(n))throw new ee(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Om(n){if(ae.isDocumentKey(n))throw new ee(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":pe()}function ln(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fc(n);throw new ee(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="firestore.googleapis.com",Mm=!0;class Lm{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$E,this.ssl=Mm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Mm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=EE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cP)throw new ee(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uc{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new BS;switch(s.type){case"firstParty":return new WS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Dm.get(t);s&&(Z("ComponentProvider","Removing Datastore"),Dm.delete(t),s.terminate())}(this),Promise.resolve()}}function xk(n,e,t,s={}){var i;const r=(n=ln(n,Uc))._getSettings(),o=Object.assign(Object.assign({},r),{emulatorOptions:n._getEmulatorOptions()}),a=`${e}:${t}`;r.host!==$E&&r.host!==a&&vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},r),{host:a,ssl:!1,emulatorOptions:s});if(!Gs(c,o)&&(n._setSettings(c),s.mockUserToken)){let u,h;if(typeof s.mockUserToken=="string")u=s.mockUserToken,h=Pt.MOCK_USER;else{u=mv(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=s.mockUserToken.sub||s.mockUserToken.user_id;if(!f)throw new ee(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Pt(f)}n._authCredentials=new jS(new Nv(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class Lt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new js(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class js extends ci{constructor(e,t,s){super(e,t,Pc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new ae(e))}withConverter(e){return new js(this.firestore,e,this._path)}}function Ar(n,e,...t){if(n=Ge(n),qE("collection","path",e),n instanceof Uc){const s=Ye.fromString(e,...t);return Om(s),new js(n,null,s)}{if(!(n instanceof Lt||n instanceof js))throw new ee(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ye.fromString(e,...t));return Om(s),new js(n.firestore,null,s)}}function nt(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=xv.newId()),qE("doc","path",e),n instanceof Uc){const s=Ye.fromString(e,...t);return xm(s),new Lt(n,null,new ae(s))}{if(!(n instanceof Lt||n instanceof js))throw new ee(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ye.fromString(e,...t));return xm(s),new Lt(n.firestore,n instanceof js?n.converter:null,new ae(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="AsyncQueue";class Fm{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new CE(this,"async_queue_retry"),this.Su=()=>{const s=Lu();s&&Z(Vm,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=Lu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Lu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new os;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Lr(e))throw e;Z(Vm,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw hs("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=Fd.createAndSchedule(this,e,t,s,r=>this.Fu(r));return this.fu.push(i),i}Du(){this.gu&&pe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Um(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(n,["next","error","complete"])}class ei extends Uc{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Fm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fm(e),this._firestoreClient=void 0,await e}}}function WE(n,e){const t=typeof n=="object"?n:vd(),s=typeof n=="string"?n:Dl,i=Ac(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=fv("firestore");r&&xk(i,...r)}return i}function Bc(n){if(n._terminated)throw new ee(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ok(n),n._firestoreClient}function Ok(n){var e,t,s;const i=n._freezeSettings(),r=function(a,c,u,h){return new r0(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,jE(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new bk(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rr(It.fromBase64String(e))}catch(t){throw new ee(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rr(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=/^__.*__$/;class Lk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,t,this.fieldTransforms):new da(e,this.data,t,this.fieldTransforms)}}class HE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new li(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function GE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Yd{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Bu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:s,Qu:!1});return i.$u(e),i}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:s,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ql(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(GE(this.Lu)&&Mk.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Vk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Mc(e)}ju(e,t,s,i=!1){return new Yd({Lu:e,methodName:t,zu:s,path:Tt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qc(n){const e=n._freezeSettings(),t=Mc(n._databaseId);return new Vk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function KE(n,e,t,s,i,r={}){const o=n.ju(r.merge||r.mergeFields?2:0,e,t,i);Jd("Data must be an object, but it was:",o,s);const a=zE(s,o);let c,u;if(r.merge)c=new an(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const g=Dh(e,f,t);if(!o.contains(g))throw new ee(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);YE(h,g)||h.push(g)}c=new an(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new Lk(new Qt(a),c,u)}class $c extends Kd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function Fk(n,e,t,s){const i=n.ju(1,e,t);Jd("Data must be an object, but it was:",i,s);const r=[],o=Qt.empty();ai(s,(c,u)=>{const h=Xd(e,c,t);u=Ge(u);const f=i.Uu(h);if(u instanceof $c)r.push(h);else{const g=ma(u,f);g!=null&&(r.push(h),o.set(h,g))}});const a=new an(r);return new HE(o,a,i.fieldTransforms)}function Uk(n,e,t,s,i,r){const o=n.ju(1,e,t),a=[Dh(e,s,t)],c=[i];if(r.length%2!=0)throw new ee(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)a.push(Dh(e,r[g])),c.push(r[g+1]);const u=[],h=Qt.empty();for(let g=a.length-1;g>=0;--g)if(!YE(u,a[g])){const m=a[g];let C=c[g];C=Ge(C);const N=o.Uu(m);if(C instanceof $c)u.push(m);else{const D=ma(C,N);D!=null&&(u.push(m),h.set(m,D))}}const f=new an(u);return new HE(h,f,o.fieldTransforms)}function Bk(n,e,t,s=!1){return ma(t,n.ju(s?4:3,e))}function ma(n,e){if(QE(n=Ge(n)))return Jd("Unsupported field value:",e,n),zE(n,e);if(n instanceof Kd)return function(s,i){if(!GE(i.Lu))throw i.Wu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=ma(a,i.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,e)}return function(s,i){if((s=Ge(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return S0(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ft.fromDate(s);return{timestampValue:Vl(i.serializer,r)}}if(s instanceof ft){const r=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vl(i.serializer,r)}}if(s instanceof zd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Rr)return{bytesValue:fE(i.serializer,s._byteString)};if(s instanceof Lt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Pd(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Qd)return function(o,a){return{mapValue:{fields:{[jv]:{stringValue:qv},[xl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return Rd(a.serializer,u)})}}}}}}(s,i);throw i.Wu(`Unsupported field value: ${Fc(s)}`)}(n,e)}function zE(n,e){const t={};return Mv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ai(n,(s,i)=>{const r=ma(i,e.qu(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function QE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof zd||n instanceof Rr||n instanceof Lt||n instanceof Kd||n instanceof Qd)}function Jd(n,e,t){if(!QE(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const s=Fc(t);throw s==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+s)}}function Dh(n,e,t){if((e=Ge(e))instanceof jc)return e._internalPath;if(typeof e=="string")return Xd(n,e);throw ql("Field path arguments must be of type string or ",n,!1,void 0,t)}const jk=new RegExp("[~\\*/\\[\\]]");function Xd(n,e,t){if(e.search(jk)>=0)throw ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jc(...e.split("."))._internalPath}catch{throw ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ql(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ee(L.INVALID_ARGUMENT,a+n+c)}function YE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qk extends JE{data(){return super.data()}}function Wc(n,e){return typeof e=="string"?Xd(n,e):e instanceof jc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zd{}class ZE extends Zd{}function xh(n,e,...t){let s=[];e instanceof Zd&&s.push(e),s=s.concat(t),function(r){const o=r.filter(c=>c instanceof ef).length,a=r.filter(c=>c instanceof Hc).length;if(o>1||o>0&&a>0)throw new ee(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Hc extends ZE{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Hc(e,t,s)}_apply(e){const t=this._parse(e);return tw(e._query,t),new ci(e.firestore,e.converter,wh(e._query,t))}_parse(e){const t=qc(e.firestore);return function(r,o,a,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ee(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){jm(f,h);const C=[];for(const N of f)C.push(Bm(c,r,N));g={arrayValue:{values:C}}}else g=Bm(c,r,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||jm(f,h),g=Bk(a,o,f,h==="in"||h==="not-in");return at.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ew(n,e,t){const s=e,i=Wc("where",n);return Hc._create(i,s,t)}class ef extends Zd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ef(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)tw(o,c),o=wh(o,c)}(e._query,t),new ci(e.firestore,e.converter,wh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tf extends ZE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tf(e,t)}_apply(e){const t=function(i,r,o){if(i.startAt!==null)throw new ee(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new ee(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yo(r,o)}(e._query,this._field,this._direction);return new ci(e.firestore,e.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new Vr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function $k(n,e="asc"){const t=e,s=Wc("orderBy",n);return tf._create(s,t)}function Bm(n,e,t){if(typeof(t=Ge(t))=="string"){if(t==="")throw new ee(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yv(e)&&t.indexOf("/")!==-1)throw new ee(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ye.fromString(t));if(!ae.isDocumentKey(s))throw new ee(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return tm(n,new ae(s))}if(t instanceof Lt)return tm(n,t._key);throw new ee(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fc(t)}.`)}function jm(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tw(n,e){const t=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ee(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Wk{convertValue(e,t="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ai(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertVectorValue(e){var t,s,i;const r=(i=(s=(t=e.fields)===null||t===void 0?void 0:t[xl].arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>tt(o.doubleValue));return new Qd(r)}convertGeoPoint(e){return new zd(tt(e.latitude),tt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Sc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const t=Qs(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Ue(vE(s));const i=new zo(s.get(1),s.get(3)),r=new ae(s.popFirst(5));return i.isEqual(t)||hs(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sw extends JE{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Wc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class dl extends sw{data(e={}){return super.data(e)}}class iw{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new _o(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new dl(this._firestore,this._userDataWriter,s.key,s,new _o(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new dl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _o(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new dl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _o(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Hk(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Hk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n){n=ln(n,Lt);const e=ln(n.firestore,ei);return kk(Bc(e),n._key).then(t=>ow(e,n,t))}class nf extends Wk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,t)}}function rw(n){n=ln(n,ci);const e=ln(n.firestore,ei),t=Bc(e),s=new nf(e);return XE(n._query),Nk(t,n._query).then(i=>new iw(e,s,n,i))}function as(n,e,t){n=ln(n,Lt);const s=ln(n.firestore,ei),i=nw(n.converter,e,t);return of(s,[KE(qc(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Cn.none())])}function sf(n,e,t,...s){n=ln(n,Lt);const i=ln(n.firestore,ei),r=qc(i);let o;return o=typeof(e=Ge(e))=="string"||e instanceof jc?Uk(r,"updateDoc",n._key,e,t,s):Fk(r,"updateDoc",n._key,e),of(i,[o.toMutation(n._key,Cn.exists(!0))])}function rf(n,e){const t=ln(n.firestore,ei),s=nt(n),i=nw(n.converter,e);return of(t,[KE(qc(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Cn.exists(!1))]).then(()=>s)}function Gk(n,...e){var t,s,i;n=Ge(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Um(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Um(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,u,h;if(n instanceof Lt)u=ln(n.firestore,ei),h=Pc(n._key.path),c={next:f=>{e[o]&&e[o](ow(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=ln(n,ci);u=ln(f.firestore,ei),h=f._query;const g=new nf(u);c={next:m=>{e[o]&&e[o](new iw(u,g,f,m))},error:e[o+1],complete:e[o+2]},XE(n._query)}return function(g,m,C,N){const D=new Gd(N),j=new $d(m,D,C);return g.asyncQueue.enqueueAndForget(async()=>Bd(await jl(g),j)),()=>{D.su(),g.asyncQueue.enqueueAndForget(async()=>jd(await jl(g),j))}}(Bc(u),h,a,c)}function of(n,e){return function(s,i){const r=new os;return s.asyncQueue.enqueueAndForget(async()=>yk(await Pk(s),i,r)),r.promise}(Bc(n),e)}function ow(n,e,t){const s=t.docs.get(e._key),i=new nf(n);return new sw(n,i,e._key,s,new _o(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Or=i})(Li),Si(new Ks("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new ei(new qS(s.getProvider("auth-internal")),new HS(o,s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Fn($g,Wg,e),Fn($g,Wg,"esm2017")})();function af(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kk=aw,lw=new ha("auth","Firebase",aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new Cc("@firebase/auth");function zk(n,...e){$l.logLevel<=Ie.WARN&&$l.warn(`Auth (${Li}): ${n}`,...e)}function fl(n,...e){$l.logLevel<=Ie.ERROR&&$l.error(`Auth (${Li}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n,...e){throw lf(n,...e)}function jn(n,...e){return lf(n,...e)}function cw(n,e,t){const s=Object.assign(Object.assign({},Kk()),{[e]:t});return new ha("auth","Firebase",s).create(e,{appName:n.name})}function ls(n){return cw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lf(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return lw.create(n,...e)}function he(n,e,...t){if(!n)throw lf(e,...t)}function ns(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fl(e),new Error(e)}function fs(n,e){n||ns(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qk(){return qm()==="http:"||qm()==="https:"}function qm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qk()||pb()||"connection"in navigator)?navigator.onLine:!0}function Jk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.shortDelay=e,this.longDelay=t,fs(t>e,"Short delay should be less than long delay!"),this.isMobile=_d()||_v()}get(){return Yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,e){fs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ns("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ns("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ns("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new _a(3e4,6e4);function vs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gn(n,e,t,s,i={}){return hw(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=xr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},r);return fb()||(u.referrerPolicy="no-referrer"),uw.fetch()(dw(n,n.config.apiHost,t,a),u)})}async function hw(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Xk),e);try{const i=new tN(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Xa(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xa(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cw(n,h,u);Sn(n,h)}}catch(i){if(i instanceof _s)throw i;Sn(n,"network-request-failed",{message:String(i)})}}async function ya(n,e,t,s,i={}){const r=await Gn(n,e,t,s,i);return"mfaPendingCredential"in r&&Sn(n,"multi-factor-auth-required",{_serverResponse:r}),r}function dw(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?cf(n.config,i):`${n.config.apiScheme}://${i}`}function eN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(jn(this.auth,"network-request-failed")),Zk.get())})}}function Xa(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=jn(n,e,s);return i.customData._tokenResponse=t,i}function $m(n){return n!==void 0&&n.enterprise!==void 0}class nN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return eN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sN(n,e){return Gn(n,"GET","/v2/recaptchaConfig",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(n,e){return Gn(n,"POST","/v1/accounts:delete",e)}async function fw(n,e){return Gn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rN(n,e=!1){const t=Ge(n),s=await t.getIdToken(e),i=uf(s);he(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:No(Fu(i.auth_time)),issuedAtTime:No(Fu(i.iat)),expirationTime:No(Fu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Fu(n){return Number(n)*1e3}function uf(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sl(t);return i?JSON.parse(i):(fl("Failed to decode base64 JWT payload"),null)}catch(i){return fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wm(n){const e=uf(n);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof _s&&oN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function oN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(n){var e;const t=n.auth,s=await n.getIdToken(),i=await br(n,fw(t,{idToken:s}));he(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?pw(r.providerUserInfo):[],a=cN(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Mh(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function lN(n){const e=Ge(n);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cN(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function pw(n){return n.map(e=>{var{providerId:t}=e,s=af(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(n,e){const t=await hw(n,{},async()=>{const s=xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=dw(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hN(n,e){return Gn(n,"POST","/v2/accounts:revokeToken",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=Wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await uN(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new cr;return s&&(he(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(he(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(he(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return ns("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n,e){he(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ss{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Mh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await br(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rN(this,e)}reload(){return lN(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Wl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(ls(this.auth));const e=await this.getIdToken();return await br(this,iN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,u,h;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,m=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(a=t.tenantId)!==null&&a!==void 0?a:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,j=(u=t.createdAt)!==null&&u!==void 0?u:void 0,q=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:G,isAnonymous:ve,providerData:Ee,stsTokenManager:A}=t;he($&&A,e,"internal-error");const v=cr.fromJSON(this.name,A);he(typeof $=="string",e,"internal-error"),bs(f,e.name),bs(g,e.name),he(typeof G=="boolean",e,"internal-error"),he(typeof ve=="boolean",e,"internal-error"),bs(m,e.name),bs(C,e.name),bs(N,e.name),bs(D,e.name),bs(j,e.name),bs(q,e.name);const I=new ss({uid:$,auth:e,email:g,emailVerified:G,displayName:f,isAnonymous:ve,photoURL:C,phoneNumber:m,tenantId:N,stsTokenManager:v,createdAt:j,lastLoginAt:q});return Ee&&Array.isArray(Ee)&&(I.providerData=Ee.map(R=>Object.assign({},R))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,t,s=!1){const i=new cr;i.updateFromServerResponse(t);const r=new ss({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Wl(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];he(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?pw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new cr;a.updateFromIdToken(s);const c=new ss({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Map;function is(n){fs(n instanceof Function,"Expected a class definition");let e=Hm.get(n);return e?(fs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hm.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gw.type="NONE";const Gm=gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n,e,t){return`firebase:${n}:${e}:${t}`}class ur{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=pl(this.userKey,i.apiKey,r),this.fullPersistenceKey=pl("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ur(is(Gm),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||is(Gm);const o=pl(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const f=ss._fromJSON(e,h);u!==r&&(a=f),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ur(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ur(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Tw(e))return"Webos";if(_w(e))return"Safari";if((e.includes("chrome/")||yw(e))&&!e.includes("edge/"))return"Chrome";if(Ew(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mw(n=Ft()){return/firefox\//i.test(n)}function _w(n=Ft()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yw(n=Ft()){return/crios\//i.test(n)}function vw(n=Ft()){return/iemobile/i.test(n)}function Ew(n=Ft()){return/android/i.test(n)}function ww(n=Ft()){return/blackberry/i.test(n)}function Tw(n=Ft()){return/webos/i.test(n)}function hf(n=Ft()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dN(n=Ft()){var e;return hf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fN(){return gb()&&document.documentMode===10}function Iw(n=Ft()){return hf(n)||Ew(n)||Tw(n)||ww(n)||/windows phone/i.test(n)||vw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n,e=[]){let t;switch(n){case"Browser":t=Km(Ft());break;case"Worker":t=`${Km(Ft())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Li}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(n,e={}){return Gn(n,"GET","/v2/passwordPolicy",vs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=6;class _N{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:mN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new pN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=is(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fw(this,{idToken:e}),s=await ss._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(ls(this));const t=e?Ge(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(is(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gN(this),t=new _N(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hN(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&is(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[is(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ui(n){return Ge(n)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rb(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vN(n){Gc=n}function Aw(n){return Gc.loadJS(n)}function EN(){return Gc.recaptchaEnterpriseScript}function wN(){return Gc.gapiScript}function TN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class IN{constructor(){this.enterprise=new CN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class CN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const AN="recaptcha-enterprise",Rw="NO_RECAPTCHA";class RN{constructor(e){this.type=AN,this.auth=ui(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{sN(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nN(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;$m(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Rw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IN().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&$m(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=EN();c.length!==0&&(c+=a),Aw(c).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Qm(n,e,t,s=!1,i=!1){const r=new RN(n);let o;if(i)o=Rw;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hl(n,e,t,s,i){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qm(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Qm(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(n,e){const t=Ac(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Gs(r,e??{}))return i;Sn(i,"already-initialized")}return t.initialize({options:e})}function SN(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(is);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function PN(n,e,t){const s=ui(n);he(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=bw(e),{host:o,port:a}=kN(e),c=a===null?"":`:${a}`,u={url:`${r}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){he(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),he(Gs(u,s.config.emulator)&&Gs(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,NN()}function bw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kN(n){const e=bw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ym(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ym(o)}}}function Ym(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function NN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ns("not implemented")}_getIdTokenResponse(e){return ns("not implemented")}_linkToIdToken(e,t){return ns("not implemented")}_getReauthenticationResolver(e){return ns("not implemented")}}async function DN(n,e){return Gn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(n,e){return ya(n,"POST","/v1/accounts:signInWithPassword",vs(n,e))}async function Sw(n,e){return Gn(n,"POST","/v1/accounts:sendOobCode",vs(n,e))}async function ON(n,e){return Sw(n,e)}async function MN(n,e){return Sw(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(n,e){return ya(n,"POST","/v1/accounts:signInWithEmailLink",vs(n,e))}async function VN(n,e){return ya(n,"POST","/v1/accounts:signInWithEmailLink",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends df{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Zo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Zo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,t,"signInWithPassword",xN);case"emailLink":return LN(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,s,"signUpPassword",DN);case"emailLink":return VN(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e){return ya(n,"POST","/v1/accounts:signInWithIdp",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="http://localhost";class Ni extends df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=af(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ni(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,hr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){const e={requestUri:FN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BN(n){const e=ho(fo(n)).link,t=e?ho(fo(e)).deep_link_id:null,s=ho(fo(n)).deep_link_id;return(s?ho(fo(s)).link:null)||s||t||e||n}class ff{constructor(e){var t,s,i,r,o,a;const c=ho(fo(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,f=UN((i=c.mode)!==null&&i!==void 0?i:null);he(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=BN(e);try{return new ff(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(e,t){return Zo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ff.parseLink(t);return he(s,"argument-error"),Zo._fromEmailAndCode(e,s.code,s.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Pw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends va{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ns.credential(e.oauthAccessToken)}catch{return null}}}Ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ns.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ni._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ds.credential(t,s)}catch{return null}}}Ds.GOOGLE_SIGN_IN_METHOD="google.com";Ds.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends va{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xs.credential(e.oauthAccessToken)}catch{return null}}}xs.GITHUB_SIGN_IN_METHOD="github.com";xs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends va{constructor(){super("twitter.com")}static credential(e,t){return Ni._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Os.credential(t,s)}catch{return null}}}Os.TWITTER_SIGN_IN_METHOD="twitter.com";Os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(n,e){return ya(n,"POST","/v1/accounts:signUp",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await ss._fromIdTokenResponse(e,s,i),o=Jm(s);return new Di({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Jm(s);return new Di({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Jm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends _s{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Gl(e,t,s,i)}}function kw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(n,r,e,s):r})}async function qN(n,e,t=!1){const s=await br(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Di._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(n,e,t=!1){const{auth:s}=n;if(sn(s.app))return Promise.reject(ls(s));const i="reauthenticate";try{const r=await br(n,kw(s,i,e,n),t);he(r.idToken,s,"internal-error");const o=uf(r.idToken);he(o,s,"internal-error");const{sub:a}=o;return he(n.uid===a,s,"user-mismatch"),Di._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e,t=!1){if(sn(n.app))return Promise.reject(ls(n));const s="signIn",i=await kw(n,s,e),r=await Di._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function WN(n,e){return Nw(ui(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n){const e=ui(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HN(n,e,t){const s=ui(n);await Hl(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",MN)}async function GN(n,e,t){if(sn(n.app))return Promise.reject(ls(n));const s=ui(n),o=await Hl(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jN).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Dw(n),c}),a=await Di._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function KN(n,e,t){return sn(n.app)?Promise.reject(ls(n)):WN(Ge(n),Ur.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Dw(n),s})}async function zN(n,e){const t=Ge(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:r}=await ON(t.auth,i);r!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(n,e){return Gn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ge(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await br(s,QN(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function YN(n,e,t,s){return Ge(n).onIdTokenChanged(e,t,s)}function JN(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function pf(n,e,t,s){return Ge(n).onAuthStateChanged(e,t,s)}function gf(n){return Ge(n).signOut()}const Kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kl,"1"),this.storage.removeItem(Kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=1e3,ZN=10;class Mw extends Ow{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);fN()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZN):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},XN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mw.type="LOCAL";const e1=Mw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends Ow{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lw.type="SESSION";const Vw=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Kc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,r)),c=await t1(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=mf("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function s1(n){qn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function i1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function o1(){return Fw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebaseLocalStorageDb",a1=1,zl="firebaseLocalStorage",Bw="fbase_key";class Ea{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zc(n,e){return n.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function l1(){const n=indexedDB.deleteDatabase(Uw);return new Ea(n).toPromise()}function Lh(){const n=indexedDB.open(Uw,a1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(zl,{keyPath:Bw})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(zl)?e(s):(s.close(),await l1(),e(await Lh()))})})}async function Xm(n,e,t){const s=zc(n,!0).put({[Bw]:e,value:t});return new Ea(s).toPromise()}async function c1(n,e){const t=zc(n,!1).get(e),s=await new Ea(t).toPromise();return s===void 0?null:s.value}function Zm(n,e){const t=zc(n,!0).delete(e);return new Ea(t).toPromise()}const u1=800,h1=3;class jw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>h1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(o1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await i1(),!this.activeServiceWorker)return;this.sender=new n1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lh();return await Xm(e,Kl,"1"),await Zm(e,Kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>c1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=zc(i,!1).getAll();return new Ea(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jw.type="LOCAL";const d1=jw;new _a(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(n,e){return e?is(e):(he(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function p1(n){return Nw(n.auth,new _f(n),n.bypassAuthState)}function g1(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),$N(t,new _f(n),n.bypassAuthState)}async function m1(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),qN(t,new _f(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p1;case"linkViaPopup":case"linkViaRedirect":return m1;case"reauthViaPopup":case"reauthViaRedirect":return g1;default:Sn(this.auth,"internal-error")}}resolve(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=new _a(2e3,1e4);class Zi extends qw{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){fs(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_1.get())};e()}}Zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="pendingRedirect",gl=new Map;class v1 extends qw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const s=await E1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E1(n,e){const t=I1(e),s=T1(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function w1(n,e){gl.set(n._key(),e)}function T1(n){return is(n._redirectPersistence)}function I1(n){return pl(y1,n.config.apiKey,n.name)}async function C1(n,e,t=!1){if(sn(n.app))return Promise.reject(ls(n));const s=ui(n),i=f1(s,e),o=await new v1(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=10*60*1e3;class R1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!$w(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(jn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A1&&this.cachedEventUids.clear(),this.cachedEventUids.has(e_(e))}saveEventToCache(e){this.cachedEventUids.add(e_(e)),this.lastProcessedEventTime=Date.now()}}function e_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $w({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $w(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(n,e={}){return Gn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k1=/^https?/;async function N1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await S1(n);for(const t of e)try{if(D1(t))return}catch{}Sn(n,"unauthorized-domain")}function D1(n){const e=Oh(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!k1.test(t))return!1;if(P1.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new _a(3e4,6e4);function t_(){const n=qn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function O1(n){return new Promise((e,t)=>{var s,i,r;function o(){t_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{t_(),t(jn(n,"network-request-failed"))},timeout:x1.get()})}if(!((i=(s=qn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=qn().gapi)===null||r===void 0)&&r.load)o();else{const a=TN("iframefcb");return qn()[a]=()=>{gapi.load?o():t(jn(n,"network-request-failed"))},Aw(`${wN()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ml=null,e})}let ml=null;function M1(n){return ml=ml||O1(n),ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new _a(5e3,15e3),V1="__/auth/iframe",F1="emulator/auth/iframe",U1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j1(n){const e=n.config;he(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cf(e,F1):`https://${n.config.authDomain}/${V1}`,s={apiKey:e.apiKey,appName:n.name,v:Li},i=B1.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${xr(s).slice(1)}`}async function q1(n){const e=await M1(n),t=qn().gapi;return he(t,n,"internal-error"),e.open({where:document.body,url:j1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U1,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=jn(n,"network-request-failed"),a=qn().setTimeout(()=>{r(o)},L1.get());function c(){qn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W1=500,H1=600,G1="_blank",K1="http://localhost";class n_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z1(n,e,t,s=W1,i=H1){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$1),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Ft().toLowerCase();t&&(a=yw(u)?G1:t),mw(u)&&(e=e||K1,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[m,C])=>`${g}${m}=${C},`,"");if(dN(u)&&a!=="_self")return Q1(e||"",a),new n_(null);const f=window.open(e||"",a,h);he(f,n,"popup-blocked");try{f.focus()}catch{}return new n_(f)}function Q1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="__/auth/handler",J1="emulator/auth/handler",X1=encodeURIComponent("fac");async function s_(n,e,t,s,i,r){he(n.config.authDomain,n,"auth-domain-config-required"),he(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Li,eventId:i};if(e instanceof Pw){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",lh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof va){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${X1}=${encodeURIComponent(c)}`:"";return`${Z1(n)}?${xr(a).slice(1)}${u}`}function Z1({config:n}){return n.emulator?cf(n,J1):`https://${n.authDomain}/${Y1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="webStorageSupport";class eD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vw,this._completeRedirectFn=C1,this._overrideRedirectResult=w1}async _openPopup(e,t,s,i){var r;fs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await s_(e,t,s,Oh(),i);return z1(e,o,mf())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await s_(e,t,s,Oh(),i);return s1(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(fs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await q1(e),s=new R1(e);return t.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uu,{type:Uu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Uu];o!==void 0&&t(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=N1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iw()||_w()||hf()}}const tD=eD;var i_="@firebase/auth",r_="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iD(n){Si(new Ks("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cw(n)},u=new yN(s,i,r,c);return SN(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Si(new Ks("auth-internal",e=>{const t=ui(e.getProvider("auth").getImmediate());return(s=>new nD(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(i_,r_,sD(n)),Fn(i_,r_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=5*60,oD=gv("authIdTokenMaxAge")||rD;let o_=null;const aD=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>oD)return;const i=t==null?void 0:t.token;o_!==i&&(o_=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ps(n=vd()){const e=Ac(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bN(n,{popupRedirectResolver:tD,persistence:[d1,e1,Vw]}),s=gv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=aD(r.toString());JN(t,o,()=>o(t.currentUser)),YN(t,a=>o(a))}}const i=dv("auth");return i&&PN(t,`http://${i}`),t}function lD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vN({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=jn("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",lD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iD("Browser");var a_={};const l_="@firebase/database",c_="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ww="";function cD(n){Ww=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Wo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ys(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uD(e)}}catch{}return new hD},Ti=Hw("localStorage"),dD=Hw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Cc("@firebase/database"),fD=function(){let n=1;return function(){return n++}}(),Gw=function(n){const e=Pb(n),t=new Ab;t.update(e);const s=t.digest();return gd.encodeByteArray(s)},wa=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wa.apply(null,s):typeof s=="object"?e+=ht(s):e+=s,e+=" "}return e};let Do=null,u_=!0;const pD=function(n,e){H(!0,"Can't turn on custom loggers persistently."),dr.logLevel=Ie.VERBOSE,Do=dr.log.bind(dr)},xt=function(...n){if(u_===!0&&(u_=!1,Do===null&&dD.get("logging_enabled")===!0&&pD()),Do){const e=wa.apply(null,n);Do(e)}},Ta=function(n){return function(...e){xt(n,...e)}},Vh=function(...n){const e="FIREBASE INTERNAL ERROR: "+wa(...n);dr.error(e)},gs=function(...n){const e=`FIREBASE FATAL ERROR: ${wa(...n)}`;throw dr.error(e),new Error(e)},cn=function(...n){const e="FIREBASE WARNING: "+wa(...n);dr.warn(e)},gD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},mD=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Sr="[MIN_NAME]",xi="[MAX_NAME]",Br=function(n,e){if(n===e)return 0;if(n===Sr||e===xi)return-1;if(e===Sr||n===xi)return 1;{const t=h_(n),s=h_(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},_D=function(n,e){return n===e?0:n<e?-1:1},oo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ht(e))},yf=function(n){if(typeof n!="object"||n===null)return ht(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ht(e[s]),t+=":",t+=yf(n[e[s]]);return t+="}",t},zw=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Xt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Qw=function(n){H(!Kw(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},yD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ED(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const wD=new RegExp("^-?(0*)\\d{1,10}$"),TD=-2147483648,ID=2147483647,h_=function(n){if(wD.test(n)){const e=Number(n);if(e>=TD&&e<=ID)return e}return null},Ia=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw cn("Exception was thrown by user callback.",t),e},Math.floor(0))}},CD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){cn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',cn(e)}}class _l{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_l.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="5",Yw="v",Jw="s",Xw="r",Zw="f",eT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tT="ls",nT="p",Fh="ac",sT="websocket",iT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,u=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function oT(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let s;if(e===sT)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===iT)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bD(n)&&(t.ns=n.namespace);const i=[];return Xt(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.counters_={}}incrementCounter(e,t=1){ys(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ob(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu={},ju={};function Ef(n){const e=n.toString();return Bu[e]||(Bu[e]=new SD),Bu[e]}function PD(n,e){const t=n.toString();return ju[t]||(ju[t]=e()),ju[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ia(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="start",ND="close",DD="pLPCommand",xD="pRTLPCB",aT="id",lT="pw",cT="ser",OD="cb",MD="seg",LD="ts",VD="d",FD="dframe",uT=1870,hT=30,UD=uT-hT,BD=25e3,jD=3e4;class er{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ta(e),this.stats_=Ef(t),this.urlFn=c=>(this.appCheckToken&&(c[Fh]=this.appCheckToken),oT(t,iT,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jD)),mD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wf((...r)=>{const[o,a,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===d_)this.id=a,this.password=c;else if(o===ND)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[d_]="t",s[cT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[OD]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Yw]=vf,this.transportSessionId&&(s[Jw]=this.transportSessionId),this.lastSessionId&&(s[tT]=this.lastSessionId),this.applicationId&&(s[nT]=this.applicationId),this.appCheckToken&&(s[Fh]=this.appCheckToken),typeof location<"u"&&location.hostname&&eT.test(location.hostname)&&(s[Xw]=Zw);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){er.forceAllow_=!0}static forceDisallow(){er.forceDisallow_=!0}static isAvailable(){return er.forceAllow_?!0:!er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yD()&&!vD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ht(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=uv(t),i=zw(s,UD);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[FD]="t",s[aT]=e,s[lT]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ht(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wf{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fD(),window[DD+this.uniqueCallbackIdentifier]=e,window[xD+this.uniqueCallbackIdentifier]=t,this.myIFrame=wf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xt("frame writing exception"),a.stack&&xt(a.stack),xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[aT]=this.myID,e[lT]=this.myPW,e[cT]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hT+s.length<=uT;){const o=this.pendingSegs.shift();s=s+"&"+MD+i+"="+o.seg+"&"+LD+i+"="+o.ts+"&"+VD+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(BD)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=16384,$D=45e3;let Ql=null;typeof MozWebSocket<"u"?Ql=MozWebSocket:typeof WebSocket<"u"&&(Ql=WebSocket);class En{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ta(this.connId),this.stats_=Ef(t),this.connURL=En.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Yw]=vf,typeof location<"u"&&location.hostname&&eT.test(location.hostname)&&(o[Xw]=Zw),t&&(o[Jw]=t),s&&(o[tT]=s),i&&(o[Fh]=i),r&&(o[nT]=r),oT(e,sT,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ti.set("previous_websocket_failure",!0);try{let s;mb(),this.mySock=new Ql(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ql!==null&&!En.forceDisallow_}static previouslyFailed(){return Ti.isInMemoryStorage||Ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Wo(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ht(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=zw(t,qD);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($D))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}En.responsesRequiredToBeHealthy=2;En.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{static get ALL_TRANSPORTS(){return[er,En]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=En&&En.isAvailable();let s=t&&!En.previouslyFailed();if(e.webSocketOnly&&(t||cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[En];else{const i=this.transports_=[];for(const r of ea.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ea.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=6e4,HD=5e3,GD=10*1024,KD=100*1024,qu="t",f_="d",zD="s",p_="r",QD="e",g_="o",m_="a",__="n",y_="p",YD="h";class JD{constructor(e,t,s,i,r,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ta("c:"+this.id+":"),this.transportManager_=new ea(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qu in e){const t=e[qu];t===m_?this.upgradeIfSecondaryHealthy_():t===p_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===g_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=oo("t",e),s=oo("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:y_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:m_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:__,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=oo("t",e),s=oo("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=oo(qu,e);if(f_ in e){const s=e[f_];if(t===YD){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===__){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===zD?this.onConnectionShutdown_(s):t===p_?this.onReset_(s):t===QD?Vh("Server Error: "+s):t===g_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),vf!==s&&cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),xo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:y_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends fT{static getInstance(){return new Yl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=32,E_=768;class qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Me(){return new qe("")}function be(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ti(n){return n.pieces_.length-n.pieceNum_}function We(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new qe(n.pieces_,e)}function pT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function XD(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function gT(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function mT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new qe(e,0)}function dt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof qe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new qe(t,0)}function Ce(n){return n.pieceNum_>=n.pieces_.length}function Wt(n,e){const t=be(n),s=be(e);if(t===null)return e;if(t===s)return Wt(We(n),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function _T(n,e){if(ti(n)!==ti(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function wn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ti(n)>ti(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class ZD{constructor(e,t){this.errorPrefix_=t,this.parts_=gT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ic(this.parts_[s]);yT(this)}}function ex(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ic(e),yT(n)}function tx(n){const e=n.parts_.pop();n.byteLength_-=Ic(e),n.parts_.length>0&&(n.byteLength_-=1)}function yT(n){if(n.byteLength_>E_)throw new Error(n.errorPrefix_+"has a key path longer than "+E_+" bytes ("+n.byteLength_+").");if(n.parts_.length>v_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+v_+") or object contains a cycle "+Ei(n))}function Ei(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends fT{static getInstance(){return new Tf}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=1e3,nx=60*5*1e3,w_=30*1e3,sx=1.3,ix=3e4,rx="server_kill",T_=3;class cs extends dT{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=cs.nextPersistentConnectionId_++,this.log_=Ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=nx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ht(r)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new md,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;cs.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ys(e,"w")){const s=yr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=w_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ib(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ht(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Vh("Unrecognized action received from server: "+ht(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ix&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cs.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?xt("getToken() completed but was canceled"):(xt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new JD(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{cn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(rx)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&cn(f),c())}}}interrupt(e){xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],lh(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>yf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new qe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){xt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=T_&&(this.reconnectDelay_=w_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=T_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ww.replace(/\./g,"-")]=1,_d()?e["framework.cordova"]=1:_v()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yl.getInstance().currentlyOnline();return lh(this.interruptReasons_)&&e}}cs.nextPersistentConnectionId_=0;cs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Te(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Te(Sr,e),i=new Te(Sr,t);return this.compare(s,i)!==0}minPost(){return Te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;class vT extends Qc{static get __EMPTY_NODE(){return Za}static set __EMPTY_NODE(e){Za=e}compare(e,t){return Br(e.name,t.name)}isDefinedOn(e){throw Dr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Te.MIN}maxPost(){return new Te(xi,Za)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new Te(e,Za)}toString(){return".key"}}const fr=new vT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _t{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??_t.RED,this.left=i??Jt.EMPTY_NODE,this.right=r??Jt.EMPTY_NODE}copy(e,t,s,i,r){return new _t(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Jt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class ox{copy(e,t,s,i,r){return this}insert(e,t,s){return new _t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Jt{constructor(e,t=Jt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Jt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(e){return new Jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new el(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new el(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new el(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new el(this.root_,null,this.comparator_,!0,e)}}Jt.EMPTY_NODE=new ox;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(n,e){return Br(n.name,e.name)}function If(n,e){return Br(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;function lx(n){Uh=n}const ET=function(n){return typeof n=="number"?"number:"+Qw(n):"string:"+n},wT=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ys(e,".sv"),"Priority must be a string or number.")}else H(n===Uh||n.isEmpty(),"priority of unexpected type.");H(n===Uh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I_;class gt{static set __childrenNodeConstructor(e){I_=e}static get __childrenNodeConstructor(){return I_}constructor(e,t=gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ce(e)?this:be(e)===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=be(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(H(s!==".priority"||ti(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ET(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Qw(this.value_):e+=this.value_,this.lazyHash_=Gw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof gt.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=gt.VALUE_TYPE_ORDER.indexOf(t),r=gt.VALUE_TYPE_ORDER.indexOf(s);return H(i>=0,"Unknown leaf type: "+t),H(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TT,IT;function cx(n){TT=n}function ux(n){IT=n}class hx extends Qc{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Br(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(xi,new gt("[PRIORITY-POST]",IT))}makePost(e,t){const s=TT(e);return new Te(t,new gt("[PRIORITY-POST]",s))}toString(){return".priority"}}const et=new hx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=Math.log(2);class fx{constructor(e){const t=r=>parseInt(Math.log(r)/dx,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jl=function(n,e,t,s){n.sort(e);const i=function(c,u){const h=u-c;let f,g;if(h===0)return null;if(h===1)return f=n[c],g=t?t(f):f,new _t(g,f.node,_t.BLACK,null,null);{const m=parseInt(h/2,10)+c,C=i(c,m),N=i(m+1,u);return f=n[m],g=t?t(f):f,new _t(g,f.node,_t.BLACK,C,N)}},r=function(c){let u=null,h=null,f=n.length;const g=function(C,N){const D=f-C,j=f;f-=C;const q=i(D+1,j),$=n[D],G=t?t($):$;m(new _t(G,$.node,N,null,q))},m=function(C){u?(u.left=C,u=C):(h=C,u=C)};for(let C=0;C<c.count;++C){const N=c.nextBitIsOne(),D=Math.pow(2,c.count-(C+1));N?g(D,_t.BLACK):(g(D,_t.BLACK),g(D,_t.RED))}return h},o=new fx(n.length),a=r(o);return new Jt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;const Gi={};class rs{static get Default(){return H(Gi&&et,"ChildrenNode.ts has not been loaded"),$u=$u||new rs({".priority":Gi},{".priority":et}),$u}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=yr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Jt?t:null}hasIndex(e){return ys(this.indexSet_,e.toString())}addIndex(e,t){H(e!==fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(Te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Jl(s,e.getCompare()):a=Gi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new rs(h,u)}addToIndexes(e,t){const s=Pl(this.indexes_,(i,r)=>{const o=yr(this.indexSet_,r);if(H(o,"Missing index implementation for "+r),i===Gi)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Te.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Jl(a,o.getCompare())}else return Gi;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new Te(e.name,a))),c.insert(e,e.node)}});return new rs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Pl(this.indexes_,i=>{if(i===Gi)return i;{const r=t.get(e.name);return r?i.remove(new Te(e.name,r)):i}});return new rs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;class de{static get EMPTY_NODE(){return lo||(lo=new de(new Jt(If),null,rs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&wT(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new de(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?lo:t}}getChild(e){const t=be(e);return t===null?this:this.getImmediateChild(t).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Te(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?lo:this.priorityNode_;return new de(i,o,r)}}updateChild(e,t){const s=be(e);if(s===null)return t;{H(be(e)!==".priority"||ti(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(We(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(et,(o,a)=>{t[o]=a.val(e),s++,r&&de.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ET(this.getPriority().val())+":"),this.forEachChild(et,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Gw(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Te(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Te(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Te(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ca?-1:0}withIndex(e){if(e===fr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new de(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(et),i=t.getIterator(et);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fr?null:this.indexMap_.get(e.toString())}}de.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class px extends de{constructor(){super(new Jt(If),de.EMPTY_NODE,rs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return de.EMPTY_NODE}isEmpty(){return!1}}const Ca=new px;Object.defineProperties(Te,{MIN:{value:new Te(Sr,de.EMPTY_NODE)},MAX:{value:new Te(xi,Ca)}});vT.__EMPTY_NODE=de.EMPTY_NODE;gt.__childrenNodeConstructor=de;lx(Ca);ux(Ca);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=!0;function wt(n,e=null){if(n===null)return de.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new gt(t,wt(e))}if(!(n instanceof Array)&&gx){const t=[];let s=!1;if(Xt(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=wt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Te(o,c)))}}),t.length===0)return de.EMPTY_NODE;const r=Jl(t,ax,o=>o.name,If);if(s){const o=Jl(t,et.getCompare());return new de(r,wt(e),new rs({".priority":o},{".priority":et}))}else return new de(r,wt(e),rs.Default)}else{let t=de.EMPTY_NODE;return Xt(n,(s,i)=>{if(ys(n,s)&&s.substring(0,1)!=="."){const r=wt(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(wt(e))}}cx(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx extends Qc{constructor(e){super(),this.indexPath_=e,H(!Ce(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Br(e.name,t.name):r}makePost(e,t){const s=wt(e),i=de.EMPTY_NODE.updateChild(this.indexPath_,s);return new Te(t,i)}maxPost(){const e=de.EMPTY_NODE.updateChild(this.indexPath_,Ca);return new Te(xi,e)}toString(){return gT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x extends Qc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Br(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,t){const s=wt(e);return new Te(t,s)}toString(){return".value"}}const yx=new _x;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(n){return{type:"value",snapshotNode:n}}function Pr(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ta(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function na(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function vx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ta(t,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Pr(t,s)):o.trackChildChange(na(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(et,(i,r)=>{t.hasChild(i)||s.trackChildChange(ta(i,r))}),t.isLeafNode()||t.forEachChild(et,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(na(i,r,o))}else s.trackChildChange(Pr(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?de.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.indexedFilter_=new Cf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sa.getStartPost_(e),this.endPost_=sa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new Te(t,s))||(s=de.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=de.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(de.EMPTY_NODE);const r=this;return t.forEachChild(et,(o,a)=>{r.matches(new Te(o,a))||(i=i.updateImmediateChild(o,de.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new sa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new Te(t,s))||(s=de.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=de.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=de.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(de.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,de.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,m)=>f(m,g)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const c=new Te(t,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const f=a.getImmediateChild(t);let g=i.getChildAfterChild(this.index_,u,this.reverse_);for(;g!=null&&(g.name===t||a.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const m=g==null?1:o(g,c);if(h&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(na(t,s,f)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(ta(t,f));const N=a.updateImmediateChild(t,de.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(Pr(g.name,g.node)),N.updateImmediateChild(g.name,g.node)):N}}else return s.isEmpty()?e:h&&o(u,c)>=0?(r!=null&&(r.trackChildChange(ta(u.name,u.node)),r.trackChildChange(Pr(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(u.name,de.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Sr}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===et}copy(){const e=new Af;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wx(n){return n.loadsAllData()?new Cf(n.getIndex()):n.hasLimit()?new Ex(n):new sa(n)}function C_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===et?t="$priority":n.index_===yx?t="$value":n.index_===fr?t="$key":(H(n.index_ instanceof mx,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ht(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ht(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ht(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ht(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ht(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function A_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==et&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends dT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ta("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Xl.getListenId_(e,s),a={};this.listens_[o]=a;const c=C_(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),yr(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",i(g,null)}})}unlisten(e,t){const s=Xl.getListenId_(e,t);delete this.listens_[s]}get(e){const t=C_(e._queryParams),s=e._path.toString(),i=new md;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Wo(a.responseText)}catch{cn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&cn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this.rootNode_=de.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return{value:null,children:new Map}}function AT(n,e,t){if(Ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=be(e);n.children.has(s)||n.children.set(s,Zl());const i=n.children.get(s);e=We(e),AT(i,e,t)}}function Bh(n,e,t){n.value!==null?t(e,n.value):Ix(n,(s,i)=>{const r=new qe(e.toString()+"/"+s);Bh(i,r,t)})}function Ix(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Xt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=10*1e3,Ax=30*1e3,Rx=5*60*1e3;class bx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Cx(e);const s=R_+(Ax-R_)*Math.random();xo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Xt(e,(i,r)=>{r>0&&ys(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),xo(this.reportStats_.bind(this),Math.floor(Math.random()*2*Rx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function RT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bf(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Tn.ACK_USER_WRITE,this.source=RT()}operationForChild(e){if(Ce(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new qe(e));return new ec(Me(),t,this.revert)}}else return H(be(this.path)===e,"operationForChild called for unrelated child."),new ec(We(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.source=e,this.path=t,this.type=Tn.LISTEN_COMPLETE}operationForChild(e){return Ce(this.path)?new ia(this.source,Me()):new ia(this.source,We(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Tn.OVERWRITE}operationForChild(e){return Ce(this.path)?new Oi(this.source,Me(),this.snap.getImmediateChild(e)):new Oi(this.source,We(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Tn.MERGE}operationForChild(e){if(Ce(this.path)){const t=this.children.subtree(new qe(e));return t.isEmpty()?null:t.value?new Oi(this.source,Me(),t.value):new ra(this.source,Me(),t)}else return H(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ra(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=be(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Px(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(vx(o.childName,o.snapshotNode))}),co(n,i,"child_removed",e,s,t),co(n,i,"child_added",e,s,t),co(n,i,"child_moved",r,s,t),co(n,i,"child_changed",e,s,t),co(n,i,"value",e,s,t),i}function co(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Nx(n,a,c)),o.forEach(a=>{const c=kx(n,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function kx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Nx(n,e,t){if(e.childName==null||t.childName==null)throw Dr("Should only compare child_ events.");const s=new Te(e.childName,e.snapshotNode),i=new Te(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n,e){return{eventCache:n,serverCache:e}}function Oo(n,e,t,s){return Yc(new ni(e,t,s),n.serverCache)}function bT(n,e,t,s){return Yc(n.eventCache,new ni(e,t,s))}function tc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Mi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;const Dx=()=>(Wu||(Wu=new Jt(_D)),Wu);class ze{static fromObject(e){let t=new ze(null);return Xt(e,(s,i)=>{t=t.set(new qe(s),i)}),t}constructor(e,t=Dx()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Me(),value:this.value};if(Ce(e))return null;{const s=be(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(We(e),t);return r!=null?{path:dt(new qe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ce(e))return this;{const t=be(e),s=this.children.get(t);return s!==null?s.subtree(We(e)):new ze(null)}}set(e,t){if(Ce(e))return new ze(t,this.children);{const s=be(e),r=(this.children.get(s)||new ze(null)).set(We(e),t),o=this.children.insert(s,r);return new ze(this.value,o)}}remove(e){if(Ce(e))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const t=be(e),s=this.children.get(t);if(s){const i=s.remove(We(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new ze(null):new ze(this.value,r)}else return this}}get(e){if(Ce(e))return this.value;{const t=be(e),s=this.children.get(t);return s?s.get(We(e)):null}}setTree(e,t){if(Ce(e))return t;{const s=be(e),r=(this.children.get(s)||new ze(null)).setTree(We(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ze(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(dt(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Me(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(Ce(e))return null;{const r=be(e),o=this.children.get(r);return o?o.findOnPath_(We(e),dt(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Me(),t)}foreachOnPath_(e,t,s){if(Ce(e))return this;{this.value&&s(t,this.value);const i=be(e),r=this.children.get(i);return r?r.foreachOnPath_(We(e),dt(t,i),s):new ze(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(dt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.writeTree_=e}static empty(){return new An(new ze(null))}}function Mo(n,e,t){if(Ce(e))return new An(new ze(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Wt(i,e);return r=r.updateChild(o,t),new An(n.writeTree_.set(i,r))}else{const i=new ze(t),r=n.writeTree_.setTree(e,i);return new An(r)}}}function b_(n,e,t){let s=n;return Xt(t,(i,r)=>{s=Mo(s,dt(e,i),r)}),s}function S_(n,e){if(Ce(e))return An.empty();{const t=n.writeTree_.setTree(e,new ze(null));return new An(t)}}function jh(n,e){return Ui(n,e)!=null}function Ui(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Wt(t.path,e)):null}function P_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(et,(s,i)=>{e.push(new Te(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Te(s,i.value))}),e}function qs(n,e){if(Ce(e))return n;{const t=Ui(n,e);return t!=null?new An(new ze(t)):new An(n.writeTree_.subtree(e))}}function qh(n){return n.writeTree_.isEmpty()}function kr(n,e){return ST(Me(),n.writeTree_,e)}function ST(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(H(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ST(dt(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(dt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n,e){return DT(e,n)}function xx(n,e,t,s,i){H(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Mo(n.visibleWrites,e,t)),n.lastWriteId=s}function Ox(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Mx(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Lx(a,s.path)?i=!1:wn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Vx(n),!0;if(s.snap)n.visibleWrites=S_(n.visibleWrites,s.path);else{const a=s.children;Xt(a,c=>{n.visibleWrites=S_(n.visibleWrites,dt(s.path,c))})}return!0}else return!1}function Lx(n,e){if(n.snap)return wn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&wn(dt(n.path,t),e))return!0;return!1}function Vx(n){n.visibleWrites=PT(n.allWrites,Fx,Me()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Fx(n){return n.visible}function PT(n,e,t){let s=An.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)wn(t,o)?(a=Wt(t,o),s=Mo(s,a,r.snap)):wn(o,t)&&(a=Wt(o,t),s=Mo(s,Me(),r.snap.getChild(a)));else if(r.children){if(wn(t,o))a=Wt(t,o),s=b_(s,a,r.children);else if(wn(o,t))if(a=Wt(o,t),Ce(a))s=b_(s,Me(),r.children);else{const c=yr(r.children,be(a));if(c){const u=c.getChild(We(a));s=Mo(s,Me(),u)}}}else throw Dr("WriteRecord should have .snap or .children")}}return s}function kT(n,e,t,s,i){if(!s&&!i){const r=Ui(n.visibleWrites,e);if(r!=null)return r;{const o=qs(n.visibleWrites,e);if(qh(o))return t;if(t==null&&!jh(o,Me()))return null;{const a=t||de.EMPTY_NODE;return kr(o,a)}}}else{const r=qs(n.visibleWrites,e);if(!i&&qh(r))return t;if(!i&&t==null&&!jh(r,Me()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(wn(u.path,e)||wn(e,u.path))},a=PT(n.allWrites,o,e),c=t||de.EMPTY_NODE;return kr(a,c)}}}function Ux(n,e,t){let s=de.EMPTY_NODE;const i=Ui(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(et,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=qs(n.visibleWrites,e);return t.forEachChild(et,(o,a)=>{const c=kr(qs(r,new qe(o)),a);s=s.updateImmediateChild(o,c)}),P_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=qs(n.visibleWrites,e);return P_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Bx(n,e,t,s,i){H(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=dt(e,t);if(jh(n.visibleWrites,r))return null;{const o=qs(n.visibleWrites,r);return qh(o)?i.getChild(t):kr(o,i.getChild(t))}}function jx(n,e,t,s){const i=dt(e,t),r=Ui(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=qs(n.visibleWrites,i);return kr(o,s.getNode().getImmediateChild(t))}else return null}function qx(n,e){return Ui(n.visibleWrites,e)}function $x(n,e,t,s,i,r,o){let a;const c=qs(n.visibleWrites,e),u=Ui(c,Me());if(u!=null)a=u;else if(t!=null)a=kr(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),g=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=g.getNext();for(;m&&h.length<i;)f(m,s)!==0&&h.push(m),m=g.getNext();return h}else return[]}function Wx(){return{visibleWrites:An.empty(),allWrites:[],lastWriteId:-1}}function nc(n,e,t,s){return kT(n.writeTree,n.treePath,e,t,s)}function Sf(n,e){return Ux(n.writeTree,n.treePath,e)}function k_(n,e,t,s){return Bx(n.writeTree,n.treePath,e,t,s)}function sc(n,e){return qx(n.writeTree,dt(n.treePath,e))}function Hx(n,e,t,s,i,r){return $x(n.writeTree,n.treePath,e,t,s,i,r)}function Pf(n,e,t){return jx(n.writeTree,n.treePath,e,t)}function NT(n,e){return DT(dt(n.treePath,e),n.writeTree)}function DT(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,na(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,ta(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Pr(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,na(s,e.snapshotNode,i.oldSnap));else throw Dr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const xT=new Kx;class kf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ni(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pf(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mi(this.viewCache_),r=Hx(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(n){return{filter:n}}function Qx(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Yx(n,e,t,s,i){const r=new Gx;let o,a;if(t.type===Tn.OVERWRITE){const u=t;u.source.fromUser?o=$h(n,e,u.path,u.snap,s,i,r):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ce(u.path),o=ic(n,e,u.path,u.snap,s,i,a,r))}else if(t.type===Tn.MERGE){const u=t;u.source.fromUser?o=Xx(n,e,u.path,u.children,s,i,r):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Wh(n,e,u.path,u.children,s,i,a,r))}else if(t.type===Tn.ACK_USER_WRITE){const u=t;u.revert?o=tO(n,e,u.path,s,i,r):o=Zx(n,e,u.path,u.affectedTree,s,i,r)}else if(t.type===Tn.LISTEN_COMPLETE)o=eO(n,e,t.path,s,r);else throw Dr("Unknown operation type: "+t.type);const c=r.getChanges();return Jx(e,o,c),{viewCache:o,changes:c}}function Jx(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=tc(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(CT(tc(e)))}}function OT(n,e,t,s,i,r){const o=e.eventCache;if(sc(s,t)!=null)return e;{let a,c;if(Ce(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Mi(e),h=u instanceof de?u:de.EMPTY_NODE,f=Sf(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=nc(s,Mi(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=be(t);if(u===".priority"){H(ti(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=k_(s,t,h,c);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=We(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=k_(s,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(h,g):f=o.getNode().getImmediateChild(u)}else f=Pf(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,h,i,r):a=o.getNode()}}return Oo(e,a,o.isFullyInitialized()||Ce(t),n.filter.filtersNodes())}}function ic(n,e,t,s,i,r,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(Ce(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),m,null)}else{const m=be(t);if(!c.isCompleteForPath(t)&&ti(t)>1)return e;const C=We(t),D=c.getNode().getImmediateChild(m).updateChild(C,s);m===".priority"?u=h.updatePriority(c.getNode(),D):u=h.updateChild(c.getNode(),m,D,C,xT,null)}const f=bT(e,u,c.isFullyInitialized()||Ce(t),h.filtersNodes()),g=new kf(i,f,r);return OT(n,f,t,i,g,a)}function $h(n,e,t,s,i,r,o){const a=e.eventCache;let c,u;const h=new kf(i,e,r);if(Ce(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Oo(e,u,!0,n.filter.filtersNodes());else{const f=be(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=Oo(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=We(t),m=a.getNode().getImmediateChild(f);let C;if(Ce(g))C=s;else{const N=h.getCompleteChild(f);N!=null?pT(g)===".priority"&&N.getChild(mT(g)).isEmpty()?C=N:C=N.updateChild(g,s):C=de.EMPTY_NODE}if(m.equals(C))c=e;else{const N=n.filter.updateChild(a.getNode(),f,C,g,h,o);c=Oo(e,N,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function N_(n,e){return n.eventCache.isCompleteForChild(e)}function Xx(n,e,t,s,i,r,o){let a=e;return s.foreach((c,u)=>{const h=dt(t,c);N_(e,be(h))&&(a=$h(n,a,h,u,i,r,o))}),s.foreach((c,u)=>{const h=dt(t,c);N_(e,be(h))||(a=$h(n,a,h,u,i,r,o))}),a}function D_(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Wh(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ce(t)?u=s:u=new ze(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),C=D_(n,m,g);c=ic(n,c,new qe(f),C,i,r,o,a)}}),u.children.inorderTraversal((f,g)=>{const m=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!m){const C=e.serverCache.getNode().getImmediateChild(f),N=D_(n,C,g);c=ic(n,c,new qe(f),N,i,r,o,a)}}),c}function Zx(n,e,t,s,i,r,o){if(sc(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ce(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return ic(n,e,t,c.getNode().getChild(t),i,r,a,o);if(Ce(t)){let u=new ze(null);return c.getNode().forEachChild(fr,(h,f)=>{u=u.set(new qe(h),f)}),Wh(n,e,t,u,i,r,a,o)}else return e}else{let u=new ze(null);return s.foreach((h,f)=>{const g=dt(t,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),Wh(n,e,t,u,i,r,a,o)}}function eO(n,e,t,s,i){const r=e.serverCache,o=bT(e,r.getNode(),r.isFullyInitialized()||Ce(t),r.isFiltered());return OT(n,o,t,s,xT,i)}function tO(n,e,t,s,i,r){let o;if(sc(s,t)!=null)return e;{const a=new kf(s,e,i),c=e.eventCache.getNode();let u;if(Ce(t)||be(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=nc(s,Mi(e));else{const f=e.serverCache.getNode();H(f instanceof de,"serverChildren would be complete if leaf node"),h=Sf(s,f)}h=h,u=n.filter.updateFullNode(c,h,r)}else{const h=be(t);let f=Pf(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=n.filter.updateChild(c,h,f,We(t),a,r):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,de.EMPTY_NODE,We(t),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nc(s,Mi(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||sc(s,Me())!=null,Oo(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Cf(s.getIndex()),r=wx(s);this.processor_=zx(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(de.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(de.EMPTY_NODE,a.getNode(),null),h=new ni(c,o.isFullyInitialized(),i.filtersNodes()),f=new ni(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Yc(f,h),this.eventGenerator_=new Sx(this.query_)}get query(){return this.query_}}function sO(n){return n.viewCache_.serverCache.getNode()}function iO(n){return tc(n.viewCache_)}function rO(n,e){const t=Mi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ce(e)&&!t.getImmediateChild(be(e)).isEmpty())?t.getChild(e):null}function x_(n){return n.eventRegistrations_.length===0}function oO(n,e){n.eventRegistrations_.push(e)}function O_(n,e,t){const s=[];if(t){H(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function M_(n,e,t,s){e.type===Tn.MERGE&&e.source.queryId!==null&&(H(Mi(n.viewCache_),"We should always have a full cache before handling merges"),H(tc(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Yx(n.processor_,i,e,t,s);return Qx(n.processor_,r.viewCache),H(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,MT(n,r.changes,r.viewCache.eventCache.getNode(),null)}function aO(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(et,(r,o)=>{s.push(Pr(r,o))}),t.isFullyInitialized()&&s.push(CT(t.getNode())),MT(n,s,t.getNode(),e)}function MT(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Px(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;class LT{constructor(){this.views=new Map}}function lO(n){H(!rc,"__referenceConstructor has already been defined"),rc=n}function cO(){return H(rc,"Reference.ts has not been loaded"),rc}function uO(n){return n.views.size===0}function Nf(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return H(r!=null,"SyncTree gave us an op for an invalid query."),M_(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(M_(o,e,t,s));return r}}function VT(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=nc(t,i?s:null),c=!1;a?c=!0:s instanceof de?(a=Sf(t,s),c=!1):(a=de.EMPTY_NODE,c=!1);const u=Yc(new ni(a,c,!1),new ni(s,i,!1));return new nO(e,u)}return o}function hO(n,e,t,s,i,r){const o=VT(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),oO(o,t),aO(o,t)}function dO(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=si(n);if(i==="default")for(const[c,u]of n.views.entries())o=o.concat(O_(u,t,s)),x_(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||r.push(u.query));else{const c=n.views.get(i);c&&(o=o.concat(O_(c,t,s)),x_(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!si(n)&&r.push(new(cO())(e._repo,e._path)),{removed:r,events:o}}function FT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $s(n,e){let t=null;for(const s of n.views.values())t=t||rO(s,e);return t}function UT(n,e){if(e._queryParams.loadsAllData())return Xc(n);{const s=e._queryIdentifier;return n.views.get(s)}}function BT(n,e){return UT(n,e)!=null}function si(n){return Xc(n)!=null}function Xc(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;function fO(n){H(!oc,"__referenceConstructor has already been defined"),oc=n}function pO(){return H(oc,"Reference.ts has not been loaded"),oc}let gO=1;class L_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ze(null),this.pendingWriteTree_=Wx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mO(n,e,t,s,i){return xx(n.pendingWriteTree_,e,t,s,i),i?Ra(n,new Oi(RT(),e,t)):[]}function tr(n,e,t=!1){const s=Ox(n.pendingWriteTree_,e);if(Mx(n.pendingWriteTree_,e)){let r=new ze(null);return s.snap!=null?r=r.set(Me(),!0):Xt(s.children,o=>{r=r.set(new qe(o),!0)}),Ra(n,new ec(s.path,r,t))}else return[]}function Aa(n,e,t){return Ra(n,new Oi(Rf(),e,t))}function _O(n,e,t){const s=ze.fromObject(t);return Ra(n,new ra(Rf(),e,s))}function yO(n,e){return Ra(n,new ia(Rf(),e))}function vO(n,e,t){const s=Df(n,t);if(s){const i=xf(s),r=i.path,o=i.queryId,a=Wt(r,e),c=new ia(bf(o),a);return Of(n,r,c)}else return[]}function jT(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||BT(o,e))){const c=dO(o,e,t,s);uO(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=c.removed;if(a=c.events,!i){const h=u.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(g,m)=>si(m));if(h&&!f){const g=n.syncPointTree_.subtree(r);if(!g.isEmpty()){const m=IO(g);for(let C=0;C<m.length;++C){const N=m[C],D=N.query,j=GT(n,N);n.listenProvider_.startListening(Lo(D),oa(n,D),j.hashFn,j.onComplete)}}}!f&&u.length>0&&!s&&(h?n.listenProvider_.stopListening(Lo(e),null):u.forEach(g=>{const m=n.queryToTagMap.get(Zc(g));n.listenProvider_.stopListening(Lo(g),m)}))}CO(n,u)}return a}function qT(n,e,t,s){const i=Df(n,s);if(i!=null){const r=xf(i),o=r.path,a=r.queryId,c=Wt(o,e),u=new Oi(bf(a),c,t);return Of(n,o,u)}else return[]}function EO(n,e,t,s){const i=Df(n,s);if(i){const r=xf(i),o=r.path,a=r.queryId,c=Wt(o,e),u=ze.fromObject(t),h=new ra(bf(a),c,u);return Of(n,o,h)}else return[]}function wO(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(g,m)=>{const C=Wt(g,i);r=r||$s(m,C),o=o||si(m)});let a=n.syncPointTree_.get(i);a?(o=o||si(a),r=r||$s(a,Me())):(a=new LT,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=de.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,C)=>{const N=$s(C,Me());N&&(r=r.updateImmediateChild(m,N))}));const u=BT(a,e);if(!u&&!e._queryParams.loadsAllData()){const g=Zc(e);H(!n.queryToTagMap.has(g),"View does not exist, but we have a tag");const m=AO();n.queryToTagMap.set(g,m),n.tagToQueryMap.set(m,g)}const h=Jc(n.pendingWriteTree_,i);let f=hO(a,e,t,h,r,c);if(!u&&!o&&!s){const g=UT(a,e);f=f.concat(RO(n,e,g))}return f}function $T(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Wt(o,e),u=$s(a,c);if(u)return u});return kT(i,e,r,t,!0)}function TO(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(u,h)=>{const f=Wt(u,t);s=s||$s(h,f)});let i=n.syncPointTree_.get(t);i?s=s||$s(i,Me()):(i=new LT,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new ni(s,!0,!1):null,a=Jc(n.pendingWriteTree_,e._path),c=VT(i,e,a,r?o.getNode():de.EMPTY_NODE,r);return iO(c)}function Ra(n,e){return WT(e,n.syncPointTree_,null,Jc(n.pendingWriteTree_,Me()))}function WT(n,e,t,s){if(Ce(n.path))return HT(n,e,t,s);{const i=e.get(Me());t==null&&i!=null&&(t=$s(i,Me()));let r=[];const o=be(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=NT(s,o);r=r.concat(WT(a,c,u,h))}return i&&(r=r.concat(Nf(i,n,s,t))),r}}function HT(n,e,t,s){const i=e.get(Me());t==null&&i!=null&&(t=$s(i,Me()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=NT(s,o),h=n.operationForChild(o);h&&(r=r.concat(HT(h,a,c,u)))}),i&&(r=r.concat(Nf(i,n,s,t))),r}function GT(n,e){const t=e.query,s=oa(n,t);return{hashFn:()=>(sO(e)||de.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vO(n,t._path,s):yO(n,t._path);{const r=ED(i,t);return jT(n,t,null,r)}}}}function oa(n,e){const t=Zc(e);return n.queryToTagMap.get(t)}function Zc(n){return n._path.toString()+"$"+n._queryIdentifier}function Df(n,e){return n.tagToQueryMap.get(e)}function xf(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new qe(n.substr(0,e))}}function Of(n,e,t){const s=n.syncPointTree_.get(e);H(s,"Missing sync point for query tag that we're tracking");const i=Jc(n.pendingWriteTree_,e);return Nf(s,t,i,null)}function IO(n){return n.fold((e,t,s)=>{if(t&&si(t))return[Xc(t)];{let i=[];return t&&(i=FT(t)),Xt(s,(r,o)=>{i=i.concat(o)}),i}})}function Lo(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(pO())(n._repo,n._path):n}function CO(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Zc(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function AO(){return gO++}function RO(n,e,t){const s=e._path,i=oa(n,e),r=GT(n,t),o=n.listenProvider_.startListening(Lo(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)H(!si(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,h,f)=>{if(!Ce(u)&&h&&si(h))return[Xc(h).query];{let g=[];return h&&(g=g.concat(FT(h).map(m=>m.query))),Xt(f,(m,C)=>{g=g.concat(C)}),g}});for(let u=0;u<c.length;++u){const h=c[u];n.listenProvider_.stopListening(Lo(h),oa(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Mf(t)}node(){return this.node_}}class Lf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=dt(this.path_,e);return new Lf(this.syncTree_,t)}node(){return $T(this.syncTree_,this.path_)}}const bO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},V_=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return SO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return PO(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},SO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},PO=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&H(!1,"Unexpected increment value: "+s);const i=e.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},kO=function(n,e,t,s){return Vf(e,new Lf(t,n),s)},NO=function(n,e,t){return Vf(n,new Mf(e),t)};function Vf(n,e,t){const s=n.getPriority().val(),i=V_(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=V_(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new gt(a,wt(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new gt(i))),o.forEachChild(et,(a,c)=>{const u=Vf(c,e.getImmediateChild(a),t);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Uf(n,e){let t=e instanceof qe?e:new qe(e),s=n,i=be(t);for(;i!==null;){const r=yr(s.node.children,i)||{children:{},childCount:0};s=new Ff(i,s,r),t=We(t),i=be(t)}return s}function jr(n){return n.node.value}function KT(n,e){n.node.value=e,Hh(n)}function zT(n){return n.node.childCount>0}function DO(n){return jr(n)===void 0&&!zT(n)}function eu(n,e){Xt(n.node.children,(t,s)=>{e(new Ff(t,n,s))})}function QT(n,e,t,s){t&&e(n),eu(n,i=>{QT(i,e,!0)})}function xO(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ba(n){return new qe(n.parent===null?n.name:ba(n.parent)+"/"+n.name)}function Hh(n){n.parent!==null&&OO(n.parent,n.name,n)}function OO(n,e,t){const s=DO(t),i=ys(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Hh(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Hh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=/[\[\].#$\/\u0000-\u001F\u007F]/,LO=/[\[\].#$\u0000-\u001F\u007F]/,Hu=10*1024*1024,YT=function(n){return typeof n=="string"&&n.length!==0&&!MO.test(n)},JT=function(n){return typeof n=="string"&&n.length!==0&&!LO.test(n)},VO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),JT(n)},XT=function(n,e,t){const s=t instanceof qe?new ZD(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ei(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ei(s)+" with contents = "+e.toString());if(Kw(e))throw new Error(n+"contains "+e.toString()+" "+Ei(s));if(typeof e=="string"&&e.length>Hu/3&&Ic(e)>Hu)throw new Error(n+"contains a string greater than "+Hu+" utf8 bytes "+Ei(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!YT(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ei(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ex(s,o),XT(n,a,s),tx(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ei(s)+" in addition to actual children.")}},ZT=function(n,e,t,s){if(!JT(t))throw new Error(vv(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FO=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ZT(n,e,t)},UO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!YT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VO(t))throw new Error(vv(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jO(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!_T(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function hi(n,e,t){jO(n,t),qO(n,s=>wn(s,e)||wn(e,s))}function qO(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?($O(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function $O(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Do&&xt("event: "+t.toString()),Ia(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="repo_interrupt",HO=25;class GO{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zl(),this.transactionQueueTree_=new Ff,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KO(n,e,t){if(n.stats_=Ef(n.repoInfo_),n.forceRestClient_||CD())n.server_=new Xl(n.repoInfo_,(s,i,r,o)=>{F_(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>U_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new cs(n.repoInfo_,e,(s,i,r,o)=>{F_(n,s,i,r,o)},s=>{U_(n,s)},s=>{QO(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=PD(n.repoInfo_,()=>new bx(n.stats_,n.server_)),n.infoData_=new Tx,n.infoSyncTree_=new L_({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Aa(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bf(n,"connected",!1),n.serverSyncTree_=new L_({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);hi(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function zO(n){const t=n.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function eI(n){return bO({timestamp:zO(n)})}function F_(n,e,t,s,i){n.dataUpdateCount++;const r=new qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Pl(t,u=>wt(u));o=EO(n.serverSyncTree_,r,c,i)}else{const c=wt(t);o=qT(n.serverSyncTree_,r,c,i)}else if(s){const c=Pl(t,u=>wt(u));o=_O(n.serverSyncTree_,r,c)}else{const c=wt(t);o=Aa(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=$f(n,r)),hi(n.eventQueue_,a,o)}function U_(n,e){Bf(n,"connected",e),e===!1&&XO(n)}function QO(n,e){Xt(e,(t,s)=>{Bf(n,t,s)})}function Bf(n,e,t){const s=new qe("/.info/"+e),i=wt(t);n.infoData_.updateSnapshot(s,i);const r=Aa(n.infoSyncTree_,s,i);hi(n.eventQueue_,s,r)}function YO(n){return n.nextWriteId_++}function JO(n,e,t){const s=TO(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=wt(i).withIndex(e._queryParams.getIndex());wO(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Aa(n.serverSyncTree_,e._path,r);else{const a=oa(n.serverSyncTree_,e);o=qT(n.serverSyncTree_,e._path,r,a)}return hi(n.eventQueue_,e._path,o),jT(n.serverSyncTree_,e,t,null,!0),r},i=>(jf(n,"get for query "+ht(e)+" failed: "+i),Promise.reject(new Error(i))))}function XO(n){jf(n,"onDisconnectEvents");const e=eI(n),t=Zl();Bh(n.onDisconnect_,Me(),(i,r)=>{const o=kO(i,r,n.serverSyncTree_,e);AT(t,i,o)});let s=[];Bh(t,Me(),(i,r)=>{s=s.concat(Aa(n.serverSyncTree_,i,r));const o=nM(n,i);$f(n,o)}),n.onDisconnect_=Zl(),hi(n.eventQueue_,Me(),s)}function ZO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(WO)}function jf(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),xt(t,...e)}function tI(n,e,t){return $T(n.serverSyncTree_,e,t)||de.EMPTY_NODE}function qf(n,e=n.transactionQueueTree_){if(e||tu(n,e),jr(e)){const t=sI(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&eM(n,ba(e),t)}else zT(e)&&eu(e,t=>{qf(n,t)})}function eM(n,e,t){const s=t.map(u=>u.currentWriteId),i=tI(n,e,s);let r=i;const o=i.hash();for(let u=0;u<t.length;u++){const h=t[u];H(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Wt(e,h.path);r=r.updateChild(f,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,u=>{jf(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,h=h.concat(tr(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();tu(n,Uf(n.transactionQueueTree_,e)),qf(n,n.transactionQueueTree_),hi(n.eventQueue_,e,h);for(let g=0;g<f.length;g++)Ia(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{cn("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}$f(n,e)}},o)}function $f(n,e){const t=nI(n,e),s=ba(t),i=sI(n,t);return tM(n,i,s),s}function tM(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Wt(t,c.path);let h=!1,f;if(H(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,i=i.concat(tr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=HO)h=!0,f="maxretry",i=i.concat(tr(n.serverSyncTree_,c.currentWriteId,!0));else{const g=tI(n,c.path,o);c.currentInputSnapshot=g;const m=e[a].update(g.val());if(m!==void 0){XT("transaction failed: Data returned ",m,c.path);let C=wt(m);typeof m=="object"&&m!=null&&ys(m,".priority")||(C=C.updatePriority(g.getPriority()));const D=c.currentWriteId,j=eI(n),q=NO(C,g,j);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=q,c.currentWriteId=YO(n),o.splice(o.indexOf(D),1),i=i.concat(mO(n.serverSyncTree_,c.path,q,c.currentWriteId,c.applyLocally)),i=i.concat(tr(n.serverSyncTree_,D,!0))}else h=!0,f="nodata",i=i.concat(tr(n.serverSyncTree_,c.currentWriteId,!0))}hi(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}tu(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Ia(s[a]);qf(n,n.transactionQueueTree_)}function nI(n,e){let t,s=n.transactionQueueTree_;for(t=be(e);t!==null&&jr(s)===void 0;)s=Uf(s,t),e=We(e),t=be(e);return s}function sI(n,e){const t=[];return iI(n,e,t),t.sort((s,i)=>s.order-i.order),t}function iI(n,e,t){const s=jr(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);eu(e,i=>{iI(n,i,t)})}function tu(n,e){const t=jr(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,KT(e,t.length>0?t:void 0)}eu(e,s=>{tu(n,s)})}function nM(n,e){const t=ba(nI(n,e)),s=Uf(n.transactionQueueTree_,e);return xO(s,i=>{Gu(n,i)}),Gu(n,s),QT(s,i=>{Gu(n,i)}),t}function Gu(n,e){const t=jr(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(tr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?KT(e,void 0):t.length=r+1,hi(n.eventQueue_,ba(e),i);for(let o=0;o<s.length;o++)Ia(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iM(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):cn(`Invalid query segment '${t}' in query '${n}'`)}return e}const B_=function(n,e){const t=rM(n),s=t.namespace;t.domain==="firebase.com"&&gs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||gD();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new rT(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new qe(t.pathString)}},rM=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(i=sM(n.substring(h,f)));const g=iM(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),t=e.substring(C+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ht(this.snapshot.exportVal())}}class aM{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return Ce(this._path)?null:pT(this._path)}get ref(){return new Es(this._repo,this._path)}get _queryIdentifier(){const e=A_(this._queryParams),t=yf(e);return t==="{}"?"default":t}get _queryObject(){return A_(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof Wf))return!1;const t=this._repo===e._repo,s=_T(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+XD(this._path)}}class Es extends Wf{constructor(e,t){super(e,t,new Af,!1)}get parent(){const e=mT(this._path);return e===null?null:new Es(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class aa{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new qe(e),s=Gh(this.ref,e);return new aa(this._node.getChild(t),s,et)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new aa(i,Gh(this.ref,s),et)))}hasChild(e){const t=new qe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cM(n,e){return n=Ge(n),n._checkNotDeleted("ref"),Gh(n._root,e)}function Gh(n,e){return n=Ge(n),be(n._path)===null?FO("child","path",e):ZT("child","path",e),new Es(n._repo,dt(n._path,e))}function uM(n){n=Ge(n);const e=new lM(()=>{}),t=new Hf(e);return JO(n._repo,n,t).then(s=>new aa(s,new Es(n._repo,n._path),n._queryParams.getIndex()))}class Hf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new oM("value",this,new aa(e.snapshotNode,new Es(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new aM(this,e,t):null}matches(e){return e instanceof Hf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}lO(Es);fO(Es);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM="FIREBASE_DATABASE_EMULATOR_HOST",Kh={};let dM=!1;function fM(n,e,t,s){n.repoInfo_=new rT(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function pM(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=B_(r,i),a=o.repoInfo,c;typeof process<"u"&&a_&&(c=a_[hM]),c?(r=`http://${c}?ns=${a.namespace}`,o=B_(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new RD(n.name,n.options,e);UO("Invalid Firebase Database URL",o),Ce(o.path)||gs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=mM(a,n,u,new AD(n,t));return new _M(h,n)}function gM(n,e){const t=Kh[e];(!t||t[n.key]!==n)&&gs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ZO(n),delete t[n.key]}function mM(n,e,t,s){let i=Kh[e.name];i||(i={},Kh[e.name]=i);let r=i[n.toURLString()];return r&&gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new GO(n,dM,t,s),i[n.toURLString()]=r,r}class _M{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Es(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gs("Cannot call "+e+" on a deleted database.")}}function yM(n=vd(),e){const t=Ac(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=fv("database");s&&vM(t,...s)}return t}function vM(n,e,t,s={}){n=Ge(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Gs(s,r.repoInfo_.emulatorOptions))return;gs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&gs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new _l(_l.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:mv(s.mockUserToken,n.app.options.projectId);o=new _l(a)}fM(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(n){cD(Li),Si(new Ks("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pM(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Fn(l_,c_,n),Fn(l_,c_,"esm2017")}cs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};cs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};EM();const wM={apiKey:"AIzaSyD43V2HIX_PDP5P6fxktVPXjhh1Lv994LU",authDomain:"bt3103-matchup.firebaseapp.com",databaseURL:"https://bt3103-matchup-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"bt3103-matchup",storageBucket:"bt3103-matchup.firebasestorage.app",messagingSenderId:"132707622798",appId:"1:132707622798:web:b30dcd6dd26c639400cedf",measurementId:"G-EY15PSDKMD"},Gf=Tv(wM),Qe=WE(Gf),Ws=ps(Gf),TM=yM(Gf),IM={data(){return{user:!1}},mounted(){const n=ps();pf(n,e=>{e&&(this.user=e)})},methods:{goToAddListing(){this.$router.push("/add-listing")},signOut(){const n=ps();n.currentUser,gf(n),this.$router.push("/")}}},CM={class:"navbar"},AM={class:"nav-left"},RM={class:"nav-right"},bM={class:"nav-links"};function SM(n,e,t,s,i,r){const o=Ht("router-link");return ie(),re(ot,null,[e[7]||(e[7]=y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"},null,-1)),y("nav",CM,[y("div",AM,[Se(o,{to:"/Explore"},{default:Yt(()=>e[2]||(e[2]=[y("div",{class:"logo"},"MatchUp",-1)])),_:1}),y("button",{class:"list-button",onClick:e[0]||(e[0]=(...a)=>r.goToAddListing&&r.goToAddListing(...a))},e[3]||(e[3]=[y("span",null,"Add new listing",-1),oe(" +")]))]),y("div",RM,[y("ul",bM,[y("li",null,[Se(o,{to:"/favourites"},{default:Yt(()=>e[4]||(e[4]=[y("i",{class:"fas fa-heart"},null,-1),oe(),y("span",null,"Favourites",-1)])),_:1})]),y("li",null,[Se(o,{to:"/chats"},{default:Yt(()=>e[5]||(e[5]=[y("i",{class:"fas fa-comment-dots"},null,-1),oe(),y("span",null,"Chats",-1)])),_:1})]),y("li",null,[Se(o,{to:"/profile"},{default:Yt(()=>e[6]||(e[6]=[y("i",{class:"fas fa-user"},null,-1),oe(),y("span",null,"My Profile",-1)])),_:1})]),y("button",{class:"logout-btn",onClick:e[1]||(e[1]=(...a)=>r.signOut&&r.signOut(...a))},"Log Out")])])])],64)}const Bi=Gt(IM,[["render",SM],["__scopeId","data-v-dbac1ec9"]]),PM={components:{Navbar:Bi},setup(){const n=wc(),e=qt(""),t=qt(""),s=qt(""),i=qt(null),r=async()=>{try{const u=(await KN(Ws,e.value,t.value)).user;if(!u.emailVerified){await gf(Ws),s.value="Please verify your email before logging in.";return}const h=await rt(nt(Qe,"users",u.email));!h.exists()||h.data().firstTime!==!1?(alert("Login successful! Redirecting..."),n.push("/Onboarding")):(alert("Login successful! Redirecting..."),n.push("/Explore"))}catch(c){s.value="Invalid email or password. Please try again.",console.error("Login Error:",c.message)}},o=async()=>{if(!e.value){s.value="Please enter your email first.";return}try{await HN(Ws,e.value),alert(`Password reset email sent to ${e.value}. Check your inbox.`)}catch(c){s.value="Error sending password reset email. Try again.",console.error("Password Reset Error:",c.message)}},a=c=>{n.currentRoute.value.path==="/Login"&&i.value&&!i.value.contains(c.target)&&n.push("/")};return ud(()=>{document.addEventListener("click",a)}),hd(()=>{document.removeEventListener("click",a)}),{email:e,password:t,errorMessage:s,cardRef:i,login:r,resetPassword:o}}},kM={class:"login-container"},NM={key:0,class:"error"},DM={class:"links"},xM={class:"links"};function OM(n,e,t,s,i,r){const o=Ht("router-link");return ie(),re("div",null,[y("div",kM,[Se(o,{to:"/",class:"logo"},{default:Yt(()=>e[5]||(e[5]=[oe("MatchUp")])),_:1}),y("div",{class:"login-card",ref:"cardRef",onClick:e[4]||(e[4]=Ci(()=>{},["stop"]))},[e[8]||(e[8]=y("h2",null,"Welcome to MatchUp! 🏆",-1)),e[9]||(e[9]=y("p",{class:"subtitle"},"Find and join sports matches near you.",-1)),y("form",{onSubmit:e[2]||(e[2]=Ci((...a)=>s.login&&s.login(...a),["prevent"]))},[De(y("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a),placeholder:"Email",required:""},null,512),[[ut,s.email]]),De(y("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),placeholder:"Password",required:""},null,512),[[ut,s.password]]),e[6]||(e[6]=y("button",{type:"submit",class:"login-btn"},"Login",-1))],32),s.errorMessage?(ie(),re("p",NM,ne(s.errorMessage),1)):Vn("",!0),y("div",DM,[Se(o,{to:"/SignUp"},{default:Yt(()=>e[7]||(e[7]=[oe("Create an Account")])),_:1})]),y("div",xM,[y("a",{href:"#",onClick:e[3]||(e[3]=Ci((...a)=>s.resetPassword&&s.resetPassword(...a),["prevent"]))},"Forgot Password?")])],512)])])}const MM=Gt(PM,[["render",OM],["__scopeId","data-v-0969aa98"]]),LM={name:"LandingPage"},VM={class:"landing-page"},FM={class:"hero"},UM={class:"hero-content"};function BM(n,e,t,s,i,r){const o=Ht("router-link");return ie(),re("div",VM,[y("div",FM,[y("header",null,[e[2]||(e[2]=y("div",{class:"logo"},"MatchUp",-1)),y("nav",null,[y("ul",null,[e[1]||(e[1]=y("li",null,[y("a",{href:"mailto:matchupfeedback@gmail.com"},"Contact")],-1)),y("li",null,[Se(o,{to:"/login",class:"login-btn"},{default:Yt(()=>e[0]||(e[0]=[oe("Log In")])),_:1})])])])]),y("div",UM,[e[4]||(e[4]=y("h1",null,"Join, MatchUp and Play!",-1)),e[5]||(e[5]=y("hr",null,null,-1)),e[6]||(e[6]=y("h3",{class:"subtitle"},[y("ol",null,[y("li",null,"Find & join local sport matches"),y("li",null,[y("strong",null,[y("em",null,"MatchUp")]),oe(" & chat with other players")]),y("li",null,"Meet & have fun!")])],-1)),Se(o,{to:"/signup",class:"signup-btn"},{default:Yt(()=>e[3]||(e[3]=[oe("Join in the fun "),y("span",{class:"arrow"},"→",-1)])),_:1})])]),e[7]||(e[7]=qy('<section class="features" data-v-c63e1dcf><h2 data-v-c63e1dcf>Why Choose MatchUp?</h2><div class="feature-grid" data-v-c63e1dcf><div class="feature-card" data-v-c63e1dcf><div class="icon" data-v-c63e1dcf>🔍</div><h3 data-v-c63e1dcf>Smart Matching</h3><p data-v-c63e1dcf>Our platform allows you to filter matches based on shared interests and compatibility</p></div><div class="feature-card" data-v-c63e1dcf><div class="icon" data-v-c63e1dcf>🔒</div><h3 data-v-c63e1dcf>Safe &amp; Secure</h3><p data-v-c63e1dcf>Your privacy matters to us. All your data is encrypted and protected</p></div><div class="feature-card" data-v-c63e1dcf><div class="icon" data-v-c63e1dcf>🌟</div><h3 data-v-c63e1dcf>Quality Matches</h3><p data-v-c63e1dcf>Focus on meaningful matches/games with fellow users with detailed game descriptions</p></div></div></section><footer data-v-c63e1dcf><div class="footer-content" data-v-c63e1dcf><div class="copyright" data-v-c63e1dcf>© 2025 MatchUp. All rights reserved.</div></div></footer>',2))])}const jM=Gt(LM,[["render",BM],["__scopeId","data-v-c63e1dcf"]]),qM=WE(),$M={components:{Navbar:Bi},setup(){const n=wc(),e=qt(""),t=qt(""),s=qt(""),i=qt(""),r=qt(null),o=qt(""),a="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOk8qE9ecVIYpm7FH-llQ7EWtS59dttOzza3xloSHG7nTKFW5cWU0KFwvm-1gCgRXKGk&usqp=CAU",c=qt(""),u=m=>({minLength:m.length>=10,hasUppercase:/[A-Z]/.test(m),hasLowercase:/[a-z]/.test(m),hasNumber:/\d/.test(m),hasSpecialChar:/[\W_]/.test(m)}),h=async()=>{try{i.value="";const m=u(s.value),C=[];if(m.minLength||C.push("at least 10 characters"),m.hasUppercase||C.push("an uppercase letter"),m.hasLowercase||C.push("a lowercase letter"),m.hasNumber||C.push("a number"),m.hasSpecialChar||C.push("a special character"),C.length>0){i.value=`Password must include ${C.join(", ")}.`;return}const D=(await GN(Ws,t.value,s.value)).user;await zN(D),await as(nt(qM,"users",t.value),{uid:D.uid,name:e.value,nickname:o.value,photoURL:c.value||a,email:t.value,joinedChats:[],firstTime:!0}),await xw(D,{displayName:o.value}),console.log("User signed up:",D),alert(`Signup successful! A verification email has been sent to ${t.value}. Please verify before logging in.`),await gf(Ws),n.push("/Login")}catch(m){i.value||(i.value="Signup failed. Please try again."),console.error("Signup error:",m.code,m.message)}},f=m=>{const C=m.target.files[0];if(!C)return;if(!["image/jpeg","image/png"].includes(C.type)){alert("Please upload a JPG or PNG file.");return}if(C.size>500*1024){alert("Please select an image smaller than 500KB");return}const D=new FileReader;D.onload=j=>{c.value=j.target.result},D.onerror=()=>{i.value="Error reading image file"},D.readAsDataURL(C)},g=m=>{n.currentRoute.value.path==="/SignUp"&&r.value&&!r.value.contains(m.target)&&n.push("/")};return ud(()=>{document.addEventListener("click",g)}),hd(()=>{document.removeEventListener("click",g)}),{name:e,email:t,password:s,errorMessage:i,cardRef:r,signup:h,nickname:o,defaultPhoto:a,handlePhotoUpload:f,profileImageBase64:c}}},WM={class:"signup-container"},HM={class:"profile-pic-wrapper",style:{"margin-bottom":"16px"}},GM={for:"profile-picture-upload",style:{cursor:"pointer"}},KM=["src"],zM={key:0,class:"error"},QM={class:"links"};function YM(n,e,t,s,i,r){const o=Ht("router-link");return ie(),re("div",null,[y("div",WM,[Se(o,{to:"/",class:"logo"},{default:Yt(()=>e[7]||(e[7]=[oe("MatchUp")])),_:1}),y("div",{class:"signup-card",ref:"cardRef",onClick:e[6]||(e[6]=Ci(()=>{},["stop"]))},[e[11]||(e[11]=y("h2",null,"Welcome to MatchUp! 🏆",-1)),e[12]||(e[12]=y("p",{class:"subtitle"},"Create your account and start playing!",-1)),y("form",{onSubmit:e[5]||(e[5]=Ci((...a)=>s.signup&&s.signup(...a),["prevent"]))},[y("div",HM,[y("label",GM,[y("img",{src:s.profileImageBase64||s.defaultPhoto,alt:"Profile Picture",style:{width:"120px",height:"120px","border-radius":"50%","object-fit":"cover",border:"2px solid #744c97"}},null,8,KM)]),y("input",{id:"profile-picture-upload",type:"file",accept:"image/png, image/jpeg",onChange:e[0]||(e[0]=(...a)=>s.handlePhotoUpload&&s.handlePhotoUpload(...a)),hidden:""},null,32),e[8]||(e[8]=y("div",{style:{"margin-top":"8px",color:"#5c2b87","font-weight":"bold"}}," Choose Profile Photo ",-1))]),De(y("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>s.name=a),placeholder:"Full Name",required:""},null,512),[[ut,s.name]]),De(y("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>s.nickname=a),placeholder:"Display Name",required:""},null,512),[[ut,s.nickname]]),De(y("input",{type:"email","onUpdate:modelValue":e[3]||(e[3]=a=>s.email=a),placeholder:"Email",required:""},null,512),[[ut,s.email]]),De(y("input",{type:"password","onUpdate:modelValue":e[4]||(e[4]=a=>s.password=a),placeholder:"Password",required:""},null,512),[[ut,s.password]]),e[9]||(e[9]=y("button",{type:"submit",class:"signup-btn"},"Sign Up",-1))],32),s.errorMessage?(ie(),re("p",zM,ne(s.errorMessage),1)):Vn("",!0),y("div",QM,[Se(o,{to:"/Login"},{default:Yt(()=>e[10]||(e[10]=[oe("Already have an account? Login")])),_:1})])],512)])])}const JM=Gt($M,[["render",YM],["__scopeId","data-v-129156fe"]]),XM={components:{Navbar:Bi},name:"UserProfile",data(){return{editMode:!1,userId:null,user:{nickname:"",about:"",sports:[],photoURL:""},editedUser:{about:"",sportsInput:""},joinedListings:[],createdListings:[],defaultPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOk8qE9ecVIYpm7FH-llQ7EWtS59dttOzza3xloSHG7nTKFW5cWU0KFwvm-1gCgRXKGk&usqp=CAU"}},async created(){const n=ps();pf(n,async e=>{e&&(this.userId=e.email,this.user.email=e.email,await this.fetchUserProfile(),await this.fetchJoinedListings(),await this.fetchCreatedListings())})},methods:{formatTime(n){const e=new Date(n),t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),i=e.getFullYear(),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${t}/${s}/${i} ${r}:${o}`},async fetchUserProfile(){try{const n=nt(Qe,"users",this.userId),e=await rt(n);if(e.exists()){const t=e.data();this.user.about=t.about||"",this.user.sports=t.sports||[],this.user.nickname=t.nickname||"",this.user.photoURL=t.photoURL||""}}catch(n){console.error("Error fetching profile:",n)}},async fetchJoinedListings(){try{const n=await rt(nt(Qe,"users",this.userId));if(n.exists()){const e=n.data().joinedChats||[],t=[];for(const s of e){const i=typeof s=="string"?s:s.id;if(!i)continue;const r=nt(Qe,"listings",i),o=await rt(r);o.exists()?t.push({id:i,...o.data(),showDetails:!1}):console.warn(`❗ Listing not found for ID: ${i}`)}this.joinedListings=t}}catch(n){console.error("Error fetching joined listings:",n)}},async fetchCreatedListings(){try{const n=Ar(Qe,"listings"),e=xh(n,ew("ownerId","==",this.userId)),t=await rw(e),s=this.joinedListings.map(i=>i.id);this.createdListings=t.docs.map(i=>{const r=i.id;return{id:r,...i.data(),showDetails:!1,joined:s.includes(r)}})}catch(n){console.error("Error fetching created listings:",n)}},async joinListing(n){try{if(!this.userId){alert("You must be logged in to join.");return}const e=nt(Qe,"listings",n),t=await rt(e);if(!t.exists()){alert("This listing no longer exists.");return}const s=t.data();if(s.ownerId===this.userId){alert("You can't join your own listing.");return}const i=nt(Qe,"users",this.userId),o=(await rt(i)).data()||{},a=o.joinedChats||[];if(a.some(u=>(typeof u=="object"?u.id:u)===n)){alert("You already joined this listing.");return}a.push({id:n,title:s.title,time:s.time}),await as(i,{...o,joinedChats:a}),alert("✅ Successfully joined listing!"),await this.fetchJoinedListings()}catch(e){console.error("❌ Failed to join listing:",e),alert("Something went wrong. Please try again.")}},startEditing(){this.editMode=!0,this.editedUser.nickname=this.user.nickname,this.editedUser.about=this.user.about,this.editedUser.sportsInput=Array.isArray(this.user.sports)?this.user.sports.join(", "):""},cancelEditing(){confirm("Are you sure you want to discard the changes to your profile?")&&(this.editMode=!1,this.editedUser.nickname=this.user.nickname,this.editedUser.about=this.user.about,this.editedUser.sportsInput=this.user.sports.join(", "))},async saveChanges(){if(!confirm("Are you sure you want to save changes to your profile?"))return;this.user.nickname=this.editedUser.nickname,this.user.about=this.editedUser.about;const n=this.editedUser.sportsInput||"";this.user.sports=n.split(",").map(e=>e.trim()).filter(e=>e.length>0);try{const e=nt(Qe,"users",this.userId),t=await rt(e),i={...t.exists()?t.data():{},nickname:this.user.nickname,about:this.user.about,sports:this.user.sports,photoURL:this.user.photoURL||this.defaultPhoto};await as(e,i);const o=ps().currentUser;o&&await xw(o,{displayName:this.user.nickname}),this.editMode=!1,alert("✅ Profile updated successfully!")}catch(e){console.error("❌ Error saving profile:",e),alert("Something went wrong while saving.")}},async handlePhotoUpload(n){const e=n.target.files[0];if(!e)return;if(!["image/jpeg","image/png"].includes(e.type)){alert("Please upload a JPG or PNG file.");return}if(e.size>500*1024){alert("Please select an image smaller than 500KB");return}const s=new FileReader;s.onload=async i=>{const r=i.target.result;this.user.photoURL=r;try{const o=nt(Qe,"users",this.userId),a=await rt(o),c=a.exists()?a.data():{};await as(o,{...c,photoURL:r})}catch(o){console.error("❌ Error saving profile photo:",o),alert("Failed to save profile photo.")}},s.readAsDataURL(e)}}},ZM={class:"container"},eL={class:"profile-header"},tL={class:"profile-pic-wrapper"},nL=["src"],sL={key:0,class:"edit-photo-controls"},iL={class:"edit-photo-label"},rL={class:"nickname-section"},oL={key:0},aL={key:1},lL={key:0,class:"description"},cL={key:1,class:"description"},uL={key:2,class:"my-sports"},hL={key:3,class:"my-sports"},dL={class:"email-box"},fL={key:5},pL={class:"sports-list"},gL={class:"sport-title"},mL={class:"sport-details"},_L={class:"extra-details"},yL={key:0},vL=["onClick"],EL={class:"sports-list"},wL={class:"sport-title"},TL={class:"sport-details"},IL={class:"extra-details"},CL={key:0},AL=["onClick"];function RL(n,e,t,s,i,r){const o=Ht("navbar");return ie(),re("div",null,[Se(o),y("div",ZM,[e[24]||(e[24]=y("hr",null,null,-1)),y("div",eL,[y("div",tL,[y("img",{id:"profile-picture",src:i.user.photoURL||i.defaultPhoto,alt:"Profile Picture"},null,8,nL),i.editMode?(ie(),re("div",sL,[y("label",iL,[e[7]||(e[7]=oe(" Edit Photo ")),y("input",{type:"file",accept:"image/png, image/jpeg",onChange:e[0]||(e[0]=(...a)=>r.handlePhotoUpload&&r.handlePhotoUpload(...a)),hidden:""},null,32)])])):Vn("",!0)]),y("div",rL,[i.editMode?(ie(),re("div",aL,[e[8]||(e[8]=y("label",null,"Nickname",-1)),De(y("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.editedUser.nickname=a),placeholder:"Enter a nickname",style:{width:"100%",padding:"8px","border-radius":"5px","margin-bottom":"10px"}},null,512),[[ut,i.editedUser.nickname]])])):(ie(),re("div",oL,[y("h2",null,ne(i.user.nickname||"No nickname yet"),1)]))])]),e[25]||(e[25]=y("h3",null,"About Me",-1)),i.editMode?(ie(),re("div",cL,[e[9]||(e[9]=y("label",null,"About Me",-1)),De(y("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.editedUser.about=a),rows:"4",style:{width:"100%"}},null,512),[[ut,i.editedUser.about]])])):(ie(),re("div",lL,[y("p",null,ne(i.user.about),1)])),e[26]||(e[26]=y("h3",null,"Sports",-1)),i.editMode?(ie(),re("div",hL,[e[11]||(e[11]=y("label",null,"Sports (comma-separated)",-1)),De(y("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>i.editedUser.sportsInput=a),placeholder:"e.g. Tennis, Football",style:{width:"100%",padding:"8px","border-radius":"5px"}},null,512),[[ut,i.editedUser.sportsInput]]),y("p",null,[e[10]||(e[10]=y("strong",null,"Preview:",-1)),oe(" "+ne(i.editedUser.sportsInput.split(",").map(a=>a.trim()).join(", ")),1)])])):(ie(),re("div",uL,[y("ul",null,[(ie(!0),re(ot,null,On(i.user.sports,a=>(ie(),re("li",{key:a},ne(a),1))),128))])])),e[27]||(e[27]=y("h3",null,"Email",-1)),y("div",dL,[y("p",null,ne(i.user.email||"No email available"),1)]),i.editMode?(ie(),re("div",fL,[y("button",{type:"edit",onClick:e[5]||(e[5]=(...a)=>r.saveChanges&&r.saveChanges(...a))},"Save"),y("button",{type:"edit",onClick:e[6]||(e[6]=(...a)=>r.cancelEditing&&r.cancelEditing(...a))},"Cancel")])):(ie(),re("button",{key:4,type:"edit",onClick:e[4]||(e[4]=(...a)=>r.startEditing&&r.startEditing(...a))},"Edit Profile")),e[28]||(e[28]=y("hr",null,null,-1)),e[29]||(e[29]=y("div",{class:"my-listing"},[y("h2",null,"My Listings")],-1)),e[30]||(e[30]=y("h3",null,"You Created",-1)),y("ul",pL,[(ie(!0),re(ot,null,On(i.createdListings,(a,c)=>(ie(),re("li",{class:"sport-card",key:a.id},[y("div",gL,ne(a.title),1),y("div",mL,[y("p",null,[e[12]||(e[12]=y("span",{class:"highlight"},"Location:",-1)),oe(" "+ne(a.location),1)]),y("p",null,[e[13]||(e[13]=y("span",{class:"highlight"},"Time:",-1)),oe(" "+ne(r.formatTime(a.time)),1)]),De(y("div",_L,[y("p",null,[e[14]||(e[14]=y("span",{class:"highlight"},"Players Needed:",-1)),oe(" "+ne(a.playersNeeded),1)]),y("p",null,[e[15]||(e[15]=y("span",{class:"highlight"},"Cost:",-1)),oe(" "+ne(a.cost),1)]),y("p",null,[e[16]||(e[16]=y("span",{class:"highlight"},"Experience:",-1)),oe(" "+ne(a.experience),1)]),a.description?(ie(),re("p",yL,[e[17]||(e[17]=y("span",{class:"highlight"},"Description:",-1)),oe(" "+ne(a.description),1)])):Vn("",!0)],512),[[ih,a.showDetails]]),y("button",{class:"toggle-btn",onClick:u=>a.showDetails=!a.showDetails},ne(a.showDetails?"Less ⬆️":"More ⬇️"),9,vL)])]))),128))]),e[31]||(e[31]=y("h3",null,"You Joined",-1)),y("ul",EL,[(ie(!0),re(ot,null,On(i.joinedListings,(a,c)=>(ie(),re("li",{class:"sport-card",key:c},[y("div",wL,ne(a.title),1),y("div",TL,[y("p",null,[e[18]||(e[18]=y("span",{class:"highlight"},"Location:",-1)),oe(" "+ne(a.location),1)]),y("p",null,[e[19]||(e[19]=y("span",{class:"highlight"},"Time:",-1)),oe(" "+ne(r.formatTime(a.time)),1)]),De(y("div",IL,[y("p",null,[e[20]||(e[20]=y("span",{class:"highlight"},"Players Needed:",-1)),oe(" "+ne(a.playersNeeded),1)]),y("p",null,[e[21]||(e[21]=y("span",{class:"highlight"},"Cost:",-1)),oe(" "+ne(a.cost),1)]),y("p",null,[e[22]||(e[22]=y("span",{class:"highlight"},"Experience:",-1)),oe(" "+ne(a.experience),1)]),a.description?(ie(),re("p",CL,[e[23]||(e[23]=y("span",{class:"highlight"},"Description:",-1)),oe(" "+ne(a.description),1)])):Vn("",!0)],512),[[ih,a.showDetails]]),y("button",{class:"toggle-btn",onClick:u=>a.showDetails=!a.showDetails},ne(a.showDetails?"Less ⬆️":"More ⬇️"),9,AL)])]))),128))])])])}const bL=Gt(XM,[["render",RL],["__scopeId","data-v-cf4811a1"]]);function SL(n){if(typeof n!="string")return new Date;if(n.includes("T"))return new Date(n);const[e,t]=n.split(" "),[s,i,r]=e.split("/").map(Number),[o,a]=t.split(":").map(Number);return new Date(r,i-1,s,o,a)}const PL={components:{Navbar:Bi},data(){return{matches:[],searchQuery:"",selectedSport:"",selectedLocation:"",selectedExperience:"",sportsTypes:[],locations:[],hideExpired:!1}},created(){this.fetchListings()},computed:{upcomingMatches(){return this.matches.filter(n=>!n.expired&&this.matchPassesFilters(n)).sort((n,e)=>new Date(n.time)-new Date(e.time))},pastMatches(){return this.matches.filter(n=>n.expired).sort((n,e)=>new Date(n.time)-new Date(e.time))}},methods:{formatTime(n){const e=new Date(n),t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),i=e.getFullYear(),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${t}/${s}/${i} ${r}:${o}`},matchPassesFilters(n){var r,o,a;const e=n.title.toLowerCase().includes(this.searchQuery.toLowerCase())||n.location.toLowerCase().includes(this.searchQuery.toLowerCase())||n.description.toLowerCase().includes(this.searchQuery.toLowerCase()),t=this.selectedSport?((r=n.sportType)==null?void 0:r.toLowerCase())===this.selectedSport.toLowerCase():!0,s=this.selectedLocation?((o=n.location)==null?void 0:o.toLowerCase())===this.selectedLocation.toLowerCase():!0,i=this.selectedExperience?((a=n.experience)==null?void 0:a.toLowerCase())==this.selectedExperience.toLowerCase():!0;return e&&t&&s&&i},async fetchListings(){try{const n=Ar(Qe,"listings"),e=await rw(n);this.matches=e.docs.map(i=>{let r=i.data();r.sportType||(r.sportType=r.title);const o=SL(r.time);return r.expired=o<new Date,{id:i.id,...r}});const t=this.matches.filter(i=>!i.expired),s=i=>i?(i=i.toLowerCase(),i.replace(/\b\w/g,r=>r.toUpperCase())):"";this.sportsTypes=[...new Set(t.map(i=>s(i.sportType)))],this.locations=[...new Set(t.map(i=>s(i.location)))]}catch(n){console.error("Error fetching listings:",n)}},async getCurrentUserEmail(){const n=Ws.currentUser;if(n)return n.email;throw new Error("No user is currently logged in.")},async addToFavourites(n){var r;const e=await((r=this.getCurrentUserEmail)==null?void 0:r.call(this)),t=nt(Qe,"users",e),s=await rt(t);if(!s.exists()){console.error("User not found!");return}let i=s.data().favourites||[];if(i.includes(n.id)){alert("Already in favourites!");return}i.push(n.id),await sf(t,{favourites:i}),alert("Added to favourites!")},async joinChat(n){const t=ps().currentUser;if(!t||!t.email){alert("User not authenticated");return}const s=t.email,i=nt(Qe,"users",s);let r=await rt(i);r.exists()||(await as(i,{joinedChats:[],favourites:[],name:t.displayName||""}),r=await rt(i));const o=r.data();let a=(o==null?void 0:o.joinedChats)||[];if(a.some(c=>c.id===n.id)){alert("Already joined this chat!");return}a.push({id:n.id,title:n.title,time:n.time}),await as(i,{joinedChats:a},{merge:!0}),alert(`Joined ${n.title} chat!`),this.$router.push("/chats")}}},kL={class:"container"},NL={class:"search-container"},DL={key:0,class:"filter-container"},xL=["value"],OL=["value"],ML={class:"toggle-container"},LL={class:"sports-list"},VL={class:"sport-title"},FL={class:"sport-details"},UL=["onClick"],BL=["onClick"],jL={key:1,class:"section-header faded"},qL={key:2,class:"sports-list"},$L={class:"sport-title"},WL={class:"sport-details"};function HL(n,e,t,s,i,r){const o=Ht("navbar");return ie(),re("div",null,[Se(o),y("div",kL,[e[24]||(e[24]=y("h1",{class:"explore-header"},"Explore Matches",-1)),e[25]||(e[25]=y("hr",null,null,-1)),y("div",NL,[De(y("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.searchQuery=a),type:"text",class:"search-bar",placeholder:"Search for matches..."},null,512),[[ut,i.searchQuery]])]),r.upcomingMatches.length>0?(ie(),re("div",DL,[De(y("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.selectedSport=a),class:"filter-dropdown"},[e[5]||(e[5]=y("option",{value:""},"All Sports",-1)),(ie(!0),re(ot,null,On(i.sportsTypes,a=>(ie(),re("option",{key:a,value:a},ne(a),9,xL))),128))],512),[[Co,i.selectedSport]]),De(y("select",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.selectedLocation=a),class:"filter-dropdown"},[e[6]||(e[6]=y("option",{value:""},"All Locations",-1)),(ie(!0),re(ot,null,On(i.locations,a=>(ie(),re("option",{key:a,value:a},ne(a),9,OL))),128))],512),[[Co,i.selectedLocation]]),De(y("select",{"onUpdate:modelValue":e[3]||(e[3]=a=>i.selectedExperience=a),class:"filter-dropdown"},e[7]||(e[7]=[qy('<option value="" data-v-84d5613e>All Experience Levels</option><option value="1" data-v-84d5613e>1</option><option value="2" data-v-84d5613e>2</option><option value="3" data-v-84d5613e>3</option><option value="4" data-v-84d5613e>4</option><option value="5" data-v-84d5613e>5</option>',6)]),512),[[Co,i.selectedExperience]])])):Vn("",!0),y("div",ML,[y("label",null,[De(y("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=a=>i.hideExpired=a)},null,512),[[BA,i.hideExpired]]),e[8]||(e[8]=oe(" Hide expired matches "))])]),e[26]||(e[26]=y("h2",{class:"section-header"},"Upcoming Matches",-1)),y("ul",LL,[(ie(!0),re(ot,null,On(r.upcomingMatches,a=>(ie(),re("li",{key:a.id,class:"sport-card"},[y("div",VL,ne(a.title),1),y("div",FL,[y("p",null,[e[9]||(e[9]=y("span",{class:"highlight"},"Location:",-1)),oe(" "+ne(a.location),1)]),y("p",null,[e[10]||(e[10]=y("span",{class:"highlight"},"Time:",-1)),oe(" "+ne(r.formatTime(a.time)),1)]),y("p",null,[e[11]||(e[11]=y("span",{class:"highlight"},"Players Needed:",-1)),oe(" "+ne(a.playersNeeded),1)]),y("p",null,[e[12]||(e[12]=y("span",{class:"highlight"},"Cost:",-1)),oe(" "+ne(a.cost),1)]),y("p",null,[e[13]||(e[13]=y("span",{class:"highlight"},"Experience Level:",-1)),oe(" "+ne(a.experience),1)]),y("p",null,[e[14]||(e[14]=y("span",{class:"highlight"},"Equipment:",-1)),oe(" "+ne(a.equipment.charAt(0).toUpperCase()+a.equipment.slice(1)),1)]),y("p",null,[e[15]||(e[15]=y("span",{class:"highlight"},"Description:",-1)),oe(" "+ne(a.description),1)]),y("button",{class:"fav-btn",onClick:c=>r.addToFavourites(a)}," Add to Favourites ",8,UL),y("button",{class:"chat-btn",onClick:c=>r.joinChat(a)},"Join Chat",8,BL)])]))),128))]),i.hideExpired?Vn("",!0):(ie(),re("h2",jL,"Past Matches")),i.hideExpired?Vn("",!0):(ie(),re("ul",qL,[(ie(!0),re(ot,null,On(r.pastMatches,a=>(ie(),re("li",{key:a.id,class:"sport-card expired-card"},[e[23]||(e[23]=y("div",{class:"expired-overlay"},"Expired",-1)),y("div",$L,ne(a.title),1),y("div",WL,[y("p",null,[e[16]||(e[16]=y("span",{class:"highlight"},"Location:",-1)),oe(" "+ne(a.location),1)]),y("p",null,[e[17]||(e[17]=y("span",{class:"highlight"},"Time:",-1)),oe(" "+ne(a.time),1)]),y("p",null,[e[18]||(e[18]=y("span",{class:"highlight"},"Players Needed:",-1)),oe(" "+ne(a.playersNeeded),1)]),y("p",null,[e[19]||(e[19]=y("span",{class:"highlight"},"Cost:",-1)),oe(" "+ne(a.cost),1)]),y("p",null,[e[20]||(e[20]=y("span",{class:"highlight"},"Experience Level:",-1)),oe(" "+ne(a.experience),1)]),y("p",null,[e[21]||(e[21]=y("span",{class:"highlight"},"Equipment:",-1)),oe(" "+ne(a.equipment.charAt(0).toUpperCase()+a.equipment.slice(1)),1)]),y("p",null,[e[22]||(e[22]=y("span",{class:"highlight"},"Description:",-1)),oe(" "+ne(a.description),1)])])]))),128))]))])])}const GL=Gt(PL,[["render",HL],["__scopeId","data-v-84d5613e"]]),KL="/assets/close-D09Vhsok.png",zL={setup(){return{router:wc()}},data(){return{newListing:{title:"",playersNeeded:"",location:"",time:"",cost:"",experience:"",equipment:"",description:""}}},methods:{goBack(){this.router.push("/Explore")},async addListing(){const e=ps().currentUser;if(!e){alert("You must be logged in to create a listing.");return}const t={...this.newListing,ownerId:e.email};try{await rf(Ar(Qe,"listings"),t),this.router.push("/Added")}catch(s){console.error("Error adding listing: ",s),alert("Failed to add listing. Please try again.")}}}},QL={class:"container"},YL={class:"stars"};function JL(n,e,t,s,i,r){return ie(),re("div",QL,[y("button",{class:"cancel-button",onClick:e[0]||(e[0]=(...o)=>r.goBack&&r.goBack(...o))},e[14]||(e[14]=[y("img",{src:KL,alt:"Close"},null,-1)])),e[30]||(e[30]=y("h2",{class:"heading"},"Add Your Listing",-1)),e[31]||(e[31]=y("hr",null,null,-1)),y("form",{onSubmit:e[13]||(e[13]=Ci((...o)=>r.addListing&&r.addListing(...o),["prevent"]))},[e[21]||(e[21]=y("label",{for:"sport"},"Sports Name",-1)),De(y("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.newListing.title=o),type:"text",id:"sport",placeholder:"e.g Tennis, Golf",required:""},null,512),[[ut,i.newListing.title]]),e[22]||(e[22]=y("label",{for:"players"},"Total no. of players needed",-1)),De(y("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>i.newListing.playersNeeded=o),type:"number",id:"players",min:"1",placeholder:"e.g 2",required:""},null,512),[[ut,i.newListing.playersNeeded]]),e[23]||(e[23]=y("label",{for:"location"},"Location",-1)),De(y("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.newListing.location=o),type:"text",id:"location",placeholder:"e.g Orchard mrt",required:""},null,512),[[ut,i.newListing.location]]),e[24]||(e[24]=y("label",{for:"time"},"Time",-1)),De(y("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>i.newListing.time=o),type:"datetime-local",id:"time",required:""},null,512),[[ut,i.newListing.time]]),e[25]||(e[25]=y("label",{for:"cost"},"Cost (SGD)",-1)),De(y("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>i.newListing.cost=o),type:"number",id:"cost",min:"0",placeholder:"Cost per pax (if applicable, else 0)",required:""},null,512),[[ut,i.newListing.cost]]),e[26]||(e[26]=y("label",null,"Experience Level",-1)),y("div",YL,[De(y("input",{type:"radio","onUpdate:modelValue":e[6]||(e[6]=o=>i.newListing.experience=o),id:"star5",value:"5"},null,512),[[io,i.newListing.experience]]),e[15]||(e[15]=y("label",{for:"star5"},"★",-1)),De(y("input",{type:"radio","onUpdate:modelValue":e[7]||(e[7]=o=>i.newListing.experience=o),id:"star4",value:"4"},null,512),[[io,i.newListing.experience]]),e[16]||(e[16]=y("label",{for:"star4"},"★",-1)),De(y("input",{type:"radio","onUpdate:modelValue":e[8]||(e[8]=o=>i.newListing.experience=o),id:"star3",value:"3"},null,512),[[io,i.newListing.experience]]),e[17]||(e[17]=y("label",{for:"star3"},"★",-1)),De(y("input",{type:"radio","onUpdate:modelValue":e[9]||(e[9]=o=>i.newListing.experience=o),id:"star2",value:"2"},null,512),[[io,i.newListing.experience]]),e[18]||(e[18]=y("label",{for:"star2"},"★",-1)),De(y("input",{type:"radio","onUpdate:modelValue":e[10]||(e[10]=o=>i.newListing.experience=o),id:"star1",value:"1"},null,512),[[io,i.newListing.experience]]),e[19]||(e[19]=y("label",{for:"star1"},"★",-1))]),e[27]||(e[27]=y("label",null,"Equipment (e.g racket, ball)",-1)),De(y("select",{"onUpdate:modelValue":e[11]||(e[11]=o=>i.newListing.equipment=o)},e[20]||(e[20]=[y("option",{value:""},"-- Select --",-1),y("option",{value:"provided"},"Provided",-1),y("option",{value:"bring your own"},"Bring your own",-1)]),512),[[Co,i.newListing.equipment]]),e[28]||(e[28]=y("label",{for:"description"},"Description / Additional Remarks",-1)),De(y("textarea",{"onUpdate:modelValue":e[12]||(e[12]=o=>i.newListing.description=o),id:"description",rows:"4",placeholder:"e.g Equipment to bring: Racket"},null,512),[[ut,i.newListing.description]]),e[29]||(e[29]=y("button",{type:"submit",class:"submit-btn"},"Find Player(s)",-1))],32)])}const XL=Gt(zL,[["render",JL],["__scopeId","data-v-1ccd1432"]]),ZL={name:"Favourites",data(){return{listings:[]}},async created(){await this.fetchListings()},methods:{formatTime(n){const e=new Date(n),t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),i=e.getFullYear(),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${t}/${s}/${i} ${r}:${o}`},async getCurrentUserEmail(){const n=Ws.currentUser;if(n)return n.email;throw new Error("No user is currently logged in.")},async fetchListings(){const n=await this.getCurrentUserEmail(),e=nt(Qe,"users",n),t=await rt(e);if(!t.exists()){console.error("User document not found.");return}const s=t.data().favourites;if(!s||s.length===0){console.log("No favourite listings found for this user."),this.listings=[];return}const i=s.map(async o=>{const a=nt(Qe,"listings",o),c=await rt(a);return c.exists()?{id:c.id,showDetails:!1,...c.data()}:(console.warn(`Listing with ID ${o} not found.`),null)}),r=await Promise.all(i);this.listings=r.filter(o=>o!==null)},async unfavourite(n){const e=await this.getCurrentUserEmail(),t=nt(Qe,"users",e),s=await rt(t);if(!s.exists()){console.error("User document not found.");return}const i=s.data().favourites.filter(r=>r!==n);await sf(t,{favourites:i}),this.listings=this.listings.filter(r=>r.id!==n)},async joinChat(n){const t=ps().currentUser;if(!t||!t.email){alert("User not authenticated");return}const s=t.email,i=nt(Qe,"users",s);let r=await rt(i);r.exists()||(await as(i,{joinedChats:[],favourites:[],name:t.displayName||""}),r=await rt(i));const o=r.data();let a=(o==null?void 0:o.joinedChats)||[];if(a.some(c=>c.id===n.id)){alert("Already joined this chat!");return}a.push({id:n.id,title:n.title,time:n.time}),await as(i,{joinedChats:a},{merge:!0}),alert(`Joined ${n.title} chat!`),this.$router.push("/chats")},toggleDetails(n){const e=n.target,t=e.parentElement.querySelector(".hidden-details");if(t.style.display==="none"||t.style.display===""){t.style.display="block",e.style.display="none";const s=document.createElement("button");s.classList.add("toggle-btn"),s.innerHTML="Less ⬆️",s.onclick=function(){t.style.display="none",s.remove(),e.style.display="flex"},t.appendChild(s)}}}},eV={class:"container"},tV={class:"sports-list"},nV=["onClick"],sV={class:"sport-title"},iV={class:"sport-details"},rV={class:"extra-details"},oV=["onClick"],aV=["onClick"];function lV(n,e,t,s,i,r){return ie(),re("div",eV,[e[7]||(e[7]=y("h1",null,"Favourited Listings",-1)),e[8]||(e[8]=y("hr",null,null,-1)),y("ul",tV,[(ie(!0),re(ot,null,On(i.listings,o=>(ie(),re("li",{key:o.id,class:"sport-card"},[y("button",{class:"unfavourite-btn",onClick:a=>r.unfavourite(o.id)},"Remove Favourites",8,nV),y("div",sV,ne(o.title),1),y("div",iV,[y("p",null,[e[0]||(e[0]=y("span",{class:"highlight"},"Location:",-1)),oe(" "+ne(o.location),1)]),y("p",null,[e[1]||(e[1]=y("span",{class:"highlight"},"Time:",-1)),oe(" "+ne(r.formatTime(o.time)),1)]),De(y("div",rV,[y("p",null,[e[2]||(e[2]=y("span",{class:"highlight"},"Players Needed:",-1)),oe(" "+ne(o.playersNeeded),1)]),y("p",null,[e[3]||(e[3]=y("span",{class:"highlight"},"Cost:",-1)),oe(" "+ne(o.cost),1)]),y("p",null,[e[4]||(e[4]=y("span",{class:"highlight"},"Experience:",-1)),oe(" "+ne(o.experience),1)]),y("p",null,[e[5]||(e[5]=y("span",{class:"highlight"},"Equipment:",-1)),oe(" "+ne(o.equipment.charAt(0).toUpperCase()+o.equipment.slice(1)),1)]),y("p",null,[e[6]||(e[6]=y("span",{class:"highlight"},"Description:",-1)),oe(" "+ne(o.description),1)])],512),[[ih,o.showDetails]]),y("button",{class:"toggle-btn",onClick:a=>o.showDetails=!o.showDetails},ne(o.showDetails?"Less ⬆️":"More ⬇️"),9,oV),y("button",{class:"chat-btn",onClick:a=>r.joinChat(o)},"Join Chat",8,aV)])]))),128))])])}const cV=Gt(ZL,[["render",lV],["__scopeId","data-v-06fc55a5"]]),uV={name:"FavouritesPage",components:{NavBar:Bi,Favourites:cV}};function hV(n,e,t,s,i,r){const o=Ht("NavBar"),a=Ht("Favourites");return ie(),re("div",null,[Se(o),Se(a)])}const dV=Gt(uV,[["render",hV]]),fV={components:{Navbar:Bi},data(){return{selectedRoom:"",joinedRooms:[],messages:{},newMessage:"",currentUser:{},userNickname:""}},async created(){const n=ps();pf(n,async e=>{e?(this.currentUser=e,await this.fetchNickname(),await this.loadUserRooms()):console.warn("No user is signed in.")})},methods:{formatTime(n){const e=new Date(n),t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),i=e.getFullYear(),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${t}/${s}/${i} ${r}:${o}`},async fetchNickname(){const n=nt(Qe,"users",this.currentUser.email),e=await rt(n);e.exists()?this.userNickname=e.data().nickname||this.currentUser.displayName||"Anonymous":this.userNickname=this.currentUser.displayName||"Anonymous"},async loadUserRooms(){var s,i;const n=nt(Qe,"users",this.currentUser.email),e=await rt(n);if(!e.exists())return;const t=e.data().joinedChats||[];if(t.length>0&&((s=t[0])!=null&&s.title))this.joinedRooms=t;else{const r=t.map(async a=>{const c=a.id||a,u=nt(Qe,"listings",c),h=await rt(u);return h.exists()?{id:h.id,...h.data()}:null}),o=await Promise.all(r);this.joinedRooms=o.filter(a=>a!==null)}this.selectedRoom=((i=this.joinedRooms[0])==null?void 0:i.id)||"",this.joinRoom()},joinRoom(){if(!this.selectedRoom)return;const n=xh(Ar(Qe,"messages"),ew("room","==",this.selectedRoom)),e=xh(n,$k("createdAt","asc"));Gk(e,t=>{this.messages[this.selectedRoom]=t.docs.map(s=>s.data())})},async sendMessage(){this.newMessage.trim()&&(await rf(Ar(Qe,"messages"),{room:this.selectedRoom,text:this.newMessage,userId:this.currentUser.uid,username:this.userNickname,createdAt:new Date}),this.newMessage="")},async leaveChat(){var s;if(!this.selectedRoom)return;alert("Leaving chat...");const n=nt(Qe,"users",this.currentUser.email),e=await rt(n);if(!e.exists())return;let t=e.data().joinedChats||[];t=t.filter(i=>typeof i=="string"?i!==this.selectedRoom:i.id!==this.selectedRoom),await sf(n,{joinedChats:t}),this.joinedRooms=this.joinedRooms.filter(i=>i.id!==this.selectedRoom),this.selectedRoom=((s=this.joinedRooms[0])==null?void 0:s.id)||"",this.selectedRoom&&this.joinRoom()}},computed:{selectedRoomObj(){return this.joinedRooms.find(n=>n.id===this.selectedRoom)||{}}}},pV={class:"page-wrapper"},gV={class:"chat-container"},mV={key:0,class:"empty-chat-message"},_V={key:1},yV={class:"discussion-bar"},vV=["value"],EV={class:"current-room-display"},wV={id:"current-room"},TV={class:"chat-main"},IV={class:"chat-box"},CV={class:"username"},AV={class:"message-content"},RV={class:"chat-input"};function bV(n,e,t,s,i,r){const o=Ht("navbar"),a=Ht("router-link");return ie(),re("div",pV,[Se(o),y("div",gV,[i.joinedRooms.length===0?(ie(),re("div",mV,[e[9]||(e[9]=y("h2",null,"No chats joined yet! 🥲",-1)),y("p",null,[e[7]||(e[7]=oe("Start the fun by ")),Se(a,{to:"/explore"},{default:Yt(()=>e[6]||(e[6]=[oe("joining a listing")])),_:1}),e[8]||(e[8]=oe("!"))])])):(ie(),re("div",_V,[e[12]||(e[12]=y("header",null,[y("h1",null,"Chat Rooms")],-1)),y("div",yV,[e[10]||(e[10]=y("h2",null,"Joined Groups",-1)),De(y("select",{"onUpdate:modelValue":e[0]||(e[0]=c=>i.selectedRoom=c),class:"dropdown",onChange:e[1]||(e[1]=(...c)=>r.joinRoom&&r.joinRoom(...c))},[(ie(!0),re(ot,null,On(i.joinedRooms,c=>(ie(),re("option",{key:c.id,value:c.id},ne(c.title)+" - "+ne(r.formatTime(c.time)),9,vV))),128))],544),[[Co,i.selectedRoom]])]),y("div",EV,[y("h3",null,[e[11]||(e[11]=oe(" Current Chat Room: ")),y("span",wV,ne(r.selectedRoomObj.title)+" - "+ne(r.formatTime(r.selectedRoomObj.time)),1)]),y("button",{class:"leave-chat-btn",onClick:e[2]||(e[2]=(...c)=>r.leaveChat&&r.leaveChat(...c))},"Leave Chat")]),y("div",TV,[y("div",IV,[(ie(!0),re(ot,null,On(i.messages[i.selectedRoom],(c,u)=>(ie(),re("div",{key:u,class:hc(["message",c.userId===i.currentUser.uid?"my-msg":"user-msg"])},[y("div",CV,ne(c.username),1),y("div",AV,ne(c.text),1)],2))),128))]),y("div",RV,[De(y("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=c=>i.newMessage=c),placeholder:"Type a message...",onKeyup:e[4]||(e[4]=WA((...c)=>r.sendMessage&&r.sendMessage(...c),["enter"]))},null,544),[[ut,i.newMessage]]),y("button",{onClick:e[5]||(e[5]=(...c)=>r.sendMessage&&r.sendMessage(...c))},"Send")])])]))])])}const SV=Gt(fV,[["render",bV],["__scopeId","data-v-e8714c1e"]]),PV={data(){return{status:""}},methods:{async migrate(){this.status="⏳ Migrating...";try{const n=cM(TM,"listings"),e=await uM(n);if(!e.exists()){this.status="❌ No listings found in Realtime DB.";return}const t=e.val();let s=0;for(const[i,r]of Object.entries(t))await rf(Ar(Qe,"listings"),{...r,migratedFromRealtime:!0}),s++;this.status=`✅ Migration complete! ${s} listings moved.`}catch(n){console.error("❌ Migration error:",n),this.status="❌ Migration failed. See console."}}}},kV={class:"container"},NV={key:0};function DV(n,e,t,s,i,r){return ie(),re("div",kV,[e[1]||(e[1]=y("h2",null,"🛠️ Migrate Listings from Realtime DB → Firestore",-1)),y("button",{onClick:e[0]||(e[0]=(...o)=>r.migrate&&r.migrate(...o))},"Run Migration"),i.status?(ie(),re("p",NV,ne(i.status),1)):Vn("",!0)])}const xV=Gt(PV,[["render",DV],["__scopeId","data-v-d03f5d3e"]]),OV={components:{Navbar:Bi}},MV={class:"main-content"},LV={class:"container"},VV={class:"check-items"};function FV(n,e,t,s,i,r){const o=Ht("navbar"),a=Ht("router-link");return ie(),re("div",null,[Se(o),y("div",MV,[y("div",LV,[y("div",VV,[e[1]||(e[1]=y("div",{class:"checkmark"},"✔",-1)),e[2]||(e[2]=y("h1",null,"Listing Added!",-1)),e[3]||(e[3]=y("p",null,"Your listing has been successfully added.",-1)),Se(a,{to:"/Explore",class:"return-btn"},{default:Yt(()=>e[0]||(e[0]=[oe("Return to Explore")])),_:1})])])])])}const UV=Gt(OV,[["render",FV],["__scopeId","data-v-fbe703fa"]]),BV={setup(){const n=wc(),e=qt(""),t=qt(""),s=qt("");return{aboutMe:e,sportsInput:s,errorMessage:t,submitOnboarding:async()=>{try{const r=Ws.currentUser;if(!r){t.value="User not logged in.";return}const o=s.value.split(",").map(c=>c.trim()).filter(c=>c!==""),a=nt(Qe,"users",r.email);await as(a,{about:e.value,sports:o,firstTime:!1},{merge:!0}),alert("Onboarding successful! Redirecting..."),n.push("/Explore")}catch(r){console.error("Onboarding Error:",r),t.value="Something went wrong. Please try again."}}}}},jV={class:"onboarding-container"},qV={class:"onboarding-card"},$V={key:0,class:"error"};function WV(n,e,t,s,i,r){const o=Ht("router-link");return ie(),re("div",jV,[Se(o,{to:"/",class:"logo"},{default:Yt(()=>e[3]||(e[3]=[oe("MatchUp")])),_:1}),y("div",qV,[e[6]||(e[6]=y("h2",null,"Welcome to MatchUp! 🏐",-1)),e[7]||(e[7]=y("p",{class:"subtitle"},"Tell us a bit about yourself so we can match you better.",-1)),y("form",{onSubmit:e[2]||(e[2]=Ci((...a)=>s.submitOnboarding&&s.submitOnboarding(...a),["prevent"]))},[De(y("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.aboutMe=a),placeholder:"Write something about yourself...",rows:"4",required:""},null,512),[[ut,s.aboutMe]]),e[4]||(e[4]=y("label",{class:"sports-label"},"What sports do you play?",-1)),De(y("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.sportsInput=a),placeholder:"e.g. Football, Basketball, Badminton",required:""},null,512),[[ut,s.sportsInput]]),e[5]||(e[5]=y("button",{type:"submit",class:"submit-btn"},"Continue",-1)),s.errorMessage?(ie(),re("p",$V,ne(s.errorMessage),1)):Vn("",!0)],32)])])}const HV=Gt(BV,[["render",WV],["__scopeId","data-v-47838187"]]),GV={name:"OnboardingPage",components:{Onboarding:HV}};function KV(n,e,t,s,i,r){const o=Ht("Onboarding");return ie(),re("div",null,[Se(o)])}const zV=Gt(GV,[["render",KV]]),QV=[{path:"/",component:jM},{path:"/Login",component:MM},{path:"/SignUp",component:JM},{path:"/Explore",component:GL},{path:"/add-listing",component:XL},{path:"/profile",component:bL},{path:"/favourites",component:dV},{path:"/chats",component:SV},{path:"/migrate",component:xV},{path:"/Added",component:UV},{path:"/Onboarding",component:zV}],YV=tb({history:kR(),routes:QV});KA(ZA).use(YV).mount("#app");
