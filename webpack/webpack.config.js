const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConstants = require('./constants');

module.exports = {
    mode: 'development',
    entry: `${__dirname}/../assets/js/index.js`,
    output: {
        path: webpackConstants.jsOutputPath,
        filename: webpackConstants.jsOutputFilename,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../public_html/assets/main.css',
        }),
    ],
};