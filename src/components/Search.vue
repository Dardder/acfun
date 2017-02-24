<template>
  <div class="search">
    <div class='searchBar'>
      <div class='search-logo'><img src="../assets/searchLogo.png"></div>
      <div class='search-input'>
        <div>
          <div class='searchLogoDiv'><img src="../assets/search_search2.png"></div>
          <input type="text" name="" placeholder="输入关键词">
          <div class='searchLogoDiv'><img src='../assets/cancel2.png' v-on:click='cl3()'></div>
        </div>  
      </div>
      <p>取消</p>
    </div>
    <div class='searchContent'>
      <h4>热门搜索</h4>
      <div>
        <a v-for='obj in searchData'>{{obj.value}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchData: {}
    }
  },
  created () {
    this.$http.get('/api/searchData1').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.searchData = response.searchData1
      }
    })
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
/*隐藏nav 和 footer*/
.search{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  display: none;
  width: 100%;
  background:rgb(252,252,252);
  height: 999rem;
  .searchBar{
    width: 100%;
    background:rgb(253,76,92);
    display: flex;
    .search-logo {
      flex: 21.15;
      img {
        height: 1.3rem;
      }
    }
    .search-input {
        flex:63.46;
        vertical-align : middle;
        div {
          width: 100%;
          background:white;
          display: flex;
          margin-top: 4%;
          border-radius: 0.05rem;
          .searchLogoDiv {
            width: 0.7971rem;
            text-align: center;
            img {
              height: 0.434rem;
            }
          }
          input {
            flex: 8;
            height: 0.6rem;
            outline: none;
            border:none;
            height: 0.8rem;
            font-size:0.35rem;  
          }
        }
      }
      p {
        flex:15.39;
        color:white;
        text-align: center;
        font-size: 0.4rem;
        line-height: 1.3rem;
      }
    }
  }
.searchContent {
    flex:85;
    background:rgb(252,252,252);
    font-size: 0.3rem;
    padding-top: 10%;
    h4 {
      color: rgb(158,158,158);
      font-size: 0.3rem;
      font-weight: normal;
      text-indent: 2%;
    }
}
.searchContent div {
    width: 100%;
    overflow: hidden;
}
.searchContent a{
    padding:1% 2%;
    border:1px solid rgb(237,237,237);
    text-align: center;
    height: 0.52463rem;
    line-height: 0.52463rem;
    border-radius: 5px;
    float: left;
    cursor: pointer;
    margin-left: 6%;
    margin-top: 6%;
    background:white;
    color:rgb(96,96,96);
}
</style>
