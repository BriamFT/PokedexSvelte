import{S as $,i as v,s as g,e as _,t as j,c as h,a as m,g as A,d as c,b as u,f,D as E,E as p,F as w,G as N,j as H,k as I,m as S,n as q,o as C,H as D,I as F,J as G,x as b,u as x,v as J}from"../chunks/vendor-aad12eed.js";import{b as d}from"../chunks/paths-28a87002.js";function y(r,t,o){const a=r.slice();return a[1]=t[o],a}function k(r){let t,o=r[1].label+"",a,s;return{c(){t=_("a"),a=j(o),this.h()},l(n){t=h(n,"A",{class:!0,href:!0});var e=m(t);a=A(e,o),e.forEach(c),this.h()},h(){u(t,"class","mx-4 text-lg"),u(t,"href",s=r[1].endpoint)},m(n,e){f(n,t,e),E(t,a)},p,d(n){n&&c(t)}}}function M(r){let t,o=r[0],a=[];for(let s=0;s<o.length;s+=1)a[s]=k(y(r,o,s));return{c(){t=_("nav");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=h(s,"NAV",{class:!0});var n=m(t);for(let e=0;e<a.length;e+=1)a[e].l(n);n.forEach(c),this.h()},h(){u(t,"class","flex justify-center w-full mt-6")},m(s,n){f(s,t,n);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(s,[n]){if(n&1){o=s[0];let e;for(e=0;e<o.length;e+=1){const l=y(s,o,e);a[e]?a[e].p(l,n):(a[e]=k(l),a[e].c(),a[e].m(t,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=o.length}},i:p,o:p,d(s){s&&c(t),w(a,s)}}}function P(r){return[[{endpoint:`${d}/`,label:"Home"},{endpoint:`${d}/pokedex`,label:"Pokedex"},{endpoint:`${d}/about`,label:"About"}]]}class V extends ${constructor(t){super();v(this,t,P,M,g,{})}}function z(r){let t,o,a,s;t=new V({});const n=r[1].default,e=N(n,r,r[0],null);return{c(){H(t.$$.fragment),o=I(),a=_("main"),e&&e.c(),this.h()},l(l){S(t.$$.fragment,l),o=q(l),a=h(l,"MAIN",{class:!0});var i=m(a);e&&e.l(i),i.forEach(c),this.h()},h(){u(a,"class","p-4 max-w-6xl mx-auto")},m(l,i){C(t,l,i),f(l,o,i),f(l,a,i),e&&e.m(a,null),s=!0},p(l,[i]){e&&e.p&&(!s||i&1)&&D(e,n,l,l[0],s?G(n,l[0],i,null):F(l[0]),null)},i(l){s||(b(t.$$.fragment,l),b(e,l),s=!0)},o(l){x(t.$$.fragment,l),x(e,l),s=!1},d(l){J(t,l),l&&c(o),l&&c(a),e&&e.d(l)}}}function B(r,t,o){let{$$slots:a={},$$scope:s}=t;return r.$$set=n=>{"$$scope"in n&&o(0,s=n.$$scope)},[s,a]}class O extends ${constructor(t){super();v(this,t,B,z,g,{})}}export{O as default};