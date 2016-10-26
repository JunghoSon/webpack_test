const webpack = require('webpack');
const path = require('path');
//const argv = require('yargs').argv;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const configBuild = require('./webpack.config.build.js');
const configDev = require('./webpack.config.dev.js');
const configDevIe = require('./webpack.config.dev.ie.js');

const target = process.env.npm_lifecycle_event;

const common = {
    context: path.join(__dirname, '/src'),

    entry: {
        vender: ['jquery'],
        'dc': './js/page/dc',
        'fc': './js/page/fc'
    },

    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'js/[name].js'
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
                test: /jquery/,
                exclude: /node_modules/,
                loader: 'exports?$'
            },

            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },

            {  
                test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
                loader: 'file' 
            }
        ]
    },

    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules'],
        alias: {
            'jquery': 'jquery/dist/jquery.min',
            'handlebars': 'handlebars/dist/handlebars.min'
        }
    },

    plugins: [
        new CommonsChunkPlugin({
            name: 'vender',
            filename: 'js/common.js',
            minChunks: Infinity
        }),
        //new webpack.optimize.CommonsChunkPlugin('css/common.css'),
        
        new HtmlWebpackPlugin({
            filename: 'html/dc.html',
            template: './html/dc.html',
            inject: 'body',
            chunks:['vender','dc']
        }),

        new HtmlWebpackPlugin({
            filename: 'html/fc.html',
            template: './html/fc.html',
            inject: 'body',
            chunks:['vender','fc']
        }),

        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        })
    ]
};

var config;

if(target === 'build'){
    config = webpackMerge(common, configBuild);
}else if(target === 'ie'){
    config = webpackMerge(common, configDevIe);
}else{
    config = webpackMerge(common, configDev);
}

module.exports = config;