const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
    port: 3003,
    historyApiFallback: true,
    hot: true, 
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },   
  },  
  plugins: [
    new ModuleFederationPlugin({
      name: 'Stores',
      filename: 'remoteEntry.js',
      exposes: {
        "./Store": "./src/redux/expose-store.ts"
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
        },
        'react-redux': {
          singleton: true,
          requiredVersion: false,
          eager: true
        },
        '@reduxjs/toolkit': {
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
