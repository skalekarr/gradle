const { resolve } = require('path');
const webpack = require('webpack');

// PRODUCTION SPECIFIC CONFIGURATION
module.exports = {
  stats: 'errors-only',
  output: {
    filename: '[name].[chunkhash].bundle.js',
    publicPath: '/zuul-proxy/assets/',
    path: resolve(__dirname, '../../client-proxy/src/main/webapp/assets'),
  },

  entry: {
    app: [
      'babel-polyfill',
      './src/js/root.jsx',
    ],
    vendor: [
      'babel-polyfill',
      './src/js/vendor.js',
    ],
  },

  plugins: [
    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['exports', 'require'],
      },
    }),
  ],
};
