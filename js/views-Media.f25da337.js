(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Media"],{"1f4f":function(t,e,a){"use strict";var i=a("5530"),n=(a("a9e3"),a("8b37"),a("80d2")),s=a("7560"),o=a("58df");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(i["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["f"])(this.height)}},[this.$createElement("table",this.$slots["default"])])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2bd0":function(t,e,a){},"5e23":function(t,e,a){},"71a3":function(t,e,a){"use strict";var i=a("5530"),n=(a("ac1f"),a("5319"),a("c975"),a("4e82")),s=a("1c87"),o=a("7560"),r=a("80d2"),l=a("58df"),c=Object(l["a"])(s["a"],Object(n["a"])("tabsBar"),o["a"]);e["a"]=c.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-tab":!0},s["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,a=this.generateRouteLink(),n=a.tag,s=a.data;return s.attrs=Object(i["a"])(Object(i["a"])({},s.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),s.on=Object(i["a"])(Object(i["a"])({},s.on),{},{keydown:function(t){t.keyCode===r["t"].enter&&e.click(t),e.$emit("keydown",t)}}),t(n,s,this.$slots["default"])}})},"71d9":function(t,e,a){"use strict";var i=a("3835"),n=a("5530"),s=(a("a9e3"),a("e25e"),a("0481"),a("4160"),a("5e23"),a("8dd9")),o=a("adda"),r=a("80d2"),l=a("d9bd");e["a"]=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this["short"]?112:this.isProminent?128:this.dense?48:this["short"]||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(n["a"])(Object(n["a"])({},this.measurableStyles),{},{height:Object(r["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var a=Object(i["a"])(e,2),n=a[0],s=a[1];t.$attrs.hasOwnProperty(n)&&Object(l["a"])(n,s,t)}))},methods:{genBackground:function(){var t={height:Object(r["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["f"])(this.computedContentHeight)}},Object(r["o"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["f"])(this.extensionHeight)}},Object(r["o"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],a=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,a,e)}})},"75e3":function(t,e,a){"use strict";a("2bd0")},"89b1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"typography-view",fluid:"",tag:"section"}},[a("v-row",{staticStyle:{"background-color":"white"},attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"row mx-auto",attrs:{cols:"6"}},[a("v-col",{attrs:{md:"10"}},[a("v-text-field",{staticClass:"mx-auto",attrs:{search:t.search,outlined:"",dense:"",label:"Search","prepend-inner-icon":"mdi-card-search-outline"},on:{keyup:function(e){return t.search_campaigns()}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),a("v-col",{attrs:{md:"2"}})],1)],1),0==t.search?a("div",t._l(t.library_campaigns,(function(e,i){return a("v-row",{key:i,attrs:{justify:"center"}},[a("v-col",{attrs:{md:"10"}},[a("transition",{attrs:{name:"fade"}},[a("v-card",{staticClass:"mx-auto",attrs:{"min-width":"400",outlined:"",transition:"fade"}},[a("v-list-item",{attrs:{"two-line":""}},["image/jpg"==e.mediaType||"image/jpeg"==e.mediaType||"image/png"==e.mediaType||"image/gif"==e.mediaType?a("v-list-item-avatar",{attrs:{tile:"",size:"120"}},[a("img",{attrs:{src:t.loadImage(e.mediaType,e.campaignMedia),alt:t.loadImage(e.mediaType,e.campaignMedia)}})]):a("v-list-item-avatar",{attrs:{tile:"",size:"120"}},[a("video",{attrs:{width:"600",height:"300",controls:"",duration:"5",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:t.loadImage(e.mediaType,e.campaignMedia)}}),t._v("\n                  Your browser does not support the video tag.\n                ")])]),a("v-list-item-content",[a("div",{staticClass:"display-1 font-weight-bold mb-4"},[a("span",{staticClass:"float-left"},[t._v(t._s(e.campaignName))]),a("div",{staticClass:"float-right caption"},[a("span",[t._v("Date:"+t._s(e.startDate))]),a("br"),a("span",[t._v("Uploader:"+t._s(e.user_name))])])]),a("v-divider",{staticClass:"pl-4"}),a("v-list-item-subtitle",[a("v-row",[a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.mediaType))]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-movie")])],1)],1)],1)],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Landscape Format")]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-monitor")])],1)],1)],1)],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.fSize)+"MB")]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-video-high-definition")])],1)],1)],1)],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Duration")]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[t._v(t._s(parseInt(e.duration))+"s")])],1)],1)],1)],1)],1)],1)],1),a("v-divider",{staticClass:"pl-4",attrs:{vertical:""}}),a("v-list-item-action",{staticClass:"headline mb-1"},[a("v-btn",{attrs:{icon:""},on:{click:[function(e){t.archived_modal=!0},function(a){return t.showDetails(e)}]}},[a("v-icon",[t._v("mdi-television-stop")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.setCurrentCampaign(e)}}},[a("v-icon",[t._v("mdi-eye")])],1),a("v-btn",{attrs:{icon:""}},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.loadImage(e.mediaType,e.campaignMedia),download:""}},[a("v-icon",[t._v("mdi-download")])],1)]),a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(i){var n=i.on,s=i.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(a){return t.createCurrentCampaign(e)}}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("Delete Campaign")])])],1)],1)],1)],1)],1)],1)})),1):a("div",t._l(t.searchItems,(function(e,i){return a("v-row",{key:i,attrs:{justify:"center"}},[a("v-col",{attrs:{md:"10"}},[a("transition",{attrs:{name:"fade"}},[a("v-card",{staticClass:"mx-auto",attrs:{"min-width":"400",outlined:"",transition:"fade"}},[a("v-list-item",{attrs:{"two-line":""}},["image/jpg"==e.mediaType||"image/jpeg"==e.mediaType||"image/png"==e.mediaType||"image/gif"==e.mediaType?a("v-list-item-avatar",{attrs:{tile:"",size:"120"}},[a("img",{attrs:{src:t.loadImage(e.mediaType,e.campaignMedia),alt:t.loadImage(e.mediaType,e.campaignMedia)}})]):a("v-list-item-avatar",{attrs:{tile:"",size:"120"}},[a("video",{attrs:{width:"600",height:"300",controls:"",duration:"5",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:t.loadImage(e.mediaType,e.campaignMedia)}}),t._v("\n                  Your browser does not support the video tag.\n                ")])]),a("v-list-item-content",[a("div",{staticClass:"display-1 font-weight-bold mb-4"},[a("span",{staticClass:"float-left"},[t._v(t._s(e.campaignName))]),a("div",{staticClass:"float-right caption"},[a("span",[t._v("Date:"+t._s(e.startDate))]),a("br"),a("span",[t._v("Uploader:"+t._s(e.user_name))])])]),a("v-divider",{staticClass:"pl-4"}),a("v-list-item-subtitle",[a("v-row",[a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.mediaType))]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-movie")])],1)],1)],1)],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Landscape Format")]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-monitor")])],1)],1)],1)],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.fSize)+"MB")]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-video-high-definition")])],1)],1)],1)],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Duration")]),a("v-list-item-subtitle",[a("v-btn",{attrs:{icon:""}},[t._v(t._s(parseInt(e.duration))+"s")])],1)],1)],1)],1)],1)],1)],1),a("v-divider",{staticClass:"pl-4",attrs:{vertical:""}}),a("v-list-item-action",{staticClass:"headline mb-1"},[a("v-btn",{attrs:{icon:""},on:{click:[function(e){t.archived_modal=!0},function(a){return t.showDetails(e)}]}},[a("v-icon",[t._v("mdi-television-stop")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.setCurrentCampaign(e)}}},[a("v-icon",[t._v("mdi-eye")])],1),a("v-btn",{attrs:{icon:""}},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.loadImage(e.mediaType,e.campaignMedia),download:""}},[a("v-icon",[t._v("mdi-download")])],1)]),a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(i){var n=i.on,s=i.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(a){return t.createCurrentCampaign(e)}}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("Delete Campaign")])])],1)],1)],1)],1)],1)],1)})),1),a("v-dialog",{attrs:{"max-width":"1000"},model:{value:t.archived_modal,callback:function(e){t.archived_modal=e},expression:"archived_modal"}},[a("v-card",{staticClass:"pa-5"},[a("v-card-title",{staticClass:"text-h5"},[t._v("New campaign "),a("v-spacer"),a("v-btn",{staticClass:"float-right",attrs:{icon:""},on:{click:function(e){t.archived_modal=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-tabs",{attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v(" Overview ")]),a("v-tab",[t._v(" Display ")])],1),a("v-tabs-items",{staticClass:"pa-4",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("h3",{staticClass:"font-weight-medium"},[t._v("General information")]),a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.library_campaign_data,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.value))])])})),0)]},proxy:!0}])}),a("v-divider",{staticClass:"my-4"}),a("h3",{staticClass:"font-weight-medium"},[t._v("Media File")]),a("v-simple-table",{attrs:{dense:"",stripped:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.current_library_media,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),"Media Name"==e.name?a("td",[a("span",{staticClass:"font-weight-medium orange--text",staticStyle:{cursor:"pointer"},on:{click:function(e){t.player=!0}}},[t._v(t._s(e.value))])]):a("td",[t._v(t._s(e.value))])])})),0)]},proxy:!0}])})],1)],1)],1),a("v-tab-item",[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("p",{staticClass:"text-center"},[t._v("Few Displays Available")])]),a("v-col",{attrs:{md:"8"}},[a("div",{staticClass:"map"},[a("Map",{attrs:{map_coordinates:t.map_coordinates}}),a("v-row",{attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"primary"}},[a("v-icon",[t._v("mdi-file-download")]),t._v("Download list")],1)],1)],1)])],1)],1)],1)],1)],1),a("v-dialog",{attrs:{justify:"center","max-width":"750"},model:{value:t.player,callback:function(e){t.player=e},expression:"player"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[a("v-spacer"),a("v-btn",{staticClass:"float-right",attrs:{fab:""},on:{click:function(e){t.player=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),"video/mp4"==t.mediaCampaign.mediaType||"video/ogg"==t.mediaCampaign.mediaType?a("v-card-text",[a("video",{attrs:{width:"700",height:"300",controls:""}},[a("source",{attrs:{src:t.loadImage(t.mediaCampaign.mediaType,t.mediaCampaign.campaignMedia)}}),t._v("\n          Your browser does not support the video tag.\n        ")])]):a("v-card-text",[a("img",{attrs:{src:t.loadImage(t.mediaCampaign.mediaType,t.mediaCampaign.campaignMedia),alt:t.loadImage(t.mediaCampaign.mediaType,t.mediaCampaign.campaignMedia),width:"700",height:"400"}})])],1)],1),a("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"400"},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}},[a("v-card",{attrs:{"max-width":"400"}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-icon",[t._v("mdi mdi-warning ")]),t._v(" "+t._s(t.modalText.headerText)+"\n        "),a("v-btn",{staticClass:"float-right",attrs:{icon:"",absolute:"",right:"",outlined:"",color:"white"},on:{click:function(e){t.deleteModal=!1}}},[a("v-icon",[t._v("mdi mdi-close")])],1)],1),a("v-card-text",[a("p",{staticClass:"pt-4 text-center text-h3"},[t._v("\n          "+t._s(t.modalText.questionText)+" "),a("br")])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.deleteCampaign()}}},[t._v("\n          "+t._s(t.modalText.actionText)+" "),a("v-icon",[t._v("mdi-check-outline")])],1)],1)],1)],1)],1)},n=[],s=a("a583"),o=s["a"],r=(a("75e3"),a("2877")),l=a("6544"),c=a.n(l),d=a("8336"),m=a("b0af"),v=a("99d9"),u=a("62ad"),p=a("a523"),h=a("169a"),f=a("ce7e"),g=a("132d"),b=a("da13"),_=a("1800"),y=a("8270"),w=a("5d23"),C=a("0fd9"),x=a("1f4f"),T=a("2fa4"),j=a("71a3"),k=a("c671"),O=a("fe57"),I=a("aac8"),S=a("8654"),$=a("71d9"),D=a("3a2f"),B=Object(r["a"])(o,i,n,!1,null,"30ce4008",null);e["default"]=B.exports;c()(B,{VBtn:d["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:u["a"],VContainer:p["a"],VDialog:h["a"],VDivider:f["a"],VIcon:g["a"],VListItem:b["a"],VListItemAction:_["a"],VListItemAvatar:y["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:C["a"],VSimpleTable:x["a"],VSpacer:T["a"],VTab:j["a"],VTabItem:k["a"],VTabs:O["a"],VTabsItems:I["a"],VTextField:S["a"],VToolbar:$["a"],VTooltip:D["a"]})},"8b37":function(t,e,a){},a583:function(t,e,a){"use strict";(function(t){var i=a("ade3"),n=(a("ac1f"),a("841c"),a("4160"),a("159b"),a("c975"),a("45fc"),a("4de4"),a("0d03"),a("d3b7"),a("25f0"),a("acd8"),a("4795"),a("2f62")),s=a("0212"),o=a("bc3a"),r=a.n(o),l={username:"pidigitadsignage",password:"Nelson@Akem@1000."},c={users:"http://digitad.us-east-2.elasticbeanstalk.com",piApp:"http://3.144.205.254:3000"};e["a"]={name:"MediaView",components:{Map:s["default"]},data:function(){var t;return t={search:!1,searchText:"",loading:!1,deleteModal:!1,currentCampaign:{},modalText:{headerText:"Delete Campaign",actionText:"Delete",questionText:"Are you sure you want to delete this campaign!"},player:!1,selection:1,lists:["turf","a","b"],found:"",tab:null,archived_modal:!1},Object(i["a"])(t,"player",!1),Object(i["a"])(t,"mediaCampaign",{mediaType:"image/jpg",campaignMedia:"1624294678.png"}),Object(i["a"])(t,"currentCampaignDisplays",[]),Object(i["a"])(t,"map_coordinates",[]),t},computed:Object(n["b"])(["activeCampaigns","library_campaign_data","currentCampaign","userDetails","current_library_media","library_campaigns","searchItems"]),created:function(){this.change()},methods:{search_campaigns:function(){var t=this;""!==this.searchText?(this.search=!0,this.library_campaigns.forEach((function(e){var a=e.campaignName.toLowerCase().indexOf(t.searchText.toLowerCase());if(console.log(a),-1!==a)if(t.searchItems.length>0){var i=t.searchItems.some((function(t){return t===e}));0==i&&t.searchItems.push(e)}else t.searchItems.push(e)}))):this.search=!1},createCurrentCampaign:function(t){this.currentCampaign=t,this.deleteModal=!0},searching:function(){var t=this;this.found=this.lists.filter((function(e){console.log(t.found),e===t.search&&(t.found=t.search)}))},deleteCampaign:function(){var e=this.currentCampaign,a=this.userDetails.user_id,i=e.campaignMedia,n=l.username,s=l.password,o=t.from(n+":"+s).toString("base64"),d={method:"delete",url:c.piApp+"/api/files/"+i,headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(o)}};r()(d).then((function(t){if(console.log(JSON.stringify(t.data)),1==t.data.success){var i=new FormData,n=JSON.stringify(e);i.append("data",n),i.append("user_id",a);var s=r.a.create({baseURL:c.users});s.post(c.users+"/server/deleteCampaign.php",i).then((function(t){console.log(t.data),1==t.data?location.reload():alert("Failed to delete!")}))["catch"]((function(t){console.log(t)}))}else alert("Failed to delete campaign")}))["catch"]((function(t){console.log(t)}))},setCurrentCampaign:function(t){this.mediaCampaign=t,this.player=!0},loadImage:function(t,e){return c.piApp+"/media/"+e},showDetails:function(t){var e=this;this.currentCampaign=t,this.currentCampaignDisplays=t.campaignDisplays,this.library_campaign_data[0].value=t.campaignName,this.library_campaign_data[1].value=t.created,this.library_campaign_data[2].value=t.user_name,this.library_campaign_data[3].value=t.startDate,this.library_campaign_data[4].value=t.endDate,this.library_campaign_data[5].value=t.numberOfScreens,this.library_campaign_data[6].value=t.campaignCapacity,this.current_library_media[0].value=t.campaignName,this.current_library_media[1].value=t.mediaType,this.current_library_media[2].value=t.mediaType,t.campaignDisplays.forEach((function(t){e.setScreens(t)}))},setScreens:function(t){var e=t.latitude,a=t.longitude,i={lat:parseFloat(e),lng:parseFloat(a)};this.map_coordinates.push(i)},reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)},change:function(){console.log("Changed!")}}}}).call(this,a("b639").Buffer)},c671:function(t,e,a){"use strict";var i=a("9d65"),n=a("4e82"),s=a("c3f0"),o=a("80d2"),r=a("58df"),l=Object(r["a"])(i["a"],Object(n["a"])("windowGroup","v-window-item","v-window")),c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots["default"]},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(o["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}});e["a"]=c.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=c.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})}}]);
//# sourceMappingURL=views-Media.f25da337.js.map