export default defineNuxtConfig({
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
    compatibilityDate: '2024-04-03',
    devtools: {
        enabled: true
    },
    css: [
        '~/assets/scss/_bootstrap.scss',
        '~/assets/scss/_index.scss',
    ],
    modules: [
        '@pinia/nuxt',
        '@bootstrap-vue-next/nuxt'
    ],
})
