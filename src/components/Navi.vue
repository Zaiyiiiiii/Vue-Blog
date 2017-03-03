<template>
    <div :style="{backgroundColor:$route.path=='/'?naviColor:'#fff'}" class="navi" :class="[isBar?'navi-is-bar':'navi-is-menu']">
        <ul class="navi-list">
            <li style="white-space: nowrap;overflow: hidden;" :class="{'hide-return':$route.path=='/'}" class="navi-item"><router-link to="/">返回</router-link></li>
            <li @click="mouseOverNaviItem('out',item,$event,index)" @mouseout="mouseOverNaviItem('out',item,$event,index)" @mouseover="mouseOverNaviItem('in',item,$event,index)" v-for="(item,index) in items" class="navi-item">
                <router-link class="route-link" :class="{'route-active':currentRouter(item.link)}" :to="item.link">
                    {{item.name}}
                    <!--<div class="navi-hovertext" :class="'hover-text-'+index"><span v-for="(char,index) in item.hoverText.split('')" :style="'animation-delay:'+index/2+'s'">{{char}}</span></div>-->
                </router-link>
                <div class="body-background" :style="{backgroundImage:item.hoverBackground}"></div>
            </li>
        </ul>
<link href='//cdn.webfont.youziku.com/webfonts/nomal/21081/46723/58aeaac0f629da0f684a15c8.css' rel='stylesheet' type='text/css' />    </div>
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
    .navi-is-menu .navi-item:hover>.body-background{
        opacity: 1.0;
    }
    .navi{
        width: 100%;     
        position: relative;
        transition: all 1s,box-shadow 0s 0s;
        top:0;
        /*box-shadow: 0px 0px 5px 2px #fff;*/
    }
    .navi-list{
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;        
        font-family:'JuzhenFang90f7448985259';
    }
    .navi-list a{
        text-decoration: none;
    }
    .navi-list a,.navi-list a:active,.navi-list a:visited{
        color: currentColor;
    }
    /*.navi-item>a{
        position: relative;
    }
    .navi-hovertext{
        display: none;
        position: absolute;
        top: -2px;
        left: 2em;
        z-index: 1;
        color: #fff;
    }
    .navi-hovertext>span{
        animation: textfade 0.5s ease 0s;
        animation-fill-mode:forwards;
        opacity: 0;
        font-size: 22px;
    }
    @keyframes textfade{
        from{
            opacity: 0;
            filter: blur(5px);
            font-size: 6px;
        }
        to{
            opacity: 1;
            font-size: 22px;
        }
    }*/
    .navi-item{ 
        /*white-space: nowrap;overflow: hidden;*/
        flex:1;
        transition: flex 1s,opacity 1s,transform 1s,margin 1s;
        line-height: 45px;
    }
    .navi-item>span,.navi-item>a{
        padding-bottom: 3px;
    }
    .navi-is-bar{
        background: transparent!important;
        font-size: 24px;
    }
    .navi-is-bar a,.route-active{
        border-bottom: 3px solid rgba(0,0,0,0);
        border-radius: 3px;
        transition: color 0.4s,border 0.4s!important;
    }
    .navi-is-bar a:hover{
        color:#f20c00;
        border-bottom: 3px solid #f20c00;
    }
    .route-active{
        color:#f20c00!important;
        cursor: default;
        border-bottom-color:#f20c00!important;
    }
    .navi-is-menu{
        color:white!important;
        top: 45%;
        font-size: 36px;
    }
    .hide-return{
        flex:0;
        flex-basis: 0;
        opacity: 0;
        transform: translateX(-100px);
        margin: 0;
    }
    @media (max-width: 500px){
        .background-show{
            display: none;
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
                naviColor:"rgba(255,0,0,0.6)"
            }
        },
        computed:{
        },
        methods:{            
            currentRouter(routename){
                var match = new RegExp("^"+routename,""); //注意，反斜杠需要转义
                return this.$route.path.match(match)&&this.$route.path!='/'
            },
            mouseOverNaviItem(method,item,event,index){
                if(this.$route.path=='/'){
                    if(method=='in'){
                        document.querySelector(".site-title").style.color="rgba(255,250,255,0.85)"
                        this.naviColor=item.hoverColor
                        event.target.style.color=item.textColor
                        // document.querySelector('.hover-text-'+index).style.display="block"
                    }
                    else{
                        this.naviColor="rgba(255,0,0,0.6)"
                        document.querySelector(".site-title").style.color=null
                        event.target.style.color=""
                        // document.querySelector('.hover-text-'+index).style.display="none"
                    }
                }
                else{
                    // this.showBackground=false
                    this.naviColor="rgba(255,0,0,0.6)"
                    document.querySelector(".site-title").style.color=null
                    event.target.style.color=""
                    // document.querySelector('.hover-text-'+index).style.display="none"
                }
            }
        }
    }
</script>