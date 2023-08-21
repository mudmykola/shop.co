module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
  },
  productionSourceMap: false,
  transpileDependencies: true,
  devServer: {
    port: 8080,
    open: true,
  },
};
