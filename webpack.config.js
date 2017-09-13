/**
 * Created by Muyi on 17/9/12.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var plugin=require('extract-text-webpack-plugin');
//require('./npm-scripts/before-build.script');

module.exports = {
    //entry: require('./webpack-config/entry.config.js'),
    //output:require('./webpack-config/output.config.js'),


    entry:{
        index:'./app/pages/index/index'
    },
    output:{
        path: path.resolve(__dirname,'build'),
        publicPath: '/',
        filename: '[name]/[name].[chunkhash].js',
        //chunkFilename: '[id].[chunkhash].build.js'
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader:'babel-loader',
                query:{
                    presets:['latest']

                },
                include:path.resolve(__dirname ,'app/'),

            },
            {
                test:/\.css$/,
                loader:plugin.extract({fallback:'style-loader',use:'css-loader'}),
            },
            {
                test:/\.less$/,
                loader:plugin.extract([ 'css-loader', 'less-loader' ]),
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname ,'build/index.html'),
            template: path.resolve(__dirname, 'index.html'),
            inject:'head',
            title:'hello'
        }),
        new plugin('1.css')
    ],
};