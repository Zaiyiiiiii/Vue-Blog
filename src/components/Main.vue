<template>
  <div class="main">
    <transition name="fade">
      <UglyLoginBox></UglyLoginBox>
    </transition>
    <transition name="fade">
      <videoBackground v-if="$route.path=='/'"></videoBackground>
    </transition>
    <h1 class="site-title" :class="{'site-title-main':$route.path=='/'}"><span v-for="word in msg.split(' ')">{{' '+word+' '}}</span>
    </h1>
    <navi :isBar="$route.path!='/'" :items="naviData"></navi>
    <div class="component-container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">
    </div>    
  </div>
</template>

<script>
  import navi from 'components/Navi'
  import videoBackground from 'components/VideoBackground'
  import UglyLoginBox from 'components/UglyLoginBox'
  export default {
    name: 'Main',
    components: {
      navi,videoBackground,UglyLoginBox
    },
    data() {
      return {
        naviData: [
          { name: '博文', hoverBackground: 'url(//cn.bing.com/az/hprichbg/rb/LanternSale_ZH-CN13256517653_1920x1080.jpg)',hoverColor:"orange",textColor:"#A64B00",hoverText:"强识而让，敦善行而不怠。", link: '/blog' },
          { name: '我们', hoverBackground: 'url(//cn.bing.com/az/hprichbg/rb/JavaSparrow_ZH-CN10576911084_1920x1080.jpg)',hoverColor:"brown",textColor:"#FFB140",hoverText:"嘿嘿嘿", link: '/us'}
        ],
        msg: 'Wang & Sha'
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    color:rgba(20, 10, 20, 0.9);
    padding-right: 0.5em;
    margin-top: 30px;
  }

  @media (max-width: 500px){
    .site-title-main{
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
    }
    .main{
      align-items: center;
    }
  }
  .component-container{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: -1;
  }
  .component-container>*{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .site-title-main{
    color: rgba(223,145,145,0.4);
    font-size: 4em;
    top:15%;
    text-shadow: 0px 0px 6px rgba(212, 166,50,0.6 );
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
