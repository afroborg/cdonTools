(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t){},32:function(e,t,a){e.exports=a(55)},52:function(e,t){},53:function(e,t){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),l=a(14),i=(a(37),a(6)),c=a(7),o=a(9),u=a(8),d=a(10),m=a(12),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",{className:"text-center pt-4 font-weight-bold"},"CDON.COM"),r.a.createElement("p",{className:"text-center pb-2 font-italic"},"Tools"),r.a.createElement("ul",{className:"nav nav-tabs justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{className:"nav-link",activeClassName:"active",to:"/generator"},"Article Number generator")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{className:"nav-link",activeClassName:"active",to:"/split"},"File splitter"))))}}]),t}(n.Component),h=a(11),f=a.n(h),b=a(17),v=a(13),E=a(19),g=a.n(E),w=a(3),O=a.n(w),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFileChosen=function(e){a.setState({showUploadSpinner:!0});var t=e.target.files[0],n=new FileReader,r="";n.onload=function(){var e=Object(b.a)(f.a.mark(function e(t){var n,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Uint8Array(t.target.result),s=O.a.read(n,{type:"array"}),Object.keys(s.Sheets).forEach(function(e){Object.keys(s.Sheets[e]).forEach(function(){var t=Object(b.a)(f.a.mark(function t(a){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.includes("!")||"number"!=typeof s.Sheets[e][a].v||r.includes(s.Sheets[e][a].v)||(r+="https://cdon.com/excel/upload/p-".concat(s.Sheets[e][a].v," \n"));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}),e.next=5,a.setState({links:r});case 5:return e.next=7,a.convertToId(a.state.links);case 7:a.setState({showUploadSpinner:!1});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.readAsArrayBuffer(t)},a.state={links:"",ids:a.props.ids,nrOfIds:0,showUploadSpinner:!1},a.inputHandler=a.inputHandler.bind(Object(v.a)(a)),a.getExcel=a.getExcel.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"inputHandler",value:function(e){this.setState({links:e.target.value}),this.convertToId(this.state.links)}},{key:"convertToId",value:function(e){var t=this,a=e.split(/\r?\n/),n=0,r="ProductId\n";a.forEach(function(e){if(e.includes("http")){n++;var a=t.splitString(e);a&&(r+=a+"\n")}}),this.setState({ids:r,nrOfIds:n}),this.props.setIds(r)}},{key:"splitString",value:function(e){if(e.split("-")[0]!==e){var t=e.split("-"),a=t[t.length-1];return"p"===a[0]?a.substr(1):"p"===t[t.length-2][0]?t[t.length-2].substr(1):t[t.length-1]}}},{key:"getExcel",value:function(e){e.preventDefault();var t="delete".concat((new Date).toLocaleString(),".xlsx"),a=[];this.state.ids.split(/\r?\n/).forEach(function(e){a.push([e])});var n=O.a.utils.book_new(),r=O.a.utils.aoa_to_sheet(a);O.a.utils.book_append_sheet(n,r,"SheetJS"),O.a.writeFile(n,t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"links",className:"font-weight-bold"},"Links"," ",r.a.createElement("span",{className:"badge badge-primary",id:"nrOfStrings"},this.state.nrOfIds+(this.state.nrOfIds>1?"st":""))),r.a.createElement(g.a,{rows:2,maxRows:20,name:"links",placeholder:"Ex. https://cdon.se/kategori/produkt-titel-p00000000",className:"form-control textarea-links mb-2",id:"links",value:this.state.links,onChange:this.inputHandler,onKeyUp:this.inputHandler}),r.a.createElement("label",{htmlFor:"importFile",href:"#",className:"btn btn-outline-success btn-sm"},this.state.showUploadSpinner?r.a.createElement("span",{className:"spinner-border spinner-border-sm"}):null," ","Upload excel file"),r.a.createElement("input",{type:"file",style:{display:"none"},name:"importFile",id:"importFile",onChange:this.handleFileChosen}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"output-ids",className:"font-weight-bold"},"Article number(s)"," ",r.a.createElement("button",{href:"/",className:"btn btn-outline-info btn-sm",onClick:this.getExcel},"Download excel")),r.a.createElement(g.a,{rows:2,maxRows:20,name:"output-ids",id:"output-ids",className:"form-control",value:this.state.ids,readOnly:!0})))))}}]),t}(n.Component),k=a(24),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).downloadFile=function(){var e="delete".concat(a.props.index,"-").concat((new Date).toLocaleString(),".xlsx"),t=[["ProductId"]];a.props.data.forEach(function(e){parseInt(e)&&t.push([e])});var n=O.a.utils.book_new(),r=O.a.utils.aoa_to_sheet(t);O.a.utils.book_append_sheet(n,r,"CDON Tools"),O.a.writeFile(n,e)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"excel"},r.a.createElement("button",{onClick:this.downloadFile},r.a.createElement("img",{src:"https://www.freepngimg.com/thumb/microsoft/26716-4-excel-transparent.png",alt:"excel"}),r.a.createElement("p",null,this.props.index+1)))}}]),t}(n.Component),N=(a(54),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).calcIds=function(){var e=a.state.ids.split(/\r?\n/),t=0;return e.forEach(function(e){t++}),t},a.handleFileChosen=function(e){a.setState({showUploadSpinner:!0});var t=e.target.files[0],n=new FileReader,r="";n.onload=function(){var e=Object(b.a)(f.a.mark(function e(t){var n,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Uint8Array(t.target.result),s=O.a.read(n,{type:"array"}),Object.keys(s.Sheets).forEach(function(e){Object.keys(s.Sheets[e]).forEach(function(){var t=Object(b.a)(f.a.mark(function t(a){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.includes("!")||"number"!=typeof s.Sheets[e][a].v||r.includes(s.Sheets[e][a].v)||8!==s.Sheets[e][a].v.toString().length||(r+="".concat(s.Sheets[e][a].v," \n"));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}),e.next=5,a.setState({ids:r});case 5:a.setState({showUploadSpinner:!1,nrOfIds:a.calcIds()}),a.generateExcelData();case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.readAsArrayBuffer(t)},a.generateExcelData=function(){for(var e=[],t=1;t<Math.ceil(a.state.nrOfIds/1e3)+1;t++)e.push(a.state.ids.split(/\r?\n/).slice(1e3*(t-1),1e3*t)),a.setState({files:e})},a.getGeneratorData=function(){a.setState({ids:a.props.ids})},a.state={ids:"",nrOfIds:0,showUploadSpinner:!1,files:[]},a.inputHandler=a.inputHandler.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"inputHandler",value:function(e){var t;this.setState((t={},Object(k.a)(t,e.target.name,e.target.value),Object(k.a)(t,"nrOfIds",this.calcIds()),t)),this.generateExcelData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"ids",className:"font-weight-bold"},"Ids ",r.a.createElement("span",{className:"badge badge-primary",id:"nrOfStrings"},this.state.nrOfIds+(this.state.nrOfIds>1?"st":""))),r.a.createElement(g.a,{rows:2,maxRows:20,name:"ids",placeholder:"Ex. xxxxxx",className:"form-control textarea-links mb-2",id:"ids",value:this.state.ids,onChange:this.inputHandler}),r.a.createElement("label",{htmlFor:"importFile",href:"#",className:"btn btn-outline-success btn-sm"},this.state.showUploadSpinner?r.a.createElement("span",{className:"spinner-border spinner-border-sm"}):null," Upload excel file"),r.a.createElement("input",{type:"file",style:{display:"none"},name:"importFile",id:"importFile",onChange:this.handleFileChosen}),r.a.createElement("label",{className:"btn btn-outline-primary btn-sm ml-2 ".concat(this.props.ids?"":"disabled"),onClick:this.getGeneratorData},"H\xe4mta data fr\xe5n generator")))),this.state.files.length>0?r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",null,"Excelfiler (",this.state.files.length,"):"),r.a.createElement("div",{className:"excelfiles"},this.state.files.map(function(e,t){return r.a.createElement("div",{className:"excelContainer"},r.a.createElement(y,{data:e,index:t}))})))):null)}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setIds=function(e){a.setState({ids:e})},a.state={ids:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(l.b,{basename:"/cdonTools"},r.a.createElement(p,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/generator",render:function(){return r.a.createElement(x,{ids:e.state.ids,setIds:e.setIds})}}),r.a.createElement(m.b,{path:"/split",component:function(){return r.a.createElement(N,{ids:e.state.ids,setIds:e.setIds})}}),r.a.createElement(m.a,{to:"/generator"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(s.render)(r.a.createElement(l.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.51565f89.chunk.js.map