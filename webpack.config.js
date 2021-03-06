var webpack = require('webpack'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    htmlWebpack = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin")

var common = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'redux-thunk',
]
var config = {
    context: srcPath,
    entry: {
        module: './module',
        common: common
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: [['antd', {style: 'css'}]]
                }
            },
            {
                test:/\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new htmlWebpack({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: srcPath,
        proxy: {
            '/web/*': {
                target: 'http://xxx',
                host: 'xxx'
            }
        },
        host:'0.0.0.0',
        historyApiFallback: true
    }
}

//修改发布环境配置
if(process.env.NODE_ENV === 'production'){
    config.output.filename = '[name].[chunkhash:6].js';
    config.plugins.splice(0, 1 , new ExtractTextPlugin('style.[chunkhash:6].css'));
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.CommonsChunkPlugin({names: ['common']}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
}

module.exports = config;
