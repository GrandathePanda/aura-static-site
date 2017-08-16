var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const configVars = JSON.stringify(require('./config')())
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 8100,
    historyApiFallback: true
  },
	resolve : {
		extensions: ['', '.js', '.jsx']
	},
	module : {
		loaders : [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: APP_DIR,
				loader: "babel-loader",
        babelrc: false,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-runtime']
        }
			},
			{
				test: /\.scss$/,
				loaders: [ 'style', 'css', 'sass' ]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
					loaders: [
						'file?hash=sha512&digest=hex&name=[hash].[ext]',
						'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
					]
			},
			{
  				test: /\.(ttf|eot|woff|woff2)$/,
  				loader: 'file-loader',
  				options: {
    				name: 'fonts/[name].[ext]',
  			},
		}
		],
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader",
				options: {
					includePaths: [path.resolve(__dirname, 'src/app/components/Header.scss')]
				}
			}]
		}]
	},
};

module.exports = config;
