var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    tweetEntry: ['./client/tweetcomps/twitterApp'],
   blogEntry: ['./client/blogcomps/blogApp']
},
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     }),
     new webpack.optimize.UglifyJsPlugin({
       compressor: {
         warnings: false
       }
     })
   ],
   module: {
     loaders: [
       {
         test: /\.js$/,
         loader: 'babel-loader',
         include: path.join(__dirname, 'client'),
         query: {
           plugins: ['transform-runtime'],
           presets: ['es2015', 'stage-0', 'react']
         }
       },
       {
         test: /\.scss$/,
         loaders: ["style", "css", "sass"]
       }
     ]
   }
};
