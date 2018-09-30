import webpack from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import SitemapPlugin from "sitemap-webpack-plugin";
import path from "path";
import { distPath } from "./build/paths.config";
import {
    aliases,
    staticViews,
    foldersToClean,
    copyFilesList,
    extractCSS,
    entrypoints,
    externalLibs,
    webpackProvides,
    webpackRules,
    sitemapPages
} from "./build";

// Getting values from the CLI arguments
const argv = require("yargs").argv;
const isProdModeOn = argv.p || false;
const isDebugModeOn = (argv.env && argv.env.debug) || false;

let webpackBaseConfig = {
    performance: {
        hints: false
    },
    target: "web",
    context: path.resolve(__dirname, "../"),
    resolve: {
        modules: [path.resolve("./"), "node_modules"],
        extensions: ["*", ".js", ".json", ".hbs", "css", "scss"],
        alias: aliases
    },
    entry: entrypoints,
    output: {
        pathinfo: false,
        library: "SkeletonAppLib",
        libraryTarget: "window",
        filename: "[name]/js/bundle.min.js",
        chunkFilename: "[id].js",
        publicPath: "/",
        path: path.join(__dirname, `../${distPath}`)
    },
    module: {
        rules: webpackRules
    },
    externals: externalLibs,
    plugins: [
        new CleanWebpackPlugin(foldersToClean, { root: path.resolve(__dirname, "../"), watch: false }),
        new CopyWebpackPlugin(copyFilesList),
        new webpack.ProvidePlugin(webpackProvides),
        extractCSS,
        new SitemapPlugin("http://www.domain.com", sitemapPages, { fileName: "sitemap.xml" })
    ]
};

staticViews.map(staticViewJHtmlPlugin => {
    webpackBaseConfig.plugins.unshift(staticViewJHtmlPlugin);
});

export default webpackBaseConfig;
