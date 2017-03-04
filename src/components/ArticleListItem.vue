<template>
  <dl class="article-list-item">
    <dt class="article-dt">
      <router-link :to="'/blog/'+ article.id">{{article.title}}</router-link>
    </dt>
    <dd>
      <div class="dd-content">
        <img src="../../static/img/ht-pink.png" style="vertical-align: sub; width: 16px; padding-right: 10px; border-right: 1px solid #ccc"/>
        <button v-if="editable" @click="edit(article.id)" class="btn">编辑</button>
        <button @click="showComment" class="btn">评论个数(<i class="font-color-gr">{{article.commentNum}}</i>)</button>
        <span class="margin-rt10">作者：{{article.author}}</span>
        <span class="margin-rt10">发布时间：{{article.pubTime}}</span>
      </div>
    </dd>
  </dl>
</template>

<style>

.font-color-gr{
  font-style: normal;
}

.article-list-item {
  border-bottom: 1px dotted #353836;
  font-family: "微软雅黑";
}

.article-list-item > dt{
   text-align: left;
   padding: 20px;
}

.article-dt > a{
  text-decoration: none;
  color: #42b983;
}

.article-dt > a:hover{
  /*border-bottom: 1px solid #333;*/
  color: #333;
}

.article-list-item > dd {
   position: relative;
   font-size: 12px;
   text-align: right;
   padding: 14px 30px;
}

.dd-content {
  position: absolute;
  right: 0;
  top: 0;
  padding: 3px 16px;
}

button{
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 12px;
  font-family: "微软雅黑";
}
.btn:hover {
   text-decoration: underline;
   color: green;
   cursor: pointer;
}
.margin-rt10 {
  margin-right: 10px;
}
.font-color-gr {
  color: #42b983;
}
</style>

<script>
    export default{
        props: ['article', 'editable'],
        methods: {
        //编辑
           edit(articleId){
             //路由跳转
             this.$router.push("/blog/" + articleId + "#edit");
           }
        },
    }


</script>
