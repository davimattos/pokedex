const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    module: {
        rules: [{
            test: /.js[x]?$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['es2015','react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}