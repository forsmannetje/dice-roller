var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'diceroller.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: 'style!css'
        },{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        },{
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'true',
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        inline: true,
        port: 3030
    }
};