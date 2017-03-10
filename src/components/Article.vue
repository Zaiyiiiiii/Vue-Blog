<template>
  <div class="article-detail">
    <div class="article" keep-alive>
      <button class="edit-button" :class="ifEdit?'edit-button-edit':'edit-button-save'" @click="switchEdit()">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="ifEdit?'#icon-save':'#icon-edit'"></use>
        </svg>
      </button>
      <div class="article-title-contianer">
        <div class="article-title" v-if="!ifEdit">{{title}}</div>
        <input class="article-title" v-else v-model="title"/>
        <svg>
          <rect class="article-title-border" :class="{'article-title-border-edit':ifEdit}" x="0" y="0"
          />
        </svg>
      </div>
      <div class="article-context">
        <transition name="fade">
          <div class="article-toolbar" v-if="ifEdit">
            <div @click="switchFullScreen" class="article-fullscreen">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="fullScreenState?'#icon-fullscreen':'#icon-fullscreen1'"></use>
              </svg>
            </div>
            <div class="article-media">
              <input type="file" @change="insertMedia()">
              <span @click="uploadFunction()">
                            <svg class="icon" aria-hidden="true"><use :xlink:href="'#icon-upload'"></use></svg>
                        </span>
            </div>
          </div>
        </transition>
        <div class="article-editor" :contenteditable="ifEdit" :class="{'article-context-editing':ifEdit}">
        </div>
      </div>
    </div>
    <comment-box class="slide-from-right"></comment-box>
  </div>
