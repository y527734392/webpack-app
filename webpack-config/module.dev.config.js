/**
 * Created by muyi on 2017/9/13.
 */
var dirVars = require('./base/dir-vars.config.js');
const moduleConfig = require('./inherit/module.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

moduleConfig.rules.push({
    test: /\.css$/,
    exclude: /node_modules|bootstrap/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
    ],
});

moduleConfig.rules.push({
    test: /\.less$/,
    include: dirVars.srcRootDir,
    use: ExtractTextPlugin.extract([
        {
            loader: 'css-loader',
            options: {
                minimize: true,
            },
        },
        {
            loader: 'less-loader',
        },
    ]),
});

module.exports = moduleConfig;
