const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.js$/, use: [{ loader: 'babel-loader' }] }],
  },
}
