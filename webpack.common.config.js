const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		"js/bundle": "./src/index.ts",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(process.cwd(), "dist"),
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				enforce: "pre",
				loader: "tslint-loader",
			},
			{
				test: /\.(tsx|ts)$/,
				loader: "ts-loader",
			},
			// {
			// 	test: /(\.js)$/,
			// 	loader: "eslint-loader",
			// 	include: path.resolve(process.cwd(), "src"),
			// 	exclude: /(node_modules)/,
			// 	enforce: "pre",
			// },
			{
				test: /(\.js)$/,
				exclude: /(node_modules)|(test)/,
				loader: "babel-loader",
			},
			{
				test: /\.hbs$/,
				use: {
					loader: "handlebars-loader",
				},
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					"url-loader?limit=10000",
					"img-loader",
				],
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: "css-loader",
					}, {
						loader: "sass-loader",
					}],
				}),
			},
		],
	},
};
