const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  ignoreWarnings: [
    {
      module: /node_modules\/sass-loader/,
    },
    /Deprecation/,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    port: 3001,
    historyApiFallback: true,
    hot: true, 
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },   
  },  
  plugins: [
    new ModuleFederationPlugin({
      name: 'Components',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/button/button.tsx',
        './Input': './src/components/input/input.tsx',
        './IncreaseDecrease': './src/components/increase-decrease/increase-decrease.tsx',
      },
      shared: {
        react: { 
          singleton: true, 
          requiredVersion: false,
          eager: true
        },
        'react-dom': { 
          singleton: true, 
          requiredVersion: false,
          eager: true
        }
      },
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
