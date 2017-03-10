<template>
    <div class="videobg-container">
        <video loop autoplay id="Video" :src="todayVideoSrc" poster="" @canplay="" autobuffer="true"></video>
    </div>
</template>
<style>
    .videobg-container{
        position: fixed;
        left: 0;
        top: 0;
        z-index: -2;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    #Video{
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        min-width: 100%; 
        min-height: 100%; 
        width: auto; 
        height: auto;
        overflow: hidden;
    }
</style>
<script>
    export default {
        computed:{
            todayVideoSrc(){
                return "http://olg2tqiyk.bkt.clouddn.com//blog/video/ArcticSunriseNorway_GettyRF_166536800_1080_HD_ZH-CN.mp4";
            }
        }
    }

</script>