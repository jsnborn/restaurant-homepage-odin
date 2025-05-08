const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Change to 'production' for optimized builds

  entry: "./src/index.js", // Entry point of your application

  output: {
    filename: "main.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean 'dist' folder before each build
  },

  devServer: {
    static: "./dist", // Serve static files from 'dist'
    open: true,       // Automatically open the browser
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // HTML template used to inject the bundle
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,             // Match all .css files
        use: ["style-loader", "css-loader"], // Inject CSS into the DOM
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: "asset/resource",          // Webpack 5 asset handling
      },
    ],
  },
};
