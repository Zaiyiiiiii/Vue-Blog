<template>
  <div class="blog">
    <div class="blog-sort">
      <div>
        <h3>文章分类</h3>
        <span>javascript</span><span>html</span>
      </div>
      <!--<ul class="sort-list">
        <li v-for="assort in assorts">{{}}</li>
      </ul>-->
    </div>
    <ul class="blog-title">
      <li v-for="article in articles">
        <article-list :article="article" :editable="isLogin"></article-list>
      </li>
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
  import ArticleList from "components/Article"

  export default{
    components: {
       'article-list': ArticleList,
    },
    data(){
       return {
       //是否登陆
         isLogin: true,
         articles: [{title: "测试博客列表，第一条的title，vue是双向数据绑定，通过v-model实现，使用props进行父子组件的通信", pubTime: "2016-7-20", author: "wang", urlTo: "wang.com"},{title: "vue可以使用watch来监听所有的数据变化，比如data, 样式背景等,", pubTime: "2016-7-20", author: "sha", urlTo: "sha.com"}],
         assorts: [{index: "", name: "", children: []}, {index: "", name: "", children: []}, {index: "", name: "", children: []}],
       }
    }
  }

</script>
