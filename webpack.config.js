const { join, resolve } = require('path');
const pluginHtml = require('html-webpack-plugin');

const config = {
  mode: 'development',
  target: 'web',
  entry: {
    main: join(__dirname, 'src/index.tsx')
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist/public')
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx|\.ts|\.tsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[locale]"
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      ".js", ".jsx", ".ts", ".tsx", ".json", ".node"
    ],
    modules: [
      join(__dirname, 'src'), 'node_modules'
    ],
  },
  plugins: [
    new pluginHtml({
      template: 'src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: join(__dirname, 'dist/public'),
    }
  }
}

module.exports = config;
