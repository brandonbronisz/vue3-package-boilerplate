const DupleicatePackageCheckerWebpackPlugin = require('duplicate-package-checker-webpack-plugin');
const aliases = require('./aliases.config');

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  /** See {@link https://github.com/neutrinojs/webpack-chain/tree/v4#getting-started} */
  chainWebpack(config) {
    // Don't allow importing .vue files without the extension.
    config.resolve.extensions.delete('.vue');

    // set Alisases
    config.resolve.alias.clear().merge(aliases.webpack);
  },
  configureWebpack: {
    plugins: [DupleicatePackageCheckerWebpackPlugin],
  },
  css: {
    sourceMap: true,
  },
};
