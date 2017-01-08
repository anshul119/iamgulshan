var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		APP_DIR
	],
	output: {
		path: BUILD_DIR,
		filename: path.join('/js', 'bundle.js'),
		publicPath: '/',
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	resolve: {
		modulesDirectories : ['node_modules', APP_DIR],
		extensions: ['', '.js', '.scss']
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				exclude: /node_modules/,
				loaders : ['react-hot', 'babel']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin(path.join('/style' , '/main.css'), {
			allChunks: true
		})
	]
};

module.exports = config;