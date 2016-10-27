const path = require('path');

module.exports = {
    devServer: {
        inline: true,
        port: 7777,
        contentBase: path.join(__dirname, '/public'),
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    },

    devtool: 'inline-source-map'
    //devtool: 'eval'
};