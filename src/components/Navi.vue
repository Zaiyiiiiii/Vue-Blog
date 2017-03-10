<template>
    <div :style="{backgroundColor:$route.path=='/'?naviColor:currentRouteItem().hoverColor}" class="navi" :class="[isBar?'navi-is-bar':'navi-is-menu']">
        <ul class="navi-list">
            <li style="white-space: nowrap;overflow: hidden;" :class="{'hide-return':$route.path=='/'}" class="navi-item"><router-link to="/">返回</router-link></li>
            <li @mouseenter="mouseOverNaviItem('in',item)" @mouseleave="mouseOverNaviItem('out',item)" :class="'navi-item-'+item.link.substr(1,item.link.length)" v-for="(item,index) in items" class="navi-item">
                <router-link class="route-link" :class="{'route-active':currentRouter(item.link)}" :style="{color:currentRouter(item.link)&&$route.path!='/'?currentRouteItem().textColor:undefined,borderColor:currentRouter(item.link)?currentRouteItem().textColor:undefined}" :to="item.link">
                    {{item.name}}
                    <!--<div class="navi-hovertext" :class="'hover-text-'+index"><span v-for="(char,index) in item.hoverText.split('')" :style="'animation-delay:'+index/2+'s'">{{char}}</span></div>-->
                </router-link>
                {{styleTag(item)}}
                <div class="body-background" :style="[{backgroundImage:item.hoverBackground},showSubBackground(item)]"></div>
            </li>
        </ul>
        <link href='//cdn.webfont.youziku.com/webfonts/nomal/21081/46723/58aeaac0f629da0f684a15c8.css' rel='stylesheet' type='text/css' />
    </div>
</template>
<style>
    .body-background{
        position: fixed;
        z-index: -1;
        left: 0;
        top:0;
        height: 100%;
        width: 100%;
        background-size: cover;
        opacity: 0;
        transition: opacity 0.5s linear,background 0.5s;
    }
    .navi-is-menu .navi-item:hover>.body-background{
        opacity: 1.0;
    }
    .body-background{
        pointer-events:none;
    }
    .navi{
        width: 100%;     
        position: relative;
        transition: all 1s;
        top:0;
        box-sizing: border-box;
        /*box-shadow: 0px 0px 5px 2px #fff;*/
    }
    .navi-is-menu{
        color:white;
        top: 45%;
        font-size: 36px;
    }
    .navi-list{
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;        
        font-family:'JuzhenFang90f7448985259';
        margin: 0;
        padding:1em 0;
    }
    .navi-list a{
        text-decoration: none;
    }
    .navi-list a,.navi-list a:active,.navi-list a:visited{
        color: currentColor;
    }
    .navi-item{ 
        /*white-space: nowrap;overflow: hidden;*/
        flex:1;
        transition: flex 1s,opacity 1s,transform 1s,margin 1s;
        line-height: 45px;
        margin: 0;
    }
    .navi-item>span,.navi-item>a{
        padding-bottom: 4px;
    }
    .navi-is-bar{
        font-size: 24px;
        padding: 0 20%;
        color:#fff;
    }
    .navi-is-bar a,.route-active{
        border-bottom: 3px solid rgba(0,0,0,0);
        border-radius: 3px;
        transition: color 0.4s,border 0.4s!important;
    }
    .navi-is-bar a:hover{
        border-bottom: 3px solid currentColor;
    }
    .route-active{
        cursor: default;
    }
    .hide-return{
        flex:0;
        flex-basis: 0;
        opacity: 0;
        transform: translateX(-50%);
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
                naviColor:"rgba(120,105,110,0.3)"
            }
        },
        computed:{
        },
        methods:{
            styleTag(item){
                var tag = item.link.substr(1,item.link.length)
                document.head.innerHTML+='<style>.navi-item-'+tag+':hover{color:'+item.textColor+'}</style>'
            },
            currentRouteItem(){
                for(var item in this.items){
                    var regexp = new RegExp("^"+this.items[item].link,"g")
                    if(this.$route.path.match(regexp)){
                        return this.items[item]
                    }
                }
                return {hoverColor:"#fff"}
            },
            showSubBackground(item){
                return {filter:"",opacity:this.$route.matched[1].path==item.link?'1.0':undefined}
            },
            currentRouter(routename){
                var match = new RegExp("^"+routename,""); //注意，反斜杠需要转义
                return this.$route.path.match(match)&&this.$route.path!='/'
            },
            mouseOverNaviItem(method,item,event,index){
                if(this.$route.path=='/'){
                    if(method=='in'){
                        document.querySelector(".site-title").style.color="rgba(255,250,255,0.85)"
                        this.naviColor=item.hoverColor
                    }
                    else{
                        this.naviColor="rgba(120,105,110,0.3)"
                        document.querySelector(".site-title").style.color=null
                    }
                }
                else{
                    // this.showBackground=false
                    this.naviColor="rgba(120,105,110,0.3)"
                    document.querySelector(".site-title").style.color=null
                }
            }
        }
    }
</script>