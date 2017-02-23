<template>
    <div class="blog">
        <div class="blog-sort">
            <ul>
                <li v-for="sort in blogSortData"><router-link :to="'/blog/sort/'+sort.link">{{sort.name}}</router-link></li>
            </ul>
        </div>
        <ul class="blog-title">
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                blogSortData:[
                    {
                        name:"博物论",
                        link:"bowu"
                    },
                    {
                        name:"闻鸡起舞",
                        link:"wenji"
                    },
                    {
                        name:"强行扶老太太过马路是不对的",
                        link:"qiangxing"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .blog ul{
        margin: 0;
    }
    ul>li{
        display: block;
    }
    .blog-sort>ul{
        text-align: left;
        position: relative;
        right: calc(2em - 100%);
        display: flex;
        flex-direction: column;
        align-items:flex-start;
    }
    .blog-sort>ul>li{
        line-height: 60px;
        position: relative;
        letter-spacing: 1em;
        display: inline;
    }
    .blog-sort>ul>li>a{
        position: relative;
        text-decoration: none;
        right: 0;
        transition: right 0.5s,letter-spacing 0.5s,color 0.5s;
        white-space: nowrap;
    }
    .blog-sort>ul>::first-line{
        opacity: 0;
    }
    .blog-sort>ul>li>a:before{
        transition: all 0.5s;
        background:transparent linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0));
        content: ' ';
        position: absolute;
        z-index: -1;
        top:-50%;
        left: 1em;
        height: 200%;
        width: calc(100% + 0.6em);
        border-radius: 30px;
    }
    .blog-sort>ul>::first-letter{
        transition: all 0.5s;
        color:rgb(66, 185, 131);
        opacity: 1;
    }

    .blog{
        height: 100%;
        display: flex;
        justify-content: center;
        box-shadow: 0 30px 30px -12px #fff inset;
    }
    .blog-sort{
        box-shadow: -17px 0 10px -8px rgba(220,220,220,0.3) inset;
        display: flex;
        flex-direction: column;
        flex:1 0 0px;
        padding-top: 40px;
        z-index: 0;
        background-color:rgba(254, 254, 254, 0.1);
        border-right:1px dotted rgba(0,0,0,0.5);
        font-family:'JuzhenFang90f7448985259';
        font-size: 24px;
        overflow: hidden;
    }
    .blog-title{
        flex:3 0 0px;
    }    
    .router-link-active{
        display: inline-block;
        line-height: 0.98em;
    }
    .blog-sort>ul>:hover::first-letter,.router-link-active::first-letter {
        color:rgb(242, 12, 0)!important;
        opacity: 1!important;
        text-shadow: -5px 5px 8px rgba(230 , 230, 230, 0.8);
    }
    .blog-sort>ul>li>a:hover::before,.router-link-active::before{
        box-shadow: -5px 5px 6px 3px rgba(230 , 230, 230, 0.8);
        background:rgba(240, 120, 50, 0.8)!important;
    }
    .blog-sort>ul>li>a:hover,.router-link-active{
        right: calc(100% - 1em)!important;
        letter-spacing: 3px!important;        
        color:white;
    }
</style>
