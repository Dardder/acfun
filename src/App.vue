<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class='nav'>
      <ul>
          <li><a href="#/123"><img src="./assets/acFun.png" alt=""></a></li>
          <li><a href="#/"><img src="./assets/acFunLogo.png" alt="返回首页"></a></li>
          <li><img src="./assets/header_search.png" alt=""></li>
      </ul>
    </div>
    <!-- <a href="#/123">连接到123</a> -->
    <router-view></router-view>
    <footer>
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
export default {
  name: 'app'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.nav{
    width: 100%;
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
