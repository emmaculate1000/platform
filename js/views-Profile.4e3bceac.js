(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Profile"],{1800:function(t,i,e){"use strict";e("4de4");var s=e("2b0e");i["a"]=s["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,i){var e=i.data,s=i.children,n=void 0===s?[]:s;e.staticClass=e.staticClass?"v-list-item__action ".concat(e.staticClass):"v-list-item__action";var a=n.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}})},"2a37":function(t,i,e){"use strict";e("9461")},"34c3":function(t,i,e){"use strict";e("498a");var s=e("2b0e");i["a"]=s["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,i){var e=i.data,s=i.children;return e.staticClass="v-list-item__icon ".concat(e.staticClass||"").trim(),t("div",e,s)}})},"3ad0":function(t,i,e){},"4d63":function(t,i,e){var s=e("83ab"),n=e("da84"),a=e("94ca"),o=e("7156"),r=e("9bf2").f,l=e("241c").f,c=e("44e7"),u=e("ad6d"),d=e("9f7f"),h=e("6eeb"),v=e("d039"),m=e("69f3").enforce,p=e("2626"),f=e("b622"),_=f("match"),b=n.RegExp,g=b.prototype,y=/a/g,C=/a/g,A=new b(y)!==y,x=d.UNSUPPORTED_Y,D=s&&a("RegExp",!A||x||v((function(){return C[_]=!1,b(y)!=y||b(C)==C||"/a/i"!=b(y,"i")})));if(D){var I=function(t,i){var e,s=this instanceof I,n=c(t),a=void 0===i;if(!s&&n&&t.constructor===I&&a)return t;A?n&&!a&&(t=t.source):t instanceof I&&(a&&(i=u.call(t)),t=t.source),x&&(e=!!i&&i.indexOf("y")>-1,e&&(i=i.replace(/y/g,"")));var r=o(A?new b(t,i):b(t,i),s?this:g,I);if(x&&e){var l=m(r);l.sticky=!0}return r},w=function(t){t in I||r(I,t,{configurable:!0,get:function(){return b[t]},set:function(i){b[t]=i}})},O=l(b),E=0;while(O.length>E)w(O[E++]);g.constructor=I,I.prototype=g,h(n,"RegExp",I)}p("RegExp")},"56b0":function(t,i,e){"use strict";var s=e("5530"),n=e("ade3"),a=(e("4d63"),e("ac1f"),e("25f0"),e("466d"),e("db42"),e("9d26")),o=e("da13"),r=e("34c3"),l=e("7e2b"),c=e("9d65"),u=e("a9ad"),d=e("f2e7"),h=e("3206"),v=e("5607"),m=e("0789"),p=e("58df"),f=e("80d2"),_=Object(p["a"])(l["a"],c["a"],u["a"],Object(h["a"])("list"),d["a"]);i["a"]=_.extend().extend({name:"v-list-group",directives:{ripple:v["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var i=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return i.isActive=!i.isActive})))},genIcon:function(t){return this.$createElement(a["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(r["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(o["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(n["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(s["a"])(Object(s["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(f["o"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(r["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var i=this.matchRoute(t.path);i&&this.isActive!==i&&this.list&&this.list.listClick(this._uid),this.isActive=i}},toggle:function(t){var i=this,e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((function(){return i.isActive=e}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(m["a"],this.genItems())])}})},"5d23":function(t,i,e){"use strict";e.d(i,"a",(function(){return f})),e.d(i,"c",(function(){return _})),e.d(i,"b",(function(){return b}));var s=e("80d2"),n=e("8860"),a=e("56b0"),o=e("da13"),r=e("5530"),l=(e("899c"),e("604c")),c=e("a9ad"),u=e("58df"),d=Object(u["a"])(l["a"],c["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(r["a"])(Object(r["a"])({},l["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}}),h=e("1800"),v=e("8270"),m=e("34c3"),p=Object(s["h"])("v-list-item__action-text","span"),f=Object(s["h"])("v-list-item__content","div"),_=Object(s["h"])("v-list-item__title","div"),b=Object(s["h"])("v-list-item__subtitle","div");n["a"],a["a"],o["a"],h["a"],v["a"],m["a"]},"713a":function(t,i,e){"use strict";var s=e("8212");i["a"]=s["a"]},8270:function(t,i,e){"use strict";var s=e("5530"),n=(e("a9e3"),e("713a"));i["a"]=n["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item__avatar--horizontal":this.horizontal},n["a"].options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var i=n["a"].options.render.call(this,t);return i.data=i.data||{},i.data.staticClass+=" v-list-item__avatar",i}})},8860:function(t,i,e){"use strict";var s=e("b85c"),n=e("5530"),a=(e("0481"),e("c740"),e("a434"),e("3ad0"),e("8dd9"));i["a"]=a["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var i=this.groups.findIndex((function(i){return i._uid===t._uid}));i>-1&&this.groups.splice(i,1)},listClick:function(t){if(!this.expand){var i,e=Object(s["a"])(this.groups);try{for(e.s();!(i=e.n()).done;){var n=i.value;n.toggle(t)}}catch(a){e.e(a)}finally{e.f()}}}},render:function(t){var i={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(n["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,i),[this.$slots["default"]])}})},"899c":function(t,i,e){},9461:function(t,i,e){},"9d65":function(t,i,e){"use strict";var s=e("d9bd"),n=e("2b0e");i["a"]=n["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(s["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},c66d:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-container",{attrs:{id:"dashboard-view",fluid:"",tag:"section"}},[e("div",[e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(i){return i.preventDefault(),t.callModal()}}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{md:"6"}},[e("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1","min-height":"200px"}},[e("v-list",{attrs:{"two-line":""}},[e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-account\n                            ")])],1),e("v-list-item-content",[e("p",{staticClass:"display-1 font-weight-bold",attrs:{background:"white"}},[t._v("\n                               PROFILE DETAILS\n                              ")]),e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.full_name)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Name(s)")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.email)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Email")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.country)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Country")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.companyName)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Company Name")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.company_reg_num)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Company Reg. Number")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.city)+"\n                            ")]),e("v-list-item-subtitle",[t._v("City")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.companyAddress)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Company Address")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                             mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.position_in_company)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Position in company")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-alert-circle-outline\n                            ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("\n                                "+t._s(t.userDetails.homeAddress)+"\n                            ")]),e("v-list-item-subtitle",[t._v("Home Address")])],1)],1),e("v-divider",{attrs:{inset:""}}),e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v("\n                              mdi-arrow\n                            ")])],1),e("v-btn",{staticClass:"float-right white--text",attrs:{color:"primary"},on:{click:function(i){return t.redirect()}}},[t._v("\n                              Update Profile\n                          ")])],1)],1)],1)],1)],1)],1)])])},n=[],a=(e("1157"),e("bc3a")),o=e.n(a),r=e("0212"),l=e("2f62"),c={users:"https://app.digitadooh.com",piApp:"http://3.144.205.254:3000"},u={name:"DashboardView",components:{Map:r["default"]},methods:{callModal:function(){this.updateModal=!0},redirect:function(){this.$router.push("/components/edit-profile/")},updateStore:function(){"Email"==this.field?this.userDetails.email=this.inputData:"Company Name"==this.field?this.userDetails.companyName=this.inputData:"Company Registration Number"==this.field?this.userDetails.company_reg_num=this.inputData:"Country"==this.field?this.userDetails.country=this.inputData:"Company Address"==this.field?this.userDetails.companyAddress=this.inputData:"Position In Company"==this.field?this.userDetails.position_in_company=this.inputData:"Home Address"==this.field?this.userDetails.homeAddress=this.inputData:"City"==this.field&&(this.userDetails.city=this.inputData)},createPlaceHolder:function(){return"Email"==this.field?(this.placeholder="New Email Address",this.field_num=1):"Company Name"==this.field?(this.placeholder="New Company Name",this.field_num=4):"Company Registration Number"==this.field?(this.placeholder="New Company Registration Number",this.field_num=6):"Country"==this.field?(this.placeholder="New Country",this.field_num=2):"Company Address"==this.field?(this.placeholder="New Company Address",this.field_num=5):"Position In Company"==this.field?(this.placeholder="New Position In Company",this.field_num=7):"Home Address"==this.field?(this.placeholder="New Home Address",this.field_num=3):"City"==this.field?(this.placeholder="New City",this.field_num=8):(this.placeholder="Select A Field To Update Above",this.field_num=0),this.placeholder},reload:function(){this.updateModal=!1,location.reload()},update_info:function(){var t=this,i=this.userDetails.user_id,e=new FormData,s={field_num:this.field_num,update:this.inputData},n=JSON.stringify(s);e.append("data",n),e.append("user_id",i);var a=o.a.create({baseURL:c.users});a.post(c.users+"/server/update_user_info.php",e).then((function(i){1==i.data?(t.modalText.questionText="SUCCESSFUL!",t.modalText.actionText="Done!",updateStore()):(t.modalText.questionText="FAILED!",t.modalText.actionText="ERROR!")}))["catch"]((function(t){console.log(t)}))}},data:function(){return{e1:1,updateModal:!1,placeholder:"",field:"",field_num:0,inputData:"",modalText:{headerText:"UPDATE YOUR PROFILE",actionText:"PROCEED",questionText:"ARE YOUR SURE OF THIS UPDATE?"},more:!1,map:!1,slot:"color:red",profile_fields:["Email","Country","Company Name","Company Registration Number","Company Address","Position In Company","Home Address","City"],userInfo:{email:"",homeAddress:"",companyName:"",companyAddress:"",country:"",companyRegistrationNumber:"",position_in_company:"",city:""}}},computed:Object(l["b"])(["userDetails"])},d=u,h=(e("2a37"),e("2877")),v=e("6544"),m=e.n(v),p=e("8336"),f=e("b0af"),_=e("62ad"),b=e("a523"),g=e("ce7e"),y=e("132d"),C=e("8860"),A=e("da13"),x=e("5d23"),D=e("34c3"),I=e("0fd9"),w=Object(h["a"])(d,s,n,!1,null,null,null);i["default"]=w.exports;m()(w,{VBtn:p["a"],VCard:f["a"],VCol:_["a"],VContainer:b["a"],VDivider:g["a"],VIcon:y["a"],VList:C["a"],VListItem:A["a"],VListItemContent:x["a"],VListItemIcon:D["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VRow:I["a"]})},db42:function(t,i,e){}}]);
//# sourceMappingURL=views-Profile.4e3bceac.js.map