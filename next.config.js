require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev }) => {
    // Setup SASS
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: '/_next/static/fonts/',
              outputPath: 'static/fonts/',
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      },
    );

    // Setup environment variables
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
  exportPathMap: function() {
    // Setup static export mapping
    return {
      '/': { page: '/index' },
    };
  },
};
