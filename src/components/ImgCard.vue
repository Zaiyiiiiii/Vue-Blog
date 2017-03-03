<template>
  <div class="img-card">
    <a href="">
      <img :src="content.src"/>
    </a>
    <p class="caption-title">{{content.title}}</p>
    <figcaption class="caption-content">{{content.desc}}</figcaption>
  </div>
</template>
<style>
   .img-card {
      width: 230px;
      height: 300px;
      padding: 0 6px;
      box-sizing: border-box;
   }
   .img-card > a {
      display: inline-block;
      height: 110px;
   }
</style>
<script>
    export default{
        props: ["content"],
    }
</script>
