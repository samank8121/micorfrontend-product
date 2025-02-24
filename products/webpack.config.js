const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    static: [
      {
        directory: path.resolve(__dirname, 'dist'),
      },
      {
        directory: path.resolve(__dirname, 'public'),
        publicPath: '/',
      },
    ],
    compress: true,
    open: true,
    port: 3002,
    historyApiFallback: true,
    hot: true,
  },

  plugins: [
    new DefinePlugin({
      'process.env.REACT_APP_IMAGE_ADDRESS': JSON.stringify('http://localhost:3002/images/'),
    }),
    new ModuleFederationPlugin({
      name: 'Products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductCard': './src/components/product-card/product-card.tsx',
        './ProductList': './src/components/product-list/product-list.tsx',
      },
      remotes: {
        ComponentsEntry: 'Components@http://localhost:3001/remoteEntry.js',
        StoreEntry: 'Stores@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        'react-redux': {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        '@reduxjs/toolkit': {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
