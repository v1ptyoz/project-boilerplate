const context = __dirname + '/src';

const miniCSS = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: context + '/js/index.js',
    output: {
        path: __dirname + "/dist",
        filename: './js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.sass$/,
                use: [
                    miniCSS.loader,
                    'css-loader',
                    'sass-loader'
            ]},
            {   test: /\.css$/,
                    use: [
                        miniCSS.loader,
                        'css-loader',
            ]},
            {   test: /\.js/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: '/dist',
        open: 'firefox',
        compress: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new miniCSS({
            filename: './css/style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '/src/index.html'
        })
    ]
}