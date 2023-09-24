import { ClientOnly } from '../.nuxt/components';
<script setup>
onMounted(()=>{
    console.log("hi")
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        //
        console.log("ready")
        const element = document.getElementById('embed-iframe');
        const options = {
            uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
        };
        const callback = (EmbedController) => {};
        IFrameAPI.createController(element, options, callback);
    };
})
</script>

<template>
    <ClientOnly>
        <div>aaa</div>
    </ClientOnly>

</template>