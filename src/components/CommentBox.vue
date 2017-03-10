<template>
  <div class="comment-box">
    <ul class="comment-list">
      <li v-for="commentItem in comments">
        <comment-item :comment="commentItem"></comment-item>
      </li>
    </ul>
    <new-comment class="new-comment" :showSetStyle="showSetStyle"></new-comment>
  </div>
</template>
<style>
    .comment-box {
      width: 400px;
      padding: 20px;
    }
    .comment-list{
       height: 400px;
       overflow: auto;
    }
    .new-comment{
      width: 88%;
      height: 200px;
      overflow: auto;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      right: 4%;
      text-align: left;
    }

</style>
<script>
    import NewComment from 'components/AddComment.vue'
    import CommentItem from 'components/CommentItem.vue'

    export default{
        data(){
            return{
                showSetStyle: true,
                comments: [
                {commenter: {nickname: "小溪", email: "xiaoxi@us.com"}, date: "2013年7月", desc: "vue使用v-if指示是否显示该组件"},
                {commenter: {nickname: "流水", email: "liushui@us.com"}, date: "2013年7月", desc: "vue使用v-else指示显示备用组件"}]
            }
        },
        components:{
            'new-comment': NewComment,
            'comment-item': CommentItem
        }
    }

</script>
