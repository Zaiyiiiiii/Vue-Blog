<template>
    <div class="article" keep-alive>
        
        <button class="edit-button" @click="switchEdit()">{{ifEdit?'保存':'编辑'}}</button>
        <button @click="enterFullScreen">全屏</button>
        <div class="article-title-contianer">
            <div class="article-title" v-if="!ifEdit">{{title}}</div>
            <input class="article-title" v-else v-model="title"></input>
            <svg>
                <rect class="article-title-border" :class="{'article-title-border-edit':ifEdit}" x="0" y="0" 
                 />
            </svg>
        </div>
        <div class="article-context" :contenteditable="ifEdit" :class="{'article-context-editing':ifEdit}">
        </div>
    </div>
</template>
<script>
    import * as medium from 'medium-editor'
    export default{
        methods:{
            switchEdit(){ 
                this.ifEdit=!this.ifEdit
                if(this.ifEdit){
                }else{
                }
            },
            enterFullScreen() {
                var article = document.querySelector(".article");
                if (article.requestFullscreen) {
                    article.requestFullscreen();
                } else if (article.webkitRequestFullScreen) {
                    article.webkitRequestFullScreen();
                }
            }
        },
        mounted(){
            var editor = new medium('.article-context',this.editorConfig)
            document.querySelector(".article-context").setAttribute("contenteditable",this.ifEdit)
        },
        data(){
            return{
                title:"fff",
                articleContext:"32132132132",
                ifEdit:false,
                editorConfig:{
                        activeButtonClass: 'medium-editor-button-active',
                        buttonLabels: false,
                        contentWindow: window,
                        delay: 0,
                        disableReturn: false,
                        disableDoubleReturn: false,
                        disableExtraSpaces: false,
                        disableEditing: false,
                        elementsContainer: document.querySelector(".article"),
                        extensions: {},
                        ownerDocument: document,
                        spellcheck: true,
                        targetBlank: false,
                        placeholder:false,
                        toolbar
                }
            }
        },
        computed:{
        }
    }
</script>
<style>
    @import url('../../node_modules/medium-editor/dist/css/medium-editor.css');
    @import url('../../node_modules/medium-editor/dist/css/themes/beagle.css');
    .article{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y:auto;
    }
    .edit-button{
        font-size: 1.4em;
    }
    .article-editor{
        min-height: 400px;
        width: 100%;
    }
    .article-title-contianer{
        position: relative;
        width:30em;
        height: 3em;
        margin: auto;
        display: inline-block;
    }
    .article-title-contianer>svg{
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        pointer-events: none;
        border-radius: 4px 4px 4px 0;
    }
    .article-title-border{
        width: 100%;
        height: 100%;
        stroke-width: 8px;
        stroke: #f20c00;;
        fill:none;
        stroke-dasharray:3em,63em;
        stroke-dashoffset: 3em;
        transition: stroke-dashoffset 0.5s ease,stroke-dasharray 0.5s ease,stroke 0.5s;
    }
    .article-title-border-edit{
        stroke: rgba(220, 150, 180, 0.1);
        stroke-dasharray:30em,63em;
        stroke-dashoffset: 60em;
    }
    .article>.article-context{
        width: 800px;
        margin: 50px auto;
        text-align: left;
        padding: 3em;
        box-sizing: border-box;
        font-size: 1.2em;
        transition: box-shadow 0.4s;
        outline: none;
    }
    .article-context-editing{
        box-shadow: 0 0 16px 8px rgba(220, 150, 180, 0.1)
    }
    .article-title{
        text-align: left;
        width:100%;
        height: 2em;
        font-size:24px;
        line-height: 2em;
        border:none;
        outline: none;
        padding:0;
        padding-left: 1em;
    }
    blockquote{
        border-left: 7px solid #f20c00;
        color:#aaa;
        padding: 16px;
        margin: 0;
    }
</style>