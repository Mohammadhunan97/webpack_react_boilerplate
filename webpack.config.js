const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates index.html file for us in the compiled folder, this will be created when we create the compiled folder after running webpack

module.exports = {
    entry: __dirname + '/source/index.js',
    output: {
        path: path.join(__dirname,'/compiled'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html'
        })
    ]
}