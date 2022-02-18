var webpack = require('webpack')


module.exports = {
    entry:{
        firstComp: './src/js/firstComp/index.js',
        vendor: ['react']
    },

    output: { filename: '[name].js',
                path: path.resolve(__dirname,
                    'public/js/components')},

    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                option: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }
        ]
    },
    
    plugins: [
            new webpack.optimize.CommonsChunkPlugins({
                name: 'vendor',
                minChunks: function (module) {
                    // this assumes your vendor imports exist in the node_modules directory
                    return module.context &&
                    module.context.indexOf('node_modules') !== -1;
                }
            }),
    //          new webpack.optimize.UglifyJsPlugin({
    //      sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >=    0 // options.devtool.indexOf("source-map") >= 0
    // }),
    // new webpack.define
            //  new webpack.optimize.CommonsChunkPlugin({
            //      name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
            //  })
    ]
}