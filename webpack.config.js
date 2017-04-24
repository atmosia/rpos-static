var OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
var RemoveEmptyChunksPlugin = require('webpack/lib/optimize/RemoveEmptyChunksPlugin');
var webpack = require('webpack');
var jquery = require('jquery');

function devtoolFilenameTemplate(info) {
    if (info.resourcePath.match(/^\.\//)) {
        return 'webpack:///src/' + info.resourcePath.substr(1);
    }
    if (info.resourcePath.match(/^\/~\//)) {
        return 'webpack:///node_modules/' + info.resourcePath.substr(3);
    }
    console.log(info.resourcePath);
    return "webpack:///unknown/" + info.resourcePath;
}

module.exports = {
    context: __dirname + '/src',
    entry: {
        "router": "router",
    },
    devtool: "#source-map",
    resolve: {
        root: __dirname + '/src',
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css'},
        ],
    },
    output: {
        path: __dirname + '/js',
        filename: "[name].js",
        sourceMapFilename: "[name]-[hash].js.map",
        devtoolModuleFilenameTemplate: devtoolFilenameTemplate,
        devtoolFallbackModuleFilenameTemplate: devtoolFilenameTemplate,
    },
    watchOptions: {
        poll: true,
        aggregateTimeout: 10
    },
    plugins: [
        new OccurrenceOrderPlugin(),
        new RemoveEmptyChunksPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
};
