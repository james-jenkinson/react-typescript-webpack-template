const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/** @typedef {import('webpack').Configuration} WebpackConfiguration */

const output = 'dist'

/** @type {WebpackConfiguration} */
const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, output),
    filename: 'app.[chunkhash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}

module.exports = config
