<template>
  <div class="comment-item-box">
    <header class="top-comment">
      <label class="label-margin">评论于：{{comment.date}}</label>
      <label class="label-margin">todo 添加文章的分类</label>
    </header>
    <div class="content-comment">
      <i class="nickname">{{comment.commenter.nickname}}说:</i>
      <div class="comment-desc">{{comment.desc}}</div>
    </div>
    <footer class="footer-comment">
      <a href="#" @click="showAddComment" class="add-comment-a"><i></i>添加评论</a>
      <div class="share-community">
        <label class="label-margin">微博</label>
        <label class="label-margin">朋友圈</label>
      </div>
    </footer>
   <!-- todo 评论的回复功能
    <ul v-if="{!comment.reponse.length == 0}">
      <li></li>
    </ul>-->
    <add-comment v-if="ifAddComment" v-on:close="showAddComment" :showSetStyle="showSetStyle" class="add-comment"></add-comment>
  </div>
</template>
<style>
  .label-margin{
     display: inline-block;
     padding: 0 10px;
  }
  .comment-item-box {
     text-align: left;
  }
  .top-comment {
    border: 1px solid #ccc;
    height: 22px;
    line-height: 22px;
    padding: 6px 12px;
    background-color: rgba(200, 200, 200, 0.3);
    font-size: 12px;
  }
  .content-comment {
    padding: 12px;
  }
  .nickname{
    color: #808080;
    font-size: 14px;
  }
  .comment-desc {
    margin: 16px;
    font-size: 12px;
  }
  .footer-comment {
    height: 22px;
    line-height: 22px;
    background-color: transparent;
    font-size: 12px;
    text-align: left;
    padding: 0 12px;
    position: relative;
  }
  .footer-comment > a {
    display: inline-block;
    text-decoration: none;
  }
  .share-community {
    display: inline-block;
    position: absolute;
    right: 10px;
  }
  .add-comment{
    margin: 20px auto;
    width: 80%;
  }
  .add-comment-a:linked {
    color: #ccc;
  }
  .add-comment-a:hover{
    color: #32CD32;
  }
</style>
<script>

    import AddComment from "components/AddComment.vue"

    export default{
        props: ["comment"],
        data(){
            return{
                ifAddComment: false,
                showSetStyle: true,
            }
        },
        components:{
            'add-comment': AddComment,
        },
        methods: {
          showAddComment(){
          //是否展开评论
            console.log("closeitem")
            this.ifAddComment = !this.ifAddComment
          }
       }
    }
</script>
