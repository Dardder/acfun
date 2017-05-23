<template>
  <div class="test">
    <a href="https://itunes.apple.com/cn/app/id477927812" id="openApp" v-on:click='app'>贴吧客户端</a>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'test'
    }
  },
  methods:function() {
      app:function() {
        var ifr = document.createElement('iframe');
          ifr.src = 'com.baidu.tieba://';
          ifr.style.display = 'none';
          document.body.appendChild(ifr);
          window.setTimeout(function(){
              document.body.removeChild(ifr);
          },3000)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
