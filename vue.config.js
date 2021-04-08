module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-need-for-driveMAG/' : '/',
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/styles/index.scss";'
            }
        }
    }
}
