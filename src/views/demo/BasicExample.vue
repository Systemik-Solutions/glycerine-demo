<script setup>
import {ref} from "vue";

// Define the manifest URL.
const manifest = ref('https://w3id.org/iaw/data/publications/image-sets/01hm598yb6hc3s7btmqth813mg/manifest');
</script>

<template>
    <h1>Basic Example</h1>
    <p>
        The following is a basic example of how to use the Glycerine Viewer component in a Vue 3 application.
    </p>
    <p>IIIF Manifest: <a :href="manifest">Schist Buddha Triad (year 5)</a></p>

    <div style="width:100%;height:600px;">
        <GlycerineViewer :manifest="manifest"></GlycerineViewer>
    </div>
</template>

<style scoped>

</style>
