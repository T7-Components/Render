// Dependencies.
const path = require('path')

// Loaders.
const rules = [
  {
    test: /\.js$/,
    use: 'babel-loader'
  }
]

// Export.
module.exports = {
  mode: 'production',
  module: {
    rules
  },
  entry: './source',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  }
}
