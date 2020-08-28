module.exports = {
  devServe: {
    proxy: {
      '/api':{
        target: "http://web/juhe.cn:8080",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite:{
          '^api': ''
        }
      }
    }
  }
}