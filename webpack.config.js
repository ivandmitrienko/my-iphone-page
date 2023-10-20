const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EmbedI18nWebpackPlugin = require("embed-i18n-webpack-plugin");
const path = require("path");

import { json } from "./src/utility/localTranslations/languages";

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: path.join("fonts", "[name].[contenthash][ext]"),
        },
      },
    ],
  },
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new EmbedI18nWebpackPlugin(json[(
      window.navigator.userLanguage || window.navigator.language
    ).substr(0, 2)], {
      funcName: "__t",
      fallbackLangDefinition: json[en],
      allLangDefinitions: json,
    }),
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ["svgo", { name: "preset-default" }],
            ],
          },
        },
      }),
    ],
  },
};
