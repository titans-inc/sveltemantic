function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){const o=n.subscribe(e);t.$$.on_destroy.push(o.unsubscribe?()=>o.unsubscribe():o)}function i(t,n,e){if(t){const o=a(t,n,e);return t[0](o)}}function a(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function f(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function l(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function d(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t){for(;t.previousSibling;)t.parentNode.removeChild(t.previousSibling)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function x(){return b("")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function w(t,n){for(const e in n)"style"===e?t.style.cssText=n[e]:e in t?t[e]=n[e]:v(t,e,n[e])}function E(t){return Array.from(t.childNodes)}function N(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)}function S(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return b(n)}function k(t,n){n=""+n,t.data!==n&&(t.data=n)}function A(t,n,e){t.classList[e?"add":"remove"](n)}let C;function j(t){C=t}function L(){if(!C)throw new Error("Function called outside component initialization");return C}function T(t,n){L().$$.context.set(t,n)}function q(t){return L().$$.context.get(t)}function z(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const B=[],F=[],O=[],D=[],G=Promise.resolve();let H=!1;function I(t){O.push(t)}function J(){const t=new Set;do{for(;B.length;){const t=B.shift();j(t),K(t.$$)}for(;F.length;)F.pop()();for(let n=0;n<O.length;n+=1){const e=O[n];t.has(e)||(e(),t.add(e))}O.length=0}while(B.length);for(;D.length;)D.pop()();H=!1}function K(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(I))}const M=new Set;let P;function Q(){P={r:0,c:[],p:P}}function R(){P.r||r(P.c),P=P.p}function U(t,n){t&&t.i&&(M.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),P.c.push(()=>{M.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function W(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function X(t,n,o){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s.m(n,o),I(()=>{const n=u.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(I)}function Y(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function Z(t,n){t.$$.dirty||(B.push(t),H||(H=!0,G.then(J)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function tt(n,e,c,s,u,i){const a=C;j(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=c?c(n,f,(t,e)=>{l.ctx&&u(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&Z(n,t))}):f,l.update(),d=!0,r(l.before_update),l.fragment=s(l.ctx),e.target&&(e.hydrate?l.fragment.l(E(e.target)):l.fragment.c(),e.intro&&U(n.$$.fragment),X(n,e.target,e.anchor),J()),j(a)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{C as A,k as B,n as C,W as D,T as E,q as F,_ as G,z as H,w as I,l as J,h as K,nt as S,y as a,E as b,N as c,S as d,g as e,p as f,v as g,$ as h,tt as i,d as j,A as k,m as l,i as m,t as n,X as o,f as p,a as q,U as r,s,b as t,V as u,Y as v,u as w,Q as x,R as y,x as z};
