const path = require('path');

const resolve = dir => path.resolve(__dirname,dir);

module.exports = {
  webpack:{
    alias:{
      '@':resolve('src'),
      'assets':resolve('src/assets'),
      'router':resolve('src/router'),
      'services':resolve('src/services'),
      'components':resolve('src/components'),
    }
  }
}