<template>
    <div class="blog">
        <ul class="blog-sort">
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
        </ul>
        <ul class="blog-title">
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
            <li>博客标题</li>
        </ul>
    </div>
</template>
<style>
    .blog ul{
        margin: 0;
    }
    ul>li{
        display: block;
    }
    .blog{
        height: 100%;
    }
    .blog{
        display: flex;
        justify-content: center;
    }
    .blog-sort{
        display: flex;
        flex-direction: column;
        flex:1 0 0px;
        margin-top: 28px!important;
        padding-top: 40px;
    }
    .blog-title{
        flex:3 0 0px;
    }
</style>
