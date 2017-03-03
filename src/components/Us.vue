<template>
  <div class="us">
    <ul>
      <li class="card-list" v-for="cardInfo in cardsInfo"><img-card :content="cardInfo"/></li>
    </ul>
  </div>
</template>
<style>
    .us{
        position:fixed;
        height:100%;
        width:100%;
    }

    .card-list{
       display: inline-block;
    }

</style>

<script>
  import ImgCards from "./ImgCard"

  export default{
    components: {
     'img-card': ImgCards
    },
    data(){
    return {
      cardsInfo: [
        {title: "一页知秋", src: "../../img/imgcard/fy.jpg", desc: "图片1"},
        {title: "title2", src: "../../img/imgcard/fy.jpg", desc: "图片2"},
        {title: "悬崖", src: "../../img/imgcard/xuanya.jpg", desc: "图片3"}
      ]
     }
    }
  }
</script>
