<template>
    <dl>
      <dt><router-link to="{ path: '/abc'}">{{data.title}}</router-link></dt>
      <dd>
        <button v-if="" @click="edit">编辑</button>
        <span>发布时间：{{data.pubTime}}</span>
        <span>作者：{{data.author}}</span>
        <button @click="showComment">评论个数({num})</button>
      </dd>
    </dl>
</template>

<style>
</style>

<script>
    export default{
        props: {
            data:{}
        },
        data(){
            return{}
        },
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
