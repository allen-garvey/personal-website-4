const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: `${__dirname}/../assets/js/index.js`,
    output: {
        path: path.join(__dirname, '..', '_build'),
        filename: 'app.js',
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