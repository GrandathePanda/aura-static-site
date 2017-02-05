var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
	test : /\.jsx?/,
	exclude: /node_modules/,
	include : APP_DIR,
	loader : 'babel',
	query:
	{
	  presets:['react', 'es2015']
	}
      },
      {
	test: /\.scss$/,
	loaders: ['style', 'css', 'sass']
      },
      {
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract("style",'css!sass!sass-resources')
      },
      {
	test: /\.(jpe?g|png|gif|svg)$/i,
	loaders: [
	  'file?hash=sha512&digest=hex&name=[hash].[ext]',
	  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
	]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  ]
};

module.exports = config;
