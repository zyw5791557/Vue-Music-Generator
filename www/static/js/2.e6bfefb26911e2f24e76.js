webpackJsonp([2],{582:function(t,e,s){"use strict";function i(t){s(609)}Object.defineProperty(e,"__esModule",{value:!0});var a=s(599),n=s.n(a);for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);var r=s(611),l=s(9),c=i,d=l(n.a,r.a,!1,c,"data-v-f2aa8268",null);e.default=d.exports},590:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(58),n=i(a),o=s(212),r=i(o),l=s(213),c=i(l),d=s(130),u=s(86),p=s(49),f=(0,d.prefixStyle)("transform"),g=(0,d.prefixStyle)("backdrop-filter");e.default={name:"MusicList",components:{Loading:r.default,SongList:c.default},mixins:[u.playlistMixin],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.scrollOptions={probeType:3},this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.scrollWrapper.style.top=this.imageHeight+"px"},methods:(0,n.default)({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.scrollWrapper.style.bottom=e,this.$refs.scroll.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})}},(0,p.mapActions)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTransalteY,t),s=1,i=0,a=0,n=Math.abs(t/this.imageHeight);t>0?(s=1+n,i=10):a=Math.min(20,20*n),this.$refs.layer.style[f]="translate3d(0,"+e+"px,0)",this.$refs.filter.style[g]="blur("+a+"px)",t<this.minTransalteY?(i=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[f]="scale("+s+")",this.$refs.bgImage.style.zIndex=i}}}},591:function(t,e,s){"use strict";function i(t){s(592)}Object.defineProperty(e,"__esModule",{value:!0});var a=s(590),n=s.n(a);for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);var r=s(594),l=s(9),c=i,d=l(n.a,r.a,!1,c,"data-v-7e69a6ec",null);e.default=d.exports},592:function(t,e,s){var i=s(593);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(580)("fd3f6152",i,!0,{})},593:function(t,e,s){e=t.exports=s(579)(!1),e.push([t.i,".music-list[data-v-7e69a6ec]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-7e69a6ec]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-7e69a6ec]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-7e69a6ec]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-7e69a6ec]{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-7e69a6ec]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-7e69a6ec]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-7e69a6ec]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-7e69a6ec]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-7e69a6ec]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-7e69a6ec]{position:relative;height:100%;background:#222}.music-list .scroll-wrapper[data-v-7e69a6ec]{position:absolute;top:0;bottom:0;width:100%;background:#222}.music-list .scroll-wrapper .cube-scroll-wrapper[data-v-7e69a6ec]{overflow:visible}.music-list .scroll-wrapper .song-list-wrapper[data-v-7e69a6ec]{padding:20px 30px}.music-list .scroll-wrapper .loading-container[data-v-7e69a6ec]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}",""])},594:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-list"},[s("div",{staticClass:"back",on:{click:t.back}},[s("i",{staticClass:"icon-back"})]),t._v(" "),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),s("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[s("div",{staticClass:"play-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[s("i",{staticClass:"icon-play"}),t._v(" "),s("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),s("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),s("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),s("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper"},[s("cube-scroll",{ref:"scroll",attrs:{"listen-scroll":t.listenScroll,options:t.scrollOptions},on:{scroll:t.scroll}},[s("div",{staticClass:"song-list-wrapper"},[s("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[s("loading")],1)],1)])},a=[],n={render:i,staticRenderFns:a};e.a=n},595:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(){var t=(0,d.default)({},f.commonParams,{platform:"h5",uin:0,needNewCode:1});return(0,p.default)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,f.options)}function n(){var t=(0,d.default)({},f.commonParams,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return(0,m.default)({url:h,method:"post",data:{method:"get",baseURL:"http://ustbhuangyi.com/music/api/getDiscList",data:t}}).then(function(t){return l.default.resolve(t.data)})}function o(t){var e=(0,d.default)({},f.commonParams,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return(0,m.default)({url:h,method:"post",data:{method:"get",baseURL:"http://ustbhuangyi.com/music/api/getCdInfo",data:e}}).then(function(t){return l.default.resolve(t.data)})}Object.defineProperty(e,"__esModule",{value:!0});var r=s(66),l=i(r),c=s(87),d=i(c);e.getRecommend=a,e.getDiscList=n,e.getSongList=o;var u=s(211),p=i(u),f=s(57),g=s(131),m=i(g),h="http://request.emlice.top/ceshi"},599:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(58),n=i(a),o=s(591),r=i(o),l=s(595),c=s(57),d=s(49),u=s(88);e.default={name:"Disc",components:{MusicList:r.default},computed:(0,n.default)({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},(0,d.mapGetters)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");(0,l.getSongList)(this.disc.dissid).then(function(e){e.code===c.ERR_OK&&(0,u.processSongsUrl)(t._normalizeSongs(e.cdlist[0].songlist)).then(function(e){t.songs=e})})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){(0,u.isValidMusic)(t)&&e.push((0,u.createSong)(t))}),e}}}},609:function(t,e,s){var i=s(610);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(580)("4103b522",i,!0,{})},610:function(t,e,s){e=t.exports=s(579)(!1),e.push([t.i,".slide-enter-active[data-v-f2aa8268],.slide-leave-active[data-v-f2aa8268]{transition:all .3s}.slide-enter[data-v-f2aa8268],.slide-leave-to[data-v-f2aa8268]{transform:translate3d(100%,0,0)}",""])},611:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},a=[],n={render:i,staticRenderFns:a};e.a=n}});