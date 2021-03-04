const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');

const commonConfig = require('./webpack.config');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [],
    // development server options
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        stats: 'errors-only',
    },
};

module.exports = merge(commonConfig, devConfig);
