<template>
  <div class="homepage">
    <ul id='nav'>
        <li><a href="#/">首页</a></li>
        <li><a href="#/play">娱乐</a></li>
        <li><a href="#/game">游戏</a></li>
        <li><a href="#/article">文章</a></li>
        <li>...</li>
    </ul>
    <!-- <div id='swiper'><img src="../assets/swiper.png"></div> -->
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
            <img src="http://cdn.aixifan.com/dotnet/20120923/style/image/cover-day.png">
            <h4>退出！又一个国家玩不起航母了</h4>
            <p v-for='obj in homepageData'>{{obj.title}}}<span>{{obj.visit.comments}}</span></p>
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
        this.musicName = response.homeData[10].name
        this.gameName = response.homeData[9].name
        this.playName = response.homeData[7].name
        this.kejiName = response.homeData[14].name
        this.sportName = response.homeData[15].name
        this.movieName = response.homeData[11].name
        this.homepageData = response.homeData[8].contents
        this.animateData = response.homeData[6].contents
        this.musicData = response.homeData[10].contents
        this.gameData = response.homeData[9].contents
        this.playData = response.homeData[7].contents
        this.kejiData = response.homeData[14].contents
        this.sportData = response.homeData[15].contents
        this.movieData = response.homeData[11].contents
        this.swiperData = response.homeData[0].contents
      }
    })
  },
  components: {},
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
#nav{
  width: 100%;
  display: flex;
  list-style: none;
}
#nav li{
  flex: 1;
  text-align: center;
  padding: 0.1rem 0;
  font-size: 0.35rem;
}
#nav li:nth-child(1){
  background:rgb(255,133,27);
}
#nav li:nth-child(1) a{
  color: white;
}
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
  width: 20%;
}
.article_detail dl h4{
  font-size: 0.35rem;
  font-weight: normal;
   color:rgb(114,114,114);
}
.article_detail dl p{
  color:rgb(150,150,150);
  margin-top: 3%;
  font-size: 0.3rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
}
.article_detail:nth-child(1) dl p{
  margin-top:8%;
}
.article_detail dl p span{
  float: right;
  margin-right: 2%;
  text-indent: 0.5rem;
  background:url(../assets/t1.png) no-repeat left center;
  background-size: 50%;
}
.article_detail dl p:nth-child(3){
  font-size: 0.25rem;
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
  height: 5.62rem;
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
