<template>
  <div>
    <div class="login-box-wrapper" @click="hiddenLoginBox"></div>
    <form @submit.prevent="submit">
      <ul class="login-box">
        <li>
          <i class="input-ico"></i>
          <input v-model="user.name" class="input-info" type="text" name="user_name"
                 placeholder="姓名" maxlength="8"/>
        </li>
        <li>
          <i class="input-ico"></i>
          <input v-model="user.psd" class="input-info" type="password" name="password"
                 placeholder="密码" maxlength="10"/></li>
        <li style="border-bottom: none">
          <button class="login-in-btn" type="submit">Enter &nbsp;></button>
        </li>
      </ul>
    </form>
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
       background-color: rgba(15, 16, 19, 0.28)
    }

    .login-box {
       height: 400px;
       width: 600px;
       padding: 100px 160px;
       box-sizing: border-box;
       background-color: rgba(12, 13, 14, 0.40);
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%)
    }

    .login-box li {
      width: 280px;
      height: 40px;
      padding: 0 16px;
      margin-bottom: 30px;
      line-height: 30px;
      border-bottom: 1px solid #000;
      background-color: transparent;
      color: #fff;
      font-size: 18px;
    }

    .input-ico{
       display: inline-block;
       background: url("../../img/ht-pink.png") no-repeat;
       width: 20px;
       height: 20px;
       vertical-align: middle;
    }

    .input-info {
      outline: none;
      border: none;
      display: inline-block;
      box-sizing: border-box;
      padding: 0 10px;
      width: 250px;
      height: 40px;
      line-height: 30px;
      background-color: transparent;
      color: #fff;
      font-size: 18px;
    }

    .login-box input:focus::-webkit-input-placeholder {
       display: inline-block;
       position: relative;
       top: -26px;
       -webkit-transition: top 3s ease-out;
       color: #fff;
    }
    .margin-bt30 {
      margin-bottom: 30px;
    }

    .login-in-btn {
      outline: none;
      border: none;
      width: 280px;
      height: 40px;
      border-radius: 20px;
      background-color: rgba(45, 45, 45, 0.8);
      color: #fff;
      font-size: 18px;
    }

    .login-in-btn:hover{
      background-color:rgba(26, 26, 26, 0.8);
      cursor: pointer
    }




</style>
<script>
    export default{
        name: "loginPage",
        data(){
        return {
            user: {
              name: "",
              psd: ""
            }
          }
        },
        methods: {
        submit: function() {

          let user_info = JSON.stringify(this.user);

          this.$http.post("", user_info).then((response) => {}, (response) => {

          })
        },
        hiddenLoginBox: function(){
          //通知home页，关闭登陆页
            this.$emit('hidden', false)
          }
        }
    }




</script>
