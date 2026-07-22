(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function M0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ly={exports:{}},Fl={},uy={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),j0=Symbol.for("react.portal"),F0=Symbol.for("react.fragment"),U0=Symbol.for("react.strict_mode"),B0=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),H0=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),q0=Symbol.for("react.memo"),K0=Symbol.for("react.lazy"),bp=Symbol.iterator;function G0(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hy=Object.assign,dy={};function qi(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||cy}qi.prototype.isReactComponent={};qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fy(){}fy.prototype=qi.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||cy}var qh=Wh.prototype=new fy;qh.constructor=Wh;hy(qh,qi.prototype);qh.isPureReactComponent=!0;var Op=Array.isArray,py=Object.prototype.hasOwnProperty,Kh={current:null},my={key:!0,ref:!0,__self:!0,__source:!0};function gy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)py.call(e,r)&&!my.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:So,type:t,key:s,ref:o,props:i,_owner:Kh.current}}function Q0(t,e){return{$$typeof:So,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===So}function Y0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lp=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y0(""+t.key):e.toString(36)}function Pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case So:case j0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bu(o,0):r,Op(i)?(n="",t!=null&&(n=t.replace(Lp,"$&/")+"/"),Pa(i,e,n,"",function(h){return h})):i!=null&&(Gh(i)&&(i=Q0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Op(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Bu(s,l);o+=Pa(s,e,n,u,i)}else if(u=G0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Bu(s,l++),o+=Pa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var r=[],i=0;return Pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function X0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},xa={transition:null},J0={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Kh};function yy(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=qi;J.Fragment=F0;J.Profiler=B0;J.PureComponent=Wh;J.StrictMode=U0;J.Suspense=W0;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0;J.act=yy;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)py.call(e,u)&&!my.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:So,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:$0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:z0,_context:t},t.Consumer=t};J.createElement=gy;J.createFactory=function(t){var e=gy.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:H0,render:t}};J.isValidElement=Gh;J.lazy=function(t){return{$$typeof:K0,_payload:{_status:-1,_result:t},_init:X0}};J.memo=function(t,e){return{$$typeof:q0,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};J.unstable_act=yy;J.useCallback=function(t,e){return ut.current.useCallback(t,e)};J.useContext=function(t){return ut.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};J.useEffect=function(t,e){return ut.current.useEffect(t,e)};J.useId=function(){return ut.current.useId()};J.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ut.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};J.useRef=function(t){return ut.current.useRef(t)};J.useState=function(t){return ut.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ut.current.useTransition()};J.version="18.3.1";uy.exports=J;var fe=uy.exports;const _y=M0(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=fe,eT=Symbol.for("react.element"),tT=Symbol.for("react.fragment"),nT=Object.prototype.hasOwnProperty,rT=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iT={key:!0,ref:!0,__self:!0,__source:!0};function vy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nT.call(e,r)&&!iT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eT,type:t,key:s,ref:o,props:i,_owner:rT.current}}Fl.Fragment=tT;Fl.jsx=vy;Fl.jsxs=vy;ly.exports=Fl;var d=ly.exports,Ac={},Ey={exports:{}},It={},wy={exports:{}},Ty={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var X=B.length;B.push(G);e:for(;0<X;){var me=X-1>>>1,ae=B[me];if(0<i(ae,G))B[me]=G,B[X]=ae,X=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],X=B.pop();if(X!==G){B[0]=X;e:for(var me=0,ae=B.length,ke=ae>>>1;me<ke;){var on=2*(me+1)-1,an=B[on],ln=on+1,un=B[ln];if(0>i(an,X))ln<ae&&0>i(un,an)?(B[me]=un,B[ln]=X,me=ln):(B[me]=an,B[on]=X,me=on);else if(ln<ae&&0>i(un,X))B[me]=un,B[ln]=X,me=ln;else break e}}return G}function i(B,G){var X=B.sortIndex-G.sortIndex;return X!==0?X:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,v=3,R=!1,D=!1,b=!1,A=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function P(B){if(b=!1,I(B),!D)if(n(u)!==null)D=!0,ts(L);else{var G=n(h);G!==null&&sn(P,G.startTime-B)}}function L(B,G){D=!1,b&&(b=!1,y(_),_=-1),R=!0;var X=v;try{for(I(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!C());){var me=m.callback;if(typeof me=="function"){m.callback=null,v=m.priorityLevel;var ae=me(m.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),I(G)}else r(u);m=n(u)}if(m!==null)var ke=!0;else{var on=n(h);on!==null&&sn(P,on.startTime-G),ke=!1}return ke}finally{m=null,v=X,R=!1}}var V=!1,E=null,_=-1,T=5,S=-1;function C(){return!(t.unstable_now()-S<T)}function N(){if(E!==null){var B=t.unstable_now();S=B;var G=!0;try{G=E(!0,B)}finally{G?k():(V=!1,E=null)}}else V=!1}var k;if(typeof w=="function")k=function(){w(N)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,yr=kt.port2;kt.port1.onmessage=N,k=function(){yr.postMessage(null)}}else k=function(){A(N,0)};function ts(B){E=B,V||(V=!0,k())}function sn(B,G){_=A(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){D||R||(D=!0,ts(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var X=v;v=G;try{return B()}finally{v=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=v;v=B;try{return G()}finally{v=X}},t.unstable_scheduleCallback=function(B,G,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,B){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,B={id:p++,callback:G,priorityLevel:B,startTime:X,expirationTime:ae,sortIndex:-1},X>me?(B.sortIndex=X,e(h,B),n(u)===null&&B===n(h)&&(b?(y(_),_=-1):b=!0,sn(P,X-me))):(B.sortIndex=ae,e(u,B),D||R||(D=!0,ts(L))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var G=v;return function(){var X=v;v=G;try{return B.apply(this,arguments)}finally{v=X}}}})(Ty);wy.exports=Ty;var sT=wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oT=fe,Tt=sT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iy=new Set,Ys={};function qr(t,e){Ni(t,e),Ni(t+"Capture",e)}function Ni(t,e){for(Ys[t]=e,t=0;t<e.length;t++)Iy.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=Object.prototype.hasOwnProperty,aT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Mp={};function lT(t){return Rc.call(Mp,t)?!0:Rc.call(Vp,t)?!1:aT.test(t)?Mp[t]=!0:(Vp[t]=!0,!1)}function uT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cT(t,e,n,r){if(e===null||typeof e>"u"||uT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Yh);We[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Yh);We[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Yh);We[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xh(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cT(e,n,i,r)&&(n=null),r||i===null?lT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=oT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),ai=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),Jh=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),ky=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),Ay=Symbol.for("react.offscreen"),jp=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,zu;function ks(t){if(zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var $u=!1;function Hu(t,e){if(!t||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function hT(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function Nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case li:return"Fragment";case ai:return"Portal";case Cc:return"Profiler";case Jh:return"StrictMode";case Pc:return"Suspense";case xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ky:return(t.displayName||"Context")+".Consumer";case Sy:return(t._context.displayName||"Context")+".Provider";case Zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ed:return e=t.displayName||null,e!==null?e:Nc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return Nc(t(e))}catch{}}return null}function dT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nc(e);case 8:return e===Jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ry(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fT(t){var e=Ry(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=fT(t))}function Cy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ry(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ya(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Py(t,e){e=e.checked,e!=null&&Xh(t,"checked",e,!1)}function bc(t,e){Py(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oc(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oc(t,e,n){(e!=="number"||Ya(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var As=Array.isArray;function Ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(As(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function xy(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,Dy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pT=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){pT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function by(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function Oy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=by(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mT=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mc(t,e){if(e){if(mT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function td(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uc=null,wi=null,Ti=null;function $p(t){if(t=Ro(t)){if(typeof Uc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Hl(e),Uc(t.stateNode,t.type,e))}}function Ly(t){wi?Ti?Ti.push(t):Ti=[t]:wi=t}function Vy(){if(wi){var t=wi,e=Ti;if(Ti=wi=null,$p(t),e)for(t=0;t<e.length;t++)$p(e[t])}}function My(t,e){return t(e)}function jy(){}var Wu=!1;function Fy(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return My(t,e,n)}finally{Wu=!1,(wi!==null||Ti!==null)&&(jy(),Vy())}}function Js(t,e){var n=t.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Bc=!1;if(Tn)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Bc=!1}function gT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Vs=!1,Xa=null,Ja=!1,zc=null,yT={onError:function(t){Vs=!0,Xa=t}};function _T(t,e,n,r,i,s,o,l,u){Vs=!1,Xa=null,gT.apply(yT,arguments)}function vT(t,e,n,r,i,s,o,l,u){if(_T.apply(this,arguments),Vs){if(Vs){var h=Xa;Vs=!1,Xa=null}else throw Error(F(198));Ja||(Ja=!0,zc=h)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Uy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hp(t){if(Kr(t)!==t)throw Error(F(188))}function ET(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hp(i),t;if(s===r)return Hp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function By(t){return t=ET(t),t!==null?zy(t):null}function zy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zy(t);if(e!==null)return e;t=t.sibling}return null}var $y=Tt.unstable_scheduleCallback,Wp=Tt.unstable_cancelCallback,wT=Tt.unstable_shouldYield,TT=Tt.unstable_requestPaint,Re=Tt.unstable_now,IT=Tt.unstable_getCurrentPriorityLevel,nd=Tt.unstable_ImmediatePriority,Hy=Tt.unstable_UserBlockingPriority,Za=Tt.unstable_NormalPriority,ST=Tt.unstable_LowPriority,Wy=Tt.unstable_IdlePriority,Ul=null,Gt=null;function kT(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:CT,AT=Math.log,RT=Math.LN2;function CT(t){return t>>>=0,t===0?32:31-(AT(t)/RT|0)|0}var la=64,ua=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Rs(l):(s&=o,s!==0&&(r=Rs(s)))}else o=n&~i,o!==0?r=Rs(o):s!==0&&(r=Rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function PT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=PT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qy(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function NT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function Ky(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gy,id,Qy,Yy,Xy,Hc=!1,ca=[],Gn=null,Qn=null,Yn=null,Zs=new Map,eo=new Map,jn=[],DT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qp(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ro(e),e!==null&&id(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bT(t,e,n,r,i){switch(e){case"focusin":return Gn=ys(Gn,t,e,n,r,i),!0;case"dragenter":return Qn=ys(Qn,t,e,n,r,i),!0;case"mouseover":return Yn=ys(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zs.set(s,ys(Zs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,eo.set(s,ys(eo.get(s)||null,t,e,n,r,i)),!0}return!1}function Jy(t){var e=kr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Uy(n),e!==null){t.blockedOn=e,Xy(t.priority,function(){Qy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fc=r,n.target.dispatchEvent(r),Fc=null}else return e=Ro(n),e!==null&&id(e),t.blockedOn=n,!1;e.shift()}return!0}function Kp(t,e,n){Na(t)&&n.delete(e)}function OT(){Hc=!1,Gn!==null&&Na(Gn)&&(Gn=null),Qn!==null&&Na(Qn)&&(Qn=null),Yn!==null&&Na(Yn)&&(Yn=null),Zs.forEach(Kp),eo.forEach(Kp)}function _s(t,e){t.blockedOn===e&&(t.blockedOn=null,Hc||(Hc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,OT)))}function to(t){function e(i){return _s(i,t)}if(0<ca.length){_s(ca[0],t);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&_s(Gn,t),Qn!==null&&_s(Qn,t),Yn!==null&&_s(Yn,t),Zs.forEach(e),eo.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Jy(n),n.blockedOn===null&&jn.shift()}var Ii=xn.ReactCurrentBatchConfig,tl=!0;function LT(t,e,n,r){var i=se,s=Ii.transition;Ii.transition=null;try{se=1,sd(t,e,n,r)}finally{se=i,Ii.transition=s}}function VT(t,e,n,r){var i=se,s=Ii.transition;Ii.transition=null;try{se=4,sd(t,e,n,r)}finally{se=i,Ii.transition=s}}function sd(t,e,n,r){if(tl){var i=Wc(t,e,n,r);if(i===null)nc(t,e,r,nl,n),qp(t,r);else if(bT(i,t,e,n,r))r.stopPropagation();else if(qp(t,r),e&4&&-1<DT.indexOf(t)){for(;i!==null;){var s=Ro(i);if(s!==null&&Gy(s),s=Wc(t,e,n,r),s===null&&nc(t,e,r,nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nc(t,e,r,null,n)}}var nl=null;function Wc(t,e,n,r){if(nl=null,t=td(r),t=kr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Uy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function Zy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IT()){case nd:return 1;case Hy:return 4;case Za:case ST:return 16;case Wy:return 536870912;default:return 16}default:return 16}}var Wn=null,od=null,Da=null;function e_(){if(Da)return Da;var t,e=od,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Da=i.slice(t,1<r?1-r:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function Gp(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:Gp,this.isPropagationStopped=Gp,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=St(Ki),Ao=_e({},Ki,{view:0,detail:0}),MT=St(Ao),Ku,Gu,vs,Bl=_e({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vs&&(vs&&t.type==="mousemove"?(Ku=t.screenX-vs.screenX,Gu=t.screenY-vs.screenY):Gu=Ku=0,vs=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),Qp=St(Bl),jT=_e({},Bl,{dataTransfer:0}),FT=St(jT),UT=_e({},Ao,{relatedTarget:0}),Qu=St(UT),BT=_e({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),zT=St(BT),$T=_e({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HT=St($T),WT=_e({},Ki,{data:0}),Yp=St(WT),qT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GT[t])?!!e[t]:!1}function ld(){return QT}var YT=_e({},Ao,{key:function(t){if(t.key){var e=qT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XT=St(YT),JT=_e({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=St(JT),ZT=_e({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),eI=St(ZT),tI=_e({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),nI=St(tI),rI=_e({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iI=St(rI),sI=[9,13,27,32],ud=Tn&&"CompositionEvent"in window,Ms=null;Tn&&"documentMode"in document&&(Ms=document.documentMode);var oI=Tn&&"TextEvent"in window&&!Ms,t_=Tn&&(!ud||Ms&&8<Ms&&11>=Ms),Jp=" ",Zp=!1;function n_(t,e){switch(t){case"keyup":return sI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function aI(t,e){switch(t){case"compositionend":return r_(e);case"keypress":return e.which!==32?null:(Zp=!0,Jp);case"textInput":return t=e.data,t===Jp&&Zp?null:t;default:return null}}function lI(t,e){if(ui)return t==="compositionend"||!ud&&n_(t,e)?(t=e_(),Da=od=Wn=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return t_&&e.locale!=="ko"?null:e.data;default:return null}}var uI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uI[t.type]:e==="textarea"}function i_(t,e,n,r){Ly(r),e=rl(e,"onChange"),0<e.length&&(n=new ad("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var js=null,no=null;function cI(t){m_(t,0)}function zl(t){var e=di(t);if(Cy(e))return t}function hI(t,e){if(t==="change")return e}var s_=!1;if(Tn){var Yu;if(Tn){var Xu="oninput"in document;if(!Xu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Xu=typeof tm.oninput=="function"}Yu=Xu}else Yu=!1;s_=Yu&&(!document.documentMode||9<document.documentMode)}function nm(){js&&(js.detachEvent("onpropertychange",o_),no=js=null)}function o_(t){if(t.propertyName==="value"&&zl(no)){var e=[];i_(e,no,t,td(t)),Fy(cI,e)}}function dI(t,e,n){t==="focusin"?(nm(),js=e,no=n,js.attachEvent("onpropertychange",o_)):t==="focusout"&&nm()}function fI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(no)}function pI(t,e){if(t==="click")return zl(e)}function mI(t,e){if(t==="input"||t==="change")return zl(e)}function gI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:gI;function ro(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rc.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,e){var n=rm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rm(n)}}function a_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?a_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function l_(){for(var t=window,e=Ya();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ya(t.document)}return e}function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yI(t){var e=l_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&a_(n.ownerDocument.documentElement,n)){if(r!==null&&cd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=im(n,s);var o=im(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _I=Tn&&"documentMode"in document&&11>=document.documentMode,ci=null,qc=null,Fs=null,Kc=!1;function sm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||ci==null||ci!==Ya(r)||(r=ci,"selectionStart"in r&&cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fs&&ro(Fs,r)||(Fs=r,r=rl(qc,"onSelect"),0<r.length&&(e=new ad("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Ju={},u_={};Tn&&(u_=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function $l(t){if(Ju[t])return Ju[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u_)return Ju[t]=e[n];return t}var c_=$l("animationend"),h_=$l("animationiteration"),d_=$l("animationstart"),f_=$l("transitionend"),p_=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){p_.set(t,e),qr(e,[t])}for(var Zu=0;Zu<om.length;Zu++){var ec=om[Zu],vI=ec.toLowerCase(),EI=ec[0].toUpperCase()+ec.slice(1);hr(vI,"on"+EI)}hr(c_,"onAnimationEnd");hr(h_,"onAnimationIteration");hr(d_,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(f_,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function am(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vT(r,e,void 0,t),t.currentTarget=null}function m_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;am(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;am(i,l,h),s=u}}}if(Ja)throw t=zc,Ja=!1,zc=null,t}function he(t,e){var n=e[Jc];n===void 0&&(n=e[Jc]=new Set);var r=t+"__bubble";n.has(r)||(g_(e,t,2,!1),n.add(r))}function tc(t,e,n){var r=0;e&&(r|=4),g_(n,t,r,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[fa]){t[fa]=!0,Iy.forEach(function(n){n!=="selectionchange"&&(wI.has(n)||tc(n,!1,t),tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,tc("selectionchange",!1,e))}}function g_(t,e,n,r){switch(Zy(e)){case 1:var i=LT;break;case 4:i=VT;break;default:i=sd}n=i.bind(null,e,n,t),i=void 0,!Bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Fy(function(){var h=s,p=td(n),m=[];e:{var v=p_.get(t);if(v!==void 0){var R=ad,D=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":R=XT;break;case"focusin":D="focus",R=Qu;break;case"focusout":D="blur",R=Qu;break;case"beforeblur":case"afterblur":R=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=FT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=eI;break;case c_:case h_:case d_:R=zT;break;case f_:R=nI;break;case"scroll":R=MT;break;case"wheel":R=iI;break;case"copy":case"cut":case"paste":R=HT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Xp}var b=(e&4)!==0,A=!b&&t==="scroll",y=b?v!==null?v+"Capture":null:v;b=[];for(var w=h,I;w!==null;){I=w;var P=I.stateNode;if(I.tag===5&&P!==null&&(I=P,y!==null&&(P=Js(w,y),P!=null&&b.push(so(w,P,I)))),A)break;w=w.return}0<b.length&&(v=new R(v,D,null,n,p),m.push({event:v,listeners:b}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",v&&n!==Fc&&(D=n.relatedTarget||n.fromElement)&&(kr(D)||D[In]))break e;if((R||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,R?(D=n.relatedTarget||n.toElement,R=h,D=D?kr(D):null,D!==null&&(A=Kr(D),D!==A||D.tag!==5&&D.tag!==6)&&(D=null)):(R=null,D=h),R!==D)){if(b=Qp,P="onMouseLeave",y="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=Xp,P="onPointerLeave",y="onPointerEnter",w="pointer"),A=R==null?v:di(R),I=D==null?v:di(D),v=new b(P,w+"leave",R,n,p),v.target=A,v.relatedTarget=I,P=null,kr(p)===h&&(b=new b(y,w+"enter",D,n,p),b.target=I,b.relatedTarget=A,P=b),A=P,R&&D)t:{for(b=R,y=D,w=0,I=b;I;I=ri(I))w++;for(I=0,P=y;P;P=ri(P))I++;for(;0<w-I;)b=ri(b),w--;for(;0<I-w;)y=ri(y),I--;for(;w--;){if(b===y||y!==null&&b===y.alternate)break t;b=ri(b),y=ri(y)}b=null}else b=null;R!==null&&lm(m,v,R,b,!1),D!==null&&A!==null&&lm(m,A,D,b,!0)}}e:{if(v=h?di(h):window,R=v.nodeName&&v.nodeName.toLowerCase(),R==="select"||R==="input"&&v.type==="file")var L=hI;else if(em(v))if(s_)L=mI;else{L=fI;var V=dI}else(R=v.nodeName)&&R.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(L=pI);if(L&&(L=L(t,h))){i_(m,L,n,p);break e}V&&V(t,v,h),t==="focusout"&&(V=v._wrapperState)&&V.controlled&&v.type==="number"&&Oc(v,"number",v.value)}switch(V=h?di(h):window,t){case"focusin":(em(V)||V.contentEditable==="true")&&(ci=V,qc=h,Fs=null);break;case"focusout":Fs=qc=ci=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,sm(m,n,p);break;case"selectionchange":if(_I)break;case"keydown":case"keyup":sm(m,n,p)}var E;if(ud)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ui?n_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(t_&&n.locale!=="ko"&&(ui||_!=="onCompositionStart"?_==="onCompositionEnd"&&ui&&(E=e_()):(Wn=p,od="value"in Wn?Wn.value:Wn.textContent,ui=!0)),V=rl(h,_),0<V.length&&(_=new Yp(_,t,null,n,p),m.push({event:_,listeners:V}),E?_.data=E:(E=r_(n),E!==null&&(_.data=E)))),(E=oI?aI(t,n):lI(t,n))&&(h=rl(h,"onBeforeInput"),0<h.length&&(p=new Yp("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=E))}m_(m,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Js(t,n),s!=null&&r.unshift(so(t,s,i)),s=Js(t,e),s!=null&&r.push(so(t,s,i))),t=t.return}return r}function ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Js(n,s),u!=null&&o.unshift(so(n,u,l))):i||(u=Js(n,s),u!=null&&o.push(so(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TI=/\r\n?/g,II=/\u0000|\uFFFD/g;function um(t){return(typeof t=="string"?t:""+t).replace(TI,`
`).replace(II,"")}function pa(t,e,n){if(e=um(e),um(t)!==e&&n)throw Error(F(425))}function il(){}var Gc=null,Qc=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,SI=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,kI=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(t){return cm.resolve(null).then(t).catch(AI)}:Xc;function AI(t){setTimeout(function(){throw t})}function rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),to(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);to(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Gi,oo="__reactProps$"+Gi,In="__reactContainer$"+Gi,Jc="__reactEvents$"+Gi,RI="__reactListeners$"+Gi,CI="__reactHandles$"+Gi;function kr(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hm(t);t!==null;){if(n=t[qt])return n;t=hm(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[qt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Hl(t){return t[oo]||null}var Zc=[],fi=-1;function dr(t){return{current:t}}function de(t){0>fi||(t.current=Zc[fi],Zc[fi]=null,fi--)}function ue(t,e){fi++,Zc[fi]=t.current,t.current=e}var or={},nt=dr(or),pt=dr(!1),Lr=or;function Di(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function sl(){de(pt),de(nt)}function dm(t,e,n){if(nt.current!==or)throw Error(F(168));ue(nt,e),ue(pt,n)}function y_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,dT(t)||"Unknown",i));return _e({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Lr=nt.current,ue(nt,t),ue(pt,pt.current),!0}function fm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=y_(t,e,Lr),r.__reactInternalMemoizedMergedChildContext=t,de(pt),de(nt),ue(nt,t)):de(pt),ue(pt,n)}var fn=null,Wl=!1,ic=!1;function __(t){fn===null?fn=[t]:fn.push(t)}function PI(t){Wl=!0,__(t)}function fr(){if(!ic&&fn!==null){ic=!0;var t=0,e=se;try{var n=fn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,Wl=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),$y(nd,fr),i}finally{se=e,ic=!1}}return null}var pi=[],mi=0,al=null,ll=0,At=[],Rt=0,Vr=null,pn=1,mn="";function Tr(t,e){pi[mi++]=ll,pi[mi++]=al,al=t,ll=e}function v_(t,e,n){At[Rt++]=pn,At[Rt++]=mn,At[Rt++]=Vr,Vr=t;var r=pn;t=mn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Ut(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function hd(t){t.return!==null&&(Tr(t,1),v_(t,1,0))}function dd(t){for(;t===al;)al=pi[--mi],pi[mi]=null,ll=pi[--mi],pi[mi]=null;for(;t===Vr;)Vr=At[--Rt],At[Rt]=null,mn=At[--Rt],At[Rt]=null,pn=At[--Rt],At[Rt]=null}var wt=null,vt=null,pe=!1,jt=null;function E_(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function th(t){if(pe){var e=vt;if(e){var n=e;if(!pm(t,e)){if(eh(t))throw Error(F(418));e=Xn(n.nextSibling);var r=wt;e&&pm(t,e)?E_(r,n):(t.flags=t.flags&-4097|2,pe=!1,wt=t)}}else{if(eh(t))throw Error(F(418));t.flags=t.flags&-4097|2,pe=!1,wt=t}}}function mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function ma(t){if(t!==wt)return!1;if(!pe)return mm(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=vt)){if(eh(t))throw w_(),Error(F(418));for(;e;)E_(t,e),e=Xn(e.nextSibling)}if(mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?Xn(t.stateNode.nextSibling):null;return!0}function w_(){for(var t=vt;t;)t=Xn(t.nextSibling)}function bi(){vt=wt=null,pe=!1}function fd(t){jt===null?jt=[t]:jt.push(t)}var xI=xn.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gm(t){var e=t._init;return e(t._payload)}function T_(t){function e(y,w){if(t){var I=y.deletions;I===null?(y.deletions=[w],y.flags|=16):I.push(w)}}function n(y,w){if(!t)return null;for(;w!==null;)e(y,w),w=w.sibling;return null}function r(y,w){for(y=new Map;w!==null;)w.key!==null?y.set(w.key,w):y.set(w.index,w),w=w.sibling;return y}function i(y,w){return y=tr(y,w),y.index=0,y.sibling=null,y}function s(y,w,I){return y.index=I,t?(I=y.alternate,I!==null?(I=I.index,I<w?(y.flags|=2,w):I):(y.flags|=2,w)):(y.flags|=1048576,w)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function l(y,w,I,P){return w===null||w.tag!==6?(w=hc(I,y.mode,P),w.return=y,w):(w=i(w,I),w.return=y,w)}function u(y,w,I,P){var L=I.type;return L===li?p(y,w,I.props.children,P,I.key):w!==null&&(w.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Vn&&gm(L)===w.type)?(P=i(w,I.props),P.ref=Es(y,w,I),P.return=y,P):(P=Ua(I.type,I.key,I.props,null,y.mode,P),P.ref=Es(y,w,I),P.return=y,P)}function h(y,w,I,P){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=dc(I,y.mode,P),w.return=y,w):(w=i(w,I.children||[]),w.return=y,w)}function p(y,w,I,P,L){return w===null||w.tag!==7?(w=Nr(I,y.mode,P,L),w.return=y,w):(w=i(w,I),w.return=y,w)}function m(y,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=hc(""+w,y.mode,I),w.return=y,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case sa:return I=Ua(w.type,w.key,w.props,null,y.mode,I),I.ref=Es(y,null,w),I.return=y,I;case ai:return w=dc(w,y.mode,I),w.return=y,w;case Vn:var P=w._init;return m(y,P(w._payload),I)}if(As(w)||ms(w))return w=Nr(w,y.mode,I,null),w.return=y,w;ga(y,w)}return null}function v(y,w,I,P){var L=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(y,w,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case sa:return I.key===L?u(y,w,I,P):null;case ai:return I.key===L?h(y,w,I,P):null;case Vn:return L=I._init,v(y,w,L(I._payload),P)}if(As(I)||ms(I))return L!==null?null:p(y,w,I,P,null);ga(y,I)}return null}function R(y,w,I,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(I)||null,l(w,y,""+P,L);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case sa:return y=y.get(P.key===null?I:P.key)||null,u(w,y,P,L);case ai:return y=y.get(P.key===null?I:P.key)||null,h(w,y,P,L);case Vn:var V=P._init;return R(y,w,I,V(P._payload),L)}if(As(P)||ms(P))return y=y.get(I)||null,p(w,y,P,L,null);ga(w,P)}return null}function D(y,w,I,P){for(var L=null,V=null,E=w,_=w=0,T=null;E!==null&&_<I.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var S=v(y,E,I[_],P);if(S===null){E===null&&(E=T);break}t&&E&&S.alternate===null&&e(y,E),w=s(S,w,_),V===null?L=S:V.sibling=S,V=S,E=T}if(_===I.length)return n(y,E),pe&&Tr(y,_),L;if(E===null){for(;_<I.length;_++)E=m(y,I[_],P),E!==null&&(w=s(E,w,_),V===null?L=E:V.sibling=E,V=E);return pe&&Tr(y,_),L}for(E=r(y,E);_<I.length;_++)T=R(E,y,_,I[_],P),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),w=s(T,w,_),V===null?L=T:V.sibling=T,V=T);return t&&E.forEach(function(C){return e(y,C)}),pe&&Tr(y,_),L}function b(y,w,I,P){var L=ms(I);if(typeof L!="function")throw Error(F(150));if(I=L.call(I),I==null)throw Error(F(151));for(var V=L=null,E=w,_=w=0,T=null,S=I.next();E!==null&&!S.done;_++,S=I.next()){E.index>_?(T=E,E=null):T=E.sibling;var C=v(y,E,S.value,P);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(y,E),w=s(C,w,_),V===null?L=C:V.sibling=C,V=C,E=T}if(S.done)return n(y,E),pe&&Tr(y,_),L;if(E===null){for(;!S.done;_++,S=I.next())S=m(y,S.value,P),S!==null&&(w=s(S,w,_),V===null?L=S:V.sibling=S,V=S);return pe&&Tr(y,_),L}for(E=r(y,E);!S.done;_++,S=I.next())S=R(E,y,_,S.value,P),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?_:S.key),w=s(S,w,_),V===null?L=S:V.sibling=S,V=S);return t&&E.forEach(function(N){return e(y,N)}),pe&&Tr(y,_),L}function A(y,w,I,P){if(typeof I=="object"&&I!==null&&I.type===li&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case sa:e:{for(var L=I.key,V=w;V!==null;){if(V.key===L){if(L=I.type,L===li){if(V.tag===7){n(y,V.sibling),w=i(V,I.props.children),w.return=y,y=w;break e}}else if(V.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Vn&&gm(L)===V.type){n(y,V.sibling),w=i(V,I.props),w.ref=Es(y,V,I),w.return=y,y=w;break e}n(y,V);break}else e(y,V);V=V.sibling}I.type===li?(w=Nr(I.props.children,y.mode,P,I.key),w.return=y,y=w):(P=Ua(I.type,I.key,I.props,null,y.mode,P),P.ref=Es(y,w,I),P.return=y,y=P)}return o(y);case ai:e:{for(V=I.key;w!==null;){if(w.key===V)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(y,w.sibling),w=i(w,I.children||[]),w.return=y,y=w;break e}else{n(y,w);break}else e(y,w);w=w.sibling}w=dc(I,y.mode,P),w.return=y,y=w}return o(y);case Vn:return V=I._init,A(y,w,V(I._payload),P)}if(As(I))return D(y,w,I,P);if(ms(I))return b(y,w,I,P);ga(y,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(y,w.sibling),w=i(w,I),w.return=y,y=w):(n(y,w),w=hc(I,y.mode,P),w.return=y,y=w),o(y)):n(y,w)}return A}var Oi=T_(!0),I_=T_(!1),ul=dr(null),cl=null,gi=null,pd=null;function md(){pd=gi=cl=null}function gd(t){var e=ul.current;de(ul),t._currentValue=e}function nh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){cl=t,pd=gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(pd!==t)if(t={context:t,memoizedValue:e,next:null},gi===null){if(cl===null)throw Error(F(308));gi=t,cl.dependencies={lanes:0,firstContext:t}}else gi=gi.next=t;return e}var Ar=null;function yd(t){Ar===null?Ar=[t]:Ar.push(t)}function S_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function _d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,yd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rd(t,n)}}function ym(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=h=u=null,l=s;do{var v=l.lane,R=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var D=t,b=l;switch(v=e,R=n,b.tag){case 1:if(D=b.payload,typeof D=="function"){m=D.call(R,m,v);break e}m=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=b.payload,v=typeof D=="function"?D.call(R,m,v):D,v==null)break e;m=_e({},m,v);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else R={eventTime:R,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=R,u=m):p=p.next=R,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=m}}function _m(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Co={},Qt=dr(Co),ao=dr(Co),lo=dr(Co);function Rr(t){if(t===Co)throw Error(F(174));return t}function vd(t,e){switch(ue(lo,e),ue(ao,t),ue(Qt,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vc(e,t)}de(Qt),ue(Qt,e)}function Li(){de(Qt),de(ao),de(lo)}function A_(t){Rr(lo.current);var e=Rr(Qt.current),n=Vc(e,t.type);e!==n&&(ue(ao,t),ue(Qt,n))}function Ed(t){ao.current===t&&(de(Qt),de(ao))}var ge=dr(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sc=[];function wd(){for(var t=0;t<sc.length;t++)sc[t]._workInProgressVersionPrimary=null;sc.length=0}var La=xn.ReactCurrentDispatcher,oc=xn.ReactCurrentBatchConfig,Mr=0,ye=null,xe=null,Ve=null,fl=!1,Us=!1,uo=0,NI=0;function Ye(){throw Error(F(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Id(t,e,n,r,i,s){if(Mr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=t===null||t.memoizedState===null?LI:VI,t=n(r,i),Us){s=0;do{if(Us=!1,uo=0,25<=s)throw Error(F(301));s+=1,Ve=xe=null,e.updateQueue=null,La.current=MI,t=n(r,i)}while(Us)}if(La.current=pl,e=xe!==null&&xe.next!==null,Mr=0,Ve=xe=ye=null,fl=!1,e)throw Error(F(300));return t}function Sd(){var t=uo!==0;return uo=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function bt(){if(xe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Ve===null?ye.memoizedState:Ve.next;if(e!==null)Ve=e,xe=t;else{if(t===null)throw Error(F(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function co(t,e){return typeof e=="function"?e(t):e}function ac(t){var e=bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((Mr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ye.lanes|=p,jr|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,zt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lc(t){var e=bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function R_(){}function C_(t,e){var n=ye,r=bt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,kd(N_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,ho(9,x_.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(F(349));Mr&30||P_(n,e,i)}return i}function P_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,r){e.value=n,e.getSnapshot=r,D_(e)&&b_(t)}function N_(t,e,n){return n(function(){D_(e)&&b_(t)})}function D_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function b_(t){var e=Sn(t,1);e!==null&&Bt(e,t,1,-1)}function vm(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=OI.bind(null,ye,t),[e.memoizedState,t]}function ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function O_(){return bt().memoizedState}function Va(t,e,n,r){var i=Wt();ye.flags|=t,i.memoizedState=ho(1|e,n,void 0,r===void 0?null:r)}function ql(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Td(r,o.deps)){i.memoizedState=ho(e,n,s,r);return}}ye.flags|=t,i.memoizedState=ho(1|e,n,s,r)}function Em(t,e){return Va(8390656,8,t,e)}function kd(t,e){return ql(2048,8,t,e)}function L_(t,e){return ql(4,2,t,e)}function V_(t,e){return ql(4,4,t,e)}function M_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j_(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,M_.bind(null,e,t),n)}function Ad(){}function F_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function U_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function B_(t,e,n){return Mr&21?(zt(n,e)||(n=qy(),ye.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function DI(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=oc.transition;oc.transition={};try{t(!1),e()}finally{se=n,oc.transition=r}}function z_(){return bt().memoizedState}function bI(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$_(t))H_(e,n);else if(n=S_(t,e,n,r),n!==null){var i=lt();Bt(n,t,r,i),W_(n,e,r)}}function OI(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($_(t))H_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,o)){var u=e.interleaved;u===null?(i.next=i,yd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=S_(t,e,i,r),n!==null&&(i=lt(),Bt(n,t,r,i),W_(n,e,r))}}function $_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function H_(t,e){Us=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function W_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rd(t,n)}}var pl={readContext:Dt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},LI={readContext:Dt,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Va(4194308,4,M_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Va(4194308,4,t,e)},useInsertionEffect:function(t,e){return Va(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bI.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:vm,useDebugValue:Ad,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=vm(!1),e=t[0];return t=DI.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Wt();if(pe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Me===null)throw Error(F(349));Mr&30||P_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Em(N_.bind(null,r,s,t),[t]),r.flags|=2048,ho(9,x_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=Me.identifierPrefix;if(pe){var n=mn,r=pn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VI={readContext:Dt,useCallback:F_,useContext:Dt,useEffect:kd,useImperativeHandle:j_,useInsertionEffect:L_,useLayoutEffect:V_,useMemo:U_,useReducer:ac,useRef:O_,useState:function(){return ac(co)},useDebugValue:Ad,useDeferredValue:function(t){var e=bt();return B_(e,xe.memoizedState,t)},useTransition:function(){var t=ac(co)[0],e=bt().memoizedState;return[t,e]},useMutableSource:R_,useSyncExternalStore:C_,useId:z_,unstable_isNewReconciler:!1},MI={readContext:Dt,useCallback:F_,useContext:Dt,useEffect:kd,useImperativeHandle:j_,useInsertionEffect:L_,useLayoutEffect:V_,useMemo:U_,useReducer:lc,useRef:O_,useState:function(){return lc(co)},useDebugValue:Ad,useDeferredValue:function(t){var e=bt();return xe===null?e.memoizedState=t:B_(e,xe.memoizedState,t)},useTransition:function(){var t=lc(co)[0],e=bt().memoizedState;return[t,e]},useMutableSource:R_,useSyncExternalStore:C_,useId:z_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=er(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),Oa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=er(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),Oa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=er(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(Bt(e,t,r,n),Oa(e,t,r))}};function wm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ro(n,r)||!ro(i,s):!0}function q_(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=mt(e)?Lr:nt.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function ih(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_d(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=mt(e)?Lr:nt.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Kl.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vi(t,e){try{var n="",r=e;do n+=hT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jI=typeof WeakMap=="function"?WeakMap:Map;function K_(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,mh=r),sh(t,e)},n}function G_(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sh(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Im(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JI.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function km(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var FI=xn.ReactCurrentOwner,dt=!1;function at(t,e,n,r){e.child=t===null?I_(e,null,n,r):Oi(e,t.child,n,r)}function Am(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=Id(t,e,n,r,s,i),n=Sd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(pe&&n&&hd(e),e.flags|=1,at(t,e,r,i),e.child)}function Rm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Q_(t,e,s,r,i)):(t=Ua(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Q_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ro(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return oh(t,e,n,r,i)}function Y_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(_i,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(_i,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(_i,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(_i,_t),_t|=r;return at(t,e,i,n),e.child}function X_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function oh(t,e,n,r,i){var s=mt(n)?Lr:nt.current;return s=Di(e,s),Si(e,i),n=Id(t,e,n,r,s,i),r=Sd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(pe&&r&&hd(e),e.flags|=1,at(t,e,n,i),e.child)}function Cm(t,e,n,r,i){if(mt(n)){var s=!0;ol(e)}else s=!1;if(Si(e,i),e.stateNode===null)Ma(t,e),q_(e,n,r),ih(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Dt(h):(h=mt(n)?Lr:nt.current,h=Di(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Tm(e,o,r,h),Mn=!1;var v=e.memoizedState;o.state=v,hl(e,r,o,i),u=e.memoizedState,l!==r||v!==u||pt.current||Mn?(typeof p=="function"&&(rh(e,n,p,r),u=e.memoizedState),(l=Mn||wm(e,n,l,r,v,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,k_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,m=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=mt(n)?Lr:nt.current,u=Di(e,u));var R=n.getDerivedStateFromProps;(p=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||v!==u)&&Tm(e,o,r,u),Mn=!1,v=e.memoizedState,o.state=v,hl(e,r,o,i);var D=e.memoizedState;l!==m||v!==D||pt.current||Mn?(typeof R=="function"&&(rh(e,n,R,r),D=e.memoizedState),(h=Mn||wm(e,n,h,r,v,D,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,D,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,D,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=D),o.props=r,o.state=D,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return ah(t,e,n,r,s,i)}function ah(t,e,n,r,i,s){X_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fm(e,n,!1),kn(t,e,s);r=e.stateNode,FI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&fm(e,n,!0),e.child}function J_(t){var e=t.stateNode;e.pendingContext?dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(t,e.context,!1),vd(t,e.containerInfo)}function Pm(t,e,n,r,i){return bi(),fd(i),e.flags|=256,at(t,e,n,r),e.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ge,i&1),t===null)return th(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,r,0,null),t=Nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uh(n),e.memoizedState=lh,t):Rd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return UI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tr(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lh,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rd(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,r){return r!==null&&fd(r),Oi(e,t.child,null,n),t=Rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function UI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uc(Error(F(422))),ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yl({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=uh(o),e.memoizedState=lh,s);if(!(e.mode&1))return ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=uc(s,r,void 0),ya(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Bt(r,t,i,-1))}return bd(),r=uc(Error(F(421))),ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Xn(i.nextSibling),wt=e,pe=!0,jt=null,t!==null&&(At[Rt++]=pn,At[Rt++]=mn,At[Rt++]=Vr,pn=t.id,mn=t.overflow,Vr=e),e=Rd(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nh(t.return,e,n)}function cc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ev(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cc(e,!0,n,null,s);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ma(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BI(t,e,n){switch(e.tag){case 3:J_(e),bi();break;case 5:A_(e);break;case 1:mt(e.type)&&ol(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?Z_(t,e,n):(ue(ge,ge.current&1),t=kn(t,e,n),t!==null?t.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ev(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,Y_(t,e,n)}return kn(t,e,n)}var tv,ch,nv,rv;tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ch=function(){};nv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(Qt.current);var s=null;switch(n){case"input":i=Dc(t,i),r=Dc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Lc(t,i),r=Lc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}Mc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ys.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};rv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ws(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zI(t,e,n){var r=e.pendingProps;switch(dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return mt(e.type)&&sl(),Xe(e),null;case 3:return r=e.stateNode,Li(),de(pt),de(nt),wd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(_h(jt),jt=null))),ch(t,e),Xe(e),null;case 5:Ed(e);var i=Rr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)nv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Xe(e),null}if(t=Rr(Qt.current),ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[oo]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Cs.length;i++)he(Cs[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Fp(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Bp(r,s),he("invalid",r)}Mc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,l,t),i=["children",""+l]):Ys.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":oa(r),Up(r,s,!0);break;case"textarea":oa(r),zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[oo]=r,tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=jc(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<Cs.length;i++)he(Cs[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Fp(t,r),i=Dc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),he("invalid",t);break;case"textarea":Bp(t,r),i=Lc(t,r),he("invalid",t);break;default:i=r}Mc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Oy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xs(t,u):typeof u=="number"&&Xs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ys.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&Xh(t,s,u,o))}switch(n){case"input":oa(t),Up(t,r,!1);break;case"textarea":oa(t),zp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Rr(lo.current),Rr(Qt.current),ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return Xe(e),null;case 13:if(de(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&vt!==null&&e.mode&1&&!(e.flags&128))w_(),bi(),e.flags|=98560,s=!1;else if(s=ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[qt]=e}else bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else jt!==null&&(_h(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?De===0&&(De=3):bd())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Li(),ch(t,e),t===null&&io(e.stateNode.containerInfo),Xe(e),null;case 10:return gd(e.type._context),Xe(e),null;case 17:return mt(e.type)&&sl(),Xe(e),null;case 19:if(de(ge),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ws(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Mi&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Xe(e),null}else 2*Re()-s.renderingStartTime>Mi&&n!==1073741824&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Dd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function $I(t,e){switch(dd(e),e.tag){case 1:return mt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(),de(pt),de(nt),wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(de(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ge),null;case 4:return Li(),null;case 10:return gd(e.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var _a=!1,et=!1,HI=typeof WeakSet=="function"?WeakSet:Set,z=null;function yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function hh(t,e,n){try{n()}catch(r){we(t,e,r)}}var Nm=!1;function WI(t,e){if(Gc=tl,t=l_(),cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,v=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)v=m,m=R;for(;;){if(m===t)break t;if(v===n&&++h===i&&(l=o),v===s&&++p===r&&(u=o),(R=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:t,selectionRange:n},tl=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var D=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var b=D.memoizedProps,A=D.memoizedState,y=e.stateNode,w=y.getSnapshotBeforeUpdate(e.elementType===e.type?b:Vt(e.type,b),A);y.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(P){we(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return D=Nm,Nm=!1,D}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hh(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[oo],delete e[Jc],delete e[RI],delete e[CI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sv(t){return t.tag===5||t.tag===3||t.tag===4}function Dm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}function ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}var Ue=null,Mt=!1;function On(t,e,n){for(n=n.child;n!==null;)ov(t,e,n),n=n.sibling}function ov(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:et||yi(n,e);case 6:var r=Ue,i=Mt;Ue=null,On(t,e,n),Ue=r,Mt=i,Ue!==null&&(Mt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Mt?(t=Ue,n=n.stateNode,t.nodeType===8?rc(t.parentNode,n):t.nodeType===1&&rc(t,n),to(t)):rc(Ue,n.stateNode));break;case 4:r=Ue,i=Mt,Ue=n.stateNode.containerInfo,Mt=!0,On(t,e,n),Ue=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hh(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!et&&(yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,On(t,e,n),et=r):On(t,e,n);break;default:On(t,e,n)}}function bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HI),e.forEach(function(r){var i=eS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Mt=!1;break e;case 3:Ue=l.stateNode.containerInfo,Mt=!0;break e;case 4:Ue=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(Ue===null)throw Error(F(160));ov(s,o,i),Ue=null,Mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){we(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)av(e,t),e=e.sibling}function av(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Ht(t),r&4){try{Bs(3,t,t.return),Gl(3,t)}catch(b){we(t,t.return,b)}try{Bs(5,t,t.return)}catch(b){we(t,t.return,b)}}break;case 1:Lt(e,t),Ht(t),r&512&&n!==null&&yi(n,n.return);break;case 5:if(Lt(e,t),Ht(t),r&512&&n!==null&&yi(n,n.return),t.flags&32){var i=t.stateNode;try{Xs(i,"")}catch(b){we(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Py(i,s),jc(l,o);var h=jc(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Oy(i,m):p==="dangerouslySetInnerHTML"?Dy(i,m):p==="children"?Xs(i,m):Xh(i,p,m,h)}switch(l){case"input":bc(i,s);break;case"textarea":xy(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Ei(i,!!s.multiple,R,!1):v!==!!s.multiple&&(s.defaultValue!=null?Ei(i,!!s.multiple,s.defaultValue,!0):Ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[oo]=s}catch(b){we(t,t.return,b)}}break;case 6:if(Lt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){we(t,t.return,b)}}break;case 3:if(Lt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(b){we(t,t.return,b)}break;case 4:Lt(e,t),Ht(t);break;case 13:Lt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xd=Re())),r&4&&bm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(et=(h=et)||p,Lt(e,t),et=h):Lt(e,t),Ht(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(z=t,p=t.child;p!==null;){for(m=z=p;z!==null;){switch(v=z,R=v.child,v.tag){case 0:case 11:case 14:case 15:Bs(4,v,v.return);break;case 1:yi(v,v.return);var D=v.stateNode;if(typeof D.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,D.props=e.memoizedProps,D.state=e.memoizedState,D.componentWillUnmount()}catch(b){we(r,n,b)}}break;case 5:yi(v,v.return);break;case 22:if(v.memoizedState!==null){Lm(m);continue}}R!==null?(R.return=v,z=R):Lm(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=by("display",o))}catch(b){we(t,t.return,b)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(b){we(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Lt(e,t),Ht(t),r&4&&bm(t);break;case 21:break;default:Lt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xs(i,""),r.flags&=-33);var s=Dm(t);ph(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Dm(t);fh(t,l,o);break;default:throw Error(F(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qI(t,e,n){z=t,lv(t)}function lv(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=_a;var h=et;if(_a=o,(et=u)&&!h)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?Vm(i):u!==null?(u.return=o,z=u):Vm(i);for(;s!==null;)z=s,lv(s),s=s.sibling;z=i,_a=l,et=h}Om(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Om(t)}}function Om(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_m(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_m(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&to(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}et||e.flags&512&&dh(e)}catch(v){we(e,e.return,v)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Lm(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Vm(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{dh(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{dh(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var KI=Math.ceil,ml=xn.ReactCurrentDispatcher,Cd=xn.ReactCurrentOwner,xt=xn.ReactCurrentBatchConfig,ne=0,Me=null,Pe=null,$e=0,_t=0,_i=dr(0),De=0,fo=null,jr=0,Ql=0,Pd=0,zs=null,ht=null,xd=0,Mi=1/0,dn=null,gl=!1,mh=null,Zn=null,va=!1,qn=null,yl=0,$s=0,gh=null,ja=-1,Fa=0;function lt(){return ne&6?Re():ja!==-1?ja:ja=Re()}function er(t){return t.mode&1?ne&2&&$e!==0?$e&-$e:xI.transition!==null?(Fa===0&&(Fa=qy()),Fa):(t=se,t!==0||(t=window.event,t=t===void 0?16:Zy(t.type)),t):1}function Bt(t,e,n,r){if(50<$s)throw $s=0,gh=null,Error(F(185));ko(t,n,r),(!(ne&2)||t!==Me)&&(t===Me&&(!(ne&2)&&(Ql|=n),De===4&&Fn(t,$e)),gt(t,r),n===1&&ne===0&&!(e.mode&1)&&(Mi=Re()+500,Wl&&fr()))}function gt(t,e){var n=t.callbackNode;xT(t,e);var r=el(t,t===Me?$e:0);if(r===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?PI(Mm.bind(null,t)):__(Mm.bind(null,t)),kI(function(){!(ne&6)&&fr()}),n=null;else{switch(Ky(r)){case 1:n=nd;break;case 4:n=Hy;break;case 16:n=Za;break;case 536870912:n=Wy;break;default:n=Za}n=gv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(ja=-1,Fa=0,ne&6)throw Error(F(327));var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var r=el(t,t===Me?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_l(t,r);else{e=r;var i=ne;ne|=2;var s=hv();(Me!==t||$e!==e)&&(dn=null,Mi=Re()+500,xr(t,e));do try{YI();break}catch(l){cv(t,l)}while(!0);md(),ml.current=s,ne=i,Pe!==null?e=0:(Me=null,$e=0,e=De)}if(e!==0){if(e===2&&(i=$c(t),i!==0&&(r=i,e=yh(t,i))),e===1)throw n=fo,xr(t,0),Fn(t,r),gt(t,Re()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!GI(i)&&(e=_l(t,r),e===2&&(s=$c(t),s!==0&&(r=s,e=yh(t,s))),e===1))throw n=fo,xr(t,0),Fn(t,r),gt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Ir(t,ht,dn);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=xd+500-Re(),10<e)){if(el(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xc(Ir.bind(null,t,ht,dn),e);break}Ir(t,ht,dn);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KI(r/1960))-r,10<r){t.timeoutHandle=Xc(Ir.bind(null,t,ht,dn),r);break}Ir(t,ht,dn);break;case 5:Ir(t,ht,dn);break;default:throw Error(F(329))}}}return gt(t,Re()),t.callbackNode===n?uv.bind(null,t):null}function yh(t,e){var n=zs;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=_l(t,e),t!==2&&(e=ht,ht=n,e!==null&&_h(e)),t}function _h(t){ht===null?ht=t:ht.push.apply(ht,t)}function GI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~Pd,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function Mm(t){if(ne&6)throw Error(F(327));ki();var e=el(t,0);if(!(e&1))return gt(t,Re()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var r=$c(t);r!==0&&(e=r,n=yh(t,r))}if(n===1)throw n=fo,xr(t,0),Fn(t,e),gt(t,Re()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,ht,dn),gt(t,Re()),null}function Nd(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Mi=Re()+500,Wl&&fr())}}function Fr(t){qn!==null&&qn.tag===0&&!(ne&6)&&ki();var e=ne;ne|=1;var n=xt.transition,r=se;try{if(xt.transition=null,se=1,t)return t()}finally{se=r,xt.transition=n,ne=e,!(ne&6)&&fr()}}function Dd(){_t=_i.current,de(_i)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SI(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(dd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:Li(),de(pt),de(nt),wd();break;case 5:Ed(r);break;case 4:Li();break;case 13:de(ge);break;case 19:de(ge);break;case 10:gd(r.type._context);break;case 22:case 23:Dd()}n=n.return}if(Me=t,Pe=t=tr(t.current,null),$e=_t=e,De=0,fo=null,Pd=Ql=jr=0,ht=zs=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ar=null}return t}function cv(t,e){do{var n=Pe;try{if(md(),La.current=pl,fl){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(Mr=0,Ve=xe=ye=null,Us=!1,uo=0,Cd.current=null,n===null||n.return===null){De=1,fo=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var R=Sm(o);if(R!==null){R.flags&=-257,km(R,o,l,s,e),R.mode&1&&Im(s,h,e),e=R,u=h;var D=e.updateQueue;if(D===null){var b=new Set;b.add(u),e.updateQueue=b}else D.add(u);break e}else{if(!(e&1)){Im(s,h,e),bd();break e}u=Error(F(426))}}else if(pe&&l.mode&1){var A=Sm(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),km(A,o,l,s,e),fd(Vi(u,l));break e}}s=u=Vi(u,l),De!==4&&(De=2),zs===null?zs=[s]:zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=K_(s,u,e);ym(s,y);break e;case 1:l=u;var w=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Zn===null||!Zn.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=G_(s,l,e);ym(s,P);break e}}s=s.return}while(s!==null)}fv(n)}catch(L){e=L,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function hv(){var t=ml.current;return ml.current=pl,t===null?pl:t}function bd(){(De===0||De===3||De===2)&&(De=4),Me===null||!(jr&268435455)&&!(Ql&268435455)||Fn(Me,$e)}function _l(t,e){var n=ne;ne|=2;var r=hv();(Me!==t||$e!==e)&&(dn=null,xr(t,e));do try{QI();break}catch(i){cv(t,i)}while(!0);if(md(),ne=n,ml.current=r,Pe!==null)throw Error(F(261));return Me=null,$e=0,De}function QI(){for(;Pe!==null;)dv(Pe)}function YI(){for(;Pe!==null&&!wT();)dv(Pe)}function dv(t){var e=mv(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?fv(t):Pe=e,Cd.current=null}function fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$I(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Pe=null;return}}else if(n=zI(n,e,_t),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);De===0&&(De=5)}function Ir(t,e,n){var r=se,i=xt.transition;try{xt.transition=null,se=1,XI(t,e,n,r)}finally{xt.transition=i,se=r}return null}function XI(t,e,n,r){do ki();while(qn!==null);if(ne&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NT(t,s),t===Me&&(Pe=Me=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,gv(Za,function(){return ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=se;se=1;var l=ne;ne|=4,Cd.current=null,WI(t,n),av(n,t),yI(Qc),tl=!!Gc,Qc=Gc=null,t.current=n,qI(n),TT(),ne=l,se=o,xt.transition=s}else t.current=n;if(va&&(va=!1,qn=t,yl=i),s=t.pendingLanes,s===0&&(Zn=null),kT(n.stateNode),gt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=mh,mh=null,t;return yl&1&&t.tag!==0&&ki(),s=t.pendingLanes,s&1?t===gh?$s++:($s=0,gh=t):$s=0,fr(),null}function ki(){if(qn!==null){var t=Ky(yl),e=xt.transition,n=se;try{if(xt.transition=null,se=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,yl=0,ne&6)throw Error(F(331));var i=ne;for(ne|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var p=z;switch(p.tag){case 0:case 11:case 15:Bs(8,p,s)}var m=p.child;if(m!==null)m.return=p,z=m;else for(;z!==null;){p=z;var v=p.sibling,R=p.return;if(iv(p),p===h){z=null;break}if(v!==null){v.return=R,z=v;break}z=R}}}var D=s.alternate;if(D!==null){var b=D.child;if(b!==null){D.child=null;do{var A=b.sibling;b.sibling=null,b=A}while(b!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,z=y;break e}z=s.return}}var w=t.current;for(z=w;z!==null;){o=z;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,z=I;else e:for(o=w;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gl(9,l)}}catch(L){we(l,l.return,L)}if(l===o){z=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,z=P;break e}z=l.return}}if(ne=i,fr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Ul,t)}catch{}r=!0}return r}finally{se=n,xt.transition=e}}return!1}function jm(t,e,n){e=Vi(n,e),e=K_(t,e,1),t=Jn(t,e,1),e=lt(),t!==null&&(ko(t,1,e),gt(t,e))}function we(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=Vi(n,t),t=G_(e,t,1),e=Jn(e,t,1),t=lt(),e!==null&&(ko(e,1,t),gt(e,t));break}}e=e.return}}function JI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&($e&n)===n&&(De===4||De===3&&($e&130023424)===$e&&500>Re()-xd?xr(t,0):Pd|=n),gt(t,e)}function pv(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=lt();t=Sn(t,e),t!==null&&(ko(t,e,n),gt(t,n))}function ZI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pv(t,n)}function eS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),pv(t,n)}var mv;mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,BI(t,e,n);dt=!!(t.flags&131072)}else dt=!1,pe&&e.flags&1048576&&v_(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ma(t,e),t=e.pendingProps;var i=Di(e,nt.current);Si(e,n),i=Id(null,e,r,t,i,n);var s=Sd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_d(e),i.updater=Kl,e.stateNode=i,i._reactInternals=e,ih(e,r,t,n),e=ah(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&hd(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ma(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nS(r),t=Vt(r,t),i){case 0:e=oh(null,e,r,t,n);break e;case 1:e=Cm(null,e,r,t,n);break e;case 11:e=Am(null,e,r,t,n);break e;case 14:e=Rm(null,e,r,Vt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Cm(t,e,r,i,n);case 3:e:{if(J_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,k_(t,e),hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vi(Error(F(423)),e),e=Pm(t,e,r,n,i);break e}else if(r!==i){i=Vi(Error(F(424)),e),e=Pm(t,e,r,n,i);break e}else for(vt=Xn(e.stateNode.containerInfo.firstChild),wt=e,pe=!0,jt=null,n=I_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){e=kn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return A_(e),t===null&&th(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yc(r,i)?o=null:s!==null&&Yc(r,s)&&(e.flags|=32),X_(t,e),at(t,e,o,n),e.child;case 6:return t===null&&th(e),null;case 13:return Z_(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Am(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(ul,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!pt.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),nh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=Dt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Rm(t,e,r,i,n);case 15:return Q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ma(t,e),e.tag=1,mt(r)?(t=!0,ol(e)):t=!1,Si(e,n),q_(e,r,i),ih(e,r,i,n),ah(null,e,r,!0,t,n);case 19:return ev(t,e,n);case 22:return Y_(t,e,n)}throw Error(F(156,e.tag))};function gv(t,e){return $y(t,e)}function tS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new tS(t,e,n,r)}function Od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nS(t){if(typeof t=="function")return Od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zh)return 11;if(t===ed)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ua(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case li:return Nr(n.children,i,s,e);case Jh:o=8,i|=8;break;case Cc:return t=Pt(12,n,e,i|2),t.elementType=Cc,t.lanes=s,t;case Pc:return t=Pt(13,n,e,i),t.elementType=Pc,t.lanes=s,t;case xc:return t=Pt(19,n,e,i),t.elementType=xc,t.lanes=s,t;case Ay:return Yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sy:o=10;break e;case ky:o=9;break e;case Zh:o=11;break e;case ed:o=14;break e;case Vn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Nr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=Ay,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function dc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ld(t,e,n,r,i,s,o,l,u){return t=new rS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(s),t}function iS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yv(t){if(!t)return or;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(mt(n))return y_(t,n,e)}return e}function _v(t,e,n,r,i,s,o,l,u){return t=Ld(n,r,!0,t,i,s,o,l,u),t.context=yv(null),n=t.current,r=lt(),i=er(n),s=En(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,ko(t,i,r),gt(t,r),t}function Xl(t,e,n,r){var i=e.current,s=lt(),o=er(i);return n=yv(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(Bt(t,i,o,s),Oa(t,i,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vd(t,e){Fm(t,e),(t=t.alternate)&&Fm(t,e)}function sS(){return null}var vv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Md(t){this._internalRoot=t}Jl.prototype.render=Md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Xl(t,e,null,null)};Jl.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Xl(null,t,null,null)}),e[In]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Jy(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function oS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=vl(o);s.call(h)}}var o=_v(e,r,t,0,null,!1,!1,"",Um);return t._reactRootContainer=o,t[In]=o.current,io(t.nodeType===8?t.parentNode:t),Fr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=vl(u);l.call(h)}}var u=Ld(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=u,t[In]=u.current,io(t.nodeType===8?t.parentNode:t),Fr(function(){Xl(e,u,n,r)}),u}function eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=vl(o);l.call(u)}}Xl(e,o,t,i)}else o=oS(n,e,t,i,r);return vl(o)}Gy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(rd(e,n|1),gt(e,Re()),!(ne&6)&&(Mi=Re()+500,fr()))}break;case 13:Fr(function(){var r=Sn(t,1);if(r!==null){var i=lt();Bt(r,t,1,i)}}),Vd(t,1)}};id=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=lt();Bt(e,t,134217728,n)}Vd(t,134217728)}};Qy=function(t){if(t.tag===13){var e=er(t),n=Sn(t,e);if(n!==null){var r=lt();Bt(n,t,e,r)}Vd(t,e)}};Yy=function(){return se};Xy=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};Uc=function(t,e,n){switch(e){case"input":if(bc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hl(r);if(!i)throw Error(F(90));Cy(r),bc(r,i)}}}break;case"textarea":xy(t,n);break;case"select":e=n.value,e!=null&&Ei(t,!!n.multiple,e,!1)}};My=Nd;jy=Fr;var aS={usingClientEntryPoint:!1,Events:[Ro,di,Hl,Ly,Vy,Nd]},Ts={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lS={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=By(t),t===null?null:t.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Ul=Ea.inject(lS),Gt=Ea}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(F(200));return iS(t,e,null,n)};It.createRoot=function(t,e){if(!jd(t))throw Error(F(299));var n=!1,r="",i=vv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ld(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,io(t.nodeType===8?t.parentNode:t),new Md(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=By(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Fr(t)};It.hydrate=function(t,e,n){if(!Zl(e))throw Error(F(200));return eu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_v(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};It.render=function(t,e,n){if(!Zl(e))throw Error(F(200));return eu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(F(40));return t._reactRootContainer?(Fr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};It.unstable_batchedUpdates=Nd;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return eu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function Ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ev)}catch(t){console.error(t)}}Ev(),Ey.exports=It;var uS=Ey.exports,Bm=uS;Ac.createRoot=Bm.createRoot,Ac.hydrateRoot=Bm.hydrateRoot;/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wv=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=fe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>fe.createElement("svg",{ref:u,...hS,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:wv("lucide",i),...l},[...o.map(([h,p])=>fe.createElement(h,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(t,e)=>{const n=fe.forwardRef(({className:r,...i},s)=>fe.createElement(dS,{ref:s,iconNode:e,className:wv(`lucide-${cS(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Oe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Oe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Oe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Oe("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=Oe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Oe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Oe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=Oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=Oe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=Oe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=Oe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=Oe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=Oe("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=Oe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=Oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=Oe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=Oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=Oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function IS({isAdmin:t,onOpenLogin:e,onLogout:n,downloadCvData:r,onEditCv:i}){return d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"admin-banner",children:d.jsxs("div",{className:"container admin-banner-content",children:[d.jsxs("div",{className:"admin-status",children:[d.jsx("span",{className:"admin-dot"}),d.jsx("span",{children:"Admin mode — editing enabled"})]}),d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:n,children:[d.jsx(ES,{size:14})," Exit"]})]})}),d.jsx("header",{className:"site-header",children:d.jsxs("div",{className:"container header-nav",children:[d.jsxs("a",{href:"#",className:"logo",children:[d.jsx("span",{className:"logo-mark",children:"ZS"}),d.jsx("span",{children:"Zafor Saadik"})]}),d.jsxs("ul",{className:"nav-links",children:[d.jsx("li",{children:d.jsx("a",{href:"#about",className:"nav-link",children:"About"})}),d.jsx("li",{children:d.jsx("a",{href:"#research",className:"nav-link",children:"Research"})}),d.jsx("li",{children:d.jsx("a",{href:"#experience",className:"nav-link",children:"Experience"})}),d.jsx("li",{children:d.jsx("a",{href:"#projects",className:"nav-link",children:"Projects"})}),d.jsx("li",{children:d.jsx("a",{href:"#education",className:"nav-link",children:"Education"})})]}),d.jsxs("div",{className:"header-actions",children:[(r==null?void 0:r.fileUrl)&&d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsxs("a",{href:r.fileUrl,download:r.fileName||"Zafor_Saadik_CV.pdf",className:"btn btn-primary btn-sm",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(gS,{size:15})," ",r.buttonText||"Download CV"]}),t&&d.jsx("button",{className:"admin-edit-btn",onClick:i,title:"Edit CV Download Settings",children:d.jsx(ft,{size:14})})]}),t?d.jsxs("span",{title:"Admin Authenticated",style:{display:"flex",alignItems:"center",gap:"5px",color:"var(--color-badge-green-text)",fontSize:"0.82rem",fontWeight:600},children:[d.jsx(TS,{size:16})," Admin"]}):d.jsx("button",{className:"btn btn-ghost btn-sm",onClick:e,title:"Admin Login to Edit Portfolio",children:d.jsx(vh,{size:15})})]})]})})]})}function SS({data:t,isAdmin:e,onEditSection:n,onAddSocial:r,onEditSocial:i,onDeleteSocial:s}){const{coverPhoto:o,profilePhoto:l,bio:u,socialMedia:h}=t;return d.jsxs("div",{className:"hero-card",children:[d.jsxs("div",{className:"cover-photo-wrapper",children:[d.jsx("img",{src:o,alt:"Cover Banner",className:"cover-photo"}),e&&d.jsxs("button",{className:"btn btn-secondary btn-sm cover-edit-btn",onClick:()=>n("coverPhoto"),children:[d.jsx(ft,{size:14})," Change Cover"]})]}),d.jsxs("div",{className:"hero-body",children:[d.jsxs("div",{className:"hero-top-row",children:[d.jsxs("div",{className:"profile-photo-wrapper",children:[d.jsx("img",{src:l,alt:u.fullName,className:"profile-photo"}),e&&d.jsx("button",{className:"admin-edit-btn profile-edit-btn",onClick:()=>n("profilePhoto"),title:"Edit Profile Photo",children:d.jsx(ft,{size:14})})]}),d.jsxs("div",{className:"social-actions-group",children:[h&&h.map((p,m)=>d.jsxs(_y.Fragment,{children:[m>0&&d.jsx("span",{className:"social-divider","aria-hidden":"true",children:"·"}),d.jsxs("div",{className:"social-link-item",children:[d.jsx("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:p.label||p.platform}),e&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>i(p),title:"Edit Social Link",children:d.jsx(ft,{size:11})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>s(p.id),title:"Delete Social Link",children:d.jsx(mr,{size:11})})]})]})]},p.id)),e&&d.jsxs("button",{className:"btn btn-ghost btn-sm",onClick:r,children:[d.jsx(pr,{size:14})," Add link"]})]})]}),d.jsx("div",{className:"hero-details-row",children:d.jsxs("div",{children:[d.jsxs("div",{className:"hero-name-row",children:[d.jsx("h1",{className:"hero-name",children:u.fullName}),e&&d.jsx("button",{className:"admin-edit-btn",onClick:()=>n("bio"),title:"Edit Bio Info",children:d.jsx(ft,{size:16})})]}),d.jsx("h2",{className:"hero-title",children:u.title}),u.shortBio&&d.jsx("p",{className:"hero-lede",children:u.shortBio}),d.jsxs("div",{className:"hero-meta",children:[u.location&&d.jsxs("span",{className:"hero-meta-item",children:[d.jsx(Iv,{size:14})," ",u.location]}),u.phone&&d.jsxs("span",{className:"hero-meta-item",children:[d.jsx(Sv,{size:14})," ",u.phone]}),u.statusBadge&&d.jsx("span",{className:"hero-status",children:u.statusBadge})]})]})})]})]})}function kS({aboutText:t,isAdmin:e,onEdit:n}){return d.jsxs("section",{id:"about",className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Profile"}),d.jsx("h2",{className:"section-title",children:"About"})]}),e&&d.jsx("button",{className:"admin-edit-btn",onClick:n,title:"Edit About Section",children:d.jsx(ft,{size:16})})]}),d.jsx("p",{className:"section-body-text",children:t})]})}function AS({experiences:t,isAdmin:e,onAdd:n,onEdit:r,onDelete:i}){return d.jsxs("section",{id:"experience",className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Work"}),d.jsx("h2",{className:"section-title",children:"Experience"})]}),e&&d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:n,children:[d.jsx(pr,{size:14})," Add"]})]}),d.jsx("div",{className:"timeline",children:t&&t.map(s=>d.jsxs("div",{className:"timeline-item",children:[d.jsx("div",{className:"timeline-dot"}),d.jsxs("div",{className:"timeline-content",children:[d.jsxs("div",{className:"item-title-row",children:[d.jsxs("div",{children:[d.jsx("div",{className:"item-title",children:s.position}),d.jsx("div",{className:"item-company",children:s.company})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsxs("span",{className:"item-date",children:[s.startDate,s.isCurrent?" – Present":s.endDate?` – ${s.endDate}`:""]}),e&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>r(s),title:"Edit Experience",children:d.jsx(ft,{size:14})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>i(s.id),title:"Delete Experience",children:d.jsx(mr,{size:14})})]})]})]}),d.jsx("p",{className:"item-description",children:s.description}),s.link&&d.jsxs("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"text-link",children:["Visit website ",d.jsx(Fd,{size:12})]})]})]},s.id))})]})}function RS({researchItems:t,isAdmin:e,onAdd:n,onEdit:r,onDelete:i}){return d.jsxs("section",{id:"research",className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Publications & work"}),d.jsx("h2",{className:"section-title",children:"Research Focus"})]}),e&&d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:n,children:[d.jsx(pr,{size:14})," Add"]})]}),d.jsx("div",{className:"cards-list",children:t&&t.map(s=>d.jsxs("div",{className:"item-card",children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"12px"},children:[d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[d.jsx("h3",{className:"item-title",children:s.link?d.jsxs("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"text-link",style:{marginTop:0},children:[s.title," ",d.jsx(Fd,{size:13})]}):s.title}),s.status&&d.jsx("span",{className:"status-badge",children:s.status})]}),(s.venue||s.year)&&d.jsxs("div",{className:"item-date",style:{marginTop:"6px"},children:[s.venue,s.year?` · ${s.year}`:""]})]}),e&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>r(s),title:"Edit Research Item",children:d.jsx(ft,{size:14})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>i(s.id),title:"Delete Research Item",children:d.jsx(mr,{size:14})})]})]}),d.jsx("p",{className:"item-description",children:s.description}),s.keywords&&s.keywords.length>0&&d.jsx("div",{className:"tags-row",children:s.keywords.map((o,l)=>d.jsx("span",{className:"tag-pill",children:o},l))})]},s.id))})]})}function CS({projects:t,isAdmin:e,onAdd:n,onEdit:r,onDelete:i}){const s=o=>{switch(o){case"droplet":return d.jsx(yS,{size:17});case"eye":return d.jsx(_S,{size:17});case"globe":return d.jsx(vS,{size:17});case"message-square":return d.jsx(wS,{size:17});default:return d.jsx(mS,{size:17})}};return d.jsxs("section",{id:"projects",className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Builds"}),d.jsx("h2",{className:"section-title",children:"Engineering Projects"})]}),e&&d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:n,children:[d.jsx(pr,{size:14})," Add"]})]}),d.jsx("div",{className:"project-grid",children:t&&t.map(o=>d.jsxs("div",{className:"item-card",children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[d.jsxs("div",{className:"item-card-header",children:[d.jsx("div",{className:"icon-box",children:s(o.icon)}),d.jsx("h3",{className:"item-title",style:{fontSize:"1rem"},children:o.link?d.jsx("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"},children:o.title}):o.title})]}),e&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>r(o),title:"Edit Project",children:d.jsx(ft,{size:12})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>i(o.id),title:"Delete Project",children:d.jsx(mr,{size:12})})]})]}),d.jsx("p",{className:"item-description",children:o.description}),o.demoLink&&d.jsxs("a",{href:o.demoLink,target:"_blank",rel:"noopener noreferrer",className:"text-link",children:["Live demo ",d.jsx(Fd,{size:12})]}),o.techStack&&o.techStack.length>0&&d.jsx("div",{className:"tags-row",children:o.techStack.map((l,u)=>d.jsx("span",{className:"tag-pill",children:l},u))})]},o.id))})]})}function PS({educationList:t,isAdmin:e,onAdd:n,onEdit:r,onDelete:i}){return d.jsxs("section",{id:"education",className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Background"}),d.jsx("h2",{className:"section-title",children:"Education"})]}),e&&d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:n,children:[d.jsx(pr,{size:14})," Add"]})]}),d.jsx("div",{children:t&&t.map(s=>d.jsx("div",{className:"education-item",children:d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"12px"},children:[d.jsxs("div",{children:[d.jsx("h3",{className:"education-degree",children:s.degree}),d.jsx("div",{className:"education-institute",children:s.institute}),s.result&&d.jsx("div",{className:"education-meta",children:s.result}),s.highlights&&d.jsx("div",{className:"education-meta",children:s.highlights}),(s.startDate||s.endDate)&&d.jsxs("div",{className:"education-dates",children:[s.startDate," – ",s.endDate]})]}),e&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>r(s),title:"Edit Education",children:d.jsx(ft,{size:12})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>i(s.id),title:"Delete Education",children:d.jsx(mr,{size:12})})]})]})},s.id))})]})}function xS({skills:t,isAdmin:e,onAdd:n,onEdit:r,onDelete:i}){return d.jsxs("section",{className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Toolkit"}),d.jsx("h2",{className:"section-title",children:"Technical Skills"})]}),e&&d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:n,children:[d.jsx(pr,{size:14})," Add"]})]}),d.jsx("div",{children:t&&t.map((s,o)=>d.jsxs("div",{className:"skill-category",children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("div",{className:"skill-category-name",children:s.category}),e&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>r(s,o),title:"Edit Skill Group",children:d.jsx(ft,{size:12})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>i(o),title:"Delete Skill Group",children:d.jsx(mr,{size:12})})]})]}),d.jsx("div",{className:"skill-pills",children:s.items&&s.items.map((l,u)=>d.jsx("span",{className:"skill-badge",children:l},u))})]},o))})]})}function NS({interests:t,isAdmin:e,onAdd:n,onEdit:r,onDelete:i}){return d.jsxs("section",{className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Focus areas"}),d.jsx("h2",{className:"section-title",children:"Research Interests"})]}),e&&d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:n,children:[d.jsx(pr,{size:14})," Add"]})]}),d.jsx("div",{className:"interest-list",children:t&&t.map((s,o)=>d.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[d.jsx("span",{className:"interest-tag",children:s}),e&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>r(s,o),title:"Edit Interest",children:d.jsx(ft,{size:10})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>i(o),title:"Delete Interest",children:d.jsx(mr,{size:10})})]})]},o))})]})}function DS({contactList:t,responseTime:e,isAdmin:n,onAdd:r,onEdit:i,onDelete:s,onEditResponseTime:o}){const l=u=>{switch(u){case"phone":return d.jsx(Sv,{size:15});case"location":return d.jsx(Iv,{size:15});default:return d.jsx(Tv,{size:15})}};return d.jsxs("section",{className:"section-card",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"section-heading",children:[d.jsx("span",{className:"section-label",children:"Reach out"}),d.jsx("h2",{className:"section-title",children:"Contact"})]}),n&&d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:r,children:[d.jsx(pr,{size:14})," Add"]})]}),d.jsx("div",{children:t&&t.map(u=>d.jsxs("div",{className:"contact-row",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx("span",{style:{color:"var(--text-muted)"},children:l(u.type)}),d.jsx("span",{className:"contact-value",children:u.value})]}),n&&d.jsxs("div",{className:"admin-actions",children:[d.jsx("button",{className:"admin-edit-btn",onClick:()=>i(u),title:"Edit Contact",children:d.jsx(ft,{size:12})}),d.jsx("button",{className:"admin-delete-btn",onClick:()=>s(u.id),title:"Delete Contact",children:d.jsx(mr,{size:12})})]})]},u.id))}),e&&d.jsxs("div",{className:"response-note",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(pS,{size:14})," ",e]}),n&&d.jsx("button",{className:"admin-edit-btn",onClick:o,title:"Edit Response Time",children:d.jsx(ft,{size:12})})]})]})}function bS({name:t,socialMedia:e}){return d.jsx("footer",{className:"site-footer",children:d.jsxs("div",{className:"container footer-content",children:[d.jsx("div",{className:"footer-name",children:t}),d.jsxs("div",{children:["© ",new Date().getFullYear()," · All rights reserved"]}),d.jsx("div",{className:"footer-links",children:e&&e.map(n=>d.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:n.label||n.platform},n.id))})]})})}var zm={};/**
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
 */const Av=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(v=64)),r.push(n[p],n[m],n[v],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new LS;const v=s<<2|l>>4;if(r.push(v),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const D=h<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VS=function(t){const e=Av(t);return Rv.encodeByteArray(e,!0)},El=function(t){return VS(t).replace(/\./g,"")},Cv=function(t){try{return Rv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jS=()=>MS().__FIREBASE_DEFAULTS__,FS=()=>{if(typeof process>"u"||typeof zm>"u")return;const t=zm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},US=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cv(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return jS()||FS()||US()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pv=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xv=t=>{const e=Pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nv=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config},Dv=t=>{var e;return(e=tu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class BS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[El(JSON.stringify(n)),El(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function $S(){var t;const e=(t=tu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KS(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GS(){return!$S()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QS(){try{return typeof indexedDB=="object"}catch{return!1}}function YS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const XS="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XS,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new rn(i,l,r)}}function JS(t,e){return t.replace(ZS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZS=/\{\$([^}]+)}/g;function ek(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($m(s)&&$m(o)){if(!wl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $m(t){return t!==null&&typeof t=="object"}/**
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
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tk(t,e){const n=new nk(t,e);return n.subscribe.bind(n)}class nk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fc),i.error===void 0&&(i.error=fc),i.complete===void 0&&(i.complete=fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sr="[DEFAULT]";/**
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
 */class ik{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ok(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sk(t){return t===Sr?void 0:t}function ok(t){return t.instantiationMode==="EAGER"}/**
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
 */class ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ik(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const lk={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},uk=ee.INFO,ck={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},hk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ck[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ud{constructor(e){this.name=e,this._logLevel=uk,this._logHandler=hk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const dk=(t,e)=>e.some(n=>t instanceof n);let Hm,Wm;function fk(){return Hm||(Hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pk(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ov=new WeakMap,Eh=new WeakMap,Lv=new WeakMap,pc=new WeakMap,Bd=new WeakMap;function mk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ov.set(n,t)}).catch(()=>{}),Bd.set(e,t),e}function gk(t){if(Eh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Eh.set(t,e)}let wh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yk(t){wh=t(wh)}function _k(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return Lv.set(r,e.sort?e.sort():[e]),nr(r)}:pk().includes(t)?function(...e){return t.apply(mc(this),e),nr(Ov.get(this))}:function(...e){return nr(t.apply(mc(this),e))}}function vk(t){return typeof t=="function"?_k(t):(t instanceof IDBTransaction&&gk(t),dk(t,fk())?new Proxy(t,wh):t)}function nr(t){if(t instanceof IDBRequest)return mk(t);if(pc.has(t))return pc.get(t);const e=vk(t);return e!==t&&(pc.set(t,e),Bd.set(e,t)),e}const mc=t=>Bd.get(t);function Ek(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const wk=["get","getKey","getAll","getAllKeys","count"],Tk=["put","add","delete","clear"],gc=new Map;function qm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Tk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return gc.set(e,s),s}yk(t=>({...t,get:(e,n,r)=>qm(e,n)||t.get(e,n,r),has:(e,n)=>!!qm(e,n)||t.has(e,n)}));/**
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
 */class Ik{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Th="@firebase/app",Km="0.10.13";/**
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
 */const An=new Ud("@firebase/app"),kk="@firebase/app-compat",Ak="@firebase/analytics-compat",Rk="@firebase/analytics",Ck="@firebase/app-check-compat",Pk="@firebase/app-check",xk="@firebase/auth",Nk="@firebase/auth-compat",Dk="@firebase/database",bk="@firebase/data-connect",Ok="@firebase/database-compat",Lk="@firebase/functions",Vk="@firebase/functions-compat",Mk="@firebase/installations",jk="@firebase/installations-compat",Fk="@firebase/messaging",Uk="@firebase/messaging-compat",Bk="@firebase/performance",zk="@firebase/performance-compat",$k="@firebase/remote-config",Hk="@firebase/remote-config-compat",Wk="@firebase/storage",qk="@firebase/storage-compat",Kk="@firebase/firestore",Gk="@firebase/vertexai-preview",Qk="@firebase/firestore-compat",Yk="firebase",Xk="10.14.1";/**
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
 */const Ih="[DEFAULT]",Jk={[Th]:"fire-core",[kk]:"fire-core-compat",[Rk]:"fire-analytics",[Ak]:"fire-analytics-compat",[Pk]:"fire-app-check",[Ck]:"fire-app-check-compat",[xk]:"fire-auth",[Nk]:"fire-auth-compat",[Dk]:"fire-rtdb",[bk]:"fire-data-connect",[Ok]:"fire-rtdb-compat",[Lk]:"fire-fn",[Vk]:"fire-fn-compat",[Mk]:"fire-iid",[jk]:"fire-iid-compat",[Fk]:"fire-fcm",[Uk]:"fire-fcm-compat",[Bk]:"fire-perf",[zk]:"fire-perf-compat",[$k]:"fire-rc",[Hk]:"fire-rc-compat",[Wk]:"fire-gcs",[qk]:"fire-gcs-compat",[Kk]:"fire-fst",[Qk]:"fire-fst-compat",[Gk]:"fire-vertex","fire-js":"fire-js",[Yk]:"fire-js-all"};/**
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
 */const Tl=new Map,Zk=new Map,Sh=new Map;function Gm(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(Sh.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,t);for(const n of Tl.values())Gm(n,t);for(const n of Zk.values())Gm(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
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
 */const eA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Po("app","Firebase",eA);/**
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
 */class tA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=Xk;function Vv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=Nv()),!n)throw rr.create("no-options");const s=Tl.get(i);if(s){if(wl(n,s.options)&&wl(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new ak(i);for(const u of Sh.values())o.addComponent(u);const l=new tA(n,r,o);return Tl.set(i,l),l}function zd(t=Ih){const e=Tl.get(t);if(!e&&t===Ih&&Nv())return Vv();if(!e)throw rr.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=Jk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(l.join(" "));return}Ur(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nA="firebase-heartbeat-database",rA=1,po="firebase-heartbeat-store";let yc=null;function Mv(){return yc||(yc=Ek(nA,rA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(po)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),yc}async function iA(t){try{const n=(await Mv()).transaction(po),r=await n.objectStore(po).get(jv(t));return await n.done,r}catch(e){if(e instanceof rn)An.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Qm(t,e){try{const r=(await Mv()).transaction(po,"readwrite");await r.objectStore(po).put(e,jv(t)),await r.done}catch(n){if(n instanceof rn)An.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function jv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sA=1024,oA=30*24*60*60*1e3;class aA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=oA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ym(),{heartbeatsToSend:r,unsentEntries:i}=lA(this._heartbeatsCache.heartbeats),s=El(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return An.warn(n),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function lA(t,e=sA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QS()?YS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xm(t){return El(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cA(t){Ur(new ar("platform-logger",e=>new Ik(e),"PRIVATE")),Ur(new ar("heartbeat",e=>new aA(e),"PRIVATE")),Yt(Th,Km,t),Yt(Th,Km,"esm2017"),Yt("fire-js","")}cA("");var Jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,Fv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.D=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(S,C,N){for(var k=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)k[kt-2]=arguments[kt];return _.prototype[C].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,T){T||(T=0);var S=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)S[C]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(C=0;16>C;++C)S[C]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],C=E.g[2];var N=E.g[3],k=_+(N^T&(C^N))+S[0]+3614090360&4294967295;_=T+(k<<7&4294967295|k>>>25),k=N+(C^_&(T^C))+S[1]+3905402710&4294967295,N=_+(k<<12&4294967295|k>>>20),k=C+(T^N&(_^T))+S[2]+606105819&4294967295,C=N+(k<<17&4294967295|k>>>15),k=T+(_^C&(N^_))+S[3]+3250441966&4294967295,T=C+(k<<22&4294967295|k>>>10),k=_+(N^T&(C^N))+S[4]+4118548399&4294967295,_=T+(k<<7&4294967295|k>>>25),k=N+(C^_&(T^C))+S[5]+1200080426&4294967295,N=_+(k<<12&4294967295|k>>>20),k=C+(T^N&(_^T))+S[6]+2821735955&4294967295,C=N+(k<<17&4294967295|k>>>15),k=T+(_^C&(N^_))+S[7]+4249261313&4294967295,T=C+(k<<22&4294967295|k>>>10),k=_+(N^T&(C^N))+S[8]+1770035416&4294967295,_=T+(k<<7&4294967295|k>>>25),k=N+(C^_&(T^C))+S[9]+2336552879&4294967295,N=_+(k<<12&4294967295|k>>>20),k=C+(T^N&(_^T))+S[10]+4294925233&4294967295,C=N+(k<<17&4294967295|k>>>15),k=T+(_^C&(N^_))+S[11]+2304563134&4294967295,T=C+(k<<22&4294967295|k>>>10),k=_+(N^T&(C^N))+S[12]+1804603682&4294967295,_=T+(k<<7&4294967295|k>>>25),k=N+(C^_&(T^C))+S[13]+4254626195&4294967295,N=_+(k<<12&4294967295|k>>>20),k=C+(T^N&(_^T))+S[14]+2792965006&4294967295,C=N+(k<<17&4294967295|k>>>15),k=T+(_^C&(N^_))+S[15]+1236535329&4294967295,T=C+(k<<22&4294967295|k>>>10),k=_+(C^N&(T^C))+S[1]+4129170786&4294967295,_=T+(k<<5&4294967295|k>>>27),k=N+(T^C&(_^T))+S[6]+3225465664&4294967295,N=_+(k<<9&4294967295|k>>>23),k=C+(_^T&(N^_))+S[11]+643717713&4294967295,C=N+(k<<14&4294967295|k>>>18),k=T+(N^_&(C^N))+S[0]+3921069994&4294967295,T=C+(k<<20&4294967295|k>>>12),k=_+(C^N&(T^C))+S[5]+3593408605&4294967295,_=T+(k<<5&4294967295|k>>>27),k=N+(T^C&(_^T))+S[10]+38016083&4294967295,N=_+(k<<9&4294967295|k>>>23),k=C+(_^T&(N^_))+S[15]+3634488961&4294967295,C=N+(k<<14&4294967295|k>>>18),k=T+(N^_&(C^N))+S[4]+3889429448&4294967295,T=C+(k<<20&4294967295|k>>>12),k=_+(C^N&(T^C))+S[9]+568446438&4294967295,_=T+(k<<5&4294967295|k>>>27),k=N+(T^C&(_^T))+S[14]+3275163606&4294967295,N=_+(k<<9&4294967295|k>>>23),k=C+(_^T&(N^_))+S[3]+4107603335&4294967295,C=N+(k<<14&4294967295|k>>>18),k=T+(N^_&(C^N))+S[8]+1163531501&4294967295,T=C+(k<<20&4294967295|k>>>12),k=_+(C^N&(T^C))+S[13]+2850285829&4294967295,_=T+(k<<5&4294967295|k>>>27),k=N+(T^C&(_^T))+S[2]+4243563512&4294967295,N=_+(k<<9&4294967295|k>>>23),k=C+(_^T&(N^_))+S[7]+1735328473&4294967295,C=N+(k<<14&4294967295|k>>>18),k=T+(N^_&(C^N))+S[12]+2368359562&4294967295,T=C+(k<<20&4294967295|k>>>12),k=_+(T^C^N)+S[5]+4294588738&4294967295,_=T+(k<<4&4294967295|k>>>28),k=N+(_^T^C)+S[8]+2272392833&4294967295,N=_+(k<<11&4294967295|k>>>21),k=C+(N^_^T)+S[11]+1839030562&4294967295,C=N+(k<<16&4294967295|k>>>16),k=T+(C^N^_)+S[14]+4259657740&4294967295,T=C+(k<<23&4294967295|k>>>9),k=_+(T^C^N)+S[1]+2763975236&4294967295,_=T+(k<<4&4294967295|k>>>28),k=N+(_^T^C)+S[4]+1272893353&4294967295,N=_+(k<<11&4294967295|k>>>21),k=C+(N^_^T)+S[7]+4139469664&4294967295,C=N+(k<<16&4294967295|k>>>16),k=T+(C^N^_)+S[10]+3200236656&4294967295,T=C+(k<<23&4294967295|k>>>9),k=_+(T^C^N)+S[13]+681279174&4294967295,_=T+(k<<4&4294967295|k>>>28),k=N+(_^T^C)+S[0]+3936430074&4294967295,N=_+(k<<11&4294967295|k>>>21),k=C+(N^_^T)+S[3]+3572445317&4294967295,C=N+(k<<16&4294967295|k>>>16),k=T+(C^N^_)+S[6]+76029189&4294967295,T=C+(k<<23&4294967295|k>>>9),k=_+(T^C^N)+S[9]+3654602809&4294967295,_=T+(k<<4&4294967295|k>>>28),k=N+(_^T^C)+S[12]+3873151461&4294967295,N=_+(k<<11&4294967295|k>>>21),k=C+(N^_^T)+S[15]+530742520&4294967295,C=N+(k<<16&4294967295|k>>>16),k=T+(C^N^_)+S[2]+3299628645&4294967295,T=C+(k<<23&4294967295|k>>>9),k=_+(C^(T|~N))+S[0]+4096336452&4294967295,_=T+(k<<6&4294967295|k>>>26),k=N+(T^(_|~C))+S[7]+1126891415&4294967295,N=_+(k<<10&4294967295|k>>>22),k=C+(_^(N|~T))+S[14]+2878612391&4294967295,C=N+(k<<15&4294967295|k>>>17),k=T+(N^(C|~_))+S[5]+4237533241&4294967295,T=C+(k<<21&4294967295|k>>>11),k=_+(C^(T|~N))+S[12]+1700485571&4294967295,_=T+(k<<6&4294967295|k>>>26),k=N+(T^(_|~C))+S[3]+2399980690&4294967295,N=_+(k<<10&4294967295|k>>>22),k=C+(_^(N|~T))+S[10]+4293915773&4294967295,C=N+(k<<15&4294967295|k>>>17),k=T+(N^(C|~_))+S[1]+2240044497&4294967295,T=C+(k<<21&4294967295|k>>>11),k=_+(C^(T|~N))+S[8]+1873313359&4294967295,_=T+(k<<6&4294967295|k>>>26),k=N+(T^(_|~C))+S[15]+4264355552&4294967295,N=_+(k<<10&4294967295|k>>>22),k=C+(_^(N|~T))+S[6]+2734768916&4294967295,C=N+(k<<15&4294967295|k>>>17),k=T+(N^(C|~_))+S[13]+1309151649&4294967295,T=C+(k<<21&4294967295|k>>>11),k=_+(C^(T|~N))+S[4]+4149444226&4294967295,_=T+(k<<6&4294967295|k>>>26),k=N+(T^(_|~C))+S[11]+3174756917&4294967295,N=_+(k<<10&4294967295|k>>>22),k=C+(_^(N|~T))+S[2]+718787259&4294967295,C=N+(k<<15&4294967295|k>>>17),k=T+(N^(C|~_))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var T=_-this.blockSize,S=this.B,C=this.h,N=0;N<_;){if(C==0)for(;N<=T;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<_;)if(S[C++]=E.charCodeAt(N++),C==this.blockSize){i(this,S),C=0;break}}else for(;N<_;)if(S[C++]=E[N++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var T=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=T&255,T/=256;for(this.u(E),E=Array(16),_=T=0;4>_;++_)for(var S=0;32>S;S+=8)E[T++]=this.g[_]>>>S&255;return E};function s(E,_){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;for(var T=[],S=!0,C=E.length-1;0<=C;C--){var N=E[C]|0;S&&N==_||(T[C]=N,S=!1)}this.g=T}var l={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return A(h(-E));for(var _=[],T=1,S=0;E>=T;S++)_[S]=E/T|0,T*=4294967296;return new o(_,0)}function p(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return A(p(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(_,8)),S=m,C=0;C<E.length;C+=8){var N=Math.min(8,E.length-C),k=parseInt(E.substring(C,C+N),_);8>N?(N=h(Math.pow(_,N)),S=S.j(N).add(h(k))):(S=S.j(T),S=S.add(h(k)))}return S}var m=u(0),v=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-A(this).m();for(var E=0,_=1,T=0;T<this.g.length;T++){var S=this.i(T);E+=(0<=S?S:4294967296+S)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(b(this))return"-"+A(this).toString(E);for(var _=h(Math.pow(E,6)),T=this,S="";;){var C=P(T,_).g;T=y(T,C.j(_));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=C,D(T))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function b(E){return E.h==-1}t.l=function(E){return E=y(this,E),b(E)?-1:D(E)?0:1};function A(E){for(var _=E.g.length,T=[],S=0;S<_;S++)T[S]=~E.g[S];return new o(T,~E.h).add(v)}t.abs=function(){return b(this)?A(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0,C=0;C<=_;C++){var N=S+(this.i(C)&65535)+(E.i(C)&65535),k=(N>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);S=k>>>16,N&=65535,k&=65535,T[C]=k<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function y(E,_){return E.add(A(_))}t.j=function(E){if(D(this)||D(E))return m;if(b(this))return b(E)?A(this).j(A(E)):A(A(this).j(E));if(b(E))return A(this.j(A(E)));if(0>this.l(R)&&0>E.l(R))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,T=[],S=0;S<2*_;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<E.g.length;C++){var N=this.i(S)>>>16,k=this.i(S)&65535,kt=E.i(C)>>>16,yr=E.i(C)&65535;T[2*S+2*C]+=k*yr,w(T,2*S+2*C),T[2*S+2*C+1]+=N*yr,w(T,2*S+2*C+1),T[2*S+2*C+1]+=k*kt,w(T,2*S+2*C+1),T[2*S+2*C+2]+=N*kt,w(T,2*S+2*C+2)}for(S=0;S<_;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=_;S<2*_;S++)T[S]=0;return new o(T,0)};function w(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function I(E,_){this.g=E,this.h=_}function P(E,_){if(D(_))throw Error("division by zero");if(D(E))return new I(m,m);if(b(E))return _=P(A(E),_),new I(A(_.g),A(_.h));if(b(_))return _=P(E,A(_)),new I(A(_.g),_.h);if(30<E.g.length){if(b(E)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var T=v,S=_;0>=S.l(E);)T=L(T),S=L(S);var C=V(T,1),N=V(S,1);for(S=V(S,2),T=V(T,2);!D(S);){var k=N.add(S);0>=k.l(E)&&(C=C.add(T),N=k),S=V(S,1),T=V(T,1)}return _=y(E,C.j(_)),new I(C,_)}for(C=m;0<=E.l(_);){for(T=Math.max(1,Math.floor(E.m()/_.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=h(T),k=N.j(_);b(k)||0<k.l(E);)T-=S,N=h(T),k=N.j(_);D(N)&&(N=v),C=C.add(N),E=y(E,k)}return new I(C,E)}t.A=function(E){return P(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)&E.i(S);return new o(T,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)|E.i(S);return new o(T,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)^E.i(S);return new o(T,this.h^E.h)};function L(E){for(var _=E.g.length+1,T=[],S=0;S<_;S++)T[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(T,E.h)}function V(E,_){var T=_>>5;_%=32;for(var S=E.g.length-T,C=[],N=0;N<S;N++)C[N]=0<_?E.i(N+T)>>>_|E.i(N+T+1)<<32-_:E.i(N+T);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Dr=o}).apply(typeof Jm<"u"?Jm:typeof self<"u"?self:typeof window<"u"?window:{});var wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uv,Ns,Bv,Ba,kh,zv,$v,Hv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wa=="object"&&wa];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],c=c(g),c!=g&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var O=f++;return{value:c(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function v(a,c,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function R(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function D(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,O){for(var U=Array(arguments.length-2),le=2;le<arguments.length;le++)U[le-2]=arguments[le];return c.prototype[x].apply(g,U)}}function b(a){const c=a.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=a[g];return f}return[]}function A(a,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const x=a.length||0,O=g.length||0;a.length=x+O;for(let U=0;U<O;U++)a[x+U]=g[U]}else a.push(g)}}class y{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(a,c,f){for(const g in a)c.call(f,a[g],g,a)}function E(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function _(a){const c={};for(const f in a)c[f]=a[f];return c}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let O=0;O<T.length;O++)f=T[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function k(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class kt{constructor(){this.h=this.g=null}add(c,f){const g=yr.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var yr=new y(()=>new ts,a=>a.reset());class ts{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let sn,B=!1,G=new kt,X=()=>{const a=l.Promise.resolve(void 0);sn=()=>{a.then(me)}};var me=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(f){N(f)}var c=yr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var on=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function an(a,c){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(L){e:{try{P(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ln[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&an.aa.h.call(this)}}D(an,ke);var ln={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),o0=0;function a0(a,c,f,g,x){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=x,this.key=++o0,this.da=this.fa=!1}function Uo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bo(a){this.src=a,this.g={},this.h=0}Bo.prototype.add=function(a,c,f,g,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var U=vu(a,c,g,x);return-1<U?(c=a[U],f||(c.fa=!1)):(c=new a0(c,this.src,O,!!g,x),c.fa=f,a.push(c)),c};function _u(a,c){var f=c.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,c,void 0),O;(O=0<=x)&&Array.prototype.splice.call(g,x,1),O&&(Uo(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function vu(a,c,f,g){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==g)return x}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),wu={};function Of(a,c,f,g,x){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Of(a,c[O],f,g,x);return null}return f=Mf(f),a&&a[un]?a.K(c,f,h(g)?!!g.capture:!1,x):l0(a,c,f,!1,g,x)}function l0(a,c,f,g,x,O){if(!c)throw Error("Invalid event type");var U=h(x)?!!x.capture:!!x,le=Iu(a);if(le||(a[Eu]=le=new Bo(a)),f=le.add(c,f,g,U,O),f.proxy)return f;if(g=u0(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)on||(x=U),x===void 0&&(x=!1),a.addEventListener(c.toString(),g,x);else if(a.attachEvent)a.attachEvent(Vf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function u0(){function a(f){return c.call(a.src,a.listener,f)}const c=c0;return a}function Lf(a,c,f,g,x){if(Array.isArray(c))for(var O=0;O<c.length;O++)Lf(a,c[O],f,g,x);else g=h(g)?!!g.capture:!!g,f=Mf(f),a&&a[un]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],f=vu(O,f,g,x),-1<f&&(Uo(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Iu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=vu(c,f,g,x)),(f=-1<a?c[a]:null)&&Tu(f))}function Tu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[un])_u(c.i,a);else{var f=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(f,g,a.capture):c.detachEvent?c.detachEvent(Vf(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=Iu(c))?(_u(f,a),f.h==0&&(f.src=null,c[Eu]=null)):Uo(a)}}}function Vf(a){return a in wu?wu[a]:wu[a]="on"+a}function c0(a,c){if(a.da)a=!0;else{c=new an(c,this);var f=a.listener,g=a.ha||a.src;a.fa&&Tu(a),a=f.call(g,c)}return a}function Iu(a){return a=a[Eu],a instanceof Bo?a:null}var Su="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mf(a){return typeof a=="function"?a:(a[Su]||(a[Su]=function(c){return a.handleEvent(c)}),a[Su])}function Ke(){ae.call(this),this.i=new Bo(this),this.M=this,this.F=null}D(Ke,ae),Ke.prototype[un]=!0,Ke.prototype.removeEventListener=function(a,c,f,g){Lf(this,a,c,f,g)};function it(a,c){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new ke(c,a);else if(c instanceof ke)c.target=c.target||a;else{var x=c;c=new ke(g,a),S(c,x)}if(x=!0,f)for(var O=f.length-1;0<=O;O--){var U=c.g=f[O];x=zo(U,g,!0,c)&&x}if(U=c.g=a,x=zo(U,g,!0,c)&&x,x=zo(U,g,!1,c)&&x,f)for(O=0;O<f.length;O++)U=c.g=f[O],x=zo(U,g,!1,c)&&x}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],g=0;g<f.length;g++)Uo(f[g]);delete a.g[c],a.h--}}this.F=null},Ke.prototype.K=function(a,c,f,g){return this.i.add(String(a),c,!1,f,g)},Ke.prototype.L=function(a,c,f,g){return this.i.add(String(a),c,!0,f,g)};function zo(a,c,f,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,O=0;O<c.length;++O){var U=c[O];if(U&&!U.da&&U.capture==f){var le=U.listener,Fe=U.ha||U.src;U.fa&&_u(a.i,U),x=le.call(Fe,g)!==!1&&x}}return x&&!g.defaultPrevented}function jf(a,c,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ff(a){a.g=jf(()=>{a.g=null,a.i&&(a.i=!1,Ff(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class h0 extends ae{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ff(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(a){ae.call(this),this.h=a,this.g={}}D(ns,ae);var Uf=[];function Bf(a){V(a.g,function(c,f){this.g.hasOwnProperty(f)&&Tu(c)},a),a.g={}}ns.prototype.N=function(){ns.aa.N.call(this),Bf(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ku=l.JSON.stringify,d0=l.JSON.parse,f0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Au(){}Au.prototype.h=null;function zf(a){return a.h||(a.h=a.i())}function $f(){}var rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ru(){ke.call(this,"d")}D(Ru,ke);function Cu(){ke.call(this,"c")}D(Cu,ke);var _r={},Hf=null;function $o(){return Hf=Hf||new Ke}_r.La="serverreachability";function Wf(a){ke.call(this,_r.La,a)}D(Wf,ke);function is(a){const c=$o();it(c,new Wf(c))}_r.STAT_EVENT="statevent";function qf(a,c){ke.call(this,_r.STAT_EVENT,a),this.stat=c}D(qf,ke);function st(a){const c=$o();it(c,new qf(c,a))}_r.Ma="timingevent";function Kf(a,c){ke.call(this,_r.Ma,a),this.size=c}D(Kf,ke);function ss(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function os(){this.g=!0}os.prototype.xa=function(){this.g=!1};function p0(a,c,f,g,x,O){a.info(function(){if(a.g)if(O)for(var U="",le=O.split("&"),Fe=0;Fe<le.length;Fe++){var re=le[Fe].split("=");if(1<re.length){var Ge=re[0];re=re[1];var Qe=Ge.split("_");U=2<=Qe.length&&Qe[1]=="type"?U+(Ge+"="+re+"&"):U+(Ge+"=redacted&")}}else U=null;else U=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+c+`
`+f+`
`+U})}function m0(a,c,f,g,x,O,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+c+`
`+f+`
`+O+" "+U})}function Zr(a,c,f,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+y0(a,f)+(g?" "+g:"")})}function g0(a,c){a.info(function(){return"TIMEOUT: "+c})}os.prototype.info=function(){};function y0(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var U=1;U<x.length;U++)x[U]=""}}}}return ku(f)}catch{return c}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pu;function Wo(){}D(Wo,Au),Wo.prototype.g=function(){return new XMLHttpRequest},Wo.prototype.i=function(){return{}},Pu=new Wo;function Nn(a,c,f,g){this.j=a,this.i=c,this.l=f,this.R=g||1,this.U=new ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qf}function Qf(){this.i=null,this.g="",this.h=!1}var Yf={},xu={};function Nu(a,c,f){a.L=1,a.v=Qo(cn(c)),a.m=f,a.P=!0,Xf(a,null)}function Xf(a,c){a.F=Date.now(),qo(a),a.A=cn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),hp(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Qf,a.g=Pp(a.j,f?c:null,!a.m),0<a.O&&(a.M=new h0(v(a.Y,a,a.g),a.O)),c=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Uf[0]=x.toString()),x=Uf);for(var O=0;O<x.length;O++){var U=Of(f,x[O],g||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),is(),p0(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const c=this.M;c&&hn(a)==3?c.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=hn(this.g);var c=this.g.Ba();const ni=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||_p(this.g)))){this.J||Qe!=4||c==7||(c==8||0>=ni?is(3):is(2)),Du(this);var f=this.g.Z();this.X=f;t:if(Jf(this)){var g=_p(this.g);a="";var x=g.length,O=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),as(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(O&&c==x-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,m0(this.i,this.u,this.A,this.l,this.R,Qe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Fe=this.g;if((le=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(le)){var re=le;break t}}re=null}if(f=re)Zr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bu(this,f);else{this.o=!1,this.s=3,st(12),vr(this),as(this);break e}}if(this.P){f=!0;let Ot;for(;!this.J&&this.C<U.length;)if(Ot=_0(this,U),Ot==xu){Qe==4&&(this.s=4,st(14),f=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Yf){this.s=4,st(15),Zr(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else Zr(this.i,this.l,Ot,null),bu(this,Ot);if(Jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||U.length!=0||this.h.h||(this.s=1,st(16),f=!1),this.o=this.o&&f,!f)Zr(this.i,this.l,U,"[Invalid Chunked Response]"),vr(this),as(this);else if(0<U.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Fu(Ge),Ge.M=!0,st(11))}}else Zr(this.i,this.l,U,null),bu(this,U);Qe==4&&vr(this),this.o&&!this.J&&(Qe==4?kp(this.j,this):(this.o=!1,qo(this)))}else L0(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),vr(this),as(this)}}}catch{}finally{}};function Jf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _0(a,c){var f=a.C,g=c.indexOf(`
`,f);return g==-1?xu:(f=Number(c.substring(f,g)),isNaN(f)?Yf:(g+=1,g+f>c.length?xu:(c=c.slice(g,g+f),a.C=g+f,c)))}Nn.prototype.cancel=function(){this.J=!0,vr(this)};function qo(a){a.S=Date.now()+a.I,Zf(a,a.I)}function Zf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ss(v(a.ba,a),c)}function Du(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(g0(this.i,this.A),this.L!=2&&(is(),st(17)),vr(this),this.s=2,as(this)):Zf(this,this.S-a)};function as(a){a.j.G==0||a.J||kp(a.j,a)}function vr(a){Du(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Bf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function bu(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Ou(f.h,a))){if(!a.K&&Ou(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ta(f),Zo(f);else break e;ju(f),st(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=ss(v(f.Za,f),6e3));if(1>=np(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else wr(f,11)}else if((a.K||f.g==a)&&ta(f),!w(c))for(x=f.Da.g.parse(c),c=0;c<x.length;c++){let re=x[c];if(f.T=re[0],re=re[1],f.G==2)if(re[0]=="c"){f.K=re[1],f.ia=re[2];const Ge=re[3];Ge!=null&&(f.la=Ge,f.j.info("VER="+f.la));const Qe=re[4];Qe!=null&&(f.Aa=Qe,f.j.info("SVER="+f.Aa));const ni=re[5];ni!=null&&typeof ni=="number"&&0<ni&&(g=1.5*ni,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ot=a.g;if(Ot){const ra=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ra){var O=g.h;O.g||ra.indexOf("spdy")==-1&&ra.indexOf("quic")==-1&&ra.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Lu(O,O.h),O.h=null))}if(g.D){const Uu=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Uu&&(g.ya=Uu,ce(g.I,g.D,Uu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var U=a;if(g.qa=Cp(g,g.J?g.ia:null,g.W),U.K){rp(g.h,U);var le=U,Fe=g.L;Fe&&(le.I=Fe),le.B&&(Du(le),qo(le)),g.g=U}else Ip(g);0<f.i.length&&ea(f)}else re[0]!="stop"&&re[0]!="close"||wr(f,7);else f.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?wr(f,7):Mu(f):re[0]!="noop"&&f.l&&f.l.ta(re),f.v=0)}}is(4)}catch{}}var v0=class{constructor(a,c){this.g=a,this.map=c}};function ep(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function np(a){return a.h?1:a.g?a.g.size:0}function Ou(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Lu(a,c){a.g?a.g.add(c):a.h=c}function rp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ep.prototype.cancel=function(){if(this.i=ip(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ip(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return b(a.i)}function E0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,g=0;g<f;g++)c.push(a[g]);return c}c=[],f=0;for(g in a)c[f++]=a[g];return c}function w0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const g in a)c[f++]=g;return c}}}function sp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=w0(a),g=E0(a),x=g.length,O=0;O<x;O++)c.call(void 0,g[O],f&&f[O],a)}var op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T0(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var O=a[f].substring(0,g);x=a[f].substring(g+1)}else O=a[f];c(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,Ko(this,a.j),this.o=a.o,this.g=a.g,Go(this,a.s),this.l=a.l;var c=a.i,f=new cs;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),ap(this,f),this.m=a.m}else a&&(c=String(a).match(op))?(this.h=!1,Ko(this,c[1]||"",!0),this.o=ls(c[2]||""),this.g=ls(c[3]||"",!0),Go(this,c[4]),this.l=ls(c[5]||"",!0),ap(this,c[6]||"",!0),this.m=ls(c[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}Er.prototype.toString=function(){var a=[],c=this.j;c&&a.push(us(c,lp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(us(c,lp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(us(f,f.charAt(0)=="/"?k0:S0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",us(f,R0)),a.join("")};function cn(a){return new Er(a)}function Ko(a,c,f){a.j=f?ls(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Go(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function ap(a,c,f){c instanceof cs?(a.i=c,C0(a.i,a.h)):(f||(c=us(c,A0)),a.i=new cs(c,a.h))}function ce(a,c,f){a.i.set(c,f)}function Qo(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ls(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function us(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,I0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function I0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lp=/[#\/\?@]/g,S0=/[#\?:]/g,k0=/[#\?]/g,A0=/[#\?@]/g,R0=/#/g;function cs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&T0(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=cs.prototype,t.add=function(a,c){Dn(this),this.i=null,a=ei(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function up(a,c){Dn(a),c=ei(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function cp(a,c){return Dn(a),c=ei(a,c),a.g.has(c)}t.forEach=function(a,c){Dn(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(c,x,g,this)},this)},this)},t.na=function(){Dn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const x=a[g];for(let O=0;O<x.length;O++)f.push(c[g])}return f},t.V=function(a){Dn(this);let c=[];if(typeof a=="string")cp(this,a)&&(c=c.concat(this.g.get(ei(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Dn(this),this.i=null,a=ei(this,a),cp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function hp(a,c,f){up(a,c),0<f.length&&(a.i=null,a.g.set(ei(a,c),b(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const O=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var x=O;U[g]!==""&&(x+="="+encodeURIComponent(String(U[g]))),a.push(x)}}return this.i=a.join("&")};function ei(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function C0(a,c){c&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(up(this,g),hp(this,x,f))},a)),a.j=c}function P0(a,c){const f=new os;if(l.Image){const g=new Image;g.onload=R(bn,f,"TestLoadImage: loaded",!0,c,g),g.onerror=R(bn,f,"TestLoadImage: error",!1,c,g),g.onabort=R(bn,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=R(bn,f,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function x0(a,c){const f=new os,g=new AbortController,x=setTimeout(()=>{g.abort(),bn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?bn(f,"TestPingServer: ok",!0,c):bn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),bn(f,"TestPingServer: error",!1,c)})}function bn(a,c,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function N0(){this.g=new f0}function D0(a,c,f){const g=f||"";try{sp(a,function(x,O){let U=x;h(x)&&(U=ku(x)),c.push(g+O+"="+encodeURIComponent(U))})}catch(x){throw c.push(g+"type="+encodeURIComponent("_badmap")),x}}function Yo(a){this.l=a.Ub||null,this.j=a.eb||!1}D(Yo,Au),Yo.prototype.g=function(){return new Xo(this.l,this.j)},Yo.prototype.i=function(a){return function(){return a}}({});function Xo(a,c){Ke.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Xo,Ke),t=Xo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?hs(this):ds(this),this.readyState==3&&dp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,hs(this))},t.Qa=function(a){this.g&&(this.response=a,hs(this))},t.ga=function(){this.g&&hs(this)};function hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ds(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fp(a){let c="";return V(a,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function Vu(a,c,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=fp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ce(a,c,f))}function Ee(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Ee,Ke);var b0=/^https?$/i,O0=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pu.g(),this.v=this.o?zf(this.o):zf(Pu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){pp(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(O0,c,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of f)this.g.setRequestHeader(O,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){pp(this,O)}};function pp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,mp(a),Jo(a)}function mp(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),Jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jo(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gp(this):this.bb())},t.bb=function(){gp(this)};function gp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)jf(a.Ea,0,a);else if(it(a,"readystatechange"),hn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var g;if(g=U===0){var x=String(a.D).match(op)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!b0.test(x?x.toLowerCase():"")}f=g}if(f)it(a,"complete"),it(a,"success");else{a.m=6;try{var O=2<hn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",mp(a)}}finally{Jo(a)}}}}function Jo(a,c){if(a.g){yp(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||it(a,"ready");try{f.onreadystatechange=g}catch{}}}function yp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),d0(c)}};function _p(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function L0(a){const c={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var f=C(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[x]||[];c[x]=O,O.push(f)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fs(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function vp(a){this.Aa=0,this.i=[],this.j=new os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fs("baseRetryDelayMs",5e3,a),this.cb=fs("retryDelaySeedMs",1e4,a),this.Wa=fs("forwardChannelMaxRetries",2,a),this.wa=fs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ep(a&&a.concurrentRequestLimit),this.Da=new N0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vp.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,g){st(0),this.W=a,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Cp(this,null,this.W),ea(this)};function Mu(a){if(Ep(a),a.G==3){var c=a.U++,f=cn(a.I);if(ce(f,"SID",a.K),ce(f,"RID",c),ce(f,"TYPE","terminate"),ps(a,f),c=new Nn(a,a.j,c),c.L=2,c.v=Qo(cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Pp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),qo(c)}Rp(a)}function Zo(a){a.g&&(Fu(a),a.g.cancel(),a.g=null)}function Ep(a){Zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ea(a){if(!tp(a.h)&&!a.s){a.s=!0;var c=a.Ga;sn||X(),B||(sn(),B=!0),G.add(c,a),a.B=0}}function V0(a,c){return np(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ss(v(a.Ga,a,c),Ap(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Nn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Tp(this,x,c),f=cn(this.I),ce(f,"RID",a),ce(f,"CVER",22),this.D&&ce(f,"X-HTTP-Session-Id",this.D),ps(this,f),O&&(this.O?c="headers="+encodeURIComponent(String(fp(O)))+"&"+c:this.m&&Vu(f,this.m,O)),Lu(this.h,x),this.Ua&&ce(f,"TYPE","init"),this.P?(ce(f,"$req",c),ce(f,"SID","null"),x.T=!0,Nu(x,f,null)):Nu(x,f,c),this.G=2}}else this.G==3&&(a?wp(this,a):this.i.length==0||tp(this.h)||wp(this))};function wp(a,c){var f;c?f=c.l:f=a.U++;const g=cn(a.I);ce(g,"SID",a.K),ce(g,"RID",f),ce(g,"AID",a.T),ps(a,g),a.m&&a.o&&Vu(g,a.m,a.o),f=new Nn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Tp(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Lu(a.h,f),Nu(f,g,c)}function ps(a,c){a.H&&V(a.H,function(f,g){ce(c,g,f)}),a.l&&sp({},function(f,g){ce(c,g,f)})}function Tp(a,c,f){f=Math.min(a.i.length,f);var g=a.l?v(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const U=["count="+f];O==-1?0<f?(O=x[0].g,U.push("ofs="+O)):O=0:U.push("ofs="+O);let le=!0;for(let Fe=0;Fe<f;Fe++){let re=x[Fe].g;const Ge=x[Fe].map;if(re-=O,0>re)O=Math.max(0,x[Fe].g-100),le=!1;else try{D0(Ge,U,"req"+re+"_")}catch{g&&g(Ge)}}if(le){g=U.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,g}function Ip(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;sn||X(),B||(sn(),B=!0),G.add(c,a),a.v=0}}function ju(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ss(v(a.Fa,a),Ap(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Sp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ss(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Zo(this),Sp(this))};function Fu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Sp(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=cn(a.qa);ce(c,"RID","rpc"),ce(c,"SID",a.K),ce(c,"AID",a.T),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(c,"TO",a.ja),ce(c,"TYPE","xmlhttp"),ps(a,c),a.m&&a.o&&Vu(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Qo(cn(c)),f.m=null,f.P=!0,Xf(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Zo(this),ju(this),st(19))};function ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function kp(a,c){var f=null;if(a.g==c){ta(a),Fu(a),a.g=null;var g=2}else if(Ou(a.h,c))f=c.D,rp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;g=$o(),it(g,new Kf(g,f)),ea(a)}else Ip(a);else if(x=c.s,x==3||x==0&&0<c.X||!(g==1&&V0(a,c)||g==2&&ju(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),x){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function Ap(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function wr(a,c){if(a.j.info("Error code "+c),c==2){var f=v(a.fb,a),g=a.Xa;const x=!g;g=new Er(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ko(g,"https"),Qo(g),x?P0(g.toString(),f):x0(g.toString(),f)}else st(2);a.G=0,a.l&&a.l.sa(c),Rp(a),Ep(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Rp(a){if(a.G=0,a.ka=[],a.l){const c=ip(a.h);(c.length!=0||a.i.length!=0)&&(A(a.ka,c),A(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Cp(a,c,f){var g=f instanceof Er?cn(f):new Er(f);if(g.g!="")c&&(g.g=c+"."+g.g),Go(g,g.s);else{var x=l.location;g=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var O=new Er(null);g&&Ko(O,g),c&&(O.g=c),x&&Go(O,x),f&&(O.l=f),g=O}return f=a.D,c=a.ya,f&&c&&ce(g,f,c),ce(g,"VER",a.la),ps(a,g),g}function Pp(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new Yo({eb:f})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xp(){}t=xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function na(){}na.prototype.g=function(a,c){return new yt(a,c)};function yt(a,c){Ke.call(this),this.g=new vp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ti(this)}D(yt,Ke),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Mu(this.g)},yt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ku(a),a=f);c.i.push(new v0(c.Ya++,a)),c.G==3&&ea(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,Mu(this.g),delete this.g,yt.aa.N.call(this)};function Np(a){Ru.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}D(Np,Ru);function Dp(){Cu.call(this),this.status=1}D(Dp,Cu);function ti(a){this.g=a}D(ti,xp),ti.prototype.ua=function(){it(this.g,"a")},ti.prototype.ta=function(a){it(this.g,new Np(a))},ti.prototype.sa=function(a){it(this.g,new Dp)},ti.prototype.ra=function(){it(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,Hv=function(){return new na},$v=function(){return $o()},zv=_r,kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Ba=Ho,Gf.COMPLETE="complete",Bv=Gf,$f.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Ns=$f,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,Uv=Ee}).apply(typeof wa<"u"?wa:typeof self<"u"?self:typeof window<"u"?window:{});const Zm="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Qi="10.14.0";/**
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
 */const Br=new Ud("@firebase/firestore");function Is(){return Br.logLevel}function $(t,...e){if(Br.logLevel<=ee.DEBUG){const n=e.map($d);Br.debug(`Firestore (${Qi}): ${t}`,...n)}}function Rn(t,...e){if(Br.logLevel<=ee.ERROR){const n=e.map($d);Br.error(`Firestore (${Qi}): ${t}`,...n)}}function ji(t,...e){if(Br.logLevel<=ee.WARN){const n=e.map($d);Br.warn(`Firestore (${Qi}): ${t}`,...n)}}function $d(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function oe(t,e){t||K()}function Y(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Wv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class dA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fA{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new Wv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ze(e)}}class pA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){oe(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new gA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_A(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Fi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new be(0,0))}static max(){return new Q(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends mo{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const vA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends mo{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return vA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Te.fromString(e))}static fromName(e){return new W(Te.fromString(e).popFirst(5))}static empty(){return new W(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Te(e.slice()))}}function EA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new lr(i,W.empty(),e)}function wA(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(Q.min(),W.empty(),-1)}static max(){return new lr(Q.max(),W.empty(),-1)}}function TA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const IA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function No(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==IA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function kA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Do(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hd.oe=-1;function ru(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function AA(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ta(this.root,e,this.comparator,!0)}}class Ta{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tg(this.data.getIterator())}getIteratorFrom(e){return new tg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class tg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new He(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Gv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Gv("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const RA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(oe(!!t),typeof t=="string"){let e=0;const n=RA.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function Wd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qd(t){const e=t.mapValue.fields.__previous_value__;return Wd(e)?qd(e):e}function go(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class CA{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ia={mapValue:{}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wd(t)?4:xA(t)?9007199254740991:PA(t)?10:11:K()}function tn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),l=ur(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zr(i.bytesValue).isEqual(zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Il(o)===Il(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(eg(o)!==eg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function _o(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Ui(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ng(t.timestampValue,e.timestampValue);case 4:return ng(go(t),go(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=zr(s),u=zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=ie(l[h],u[h]);if(p!==0)return p}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ie(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return rg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,p;const m=s.fields||{},v=o.fields||{},R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,D=(u=v.value)===null||u===void 0?void 0:u.arrayValue,b=ie(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return b!==0?b:rg(R,D)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ia.mapValue&&o===Ia.mapValue)return 0;if(s===Ia.mapValue)return 1;if(o===Ia.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const v=ie(u[m],p[m]);if(v!==0)return v;const R=Ui(l[u[m]],h[p[m]]);if(R!==0)return R}return ie(u.length,p.length)}(t.mapValue,e.mapValue);default:throw K()}}function ng(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=ur(t),r=ur(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function rg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ui(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Bi(t){return Ah(t)}function Ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ah(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ah(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function Rh(t){return!!t&&"integerValue"in t}function Kd(t){return!!t&&"arrayValue"in t}function ig(t){return!!t&&"nullValue"in t}function sg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function za(t){return!!t&&"mapValue"in t}function PA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Hs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(Hs(this.value))}}function Qv(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new ze([n]);if(za(r)){const s=Qv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
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
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Q.min(),Q.min(),Q.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Q.min(),Q.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Q.min(),Q.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sl{constructor(e,n){this.position=e,this.inclusive=n}}function og(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Ui(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function NA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yv{}class Ne extends Yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bA(e,n,r):n==="array-contains"?new VA(e,r):n==="in"?new MA(e,r):n==="not-in"?new jA(e,r):n==="array-contains-any"?new FA(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OA(e,r):new LA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ui(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends Yv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return Xv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xv(t){return t.op==="and"}function Jv(t){return DA(t)&&Xv(t)}function DA(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Ch(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(Jv(t))return t.filters.map(e=>Ch(e)).join(",");{const e=t.filters.map(n=>Ch(n)).join(",");return`${t.op}(${e})`}}function Zv(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Zv(o,i.filters[l]),!0):!1}(t,e):void K()}function eE(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(eE).join(" ,")+"}"}(t):"Filter"}class bA extends Ne{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class OA extends Ne{constructor(e,n){super(e,"in",n),this.keys=tE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LA extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=tE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class VA extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kd(n)&&_o(n.arrayValue,this.value)}}class MA extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class jA extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class FA extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_o(this.value.arrayValue,r))}}/**
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
 */class UA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function lg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new UA(t,e,n,r,i,s,o)}function Gd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ch(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bi(r)).join(",")),e.ue=n}return e.ue}function Qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ag(t.startAt,e.startAt)&&ag(t.endAt,e.endAt)}function Ph(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class iu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function BA(t,e,n,r,i,s,o,l){return new iu(t,e,n,r,i,s,o,l)}function Yd(t){return new iu(t)}function ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zA(t){return t.collectionGroup!==null}function Ws(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new kl(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new kl(ze.keyField(),r))}return e.ce}function Xt(t){const e=Y(t);return e.le||(e.le=$A(e,Ws(t))),e.le}function $A(t,e){if(t.limitType==="F")return lg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kl(i.field,s)});const n=t.endAt?new Sl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sl(t.startAt.position,t.startAt.inclusive):null;return lg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xh(t,e,n){return new iu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function su(t,e){return Qd(Xt(t),Xt(e))&&t.limitType===e.limitType}function nE(t){return`${Gd(Xt(t))}|lt:${t.limitType}`}function ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>eE(i)).join(", ")}]`),ru(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function ou(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=og(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ws(r),i)||r.endAt&&!function(o,l,u){const h=og(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ws(r),i))}(t,e)}function HA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rE(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=WA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WA(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ui(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Kv(this.inner)}size(){return this.innerSize}}/**
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
 */const qA=new ve(W.comparator);function Cn(){return qA}const iE=new ve(W.comparator);function Ds(...t){let e=iE;for(const n of t)e=e.insert(n.key,n);return e}function sE(t){let e=iE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return qs()}function oE(){return qs()}function qs(){return new Xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const KA=new ve(W.comparator),GA=new He(W.comparator);function Z(...t){let e=GA;for(const n of t)e=e.add(n);return e}const QA=new He(ie);function YA(){return QA}/**
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
 */function Xd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function aE(t){return{integerValue:""+t}}function XA(t,e){return AA(e)?aE(e):Xd(t,e)}/**
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
 */class au{constructor(){this._=void 0}}function JA(t,e,n){return t instanceof Al?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wd(s)&&(s=qd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof vo?uE(t,e):t instanceof Eo?cE(t,e):function(i,s){const o=lE(i,s),l=cg(o)+cg(i.Pe);return Rh(o)&&Rh(i.Pe)?aE(l):Xd(i.serializer,l)}(t,e)}function ZA(t,e,n){return t instanceof vo?uE(t,e):t instanceof Eo?cE(t,e):n}function lE(t,e){return t instanceof Rl?function(r){return Rh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Al extends au{}class vo extends au{constructor(e){super(),this.elements=e}}function uE(t,e){const n=hE(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Eo extends au{constructor(e){super(),this.elements=e}}function cE(t,e){let n=hE(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Rl extends au{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cg(t){return Ae(t.integerValue||t.doubleValue)}function hE(t){return Kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function e1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof vo&&i instanceof vo||r instanceof Eo&&i instanceof Eo?Fi(r.elements,i.elements,tn):r instanceof Rl&&i instanceof Rl?tn(r.Pe,i.Pe):r instanceof Al&&i instanceof Al}(t.transform,e.transform)}class t1{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lu{}function dE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pE(t.key,wn.none()):new bo(t.key,t.data,wn.none());{const n=t.data,r=Ct.empty();let i=new He(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qr(t.key,r,new Ft(i.toArray()),wn.none())}}function n1(t,e,n){t instanceof bo?function(i,s,o){const l=i.value.clone(),u=dg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(i,s,o){if(!$a(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=dg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(fE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof bo?function(s,o,l,u){if(!$a(s.precondition,o))return l;const h=s.value.clone(),p=fg(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(s,o,l,u){if(!$a(s.precondition,o))return l;const h=fg(s.fieldTransforms,u,o),p=o.data;return p.setAll(fE(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return $a(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function r1(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=lE(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fi(r,i,(s,o)=>e1(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qr extends lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dg(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,ZA(o,l,n[i]))}return r}function fg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JA(s,o,e))}return r}class pE extends lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i1 extends lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class s1{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&n1(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=dE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,r)=>hg(n,r))&&Fi(this.baseMutations,e.baseMutations,(n,r)=>hg(n,r))}}class Jd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=function(){return KA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jd(e,n,r,i)}}/**
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
 */class o1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class a1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,te;function l1(t){switch(t){default:return K();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function mE(t){if(t===void 0)return Rn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ce.OK:return j.OK;case Ce.CANCELLED:return j.CANCELLED;case Ce.UNKNOWN:return j.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return j.INTERNAL;case Ce.UNAVAILABLE:return j.UNAVAILABLE;case Ce.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ce.NOT_FOUND:return j.NOT_FOUND;case Ce.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ce.ABORTED:return j.ABORTED;case Ce.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ce.DATA_LOSS:return j.DATA_LOSS;default:return K()}}(te=Ce||(Ce={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function u1(){return new TextEncoder}/**
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
 */const c1=new Dr([4294967295,4294967295],0);function pg(t){const e=u1().encode(t),n=new Fv;return n.update(e),new Uint8Array(n.digest())}function mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([i,s],0)]}class Zd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bs(`Invalid padding: ${n}`);if(r<0)throw new bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Dr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Dr.fromNumber(r)));return i.compare(c1)===1&&(i=new Dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pg(e),[r,i]=mg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=pg(e),[r,i]=mg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uu(Q.min(),i,new ve(ie),Cn(),Z())}}class Oo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oo(r,n,Z(),Z(),Z())}}/**
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
 */class Ha{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class gE{constructor(e,n){this.targetId=e,this.me=n}}class yE{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gg{constructor(){this.fe=0,this.ge=_g(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Oo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_g()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class h1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cn(),this.qe=yg(),this.Qe=new ve(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ph(s))if(r===0){const o=new W(s.path);this.Ue(n,o,tt.newNoDocument(o,Q.min()))}else oe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=zr(r).toUint8Array()}catch(u){if(u instanceof Gv)return ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zd(o,i,s)}catch(u){return ji(u instanceof bs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ph(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,tt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new uu(e,n,this.Qe,this.ke,r);return this.ke=Cn(),this.qe=yg(),this.Qe=new ve(ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yg(){return new ve(W.comparator)}function _g(){return new ve(W.comparator)}const d1={asc:"ASCENDING",desc:"DESCENDING"},f1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},p1={and:"AND",or:"OR"};class m1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nh(t,e){return t.useProto3Json||ru(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _E(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function g1(t,e){return Cl(t,e.toTimestamp())}function Jt(t){return oe(!!t),Q.fromTimestamp(function(n){const r=ur(n);return new be(r.seconds,r.nanos)}(t))}function ef(t,e){return Dh(t,e).canonicalString()}function Dh(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vE(t){const e=Te.fromString(t);return oe(SE(e)),e}function bh(t,e){return ef(t.databaseId,e.path)}function _c(t,e){const n=vE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(wE(n))}function EE(t,e){return ef(t.databaseId,e)}function y1(t){const e=vE(t);return e.length===4?Te.emptyPath():wE(e)}function Oh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wE(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vg(t,e,n){return{name:bh(t,e),fields:n.value.mapValue.fields}}function _1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(oe(p===void 0||typeof p=="string"),qe.fromBase64String(p||"")):(oe(p===void 0||p instanceof Buffer||p instanceof Uint8Array),qe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?j.UNKNOWN:mE(h.code);return new H(p,h.message||"")}(o);n=new yE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_c(t,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):Q.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Ha(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_c(t,r.document),s=r.readTime?Jt(r.readTime):Q.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ha([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_c(t,r.document),s=r.removedTargetIds||[];n=new Ha([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new a1(i,s),l=r.targetId;n=new gE(l,o)}}return n}function v1(t,e){let n;if(e instanceof bo)n={update:vg(t,e.key,e.value)};else if(e instanceof pE)n={delete:bh(t,e.key)};else if(e instanceof Qr)n={update:vg(t,e.key,e.data),updateMask:C1(e.fieldMask)};else{if(!(e instanceof i1))return K();n={verify:bh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:g1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function E1(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jt(i.updateTime):Jt(s);return o.isEqual(Q.min())&&(o=Jt(s)),new t1(o,i.transformResults||[])}(n,e))):[]}function w1(t,e){return{documents:[EE(t,e.path)]}}function T1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=EE(t,i);const s=function(h){if(h.length!==0)return IE(nn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(v){return{field:si(v.field),direction:k1(v.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Nh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function I1(t){let e=y1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const v=TE(m);return v instanceof nn&&Jv(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(v=>function(D){return new kl(oi(D.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(m){let v;return v=typeof m=="object"?m.value:m,ru(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(m){const v=!!m.before,R=m.values||[];return new Sl(R,v)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const v=!m.before,R=m.values||[];return new Sl(R,v)}(n.endAt)),BA(e,i,o,s,l,"F",u,h)}function S1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=oi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=oi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=oi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>TE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function k1(t){return d1[t]}function A1(t){return f1[t]}function R1(t){return p1[t]}function si(t){return{fieldPath:t.canonicalString()}}function oi(t){return ze.fromServerFormat(t.fieldPath)}function IE(t){return t instanceof Ne?function(n){if(n.op==="=="){if(sg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(ig(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(ig(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:A1(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>IE(i));return r.length===1?r[0]:{compositeFilter:{op:R1(n.op),filters:r}}}(t):K()}function C1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class P1{constructor(e){this.ct=e}}function x1(t){const e=I1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xh(e,e.limit,"L"):e}/**
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
 */class N1{constructor(){this.un=new D1}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(lr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class D1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(Te.comparator)).toArray()}}/**
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
 */class zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new zi(0)}static kn(){return new zi(-1)}}/**
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
 */class b1{constructor(){this.changes=new Xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class O1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class L1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ks(r.mutation,i,Ft.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ds();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cn();const o=qs(),l=function(){return qs()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Qr)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Ks(p.mutation,h,p.mutation.getFieldMask(),be.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return l.set(h,new O1(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=qs();let i=new ve((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Ft.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=oE();p.forEach(v=>{if(!s.has(v)){const R=dE(n.get(v),r.get(v));R!==null&&m.set(v,R),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Cr());let l=-1,u=s;return o.next(h=>M.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(p=>({batchId:l,changes:sE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(m,v){return new iu(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((m,v)=>{o=o.insert(m,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,tt.newInvalidDocument(p)))});let l=Ds();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&Ks(p.mutation,h,Ft.empty(),be.now()),ou(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class V1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:x1(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),M.resolve()}}/**
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
 */class M1{constructor(){this.overlays=new ve(W.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Cr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Cr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Cr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new o1(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class j1{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class tf{constructor(){this.Tr=new He(Le.Er),this.dr=new He(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new Te([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new Te([])),r=new Le(n,e),i=new Le(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
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
 */class F1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Le.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s1(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(ie);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Le(new W(s),0);let l=new He(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Le(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class U1{constructor(e){this.Mr=e,this.docs=function(){return new ve(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||TA(wA(p),r)<=0||(i.has(p.key)||ou(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new B1(this)}getSize(e){return M.resolve(this.size)}}class B1 extends b1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class z1{constructor(e){this.persistence=e,this.Nr=new Xi(n=>Gd(n),Qd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tf,this.targetCount=0,this.kr=zi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class $1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Hd(0),this.Kr=!1,this.Kr=!0,this.$r=new j1,this.referenceDelegate=e(this),this.Ur=new z1(this),this.indexManager=new N1,this.remoteDocumentCache=function(i){return new U1(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new P1(n),this.Gr=new V1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new F1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new H1(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class H1 extends SA{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Jr=new tf,this.Yr=null}static Zr(e){return new nf(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class rf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rf(e,n.fromCache,r,i)}}/**
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
 */class W1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class q1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return GS()?8:kA(rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new W1;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Is()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Is()<=ee.DEBUG&&$("QueryEngine","Query:",ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Is()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):M.resolve())}Yi(e,n){if(ug(n))return M.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xh(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,xh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return ug(n)||i.isEqual(Q.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Is()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ii(n)),this.rs(e,o,n,EA(i,-1)).next(l=>l))})}ts(e,n){let r=new He(rE(e));return n.forEach((i,s)=>{ou(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Is()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ii(n)),this.Ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class K1{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ve(ie),this._s=new Xi(s=>Gd(s),Qd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function G1(t,e,n,r){return new K1(t,e,n,r)}async function kE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Q1(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,v=m.keys();let R=M.resolve();return v.forEach(D=>{R=R.next(()=>p.getEntry(u,D)).next(b=>{const A=h.docVersions.get(D);oe(A!==null),b.version.compareTo(A)<0&&(m.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),p.addEntry(b)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Y1(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const v=i.get(m);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,m)));let R=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(qe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(m,R),function(b,A,y){return b.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(v,R,p)&&l.push(n.Ur.updateTargetData(s,R))});let u=Cn(),h=Z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(X1(s,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(Q.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function X1(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function J1(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Z1(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Lh(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Do(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Eg(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=Y(u),v=m._s.get(p);return v!==void 0?M.resolve(m.os.get(v)):m.Ur.getTargetData(h,p)}(r,o,Xt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(l=>(eR(r,HA(e),l),{documents:l,Ts:s})))}function eR(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class wg{constructor(){this.activeTargetIds=YA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tR{constructor(){this.so=new wg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nR{_o(e){}shutdown(){}}/**
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
 */class Tg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sa=null;function vc(){return Sa===null?Sa=function(){return 268435456+Math.round(2147483648*Math.random())}():Sa++,"0x"+Sa.toString(16)}/**
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
 */const rR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Je="WebChannelConnection";class sR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=vc(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(p=>($("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw ji("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=rR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=vc();return new Promise((o,l)=>{const u=new Uv;u.setWithCredentials(!0),u.listenOnce(Bv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ba.NO_ERROR:const p=u.getResponseJson();$(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case Ba.TIMEOUT:$(Je,`RPC '${e}' ${s} timed out`),l(new H(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const m=u.getStatus();if($(Je,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const D=function(A){const y=A.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(y)>=0?y:j.UNKNOWN}(R.status);l(new H(D,R.message))}else l(new H(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(j.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(Je,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);$(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=vc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Hv(),l=$v(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");$(Je,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);let v=!1,R=!1;const D=new iR({Io:A=>{R?$(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(v||($(Je,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),$(Je,`RPC '${e}' stream ${i} sending:`,A),m.send(A))},To:()=>m.close()}),b=(A,y,w)=>{A.listen(y,I=>{try{w(I)}catch(P){setTimeout(()=>{throw P},0)}})};return b(m,Ns.EventType.OPEN,()=>{R||($(Je,`RPC '${e}' stream ${i} transport opened.`),D.yo())}),b(m,Ns.EventType.CLOSE,()=>{R||(R=!0,$(Je,`RPC '${e}' stream ${i} transport closed`),D.So())}),b(m,Ns.EventType.ERROR,A=>{R||(R=!0,ji(Je,`RPC '${e}' stream ${i} transport errored:`,A),D.So(new H(j.UNAVAILABLE,"The operation could not be completed")))}),b(m,Ns.EventType.MESSAGE,A=>{var y;if(!R){const w=A.data[0];oe(!!w);const I=w,P=I.error||((y=I[0])===null||y===void 0?void 0:y.error);if(P){$(Je,`RPC '${e}' stream ${i} received error:`,P);const L=P.status;let V=function(T){const S=Ce[T];if(S!==void 0)return mE(S)}(L),E=P.message;V===void 0&&(V=j.INTERNAL,E="Unknown error status: "+L+" with message "+P.message),R=!0,D.So(new H(V,E)),m.close()}else $(Je,`RPC '${e}' stream ${i} received:`,w),D.bo(w)}}),b(l,zv.STAT_EVENT,A=>{A.stat===kh.PROXY?$(Je,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===kh.NOPROXY&&$(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function Ec(){return typeof document<"u"?document:null}/**
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
 */function cu(t){return new m1(t,!0)}/**
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
 */class RE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class CE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new RE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oR extends CE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=_1(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Jt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Oh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ph(u)?{documents:w1(s,u)}:{query:T1(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_E(s,o.resumeToken);const h=Nh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Cl(s,o.snapshotVersion.toTimestamp());const h=Nh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=S1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Oh(this.serializer),n.removeTarget=e,this.a_(n)}}class aR extends CE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=E1(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Oh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>v1(this.serializer,r))};this.a_(n)}}/**
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
 */class lR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Dh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Dh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class cR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Yr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await Lo(h),h.q_.set("Unknown"),h.L_.delete(4),await hu(h)}(this))})}),this.q_=new uR(r,i)}}async function hu(t){if(Yr(t))for(const e of t.B_)await e(!0)}async function Lo(t){for(const e of t.B_)await e(!1)}function PE(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lf(n)?af(n):Ji(n).r_()&&of(n,e))}function sf(t,e){const n=Y(t),r=Ji(n);n.N_.delete(e),r.r_()&&xE(n,e),n.N_.size===0&&(r.r_()?r.o_():Yr(n)&&n.q_.set("Unknown"))}function of(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ji(t).A_(e)}function xE(t,e){t.Q_.xe(e),Ji(t).R_(e)}function af(t){t.Q_=new h1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ji(t).start(),t.q_.v_()}function lf(t){return Yr(t)&&!Ji(t).n_()&&t.N_.size>0}function Yr(t){return Y(t).L_.size===0}function NE(t){t.Q_=void 0}async function hR(t){t.q_.set("Online")}async function dR(t){t.N_.forEach((e,n)=>{of(t,e)})}async function fR(t,e){NE(t),lf(t)?(t.q_.M_(e),af(t)):t.q_.set("Unknown")}async function pR(t,e,n){if(t.q_.set("Online"),e instanceof yE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof Ha?t.Q_.Ke(e):e instanceof gE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await AE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(h);p&&s.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(qe.EMPTY_BYTE_STRING,p.snapshotVersion)),xE(s,u);const m=new Kn(p.target,u,h,p.sequenceNumber);of(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!Do(e))throw e;t.L_.add(1),await Lo(t),t.q_.set("Offline"),n||(n=()=>AE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await hu(t)})}function DE(t,e){return e().catch(n=>Pl(t,n,e))}async function du(t){const e=Y(t),n=cr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mR(e);)try{const i=await J1(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,gR(e,i)}catch(i){await Pl(e,i)}bE(e)&&OE(e)}function mR(t){return Yr(t)&&t.O_.length<10}function gR(t,e){t.O_.push(e);const n=cr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function bE(t){return Yr(t)&&!cr(t).n_()&&t.O_.length>0}function OE(t){cr(t).start()}async function yR(t){cr(t).p_()}async function _R(t){const e=cr(t);for(const n of t.O_)e.m_(n.mutations)}async function vR(t,e,n){const r=t.O_.shift(),i=Jd.from(r,e,n);await DE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await du(t)}async function ER(t,e){e&&cr(t).V_&&await async function(r,i){if(function(o){return l1(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();cr(r).s_(),await DE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await du(r)}}(t,e),bE(t)&&OE(t)}async function Ig(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.L_.add(3),await Lo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await hu(n)}async function wR(t,e){const n=Y(t);e?(n.L_.delete(2),await hu(n)):e||(n.L_.add(2),await Lo(n),n.q_.set("Unknown"))}function Ji(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new oR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:hR.bind(null,t),Ro:dR.bind(null,t),mo:fR.bind(null,t),d_:pR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lf(t)?af(t):t.q_.set("Unknown")):(await t.K_.stop(),NE(t))})),t.K_}function cr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new aR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yR.bind(null,t),mo:ER.bind(null,t),f_:_R.bind(null,t),g_:vR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await du(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class uf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new uf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),Do(t))return new H(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Sg{constructor(){this.W_=new ve(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class $i{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new $i(e,n,Ai.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class TR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class IR{constructor(){this.queries=kg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=kg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(j.ABORTED,"Firestore shutting down"))}}function kg(){return new Xi(t=>nE(t),su)}async function SR(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new TR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=cf(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hf(n)}async function kR(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AR(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&hf(n)}function RR(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hf(t){t.Y_.forEach(e=>{e.next()})}var Vh,Ag;(Ag=Vh||(Vh={})).ea="default",Ag.Cache="cache";class CR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Vh.Cache}}/**
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
 */class LE{constructor(e){this.key=e}}class VE{constructor(e){this.key=e}}class PR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=rE(e),this.Ra=new Ai(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Sg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const v=i.get(p),R=ou(this.query,m)?m:null,D=!!v&&this.mutatedKeys.has(v.key),b=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let A=!1;v&&R?v.data.isEqual(R.data)?D!==b&&(r.track({type:3,doc:R}),A=!0):this.ga(v,R)||(r.track({type:2,doc:R}),A=!0,(u&&this.Aa(R,u)>0||h&&this.Aa(R,h)<0)&&(l=!0)):!v&&R?(r.track({type:0,doc:R}),A=!0):v&&!R&&(r.track({type:1,doc:v}),A=!0,(u||h)&&(l=!0)),A&&(R?(o=o.add(R),s=b?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(R,D){const b=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return b(R)-b(D)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new $i(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new VE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new LE(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return $i.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NR{constructor(e){this.key=e,this.va=!1}}class DR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Xi(l=>nE(l),su),this.Ma=new Map,this.xa=new Set,this.Oa=new ve(W.comparator),this.Na=new Map,this.La=new tf,this.Ba={},this.ka=new Map,this.qa=zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function bR(t,e,n=!0){const r=zE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await ME(r,e,n,!0),i}async function OR(t,e){const n=zE(t);await ME(n,e,!0,!1)}async function ME(t,e,n,r){const i=await Z1(t.localStore,Xt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await LR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&PE(t.remoteStore,i),l}async function LR(t,e,n,r,i){t.Ka=(m,v,R)=>async function(b,A,y,w){let I=A.view.ma(y);I.ns&&(I=await Eg(b.localStore,A.query,!1).then(({documents:E})=>A.view.ma(E,I)));const P=w&&w.targetChanges.get(A.targetId),L=w&&w.targetMismatches.get(A.targetId)!=null,V=A.view.applyChanges(I,b.isPrimaryClient,P,L);return Cg(b,A.targetId,V.wa),V.snapshot}(t,m,v,R);const s=await Eg(t.localStore,e,!0),o=new PR(e,s.Ts),l=o.ma(s.documents),u=Oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Cg(t,n,h.wa);const p=new xR(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function VR(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!su(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Lh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sf(r.remoteStore,i.targetId),Mh(r,i.targetId)}).catch(No)):(Mh(r,i.targetId),await Lh(r.localStore,i.targetId,!0))}async function MR(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sf(n.remoteStore,r.targetId))}async function jR(t,e,n){const r=WR(t);try{const i=await function(o,l){const u=Y(o),h=be.now(),p=l.reduce((R,D)=>R.add(D.key),Z());let m,v;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=Cn(),b=Z();return u.cs.getEntries(R,p).next(A=>{D=A,D.forEach((y,w)=>{w.isValidDocument()||(b=b.add(y))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(A=>{m=A;const y=[];for(const w of l){const I=r1(w,m.get(w.key).overlayedDocument);I!=null&&y.push(new Qr(w.key,I,Qv(I.value.mapValue),wn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,y,l)}).next(A=>{v=A;const y=A.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(R,A.batchId,y)})}).then(()=>({batchId:v.batchId,changes:sE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new ve(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Vo(r,i.changes),await du(r.remoteStore)}catch(i){const s=cf(i,"Failed to persist write");n.reject(s)}}async function jE(t,e){const n=Y(t);try{const r=await Y1(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?oe(o.va):i.removedDocuments.size>0&&(oe(o.va),o.va=!1))}),await Vo(n,r,e)}catch(r){await No(r)}}function Rg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const v of m.j_)v.Z_(l)&&(h=!0)}),h&&hf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FR(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ve(W.comparator);o=o.insert(s,tt.newNoDocument(s,Q.min()));const l=Z().add(s),u=new uu(Q.min(),new Map,new ve(ie),o,l);await jE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),df(r)}else await Lh(r.localStore,e,!1).then(()=>Mh(r,e,n)).catch(No)}async function UR(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await Q1(n.localStore,e);UE(n,r,null),FE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vo(n,i)}catch(i){await No(i)}}async function BR(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(oe(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);UE(r,e,n),FE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vo(r,i)}catch(i){await No(i)}}function FE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function UE(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Mh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||BE(t,r)})}function BE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),df(t))}function Cg(t,e,n){for(const r of n)r instanceof LE?(t.La.addReference(r.key,e),zR(t,r)):r instanceof VE?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||BE(t,r.key)):K()}function zR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),df(t))}function df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new NR(n)),t.Oa=t.Oa.insert(n,r),PE(t.remoteStore,new Kn(Xt(Yd(n.path)),r,"TargetPurposeLimboResolution",Hd.oe))}}async function Vo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=rf.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const p=Y(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,v=>M.forEach(v.$i,R=>p.persistence.referenceDelegate.addReference(m,v.targetId,R)).next(()=>M.forEach(v.Ui,R=>p.persistence.referenceDelegate.removeReference(m,v.targetId,R)))))}catch(m){if(!Do(m))throw m;$("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const v=m.targetId;if(!m.fromCache){const R=p.os.get(v),D=R.snapshotVersion,b=R.withLastLimboFreeSnapshotVersion(D);p.os=p.os.insert(v,b)}}}(r.localStore,s))}async function $R(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await kE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vo(n,r.hs)}}function HR(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function zE(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FR.bind(null,e),e.Ca.d_=AR.bind(null,e.eventManager),e.Ca.$a=RR.bind(null,e.eventManager),e}function WR(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BR.bind(null,e),e}class xl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return G1(this.persistence,new q1,e.initialUser,this.serializer)}Ga(e){return new $1(nf.Zr,this.serializer)}Wa(e){return new tR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xl.provider={build:()=>new xl};class jh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$R.bind(null,this.syncEngine),await wR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IR}()}createDatastore(e){const n=cu(e.databaseInfo.databaseId),r=function(s){return new sR(s)}(e.databaseInfo);return function(s,o,l,u){return new lR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new cR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Rg(this.syncEngine,n,0),function(){return Tg.D()?new Tg:new nR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const m=new DR(i,s,o,l,u,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Lo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jh.provider={build:()=>new jh};/**
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
 */class qR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class KR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=qv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GR(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ig(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ig(e.remoteStore,i)),t._onlineComponents=e}async function GR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ji("Error using user provided cache. Falling back to memory cache: "+n),await wc(t,new xl)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await wc(t,new xl);return t._offlineComponents}async function $E(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Pg(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Pg(t,new jh))),t._onlineComponents}function QR(t){return $E(t).then(e=>e.syncEngine)}async function xg(t){const e=await $E(t),n=e.eventManager;return n.onListen=bR.bind(null,e.syncEngine),n.onUnlisten=VR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MR.bind(null,e.syncEngine),n}/**
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
 */function HE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ng=new Map;/**
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
 */function YR(t,e,n){if(!n)throw new H(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XR(t,e,n,r){if(e===!0&&r===!0)throw new H(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dg(t){if(!W.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Ri(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ff(t);throw new H(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class bg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hA;switch(r.type){case"firstParty":return new mA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ng.get(n);r&&($("ComponentProvider","Removing Datastore"),Ng.delete(n),r.terminate())}(this),Promise.resolve()}}function JR(t,e,n,r={}){var i;const s=(t=Ri(t,pf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=bv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(h)}t._authCredentials=new dA(new Wv(l,u))}}/**
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
 */class fu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fu(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class wo extends fu{constructor(e,n,r){super(e,n,Yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new W(e))}withConverter(e){return new wo(this.firestore,e,this._path)}}function WE(t,e,...n){if(t=je(t),arguments.length===1&&(e=qv.newId()),YR("doc","path",e),t instanceof pf){const r=Te.fromString(e,...n);return Dg(r),new Nt(t,null,new W(r))}{if(!(t instanceof Nt||t instanceof wo))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Dg(r),new Nt(t.firestore,t instanceof wo?t.converter:null,new W(r))}}/**
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
 */class Og{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new RE(this,"async_queue_retry"),this.Vu=()=>{const r=Ec();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new br;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Do(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=uf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Lg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Nl extends pf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Og,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Og(e),this._firestoreClient=void 0,await e}}}function ZR(t,e){const n=typeof t=="object"?t:zd(),r=typeof t=="string"?t:"(default)",i=nu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xv("firestore");s&&JR(i,...s)}return i}function qE(t){if(t._terminated)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eC(t),t._firestoreClient}function eC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,p){return new CA(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,HE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new KR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(qe.fromBase64String(e))}catch(n){throw new H(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class KE{constructor(e){this._methodName=e}}/**
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
 */class gf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */class yf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const tC=/^__.*__$/;class nC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}function GE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class _f{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _f(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(GE(this.Cu)&&tC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cu(e)}Qu(e,n,r,i=!1){return new _f({Cu:e,methodName:n,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iC(t){const e=t._freezeSettings(),n=cu(t._databaseId);return new rC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sC(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);JE("Data must be an object, but it was:",o,r);const l=YE(r,o);let u,h;if(s.merge)u=new Ft(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const v=oC(e,m,n);if(!o.contains(v))throw new H(j.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);lC(p,v)||p.push(v)}u=new Ft(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new nC(new Ct(l),u,h)}function QE(t,e){if(XE(t=je(t)))return JE("Unsupported field value:",e,t),YE(t,e);if(t instanceof KE)return function(r,i){if(!GE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=QE(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:Cl(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(i.serializer,s)}}if(r instanceof gf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hi)return{bytesValue:_E(i.serializer,r._byteString)};if(r instanceof Nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ef(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ff(r)}`)}(t,e)}function YE(t,e){const n={};return Kv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=QE(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function XE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof gf||t instanceof Hi||t instanceof Nt||t instanceof KE||t instanceof yf)}function JE(t,e,n){if(!XE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ff(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function oC(t,e,n){if((e=je(e))instanceof mf)return e._internalPath;if(typeof e=="string")return ZE(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const aC=new RegExp("[~\\*/\\[\\]]");function ZE(t,e,n){if(e.search(aC)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mf(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(j.INVALID_ARGUMENT,l+t+u)}function lC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ew{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uC extends ew{data(){return super.data()}}function tw(t,e){return typeof e=="string"?ZE(t,e):e instanceof mf?e._internalPath:e._delegate._internalPath}/**
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
 */function cC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hC{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new yf(s)}convertGeoPoint(e){return new gf(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=ur(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);oe(SE(r));const i=new yo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function dC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nw extends ew{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wa extends nw{data(e={}){return super.data(e)}}class fC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wa(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Wa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Os(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Wa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Os(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:pC(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class rw extends hC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function mC(t,e,n){t=Ri(t,Nt);const r=Ri(t.firestore,Nl),i=dC(t.converter,e,n);return yC(r,[sC(iC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function gC(t,...e){var n,r,i;t=je(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Lg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Lg(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,p;if(t instanceof Nt)h=Ri(t.firestore,Nl),p=Yd(t._key.path),u={next:m=>{e[o]&&e[o](_C(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ri(t,fu);h=Ri(m.firestore,Nl),p=m._query;const v=new rw(h);u={next:R=>{e[o]&&e[o](new fC(h,v,m,R))},error:e[o+1],complete:e[o+2]},cC(t._query)}return function(v,R,D,b){const A=new qR(b),y=new CR(R,A,D);return v.asyncQueue.enqueueAndForget(async()=>SR(await xg(v),y)),()=>{A.Za(),v.asyncQueue.enqueueAndForget(async()=>kR(await xg(v),y))}}(qE(h),p,l,u)}function yC(t,e){return function(r,i){const s=new br;return r.asyncQueue.enqueueAndForget(async()=>jR(await QR(r),i,s)),s.promise}(qE(t),e)}function _C(t,e,n){const r=n.docs.get(e._key),i=new rw(t);return new nw(t,i,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Qi=i})(Gr),Ur(new ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Nl(new fA(r.getProvider("auth-internal")),new yA(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Yt(Zm,"4.7.3",e),Yt(Zm,"4.7.3","esm2017")})();function vf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vC=iw,sw=new Po("auth","Firebase",iw());/**
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
 */const bl=new Ud("@firebase/auth");function EC(t,...e){bl.logLevel<=ee.WARN&&bl.warn(`Auth (${Gr}): ${t}`,...e)}function qa(t,...e){bl.logLevel<=ee.ERROR&&bl.error(`Auth (${Gr}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw Ef(t,...e)}function Zt(t,...e){return Ef(t,...e)}function ow(t,e,n){const r=Object.assign(Object.assign({},vC()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function ir(t){return ow(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sw.create(t,...e)}function q(t,e,...n){if(!t)throw Ef(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function Pn(t,e){t||yn(e)}/**
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
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wC(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wC()||WS()||"connection"in navigator)?navigator.onLine:!0}function IC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=zS()||qS()}get(){return TC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wf(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class aw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kC=new Mo(3e4,6e4);function Xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,i={}){return lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return HS()||(h.referrerPolicy="no-referrer"),aw.fetch()(uw(t,t.config.apiHost,n,l),h)})}async function lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SC),e);try{const i=new RC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ka(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ow(t,p,h);$t(t,p)}}catch(i){if(i instanceof rn)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function pu(t,e,n,r,i={}){const s=await gr(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wf(t.config,i):`${t.config.apiScheme}://${i}`}function AC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),kC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}function Mg(t){return t!==void 0&&t.enterprise!==void 0}class CC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function PC(t,e){return gr(t,"GET","/v2/recaptchaConfig",Xr(t,e))}/**
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
 */async function xC(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function cw(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NC(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=Tf(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gs(Tc(i.auth_time)),issuedAtTime:Gs(Tc(i.iat)),expirationTime:Gs(Tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function Tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cv(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jg(t){const e=Tf(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function To(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&DC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ol(t){var e;const n=t.auth,r=await t.getIdToken(),i=await To(t,cw(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hw(s.providerUserInfo):[],l=LC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uh(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function OC(t){const e=je(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hw(t){return t.map(e=>{var{providerId:n}=e,r=vf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VC(t,e){const n=await lw(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",aw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MC(t,e){return gr(t,"POST","/v2/accounts:revokeToken",Xr(t,e))}/**
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
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ci;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Ln(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await To(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NC(this,e)}reload(){return OC(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await To(this,xC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:I,emailVerified:P,isAnonymous:L,providerData:V,stsTokenManager:E}=n;q(I&&E,e,"internal-error");const _=Ci.fromJSON(this.name,E);q(typeof I=="string",e,"internal-error"),Ln(m,e.name),Ln(v,e.name),q(typeof P=="boolean",e,"internal-error"),q(typeof L=="boolean",e,"internal-error"),Ln(R,e.name),Ln(D,e.name),Ln(b,e.name),Ln(A,e.name),Ln(y,e.name),Ln(w,e.name);const T=new _n({uid:I,auth:e,email:v,emailVerified:P,displayName:m,isAnonymous:L,photoURL:D,phoneNumber:R,tenantId:b,stsTokenManager:_,createdAt:y,lastLoginAt:w});return V&&Array.isArray(V)&&(T.providerData=V.map(S=>Object.assign({},S))),A&&(T._redirectEventId=A),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ci;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ol(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?hw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ci;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Fg=new Map;function vn(t){Pn(t instanceof Function,"Expected a class definition");let e=Fg.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fg.set(t,e),e)}/**
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
 */class dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dw.type="NONE";const Ug=dw;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pi(vn(Ug),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||vn(Ug);const o=Ka(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const m=_n._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Pi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Pi(s,e,r))}}/**
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
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_w(e))return"Blackberry";if(vw(e))return"Webos";if(pw(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(yw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fw(t=rt()){return/firefox\//i.test(t)}function pw(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(t=rt()){return/crios\//i.test(t)}function gw(t=rt()){return/iemobile/i.test(t)}function yw(t=rt()){return/android/i.test(t)}function _w(t=rt()){return/blackberry/i.test(t)}function vw(t=rt()){return/webos/i.test(t)}function If(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jC(t=rt()){var e;return If(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FC(){return KS()&&document.documentMode===10}function Ew(t=rt()){return If(t)||yw(t)||vw(t)||_w(t)||/windows phone/i.test(t)||gw(t)}/**
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
 */function ww(t,e=[]){let n;switch(t){case"Browser":n=Bg(rt());break;case"Worker":n=`${Bg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
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
 */class UC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BC(t,e={}){return gr(t,"GET","/v2/passwordPolicy",Xr(t,e))}/**
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
 */const zC=6;class $C{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class HC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new UC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cw(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(ir(this));const n=e?je(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BC(this),n=new $C(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zi(t){return je(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=tk(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WC(t){mu=t}function Tw(t){return mu.loadJS(t)}function qC(){return mu.recaptchaEnterpriseScript}function KC(){return mu.gapiScript}function GC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const QC="recaptcha-enterprise",YC="NO_RECAPTCHA";class XC{constructor(e){this.type=QC,this.auth=Zi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{PC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new CC(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Mg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(YC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Mg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qC();u.length!==0&&(u+=l),Tw(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function $g(t,e,n,r=!1){const i=new XC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $g(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $g(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function JC(t,e){const n=nu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wl(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function ZC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eP(t,e,n){const r=Zi(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Iw(e),{host:o,port:l}=tP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),nP()}function Iw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tP(t){const e=Iw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wg(o)}}}function Wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function rP(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iP(t,e){return pu(t,"POST","/v1/accounts:signInWithPassword",Xr(t,e))}/**
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
 */async function sP(t,e){return pu(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}async function oP(t,e){return pu(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}/**
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
 */class Io extends Sf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hg(e,n,"signInWithPassword",iP);case"emailLink":return sP(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hg(e,r,"signUpPassword",rP);case"emailLink":return oP(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xi(t,e){return pu(t,"POST","/v1/accounts:signInWithIdp",Xr(t,e))}/**
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
 */const aP="http://localhost";class Hr extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:aP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
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
 */function lP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uP(t){const e=Ps(xs(t)).link,n=e?Ps(xs(e)).deep_link_id:null,r=Ps(xs(t)).deep_link_id;return(r?Ps(xs(r)).link:null)||r||n||e||t}class kf{constructor(e){var n,r,i,s,o,l;const u=Ps(xs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=lP((i=u.mode)!==null&&i!==void 0?i:null);q(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=uP(e);try{return new kf(n)}catch{return null}}}/**
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
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return Io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kf.parseLink(n);return q(r,"argument-error"),Io._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends Sw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends jo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class zn extends jo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class $n extends jo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
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
 */class Wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=qg(r);return new Wi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qg(r);return new Wi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ll extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ll.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ll(e,n,r,i)}}function kw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ll._fromErrorAndOperation(t,s,e,r):s})}async function cP(t,e,n=!1){const r=await To(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wi._forOperation(t,"link",r)}/**
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
 */async function hP(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(ir(r));const i="reauthenticate";try{const s=await To(t,kw(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Tf(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Wi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
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
 */async function Aw(t,e,n=!1){if(gn(t.app))return Promise.reject(ir(t));const r="signIn",i=await kw(t,r,e),s=await Wi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function dP(t,e){return Aw(Zi(t),e)}/**
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
 */async function fP(t){const e=Zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function pP(t,e,n){return gn(t.app)?Promise.reject(ir(t)):dP(je(t),es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fP(t),r})}function mP(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function gP(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function yP(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function _P(t){return je(t).signOut()}const Vl="__sak";/**
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
 */class Rw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vP=1e3,EP=10;class Cw extends Rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cw.type="LOCAL";const wP=Cw;/**
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
 */class Pw extends Rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pw.type="SESSION";const xw=Pw;/**
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
 */function TP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await TP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gu.receivers=[];/**
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
 */function Af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Af("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function SP(t){en().location.href=t}/**
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
 */function Nw(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function kP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RP(){return Nw()?self:null}/**
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
 */const Dw="firebaseLocalStorageDb",CP=1,Ml="firebaseLocalStorage",bw="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yu(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function PP(){const t=indexedDB.deleteDatabase(Dw);return new Fo(t).toPromise()}function Bh(){const t=indexedDB.open(Dw,CP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:bw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await PP(),e(await Bh()))})})}async function Kg(t,e,n){const r=yu(t,!0).put({[bw]:e,value:n});return new Fo(r).toPromise()}async function xP(t,e){const n=yu(t,!1).get(e),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function Gg(t,e){const n=yu(t,!0).delete(e);return new Fo(n).toPromise()}const NP=800,DP=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gu._getInstance(RP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kP(),!this.activeServiceWorker)return;this.sender=new IP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bh();return await Kg(e,Vl,"1"),await Gg(e,Vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yu(i,!1).getAll();return new Fo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const bP=Ow;new Mo(3e4,6e4);/**
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
 */function OP(t,e){return e?vn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rf extends Sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LP(t){return Aw(t.auth,new Rf(t),t.bypassAuthState)}function VP(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),hP(n,new Rf(t),t.bypassAuthState)}async function MP(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),cP(n,new Rf(t),t.bypassAuthState)}/**
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
 */class Lw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LP;case"linkViaPopup":case"linkViaRedirect":return MP;case"reauthViaPopup":case"reauthViaRedirect":return VP;default:$t(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jP=new Mo(2e3,1e4);class vi extends Lw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jP.get())};e()}}vi.currentPopupAction=null;/**
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
 */const FP="pendingRedirect",Ga=new Map;class UP extends Lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const r=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(t,e){const n=HP(e),r=$P(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zP(t,e){Ga.set(t._key(),e)}function $P(t){return vn(t._redirectPersistence)}function HP(t){return Ka(FP,t.config.apiKey,t.name)}async function WP(t,e,n=!1){if(gn(t.app))return Promise.reject(ir(t));const r=Zi(t),i=OP(r,e),o=await new UP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qP=10*60*1e3;class KP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vw(t);default:return!1}}/**
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
 */async function QP(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
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
 */const YP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XP=/^https?/;async function JP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QP(t);for(const n of e)try{if(ZP(n))return}catch{}$t(t,"unauthorized-domain")}function ZP(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XP.test(n))return!1;if(YP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ex=new Mo(3e4,6e4);function Yg(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tx(t){return new Promise((e,n)=>{var r,i,s;function o(){Yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yg(),n(Zt(t,"network-request-failed"))},timeout:ex.get()})}if(!((i=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=en().gapi)===null||s===void 0)&&s.load)o();else{const l=GC("iframefcb");return en()[l]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},Tw(`${KC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Qa=null,e})}let Qa=null;function nx(t){return Qa=Qa||tx(t),Qa}/**
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
 */const rx=new Mo(5e3,15e3),ix="__/auth/iframe",sx="emulator/auth/iframe",ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lx(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wf(e,sx):`https://${t.config.authDomain}/${ix}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},i=ax.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xo(r).slice(1)}`}async function ux(t){const e=await nx(t),n=en().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:lx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ox,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=en().setTimeout(()=>{s(o)},rx.get());function u(){en().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const cx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hx=500,dx=600,fx="_blank",px="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mx(t,e,n,r=hx,i=dx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},cx),{width:r.toString(),height:i.toString(),top:s,left:o}),h=rt().toLowerCase();n&&(l=mw(h)?fx:n),fw(h)&&(e=e||px,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[R,D])=>`${v}${R}=${D},`,"");if(jC(h)&&l!=="_self")return gx(e||"",l),new Xg(null);const m=window.open(e||"",l,p);q(m,t,"popup-blocked");try{m.focus()}catch{}return new Xg(m)}function gx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yx="__/auth/handler",_x="emulator/auth/handler",vx=encodeURIComponent("fac");async function Jg(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:i};if(e instanceof Sw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ek(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof jo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${vx}=${encodeURIComponent(u)}`:"";return`${Ex(t)}?${xo(l).slice(1)}${h}`}function Ex({config:t}){return t.emulator?wf(t,_x):`https://${t.authDomain}/${yx}`}/**
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
 */const Ic="webStorageSupport";class wx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xw,this._completeRedirectFn=WP,this._overrideRedirectResult=zP}async _openPopup(e,n,r,i){var s;Pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jg(e,n,r,Fh(),i);return mx(e,o,Af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jg(e,n,r,Fh(),i);return SP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ux(e),r=new KP(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ic];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ew()||pw()||If()}}const Tx=wx;var Zg="@firebase/auth",ey="1.7.9";/**
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
 */class Ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kx(t){Ur(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ww(t)},h=new HC(r,i,s,u);return ZC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new ar("auth-internal",e=>{const n=Zi(e.getProvider("auth").getImmediate());return(r=>new Ix(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Zg,ey,Sx(t)),Yt(Zg,ey,"esm2017")}/**
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
 */const Ax=5*60,Rx=Dv("authIdTokenMaxAge")||Ax;let ty=null;const Cx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Rx)return;const i=n==null?void 0:n.token;ty!==i&&(ty=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Px(t=zd()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JC(t,{popupRedirectResolver:Tx,persistence:[bP,wP,xw]}),r=Dv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Cx(s.toString());gP(n,o,()=>o(n.currentUser)),mP(n,l=>o(l))}}const i=Pv("auth");return i&&eP(n,`http://${i}`),n}function xx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kx("Browser");/**
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
 */const Mw="firebasestorage.googleapis.com",jw="storageBucket",Nx=2*60*1e3,Dx=10*60*1e3;/**
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
 */class Se extends rn{constructor(e,n,r=0){super(Sc(e),`Firebase Storage: ${n} (${Sc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Sc(t){return"storage/"+t}function Cf(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Ie.UNKNOWN,t)}function bx(t){return new Se(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ox(t){return new Se(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Lx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Ie.UNAUTHENTICATED,t)}function Vx(){return new Se(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Mx(t){return new Se(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function jx(){return new Se(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Fx(){return new Se(Ie.CANCELED,"User canceled the upload/download.")}function Ux(t){return new Se(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function Bx(t){return new Se(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zx(){return new Se(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jw+"' property when initializing the app?")}function $x(){return new Se(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Hx(){return new Se(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Wx(t){return new Se(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zh(t){return new Se(Ie.INVALID_ARGUMENT,t)}function Fw(){return new Se(Ie.APP_DELETED,"The Firebase app was deleted.")}function qx(t){return new Se(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qs(t,e){return new Se(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ss(t){throw new Se(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw Bx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(P){P.path_=decodeURIComponent(P.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",R=new RegExp(`^https?://${m}/${p}/b/${i}/o${v}`,"i"),D={bucket:1,path:3},b=n===Mw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",y=new RegExp(`^https?://${b}/${i}/${A}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:R,indices:D,postModify:h},{regex:y,indices:{bucket:1,path:2},postModify:h}];for(let P=0;P<I.length;P++){const L=I[P],V=L.regex.exec(e);if(V){const E=V[L.indices.bucket];let _=V[L.indices.path];_||(_=""),r=new Et(E,_),L.postModify(r);break}}if(r==null)throw Ux(e);return r}}class Kx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Gx(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function p(...A){h||(h=!0,e.apply(null,A))}function m(A){i=setTimeout(()=>{i=null,t(R,u())},A)}function v(){s&&clearTimeout(s)}function R(A,...y){if(h){v();return}if(A){v(),p.call(null,A,...y);return}if(u()||o){v(),p.call(null,A,...y);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,m(I)}let D=!1;function b(A){D||(D=!0,v(),!h&&(i!==null?(A||(l=2),clearTimeout(i),m(0)):A||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function Qx(t){t(!1)}/**
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
 */function Yx(t){return t!==void 0}function Xx(t){return typeof t=="object"&&!Array.isArray(t)}function Pf(t){return typeof t=="string"||t instanceof String}function ny(t){return xf()&&t instanceof Blob}function xf(){return typeof Blob<"u"}function ry(t,e,n,r){if(r<e)throw zh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Nf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Uw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Or;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Or||(Or={}));/**
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
 */function Jx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Zx{constructor(e,n,r,i,s,o,l,u,h,p,m,v=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,D)=>{this.resolve_=R,this.reject_=D,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Aa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Or.NO_ERROR,u=s.getStatus();if(!l||Jx(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Or.ABORT;r(!1,new Aa(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Aa(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Yx(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Cf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Fw():Fx();o(u)}else{const u=jx();o(u)}};this.canceled_?n(!1,new Aa(!1,null,!0)):this.backoffId_=Gx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Aa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iN(t,e,n,r,i,s,o=!0){const l=Uw(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return nN(h,e),eN(h,n),tN(h,s),rN(h,r),new Zx(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function sN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oN(...t){const e=sN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xf())return new Blob(t);throw new Se(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lN(t){if(typeof atob>"u")throw Wx("base-64");return atob(t)}/**
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
 */const Kt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kc{constructor(e,n){this.data=e,this.contentType=n||null}}function uN(t,e){switch(t){case Kt.RAW:return new kc(Bw(e));case Kt.BASE64:case Kt.BASE64URL:return new kc(zw(t,e));case Kt.DATA_URL:return new kc(hN(e),dN(e))}throw Cf()}function Bw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cN(t){let e;try{e=decodeURIComponent(t)}catch{throw Qs(Kt.DATA_URL,"Malformed data URL.")}return Bw(e)}function zw(t,e){switch(t){case Kt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Qs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Kt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Qs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lN(e)}catch(i){throw i.message.includes("polyfill")?i:Qs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class $w{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Qs(Kt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hN(t){const e=new $w(t);return e.base64?zw(Kt.BASE64,e.rest):cN(e.rest)}function dN(t){return new $w(t).contentType}function fN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Hn{constructor(e,n){let r=0,i="";ny(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ny(this.data_)){const r=this.data_,i=aN(r,e,n);return i===null?null:new Hn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hn(r,!0)}}static getBlob(...e){if(xf()){const n=e.map(r=>r instanceof Hn?r.data_:r);return new Hn(oN.apply(null,n))}else{const n=e.map(o=>Pf(o)?uN(Kt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Hn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Hw(t){let e;try{e=JSON.parse(t)}catch{return null}return Xx(e)?e:null}/**
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
 */function pN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ww(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gN(t,e){return e}class ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gN}}let Ra=null;function yN(t){return!Pf(t)||t.length<2?t:Ww(t)}function qw(){if(Ra)return Ra;const t=[];t.push(new ot("bucket")),t.push(new ot("generation")),t.push(new ot("metageneration")),t.push(new ot("name","fullPath",!0));function e(s,o){return yN(o)}const n=new ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ot("size");return i.xform=r,t.push(i),t.push(new ot("timeCreated")),t.push(new ot("updated")),t.push(new ot("md5Hash",null,!0)),t.push(new ot("cacheControl",null,!0)),t.push(new ot("contentDisposition",null,!0)),t.push(new ot("contentEncoding",null,!0)),t.push(new ot("contentLanguage",null,!0)),t.push(new ot("contentType",null,!0)),t.push(new ot("metadata","customMetadata",!0)),Ra=t,Ra}function _N(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return _N(r,t),r}function Kw(t,e,n){const r=Hw(e);return r===null?null:vN(t,r,n)}function EN(t,e,n,r){const i=Hw(e);if(i===null||!Pf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const p=t.bucket,m=t.fullPath,v="/b/"+o(p)+"/o/"+o(m),R=Nf(v,n,r),D=Uw({alt:"media",token:h});return R+D})[0]}function wN(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Gw{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Qw(t){if(!t)throw Cf()}function TN(t,e){function n(r,i){const s=Kw(t,i,e);return Qw(s!==null),s}return n}function IN(t,e){function n(r,i){const s=Kw(t,i,e);return Qw(s!==null),EN(s,i,t.host,t._protocol)}return n}function Yw(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Vx():i=Lx():n.getStatus()===402?i=Ox(t.bucket):n.getStatus()===403?i=Mx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function SN(t){const e=Yw(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=bx(t.path)),s.serverResponse=i.serverResponse,s}return n}function kN(t,e,n){const r=e.fullServerUrl(),i=Nf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Gw(i,s,IN(t,n),o);return l.errorHandler=SN(e),l}function AN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function RN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=AN(null,e)),r}function CN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let I="";for(let P=0;P<2;P++)I=I+Math.random().toString().slice(2);return I}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=RN(e,r,i),p=wN(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,v=`\r
--`+u+"--",R=Hn.getBlob(m,r,v);if(R===null)throw $x();const D={name:h.fullPath},b=Nf(s,t.host,t._protocol),A="POST",y=t.maxUploadRetryTime,w=new Gw(b,A,TN(t,n),y);return w.urlParams=D,w.headers=o,w.body=R.uploadData(),w.errorHandler=Yw(e),w}class PN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xN extends PN{initXhr(){this.xhr_.responseType="text"}}function Xw(){return new xN}/**
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
 */class Wr{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wr(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ww(this._location.path)}get storage(){return this._service}get parent(){const e=pN(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new Wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qx(e)}}function NN(t,e,n){t._throwIfRoot("uploadBytes");const r=CN(t.storage,t._location,qw(),new Hn(e,!0),n);return t.storage.makeRequestWithTokens(r,Xw).then(i=>({metadata:i,ref:t}))}function DN(t){t._throwIfRoot("getDownloadURL");const e=kN(t.storage,t._location,qw());return t.storage.makeRequestWithTokens(e,Xw).then(n=>{if(n===null)throw Hx();return n})}function bN(t,e){const n=mN(t._location.path,e),r=new Et(t._location.bucket,n);return new Wr(t.storage,r)}/**
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
 */function ON(t){return/^[A-Za-z]+:\/\//.test(t)}function LN(t,e){return new Wr(t,e)}function Jw(t,e){if(t instanceof Df){const n=t;if(n._bucket==null)throw zx();const r=new Wr(n,n._bucket);return e!=null?Jw(r,e):r}else return e!==void 0?bN(t,e):t}function VN(t,e){if(e&&ON(e)){if(t instanceof Df)return LN(t,e);throw zh("To use ref(service, url), the first argument must be a Storage instance.")}else return Jw(t,e)}function iy(t,e){const n=e==null?void 0:e[jw];return n==null?null:Et.makeFromBucketSpec(n,t)}function MN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bv(i,t.app.options.projectId))}class Df{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Mw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nx,this._maxUploadRetryTime=Dx,this._requests=new Set,i!=null?this._bucket=Et.makeFromBucketSpec(i,this._host):this._bucket=iy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=iy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ry("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ry("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Kx(Fw());{const o=iN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sy="@firebase/storage",oy="0.13.2";/**
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
 */const Zw="storage";function jN(t,e,n){return t=je(t),NN(t,e,n)}function FN(t){return t=je(t),DN(t)}function UN(t,e){return t=je(t),VN(t,e)}function BN(t=zd(),e){t=je(t);const r=nu(t,Zw).getImmediate({identifier:e}),i=xv("storage");return i&&zN(r,...i),r}function zN(t,e,n,r={}){MN(t,e,n,r)}function $N(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Df(n,r,i,e,Gr)}function HN(){Ur(new ar(Zw,$N,"PUBLIC").setMultipleInstances(!0)),Yt(sy,oy,""),Yt(sy,oy,"esm2017")}HN();var WN="firebase",qN="10.14.1";/**
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
 */Yt(WN,qN,"app");const $h={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},Jr=()=>!!($h.apiKey&&$h.projectId);let Ca=null,Pr=null,bf=null,e0=null;Jr()&&(Ca=Vv($h),Pr=Px(Ca),bf=ZR(Ca),e0=BN(Ca));const t0={coverPhoto:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",profilePhoto:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",bio:{fullName:"Md. Emam Zafor Saadik",title:"AI Engineer & ML Researcher",location:"Dhaka, Bangladesh",phone:"+880 1990 930131",statusBadge:"Available for opportunities",shortBio:"Final-year CSE student building research-driven ML pipelines, NLP, RAG, automated workflows, backend and architectural solutions for complex real-world data systems."},socialMedia:[{id:"sm-1",platform:"LinkedIn",url:"https://linkedin.com",label:"LinkedIn"},{id:"sm-2",platform:"GitHub",url:"https://github.com",label:"GitHub"},{id:"sm-3",platform:"Google Scholar",url:"https://scholar.google.com",label:"Scholar"}],about:"Final-year CSE student building research-driven ML pipelines, NLP, RAG, automated workflows, backend and architectural solutions for complex real-world data systems.",experience:[{id:"exp-1",position:"CTO & Co-Founder",company:"ARI Software Lab",startDate:"2022",endDate:"",isCurrent:!0,description:"Leading technological strategy and product development. Architecting scalable AI infrastructure and managing a team of developers to deliver innovative software solutions.",link:"https://arisoftwarelab.com"},{id:"exp-2",position:"Research Intern",company:"Peer Research Lab",startDate:"2023",endDate:"2024",isCurrent:!1,description:"Conducted intensive research in machine learning methodologies. Contributed to academic papers and collaborated with senior researchers on novel AI architectures.",link:""},{id:"exp-3",position:"Member",company:"BUBT Photography Club",startDate:"2022",endDate:"2023",isCurrent:!1,description:"Event coverage and creative visual documentation for campus events.",link:""}],researchFocus:[{id:"rf-1",title:"TERRA: Temporal-Evolution and Reasoning-Trace RAG",description:"Advanced Retrieval-Augmented Generation framework focusing on temporal data evolution and traceable reasoning paths for complex querying.",status:"Published",venue:"IEEE / ArXiv",year:"2024",link:"https://arxiv.org",keywords:["NLP","RAG","Temporal Reasoning"]},{id:"rf-2",title:"Lung Cancer Detection using X-Ray Images",description:"Applied DenseNet-169 architecture for high-accuracy detection of lung anomalies from standard chest X-rays, aiming to improve early diagnostic rates.",status:"Preprint",venue:"Medical AI Journal",year:"2024",link:"https://arxiv.org",keywords:["Computer Vision","DenseNet-169","Healthcare"]},{id:"rf-3",title:"AQI Prediction",description:"Engineered an LSTM model achieving highly accurate predictions. Processed multi-sensor time-series datasets containing meteorological and emission data for spatio-temporal modeling. Collaborated with environmental experts to deploy forecasting dashboards.",status:"In Progress",venue:"Environmental ML Work",year:"2024",link:"",keywords:["LSTM","Time-Series","Environmental Data"]},{id:"rf-4",title:"GAN-BanglaFake",description:"Developed a generative adversarial network architecture tailored for synthesizing high-fidelity Bangla handwritten characters. Enhanced training stability employing Wasserstein loss and gradient penalty techniques.",status:"Completed",venue:"Computer Vision Research",year:"2023",link:"",keywords:["GAN","Generative AI","WGAN-GP"]}],projects:[{id:"proj-1",title:"ObsidianIDE",icon:"code",description:"A lightweight, customizable Integrated Development Environment tailored for specific workflows.",link:"https://github.com",demoLink:"",techStack:["React","Tauri","Monaco"]},{id:"proj-2",title:"Blood Connect",icon:"droplet",description:"Comprehensive blood bank and donation management system connecting donors with patients efficiently.",link:"https://github.com",demoLink:"",techStack:["Node.js","MongoDB","Express"]},{id:"proj-3",title:"VisionAid",icon:"eye",description:"Smart blind stick utilizing sensors and basic AI to provide spatial awareness and obstacle detection for the visually impaired.",link:"https://github.com",demoLink:"",techStack:["Embedded C++","YOLO","Raspberry Pi"]},{id:"proj-4",title:"Cursion-2",icon:"globe",description:"Interactive Black Hole Lifecycle Simulator demonstrating complex astrophysical phenomena through visual models.",link:"https://github.com",demoLink:"",techStack:["Three.js","WebGL","Physics Engine"]},{id:"proj-5",title:"Stance Detection",icon:"message-square",description:"Fine-tuned pre-trained transformer models (BERT, RoBERTa) to classify user stance on controversial topics with significant performance improvements. Built a scalable web API using FastAPI to serve the model for real-time inference.",link:"https://github.com",demoLink:"",techStack:["PyTorch","BERT","FastAPI"]}],education:[{id:"edu-1",degree:"B.Sc. in Computer Science & Engineering",institute:"BUBT (Bangladesh University of Business and Technology)",result:"CGPA: 3.85",startDate:"2021",endDate:"2025",highlights:"Focus on AI, Machine Learning, and Software Architecture"}],skills:[{category:"Languages",items:["Python","C/C++","Java","SQL"]},{category:"Machine Learning & AI",items:["PyTorch","TensorFlow","Keras","Scikit-Learn","HuggingFace Transformers","LangChain"]},{category:"Data Science Tools",items:["Pandas","NumPy","Matplotlib","Seaborn","OpenCV"]},{category:"Backend & Cloud",items:["FastAPI","Django","Docker","Git"]}],researchInterests:["Natural Language Processing (NLP)","Computer Vision (CV)","Generative AI","Retrieval-Augmented Generation (RAG)","Time-Series Analysis"],contact:[{id:"c-1",type:"email",value:"sayhitosaadik@gmail.com",label:"Email"},{id:"c-2",type:"phone",value:"+880 1990 930131",label:"Phone"},{id:"c-3",type:"location",value:"Dhaka, Bangladesh",label:"Location"}],responseTime:"Response time: ~24 hours",downloadCv:{fileUrl:"./CV.pdf",fileName:"Zafor_Saadik_CV.pdf",buttonText:"Download CV",lastUpdated:"2024"}},n0="portfolio_data_v1",Hh="portfolio_admin_auth",ay=()=>{try{const t=localStorage.getItem(n0);if(t)return JSON.parse(t)}catch(t){console.error("Failed to read from localStorage:",t)}return t0},r0=t=>{try{localStorage.setItem(n0,JSON.stringify(t))}catch(e){console.error("Failed to save to localStorage:",e)}},KN=()=>{try{return localStorage.getItem(Hh)==="true"}catch{return!1}},jl=t=>{try{t?localStorage.setItem(Hh,"true"):localStorage.removeItem(Hh)}catch(e){console.error("Failed to set auth state:",e)}},GN=t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>e(r.result),r.onerror=i=>n(i),r.readAsDataURL(t)}),i0="portfolio",s0="main",QN=()=>({email:"sayhitosaadik@gmail.com",password:"Yscc9j0hpcS6DJ"}),YN=async(t,e)=>{if(Jr()){await pP(Pr,t.trim(),e),jl(!0);return}const{email:n,password:r}=QN();if((t.trim().toLowerCase()===n.toLowerCase()||t.trim().length>0)&&e===r){jl(!0);return}throw new Error("Invalid email or password.")},XN=async()=>{Jr()&&(Pr!=null&&Pr.currentUser)&&await _P(Pr),jl(!1)},JN=t=>Jr()?yP(Pr,e=>{const n=!!e;jl(n),t(n)}):(t(KN()),()=>{}),ZN=t=>Jr()?gC(WE(bf,i0,s0),e=>{if(e.exists()){const n=e.data();r0(n),t(n)}else t(t0)},e=>{console.error("Firestore subscription error:",e),t(ay())}):(t(ay()),()=>{}),e2=async t=>{r0(t),Jr()&&await mC(WE(bf,i0,s0),t,{merge:!0})},t2=async(t,e)=>{if(Jr()){const n=UN(e0,e);return await jN(n,t),FN(n)}return GN(t)};function n2({isOpen:t,onClose:e,onLoginSuccess:n}){const[r,i]=fe.useState(""),[s,o]=fe.useState(""),[l,u]=fe.useState(""),[h,p]=fe.useState(!1);if(!t)return null;const m=async v=>{v.preventDefault(),u(""),p(!0);try{await YN(r,s),n(),e(),i(""),o("")}catch(R){u(R.message||"Login failed. Please check your credentials.")}finally{p(!1)}};return d.jsx("div",{className:"modal-overlay",onClick:e,children:d.jsxs("div",{className:"modal-content",onClick:v=>v.stopPropagation(),style:{maxWidth:"420px"},children:[d.jsxs("div",{className:"modal-header",children:[d.jsxs("h3",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(vh,{size:20,color:"var(--color-primary)"})," Admin Login"]}),d.jsx("button",{className:"admin-edit-btn",onClick:e,children:d.jsx(kv,{size:18})})]}),d.jsxs("form",{onSubmit:m,children:[l&&d.jsx("div",{style:{padding:"10px 14px",backgroundColor:"#fef2f2",color:"#b91c1c",borderRadius:"8px",fontSize:"0.875rem",marginBottom:"16px"},children:l}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Admin Email"}),d.jsxs("div",{style:{position:"relative"},children:[d.jsx("input",{type:"email",className:"form-input",placeholder:"Enter your email",value:r,onChange:v=>i(v.target.value),required:!0,style:{paddingLeft:"38px"}}),d.jsx(Tv,{size:18,color:"var(--text-muted)",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)"}})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Password"}),d.jsxs("div",{style:{position:"relative"},children:[d.jsx("input",{type:"password",className:"form-input",placeholder:"••••••••",value:s,onChange:v=>o(v.target.value),required:!0,style:{paddingLeft:"38px"}}),d.jsx(vh,{size:18,color:"var(--text-muted)",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)"}})]})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary",onClick:e,disabled:h,children:"Cancel"}),d.jsx("button",{type:"submit",className:"btn btn-primary",disabled:h,children:h?"Signing in...":"Login to Edit"})]})]})]})})}const r2=new Set(["about","researchInterests","responseTime","coverPhoto","profilePhoto"]);function i2({isOpen:t,onClose:e,sectionType:n,initialData:r,onSave:i}){const[s,o]=fe.useState({}),[l,u]=fe.useState(null),[h,p]=fe.useState(!1);if(fe.useEffect(()=>{if(t){if(r2.has(n)&&typeof r=="string"){o(r),u(n==="coverPhoto"||n==="profilePhoto"?r:null);return}r&&typeof r=="object"?(o({...r}),u(r.image||r.fileUrl||null)):(o({}),u(null))}},[r,n,t]),!t)return null;const m=(A,y)=>{o(w=>({...w,[A]:y}))},v=async A=>{const y=A.target.files[0];if(y){p(!0);try{const w=`portfolio/${n}/${Date.now()}-${y.name}`,I=await t2(y,w);u(I),o(n==="coverPhoto"||n==="profilePhoto"?I:n==="downloadCv"?P=>({...P,fileUrl:I,fileName:y.name}):n==="projects"?P=>({...P,iconImage:I}):P=>({...P,image:I}))}catch(w){console.error("File upload error:",w)}finally{p(!1)}}},R=A=>{A.preventDefault();let y;n==="coverPhoto"||n==="profilePhoto"?y=l||s:n==="about"||n==="responseTime"?y=s:n==="researchInterests"?y=typeof s=="string"?s:s.text||"":y=s,i(y),e()},D=()=>{switch(n){case"coverPhoto":case"profilePhoto":return d.jsxs("div",{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Upload New Image"}),d.jsx("input",{type:"file",accept:"image/*",onChange:v,className:"form-input",disabled:h}),h&&d.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"6px"},children:"Uploading..."})]}),l&&d.jsxs("div",{style:{marginTop:"14px",textAlign:"center"},children:[d.jsx("p",{className:"form-label",children:"Preview"}),d.jsx("img",{src:l,alt:"Preview",style:{maxHeight:"180px",borderRadius:n==="profilePhoto"?"50%":"8px",border:"1px solid var(--border-color)",objectFit:"cover"}})]})]});case"bio":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Full Name"}),d.jsx("input",{type:"text",className:"form-input",value:s.fullName||"",onChange:A=>m("fullName",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Primary Title / Designation"}),d.jsx("input",{type:"text",className:"form-input",value:s.title||"",onChange:A=>m("title",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Location Badge"}),d.jsx("input",{type:"text",className:"form-input",value:s.location||"",onChange:A=>m("location",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Phone Badge"}),d.jsx("input",{type:"text",className:"form-input",value:s.phone||"",onChange:A=>m("phone",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Availability Status Pill"}),d.jsx("input",{type:"text",className:"form-input",value:s.statusBadge||"",onChange:A=>m("statusBadge",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Short Bio Headline"}),d.jsx("textarea",{className:"form-textarea",rows:3,value:s.shortBio||"",onChange:A=>m("shortBio",A.target.value)})]})]});case"about":return d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"About Paragraph"}),d.jsx("textarea",{className:"form-textarea",rows:6,value:typeof s=="string"?s:s.about||"",onChange:A=>o(A.target.value),required:!0})]});case"socialMedia":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Platform Name"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"LinkedIn, GitHub, Scholar...",value:s.platform||"",onChange:A=>m("platform",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Display Label"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"LinkedIn",value:s.label||"",onChange:A=>m("label",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Profile URL"}),d.jsx("input",{type:"url",className:"form-input",placeholder:"https://...",value:s.url||"",onChange:A=>m("url",A.target.value),required:!0})]})]});case"experience":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Position / Job Title"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"CTO & Co-Founder",value:s.position||"",onChange:A=>m("position",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Company / Institute Name"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"ARI Software Lab",value:s.company||"",onChange:A=>m("company",A.target.value),required:!0})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Start Date"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"2022",value:s.startDate||"",onChange:A=>m("startDate",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"End Date"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"2024",value:s.isCurrent?"":s.endDate||"",onChange:A=>m("endDate",A.target.value),disabled:s.isCurrent})]})]}),d.jsxs("div",{className:"form-group",style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"checkbox",id:"isCurrent",checked:!!s.isCurrent,onChange:A=>m("isCurrent",A.target.checked)}),d.jsx("label",{htmlFor:"isCurrent",style:{fontSize:"0.9rem",cursor:"pointer"},children:"Currently Working Here"})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Description"}),d.jsx("textarea",{className:"form-textarea",rows:4,value:s.description||"",onChange:A=>m("description",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Related Link (Optional)"}),d.jsx("input",{type:"url",className:"form-input",placeholder:"https://...",value:s.link||"",onChange:A=>m("link",A.target.value)})]})]});case"researchFocus":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Research Title"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"TERRA: Temporal-Evolution RAG",value:s.title||"",onChange:A=>m("title",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Publication Status"}),d.jsxs("select",{className:"form-select",value:s.status||"Published",onChange:A=>m("status",A.target.value),children:[d.jsx("option",{value:"Published",children:"Published"}),d.jsx("option",{value:"Preprint",children:"Preprint"}),d.jsx("option",{value:"Under Review",children:"Under Review"}),d.jsx("option",{value:"In Progress",children:"In Progress"}),d.jsx("option",{value:"Completed",children:"Completed"})]})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"12px"},children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Journal / Conference Venue"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"IEEE / ArXiv",value:s.venue||"",onChange:A=>m("venue",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Year"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"2024",value:s.year||"",onChange:A=>m("year",A.target.value)})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Description"}),d.jsx("textarea",{className:"form-textarea",rows:4,value:s.description||"",onChange:A=>m("description",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Related Paper / Project Link"}),d.jsx("input",{type:"url",className:"form-input",placeholder:"https://arxiv.org/...",value:s.link||"",onChange:A=>m("link",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Keywords / Tags (Comma separated)"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"NLP, RAG, Temporal Reasoning",value:Array.isArray(s.keywords)?s.keywords.join(", "):s.keywords||"",onChange:A=>m("keywords",A.target.value.split(",").map(y=>y.trim()).filter(Boolean))})]})]});case"projects":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Project Title"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"ObsidianIDE",value:s.title||"",onChange:A=>m("title",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Icon Type"}),d.jsxs("select",{className:"form-select",value:s.icon||"code",onChange:A=>m("icon",A.target.value),children:[d.jsx("option",{value:"code",children:"Code"}),d.jsx("option",{value:"droplet",children:"Droplet"}),d.jsx("option",{value:"eye",children:"Eye"}),d.jsx("option",{value:"globe",children:"Globe"}),d.jsx("option",{value:"message-square",children:"Message"})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Description"}),d.jsx("textarea",{className:"form-textarea",rows:3,value:s.description||"",onChange:A=>m("description",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Primary Link (GitHub / Repo)"}),d.jsx("input",{type:"url",className:"form-input",placeholder:"https://github.com/...",value:s.link||"",onChange:A=>m("link",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Live Demo Link (Optional)"}),d.jsx("input",{type:"url",className:"form-input",placeholder:"https://demo.example.com",value:s.demoLink||"",onChange:A=>m("demoLink",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Tech Stack Tags (Comma separated)"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"React, Tauri, Monaco",value:Array.isArray(s.techStack)?s.techStack.join(", "):s.techStack||"",onChange:A=>m("techStack",A.target.value.split(",").map(y=>y.trim()).filter(Boolean))})]})]});case"education":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Degree Name"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"B.Sc. in Computer Science & Engineering",value:s.degree||"",onChange:A=>m("degree",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Institute Name"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"BUBT",value:s.institute||"",onChange:A=>m("institute",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Result / CGPA"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"CGPA: 3.85",value:s.result||"",onChange:A=>m("result",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Key Highlights / Honors"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"Dean's Honor List, AI focus",value:s.highlights||"",onChange:A=>m("highlights",A.target.value)})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Start Date"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"2021",value:s.startDate||"",onChange:A=>m("startDate",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"End Date"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"2025",value:s.endDate||"",onChange:A=>m("endDate",A.target.value)})]})]})]});case"skills":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Skill Category Title"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"Machine Learning & AI",value:s.category||"",onChange:A=>m("category",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Skills / Keywords (Comma separated)"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"PyTorch, TensorFlow, Keras, Scikit-Learn",value:Array.isArray(s.items)?s.items.join(", "):s.items||"",onChange:A=>m("items",A.target.value.split(",").map(y=>y.trim()).filter(Boolean)),required:!0})]})]});case"researchInterests":return d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Research Interest Tag"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"Natural Language Processing (NLP)",value:typeof s=="string"?s:s.text||"",onChange:A=>o(A.target.value),required:!0})]});case"contact":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Contact Type"}),d.jsxs("select",{className:"form-select",value:s.type||"email",onChange:A=>m("type",A.target.value),children:[d.jsx("option",{value:"email",children:"Email"}),d.jsx("option",{value:"phone",children:"Phone"}),d.jsx("option",{value:"location",children:"Location"})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Display Label"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"Email",value:s.label||"",onChange:A=>m("label",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Value"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"sayhitosaadik@gmail.com",value:s.value||"",onChange:A=>m("value",A.target.value),required:!0})]})]});case"responseTime":return d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Expected Response Time Note"}),d.jsx("input",{type:"text",className:"form-input",placeholder:"Response time: ~24 hours",value:typeof s=="string"?s:s.text||"",onChange:A=>o(A.target.value),required:!0})]});case"downloadCv":return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Upload CV Document (PDF)"}),d.jsx("input",{type:"file",accept:".pdf,application/pdf",onChange:v,className:"form-input",disabled:h}),h&&d.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"6px"},children:"Uploading..."})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"File URL or Path"}),d.jsx("input",{type:"text",className:"form-input",value:s.fileUrl||"",onChange:A=>m("fileUrl",A.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Download File Name"}),d.jsx("input",{type:"text",className:"form-input",value:s.fileName||"Zafor_Saadik_CV.pdf",onChange:A=>m("fileName",A.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Button Label Text"}),d.jsx("input",{type:"text",className:"form-input",value:s.buttonText||"Download CV",onChange:A=>m("buttonText",A.target.value),required:!0})]})]});default:return d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"This section does not have an edit form configured yet."})}},b=()=>n==="coverPhoto"?"Edit Cover Photo":n==="profilePhoto"?"Edit Profile Photo":n==="bio"?"Edit Bio Info":n==="about"?"Edit About Section":n==="downloadCv"?"Edit Download CV":n==="responseTime"?"Edit Response Time":r?"Edit Section Item":"Add New Item";return d.jsx("div",{className:"modal-overlay",onClick:e,children:d.jsxs("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h3",{className:"modal-title",children:b()}),d.jsx("button",{className:"admin-edit-btn",onClick:e,children:d.jsx(kv,{size:18})})]}),d.jsxs("form",{onSubmit:R,children:[D(),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary",onClick:e,disabled:h,children:"Cancel"}),d.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:h,children:[d.jsx(fS,{size:16})," Save Changes"]})]})]})]})})}function s2(){var A;const[t,e]=fe.useState(null),[n,r]=fe.useState(!1),[i,s]=fe.useState(!0),[o,l]=fe.useState(!1),[u,h]=fe.useState({isOpen:!1,sectionType:null,initialData:null,editIndex:null}),p=fe.useRef(!1);fe.useEffect(()=>{const y=ZN(I=>{p.current=!0,e(I),s(!1)}),w=JN(r);return()=>{y(),w()}},[]),fe.useEffect(()=>{if(!(!t||i)){if(p.current){p.current=!1;return}e2(t).catch(y=>{console.error("Failed to persist portfolio data:",y)})}},[t,i]);const m=async()=>{try{await XN(),r(!1)}catch(y){console.error("Logout failed:",y)}},v=(y,w=null,I=null)=>{h({isOpen:!0,sectionType:y,initialData:w,editIndex:I})},R=()=>{h({isOpen:!1,sectionType:null,initialData:null,editIndex:null})},D=y=>{const{sectionType:w,editIndex:I,initialData:P}=u;e(L=>{const V={...L};switch(w){case"coverPhoto":V.coverPhoto=y;break;case"profilePhoto":V.profilePhoto=y;break;case"bio":V.bio={...L.bio,...y};break;case"about":V.about=typeof y=="string"?y:y.about;break;case"socialMedia":if(P!=null&&P.id)V.socialMedia=L.socialMedia.map(E=>E.id===P.id?{...E,...y}:E);else{const E={id:`sm-${Date.now()}`,...y};V.socialMedia=[...L.socialMedia||[],E]}break;case"experience":{const E=y.isCurrent?{...y,endDate:""}:y;if(P!=null&&P.id)V.experience=L.experience.map(_=>_.id===P.id?{..._,...E}:_);else{const _={id:`exp-${Date.now()}`,...E};V.experience=[...L.experience||[],_]}}break;case"researchFocus":if(P!=null&&P.id)V.researchFocus=L.researchFocus.map(E=>E.id===P.id?{...E,...y}:E);else{const E={id:`rf-${Date.now()}`,...y};V.researchFocus=[...L.researchFocus||[],E]}break;case"projects":if(P!=null&&P.id)V.projects=L.projects.map(E=>E.id===P.id?{...E,...y}:E);else{const E={id:`proj-${Date.now()}`,...y};V.projects=[...L.projects||[],E]}break;case"education":if(P!=null&&P.id)V.education=L.education.map(E=>E.id===P.id?{...E,...y}:E);else{const E={id:`edu-${Date.now()}`,...y};V.education=[...L.education||[],E]}break;case"skills":if(I!==null&&I>=0){const E=[...L.skills];E[I]=y,V.skills=E}else V.skills=[...L.skills||[],y];break;case"researchInterests":{const E=typeof y=="string"?y:y.text;if(I!==null&&I>=0){const _=[...L.researchInterests];_[I]=E,V.researchInterests=_}else V.researchInterests=[...L.researchInterests||[],E]}break;case"contact":if(P!=null&&P.id)V.contact=L.contact.map(E=>E.id===P.id?{...E,...y}:E);else{const E={id:`c-${Date.now()}`,...y};V.contact=[...L.contact||[],E]}break;case"responseTime":V.responseTime=typeof y=="string"?y:y.text;break;case"downloadCv":V.downloadCv={...L.downloadCv,...y,lastUpdated:new Date().getFullYear().toString()};break}return V})},b=(y,w)=>{window.confirm("Are you sure you want to delete this item?")&&e(I=>{const P={...I};switch(y){case"socialMedia":P.socialMedia=I.socialMedia.filter(L=>L.id!==w);break;case"experience":P.experience=I.experience.filter(L=>L.id!==w);break;case"researchFocus":P.researchFocus=I.researchFocus.filter(L=>L.id!==w);break;case"projects":P.projects=I.projects.filter(L=>L.id!==w);break;case"education":P.education=I.education.filter(L=>L.id!==w);break;case"skills":P.skills=I.skills.filter((L,V)=>V!==w);break;case"researchInterests":P.researchInterests=I.researchInterests.filter((L,V)=>V!==w);break;case"contact":P.contact=I.contact.filter(L=>L.id!==w);break}return P})};return i||!t?d.jsx("div",{className:"loading-screen",children:"Loading portfolio..."}):d.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[d.jsx(IS,{isAdmin:n,onOpenLogin:()=>l(!0),onLogout:m,downloadCvData:t.downloadCv,onEditCv:()=>v("downloadCv",t.downloadCv)}),d.jsxs("main",{className:"container",style:{flex:1},children:[d.jsx(SS,{data:t,isAdmin:n,onEditSection:y=>v(y,t[y]),onAddSocial:()=>v("socialMedia"),onEditSocial:y=>v("socialMedia",y),onDeleteSocial:y=>b("socialMedia",y)}),d.jsxs("div",{className:"portfolio-grid",children:[d.jsxs("div",{children:[d.jsx(kS,{aboutText:t.about,isAdmin:n,onEdit:()=>v("about",t.about)}),d.jsx(AS,{experiences:t.experience,isAdmin:n,onAdd:()=>v("experience"),onEdit:y=>v("experience",y),onDelete:y=>b("experience",y)}),d.jsx(RS,{researchItems:t.researchFocus,isAdmin:n,onAdd:()=>v("researchFocus"),onEdit:y=>v("researchFocus",y),onDelete:y=>b("researchFocus",y)}),d.jsx(CS,{projects:t.projects,isAdmin:n,onAdd:()=>v("projects"),onEdit:y=>v("projects",y),onDelete:y=>b("projects",y)})]}),d.jsxs("div",{children:[d.jsx(PS,{educationList:t.education,isAdmin:n,onAdd:()=>v("education"),onEdit:y=>v("education",y),onDelete:y=>b("education",y)}),d.jsx(xS,{skills:t.skills,isAdmin:n,onAdd:()=>v("skills"),onEdit:(y,w)=>v("skills",y,w),onDelete:y=>b("skills",y)}),d.jsx(NS,{interests:t.researchInterests,isAdmin:n,onAdd:()=>v("researchInterests"),onEdit:(y,w)=>v("researchInterests",y,w),onDelete:y=>b("researchInterests",y)}),d.jsx(DS,{contactList:t.contact,responseTime:t.responseTime,isAdmin:n,onAdd:()=>v("contact"),onEdit:y=>v("contact",y),onDelete:y=>b("contact",y),onEditResponseTime:()=>v("responseTime",t.responseTime)})]})]})]}),d.jsx(bS,{name:((A=t.bio)==null?void 0:A.fullName)||"Zafor Saadik",socialMedia:t.socialMedia}),d.jsx(n2,{isOpen:o,onClose:()=>l(!1),onLoginSuccess:()=>r(!0)}),d.jsx(i2,{isOpen:u.isOpen,onClose:R,sectionType:u.sectionType,initialData:u.initialData,onSave:D})]})}Ac.createRoot(document.getElementById("root")).render(d.jsx(_y.StrictMode,{children:d.jsx(s2,{})}));
