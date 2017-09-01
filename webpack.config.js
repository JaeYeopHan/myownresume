const merge = require("webpack-merge");

const webpackCommonConfig = require("./webpack.common.config");
const webpackDevConfig = require("./webpack.dev.config");
const webpackProdConfig = require("./webpack.prod.config");

module.exports = function(env) {
    const isDevMode = env && env.dev;

    return merge(
        webpackCommonConfig,
        isDevMode ? webpackDevConfig : webpackProdConfig
    );
};
