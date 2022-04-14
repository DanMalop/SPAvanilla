// Archivo de configuracion de webpack
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist', // ruta en la que se compila 
        filename: 'bundle.js' // nombre del archivo compilado
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], 
            },
            {
                test: /\.s[ac]ss$/i, // las extenciones que debe leer
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            //HTML
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
};