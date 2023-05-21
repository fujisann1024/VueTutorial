module.exports = {
  css: {
    loaderOptions: {
      scss: {
        //prependDataは古いバージョンのsass loaderで使用されており、現在はadditionalDataが使われている
        additionalData: '@import "./src/assets/styles/main.scss";'
      }
    }
  }
}