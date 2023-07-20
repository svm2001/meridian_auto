const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const PugPlugin = require("pug-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env) => ({
  entry: {
    index: path.join(__dirname, "src", "views", "index.pug"),
    page_404: path.join(__dirname, "src", "views", "page_404.pug"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: path.join("assets", "scripts", "[name].js"),
    assetModuleFilename: path.join("assets", "images", "[name][ext]"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: "render",
          data: {
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ["css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp4)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.join("assets", "icons", "[name][ext]"),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: path.join("assets", "fonts", "[name].[ext]"),
        },
      },
    ],
  },
  plugins: [
    new PugPlugin({
      extractCss: {
        // output filename of CSS files
        filename: path.join("assets", "css", "[name].css"),
      },
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
        onEnd: {
          copy: [
            {
              source: path.join("src", "static"),
              destination: `dist`,
            },
          ],
        },
      },
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    devMiddleware: {
      publicPath: "",
    },
    port: 2001,
  },
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
});
