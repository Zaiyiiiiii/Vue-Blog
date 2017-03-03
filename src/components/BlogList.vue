<template>
  <div class="blog">
    <div class="blog-sort">
      <ul>
        <li style="margin-left: -30px;letter-spacing: 0; font-size: 26px;">+</li>
        <li>
          <router-link :to="'/blog'" :class="{'blog-sort-active':currentRouter('/blog')}">全部</router-link>
        </li>
        <li v-for="sort in blogSortData">
          <router-link :class="{'blog-sort-active':currentRouter('/blog/sort/'+sort.link)}"
                       :to="'/blog/sort/'+sort.link">{{sort.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <ul class="blog-title">
      <li v-for="article in articles">
        <article-list-item :article="article" :editable="isLogin"></article-list-item>
      </li>
    </ul>
  </div>
</template>
<script>
    import ArticleListItem from "components/ArticleListItem"

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
         articles: [{title: "测试博客列表，第一条的title，vue是双向数据绑定，通过v-model实现，使用props进行父子组件的通信", pubTime: "2016-7-20", author: "wang", name: "wang",id:"1"},{title: "vue可以使用watch来监听所有的数据变化，比如data, 样式背景等,", pubTime: "2016-7-20", author: "sha", name:"sha",id:"2"}],
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
    .blog-sort>ul>li>a:hover::first-letter,.blog-sort-active::first-letter {
        color:rgb(242, 12, 0)!important;
        text-shadow: -5px 5px 8px rgba(230 , 230, 230, 0.8);
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
        right: 0;
        transition: box-shadow 0.5s,right 0.5s,letter-spacing 0.5s,color 0.5s,background 0.5s;
        white-space: nowrap;
        color:rgba(120, 120, 120, 0.5);
        display: inline-block;
        line-height: 2em;
        text-align: right;
        width: calc(100% - 1em);
        text-indent: 2em;
        direction: rtl;
        border-radius: 2em;
    }


    .blog{
        height: 100%;
        display: flex;
        justify-content: center;
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
    .blog-sort-active{
    }
    .blog-sort>ul>li>a:hover,.blog-sort-active{
        background:rgba(240, 120, 50, 0.8);
        right: calc(100% - 3em)!important;
        letter-spacing: 3px!important;
        color:white!important;
        box-shadow: 5px 5px 6px 3px rgba(220,220,220,0.3);
    }
</style>
