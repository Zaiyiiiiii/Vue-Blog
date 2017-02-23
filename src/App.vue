<template>
  <div id="app" :class="{'apploaded':loaded}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      loaded:false
    }
  },
  mounted(){
    window.onload=()=>{this.loaded=true}
  }
}
</script>

<style>
body,html{
  padding: 0;
  margin: 0;
  height: 100%;
  transition: opacity 0.8s linear;
}
#app {  
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  filter: blur(8px);    
  transition: filter 1.6s linear;
}
.apploaded{
  filter: none!important;
}
ul{
  padding: 0;
}
</style>
