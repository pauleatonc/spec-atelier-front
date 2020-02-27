const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = env => {
	return {
		entry: {
			main: ['babel-polyfill', path.resolve(__dirname, 'src', 'main.js')],
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js',
		},
		devServer: {
			contentBase: './',
			port: 8080,
			compress: true,
			inline: true,
			historyApiFallback: true,
		},
		resolve: {
			extensions: ['.jsx', '.js'],
			alias: {
				'@Actions': path.resolve(__dirname, 'src', 'actions'),
				'@Assets': path.resolve(__dirname, 'src', 'assets'),
				'@Components': path.resolve(__dirname, 'src', 'components'),
				'@Configurations': path.resolve(__dirname, 'src', 'config'),
				'@Helpers': path.resolve(__dirname, 'src', 'helpers'),
				'@Reducers': path.resolve(__dirname, 'src', 'reducers'),
				'@Views': path.resolve(__dirname, 'src', 'views'),
			},
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.scss$/,
					loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(png|jpg|gif|ttf|eot|woff|woff2)$/i,
					use: {
						loader: 'file-loader',
					},
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
						},
					],
				},
			],
		},
		externals: ['window'],
		plugins: [
			new webpack.ProgressPlugin(),
			new Dotenv({
				path: './src/config/.env',
				safe: true,
				defaults: false,
				systemvars: true,
			}),
			new HtmlWebPackPlugin({
				template: './src/index.html',
				hash: true,
			}),
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
			new webpack.DefinePlugin({
				ENVIRONMENT: JSON.stringify(env.NODE_ENV),
			}),
		],
	};
};
