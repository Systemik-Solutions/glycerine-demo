<script setup>

</script>

<template>
    <div v-if="$route.query['iiif-content']" class="w-full h-screen bg-blue-50 relative">
        <GlycerineViewer class="h-full" :manifest="$route.query['iiif-content']"></GlycerineViewer>
    </div>
</template>

<style scoped>

</style>