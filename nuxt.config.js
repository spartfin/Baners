module.exports = {
    ssr: true,
    head: {
        title: 'Banners',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'description', name: 'description', content: '{{escape description }}' }
        ],
        link: [
            { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" },
        ]
    },
    loading: { color: '#3B8070' },
    modules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
            '~/assets/scss/_mixins.scss'
        ]
    },
    css: ['~/assets/scss/main.scss'],
    components: {
        dirs: [
            '~/components/ui',
            '~/components',
        ]
    },
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}

