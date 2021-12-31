const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/javascript.js",
    output: {
        filename: "base.js"
    },
    devtool: "source-map",
    plugins: [new MiniCssExtractPlugin({
        filename: "base.css"
    })],
    module: {
        rules: [
            {
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, "css-loader"],
                test: /\.css$/i,
            }
        ]
    }
}