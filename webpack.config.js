const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
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