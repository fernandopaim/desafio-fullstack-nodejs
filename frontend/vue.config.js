const Webpack = require('webpack')

module.exports = {

    transpileDependencies: [
        "vuetify"
    ],

    publicPath: '/',

    chainWebpack: config => {
        config.resolve.alias
            .set("@", require('path').resolve(__dirname, "src"))
            .set("@components", require('path').resolve(__dirname, "src/components"))

            .set("@assets", require('path').resolve(__dirname, "src/assets"))

        config.resolve.alias.set(
            'vue$',
            require('path').resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        )

        config.module
            .rule("eslint")
            .use("eslint-loader")
            .options({
                fix: true
            })
    },

    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new Webpack.optimize.MinChunkSizePlugin({
                minChunkSize: 50000 // Minimum number of characters
            }),
        ],
    },
}