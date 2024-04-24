import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'introduction',
                    component: () => import('../views/Introduction.vue')
                },
                {
                    path: 'basic-example',
                    name: 'basic-example',
                    component: () => import('../views/demo/BasicExample.vue')
                },
                {
                    path: 'using-embeds',
                    name: 'using-embeds',
                    component: () => import('../views/demo/UsingEmbeds.vue')
                },
            ],
        },
        {
            path: '/viewer',
            name: 'viewer',
            component: () => import('../views/demo/FullscreenViewer.vue')
        },
    ]
})

export default router
