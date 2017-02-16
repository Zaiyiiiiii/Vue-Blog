<template>
  <div class="login-box-wrapper">
    <div>this is login box</div>
  </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }

    .login-box-wrapper {
       height: 100%;
       width: 100%;
       position: fixed;
       top: 0;
       left: 0;
       background-color: rgba(47, 47, 47, 0.3)
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                isShow: this.$parent.isShowLoginBox
            }
        },
    }

</script>
