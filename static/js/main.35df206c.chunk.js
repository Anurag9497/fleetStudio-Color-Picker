(this["webpackJsonpfleet-studio"]=this["webpackJsonpfleet-studio"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(4),i=n.n(r),a=(n(9),n(2)),u=(n(10),n(11),n(0));var s=function(t){var e=t.handleColourData,n=Object(c.useState)(" "),o=Object(a.a)(n,2),r=o[0],i=o[1];return Object(u.jsxs)("div",{id:"search",children:[Object(u.jsx)("input",{id:"search-input",type:"text",value:r,onChange:function(t){i(t.target.value)}}),Object(u.jsx)("button",{id:"search-button",type:"button",onClick:function(){return e(r,i)},children:"Search"})]})};n(13);var l=function(t){var e=t.colour,n=t.colourTag,c=t.title;return Object(u.jsxs)("div",{id:"card",title:c,children:[Object(u.jsx)("div",{id:"card-body",style:e}),Object(u.jsx)("div",{id:"card-tag",children:n})]})};var d=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{id:"title",children:"Color Picker"}),Object(u.jsx)("div",{id:"display-color",children:n.map((function(t,e){return Object(u.jsx)(l,{colour:{backgroundColor:t.hex},colourTag:t.hex,title:t.name},e)}))}),Object(u.jsx)(s,{handleColourData:function(t,e){fetch("https://api.color.pizza/v1/names/".concat(t)).then((function(t){if(200===t.status)return t.json();throw Error("Colour Not Found !")})).then((function(t){var n=t.colors.slice(0,50);o(n),e(" ")})).catch((function(t){return alert(t)}))}})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),j()}],[[14,1,2]]]);
//# sourceMappingURL=main.35df206c.chunk.js.map