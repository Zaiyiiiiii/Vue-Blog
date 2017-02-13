<template>
    <div class="navi">
        <ul class="navi-list">
            <li v-for="item in items" class="navi-item"><router-link :to="item.link">{{item.name}}</router-link></li>
        </ul>
<link href='//cdn.webfont.youziku.com/webfonts/nomal/21081/46723/58a1a6d3f629d815f80ae47c.css' rel='stylesheet' type='text/css' />    </div>
</template>
<style>
    .navi-list{
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;        
        font-family:'JuzhenFang8dc9cf1295259';
        font-size: 28px;
    }
    .navi-list a{
        text-decoration: none;
    }
    .navi-list a:active,.navi-list a:visited{
        color: #000;
    }
    .navi-item{

    }
</style>
<script>
    export default{
        name: 'navi',
        props:{
            expand:{
                default:false
            },
            items:{
                default:[{
                    name:"首页",
                    hoverBackground:'#F00',
                    link:"/"
                }]
            }
        }
    }
</script>