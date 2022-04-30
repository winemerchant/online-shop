module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/styles/variables.scss";`
            },
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/online-shop/'
    : '/'
};