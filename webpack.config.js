const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry : './src/index.tsx',
    resolve : {
        extensions : ['.ts','.tsx','.js']
    },
    output : {
        path : path.join(__dirname , '/build'),
        chunkFilename : 'static/js/[name].js',
        filename : 'static/js/[hash].js'
    },
    optimization:{
        splitChunks: {
           chunks : 'all'
        }
    },
    devServer : {
        host : 'localhost',
        port : 3000,
        hot : true
    },
    module : {
        rules : [
            {
                test : /\.(ts|tsx)?$/,
                loader : 'ts-loader'
            },
            {
                test : /\.(sa|sc|c)ss$/,
                use : [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test : /\.(ico|png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader : 'url-loader',
                options: {
                    name :'static/image/[hash].[ext]',
                    limit : 10000,
                }
            },
            
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename : 'static/css/[name].[hash:8].css',
            chunkFilename : "static/css/[id].[hash:8].css"
        }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
    ]
}