import webpack from "webpack";
import merge from "webpack-merge";
import path from "path";
import webpackDevConfig from "./webpack.dev.config.babel";
import { extractCSS, enhanceEntriesWithHMR } from "./build";
import { distPath } from "./build/paths.config";

/*
 All available options & documentation from:
 https://github.co./webpack/webpack-dev-server
 https://webpack.js.org/configuration/dev-server
 https://webpack.js.org/guides/hot-module-replacement
 */

// Getting values from the CLI arguments
const argv = require("yargs").argv;
const isProdModeOn = argv.p || false;
const isDebugModeOn = (argv.env && argv.env.debug) || false;
const serverHost = (argv.env && argv.env.serverHost) || "localhost";
const serverPort = (argv.env && argv.env.serverPort) || 9001;

let webpackDevServerConfig = {
    entry: enhanceEntriesWithHMR(webpackDevConfig.entry),
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: path.resolve(__dirname, `../${distPath}`),
        writeToDisk: true,
        watchContentBase: true,
        hot: true,
        progress: true,
        inline: false,
        index: "index.html",
        stats: {
            colors: true,
            assets: false,
            source: false,
            timings: true,
            hash: false,
            version: false,
            chunkModules: false,
            chunkOrigins: true
        },
        headers: {},
        https: false,
        host: serverHost,
        port: serverPort,
        historyApiFallback: true,
        compress: true,
        open: false
    }
};

export default merge.smart(webpackDevConfig, webpackDevServerConfig);
