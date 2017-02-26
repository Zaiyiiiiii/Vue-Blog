<template>
    <dl>
      <dt><router-link :to="'/blog/'+article.name">{{article.title}}</router-link></dt>
      <dd>
        <button v-if="editable" @click="edit">编辑</button>
        <span class="margin-rt10">发布时间：{{article.pubTime}}</span>
        <span class="margin-rt10">作者：{{article.author}}</span>
        <!--评论数是从data中携带过来 还是单独存在 使用watch来更新？评论框做成一个弹框-->
        <button @click="showComment" class="comment">评论个数(<i class="font-color-gr">1</i>)</button>
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
dl > dt{
   text-align: left;
   padding: 20px;
}
dl > dd{
   font-size: 12px;
   text-align: right;
   padding: 10px 30px;
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
        methods:{
        //编辑
           edit(){
             //路由跳转
           },
        //展开评论列表
           showComment(){
           }
        },
    }
</script>