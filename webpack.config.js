function getStyleUse(bundleFilename) {

    return [
        {
            loader: 'file-loader',
            options: {
                name: bundleFilename
            }
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        {
            loader: 'sass-loader',
            options: {
                includePaths: ['./node_modules'],
                implementation: require('dart-sass'),
                fiber: require('fibers'),
            }
        },
    ];
}

module.exports = [
    {
        entry: './scss/login.scss',
        output: {
            // This is necessary for webpack to compile, but we never reference this js file.
            filename: 'dist/style-bundle-login.js',
        },
        module: {
            rules: [{
                test: /login.scss$/,
                use: getStyleUse('dist/bundle-login.css')
            }]
        },
    },
    {
        entry: './scss/home.scss',
        output: {
            // This is necessary for webpack to compile, but we never reference this js file.
            filename: 'dist/style-bundle-home.js',
        },
        module: {
            rules: [{
                test: /home.scss$/,
                use: getStyleUse('dist/bundle-home.css')
            }]
        },
    },
    {
        entry: "./js/login.js",
        output: {
            filename: "dist/bundle-login.js"
        },
        module: {
            loaders: [{
                test: /login.js$/,
                loader: 'babel-loader',
                query: { presets: ['env'] }
            }]
        },
    },
    {
        entry: "./js/home.js",
        output: {
            filename: "dist/bundle-home.js"
        },
        module: {
            loaders: [{
                test: /home.js$/,
                loader: 'babel-loader',
                query: { presets: ['env'] }
            }]
        },
    }
];
