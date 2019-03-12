import webpack from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import SitemapPlugin from "sitemap-webpack-plugin";
import WebpackPwaManifest from "webpack-pwa-manifest";
import CspHtmlWebpackPlugin from "csp-html-webpack-plugin";
import ImageminWebpack from "imagemin-webpack";
import ScriptExtHtmlWebpackPlugin from "script-ext-html-webpack-plugin";
import path from "path";
import { distPath } from "./build/paths.config";
import {
    aliases,
    staticViews,
    cleanupConfig,
    copyFilesList,
    extractCSS,
    entrypoints,
    externalLibs,
    webpackProvides,
    manifestConfig,
    scriptLoadConfig,
    cspConfig,
    imageOptimizationConfig,
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
        filename: "[name]/js/bundle.[hash:6].min.js",
        chunkFilename: "[id].js",
        publicPath: "/",
        path: path.join(__dirname, `../${distPath}`)
    },
    module: {
        rules: webpackRules
    },
    externals: externalLibs,
    plugins: [
        new CleanWebpackPlugin(cleanupConfig),
        new CopyWebpackPlugin(copyFilesList),
        new webpack.ProvidePlugin(webpackProvides),
        extractCSS,
        new SitemapPlugin("http://www.domain.com", sitemapPages, { fileName: "sitemap.xml" }),
        new CspHtmlWebpackPlugin(cspConfig.policy, cspConfig.optional),
        new WebpackPwaManifest(manifestConfig),
        new ImageminWebpack(imageOptimizationConfig)
    ]
};

staticViews.forEach(staticViewJHtmlPlugin => {
    webpackBaseConfig.plugins.unshift(staticViewJHtmlPlugin);
});

webpackBaseConfig.plugins.push(new ScriptExtHtmlWebpackPlugin(scriptLoadConfig));

export default webpackBaseConfig;
