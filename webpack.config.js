const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production'
const mode = isProduction ? 'production' : 'development'

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },
  devtool: isProduction ? 'source-map' :'inline-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
}
