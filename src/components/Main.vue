<template>
  <div class="hello">
    <h1 class="site-title">{{ msg }}</h1>
    <navi :items="naviData"></navi>
    <router-view></router-view>
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">
</template>

<script>
import navi from 'components/Navi'
export default {
  name: 'Main',
  components:{
    navi
  },
  data() {
    return {
      naviData:[
        {name:'首页',hoverBackground:'#F00',link:'/'},
        {name:'博文',hoverBackground:'#F00',link:'/blog'}
      ],
      msg: 'Wang & Sha'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-title{
  font-family: 'Droid Serif', serif;
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
