export default {
    ssr: true,
    head: {
        title: 'Banners',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'description', name: 'description', content: '{{ escape description }}' }
        ],
        link: [
            { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" },
        ]
    },
    loading: { color: '#3B8070' },
    buildModules: process.env.NODE_ENV === 'production' ? [
        '@nuxt/components'
    ] : [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxt/components'
    ],
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
    router: {
        prefetchLinks: false,
    },
    build: {
        postcss: {
            'postcss-cssnext': {
                browsers: ['last 2 versions', 'ie >= 10'] // Перепроверить
            }
        },
        extractCSS: process.env.NODE_ENV !== 'development',
        optimization: {
            runtimeChunk: 'single', // Splitting out areas of the application code // The value 'single' instead creates a runtime file to be shared for all generated chunks.
            splitChunks: {
                chunks: 'all',
                // Splitting out each npm package & Splitting out areas of the application code
                // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            }
        },
        filenames: {
            app: ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js', // [chunkhash].js
            chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js', // [chunkhash].js
            css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash].css', // [contenthash].css
            // img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]', // img/[hash:7].[ext]
            // font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]', // fonts/[hash:7].[ext]
            // video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]' // videos/[hash:7].[ext]
        },
    },
}

