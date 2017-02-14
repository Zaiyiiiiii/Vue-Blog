<template>
    <div class="navi" :class="[isBar?'navi-is-bar':'navi-is-menu']">
        <div class="body-background" :style="{background:backgroundImageProp}" :class="{'background-show':showBackground}"></div>
        <ul class="navi-list">
            <li :class="{'hide-return':$route.path=='/'}" class="navi-item"><router-link to="/">返回</router-link></li>
            <li @mouseout="mouseOverNaviItem('out',item)" @mousemove="mouseOverNaviItem('in',item)" v-for="item in items" class="navi-item"><router-link :class="{'route-active':currentRouter(item.link)}" :to="item.link">{{item.name}}</router-link></li>
        </ul>
        <link href='//cdn.webfont.youziku.com/webfonts/nomal/21081/46723/58a1a717f629d815f80ae47d.css' rel='stylesheet' type='text/css' />
    </div>
</template>
<style>
    body{
        transition: background 0.5s;
    }
    .body-background{
        position: fixed;
        z-index: -1;
        left: 0;
        top:0;
        height: 100%;
        width: 100%;
        background-size: cover;
        opacity: 0;
        transition: opacity 0.2s linear,background 0.2s;
    }
    .background-show{
        opacity: 1.0;
    }
    .navi{
        width: 100%;     
        position: relative;
        transition: all 1s;
        top:0;
    }
    .navi-list{
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;        
        font-family:'JuzhenFang8dc9dfc505259';
    }
    .navi-list a{
        text-decoration: none;
    }
    .navi-list a,.navi-list a:active,.navi-list a:visited{
        color: currentColor;
    }
    .navi-item{
        flex:auto;
        transition: flex 1s,opacity 1s;
    }
    .navi-is-bar{
        font-size: 24px;
    }
    .navi-is-menu{
        color:white;
        top: 35%;
        background-color: red;
        font-size: 36px;
    }
    .route-active{
        color:#f20c00!important;
    }
    .hide-return{
        width:0;
        height: 0;
        flex:none;
        opacity: 0;
    }
</style>
<script>
    export default{
        name: 'navi',
        props:{
            isBar:{
                default:false
            },
            items:{
                default:[{
                    name:"首页",
                    hoverBackground:'#F00',
                    link:"/"
                }]
            }
        },
        data(){
            return {                
                showBackground:false,
                backgroundImageProp:""
            }
        },
        computed:{
        },
        methods:{            
            currentRouter(routename){
                console.log(this.$route.path==routename)
                return this.$route.path==routename&&this.$route.path!='/'
            },
            mouseOverNaviItem(method,item){
                if(this.$route.path=='/'){
                    if(method=='in'){
                        this.backgroundImageProp=item.hoverBackground
                        console.log(this.backgroundImageProp)
                        this.showBackground=true
                        document.querySelector(".site-title").style.color="rgba(255,250,255,0.85)"
                    }
                    else{
                        this.showBackground=false
                        document.querySelector(".site-title").style.color="currentcolor"
                    }
                }
                else{
                    this.showBackground=false
                    document.querySelector(".site-title").style.color="currentcolor"
                }
            }
        }
    }
</script>