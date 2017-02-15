<template>
    <div class="videobg-container">
        <video loop autoplay id="Video" :src="'static/Video/Animal/'+todayVideoSrc+'.mp4'" poster="" @canplay="" autobuffer="true"></video>
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
                var date = new Date()
                var videoId = date.getDate()<=18?date.getDate():(date.getDate()-17)
                var result=""
                if(videoId<10){
                    result = "0"+videoId.toString()
                }
                else{
                    result = videoId.toString()
                }
                return result;
            }
        }
    }

</script>