<template>
  <dl>
    <dt>
      <router-link :to="'/blog/'+ article.id">{{article.title}}</router-link>
    </dt>
    <dd>
      <div class="dd-content">
        <button v-if="editable" @click="edit(article.id)">编辑</button>
        <span class="margin-rt10">发布时间：{{article.pubTime}}</span>
        <span class="margin-rt10">作者：{{article.author}}</span>
        <!--评论数是从data中携带过来 还是单独存在 使用watch来更新？评论框做成一个弹框-->
        <button @click="showComment" class="comment">评论个数(<i class="font-color-gr">1</i>)</button>
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
}

dl:hover{
  padding: 10px 20px;
  background: #666;
  transition: all 0.2s ease-out;
}

dl > dt{
   text-align: left;
   padding: 20px;
}
dl > dd{
   position: relative;
   font-size: 12px;
   text-align: right;
   padding: 12px 30px;
}

.dd-content {
  position: absolute;
  right: 0;
  top: 0;
  padding: 3px 20px;
  background-color: #ECECEC;
}

button{
  outline: none;
  border: none;
  background-color: transparent;
}
.comment:hover {
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
