<template>
  <div class="animate">
    <div class="showBanner">
      <div class="select">
        <p>动画</p>
        <span></span>
      </div>
      <p>排序：</p>
      <div class="select">
        <p>最新发布</p>
        <span></span>
      </div>
    </div>
    <div class="playHttp">
      <h1>本区最热</h1>
      <dl v-for='obj in animatehotData'>
        <dt><img v-bind:src="obj.cover"></dt>
        <div>
          <dd>{{obj.title}}</dd>
          <p>UP主:{{obj.user.username}} <span>播放：{{obj.views}}</span></p>
        </div>
      </dl>
      <h1>最新发布</h1>
      <dl v-for='obj in animatenewData'>
        <dt><img v-bind:src="obj.cover"></dt>
        <div>
          <dd>{{obj.title}}</dd>
          <p>UP主:{{obj.user.username}} <span>播放：{{obj.views}}</span></p>
        </div>
      </dl>
    </div>
    <div class='more'>
        <button>加载更多...</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animate',
  data () {
    return {
      animatehotData: {},
      animatenewData: {}
    }
  },
  created () {
    this.$http.get('/api/animateData1').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.animatehotData = response.animateData1.list
      }
    })
    this.$http.get('/api/animateData2').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.animatenewData = response.animateData2.list
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.animate{
  width: 100%;
  background:rgb(244,244,244);
}
.showBanner{
  background:rgb(255,61,54);
  width: 100%;
  padding:1%;
  display: flex;
  box-sizing: border-box;
  p {
    flex:60;
    text-align: right;
    height: 0.65rem;
    line-height: 0.65rem;
    font-size:0.35rem;
  }
  p:nth-child(2){
    height: 0.65rem;
    line-height: 0.65rem;
    color:white;
  }
  .select {
    height: 0.65rem;
    line-height: 0.65rem;
    border:none;
    border-radius: 0.05rem;
    border:1px solid rgb(221,221,221);
    font-size:0.35rem;
    background:white;  
    display: flex;
    padding:0 0.25rem;
    span{
      width: 0;
      border-top: 0.1rem solid black;
      border-left:0.1rem solid transparent;
      border-right:0.1rem solid transparent;
      border-bottom:0.1rem solid transparent;
      margin-top:18%;
    }
  }
}
.playHttp{
  width: 100%;
  background:rgb(244,244,244);
  padding:0 2%;
  box-sizing: border-box;
}
.playHttp h1{
  color:rgb(255,133,27);
  font-weight: normal;
  font-size: 0.35rem;
  height: 1rem;
  line-height: 1rem;
}
.playHttp dl{
  width: 100%;
  background:white;
  padding:2%;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 2%;
  box-shadow: 0 0 0.01rem #ccc;
}
.playHttp dl dt{
  flex:34;
  margin-right: 1.5%;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 2.17rem;
  }

}
.playHttp dl div{
  flex:63;
  display: flex;
  flex-direction: column;
  dd {
    flex:81;
    font-size: 0.36rem;
    color: rgb(96,96,96);
  }
  p {
    flex:19;
    font-size:0.25rem;
    color:rgb(172,172,172);
    overflow: hidden;
    span {
      float: right;
      margin-right: 8%;
    }
  }
}
.more{
  width: 100%;
  margin-top: 0.3rem;
  button {
    width: 100%;
    height:1.2rem;
    line-height: 1.2rem;
    border:none;
    outline: none;
    font-size: 0.4rem;
    color:rgb(102,102,102);
    text-align: center;
    box-shadow: 0 0 0.01rem #ccc;
    background:white; 
  }
}
</style>
