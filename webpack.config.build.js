const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'js/dc' : './src/js/dc/dc',
        'js/fc' : './src/js/fc/fc'
    },

    output: {
        path: path.join(__dirname, '/public'),
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },

            {
                test : /\.handlebars$/,
                loader : 'handlebars-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        }),

        new webpack.optimize.OccurenceOrderPlugin()
    ]
};