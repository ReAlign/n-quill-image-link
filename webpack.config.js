const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: './src/n-quill-image-link.js',
    output: {
        filename: 'n-quill-image-link.js',
        path: path.resolve(__dirname, 'dist'),
        library: "nQuillImageLink",
        libraryTarget: "umd"
    },
    externals: {
        quill: 'Quill',
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true || {/* CSSNano Options */}
                        }
                    }, {
                        loader: 'sass-loader',
                    }]
                }),
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src/")
                ],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}],]
                    }
                }
            },
            {
                test: /\.png$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('n-quill-image-link.css'),
        new UglifyJSPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                join_vars: true,
                if_return: true
            },
            output: {
                comments: false
            }
        })
    ]
};

module.exports = config;