<template>
  <div class="blog">
    <div class="blog-sort">
      <div>
        <h3>文章分类</h3>
        <span>javascript</span><span>html</span>
      </div>
      <ul class="sort-list">
        <li v-for="assort in assorts">{{}}</li>
      </ul>
    </div>
    <ul class="blog-title">
      <li v-for="article in articles"><article-list :data="article"></article-list></li>
    </ul>
  </div>
</template>
<style>
    .blog ul{
        margin: 0;
    }
    ul>li{
        display: block;
    }
    .blog{
        height: 100%;
    }
    .blog{
        display: flex;
        justify-content: center;
    }
    .blog-sort{
        display: flex;
        font-size: 18px;
        flex-direction: column;
        flex:1 0 0px;
        margin-top: 28px!important;
        background-color: #EFF3EF;
        padding: 120px 50px 0;
        box-sizing: border-box;
        text-align: left;
    }
    .blog-sort li {
        height: 30px;
        line-height: 30px;
        color: rgb(13, 183, 13);
    }

    .blog-title{
        flex:3 0 0px;
    }




</style>
<script>
  import article-list from "components/Article"

  export default{
    data(){
       return {
         articles: [{title: "", pubTime: "", author: ""},{title: "", pubTime: "", author: ""}],
         assorts: [{index: "", children: []}, {index: "", children: []}, {index: "", children: []}]
       }
    }
  }
</script>
