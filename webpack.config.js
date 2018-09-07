// =============
// Dependencies.
// =============

const HtmlWebPackPlugin =
  require('html-webpack-plugin')

const path = require('path')

// ========
// Loaders.
// ========

const rules = [
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

// ========
// Plugins.
// ========

const plugins = [
  new HtmlWebPackPlugin({
    template: './source/demo.html',
    filename: './index.html'
  })
]

// ====================
// Config: Development.
// ====================

const configDevelopment = {
  plugins,
  module: {
    rules
  },
  entry: './source/demo.js',
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
    rules
  },
  entry: './source/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  }
}

// =======
// Export.
// =======

module.exports = (env, args) => {
  // Default to dev.
  let config = configDevelopment

  // Production?
  if (args.mode === 'production') {
    config = configProduction
  }

  // Expose object.
  return config
}
