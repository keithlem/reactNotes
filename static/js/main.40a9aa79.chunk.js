(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(52)},45:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),l=n.n(o),c=(n(45),n(46),n(47),n(14)),i=n(55),u=n(12),m=n(10);var s=function(e){var t=e.onClick;return r.a.createElement(m.a,{style:{backgroundColor:"black",borderColor:"black",width:"30%",height:"30%",alignSelf:"center",marginTop:"5%",marginBottom:"15%"},onClick:t},"New")},d=n(16),f=n(26),v=n(20);var h=function(e){var t=e.show,n=e.title,a=e.message,o=e.onCancel,l=e.onConfirm,c=e.type;return r.a.createElement(v.a,{show:t,onHide:o},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,null,n)),r.a.createElement(v.a.Body,null,a),r.a.createElement(v.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:o},"Cancel"),r.a.createElement(m.a,{variant:"remove"===c?"danger":"primary",onClick:l},"remove"===c?"Remove":"Confirm")))};var y=function(e){var t=e.content,n=e.update,o=e.remove,l=Object(a.useState)(!1),i=Object(c.a)(l,2),s=i[0],v=i[1],y=Object(a.useState)(t.title),E=Object(c.a)(y,2),g=E[0],b=E[1],p=Object(a.useState)(t.body),w=Object(c.a)(p,2),C=w[0],k=w[1],O=Object(a.useState)(!1),j=Object(c.a)(O,2),N=j[0],S=j[1],B=function(e){e.preventDefault(),n(Object(d.a)({},t,{title:g,body:C})),v(!1)};return s?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{show:N,title:"Confirm remove",message:"Are you sure you want to remove the note?",onCancel:function(){return S(!1)},onConfirm:o,type:"remove"}),r.a.createElement(f.a,{noValidate:!0,onSubmit:B},r.a.createElement(u.a,{style:{width:"100%",height:"20rem",margin:"4px",marginBottom:"8px"}},r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Title,null,r.a.createElement(f.a.Control,{as:"input",onChange:function(e){return b(e.target.value)},defaultValue:t.title})),r.a.createElement(u.a.Text,null,r.a.createElement(f.a.Control,{as:"textarea",onChange:function(e){return k(e.target.value)},defaultValue:t.body,style:{height:"11rem",marginBottom:"1rem"}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(m.a,{key:"remove",variant:"outline-danger",onClick:function(){return S(!0)}},"Delete"),r.a.createElement(m.a,{key:"save",type:"submit"},"Save")))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{show:N,title:"Confirm remove",message:"Are you sure you want to remove the note?",onCancel:function(){return S(!1)},onConfirm:o,type:"remove"}),r.a.createElement(u.a,{style:{width:"100%"}},r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Title,null,t.title),r.a.createElement("div",{style:{overflow:"auto",height:"12rem",marginBottom:"1rem",whiteSpace:"pre-line"}},r.a.createElement(u.a.Text,null,t.body)),r.a.createElement(m.a,{style:{backgroundColor:"black",borderColor:"black"},onClick:function(){v(!0)}},"Edit"),r.a.createElement(m.a,{key:"remove",variant:"outline-danger",onClick:function(){return S(!0)}},"Delete"))))};function E(e,t,n){var a=e.findIndex(function(e){return e.id===t});return-1===a?e:e.slice(0,a).concat(Object(d.a)({},n,{id:t})).concat(e.slice(a+1))}function g(e,t){var n=e.findIndex(function(e){return e.id===t});return-1===n?e:e.slice(0,n).concat(e.slice(n+1))}function b(e,t){switch(t.type){case"addNote":return Object(d.a)({},e,{hash:e.hash+1,notes:(n=e.notes,a=e.lastId+1,r=t.content,n.concat(Object(d.a)({},r,{id:a}))),lastId:e.lastId+1});case"modifyNote":return null==t.id?e:Object(d.a)({},e,{hash:e.hash+1,notes:E(e.notes,t.id,t.content)});case"removeNote":return null==t.id?e:Object(d.a)({},e,{hash:e.hash+1,notes:g(e.notes,t.id)});default:throw new Error("unknown action: "+t.type)}var n,a,r}var p="appState";function w(){console.log("loading");var e=localStorage.getItem(p)||"";try{e=JSON.parse(e)}catch(t){e=null}return e||{hash:0,lastId:0,notes:[]}}var C=function(){var e,t=(e=w,Object(a.useReducer)(b,null,e)),n=Object(c.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)(function(){!function(e){console.log("saving: ",e.hash),localStorage.setItem(p,JSON.stringify(e))}(r)},[r]),[r,o]},k=n(27);var O=function(){var e=C(),t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(s,{onClick:function(){return a({type:"addNote",content:{title:"New",body:""}})}}),n.notes.map(function(e){return r.a.createElement("ul",{style:{listStyleType:"none",width:"45%",marginLeft:"25%",marginRight:"35%"}},r.a.createElement("li",{style:{color:"black"},key:e.id},r.a.createElement(k.a,{defaultActiveKey:"0"},r.a.createElement(u.a,null,r.a.createElement(k.a.Toggle,{as:u.a.Header,eventKey:"1"},e.title),r.a.createElement(k.a.Collapse,{eventKey:"1"},r.a.createElement(y,{content:e,update:function(t){return a({type:"modifyNote",id:e.id,content:t})},remove:function(){return a({type:"removeNote",id:e.id})}}))))))})))};var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Welcome To Notebook"),r.a.createElement("h5",null,"Click New to begin taking notes!"),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.40a9aa79.chunk.js.map