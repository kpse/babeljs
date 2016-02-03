module.exports = {
  entry: "app.js",
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {root: __dirname + '/src'},
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
};