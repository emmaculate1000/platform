(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default-account"],{"38ef":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",s,!1),n),[i("v-icon",[t._v("mdi-account")]),i("b",{},[t._v(t._s(t.userDetails.full_name))])],1)]}}])},[i("v-list",{attrs:{tile:!1,flat:"",nav:""}},[[i("app-bar-item",{attrs:{to:"/"}},[i("v-list-item-title",[i("v-btn",{on:{click:function(e){return t.logout()}}},[t._v("Logout")])],1)],1)]],2)],1)},n=[],a=i("d12e"),o=a["a"],c=i("2877"),r=i("6544"),l=i.n(r),h=i("8336"),u=i("132d"),d=i("8860"),f=i("5d23"),p=i("e449"),v=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=v.exports;l()(v,{VBtn:h["a"],VIcon:u["a"],VList:d["a"],VListItemTitle:f["c"],VMenu:p["a"]})},d12e:function(t,e,i){"use strict";(function(t){i("0d03"),i("d3b7"),i("25f0"),i("4160"),i("159b");var s=i("2f62"),n=i("bc3a"),a=i.n(n),o={username:"pidigitadsignage",password:"Nelson@Akem@1000."},c={users:"https://app.digitadooh.com",piApp:"//ourcore.digitadooh.com:3000"};e["a"]={name:"DefaultAccount",methods:{logout:function(){var t={crossDomain:!0,withCredentials:!0},e=a.a.create({baseURL:c.users});e.get(c.users+"/server/php/logout.php",t).then((function(t){t.data;window.location=c.users+"/login"}))["catch"]((function(t){window.location=c.users+"/login"}))},piAuth:function(){var e=o.username,i=o.password,s=t.from(e+":"+i).toString("base64"),n={method:"get",url:c.piApp+"/api/files/",headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(s)}};a()(n).then((function(t){}))["catch"]((function(t){console.log(t)}))},authenticateClient:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=a.a.create({baseURL:c.users});i.get(c.users+"/server/user_info.php",e).then((function(e){var i=e.data;0!==i?(t.userDetails.user_id=i.id,t.userDetails.f_name=i.f_name,t.userDetails.l_name=i.l_name,t.userDetails.email=i.email,t.userDetails.country=i.country,t.userDetails.companyName=i.companyName,t.userDetails.city=i.city,t.userDetails.homeAddress=i.user_address,t.userDetails.position_in_company=i.position_in_company,t.userDetails.companyAddress=i.company_address,t.userDetails.company_reg_num=i.company_reg_num,t.userDetails.full_name=i.f_name+" "+i.l_name):window.location=c.users+"/login"}))["catch"]((function(t){window.location=c.users+"/login",console.log(t)}))},fetch_user_campaigns:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=a.a.create({baseURL:c.users});i.get(c.users+"/server/fetch_campaigns.php",e).then((function(e){var i=e.data;i.length>0&&i.forEach((function(e){console.log(e),0==e.approved?t.unApprovedCampaigns.push(e):1==e.approved&&0==e.paid?(t.not_paid_campaigns.push(e),t.library_campaigns.push(e)):1==e.approved&&1==e.paid&&(t.activeCampaigns.push(e),t.library_campaigns.push(e))}))}))["catch"]((function(t){console.log(t)}))},fetchArchives:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=a.a.create({baseURL:c.users});i.get(c.users+"/server/fetch_archives.php",e).then((function(e){var i=e.data;i.length>0&&i.forEach((function(e){t.archivedCampaigns.push(e),t.library_campaigns.push(e)}))}))["catch"]((function(t){console.log(t)}))},fetchScreens:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=a.a.create({baseURL:c.users});i.get(c.users+"/server/fetch_screens.php",e).then((function(e){var i=e.data;if(i.length>0){i.forEach((function(e){t.screensInfo.push(e)})),t.screenCities.push("Default"),t.screenStates.push("Default");for(var s=0;s<i.length;s++){var n=i[s].city,a=i[s].state;t.screenCities.push(n),t.screenStates.push(a),t.screen_checkboxStates.push(0)}}}))["catch"]((function(t){console.log(t)}))}},data:function(){return{profile:[{title:"Profile"},{title:"Settings"},{divider:!0},{title:"Log out"}],credentials:{name:"",email:""}}},mounted:function(){this.piAuth(),this.authenticateClient(),this.fetch_user_campaigns(),this.fetchArchives(),this.fetchScreens()},computed:Object(s["b"])(["activeCampaigns","archivedCampaigns","unApprovedCampaigns","not_paid_campaigns","userDetails","library_campaigns","screensInfo","screenCities","screenStates","screen_checkboxStates"])}}).call(this,i("b639").Buffer)},e449:function(t,e,i){"use strict";var s=i("ade3"),n=i("2909"),a=i("5530"),o=(i("a9e3"),i("acd8"),i("e25e"),i("7db0"),i("c975"),i("a630"),i("3ca3"),i("99af"),i("498a"),i("4795"),i("caad"),i("2532"),i("ee6f"),i("480e")),c=i("4ad4"),r=i("16b7"),l=i("b848"),h=i("f573"),u=i("e4d3"),d=i("a236"),f=i("f2e7"),p=i("7560"),v=i("a293"),m=i("dc22"),g=i("58df"),b=i("d9bd"),x=i("80d2"),_=Object(g["a"])(l["a"],r["a"],h["a"],u["a"],d["a"],f["a"],p["a"]);e["a"]=_.extend({name:"v-menu",directives:{ClickOutside:v["a"],Resize:m["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(x["f"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(x["f"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(x["f"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(x["f"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(x["f"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(x["f"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==x["t"].tab){if(t.keyCode===x["t"].down)this.nextTile();else if(t.keyCode===x["t"].up)this.prevTile();else if(t.keyCode===x["t"].end)this.lastTile();else if(t.keyCode===x["t"].home)this.firstTile();else{if(t.keyCode!==x["t"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=c["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(a["a"])(Object(a["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=h["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(n["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(a["a"])(Object(a["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(a["a"])(Object(a["a"])(Object(a["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(s["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===x["t"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[x["t"].up,x["t"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=default-account.3abcff34.js.map