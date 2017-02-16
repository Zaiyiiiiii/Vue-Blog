<template>
  <div class="login-box-wrapper">
    <div class="login-box">
      <button class="cancel-login-btn">取消</button>
      <label></label>
      <input class="input-info" type="text" name="user_name" placeholder="姓名"/>
      <label></label>
      <input class="input-info margin-bt10" type="password" name="password" placeholder="密码"/>
      <button class="margin-bt10 login-in-btn">Enter></button>
    </div>
  </div>
</template>

<style>
    body{
        background-color: #ff0000;
    }

    .login-box-wrapper {
       height: 100%;
       width: 100%;
       position: fixed;
       top: 0;
       left: 0;
       background-color: rgba(26, 28, 33, 0.72)
    }

    .login-box {
       height: 400px;
       width: 600px;
       padding: 100px 200px;
       box-sizing: border-box;
       background-color: rgba(66, 66, 66, 0.6);
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%)
    }

    .login-box > input {
      outline: none;
      border: none;
      display: block;
      box-sizing: border-box;
      width: 200px;
      height: 40px;
      line-height: 30px;
      border-bottom: 1px solid #000;
      background-color: transparent;
      color: #fff;
      font-size: 18px;
    }

    .margin-bt10 {
      margin-bottom: 20px;
    }

    .login-in-btn {
      outline: none;
      border: none;
      width: 200px;
      height: 40px;
      border-radius: 20px;
      background-color: rgba(45, 45, 45, 0.8);
      color: #fff;
      font-size: 18px;
    }

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
            }
        },
    }



</script>
