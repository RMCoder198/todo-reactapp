const path= require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const extractPlugin = new ExtractTextPlugin({
  filename: './App.css'
});

var   config={
  entry:'./index.js',
  output:{
    filename:'./bundle.js',
  },
devServer:{
  compress: true,
    port: 3000,
    stats: 'errors-only',
    open: true
},
module:{
  rules:[
    {
      test:/\.js?$/,
      exclude:/node_modules/,
      use:{
      loader:"babel-loader",
      query:{
        presets:['es2015','react']
      }}
    },
    {
         test: /\.css?$/,
         use: extractPlugin.extract({
           use: [
             {
               loader: 'css-loader',
               options: {
                 sourceMap: true
               }
             }
           ],
           fallback: 'style-loader'
         })
       }
]
    },
    plugins: [
    extractPlugin
  ]

}

module.exports=config;
