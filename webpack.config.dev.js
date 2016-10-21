const path = require('path');

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

    devServer: {
        inline: true,
        port: 7777,
        contentBase: path.join(__dirname, '/public/'),
        stats : {
            assets : false,
            colors : true,
            version : false,
            hash : false,
            timings : false,
            chunks : false,
            chunkModules : false
        }
    },

    devtool: 'inline-source-map'
};