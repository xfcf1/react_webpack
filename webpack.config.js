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
                    plugins: ['antd']
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
        new ExtractTextPlugin('style.[hash].css'),
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
        historyApiFallback: true
    }
}

//修改发布环境配置
if(process.env.NODE_ENV === 'production'){
    config.output.filename = '[name].[hash].js';
    config.plugins.splice(0, 1 , new ExtractTextPlugin('style.[hash].css'));
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].js'),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            compress: {
                warnings: false
            }
        })
    )
}

module.exports = config;
