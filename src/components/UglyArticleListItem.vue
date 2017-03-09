<template>
    <section class="articlelist-item">
        <router-link class="articlelist-title" :to="'/blog/'+ article.id">{{article.title}}</router-link>
        <p :class="{'articlelist-brif-edit':editable}" class="articlelist-brif">
          <span>{{pureBrif(article.brif)}}</span>
          <router-link v-if="editable" :to="'/blog/' + article.id + '#edit'">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-edit"></use></svg>
          </router-link>
        </p>
        <div>

        </div>
        <span class="articlelist-meta">
        <router-link class="articlelist-meta-commit" :to="'/blog/' + article.id + '#commit'">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-talk"></use></svg>
            <span>{{article.commits}}</span>
        </router-link>
          {{(article.name=="wang"?"于":"@")+article.pubTime+" | "+article.author+" ~"}}</span>
        <!--日期格式以后放后端判断-->
    </section>
</template>

<style>
    .articlelist-item{
        height: 100%;
        position: relative;
        display:flex;
        flex-direction:column;
        padding: 50px 0 10px 0;
        text-align: left;
        border-bottom: 1px dotted rgba(50, 50, 50, 0.8);
    }
    .articlelist-item:hover{
    }
    .articlelist-title,.articlelist-title:visited{
        color: rgba(0, 0, 0, 1.0);
        text-decoration: none;
        font-size: 22px;
        font-weight: bold;
        line-height: 1.4em;
    }
    .articlelist-brif{
        position: relative;
    }
    .articlelist-brif>span{
        border-left: 6px solid rgba(180, 180, 100, 0.5);
        padding: 0 1em;
        color: rgba(180, 180, 100, 0.5);
        line-height: 1.4em;
        display: block;
        position: relative;
        left: 0;
        transition:left 0.3s ease,color 0.3s;
        cursor:default;
    }
    .articlelist-brif-edit>a{
      position: absolute;
      font-size: 1.5em;
      left: 0.5em;
      top: calc(50% - 0.6em);
      text-decoration: none;
      color: rgba(180, 180, 100, 0.5);
      opacity: 0;
      transform: rotateZ(-200deg);
      transition: opacity 0.3s,transform 1s;
    }
    .articlelist-brif-edit:hover>a{
      opacity: 1;
      transform: rotateZ(360deg)
    }
    .articlelist-brif-edit:hover>span{
      left:2.8em;
      color: rgba(180, 180, 100, 0.3);
    }
    .articlelist-meta{
      color:gray;
      text-align: right;
      padding-right: 2em;
      font-size: 0.5em;
      line-height: 2em;
    }
    .articlelist-meta-commit{
      float: left;
      font-size: 1em;
      color:currentColor;
      text-decoration: none;
    }
</style>

<script>
    export default{
        props: {
          article:{},
          editable:{
            default:false
          }
        },
        computed:{
        },
        methods: {
          pureBrif(brif){
              //以后做个处理，把简要里面的图片和音乐标签剔除，然后拿出来单独处理，比如在列表页就可以播放，也可以有一张小图
              //也可以放到后端分析。返回的对象里加上Image或者Audio属性也不错。
              return (brif?brif:"啊哦")+"..."
          }
        },
    }


</script>
