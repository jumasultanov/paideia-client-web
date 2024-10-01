export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {
        enabled: true
    },
    runtimeConfig: {
        public: {
            appName: process.env.APP_NAME,
            appUrl: process.env.APP_URL,
            apiUrl: process.env.API_URL
        }
    },
    app: {
        head: {
            titleTemplate: 'Paideia - %s',
            htmlAttrs: {
                lang: 'ru'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    css: [
        '~/assets/scss/_bootstrap.scss',
        '~/assets/scss/_index.scss',
        '~/node_modules/vue-toast-notification/dist/theme-bootstrap.css'
    ],
    modules: [
        '@pinia/nuxt',
        '@bootstrap-vue-next/nuxt'
    ],
})
