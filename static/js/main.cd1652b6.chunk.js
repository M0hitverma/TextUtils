(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dard":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggle,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",forhtml:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"my-3 container",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#2c4262":"white"}},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},e.heading),l.a.createElement("textarea",{className:"form-control",value:r,style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#2c4262":"white"},onChange:function(e){o(e.target.value)},id:"exampleFormControlTextarea1",rows:"8"}),l.a.createElement("button",{className:"btn btn-primary my-2  mx-2",onClick:function(){o(r.toUpperCase()),r.length>0?e.showalert("Converted to UpperCase","success"):e.showalert("enter text first","danger")}}," Convert to UpperCase"),l.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){o(r.toLowerCase()),r.length>0?e.showalert("Converted to LowerCase! ","success"):e.showalert("enter text first","danger")}},"Convrt to LowerCase "),l.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){o(""),r.length>0?e.showalert("Text Cleared!","success"):e.showalert("enter text first","danger")}}," clear"),l.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){o(r.split("").reverse().join("")),r.length>0?e.showalert("Reverse paragraph","success"):e.showalert("enter text first","danger")}}," reverse")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#2c4262":"white"}},l.a.createElement("h1",null," Your Text Summary"),l.a.createElement("p",null," ",r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null," ",.008*r.split(" ").length," minutes required"),l.a.createElement("p",null," ",r.split(".").length," word per sentence"),l.a.createElement("h1",null,"Preview"),l.a.createElement("p",null," ",r.length>0?r:"Enter Somethig to Preview it here"," ")))}function i(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type),"  :  ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Textutils1",abouttitle:"About us",mode:a,toggle:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#2c4262",g("dark mode is enabled","success")):(r("light"),document.body.style.backgroundColor="white",g("light mode is enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement(m,{heading:"Enter Your Text",mode:a,showalert:g}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.cd1652b6.chunk.js.map