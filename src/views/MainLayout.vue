<script setup>

import {RouterView} from "vue-router";
import Navigation from "@/views/Navigation.vue";
import Button from "primevue/button";
</script>

<template>
    <main class="w-full grid">
        <header class="col-12" style="box-shadow: 5px 5px 8px -4px rgba(0,0,0,0.1);">
            <div class="grid">
                <div class="col-12 md:col-6">
                    <div class="px-4 w-full text-center md:text-left">
                        <router-link to="/">
                            <img src="/images/logo.png" alt="Glycerine Logo" class="w-3" style="min-width: 300px" />
                        </router-link>
                    </div>
                </div>
                <div class="col-12 md:col-6">
                    <div class="px-4 py-4 w-full text-center md:text-right">
                        <a title="View source in GitHub" target="_blank" class="text-color-secondary mr-4" href="https://github.com/Systemik-Solutions/glycerine-demo">
                            <i class="pi pi-github" style="font-size: 2.5rem"></i>
                        </a>
                        <a title="Visit Glycerine website" target="_blank" class="text-color-secondary" href="https://glycerine.io/">
                            <i class="pi pi-globe" style="font-size: 2.5rem"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div class="col-12 md:col-4 lg:col-3">
            <div class="p-4 flex flex-column">

                <div class="w-full">
                    <Navigation />
                </div>
            </div>
        </div>
        <div class="col-12 md:col-8 lg:col-9">
            <div class="p-4">
                <RouterView />
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>