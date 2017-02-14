<template>
    <div :style="{backgroundColor:$route.path=='/'?naviColor:'#fff'}" class="navi" :class="[isBar?'navi-is-bar':'navi-is-menu']">
        <div class="body-background" :style="{backgroundImage:backgroundImageProp}" :class="{'background-show':showBackground}"></div>
        <ul class="navi-list">
            <li :class="{'hide-return':$route.path=='/'}" class="navi-item"><router-link to="/">返回</router-link></li>
            <li @click="mouseOverNaviItem('out',item,$event)" @mouseout="mouseOverNaviItem('out',item,$event)" @mouseover="mouseOverNaviItem('in',item,$event)" v-for="item in items" class="navi-item"><router-link :class="{'route-active':currentRouter(item.link)}" :to="item.link">{{item.name}}</router-link></li>
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
        width: auto;
        flex:auto;
        transition: flex 1s,opacity 1s;
    }
    .navi-is-bar{
        font-size: 24px;
    }
    .navi-is-menu{
        color:white!important;
        top: 35%;
        font-size: 36px;
    }
    .route-active{
        color:#f20c00!important;
    }
    .hide-return{
        width:0;
        height:0;
        flex:none;
        opacity: 0;
        transform: translateX(-100px)
    }
    @media (max-width: 500px){
        .background-show{
            display: none;
        }
        .site-title{
            color:currentColor!important;
        }
        .navi{
            line-height: 14px;
        }
        .navi-item{
            font-size: 24px;
        }
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
                backgroundImageProp:"",
                naviColor:"red"
            }
        },
        computed:{
        },
        methods:{            
            currentRouter(routename){
                return this.$route.path==routename&&this.$route.path!='/'
            },
            mouseOverNaviItem(method,item,event){
                if(this.$route.path=='/'){
                    if(method=='in'){
                        this.backgroundImageProp=item.hoverBackground
                        this.showBackground=true
                        document.querySelector(".site-title").style.color="rgba(255,250,255,0.85)"
                        this.naviColor=item.hoverColor
                        event.target.style.color=item.textColor
                        console.log(event.target.style)
                    }
                    else{
                        this.showBackground=false
                        this.naviColor="red"
                        document.querySelector(".site-title").style.color="currentcolor"
                        event.target.style.color="#fff"
                    }
                }
                else{
                    this.showBackground=false
                    this.naviColor="red"
                    document.querySelector(".site-title").style.color="currentcolor"
                    event.target.style.color="currentcolor"
                }
            }
        }
    }
</script>