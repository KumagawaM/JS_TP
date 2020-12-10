const path = require('path');

module.exports =  {
    mode: "development",
    entry: './src/app.js', // Point d'entrée
    // Sortie (fichier de build)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    // Configuration de webpack-dev-server minimale
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port : 9000,
        open: true,
        hot : true // reload automatique
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //Creates `style`nodes from JS strings
                    "style-loader",
                    //Translates CSS into CommonJS
                    "css-loader",
                    //Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};
