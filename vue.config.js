module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/need-for-driveMAG/' : '/',
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/styles/index.scss";'
            }
        }
    },
    devServer: process.env.NODE_ENV === 'production' ?  {} : proxy()
}


function proxy() {
    return {
        proxy: {
            "/api": {
                "target": "https://api-factory.simbirsoft1.com/api",
                "secure": false,
                "logLevel": "debug",
                "pathRewrite": {
                    "^/api": ""
                }
            },
        }
    }
}
