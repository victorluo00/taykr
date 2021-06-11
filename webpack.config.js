const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./frontend/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    publicPath: "/build/",
    proxy: {
      "/note/": "http://localhost:3000/",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/transform-async-to-generator",
              "@babel/plugin-transform-modules-commonjs",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
