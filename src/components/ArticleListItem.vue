<template>
  <dl>
    <dt>
      <router-link :to="'/blog/'+ article.id">{{article.title}}</router-link>
    </dt>
    <dd>
      <div class="dd-content">
        <img src="../../img/ht-pink.png" style="vertical-align: sub; width: 16px; padding-right: 10px; border-right: 1px solid #ccc"/>
        <button v-if="editable" @click="edit(article.id)" class="btn">编辑</button>
        <button @click="showComment" class="btn">评论个数(<i class="font-color-gr">1</i>)</button>
        <span class="margin-rt10">作者：{{article.author}}</span>
        <span class="margin-rt10">发布时间：{{article.pubTime}}</span>
      </div>
    </dd>
  </dl>
</template>

<style>

i{
  font-style: normal;
}
dl {
  border-bottom: 1px dotted #42b983;
  font-family: "微软雅黑";
}

dl > dt{
   text-align: left;
   padding: 20px;
}

dl > dd{
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
  background-color: #ECECEC;
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
           },
        //展开评论列表
           showComment(){
           }
        },
    }


</script>
