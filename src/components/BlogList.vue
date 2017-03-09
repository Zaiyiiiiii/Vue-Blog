<template>
  <div class="blog">
    <div class="blog-sort">
    </div>
    <ul class="blog-title">
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
</style>
