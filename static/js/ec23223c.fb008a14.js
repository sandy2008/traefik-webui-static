(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ec23223c"],{"1db5":function(e,t,n){"use strict";var s=n("4001"),i=n.n(s);i.a},"2ef5":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-wrapper"},[n("q-infinite-scroll",{ref:"scroller",attrs:{offset:250},on:{load:e.handleLoadMore},scopedSlots:e._u([e.loading?{key:"loading",fn:function(){return[n("div",{staticClass:"row justify-center q-my-md"},[n("q-spinner-dots",{attrs:{color:"app-grey",size:"40px"}})],1)]},proxy:!0}:null],null,!0)},[n("q-markup-table",[n("thead",[n("tr",{staticClass:"table-header"},e._l(e.columns,(function(t){return n("th",{key:t.name,class:"text-"+t.align},[e._v("\n            "+e._s(t.label)+"\n          ")])})),0)]),e.data&&e.data.length?e._e():n("tfoot",[n("tr",[n("td",{attrs:{colspan:"100%"}},[n("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"warning"}}),e._v(" No data available\n          ")],1)])]),n("tbody",e._l(e.data,(function(t){return n("tr",{key:t.name,staticClass:"cursor-pointer",on:{click:function(n){return e.onRowClick(t)}}},[e._l(e.columns,(function(s){return[e.getColumn(s.name).component?n("td",{key:s.name,class:"text-"+e.getColumn(s.name).align},[n(e.getColumn(s.name).component,e._b({tag:"component"},"component",e.getColumn(s.name).fieldToProps(t),!1),[e.getColumn(s.name).content?[e._v("\n                  "+e._s(e.getColumn(s.name).content(t))+"\n                ")]:e._e()],2)],1):e._e(),e.getColumn(s.name).component?e._e():n("td",e._b({key:s.name,class:"text-"+e.getColumn(s.name).align},"td",e.getColumn(s.name).fieldToProps(t),!1),[n("span",[e._v("\n                "+e._s(e.getColumn(s.name).content?e.getColumn(s.name).content(t):t[s.name])+"\n              ")])])]}))],2)})),0)])],1),e.endReached?n("q-page-scroller",{staticClass:"back-to-top",attrs:{position:"bottom","scroll-offset":150}},[n("q-btn",{attrs:{color:"primary",small:""}},[e._v("\n      Back to top\n    ")])],1):e._e()],1)},i=[],r=(n("7f7f"),n("7514"),n("2bb1")),a=(n("c5f6"),n("2b0e")),o=n("1c16"),l=n("f303"),c=n("0831"),u=n("d882"),p=n("dde5"),f=a["a"].extend({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{},disable:Boolean,reverse:Boolean},data:function(){return{index:0,fetching:!1,working:!0}},watch:{disable:function(e){!0===e?this.stop():this.resume()},scrollTarget:function(){this.updateScrollTarget()},debounce:function(e){this.__setDebounce(e)}},methods:{poll:function(){if(!0!==this.disable&&!0!==this.fetching&&!1!==this.working){var e=Object(c["b"])(this.scrollContainer),t=Object(c["c"])(this.scrollContainer),n=Object(l["c"])(this.scrollContainer);!1===this.reverse?t+n+this.offset>=e&&this.trigger():t<this.offset&&this.trigger()}},trigger:function(){var e=this;if(!0!==this.disable&&!0!==this.fetching&&!1!==this.working){this.index++,this.fetching=!0;var t=Object(c["b"])(this.scrollContainer);this.$emit("load",this.index,(function(n){!0===e.working&&(e.fetching=!1,e.$nextTick((function(){if(!0===e.reverse){var s=Object(c["b"])(e.scrollContainer),i=Object(c["c"])(e.scrollContainer),r=s-t;e.scrollContainer.scrollTop=i+r}!0===n?e.stop():e.$el.closest("body")&&e.poll()})))}))}},reset:function(){this.index=0},resume:function(){!1===this.working&&(this.working=!0,this.scrollContainer.addEventListener("scroll",this.poll,u["e"].passive)),this.immediatePoll()},stop:function(){!0===this.working&&(this.working=!1,this.fetching=!1,this.scrollContainer.removeEventListener("scroll",this.poll,u["e"].passive))},updateScrollTarget:function(){if(this.scrollContainer&&!0===this.working&&this.scrollContainer.removeEventListener("scroll",this.poll,u["e"].passive),"string"===typeof this.scrollTarget){if(this.scrollContainer=document.querySelector(this.scrollTarget),null===this.scrollContainer)return}else this.scrollContainer=this.scrollTarget===document.defaultView||this.scrollTarget instanceof Element?this.scrollTarget:Object(c["d"])(this.$el);!0===this.working&&this.scrollContainer.addEventListener("scroll",this.poll,u["e"].passive)},__setDebounce:function(e){e=parseInt(e,10),this.poll=e<=0?this.immediatePoll:Object(o["a"])(this.immediatePoll,!0===isNaN(e)?100:e)}},mounted:function(){if(this.immediatePoll=this.poll,this.__setDebounce(this.debounce),this.updateScrollTarget(),this.immediatePoll(),!0===this.reverse){var e=Object(c["b"])(this.scrollContainer),t=Object(l["c"])(this.scrollContainer);this.scrollContainer.scrollTop=e-t}},beforeDestroy:function(){!0===this.working&&this.scrollContainer.removeEventListener("scroll",this.poll,u["e"].passive)},render:function(e){var t=Object(p["b"])(this,"default",[]);return!0!==this.disable&&t[!1===this.reverse?"push":"unshift"](e("div",{staticClass:"q-infinite-scroll__loading",class:!0===this.fetching?"":"invisible"},Object(p["a"])(this,"loading"))),e("div",{staticClass:"q-infinite-scroll"},t)}}),d=n("594d"),m=a["a"].extend({name:"QSpinnerDots",mixins:[d["a"]],render:function(e){return e("svg",{staticClass:"q-spinner",class:this.classes,on:this.$listeners,attrs:{fill:"currentColor",width:this.cSize,height:this.cSize,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":".3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}}),h=n("5096"),v={name:"MainTable",props:["data","columns","loading","onLoadMore","endReached","onRowClick"],components:{QMarkupTable:r["a"],QInfiniteScroll:f,QSpinnerDots:m,QPageScroller:h["a"]},methods:{getColumn:function(e){return this.columns.find((function(t){return t.name===e}))||{}},handleLoadMore:function(e,t){this.onLoadMore({page:e}).then((function(){return t()})).catch((function(){return t(!0)}))}}},g=v,b=(n("1db5"),n("2877")),C=Object(b["a"])(g,s,i,!1,null,"2f694f57",null);t["a"]=C.exports},"33bf":function(e,t,n){"use strict";n("6762"),n("2fdb"),n("a481"),n("7f7f");var s=n("abc6"),i=n("b047"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.list,(function(t,s){return n("q-chip",{key:s,class:e.classNames,attrs:{dense:e.dense}},[e._v("\n    "+e._s(t)+"\n  ")])})),1)},a=[],o={props:["dense","classNames","list"]},l=o,c=n("2877"),u=Object(c["a"])(l,r,a,!1,null,null,null),p=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-avatar",{staticClass:"provider-logo"},[n("q-icon",{attrs:{name:"img:"+e.getLogoPath}})],1)},d=[],m={props:["name"],computed:{getLogoPath:function(){var e=this.name.toLowerCase();return e.includes("plugin-")?"statics/providers/plugin.svg":"statics/providers/".concat(e,".svg")}}},h=m,v=(n("e149"),Object(c["a"])(h,f,d,!1,null,"f1742f24",null)),g=v.exports,b=n("a10c"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-avatar",{attrs:{"text-color":"dark"}},[e.isTLS?n("q-icon",{attrs:{name:"eva-shield"}}):e._e()],1)},_=[],w={name:"TLSState",props:["isTLS"]},y=w,T=(n("effd"),Object(c["a"])(y,C,_,!1,null,"197ea21e",null)),k=T.exports,x=[{name:"status",required:!0,label:"Status",align:"left",fieldToProps:function(e){return{state:"enabled"===e.status?"positive":"negative"}},component:b["a"]},{name:"tls",align:"left",label:"TLS",fieldToProps:function(e){return{isTLS:e.tls}},component:k},{name:"rule",align:"left",label:"Rule",component:i["a"],fieldToProps:function(){return{class:"app-chip app-chip-rule",dense:!0}},content:function(e){return e.rule}},{name:"entryPoints",align:"left",label:"Entrypoints",component:p,fieldToProps:function(e){return{classNames:"app-chip app-chip-entry-points",dense:!0,list:e.entryPoints}}},{name:"name",align:"left",label:"Name",component:i["a"],fieldToProps:function(){return{class:"app-chip app-chip-name",dense:!0}},content:function(e){return e.name}},{name:"type",align:"left",label:"Type",component:i["a"],fieldToProps:function(){return{class:"app-chip app-chip-entry-points",dense:!0}},content:function(e){return e.type}},{name:"servers",align:"right",label:"Servers",fieldToProps:function(){return{class:"servers-label"}},content:function(e){return e.loadBalancer&&e.loadBalancer.servers?e.loadBalancer.servers.length:0}},{name:"service",align:"left",label:"Service",component:i["a"],fieldToProps:function(){return{class:"app-chip app-chip-service",dense:!0}},content:function(e){return e.service}},{name:"provider",align:"center",label:"Provider",fieldToProps:function(e){return{name:e.provider}},component:g}],P={routers:["status","rule","entryPoints","name","service","tls","provider"],udpRouters:["status","entryPoints","name","service","provider"],services:["status","name","type","servers","provider"],middlewares:["status","name","type","provider"]},S={"http-routers":{columns:P.routers},"tcp-routers":{columns:P.routers},"udp-routers":{columns:P.udpRouters},"http-services":{columns:P.services},"tcp-services":{columns:P.services},"udp-services":{columns:P.services},"http-middlewares":{columns:P.middlewares},"tcp-middlewares":{columns:P.middlewares}},q={methods:{getTableProps:function(e){var t=this,n=e.type;return{onRowClick:function(e){return t.$router.push({path:"/".concat(n.replace("-","/","gi"),"/").concat(e.name)})},columns:x.filter((function(e){return Object(s["get"])(S,"".concat(n,".columns"),[]).includes(e.name)}))}}}};t["a"]=q},4001:function(e,t,n){},"5abb":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[e._t("default")],2)},i=[],r={name:"PageDefault"},a=r,o=n("2877"),l=Object(o["a"])(a,s,i,!1,null,"27ca2540",null);t["a"]=l.exports},"6ef8":function(e,t,n){},7140:function(e,t,n){},"73a0":function(e,t,n){"use strict";var s=n("7140"),i=n.n(s);i.a},a10c:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-avatar",{attrs:{color:e.state,"text-color":"white"}},["positive"===e.state?n("q-icon",{attrs:{name:"eva-checkmark-circle-2"}}):e._e(),"warning"===e.state?n("q-icon",{attrs:{name:"eva-alert-circle"}}):e._e(),"negative"===e.state?n("q-icon",{attrs:{name:"eva-alert-triangle"}}):e._e()],1)},i=[],r={name:"AvatarState",props:["state"]},a=r,o=(n("73a0"),n("2877")),l=Object(o["a"])(a,s,i,!1,null,"7c7fb87c",null);t["a"]=l.exports},c5fc:function(e,t,n){},e149:function(e,t,n){"use strict";var s=n("6ef8"),i=n.n(s);i.a},effd:function(e,t,n){"use strict";var s=n("c5fc"),i=n.n(s);i.a}}]);