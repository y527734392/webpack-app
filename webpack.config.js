/**
 * Created by Muyi on 17/9/12.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var plugin=require('extract-text-webpack-plugin');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
require('./npm-scripts/before-build.script');

module.exports = {
    entry: require('./webpack-config/entry.config.js'),
    output:require('./webpack-config/output.config.js'),

    module: {
        rules: [
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
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                    { loader: 'postcss-loader' },
                ]
            },
            {
                test:/\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',

                    },
                    {
                        loader: 'less-loader',
                    },
                ],
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
        new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } })
    ],
};