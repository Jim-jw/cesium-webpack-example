const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config');

const prodConfig = {
    mode: 'production',
    // devtool: 'eval',
    plugins: [],
    stats: 'errors-only'
};

module.exports = merge(commonConfig, prodConfig);