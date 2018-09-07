// =============
// Dependencies.
// =============

const HtmlWebPackPlugin =
  require('html-webpack-plugin')

const MiniCssExtractPlugin =
  require('mini-css-extract-plugin')

const path = require('path')

// ========
// Plugins.
// ========

const plugins = [
  new HtmlWebPackPlugin({
    template: './source/demo.html',
    filename: './index.html'
  }),
  new MiniCssExtractPlugin({
    filename: 'bundle.[hash].css'
  })
]

// ====================
// Config: Development.
// ====================

const configDevelopment = {
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  // Use source maps for dev.
  devtool: 'source-map',

  // Use demo as source.
  entry: './source/index.demo.js',

  /*
    Flush cache here, by using
    the hash in the file name.
  */
  output: {
    filename: 'bundle.[hash].js'
  }
}

// ===================
// Config: Production.
// ===================

const configProduction = {
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  // Use component as source.
  entry: './source/index.js',

  /*
    We do not use a hash in the file
    name here, because it needs to be
    consistent for NPM distribution.
  */
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  }
}

// =======
// Export.
// =======

module.exports = (env, args = {}) => {
  // Expose object.
  return (
    args.mode === 'production'
      ? configProduction
      : configDevelopment
  )
}
