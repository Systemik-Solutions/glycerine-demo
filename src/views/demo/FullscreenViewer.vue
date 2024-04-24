<script setup>

</script>

<template>
    <div v-if="$route.query.manifest" class="w-full h-screen bg-blue-50 relative">
        <GlycerineViewer class="h-full" :manifest="$route.query.manifest"></GlycerineViewer>
    </div>
</template>

<style scoped>

</style>