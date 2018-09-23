const path = require('path');

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
    rules: {
      'sass-css': {
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      }
    }
  }
}
