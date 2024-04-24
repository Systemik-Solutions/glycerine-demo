<script setup>
import { ref } from "vue";
import Menu from 'primevue/menu';

const items = ref([
    {
        label: 'Introduction',
        route: { name: 'introduction' },
    },
    {
        label: 'Examples',
        items: [
            {
                label: 'Basic Example',
                route: { name: 'basic-example' },
            },
            {
                label: 'Using Embeds',
                route: { name: 'using-embeds' },
            },
        ],
    },
]);
</script>

<template>
    <Menu :model="items">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                    {{ item.label }}
                </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                {{ item.label }}
            </a>
        </template>
    </Menu>
</template>

<style scoped>

</style>