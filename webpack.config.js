module.exports = {
  entry: __dirname + '/src',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devtool:'source-maps',
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          // presets are colection of plugins
          presets: ["es2015", "react"],
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
};
