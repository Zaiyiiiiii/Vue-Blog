<template>
  <div>
    <header class="top-add-comment">
      <input class="commenter-contact" name="commenter-contact" placeholder="在此留下你的邮箱"/>
      <div class="rich-editor" v-if="showSetStyle">添加表情</div>
    </header>
    <div class="add-comment-detail">
      <textarea class="new-comment-area"></textarea>
      <div class="add-action-button">
        <button>提交</button>
        <button @click="closeCommentBox">取消</button>
      </div>
    </div>
  </div>
</template>
<style>
  .top-add-comment {
     width: 100%;
     height: 30px;
     line-height: 30px;
     border: 1px solid #dcdcdc;
     box-sizing: border-box;
     padding: 0 10px;
     position: relative;
  }
  .commenter-contact {
    width: 40%;
    height: 16px;
    line-height: 16px;
    vertical-align: middle;
    padding: 3px 6px;
    border: 1px solid #f1f1f1;
    font-size: 12px;
  }
  .add-comment-detail {
    width: 100%;
  }
  .rich-editor {
    display: inline-block;
    font-size: 12px;
    position: absolute;
    right: 10px;
  }
  .new-comment-area {
    border: 1px #f1f1f1 solid;
    width: 98%;
  }
  .add-action-button {
    text-align: right;
    margin-right: 10px;
  }
  .add-action-button > button{
    out-line: none;
    border: none;
    background-color: transparent;
  }
</style>
<script>
    export default{
        props: ["showSetStyle"],
        methods: {
        //关闭评论区
          closeCommentBox(){
            this.$emit("close")
          }
        }
    }
</script>
