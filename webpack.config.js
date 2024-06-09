import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = process.env.NODE_ENV === 'production'

const config = {
    entry: {
        employees: './src/employees.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        },
    },
    devtool: 'source-map',
    resolve: {
        fallback: {
            "zlib": "browserify-zlib",
            "querystring": "querystring-es3",
            "path": "path-browserify",
            "crypto": "crypto-browserify",
            "stream": "stream-browserify",
            "string_decoder": "string_decoder/",
            "url": "url/",
            "buffer": "buffer/",
            "util": "util/"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ],
    mode: isProduction ? 'production' : 'development',
}

export default config