<template>
  <div class="blog">
    <div class="blog-sort">
      <ul>
        <li>
          <router-link :to="'/blog'" :class="{'blog-sort-active':currentRouter('/blog')}">全部</router-link>
        </li>
        <li v-for="sort in blogSortData" :class="{'blog-sort-liactive':currentRouter('/blog/sort/'+sort.link)}">
          <router-link :class="{'blog-sort-active':currentRouter('/blog/sort/'+sort.link)}"
                       :to="'/blog/sort/'+sort.link">{{sort.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <ul class="blog-title">
        <span v-if="isLogin" class="blog-new">
            <router-link :to="'/blog/publish'">
                新
            </router-link>
        </span>
        <div>
            <li v-for="article in articles">
                <article-list-item :article="article" :editable="isLogin"></article-list-item>
            </li>
        </div>  
    </ul>
  </div>
</template>
<script>
    import ArticleListItem from "components/UglyArticleListItem"

    export default{
        components: {
           'article-list-item': ArticleListItem,
        },
        methods:{
            currentRouter(routename){
                return this.$route.path==routename
            }

        },
        data(){
            return {
            //是否登陆
         isLogin: true,
         articles: [{title: "测试博客列表，第一条的title，vue是双向数据绑定，通过v-model实现，使用props进行父子组件的通信",brif:"南郭子綦隐机而坐，仰天而嘘，苔焉似丧其耦。颜成子游立侍乎前 ，曰：“何居乎？形固可使如槁木，而心固可使如死灰乎？今之隐机者，非昔之隐机者也？”子綦曰：“偃，不亦善乎而问之也！今者吾丧我，汝知之乎？女闻人籁而未闻地籁，女闻地籁而", pubTime: "一六年七月二十日", author: "载颐", name: "wang",id:"1",commits:23},{title: "vue可以使用watch来监听所有的数据变化，比如data, 样式背景等,", pubTime: "2016.7.20", author: "sha yang lan", name:"sha",id:"2",commits:16}],
         assorts: [{index: "", name: "", children: []}, {index: "", name: "", children: []}, {index: "", name: "", children: []}],
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
        right: calc(1em - 100%);
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
        right: 0.8em;
        transition: box-shadow 0.5s,right 0.5s,letter-spacing 0.5s,color 0.5s,background 0.5s;
        white-space: nowrap;
        color:rgba(120, 120, 120, 0.5);
        display: inline-block;
        text-indent: 2em;
        direction: rtl;
    }


    .blog{
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .blog-sort{
        box-shadow: -17px 0 8px -14px rgba(220,220,80,0.2) inset;
        display: flex;
        flex-direction: column;
        flex:1.5 0 0px;
        padding-top: 40px;
        z-index: 0;
        background-color:rgba(254, 254, 254, 0.1);
        border-right:1px dotted rgba(0,0,0,0.5);
        font-family:'JuzhenFang90f7448985259';
        font-size: 24px;
        overflow: hidden;
    }
    .blog-title{
        flex:3.5 0 0px;
        padding:0 40px;
        position: relative;
    }
    .blog-new{
        position: absolute;
        top: 0;
        left: 0;
        color:#fff;
        width: 4em;
        height: 4em;
        background: linear-gradient(-45deg,rgba(0,0,0,0) 50%,rgba(250, 82, 0,0.7) 50%);
        text-align: left;
        border-top-left-radius: 0.5em;
    }
    .blog-new>a{
        position: relative;
        font-family:'JuzhenFang90f7448985259';
        top:0.3em;
        left: 0.3em;
        font-size: 1.4em;
        text-decoration: none;
        color: currentColor;        
    }
    .blog-title>div{
        max-width: 800px;
        height: 100%;
        overflow: auto;
        padding-top:20px;
    }
    .blog-sort>ul>li>a:hover,.blog-sort-active{
        right: calc(100% - 2.2em)!important;
        letter-spacing: 3px;
        color:rgba(250, 82, 0,0.8)!important;
        text-shadow: 2px 2px 6px rgba(250 , 250, 250, 0.8);
    }
    .blog-sort-liactive{
        list-style: square;
    }
</style>
