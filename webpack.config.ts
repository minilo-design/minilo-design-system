import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mdx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [
                // Only apply react-refresh in development mode
                ...(process.env.NODE_ENV === 'development' ? ['react-refresh/babel'] : []),
              ],
            },
          },
          '@mdx-js/loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // SVG ReactComponent loader (React use case)
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      // SVG file loader fallback for static assets (when not imported in JSX/TSX)
      {
        test: /\.svg$/,
        type: 'asset/resource',
        issuer: {
          not: [/\.[jt]sx?$/], // Only apply to SVGs not imported in JSX/TSX files
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // Only add ReactRefreshWebpackPlugin in development mode
    ...(process.env.NODE_ENV === 'development' ? [new ReactRefreshWebpackPlugin()] : []),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
  // Ensure that mode is correctly typed
  mode: (process.env.NODE_ENV as 'development' | 'production' | 'none') || 'development',
};

export default config;
