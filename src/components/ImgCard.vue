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
      width: 300px;
      height: 500px;
      padding: 0 6px;
      box-sizing: border-box;
   }
</style>
<script>
    export default{
        props: ["content"],
    }
</script>
