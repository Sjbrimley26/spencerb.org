/* jshint esversion:6 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const S3Plugin = require("webpack-s3-plugin");
const VueLoader = require("vue-loader/lib/plugin");
require("dotenv").config();

const prod = process.argv.indexOf("production") !== -1;

const plugins = [

  new HtmlWebpackPlugin({
    template: "./src/index.html",
    favicon: "./src/assets/images/favicon.ico"
  }),

  new ManifestPlugin({
    fileName: "asset-manifest.json"
  }),

  new SWPrecacheWebpackPlugin({
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'service-worker.js',
    logger(message) {
      if (message.indexOf('Total precache size is') === 0) {
        return;
      }
      console.log(message);
    },
    minify: true,
    navigateFallback: '/index.html',
    staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
  }),

  new CopyWebpackPlugin([{
    from: 'src/pwa'
  }]),

  new VueLoader()

];

if (prod) {
  plugins.push(new S3Plugin({
    include: /.*\./,
    s3Options: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    s3UploadOptions: {
      Bucket: 'www.spencerb.org'
    }
  }));
}

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "./"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory",
        query: {
          presets: ["env"]
        }
      },
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["url-loader?limit=10000", "img-loader"]
      }
    ]
  },

  plugins,

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      })
    ]
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};