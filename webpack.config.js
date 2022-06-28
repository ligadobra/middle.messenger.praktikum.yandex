const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    contentBase: "dist",
    compress: true,
    port: 3000,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          helperDirs: [path.resolve(__dirname, "src/services/helpers")],
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
          },
          {
            loader: "svgo-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          context: path.resolve(__dirname, "public"),
          to: "./assets",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
