const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "cheap-module-source-map",
	devServer: {
		contentBase: path.join(process.cwd(), "dist"),
		host: "0.0.0.0",
		port: 8080,
		inline: true
	},
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/assets/index.html"
        }),
        new ExtractTextPlugin("style.css"),
    ]
};
