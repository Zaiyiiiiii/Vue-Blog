<template>
    <div>
        <div v-if="showLoginBox" class="loginbox-background" @click="showLoginBox=false">
            <div class="loginbox-round loginbox-square loginbox-half" @click.stop>
                <input type="text" placeholder="输入用户名，">
                <input type="password" placeholder="输入暗号。">
                <div class="loginbox-button">登录</div>
            </div>
        </div>
        <div class="main-button" @click="showLoginBox=!showLoginBox">登录</div>
    </div>
</template>
<style>
    .main-button{
        position: fixed;
        top: 25px;
        right: 25px;
        font-family:'JuzhenFang90f7448985259';
        font-size: 1.3em;
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        z-index: 5;
    }
    .loginbox-round{
        border-radius: 50%;
        background-image: radial-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9),rgba(255,250,250,1),rgba(240,220,200,0.95));
        box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, 0.5);
        width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        padding: 170px 0 60px 0;
        animation: fadeinbox 1s;
    }
    .loginbox-background{
        position: fixed;
        z-index: 2;
        background: radial-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.95));
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeinbox 1s;
    }
    .loginbox-button{
        margin-top: 75px;
        font-family:'JuzhenFang90f7448985259';
        font-size: 36px;
        color: #666;
        cursor: pointer;
    }
    .loginbox-round>input{
        width: 280px;
        outline-style: none;
        border: none;
        border-bottom: 5px solid rgba(50,50,50,0.3);
        border-radius: 5px;
        font-size: 32px;
        line-height: 45px;
        background: none;
        color:rgba(50, 50, 50, 0.6);
        margin-bottom: 20px;
        text-shadow: 0 0 2px #ccc;
        font-family:'JuzhenFang90f7448985259',Cambria, Cochin, Georgia, Times, Times New Roman, serif;
        transition: border 0.5s,color 0.5s;
        box-sizing: border-box;
        text-indent: 20px;
    }
    .loginbox-round>input:focus{
        border-bottom: 5px solid rgba(50,50,50,0.6);     
        color:rgba(50, 50, 50, 0.8);   
    }
    .loginbox-round>input::-webkit-input-placeholder{
        text-align: center;
        text-indent: 0px;
        transition: font-size 0.4s;
    }
    .loginbox-round>input:focus::-webkit-input-placeholder{
        color:rgba(50, 50, 50, 0.6);
        font-size: 103%;
    }
    .loginbox-square{
        width: 400px;
        border-radius: 100px;
    }
    .loginbox-half{
        width: 400px;
        height: 460px;
        padding-top: 150px;
        border-radius: 160px 0;
        transition: border-radius 1s,transform 1s;
    }
    .loginbox-half .loginbox-button{
        margin-left: -200px;
        margin-top:75px;
    }
    .loginbox-half.loginbox-round{
        background-image: none;
        background:rgba(255,255,255,0.9);
        box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, 0.5),inset 0px 0px 60px 35px rgba(255, 255, 255, 1);
    }
    .loginbox-half:hover{
        width: 400px;
        border-radius: 0;
        transform: scale(1.03)
    }
    @keyframes fadeinbox{
        from{
            opacity: 0
        }
        to{
            opacity: 1
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                showLoginBox:false
            }
        }
    }
</script>