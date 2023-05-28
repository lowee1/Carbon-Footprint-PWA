const path = require('path');
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/',
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new WebpackPwaManifest({
            name: "Carbon Footprint PWA",
            short_name: "Carbon Footprint PWA",
            description: "A PWA to calculate your carbon footprint",
            background_color: "#ffffff",
            crossorigin: "use-credentials", //can be null, use-credentials or anonymous
            icons: [
                {
                    src: path.resolve("src/assets/icon.png"),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                },
                {
                    src: path.resolve("src/assets/large-icon.png"),
                    size: "1024x1024" // you can also use the specifications pattern
                },
                {
                    src: path.resolve("src/assets/maskable-icon.png"),
                    size: "1024x1024",
                    purpose: "maskable"
                }
            ]
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
};
