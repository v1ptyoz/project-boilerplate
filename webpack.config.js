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
            {test: /\.sass$/,
            use: [
                miniCSS.loader,
                'css-loader',
                'sass-loader'
            ]},
            {test: /\.css$/,
                use: [
                    miniCSS.loader,
                    'css-loader',
                ]}
        ]
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