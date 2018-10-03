const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './client/index.js'],
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                },
            },
            {
                include: [path.resolve(__dirname, 'client')],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        require('@babel/plugin-proposal-object-rest-spread'),
                        require('@babel/plugin-transform-async-to-generator'),
                    ],
                },
                test: /\.js$/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    { loader: 'file-loader' },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },

    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Словарикин',
            template: 'client/index.html',
            filename: 'index.html',
            appMountId: 'app',
        }),
    ],

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                },
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true,
        },
    },
    devtool: 'source-map',
    devServer: {
        before(app) {
            app.get('/list', (req, res) => {
                // Get params: req.query
                res.json(['jquery.data.json']);
            });
            app.get('/test', (req, res) => {
                // Get params: req.query
                res.json(req.query);
            });
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
