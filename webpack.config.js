const config = {
    entry: //['./src/index.js']
    {
        bundle: './src/index.js',
        worker: './src/worker.js'
    },
    output: {
      path: __dirname + '/build',
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          loader:'babel-loader',
          test: /\.js$/,
          exclude:  /node_modules/,
          query: {
             presets: ['es2015'] 
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    devServer:{
      port: 3000,
      contentBase: __dirname + '/build',
      inline: true
    }
}
module.exports = config;