<template>
<<<<<<< HEAD
    <div class="blog">
        <div class="blog-sort">
            <ul>
                <li><router-link :to="'/blog'" :class="{'blog-sort-active':currentRouter('/blog')}">全部</router-link></li>
                <li v-for="sort in blogSortData"><router-link :class="{'blog-sort-active':currentRouter('/blog/sort/'+sort.link)}" :to="'/blog/sort/'+sort.link">{{sort.name}}</router-link></li>
            </ul>
        </div>
        <ul class="blog-title">
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
        </ul>
=======
  <div class="blog">
    <div class="blog-sort">
      <div>
        <h3>文章分类</h3>
        <span>javascript</span><span>html</span>
      </div>
      <ul class="sort-list">
        <li v-for="assort in assorts">{{}}</li>
      </ul>
>>>>>>> origin/master
    </div>
    <ul class="blog-title">
      <li v-for="article in articles"><article-list :data="article"></article-list></li>
    </ul>
  </div>
</template>
<script>
    export default{
        methods:{
            currentRouter(routename){
                console.log(this.$route.path+":"+routename)
                return this.$route.path==routename
            }

        },
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
        font-size: 18px;
        flex-direction: column;
        flex:1 0 0px;
<<<<<<< HEAD
        padding-top: 40px;
        z-index: 0;
        background-color:rgba(254, 254, 254, 0.1);
        border-right:1px dotted rgba(0,0,0,0.5);
        font-family:'JuzhenFang90f7448985259';
        font-size: 24px;
        overflow: hidden;
=======
        margin-top: 28px!important;
        background-color: #EFF3EF;
        padding: 120px 50px 0;
        box-sizing: border-box;
        text-align: left;
>>>>>>> origin/master
    }
    .blog-sort li {
        height: 30px;
        line-height: 30px;
        color: rgb(13, 183, 13);
    }

    .blog-title{
        flex:3 0 0px;
    }    
    .blog-sort-active{
        display: inline-block;
        line-height: 0.98em;
    }
    .blog-sort>ul>:hover::first-letter,.blog-sort-active::first-letter {
        color:rgb(242, 12, 0)!important;
        opacity: 1!important;
        text-shadow: -5px 5px 8px rgba(230 , 230, 230, 0.8);
    }
    .blog-sort>ul>li>a:hover::before,.blog-sort-active::before{
        box-shadow: -5px 5px 6px 3px rgba(230 , 230, 230, 0.8);
        background:rgba(240, 120, 50, 0.8)!important;
    }
    .blog-sort>ul>li>a:hover,.blog-sort-active{
        right: calc(100% - 1em)!important;
        letter-spacing: 3px!important;        
        color:white;
    }




</style>
<script>
  import article-list from "components/Article"

  export default{
    data(){
       return {
         articles: [{title: "", pubTime: "", author: ""},{title: "", pubTime: "", author: ""}],
         assorts: [{index: "", children: []}, {index: "", children: []}, {index: "", children: []}]
       }
    }
  }
</script>
