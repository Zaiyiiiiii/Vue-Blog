<template>
  <div class="main">
    <h1 class="site-title" :class="{'site-title-main':$route.path=='/'}">{{ msg }}</h1>
    <navi :isBar="$route.path!='/'" :items="naviData"></navi>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">
</template>

<script>
  import navi from 'components/Navi'
  export default {
    name: 'Main',
    components: {
      navi
    },
    data() {
      return {
        naviData: [
          { name: '博文', hoverBackground: '#fff url(//cn.bing.com/az/hprichbg/rb/LanternSale_ZH-CN13256517653_1920x1080.jpg)', link: '/blog' },
          { name: '我们', hoverBackground: '#fff url(//cn.bing.com/az/hprichbg/rb/JavaSparrow_ZH-CN10576911084_1920x1080.jpg)', link: '/us'}
        ],
        msg: 'Wang & Sha'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .site-title {
    font-family: 'Droid Serif', serif;
    transition: all 1s;
    position: relative;
    top:0;
    padding-right: 0.5em;
  }
  .site-title-main{
    font-size: 4em;
    top:15%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0
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