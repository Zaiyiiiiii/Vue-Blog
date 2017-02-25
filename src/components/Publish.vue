<template>
    <div class="publish">
        <div class="publish-editor">
        </div>
        <link rel="stylesheet" href="">
        <link rel="stylesheet" href="../../node_modules/medium-editor/dist/css/themes/default.css" id="medium-editor-theme">
    </div>
</template>
<script>
    import * as medium from 'medium-editor'
    export default{
        mounted(){
            console.log(medium)
            var editor = new medium('.publish-editor');
        }
    }
</script>
<style>
    @import url('../../node_modules/medium-editor/dist/css/medium-editor.css');
    @import url('../../node_modules/medium-editor/dist/css/themes/default.css');
    .publish,.publish-editor{
        height: 100%;
        width: 100%;
    }
</style>