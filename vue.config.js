module.exports = {
    // publicPath: '',
    publicPath: process.env.NODE_ENV === 'production' ? '/need-for-driveMAG/' : '/',
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/styles/index.scss";'
            }
        }
    }
}
