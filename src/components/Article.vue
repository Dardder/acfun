<template>
  <div class="article">
    <div class="showBanner">
      <div class="select">
        <p>综合</p>
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
      <dl v-for='obj in articlehotData'>
        <dt>
          <p>{{obj.comments}}</p>
          <p>评论</p>
        </dt>
        <div>
          <dd>{{obj.title}}</dd>
          <p><span>{{obj.user.username}}</span>&nbsp;/&nbsp;昨天&nbsp;17时27分&nbsp;/&nbsp;{{obj.views}}人围观</p>
          <p>{{obj.description}}</p>
        </div>
      </dl>
      <h1>最新发布</h1>
      <dl v-for='obj in articlenewData'>
        <dt>
          <p>{{obj.comments}}</p>
          <p>评论</p>
        </dt>
        <div>
          <dd>{{obj.title}}</dd>
          <p><span>{{obj.user.username}}</span>&nbsp;/&nbsp;昨天&nbsp;17时27分&nbsp;/&nbsp;{{obj.views}}人围观</p>
          <p>{{obj.description}}</p>
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
  name: 'article',
  data () {
    return {
      articlehotData: {},
      articlenewData: {}
    }
  },
  created () {
    this.$http.get('/api/articleData1').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.articlehotData = response.articleData1.list
      }
    })
    this.$http.get('/api/articleData2').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.articlenewData = response.articleData2.list
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.article{
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
  box-sizing: border-box;
  dl {
    width:100%;
    background:white;
    padding:2%;
    display: flex;
    box-sizing: border-box;
    border-bottom:1px solid #ccc;
    dt {
      flex:15;
      height: 1.45rem;
      background:rgb(59,179,208);
      display: flex;
      flex-direction: column;
      box-shadow: 0 0 0.01rem rgb(59,179,208);
      p {
        flex:1;
        color:white;
        text-align: right;
        font-size:0.35rem;
        padding-right: 8%;
      }
      p:nth-child(1){
        font-size:0.5rem;
        font-weight: bold;
      }
    }
    div {
      flex:85;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-left:2%;
      dd {
        color:#666;
        font-size: 0.4rem;
        flex:1;
      }
      p:nth-child(2){
        flex:1;
        font-size:0.3rem;
        color:#aaa;
        font-weight: 400;
        margin-top: 3%;
        span {
          color:rgb(59,179,208);
        }
      }
      p:nth-child(3){
        flex:1;
        font-size:0.3rem;
        color:#aaa;
        font-weight: 400;
         margin-top: 3%;
      }
    }
  }
}
.playHttp h1{
  color:rgb(59,179,208);
  font-weight: normal;
  text-indent: 3%;
  font-size: 0.35rem;
  height: 1rem;
  line-height: 1rem;
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
