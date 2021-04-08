module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-need-for-drive/' : '/',
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/styles/index.scss";'
            }
        }
    }
}
