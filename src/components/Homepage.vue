<template>
  <div class="homepage">
    <ul class='nav'>
        <li><a href="#/" style='color:white;'>首页</a></li>
        <li><a href="#/play">娱乐</a></li>
        <li><a href="#/game">游戏</a></li>
        <li><a href="#/article">文章</a></li>
        <li v-on:click='navShow()'>...</li>  
    </ul>
    <!-- 点击....后出现的导航 -->
    <ul class='nav'>
        <li style='background:white;' v-show='navFlag'><a href="#/animate">动画</a></li>
        <li v-show='navFlag'><a href="#/music">音乐</a></li>
        <li v-show='navFlag'><a href="#/keji">科技</a></li>
        <li v-show='navFlag'><a href="#/sport">体育</a></li>
        <li v-show='navFlag'><a href="#/movie">影视</a></li>
    </ul>
    <!-- 点击后出现的额外ul -->
    
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='img in swiperData'>
            <img v-bind:src='img.image'>
          </div>
      </div>
      <div class="swiper-pagination" id='btns'></div>
    </div>
    <!-- <div>
      <ul>
        <li v-for="obj in homepageData">
          {{obj.title}}
        </li>
      </ul>
    </div> -->
    <div class='http'>
      <!-- 文章 -->
      <div class='article'>
        <h1>{{articleName}}</h1>
        <!-- 文章内的细节 -->
        <div class='article_detail'>
          <dl>
            <img src="http://imgs.aixifan.com/content/2017_02_19/1487483291.jpg">
            <h4>外国网民评论《三生三世十里桃花》零差评爆红国外</h4>
            <p v-for='obj in homepageData'>{{obj.title}}<span>{{obj.visit.comments}}</span></p>
          </dl>
        </div>
      </div>
      <!-- 动画 -->
      <div class='animate'>
        <h1>{{animateName}}</h1>
        <!-- 动画内的细节 -->
        <div class='animate_detail'>
          <dl v-for='obj in animateData'>
            <dt><img v-bind:src="obj.image"></dt>
            <dd>{{obj.title}}</dd>
          </dl>
        </div>
      </div>
      <!-- 音乐 -->
      <div class='animate'>
        <h1>{{musicName}}</h1>
        <!-- 音乐内的细节 -->
        <div class='animate_detail'>
          <dl v-for='obj in musicData'>
            <dt><img v-bind:src="obj.image"></dt>
            <dd>{{obj.title}}</dd>
          </dl>
        </div>
      </div>
      <!-- 游戏 -->
      <div class='animate'>
        <h1>{{gameName}}</h1>
        <!-- 游戏内的细节 -->
        <div class='animate_detail'>
          <dl v-for='obj in gameData'>
            <dt><img v-bind:src="obj.image"></dt>
            <dd>{{obj.title}}</dd>
          </dl>
        </div>
      </div>
      <!-- 娱乐 -->
      <div class='animate'>
        <h1>{{playName}}</h1>
        <!-- 娱乐内的细节 -->
        <div class='animate_detail'>
          <dl v-for='obj in playData'>
            <dt><img v-bind:src="obj.image"></dt>
            <dd>{{obj.title}}</dd>
          </dl>
        </div>
      </div>
      <!-- 科技 -->
      <div class='animate'>
        <h1>{{kejiName}}</h1>
        <!-- 科技内的细节 -->
        <div class='animate_detail'>
          <dl v-for='obj in kejiData'>
            <dt><img v-bind:src="obj.image"></dt>
            <dd>{{obj.title}}</dd>
          </dl>
        </div>
      </div>
      <!-- 体育 -->
      <div class='animate'>
        <h1>{{sportName}}</h1>
        <!-- 体育内的细节 -->
        <div class='animate_detail'>
          <dl v-for='obj in sportData'>
            <dt><img v-bind:src="obj.image"></dt>
            <dd>{{obj.title}}</dd>
          </dl>
        </div>
      </div>
      <!-- 影视 -->
      <div class='animate'>
        <h1>{{movieName}}</h1>
        <!-- 影视内的细节 -->
        <div class='animate_detail'>
          <dl v-for='obj in movieData'>
            <dt><img v-bind:src="obj.image"></dt>
            <dd>{{obj.title}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from './../../static/swiper.js'
require('./../../static/swiper.css')
export default {
  name: 'homepage',
  data () {
    return {
      navFlag: false,
      homepageData: {},
      animateData: {},
      musicData: {},
      gameData: {},
      playData: {},
      kejiData: {},
      sportData: {},
      movieData: {},
      swiperData: {},
      articleName: '',
      musicName: '',
      gameName: '',
      playName: '',
      kejiName: '',
      sportName: '',
      movieName: '',
      animateName: ''
    }
  },
  created () {
    this.$http.get('/api/homeData').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.articleName = response.homeData[8].name
        this.animateName = response.homeData[6].name
        this.musicName = response.homeData[11].name
        this.gameName = response.homeData[9].name
        this.playName = response.homeData[7].name
        this.kejiName = response.homeData[15].name
        this.sportName = response.homeData[16].name
        this.movieName = response.homeData[12].name
        this.homepageData = response.homeData[8].contents
        this.animateData = response.homeData[6].contents
        this.musicData = response.homeData[11].contents
        this.gameData = response.homeData[9].contents
        this.playData = response.homeData[7].contents
        this.kejiData = response.homeData[15].contents
        this.sportData = response.homeData[16].contents
        this.movieData = response.homeData[12].contents
        this.swiperData = response.homeData[0].contents
      }
    })
  },
  components: {},
  methods: {
      navShow: function () {
        this.navFlag = !this.navFlag
      }
  },
  mounted () {
    // console.log('挂载好了')
    var mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      autoplay: 1000,
      loop: true,
      autoplayDisableOnInteraction: false,
      observer: true,
      observeParents: true,
      paginationClickable: true
    })
    console.log(mySwiper)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.nav{
  width: 100%;
  display: flex;
  list-style: none;
}
.nav li{
  flex: 1;
  text-align: center;
  padding: 0.1rem 0;
  font-size: 0.35rem;
  padding:2% 0;
  color:rgb(116,116,116);
  cursor: pointer;
}
.nav li a{
  color:rgb(116,116,116);
}
.nav li:nth-child(1){
  background:rgb(255,133,27);
}
/*.nav li:nth-child(1) a{
  color: white;
}*/
#swiper{
  width: 100%;
}
#swiper img{
  width: 100%;
}
#article{
  width: 100%;
}
.http{
  width: 100%;
  background:rgb(244,244,244);
  box-sizing: border-box;
  padding:0 2%;
}
.article{
  /*margin-top: 0.5rem;*/
  box-sizing: border-box;
}
.article h1{
  color:rgb(255,133,27);
  font-weight: normal;
  font-size: 0.4rem;
  height: 1rem;
  line-height: 1rem;
}
.article_detail {
  width: 100%;
  background:white;
  padding:2%;
  box-sizing: border-box;

}
.article_detail dl{
  width: 100%;
  overflow: hidden;
  
}
.article_detail dl img{
  float: left;
  margin-right:4%;
  width: 30%;
}
.article_detail dl h4{
  font-size: 0.35rem;
  font-weight: normal;
   color:rgb(114,114,114);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.article_detail dl p{
  color:rgb(150,150,150);
  padding-top: 3%;
  font-size: 0.3rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 3%;
}
.article_detail dl p:nth-child(3){
  margin-top: 4%;
}
.article_detail dl p span{
  float: right;
  margin-right: 2%;
  text-indent: 0.5rem;
  background:url(../assets/t1.png) no-repeat left center;
  background-size: 50%;
}
.article_detail dl p:nth-child(3){
  font-size: 0.27rem;
}
.article_detail dl p:nth-child(3) span{
  display: none;
}
.animate h1{
  color:rgb(255,133,27);
  font-weight: normal;
  font-size: 0.4rem;
  height: 1rem;
  line-height: 1rem;
}
.animate_detail{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
}
.animate_detail dl{
  width: 48%;
  /*margin-right:4%;*/
  margin-bottom:4%;
  box-shadow: 0 0 0.05rem #ccc;
}
.animate_detail dl dt {
  width: 100%;
  overflow: hidden;
}
.animate_detail dl dt img{
  width: 100%;
  float: left;
}
.animate_detail dl dd{
  width: 100%;
  white-space:nowrap; 
  text-overflow:ellipsis; 
  overflow: hidden; 
  background:white;
  height:0.8rem;
  line-height: 0.8rem;
  text-indent: 0.1rem;
  font-size: 0.3rem;
  color:rgb(133,133,133);
}
/*swiper*/
.swiper-container{
  width: 100%;
  height: 5.2rem;
  background:white;
}
.swiper-container img{
  width: 100%;
  height: 100%;
}
#btns {
  position: absolute;
  left: 30%;
}

</style>
