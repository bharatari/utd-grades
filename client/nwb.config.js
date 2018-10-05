const path = require('path');

var isDev = process.env.NODE_ENV === 'development';
var isTest = process.env.NODE_ENV === 'test';
var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      components: path.resolve('src/components'),
      utils: path.resolve('src/utils'),
      modules: path.resolve('src/modules'),
      routes: path.resolve('src/routes'),
      constants: path.resolve('src/constants'),
      store: path.resolve('src/store')
    },
    define: {
      '__DEV__': isDev,
      '__PROD__': isProd,
      '__TEST__': isTest,
      '__BASENAME__': JSON.stringify(process.env.BASENAME || '')
    },
    rules: {
      'sass-css': {
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      }
    }
  }
}
