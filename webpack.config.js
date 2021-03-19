const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const template = path.resolve(__dirname, 'src', 'index.html')

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template })
  ]
}
