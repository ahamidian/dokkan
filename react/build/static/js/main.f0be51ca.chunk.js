(this["webpackJsonptaak-front"]=this["webpackJsonptaak-front"]||[]).push([[0],{302:function(e,t,a){e.exports=a.p+"static/media/typo.bdb42b33.png"},358:function(e,t,a){e.exports=a(655)},363:function(e,t,a){},364:function(e,t,a){},655:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(363),a(305)),i=a(35),s=a(72),m=(a(364),a(11)),u=a(275),d=a.n(u),f=a(36),p=a(39),b=a(40),g=a(190),h=a.n(g),E=function(){function e(){Object(p.a)(this,e)}return Object(b.a)(e,[{key:"getHeaders",value:function(e){var t={},a=localStorage.getItem("access");return e&&null!=a&&(t.Authorization="Bearer  ".concat(a)),t}},{key:"method",value:function(e,t,a,n){var r,c,l=this;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r={method:e,url:t},a&&(r={method:e,url:t,data:a}),"http://dokkan.co/api/",c=this.getHeaders(n),o.abrupt("return",new Promise((function(e,t){return h.a.create({baseURL:"http://dokkan.co/api/",timeout:5e4}).request(Object(f.a)({},r,{headers:c,xsrfHeaderName:"X-CSRFToken",xsrfCookieName:"csrftoken"})).then((function(t){return e(t)})).catch((function(a){if(a.response&&401===a.response.status&&!a.config._retry&&!a.config.url.includes("token/refresh/")){var n=a.config;return n._retry=!0,l.post("token/refresh/",{refresh:localStorage.getItem("refresh")}).then((function(a){if(201===a.status||200===a.status)return localStorage.setItem("access",a.data.access),n.headers.Authorization="Bearer  ".concat(a.data.access),h()(n).then((function(t){return e(t)})).catch((function(e){return t(e)}))})).catch((function(e){console.log(e),t(e)}))}a.response&&401===a.response.status&&a.config.url.includes("token/refresh/")?(localStorage.removeItem("access"),localStorage.removeItem("refresh"),window.location.reload()):t(a)}))})));case 5:case"end":return o.stop()}}),null,this)}},{key:"post",value:function(e,t,a){return this.method("post",e,t,a)}},{key:"get",value:function(e,t){return this.method("get",e,null,t)}},{key:"put",value:function(e,t,a){return this.method("put",e,t,a)}},{key:"patch",value:function(e,t,a){return this.method("patch",e,t,a)}},{key:"delete",value:function(e,t){return this.method("delete",e,null,t)}}]),e}(),O=function(e){return new E(e)},j=a(703),y=a(218),k=a(149),v=a(731),x=a(708),w=a(47),S=Object(y.a)((function(e){return{root:{marginTop:e.spacing(5)},button:{width:"100%"},paper:{padding:e.spacing(2),width:"500px",paddingBottom:e.spacing(4)}}}));function C(){var e=S(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),u=i[0],d=i[1],f=Object(s.g)(),p=Object(w.useSnackbar)(),b=p.enqueueSnackbar;p.closeSnackbar;return r.a.createElement(j.a,{container:!0,justify:"center",className:e.root},r.a.createElement(k.a,{className:e.paper},r.a.createElement("h3",null,"\u0648\u0631\u0648\u062f"),r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(v.a,{style:{width:"100%"},label:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",variant:"outlined",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(v.a,{style:{width:"100%"},label:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",type:"password",variant:"outlined",value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"contained",color:"primary",size:"large",onClick:function(){O(!1).post("token/",{username:c,password:u}).then((function(e){localStorage.setItem("access",e.data.access),localStorage.setItem("refresh",e.data.refresh),localStorage.setItem("user",JSON.stringify(e.data.user)),f.push("/dashboard/home")})).catch((function(e){console.log(e),b("\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.",{variant:"error"})}))},className:e.button},"\u0648\u0631\u0648\u062f")))))}var I=a(26),N=a(282),z=a.n(N),M=a(138),T=a.n(M),P=a(283),A=a.n(P),D=a(104),W=a.n(D),L=a(139),R=a.n(L),F=a(140),_=a.n(F),J=[{name:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f",url:"/dashboard/home",icon:r.a.createElement(z.a,null)},{name:"\u0645\u062d\u0635\u0648\u0644\u0627\u062a",url:"/dashboard/products",icon:r.a.createElement(T.a,null),singleName:"product"},{name:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627",url:"/dashboard/categories",icon:r.a.createElement(A.a,null),singleName:"category",adminOnly:!0},{name:"\u0633\u0628\u062f \u0647\u0627\u06cc \u062e\u0631\u06cc\u062f",url:"/dashboard/orders",icon:r.a.createElement(W.a,null),singleName:"order",adminOnly:!0},{name:"\u0633\u0641\u0627\u0631\u0634 \u0647\u0627",url:"/dashboard/orderLines",icon:r.a.createElement(W.a,null),singleName:"orderLine"},{name:"\u062e\u0631\u06cc\u062f\u0627\u0631\u0627\u0646",url:"/dashboard/sellers",icon:r.a.createElement(R.a,null),singleName:"seller",adminOnly:!0},{name:"\u0634\u0631\u06a9\u062a \u0647\u0627",url:"/dashboard/companies",icon:r.a.createElement(_.a,null),singleName:"company",adminOnly:!0}],Y=a(285),Z=a.n(Y),B=a(709),G=a(710),X=a(661),Q=a(711),U=a(284),q=a.n(U),H="#522df2",V=Object(y.a)((function(e){var t;return{appBar:(t={},Object(I.a)(t,e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),Object(I.a)(t,"background",H),t),menuButton:Object(I.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),title:{flexGrow:1},logoutButton:{color:"white"}}}));function K(e){var t=e.onMenuTogglerClick,a=(e.user,e.paddingRight,Object(s.g)()),c=Object(n.useState)([]),l=Object(m.a)(c,2),o=(l[0],l[1]),i=Object(n.useState)(""),u=Object(m.a)(i,2),d=u[0],f=u[1],p=V();return Object(n.useEffect)((function(){var e,t=[{title:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f",url:"dashboard/home"}];J.forEach((function(t){a.location.pathname.startsWith(t.url)&&(f(t.name),e=t)})),e&&e!==J[0]&&(t.push({title:e.name,url:e.url}),a.location.pathname.includes("/create")&&t.push({title:"\u0627\u06cc\u062c\u0627\u062f "+e.singleName,url:a.location.pathname}),a.location.pathname.includes("/edit/")&&t.push({title:"\u062a\u063a\u06cc\u06cc\u0631 "+e.singleName+" "+a.location.pathname.substring(a.location.pathname.indexOf("/edit/")+6),url:a.location.pathname})),o(t)}),[a.location.pathname]),r.a.createElement(B.a,{position:"fixed",className:p.appBar},r.a.createElement(G.a,null,r.a.createElement(Q.a,{edge:"start",className:p.menuButton,color:"inherit","aria-label":"menu",onClick:t},r.a.createElement(q.a,null)),r.a.createElement(X.a,{variant:"h6",className:p.title},d),r.a.createElement(Q.a,{"aria-label":"logout",onClick:function(){localStorage.removeItem("access"),localStorage.removeItem("refresh"),window.location.reload()}},r.a.createElement(Z.a,{className:p.logoutButton}))))}function $(e){var t=e.children;return localStorage.getItem("access")?t:r.a.createElement(s.a,{to:"/login"})}a(3);var ee=a(719),te=a(720),ae=a(718),ne=a(736),re=a(733),ce=a(289),le=a.n(ce),oe=a(286),ie=a.n(oe),se=a(96),me=a(93),ue=a(97),de=a(74),fe=de.a.setToken({transformRequest:function(e){return{url:e,headers:{"x-api-key":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc2MDhjZTE5MmY1MjJhMjEwNzg5ODcwNWRmZTBkM2VmNmVmMmJiMGI4YWFjOTNlYjZhNzJjNjZiMzk3OGQ5NDJhZWY4MDk4MzJjZTk5NGM0In0.eyJhdWQiOiI3NjQxIiwianRpIjoiNzYwOGNlMTkyZjUyMmEyMTA3ODk4NzA1ZGZlMGQzZWY2ZWYyYmIwYjhhYWM5M2ViNmE3MmM2NmIzOTc4ZDk0MmFlZjgwOTgzMmNlOTk0YzQiLCJpYXQiOjE1Nzk2OTc0NjgsIm5iZiI6MTU3OTY5NzQ2OCwiZXhwIjoxNTgyMjAzMDY4LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.HXsNX1NDnrw-MWvSkfA15hv90ShDU0ht9g95fMmM8sFgu055zS-XKbjlzqXEEQaDh1VeH_MOMlGPK487cQcuKA_Wg3VdudRA-L0Xy-wNRrGXsOhUyM5TZ3gzuDl7lt4WRGYAwFgbmni2Cj3DLM57i6ExVz03QJ58i0zPhx-r_kq0hVIY7r9oP364cHkd8i9i0cbiBLxIFjA9UOkzcNdP6GP-M5rYtQwzicbdASlWcw3iEU_7FOm-ILoo-kUnXg8enzvQmrgFQlaoNiEc_GdMdFJXcIlh9HemwwWk7C3x5533ETa30Ppa12zZsLquBazV7wXxklqg_otCckw6XGmjhA","Mapir-SDK":"reactjs"}}}}),pe=function(e){function t(){return Object(p.a)(this,t),Object(se.a)(this,Object(me.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(de.a,{Map:fe,onClick:function(t,a){return e.props.onClick(a.lngLat)},center:[this.props.lng||51.3841873,this.props.lat||35.703557]},r.a.createElement(de.a.ScaleControl,null),r.a.createElement(de.a.ZoomControl,null),r.a.createElement(de.a.RotationControl,null),r.a.createElement(de.a.Layer,{type:"symbol",layout:{"icon-image":"harbor-15"}}),this.props.lat&&this.props.lng&&r.a.createElement(de.a.Marker,{coordinates:[this.props.lng,this.props.lat],anchor:"bottom"}))}}]),t}(n.Component),be=a(306),ge=a(727),he=a(712),Ee=a(713),Oe=a(21),je=a(304),ye=8;function ke(e){var t=e.data,a=e.index,n=e.style;return r.a.cloneElement(t[a],{style:Object(f.a)({},n,{top:n.top+ye})})}var ve=r.a.createContext({}),xe=r.a.forwardRef((function(e,t){var a=r.a.useContext(ve);return r.a.createElement("div",Object.assign({ref:t},e,a))}));var we=r.a.forwardRef((function(e,t){var a=e.children,n=Object(be.a)(e,["children"]),c=r.a.Children.toArray(a),l=Object(Oe.a)(),o=Object(he.a)(l.breakpoints.up("sm"),{noSsr:!0}),i=c.length,s=o?36:48,m=function(e){return r.a.isValidElement(e)&&e.type===Ee.a?48:s},u=function(e){var t=r.a.useRef(null);return r.a.useEffect((function(){null!=t.current&&t.current.resetAfterIndex(0,!0)}),[e]),t}(i);return r.a.createElement("div",{ref:t},r.a.createElement(ve.Provider,{value:n},r.a.createElement(je.a,{itemData:c,height:(i>8?8*s:c.map(m).reduce((function(e,t){return e+t}),0))+2*ye,width:"100%",ref:u,outerElementType:xe,innerElementType:"ul",itemSize:function(e){return m(c[e])},overscanCount:5,itemCount:i},ke)))})),Se=Object(y.a)({listbox:{boxSizing:"border-box","& ul":{padding:0,margin:0}}});function Ce(e){var t=e.options,a=e.label,n=e.value,c=e.onChange,l=Se();return r.a.createElement(ge.a,{style:{width:"100%"},disableListWrap:!0,classes:l,value:n,onChange:c,ListboxComponent:we,options:t,getOptionLabel:function(e){return e.label},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{variant:"outlined",label:a}))},renderOption:function(e){return r.a.createElement(X.a,{noWrap:!0,style:{width:"100%",textAlign:"right"}},e.label)}})}function Ie(e){var t=e.field,a=e.data,n=e.setData,c=e.computerSize,l=void 0===c?6:c,o=t.name;return["tel","text","number","password"].indexOf(t.type)>=0?r.a.createElement(j.a,{item:!0,md:l,xs:12,style:{padding:12}},r.a.createElement(v.a,{style:{width:"100%"},label:t.label,variant:"outlined",InputLabelProps:{shrink:a[o]&&""!==a[o]},value:a[o],onChange:function(e){return n(Object(f.a)({},a,Object(I.a)({},o,e.target.value)))}})):"select"===t.type?r.a.createElement(j.a,{item:!0,md:l,xs:12,style:{padding:12}},r.a.createElement(Ce,{options:t.options,label:t.label,value:t.options.find((function(e){return e.value===a[o]}))||t.default,onChange:function(e,r){r?n(Object(f.a)({},a,Object(I.a)({},o,r.value))):t.default?n(Object(f.a)({},a,Object(I.a)({},o,t.default.value))):(delete a[o],n(a))}})):"file"===t.type?r.a.createElement(j.a,{item:!0,md:l,xs:12,style:{padding:12}},r.a.createElement("label",{style:{float:"right"}},t.label),r.a.createElement(ie.a,{withIcon:!1,withPreview:!0,buttonText:"Choose image",imgExtension:[".jpg",".png"],maxFileSize:5242880})):"map"===t.type?r.a.createElement(j.a,{item:!0,xs:12,style:{padding:12}},r.a.createElement(pe,{onClick:function(e){var t=e.lat,r=e.lng;return n(Object(f.a)({},a,{latitude:t,longitude:r}))},lat:a.latitude,lng:a.longitude})):"multi"===t.type?r.a.createElement(j.a,{container:!0,item:!0,xs:12,style:{padding:12},direction:"column"},r.a.createElement("label",{style:{float:"right"}},t.label),r.a.createElement("div",{style:{marginRight:20}},a[o]&&a[o].map((function(e,c){return r.a.createElement(j.a,{container:!0},t.fields.map((function(e){return r.a.createElement(Ie,{field:e,data:a[o][c],setData:function(e){a[o][c]=e,n(Object(f.a)({},a,Object(I.a)({},o,a[o])))}})})))}))),r.a.createElement(x.a,{color:"primary",variant:"contained",size:"medium",style:{marginTop:20},onClick:function(){a[o]||(a[o]=[]),a[o].push({}),n(Object(f.a)({},a,Object(I.a)({},o,a[o])))}}," \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646")):void 0}var Ne=a(714),ze=a(717),Me=a(716),Te=a(715);function Pe(e){var t=e.fields,a=e.title,c=e.isOpen,l=e.setIsOpen,o=(e.items,Object(n.useState)({})),i=Object(m.a)(o,2),s=i[0],u=i[1];var d=function(){l(!1)};return r.a.createElement(Ne.a,{open:c,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Te.a,{id:"alert-dialog-title"}," \u0648\u06cc\u0631\u0627\u06cc\u0634 ",a," "),r.a.createElement(Me.a,null,r.a.createElement(j.a,{container:!0},t&&t.map((function(e){return r.a.createElement(Ie,{field:e,data:s,setData:u,computerSize:12})})))),r.a.createElement(ze.a,null,r.a.createElement(x.a,{variant:"outlined",size:"medium",color:"primary",onClick:d},"\u0644\u063a\u0648"),r.a.createElement(x.a,{variant:"contained",size:"medium",color:"primary",onClick:function(){},floated:"right",className:"mr-3"},"\u0648\u06cc\u0631\u0627\u06cc\u0634")))}var Ae=Object(y.a)((function(e){return{root:Object(I.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(1),position:"absolute",width:"calc(100% - 322px)",backgroundColor:"#ffffff",zIndex:2,marginLeft:50,minHeight:57},e.breakpoints.down("xs"),{marginLeft:0,width:"100%",position:"relative"}),title:{marginRight:"1rem"}}}));function De(e){var t=e.items,a=e.fields,c=e.title,l=Ae(),o=Object(n.useState)(!1),i=Object(m.a)(o,2),s=i[0],u=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{isOpen:s,setIsOpen:u,items:t,fields:a,title:c}),r.a.createElement(G.a,{className:l.root},r.a.createElement(X.a,{className:l.title,color:"inherit",variant:"subtitle1",component:"div"},"".concat(t.length," \u0645\u0648\u0631\u062f \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647 \u0627\u0633\u062a")),r.a.createElement(x.a,{color:"primary",variant:"outlined",size:"medium",onClick:function(){return u(!0)},startIcon:r.a.createElement(le.a,null)},"\u0648\u06cc\u0631\u0627\u06cc\u0634")))}var We=Object(y.a)((function(e){return{visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},tableSortLabel:{fontFamily:"inherit !important"}}}));function Le(e){var t=e.fields,a=e.bulkEditEnabled,n=e.ordering,c=e.setOrdering,l=e.numSelected,o=e.rowCount,i=e.onSelectAllClick,s=We();return r.a.createElement(ee.a,null,r.a.createElement(te.a,null,a&&r.a.createElement(ae.a,{padding:"checkbox"},r.a.createElement(re.a,{indeterminate:l>0&&l<o,checked:o>0&&l===o,onChange:i,inputProps:{"aria-label":"select all desserts"}})),t.map((function(e){return function(e){return r.a.createElement(ae.a,{key:e.label,align:"left",classes:{root:s.tableSortLabel},sortDirection:n===e.name?"asc":n==="-".concat(e.name)&&"desc"},r.a.createElement(ne.a,{active:n.includes(e.name),direction:n===e.name?"asc":"desc",onClick:function(){return c(n===e.name?"-".concat(e.name):n==="-".concat(e.name)?"":e.name)},style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},e.label,n.includes(e.name)?r.a.createElement("span",{className:s.visuallyHidden},n==="-".concat(e.name)?"sorted descending":"sorted ascending"):null))}(e)}))))}var Re=a(722),Fe=a(732),_e=a(721),Je=a(723);function Ye(e){var t=e.item,a=e.editable,n=e.fields,c=e.path,l=e.bulkEditEnabled,o=e.handleClick,i=e.isItemSelected,m=e.labelId,u=Object(s.g)();return r.a.createElement(te.a,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,key:t.id,selected:i},l&&r.a.createElement(ae.a,{padding:"checkbox"},r.a.createElement(re.a,{checked:i,onClick:function(e){return o(e,t)},inputProps:{"aria-labelledby":m}})),n.map((function(e){return r.a.createElement(ae.a,{key:e.name,onClick:function(){return e=t.pk,void(a&&u.push("/dashboard/".concat(c,"/edit/").concat(e)));var e}},t[e.name])})))}var Ze=a(728),Be=a(55),Ge=a.n(Be),Xe=Object(y.a)((function(e){return{table:{width:"100%",position:"relative"},tableLoading:{"&:after":{content:"...loading",position:"absolute",top:0,bottom:0,right:0,left:0,background:"rgba(255, 255, 255, .5)",display:"flex",justifyContent:"center",alignItems:"center"}}}}));function Qe(e){var t=e.title,a=e.editable,c=e.fields,l=e.path,o=e.filters,i=e.bulkEditEnabled,s=e.bulkEditFields,u=Xe(),d=Object(n.useState)(0),f=Object(m.a)(d,2),p=f[0],b=f[1],g=r.a.useState(10),h=Object(m.a)(g,2),E=h[0],j=h[1],y=Object(n.useState)(0),k=Object(m.a)(y,2),v=k[0],w=k[1],S=Object(n.useState)([]),C=Object(m.a)(S,2),I=C[0],N=C[1],z=Object(n.useState)(""),M=Object(m.a)(z,2),T=M[0],P=M[1],A=Object(n.useState)(!0),D=Object(m.a)(A,2),W=D[0],L=D[1],R=Object(n.useState)(!1),F=Object(m.a)(R,2),_=F[0],J=F[1],Y=Object(n.useState)([]),Z=Object(m.a)(Y,2),B=Z[0],G=Z[1];Object(n.useEffect)((function(){b(0),P([]),L(!0),G([])}),[l]),Object(n.useEffect)((function(){L(!0)}),[p]),Object(n.useEffect)((function(){b(0),L(!0)}),[o,T,E]),Object(n.useEffect)((function(){W&&function(){var e=l+"/?"+Object.keys(o).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])})).join("&")+"&ordering=".concat(T,"&limit=").concat(E,"&offset=").concat(p*E);O().get("dashboard/"+e,!0).then((function(e){N(e.data.results),w(e.data.count),L(!1)})).catch((function(e){L(!1),J(!0)}))}()}),[W]);var X=function(e,t){var a=B.indexOf(t),n=[];-1===a?n=n.concat(B,t):0===a?n=n.concat(B.slice(1)):a===B.length-1?n=n.concat(B.slice(0,-1)):a>0&&(n=n.concat(B.slice(0,a),B.slice(a+1))),G(n)},Q=Math.max(0,8-I.length);return r.a.createElement(r.a.Fragment,null,B.length>0&&r.a.createElement(De,{items:B,fields:s,title:t}),r.a.createElement(_e.a,null,r.a.createElement(Re.a,{className:u.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},r.a.createElement(Le,{fields:c,ordering:T,setOrdering:P,bulkEditEnabled:i,numSelected:B.length,onSelectAllClick:function(e){e.target.checked?G(I):G([])},rowCount:I.length}),r.a.createElement(Je.a,null,W&&r.a.createElement(Ze.a,{bgcolor:"#ffffffcc",color:"black",position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(Ge.a,{name:"ball-grid-pulse",color:H,fadeIn:"none"})),_&&r.a.createElement(Ze.a,{bgcolor:"#ffffffcc",color:"black",position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement("p",{style:{textAlign:"center"}},"\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u060c \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f."),r.a.createElement(x.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){L(!0),J(!1)}},"\u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f")),I.map((function(e,t){var n=function(e){return-1!==B.indexOf(e)}(e),o="enhanced-table-checkbox-".concat(t);return r.a.createElement(Ye,{key:e.id,editable:a,labelId:o,isItemSelected:n,handleClick:X,item:e,path:l,fields:c,bulkEditEnabled:i})})),Q>0&&r.a.createElement(te.a,{key:"emptyRow",style:{height:53*Q}},r.a.createElement(ae.a,{colSpan:6}))))),r.a.createElement(Fe.a,{rowsPerPageOptions:[10,20,50,100],component:"div",count:v,rowsPerPage:E,page:p,labelDisplayedRows:function(e){var t=e.from,a=e.to,n=e.count;return"\u0622\u06cc\u062a\u0645 \u0647\u0627\u06cc ".concat(t,"-").concat(-1===a?n:a," \u0627\u0632 ").concat(-1!==n?n:"more than"+a)},onChangePage:function(e,t){b(t),G([])},onChangeRowsPerPage:function(e){G([]),j(parseInt(e.target.value,10))},labelRowsPerPage:"\u062a\u0639\u062f\u0627\u062f: "}))}var Ue=a(292),qe=a.n(Ue),He=Object(y.a)((function(e){return{button:{marginLeft:e.spacing(2)}}}));function Ve(e){var t=e.fields,a=e.onClick,c=Object(n.useState)({}),l=Object(m.a)(c,2),o=l[0],i=l[1],s=He();return Object(n.useEffect)((function(){}),[]),r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"center"},t.map((function(e){return r.a.createElement(Ie,{key:e.lable,field:e,data:o,setData:i,labeled:!1,computerSize:3})})),r.a.createElement(x.a,{color:"primary",variant:"contained",size:"medium",className:s.button,onClick:function(){return a(o)},style:{height:40}},"\u0641\u06cc\u0644\u062a\u0631 \u06a9\u0646"))}var Ke=a(290),$e=a.n(Ke),et=a(291),tt=a.n(et),at=Object(y.a)((function(e){return{title:{fontSize:20,fontWeight:450,margin:0},tableRoot:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2),marginTop:e.spacing(2)}}}));function nt(e){var t=e.config,a=e.path,c=e.filters,l=e.columns,o=e.bulkEditFields,i=e.bulkEditEnabled,u=e.state,d=at(),f=Object(s.g)(),p=Object(n.useState)([]),b=Object(m.a)(p,2),g=b[0],h=b[1],E=Object(w.useSnackbar)(),y=E.enqueueSnackbar;E.closeSnackbar;return"loading"===u?r.a.createElement("div",{style:{flex:1,marginTop:50,width:"100%"}},r.a.createElement(Ge.a,{name:"ball-grid-pulse",color:H,fadeIn:"none",style:{margin:"auto"}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0},r.a.createElement(j.a,{container:!0,item:!0,xs:12,direction:"row",alignItems:"center",justify:"space-between"},r.a.createElement(j.a,{item:!0,container:!0,alignItems:"center",xs:12,sm:8},r.a.createElement("p",{className:d.title},"  ","\u0644\u06cc\u0633\u062a ".concat(t.title," ")),r.a.createElement(x.a,{style:{marginRight:12},size:"medium",onClick:function(){O().get("dashboard/".concat(a,"/export_csv/"),!0).then((function(e){y("\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f.",{variant:"success"}),$e()(e.data,"report.csv")})).catch((function(e){console.log(e),y("\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.",{variant:"error"})}))},startIcon:r.a.createElement(tt.a,null)},"\u06af\u0631\u0641\u062a\u0646 \u062e\u0631\u0648\u062c\u06cc")),t.creatable&&r.a.createElement(j.a,{item:!0},r.a.createElement(x.a,{variant:"contained",color:"primary",size:"medium",className:d.button,onClick:function(){return f.push("/dashboard/".concat(a,"/create"))},startIcon:r.a.createElement(qe.a,null)},"".concat(t.single_item," \u062c\u062f\u06cc\u062f")))),r.a.createElement(j.a,{item:!0,xs:12,className:d.tableRoot},r.a.createElement(k.a,{className:d.paper},c&&r.a.createElement(Ve,{fields:c,onClick:function(e){return h(e)}}),r.a.createElement(Qe,{title:t.title,editable:t.editable,bulkEditFields:o,path:a,fields:l,filters:g,bulkEditEnabled:i})))))}var rt=Object(y.a)((function(e){return{title:{fontSize:20,fontWeight:450,margin:0},paper:{width:"100%",marginTop:e.spacing(2)},button:{margin:e.spacing(2)}}}));function ct(e){var t=e.fields,a=e.config,c=e.path,l=rt(),o=Object(n.useState)({}),i=Object(m.a)(o,2),u=i[0],d=i[1],f=Object(s.g)(),p=Object(w.useSnackbar)(),b=p.enqueueSnackbar;p.closeSnackbar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between"},r.a.createElement(j.a,{item:!0,xs:8},r.a.createElement("p",{className:l.title},"  ","\u0627\u06cc\u062c\u0627\u062f ".concat(a.single_item," \u062c\u062f\u06cc\u062f"))),r.a.createElement(j.a,{item:!0},r.a.createElement(x.a,{onClick:function(){f.goBack()}},"\u0628\u0627\u0632\u06af\u0634\u062a"))),r.a.createElement(k.a,{className:l.paper},r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"center"},t.map((function(e){return r.a.createElement(Ie,{key:e.name,field:e,data:u,setData:d})}))),r.a.createElement(x.a,{variant:"contained",color:"primary",size:"medium",className:l.button,onClick:function(){O().post("dashboard/".concat(c,"/"),u,!0).then((function(e){f.push("/dashboard/".concat(c))})).catch((function(e){console.log(e),b("\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.",{variant:"error"})}))}},"\u0627\u06cc\u062c\u0627\u062f")))}var lt=Object(y.a)((function(e){return{title:{fontSize:20,fontWeight:450,margin:0},paper:{width:"100%",marginTop:e.spacing(2)},button:{margin:e.spacing(2)}}}));function ot(e){var t=e.fields,a=e.config,c=e.path,l=Object(n.useState)({}),o=Object(m.a)(l,2),i=o[0],u=o[1],d=Object(s.g)(),p=Object(s.h)().pk,b=lt(),g=Object(n.useState)("loading"),h=Object(m.a)(g,2),E=h[0],y=h[1],v=Object(w.useSnackbar)(),S=v.enqueueSnackbar;v.closeSnackbar;function C(){O().get("dashboard/".concat(c,"/").concat(p,"/"),!0).then((function(e){var a=e.data,n={};t.forEach((function(e){Object.keys(a).indexOf(e.name)>=0&&(n=Object(f.a)({},n,Object(I.a)({},e.name,a[e.name])))})),u(n),y("loaded"),console.log(t)})).catch((function(e){console.log(e),y("error")}))}return Object(n.useEffect)((function(){C()}),[c]),"loading"===E?r.a.createElement("div",{style:{flex:1,marginTop:50,width:"100%"}},r.a.createElement(Ge.a,{name:"ball-grid-pulse",color:H,fadeIn:"none",style:{margin:"auto"}})):"error"===E?r.a.createElement(j.a,{container:!0,justify:"center",direction:"column",alignItems:"center",style:{marginTop:80}},r.a.createElement("p",{style:{textAlign:"center"}},"\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u060c \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f."),r.a.createElement(x.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){y("loading"),C()}},"\u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f")):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between"},r.a.createElement(j.a,{item:!0,xs:8},r.a.createElement("p",{className:b.title},"  ","\u0648\u06cc\u0631\u0627\u06cc\u0634 ".concat(a.single_item," "))),r.a.createElement(j.a,{item:!0},r.a.createElement(x.a,{onClick:function(){d.goBack()}},"\u0628\u0627\u0632\u06af\u0634\u062a"))),r.a.createElement(k.a,{className:b.paper},r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"center"},t.map((function(e){return r.a.createElement(Ie,{key:e.name,field:e,data:i,setData:u})}))),r.a.createElement(j.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between"},r.a.createElement(x.a,{variant:"contained",color:"primary",size:"medium",className:b.button,onClick:function(){O().put("dashboard/".concat(c,"/").concat(p,"/"),i,!0).then((function(e){d.push("/dashboard/".concat(c))})).catch((function(e){console.log(e),S("\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.",{variant:"error"})}))}},"\u0627\u06cc\u062c\u0627\u062f"),r.a.createElement(x.a,{variant:"contained",size:"medium",style:{backgroundColor:"#ff5456",color:"white"},className:b.button,onClick:function(){O().delete("dashboard/".concat(c,"/").concat(p,"/"),!0).then((function(e){d.push("/dashboard/".concat(c))})).catch((function(e){console.log(e),S("\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.",{variant:"error"})}))}},"\u062d\u0630\u0641"))))}function it(){var e=Object(n.useState)("loading"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)([]),f=Object(m.a)(d,2),p=f[0],b=f[1],g=Object(n.useState)([]),h=Object(m.a)(g,2),E=h[0],y=h[1],k=Object(n.useState)([]),v=Object(m.a)(k,2),w=v[0],S=v[1],C=Object(n.useState)("loading"),I=Object(m.a)(C,2),N=I[0],z=I[1],M=Object(s.h)().path;function T(){O().get("dashboard/".concat(M,"/meta_data/"),!0).then((function(e){c(e.data.config),u(e.data.filters),b(e.data.fields),y(e.data.bulk_edit),S(e.data.columns),z("loaded")})).catch((function(e){console.log(e),z("error")}))}return Object(n.useEffect)((function(){z("loading"),T()}),[M]),"loading"===N?r.a.createElement("div",{style:{flex:1,marginTop:50,width:"100%"}},r.a.createElement(Ge.a,{name:"ball-grid-pulse",color:H,fadeIn:"none",style:{margin:"auto"}})):"error"===N?r.a.createElement(j.a,{container:!0,justify:"center",direction:"column",alignItems:"center",style:{marginTop:80}},r.a.createElement("p",{style:{textAlign:"center"}},"\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u060c \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f."),r.a.createElement(x.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){z("loading"),T()}},"\u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f")):r.a.createElement(s.d,null,a.creatable&&r.a.createElement(s.b,{exact:!0,path:"/dashboard/".concat(M,"/create"),name:"Create Page"},r.a.createElement(ct,{config:a,path:M,fields:p,state:N})),a.editable&&r.a.createElement(s.b,{exact:!0,path:"/dashboard/".concat(M,"/edit/:pk"),name:"EditPage"},r.a.createElement(ot,{config:a,path:M,fields:p,state:N})),r.a.createElement(s.b,{exact:!0,path:"/dashboard/".concat(M),name:"List Page"},r.a.createElement(nt,{config:a,path:M,filters:i,columns:w,state:N,bulkEditFields:E,bulkEditEnabled:E&&E.length>0})))}var st=a(33),mt=Object(y.a)((function(e){return{unaffected:{flip:!1,direction:"ltr"},dataCard:{padding:e.spacing(1),paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));function ut(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("loading"),o=Object(m.a)(l,2),i=o[0],s=o[1],u=mt();function d(){O().get("dashboard/dashboard-data",!0).then((function(e){c(e.data),s("loaded")})).catch((function(e){console.log(e),s("error")}))}return Object(n.useEffect)((function(){d()}),[]),"loading"===i?r.a.createElement("div",{style:{flex:1,marginTop:50,width:"100%"}},r.a.createElement(Ge.a,{name:"ball-grid-pulse",color:H,fadeIn:"none",style:{margin:"auto"}})):"error"===i?r.a.createElement(j.a,{container:!0,justify:"center",direction:"column",alignItems:"center",style:{marginTop:80}},r.a.createElement("p",{style:{textAlign:"center"}},"\u062e\u0637\u0627\u06cc\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u060c \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f."),r.a.createElement(x.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){s("loading"),d()}},"\u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f")):r.a.createElement(j.a,{container:!0,spacing:2},r.a.createElement(j.a,{item:!0,xs:12,sm:6,lg:3},r.a.createElement(k.a,null,r.a.createElement(j.a,{container:!0,className:u.dataCard},r.a.createElement(j.a,{container:!0,item:!0,xs:4,justify:"center"},r.a.createElement(_.a,{style:{fontSize:60,color:H}})),r.a.createElement(j.a,{container:!0,item:!0,xs:8,justify:"center"},r.a.createElement("p",{style:{fontSize:18,textAlign:"right"}},"".concat(a.total_companies," \u062a\u0648\u0644\u06cc\u062f \u06a9\u0646\u0646\u062f\u0647")))))),r.a.createElement(j.a,{item:!0,xs:12,sm:6,lg:3},r.a.createElement(k.a,null,r.a.createElement(j.a,{container:!0,className:u.dataCard},r.a.createElement(j.a,{container:!0,item:!0,xs:4,justify:"center"},r.a.createElement(R.a,{style:{fontSize:60,color:H}})),r.a.createElement(j.a,{container:!0,item:!0,xs:8,justify:"center"},r.a.createElement("p",{style:{fontSize:18,textAlign:"right"}},"".concat(a.total_sellers," \u0641\u0631\u0648\u0634\u0646\u062f\u0647")))))),r.a.createElement(j.a,{item:!0,xs:12,sm:6,lg:3},r.a.createElement(k.a,null,r.a.createElement(j.a,{container:!0,className:u.dataCard},r.a.createElement(j.a,{container:!0,item:!0,xs:4,justify:"center"},r.a.createElement(T.a,{style:{fontSize:60,color:H}})),r.a.createElement(j.a,{container:!0,item:!0,xs:8,justify:"center"},r.a.createElement("p",{style:{fontSize:18,textAlign:"right"}},"".concat(a.total_products," \u06a9\u0627\u0644\u0627")))))),r.a.createElement(j.a,{item:!0,xs:12,sm:6,lg:3},r.a.createElement(k.a,null,r.a.createElement(j.a,{container:!0,className:u.dataCard},r.a.createElement(j.a,{container:!0,item:!0,xs:4,justify:"center"},r.a.createElement(W.a,{style:{fontSize:60,color:H}})),r.a.createElement(j.a,{container:!0,item:!0,xs:8,justify:"center"},r.a.createElement("p",{style:{fontSize:18,textAlign:"right"}},"".concat(a.total_orders_value," \u0641\u0631\u0648\u0634")))))),r.a.createElement(j.a,{item:!0,xs:12,lg:6},r.a.createElement(k.a,{className:u.unaffected},r.a.createElement("p",{style:{padding:10,fontSize:20,marginTop:0,textAlign:"right"}},"\u0622\u0645\u0627\u0631 \u0631\u0648\u0632\u0627\u0646\u0647 \u0645\u063a\u0627\u0632\u0647 \u0647\u0627"),r.a.createElement(st.d,{aspect:2},r.a.createElement(st.b,{data:a.order_data,margin:{top:5,right:15,left:-10,bottom:5}},r.a.createElement(st.c,{strokeDasharray:"3 3",vertical:!1}),r.a.createElement(st.f,{dataKey:"date"}),r.a.createElement(st.g,null),r.a.createElement(st.e,{animationDuration:100,offset:5,cursor:{stroke:"#00000011",strokeWidth:20}}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"10%",stopColor:H,stopOpacity:.2}),r.a.createElement("stop",{offset:"90%",stopColor:H,stopOpacity:0}))),r.a.createElement(st.a,{type:"monotone",dataKey:"value",stroke:H,strokeWidth:2.5,isAnimationActive:!1,dot:{stroke:"white",fill:H,strokeWidth:3,r:5},activeDot:{stroke:"white",fill:H,strokeWidth:3,r:5.5},fillOpacity:1,fill:"url(#colorPv)"}))))),r.a.createElement(j.a,{item:!0,xs:12,lg:6},r.a.createElement(k.a,{className:u.unaffected},r.a.createElement("p",{style:{padding:10,fontSize:20,marginTop:0,textAlign:"right"}},"\u0622\u0645\u0627\u0631 \u0631\u0648\u0632\u0627\u0646\u0647 \u0645\u063a\u0627\u0632\u0647 \u0647\u0627"),r.a.createElement(st.d,{aspect:2},r.a.createElement(st.b,{data:a.seller_data,margin:{top:5,right:15,left:-10,bottom:5}},r.a.createElement(st.c,{strokeDasharray:"3 3",vertical:!1}),r.a.createElement(st.f,{dataKey:"date"}),r.a.createElement(st.g,null),r.a.createElement(st.e,{animationDuration:100,offset:5,cursor:{stroke:"#00000011",strokeWidth:20}}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"10%",stopColor:H,stopOpacity:.2}),r.a.createElement("stop",{offset:"90%",stopColor:H,stopOpacity:0}))),r.a.createElement(st.a,{type:"monotone",dataKey:"value",stroke:H,strokeWidth:2.5,isAnimationActive:!1,dot:{stroke:"white",fill:H,strokeWidth:3,r:5},activeDot:{stroke:"white",fill:H,strokeWidth:3,r:5.5},fillOpacity:1,fill:"url(#colorPv)"}))))))}var dt=a(302),ft=a.n(dt),pt=a(707),bt=a(724),gt=a(725),ht=a(734),Et=a(726),Ot=Object(y.a)((function(e){return{listItemText:{fontSize:14,margin:".25rem 0"},drawer:Object(I.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),toolbar:e.mixins.toolbar,drawerPaper:{width:240}}}));function jt(e){var t=e.icon,a=e.title,n=e.to,c=e.onClick,l=Ot(),o=Object(s.g)(),m=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(i.b,Object.assign({to:n,ref:t},e))}))}),[n]);return r.a.createElement("li",{onClick:c},r.a.createElement(bt.a,{button:!0,component:m,selected:o.location.pathname.startsWith(n)},t?r.a.createElement(gt.a,null,t):null,r.a.createElement("p",{className:l.listItemText},a)))}function yt(e){var t=e.handleDrawerToggle,a=e.mobileOpen,n=Ot(),c="admin"===JSON.parse(localStorage.getItem("user")).role,l=r.a.createElement("div",null,r.a.createElement("img",{src:ft.a,style:{width:239,padding:20,paddingRight:55,paddingLeft:55},alt:"logo dokkan"}),r.a.createElement(pt.a,null,J.map((function(e){if(!e.adminOnly||c)return r.a.createElement(jt,{key:e.name,to:e.url,title:e.name,icon:e.icon,onClick:function(){a&&t()}})}))));return r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(ht.a,{mdUp:!0,implementation:"css"},r.a.createElement(Et.a,{variant:"temporary",open:a,onClose:t,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},l)),r.a.createElement(ht.a,{smDown:!0,implementation:"css"},r.a.createElement(Et.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},l)))}var kt=Object(y.a)((function(e){return{root:{display:"flex"},toolbar:e.mixins.toolbar,content:{flexGrow:1,width:"100%",padding:e.spacing(2)}}}));function vt(e){e.children;var t=kt(),a=r.a.useState(!1),n=Object(m.a)(a,2),c=n[0],l=n[1],o=function(){l(!c)};return r.a.createElement($,null,r.a.createElement("div",{className:t.root},r.a.createElement(K,{onMenuTogglerClick:o}),r.a.createElement(yt,{mobileOpen:c,handleDrawerToggle:o}),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{to:"/dashboard/home"})),r.a.createElement(s.b,{exact:!0,path:"/dashboard"},r.a.createElement(s.a,{to:"/dashboard/home"})),r.a.createElement(s.b,{exact:!0,path:"/dashboard/home"},r.a.createElement(ut,null)),r.a.createElement(s.b,{path:"/dashboard/:path"},r.a.createElement(it,null))))))}var xt=a(23),wt=a(303),St=a.n(wt),Ct=a(309),It=a(128),Nt=a(700),zt=a(701),Mt=a(702),Tt=Object(xt.c)({plugins:[].concat(Object(o.a)(Object(Ct.a)().plugins),[St()()])}),Pt=Object(It.a)({direction:"rtl",palette:{primary:{main:H},secondary:{main:H}}});var At=function(){return r.a.createElement(Nt.b,{jss:Tt},r.a.createElement(zt.a,{theme:Pt},r.a.createElement(i.a,null,r.a.createElement(w.SnackbarProvider,{maxSnack:1,TransitionComponent:Mt.a,anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login",name:"Login Page",component:C}),r.a.createElement(s.b,{exact:!0,path:"",name:"dashboard",component:vt}),r.a.createElement(s.b,{path:"/dashboard",name:"dashboard",component:vt}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(At,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[358,1,2]]]);
//# sourceMappingURL=main.f0be51ca.chunk.js.map