const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin([
            './public/html/*',
            './public/css/*',
            './public/js/*'
        ]),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
        })
    ],

    devtool: 'sourceMap'
};