</template>
<script>
    import * as MediumEditor from 'medium-editor'
    // var b = document.createElement('script')
    // b.src="/static/medium-editor.min.js"
    // document.body.appendChild(b)
    import * as AutoList from '../../static/autolist.min.js'
    import * as MediumButton from 'medium-button'
    import CommentBox from "components/CommentBox.vue"

    var autolist = new AutoList();

    export default{
        components: {
          "comment-box": CommentBox
        },
        computed:{
        },
        methods:{
            uploadFunction(){
                console.log("in")
                document.querySelector('.article-media>input').click()
            },
            insertMedia(){
                document.querySelector('.article-editor').focus()
                var fileinput= document.querySelector('.article-media>input')
                var url = window.URL.createObjectURL(fileinput.files.item(0))
                var fileext = fileinput.value.substr(fileinput.value.lastIndexOf(".")).toLowerCase()
                if(fileext.match(/\.(png|jpe?g|gif|svg)(\?.*)?$/)){
                    document.execCommand('insertHTML',false,"<img style='display:inline' src='"+url+"'/>")
                }
                else if(fileext.match(/\.(mp3|wma|ogg|acc)(\?.*)?$/)){
                    document.execCommand('insertHTML',false,"<p><br></p><p><audio style='display:inline;user-select:inhert' controls='controls' src='"+url+"'><br></audio></p><p><br></p>")
                }
            },
            highlight(){

            },
            switchEdit(){
                this.ifEdit=!this.ifEdit
                if(this.ifEdit){
                }else{
                }
            },
            switchFullScreen() {
                if(!document.webkitFullscreenElement){
                    this.fullScreenState=false
                    if (this.fullScreenElement.requestFullscreen) {
                        this.fullScreenElement.requestFullscreen();
                    }
                    else if (this.fullScreenElement.webkitRequestFullScreen) {
                        this.fullScreenElement.webkitRequestFullScreen();
                    }
                }
                else{
                    this.fullScreenState=true
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            }
        },
        mounted(){
            this.editor = new MediumEditor('.article-editor',this.editorConfig)
            document.querySelector(".article-editor").setAttribute("contenteditable",this.ifEdit)
            hljs.initHighlighting();
        },
        data(){
            return{
                fullScreenState:true,
                fullScreenElement:document.documentElement,
                title:"fff",
                articleContext:"32132132132",
                ifEdit: (document.URL).split("#")[1] == "edit" ? true : false,
                editorConfig:{
                        activeButtonClass: 'medium-editor-button-active',
                        allowMultiParagraphSelection: true,
                        buttonLabels: false,
                        contentWindow: window,
                        delay: 0,
                        disableReturn: false,
                        disableDoubleReturn: false,
                        disableExtraSpaces: false,
                        disableEditing: false,
                        elementsContainer: document.querySelector(".article"),
                        extensions: {
                            'autolist': autolist,
                            'code': new MediumButton({label:'<b>Code</b>', start:'<code>', end:'</code>',//,action:hljs.initHighlighting()
                            // action: (document.querySelectorAll("code").forEach(function(element){
                            //             console.log("code")
                            //             hljs.highlightBlock(element)
                            //         }))
                        })},
                        ownerDocument: document,
                        spellcheck: true,
                        targetBlank: false,
                        placeholder:false,
                        toolbar:{
                            relativeContainer:document.querySelector(".article"),
                            buttons: ['h1', 'h2', 'bold', 'italic','underline', 'quote', 'pre','code',
                             'unorderedlist','orderedlist', 'justifyLeft', 'justifyCenter', 'anchor']
                        },
                }
            }
        }
    }

</script>
<style>
    @import url('../../node_modules/medium-editor/dist/css/medium-editor.css');
    @import url('../../node_modules/medium-editor/dist/css/themes/default.css');

    .article-detail {
      position: relative;
      top: 0;
      left: 0;
    }
    .article{
        overflow:auto;
        width:100%;
        height:100%;
    }
    .article-toolbar{
        position:absolute;
        top:0;
        right:0;
    }
    .article-media{
        position: absolute;
        top:1em;
        right: 2em;
        font-size: 1.5em;
        color: rgba(181, 64, 16, 0.2);
        transition: all 0.5s
    }
    .article-media:hover{
        color: rgba(181, 64, 16, 0.5);
    }
    .article-media>input{
        display:none;
    }
    .edit-button{
        font-size: 1.4em;
        transition:all 0.5s;
        background: none;
        border: none;
        padding:0;
        outline: none;
    }
    .edit-button-edit{
        color:rgba(181, 64, 16, 0.15);
    }
    .edit-button-save{
        color:#f20c00;
    }
    .article,.article-editor{
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
        stroke: rgba(181, 64, 16, 0.15);
        stroke-dasharray:30em,63em;
        stroke-dashoffset: 60em;
    }
    .article>.article-context{
        position: relative;
        width: 800px;
        margin: 50px auto;
        box-sizing: border-box;
        font-size: 1.2em;
        transition: box-shadow 0.4s;
    }
    .article-editor{
        box-sizing: border-box;
        text-align: left;
        padding: 3em;
        outline: none;
        transition: box-shadow 0.5s;
    }
    .article-context-editing{
        box-shadow: 0 0 16px 8px rgba(181, 64, 16, 0.05);
    }
    .article-context-editing:focus{
        box-shadow: 0 0 16px 8px rgba(181, 64, 16, 0.1)
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
    .article-fullscreen{
        position: absolute;
        top:1em;
        right: 1em;
        font-size: 1.5em;
        color: rgba(181, 64, 16, 0.2);
        transition: all 0.5s
    }
    .article-fullscreen:hover{
        color: rgba(181, 64, 16, 0.5);
        transition: all 0.5s
    }
    blockquote{
        border-left: 6px solid #f20c00;
        color:#999;
        padding: 16px;
        margin: 0px;
    }

    .slide-from-right{
       height: 600px;
       position: absolute;
       right: 0;
       top: 100px;
       transition: right 0.3s ease-out;
    }

    .slide-from-right:hover{
       right: 0;
    }

    html:-webkit-full-screen .site-title,html:-webkit-full-screen .navi{
        display: none;
    }

    html:-webkit-full-screen .article{
        box-sizing: border-box;
        margin-top: 100px;
        padding-top:100px;
    }
    html:-webkit-full-screen .article-context{
        margin-bottom: 300px;
    }

</style>
