(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{243:function(t,e,n){"use strict";n.d(e,"b",(function(){return c}));var r=n(3),o=n(1);function c(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return o.a.extend({name:"toggleable",model:{prop:e,event:n},props:Object(r.a)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(r.a)(t,e,(function(t){this.isActive=!!t})),Object(r.a)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var l=c();e.a=l},244:function(t,e,n){"use strict";n(31),n(49),n(50);var r={baseRouter:function(){var t="/chartered/";return t=window.location.hostname.includes("localhost")?"/":"/chartered/",t},nl2br:function(t){return(t+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2")},scrollToTop:function(t){var e=-window.scrollY/(t/15),n=setInterval((function(){0!==window.scrollY?window.scrollBy(0,e):clearInterval(n)}),15)}};e.a=r},245:function(t,e,n){"use strict";n(149)("small",(function(t){return function(){return t(this,"small","","")}}))},246:function(t,e,n){"use strict";n(245);var r=n(1);e.a=r.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},253:function(t,e,n){"use strict";n(24),n(12),n(7),n(4),n(13);var r,o=n(3),c=(n(64),n(148),n(49),n(50),n(245),n(333),n(281)),l=n(241),h=n(246),d=n(105),v=n(27),m=n(1),f=n(104);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));var S=Object(f.a)(c.a,l.a,h.a,d.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(v.q)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(v.o)(t).find((function(e){return t[e]}));return e&&r[e]||Object(v.f)(this.size)},getDefaultData:function(){var t=Boolean(this.listeners$.click||this.listeners$["!click"]);return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:y({"aria-hidden":!t,role:t?"button":null},this.attrs$),on:this.listeners$}},applyColors:function(data){data.class=y({},data.class,{},this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),r="material-icons",o=t.indexOf("-"),c=o<=-1;c?n.push(t):function(t){return["fas","far","fal","fab"].some((function(e){return t.includes(e)}))}(r=t.slice(0,o))&&(r=""),data.class[r]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.tag,data,n)},renderSvgIcon:function(t,e){var data=this.getDefaultData();data.class["v-icon--svg"]=!0,data.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.attrs$["aria-label"],"aria-label":this.attrs$["aria-label"]};var n=this.getSize();return n&&(data.style={fontSize:n,height:n,width:n},data.attrs.height=n,data.attrs.width=n),this.applyColors(data),e("svg",data,[e("path",{attrs:{d:t}})])},renderSvgIconComponent:function(t,e){var data=this.getDefaultData();data.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(data.style={fontSize:n,height:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(component,data)}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=m.a.extend({name:"v-icon",$_wrapperFor:S,functional:!0,render:function(t,e){var data=e.data,n=e.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),t(S,data,r?[r]:n)}})},261:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(3),o=n(273);function c(t,e,n){return Object(o.a)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(r.a)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}c("itemGroup")},273:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(3),o=n(1),c=n(28);function l(t,e){return function(){return Object(c.c)("The ".concat(t," component must be used inside a ").concat(e))}}function h(t,e,n){var c=e&&n?{register:l(e,n),unregister:l(e,n)}:null;return o.a.extend({name:"registrable-inject",inject:Object(r.a)({},t,{default:c})})}},332:function(t,e,n){"use strict";n.r(e);var r=n(244),o={props:{regions:{type:Array,required:!0},attractions:{type:Array,required:!0}},data:function(){return{tags:[{text:"ALL",value:"All"},{text:"台北",value:"Taipei"},{text:"台中",value:"Taichung"},{text:"南投",value:"Nantou"},{text:"嘉義",value:"Chiayi"},{text:"台南",value:"Tainan"},{text:"高雄",value:"Kaohsiung"},{text:"宜蘭",value:"Yilan"},{text:"花蓮",value:"Hualien"},{text:"台東",value:"Taitung"}],currentTag:null}},computed:{currentAttractions:function(){var t=this;return this.currentTag&&"All"!==this.currentTag?this.attractions.filter((function(e){return e.city===t.currentTag})):this.attractions}},methods:{chooseTag:function(t){this.currentTag=t,console.log(this.currentTag)},combineImgPath:function(t){return"".concat(r.a.baseRouter(),"attractions/").concat(t)},generateThumb:function(t){return"".concat(r.a.baseRouter(),"attractions/thumbs/").concat(t)}}},c=n(48),l=n(106),h=n.n(l),d=n(266),v=n(240),m=n(347),f=n(366),x=n(396),y=n(377),S=n(342),_=n(397),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-container",{attrs:{fluid:""}},[n("h3",{staticClass:"display-1 text-center"},[t._v("\n      景點介紹\n    ")]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[n("v-chip-group",{staticClass:"city-group",attrs:{column:"","active-class":"primary--text"}},t._l(t.regions,(function(e,r){return n("v-chip",{key:r,on:{click:function(n){return t.chooseTag(e.id)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)],1)],1),t._v(" "),n("v-row",t._l(t.currentAttractions,(function(data,e){return n("v-col",{key:e,attrs:{cols:"12",lg:"3",md:"4",sm:"6",xs:"12"}},[n("v-card",{staticClass:"attraction-card"},[n("v-img",{staticClass:"white--text align-end",attrs:{src:t.combineImgPath(data.img),"lazy-src":t.generateThumb(data.img)}},[n("v-card-title",{staticClass:"attraction-card__title"},[t._v("\n              "+t._s(data.name)+"\n            ")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,"7004305a",null);e.default=component.exports;h()(component,{VCard:d.a,VCardTitle:v.c,VChip:m.a,VChipGroup:f.a,VCol:x.a,VContainer:y.a,VImg:S.a,VRow:_.a})},333:function(t,e,n){var content=n(334);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("6b715e77",content,!0,{sourceMap:!1})},334:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;font-feature-settings:"liga";font-size:24px;-webkit-box-pack:center;justify-content:center;letter-spacing:normal;line-height:1;text-indent:0;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.6}.v-icon--is-component,.v-icon--svg{height:24px;width:24px}.v-icon--svg{fill:currentColor}.v-icon--dense--is-component{height:20px}',""])},342:function(t,e,n){"use strict";n(148),n(357),n(64);var r=n(10);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){var n=e.modifiers||{},c=e.value,l="object"===Object(r.a)(c)?c.handler:c,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){if(l&&(!n.quiet||t._observe.init)){var c=Boolean(e.find((function(t){return t.isIntersecting})));l(e,r,c)}t._observe.init&&n.once?o(t):t._observe.init=!0}}),c.options||{});t._observe={init:!1,observer:h},h.observe(t)},unbind:o},l=(n(359),n(324)),h=n(104),d=Object(h.a)(l.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),v=n(28);e.a=d.extend({name:"v-img",directives:{intersect:c},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect:function(){return"undefined"!=typeof window&&"IntersectionObserver"in window},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!this.hasIntersect||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(v.b)("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(v.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):null!=e&&setTimeout(n,e)};n()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,modifiers:{once:!0},value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},357:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("1cdf85c7",content,!0,{sourceMap:!1})},358:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""])},359:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("2fba213c",content,!0,{sourceMap:!1})},360:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;-webkit-box-flex:1;flex:1 0 auto;max-width:100%;display:-webkit-box;display:flex}.v-responsive__content{-webkit-box-flex:1;flex:1 0 0px;max-width:100%}.v-responsive__sizer{-webkit-transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);-webkit-box-flex:0;flex:0 0 0px}",""])}}]);