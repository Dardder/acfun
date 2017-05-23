<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 点击后出现的搜索页面组件 -->
    <bank></bank>
    <search v-show='search_flag'></search>
    <div class='nav'>
      <ul>
          <li><a href="#"><img src="./assets/acFun.png" alt="" v-on:click.prevent='cl()'></a></li>
          <li><a href="#/"><img src="./assets/acFunLogo.png" alt="返回首页"></a></li>
          <li><img src="./assets/header_search.png" alt="" v-on:click='cl2()'></li>
      </ul>
      <!-- 点击后出现的mask组件 -->
      <div id="mask" v-show='flag'>
        <div class='login'>
          <img src="./assets/userLogo.png">
          <p>登录</p>
        </div>
        <form>
          <fieldset>
            <legend>导航</legend>
            <div class='goto' v-for='obj in maskData'>
              <div class='goto_name'>{{obj.areaName}}</div>
              <div class='goto_detail'> 
                <p v-for='singel in obj.areaDetail'>{{singel}}</p>
              </div>
            </div>
          </fieldset>
          <button v-on:click='cl()'>关闭</button>
        </form>
      </div>
    </div>
    <!-- <a href="#/123">连接到123</a> -->
    <router-view></router-view>
    <footer>
      <a href="https://itunes.apple.com/cn/app/id477927812" id="openApp" v-on:click='app'>贴吧客户端</a>
      <button>还有啥？戳我去客户端看看(´・ω・)ﾉ</button>
      <ul>
        <li>关于</li>
        <li>反馈</li>
        <li>地图</li>
        <li>帮助</li>
        <li>更多应用</li>
      </ul>
      <p>Copyright&copy;2007-2017 acfun.cn</p>
    </footer>
  </div>
</template>

<script>
import search from 'components/Search'
export default {
  name: 'app',
  data () {
    return {
      search_flag: false,
      flag: false,
      maskData: [
        {areaName: '文章', areaDetail: ['综合', '工作情感', '动漫文化', '漫画小说', '游戏']},
        {areaName: '娱乐', areaDetail: ['生活娱乐', '鬼畜调教', '萌宠', '美食', '综艺']},
        {areaName: '动画', areaDetail: ['动画短片', 'MAD·AMV', 'MMD·3D', '2.5次元']},
        {areaName: '影视', areaDetail: ['电影', '日剧', '美剧', '国产', '网络剧', '韩剧', '布袋·特摄', '纪录片', '其他']},
        {areaName: '游戏', areaDetail: ['游戏集锦', '电子竞技', '主机单机', '英雄联盟', '桌游卡牌', 'Mugen']},
        {areaName: '音乐', areaDetail: ['原创·翻唱', '演奏', 'Vocaloid', '日系音乐', '综合音乐', '演唱会']},
        {areaName: '鱼塘', areaDetail: ['军事', '历史', '焦点']},
        {areaName: '科技', areaDetail: ['SF', '黑科技', '数码', '广告', '白科技', '自我发电']},
        {areaName: '体育', areaDetail: ['综合体育', '足球', '篮球', '搏击', '11区体育', '惊奇体育']},
        {areaName: '舞蹈', areaDetail: ['宅舞', '综合舞蹈']},
        {areaName: '彼女', areaDetail: ['造型', '西皮', '爱豆', '其他']},
        {areaName: '合作', areaDetail: ['游戏中心']}
      ]
    }
  },
  methods: {
    cl: function () {
       this.flag = !this.flag
       // document.querySelector('.nav ul li a img').src = './assets/acFun2.png'
    },
    cl2: function () {
      document.querySelector('.search').style.display = 'block'
    },
    app: function () {
        var ifr = document.createElement('iframe')
          ifr.src = 'com.baidu.tieba://'
          ifr.style.display = 'none'
          document.body.appendChild(ifr)
          window.setTimeout(function () {
              document.body.removeChild(ifr)
          }, 3000)
    }
  },
  components: {
    search
  },
  created () {
    console.log(this.$store)
  }
}
</script>

<style>
/*导航栏部分*/
.nav{
    width: 100%;
    position: relative;
  }
.nav ul{
    width: 100%;
    display: flex;
  }
.nav ul li:nth-child(1){
    width: 50px;
    text-align: center;
  }
.nav ul li:nth-child(1) img{
    width: 80%;
  }
.nav ul li:nth-child(3){
    width: 50px;
    text-align: center;
  }
  .nav ul li:nth-child(3) img{
    width: 80%;
  }
 .nav ul li:nth-child(2){
    flex: 1;
    text-align: center;
  }
 .nav ul li:nth-child(2) img{
    width: 35%;
  }
  /*点击后出现的蒙版*/
  #mask{
    width: 100%;
    position: absolute;
    /*display: none;*/
    left: 0;
    top: 1.15942rem;
    z-index:10;
    padding: 2%;
    box-sizing: border-box;
    background:rgb(252,252,252);
    border-bottom: 1px solid #ccc;
    transition: background 2s linear 1s;
  }
  .login{
    width: 100%;
    display: flex;
  }
  .login img{
    flex:16;
    margin-right: 5%;
  }
  .login p {
    flex:84;
    line-height: 1.6183rem;
  }
  #mask form {
    width: 100%;
  }
  #mask form fieldset {
    border-left: none;
    border-right: none;
    border-color: rgba(243,243,243,0.3);
  }
  #mask form fieldset legend {
    text-align: center;
    font-size: 0.45rem;
    color: rgb(255,152,64);
  }
  #mask form fieldset {
    width: 100%;
    overflow: hidden;
  }
  .goto {
    width: 100%;
    display: flex;
    font-size: 0.35rem;
    color:rgb(110,110,110);
    margin-top: 2.5%;
  }
  .goto_name {
    flex:15;
    background:rgb(238,238,238);
    text-align: center;
    padding:1% 0;
    border-radius: 5px;
    height: 0.52463rem;
    cursor: pointer;
  }
  .goto_detail {
    flex:85;
    display: flex;
    flex-wrap: wrap;
  }
  .goto_detail p{
    padding:1% 0;
    border:1px solid rgb(237,237,237);
    width: 30%;
    text-align: center;
    height: 0.52463rem;
    line-height: 0.52463rem;
    border-radius: 5px;
    margin-left: 2.5%;
    margin-bottom: 2.5%;
    cursor: pointer;
  }
  #mask form button {
    width: 50%;
    margin-left: 25%;
    border:1px solid rgb(237,237,237);
    background:rgb(255,255,255);
    padding:1% 0;
    font-size: 0.4rem;
    color:rgb(110,110,110);
    outline: none;
    margin-top: 1%;
    border-radius: 5px;
  }
  /*过渡效果*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  /*页脚*/
  footer {
    width: 100%;
    background:rgb(238,238,238);
    border-top: 1px solid #ccc;
    padding:5% 0;
  }
  footer button {
      margin-bottom: 5%;
      width: 80%;
      margin-left: 10%;
      height: 1rem;
      line-height: 1rem;
      background:rgb(253,76,91);
      color: white;
      border:none;
      font-size: 0.35rem;
      border-radius: 0.1rem;
      box-shadow: 0 0 0.01rem rgb(253,76,91);
    }
    footer ul{
      width: 60%;
      margin-left: 20%;
      display: flex;
    }
    footer ul li{
      flex:1;
      font-size: 0.3rem;
      color:rgb(102,102,102);
    }
    footer p {
      width:100%;
      text-align: center;
      color: rgb(102,102,102);
      font-size: 0.28rem;
      margin-top: 5%; 
    }
</style>
