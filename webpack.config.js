const path = require('path');

const mode = process.env.MODE;

module.exports = {
  mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  entry: path.resolve(__dirname, 'source/js/script.js'),
  output: {
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'source/js/utils/'),
      '@components': path.resolve(__dirname, 'source/js/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
