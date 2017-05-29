/**
 * @desc webpack config file for this project.
 * @author gaurav
 */

const path = require ('path');
// plugins
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');

var configurations = {
	/**
	 * array for multiple entry points
	 */
	entry: {
		account: './public/scripts/account.js',
		main: './public/scripts/main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname +'/public/scripts',
				loader: 'babel-loader?presets[]=es2015'
			}
		]
	},

	output: {
		filename: '[name].bundle.js',
		path: path.join (__dirname, 'dist'),
		chunkFilename: "[id].chunk.js"
	},

	plugins: [
		new HtmlWebpackPlugin ({
			template: __dirname +'/views/index.html',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin ({
			template: __dirname +'/views/account.html',
			filename: 'account.html'
		})
	]
};

module.exports = configurations;