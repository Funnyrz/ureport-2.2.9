/**
 * Created by Jacky.Gao on 2018-04-15.
 * Base on Webpack4
 */
const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        designer: './src/index.js',
        searchform: './src/form/index.js',
        preview: './src/preview.js'
    },
    output: {
        path: path.resolve('E:\\DevCode\\JavaProCode\\weijia-loan-boot\\weijia-loan-boot-module-system\\src\\main\\resources\\ureport2\\ureport-asserts\\js'),
        // path: path.resolve('../ureport2-console/src/main/resources/ureport-asserts/js'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000000
                    }
                }]
            }
        ]
    },
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "buffer": require.resolve("buffer/"),
            "stream": require.resolve("stream-browserify")
        }
    }
};