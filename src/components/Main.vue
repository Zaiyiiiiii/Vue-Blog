<template>
  <div class="main">
    <transition name="fade">
      <videoBackground v-show="$route.path=='/'"></videoBackground>
    </transition>
    <h1 class="site-title" :class="{'site-title-main':$route.path=='/'}">
      <span v-for="word in msg.split(' ')">{{' '+word+' '}}</span>
      <a @click="loginIn()" v-if="!isShowLoginBox" class="login-link">登陆</a>
    </h1>
    <navi :isBar="$route.path!='/'" :items="naviData"></navi>
    <div class="component-container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <transition name="fade">
      <login v-if="isShowLoginBox" @hidden="hiddenLoginBox"></login>
    </transition>
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">
  </div>
</template>

<script>
  import navi from 'components/Navi'
  import videoBackground from 'components/VideoBackground'
  import login from 'components/Login'

  export default {
    name: 'Main',
    components: {
      navi,
      videoBackground,
      login
    },
    data() {
      return {
        isShowLoginBox: false,
        naviData: [
          {
           name: '博文',
           hoverBackground: 'url(//cn.bing.com/az/hprichbg/rb/LanternSale_ZH-CN13256517653_1920x1080.jpg)',
           hoverColor:"orange",
           textColor:"#A64B00",
           link: '/blog'
          },{
          name: '我们',
          hoverBackground: 'url(//cn.bing.com/az/hprichbg/rb/JavaSparrow_ZH-CN10576911084_1920x1080.jpg)',
          hoverColor:"brown",
          textColor:"#FFB140",
          link: '/us'
          }],
        msg: 'Wang & Sha'
      }
    },
    methods: {
     loginIn(){
        this.isShowLoginBox = true;
     },
     hiddenLoginBox(msg){
        this.isShowLoginBox = msg;
        console.log("isShow:o%", msg, this.isShowLoginBox)
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
    top: 0;
    padding-right: 0.5em;
  }

  .login-link {
     font-size: 16px;
     color: #fff;
     position: absolute;
     bottom: 13px;
     right: 38%;
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
    color: rgba(0, 0, 0, 0.8);
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
