(this["webpackJsonpreact-hook-test"]=this["webpackJsonpreact-hook-test"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),s=c(4),a=c.n(s),r=(c(9),c.p+"static/media/logo.6ce24c58.svg"),l=(c(10),c(3)),i=c(0);var j=function(){var e=Object(n.useContext)(u),t=Object(n.useState)(e.name),c=Object(l.a)(t,2),o=c[0],s=c[1],a=Object(n.useState)(e.count),r=Object(l.a)(a,2),j=r[0],d=r[1];return Object(n.useEffect)((function(){fetch("http://localhost:3001/data/1/").then((function(e){return e.json()})).then((function(e){console.log(e),s(e.name),d(e.count)}),(function(e){console.log(e);var t=0;s("\u540d\u7121\u3057"),d(t)}))}),[]),Object(n.useEffect)((function(){document.title="React Hooks\u4e8b\u59cb\u3081 - ".concat(o,"\u304c ").concat(j," \u5339")})),Object(i.jsxs)("div",{className:"reactHookTest",children:[Object(i.jsx)("h2",{children:"React Hooks\u4e8b\u59cb\u3081"}),Object(i.jsxs)("p",{children:[o,"\u304c ",j," \u5339"]}),Object(i.jsx)("button",{onClick:function(){return d(j+1)},children:"\u6570\u3048\u308b"})]})},u=Object(n.createContext)(),d={};console.log(d);var h=function(){return d={name:"\u5c71\u7f8a",count:null},console.log(d),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:["Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(i.jsx)(u.Provider,{value:d,children:Object(i.jsx)(j,{})})]})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),b()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.f8fe7573.chunk.js.map