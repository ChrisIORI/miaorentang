(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5183c4ff"],{"125f":function(s,e,t){},"77a1":function(s,e,t){s.exports=t.p+"img/history.826bc899.jpg"},b245:function(s,e,t){"use strict";var i=t("125f"),a=t.n(i);a.a},bb51:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"home"},[i("swiper",{ref:"mySwiper",attrs:{id:"swiperBox",options:s.swiperOption}},[i("swiper-slide",{staticClass:"swiper-slide slide-one"},[i("div",{staticClass:"page"},[i("h3",[s._v("北京苗仁堂研究院")])]),i("p",{staticClass:"slogan"},[s._v("千年苗医，万年苗药")]),i("div",{staticStyle:{width:"760px",margin:"0 auto"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:t("77a1")}})]),i("div",{staticClass:"toptitleup"},[i("div",{staticClass:"mouse"})]),i("p",{staticClass:"mousep"},[s._v("鼠标滚动")])]),i("swiper-slide",{staticClass:"swiper-slide slide-two"},[i("div",{staticClass:"page"},[i("h3",[s._v("经典案例")]),i("p",[s._v("Suecessful Case")])]),i("ul",{staticClass:"case-item"},s._l(s.caseList,(function(e,t){return i("li",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.Img,expression:"item.Img",arg:"background-image"}],key:t},[i("router-link",{staticClass:"text-decoration",attrs:{to:{name:"casedetails",params:{id:e.Id}}}},[i("div",{staticClass:"case-item-hover"},[i("p",{staticClass:"hover-title"},[s._v(s._s(e.Title))]),i("div",{staticClass:"bottom"}),i("div",{staticClass:"more"},[i("span",[s._v("MORE")])])])])],1)})),0),i("p",{staticClass:"mousep"},[s._v("鼠标滚动")])]),i("swiper-slide",{staticClass:"swiper-slide slide-three"},[i("div",{staticClass:"page"},[i("h3",[s._v("最新资讯")]),i("p",[s._v("Latest News")])]),i("div",{staticClass:"news-content"},s._l(s.newsList,(function(e,t){return i("div",{key:t,staticClass:"news-content-item"},[i("div",{style:"order: "+(t%2==0?1:3)},[i("router-link",{staticClass:"text-decoration",attrs:{to:{name:"newsdetails",params:{id:e.Id}}}},[i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.Img,expression:"news.Img",arg:"background-image"}],staticClass:"item-img"})])],1),i("div",{staticStyle:{order:"2"}},[i("el-divider",[i("i",{staticClass:"el-icon-apple"})])],1),i("div",{staticClass:"item-content",style:"order: "+(t%2==0?3:1)},[i("h3",[s._v(s._s(e.Title))]),i("p",[s._v(s._s(e.Content))]),i("span",[s._v(s._s(e.CreateTime))])])])})),0),i("p",{staticClass:"mousep"},[s._v("鼠标滚动")])]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},a=[],o=t("6fe8"),n={name:"HelloWorld",components:{swiper:o["swiper"],swiperSlide:o["swiperSlide"]},data:function(){return{loading:!0,caseList:[],newsList:[],swiperOption:{loop:!0,autoplay:{delay:5e3},fadeEffect:{crossFade:!1},cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:100,shadowScale:.6},coverflowEffect:{rotate:30,stretch:10,depth:60,modifier:2,slideShadows:!0},flipEffect:{slideShadows:!0,limitRotation:!0},speed:1e3,pagination:{el:".swiper-pagination",clickable:!0},notNextTick:!0,direction:"vertical",grabCursor:!0,setWrapperSize:!0,autoHeight:!0,slidesPerView:1,mousewheel:!0,mousewheelControl:!0,height:window.innerHeight-60,resistanceRatio:0,observeParents:!0,on:{}}}},created:function(){},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){this.caseList=this.publicMethod.getCaseList(),this.newsList=this.publicMethod.getNewsList().slice(0,3),this.loading=!1}},l=n,r=(t("b245"),t("5511")),c=Object(r["a"])(l,i,a,!1,null,"3a1d898b",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5183c4ff.3b58bfb9.js.map