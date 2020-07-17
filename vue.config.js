const scssPrependData = `
@import "@/assets/style/_vars.scss";
`

module.exports = {
  publicPath: '.',
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: scssPrependData
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vue Dashboard'
      return args
    })
  }
}
