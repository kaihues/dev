const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assignment5.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};