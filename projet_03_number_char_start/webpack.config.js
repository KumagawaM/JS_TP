const path = require('path');

module.exports = {
    // watch: true, // inutile avec le server webpack
    // précise que l'on est en mode développement
    mode : "development",
    entry: './src/app.js', // Point d'entrée
    // Sortie
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    // Configuration de webpack-dev-server minimale
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port : 8080,
        open: true,
        hot : true // reload automatique
    }
}
