const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-core.js',
        library: '',
        libraryTarget: 'commonjs',
    },
    externals: [
        nodeExternals(),
        '@fortawesome/fontawesome-free',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome',
        'classnames',
        'moment',
        'react',
        'react-datepicker',
        'react-dom',
        'react-slidedown',
        'react-modal',
        'redux',
        'react-redux',
        'react-paginate',
        'react-select',
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'ts-loader'],
                // options: {
                //     presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                // },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
};
