const path = require('path');

module.exports = {
    devServer: {
        inline: false,  // hot모드 시 legacy IE에서 에러
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

    devtool: 'eval'
};