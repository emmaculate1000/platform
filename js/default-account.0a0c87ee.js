(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default-account"],{"38ef":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-menu",{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",s,!1),n),[i("v-icon",[t._v("mdi-account")]),i("b",{},[t._v(t._s(t.userDetails.full_name))])],1),i("v-btn",t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",s,!1),[i("v-icon",[t._v("mdi-wallet")]),i("b",{},[t._v("Wallet: XAF "+t._s(t.walletBalance))])],1)]}}])},[i("v-list",{attrs:{tile:!1,flat:"",nav:""}},[[i("app-bar-item",{attrs:{to:"/"}},[i("v-list-item-title",[i("v-btn",{on:{click:function(e){return t.logout()}}},[t._v("Logout")])],1)],1)]],2)],1)],1)},n=[],a=(i("4160"),i("159b"),i("e25e"),i("2f62")),o=i("bc3a"),c=i.n(o),r={users:"https://app.digitadooh.com",piApp:"https://ourcore.digitadooh.com"},h={name:"DefaultAccount",methods:{logout:function(){var t={crossDomain:!0,withCredentials:!1},e=c.a.create({baseURL:r.users});e.get(r.users+"/server/logout.php",t).then((function(t){var e=t.data;console.log(e),window.location="https://app.digitadooh.com/login"}))["catch"]((function(t){console.log(t)}))},authenticateClient:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=c.a.create({baseURL:r.users});i.get(r.users+"/server/user_info.php",e).then((function(e){var i=e.data;0!==i&&(t.userDetails.user_id=i.id,t.userDetails.f_name=i.f_name,t.userDetails.l_name=i.l_name,t.userDetails.email=i.email,t.userDetails.country=i.country,t.userDetails.companyName=i.companyName,t.userDetails.city=i.city,t.userDetails.homeAddress=i.user_address,t.userDetails.position_in_company=i.position_in_company,t.userDetails.companyAddress=i.company_address,t.userDetails.company_reg_num=i.company_reg_num,t.userDetails.full_name=i.f_name+" "+i.l_name)}))["catch"]((function(t){}))},fetch_user_campaigns:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=c.a.create({baseURL:r.users});i.get(r.users+"/server/fetch_campaigns.php",e).then((function(e){var i=e.data;i.length>0&&i.forEach((function(e){0==e.approved?t.unApprovedCampaigns.push(e):1==e.approved&&0==e.paid?(t.not_paid_campaigns.push(e),t.library_campaigns.push(e)):1==e.approved&&1==e.paid&&parseInt(e.expired)!==e.campaignDisplays.length?(t.activeCampaigns.push(e),t.library_campaigns.push(e)):2==e.approved?t.rejectedCampaign.push(e):parseInt(e.expired)==e.campaignDisplays.length&&t.expired_campaigns.push(e)}))}))["catch"]((function(t){console.log(t)}))},fetch_history:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=c.a.create({baseURL:r.users});i.get(r.users+"/server/fetch_history.php",e).then((function(e){var i=e.data;i.length>0&&i.forEach((function(e){t.history.push(e)}))}))["catch"]((function(t){console.log(t)}))},fetch_transactions:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=c.a.create({baseURL:r.users});i.get(r.users+"/server/fetch_transactions.php",e).then((function(e){var i=e.data;i.length>0&&i.forEach((function(e){t.transactions.push(e)}))}))["catch"]((function(t){console.log(t)}))},fetchArchives:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=c.a.create({baseURL:r.users});i.get(r.users+"/server/fetch_archives.php",e).then((function(e){var i=e.data;i.length>0&&i.forEach((function(e){t.archivedCampaigns.push(e),t.library_campaigns.push(e)}))}))["catch"]((function(t){console.log(t)}))},getWallet:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=c.a.create({baseURL:r.users});i.get(r.users+"/server/getWallet.php",e).then((function(e){1==e.data.success&&(t.wallet.push(e.data),t.walletBalance=e.data.balance)}))["catch"]((function(t){console.log(t)}))},fetchScreens:function(){var t=this,e={crossDomain:!0,withCredentials:!0},i=c.a.create({baseURL:r.users});i.get(r.users+"/server/fetch_screens.php",e).then((function(e){var i=e.data;if(i.length>0){var s="";i.forEach((function(e){var i=e.city;i.toLowerCase()!==s.toLowerCase()&&(t.premium_cities.push(i),t.premiumCityScreens.push(e),s=i),t.screensInfo.push(e)})),t.screenCities.push("Default"),t.screenStates.push("Default");for(var n=0;n<i.length;n++){var a=i[n].city,o=i[n].state;t.screenCities.push(a),t.screenStates.push(o),t.screen_checkboxStates.push(0)}}}))["catch"]((function(t){console.log(t)}))}},data:function(){return{profile:[{title:"Profile"},{title:"Settings"},{divider:!0},{title:"Log out"}],credentials:{name:"",email:""},walletBalance:0}},mounted:function(){this.getWallet(),this.authenticateClient(),this.fetch_user_campaigns(),this.fetch_history(),this.fetchArchives(),this.fetchScreens(),this.fetch_transactions()},computed:Object(a["b"])(["expired_campaigns","activeCampaigns","rejectedCampaign","archivedCampaigns","unApprovedCampaigns","not_paid_campaigns","userDetails","library_campaigns","screensInfo","screenCities","screenStates","screen_checkboxStates","wallet","premium_cities","premiumCityScreens","history","transactions"])},l=h,u=i("2877"),f=i("6544"),d=i.n(f),p=i("8336"),v=i("132d"),m=i("8860"),g=i("5d23"),b=i("e449"),w=Object(u["a"])(l,s,n,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:p["a"],VIcon:v["a"],VList:m["a"],VListItemTitle:g["c"],VMenu:b["a"]})},e449:function(t,e,i){"use strict";var s=i("ade3"),n=i("2909"),a=i("5530"),o=(i("a9e3"),i("acd8"),i("e25e"),i("7db0"),i("c975"),i("a630"),i("3ca3"),i("99af"),i("498a"),i("4795"),i("caad"),i("2532"),i("ee6f"),i("480e")),c=i("4ad4"),r=i("16b7"),h=i("b848"),l=i("f573"),u=i("e4d3"),f=i("a236"),d=i("f2e7"),p=i("7560"),v=i("a293"),m=i("dc22"),g=i("58df"),b=i("d9bd"),w=i("80d2"),y=Object(g["a"])(h["a"],r["a"],l["a"],u["a"],f["a"],d["a"],p["a"]);e["a"]=y.extend({name:"v-menu",directives:{ClickOutside:v["a"],Resize:m["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(w["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(w["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(w["g"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(w["g"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(w["g"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(w["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==w["y"].tab){if(t.keyCode===w["y"].down)this.nextTile();else if(t.keyCode===w["y"].up)this.prevTile();else if(t.keyCode===w["y"].end)this.lastTile();else if(t.keyCode===w["y"].home)this.firstTile();else{if(t.keyCode!==w["y"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=c["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(a["a"])(Object(a["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=l["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(n["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(a["a"])(Object(a["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(a["a"])(Object(a["a"])(Object(a["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(s["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===w["y"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[w["y"].up,w["y"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},ee6f:function(t,e,i){},f573:function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("e25e"),i("d3b7"),i("fe6c")),a=i("21be"),o=i("4ad4"),c=i("75eb"),r=i("58df"),h=i("80d2"),l=Object(r["a"])(a["a"],n["a"],o["a"],c["a"]);e["a"]=l.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width),n=0;if(n+=this.left?i-(s-t.width):i,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-a:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(h["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(h["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,a=t+n,o=i<a;return o&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):o&&!this.allowOverflow?t=i-n-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=o["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(s["a"])({},this.dimensions.activator),content:Object(s["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})}}]);
//# sourceMappingURL=default-account.0a0c87ee.js.map