/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  /** See {@link https://github.com/neutrinojs/webpack-chain/tree/v4#getting-started} */
  chainWebpack(config) {
    config.resolve.extensions.delete('.vue');
  },
  css: {
    sourceMap: true,
  },
};
