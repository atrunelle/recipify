const cookie = 'PLAY_SESSION=8ab8348690744852b11fb9f017d0785ac2310128-username=smartmatchtest';

module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.edamam.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
};
