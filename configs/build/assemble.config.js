import glob from "glob";
import HtmlWebpackPlugin from "html-webpack-plugin";
import merge from "webpack-merge";
import { srcPathAbsolute } from "./paths.config";

/*
 All available options & documentation from:
 https://webpack.js.org/plugins/html-webpack-plugin
 */
const absoluteTemplatesPath = `${srcPathAbsolute}views/pages/`;
const pluginConfigDefaults = {
    hash: false,
    inject: true,
    compile: true,
    favicon: `${srcPathAbsolute}assets/images/favicon.ico`,
    minify: false,
    cache: true,
    showErrors: true,
    chunks: "all",
    xhtml: false
};

// Generate the configuration object for each Handlebars pages to use in each HtmlWebpackPlugin instance
const getStaticViewsConfigList = function(templatesPath) {
    const staticViewsConfigArray = [];
    const hbsPages = glob.sync(`${templatesPath}**/*.hbs`);

    hbsPages.map(hbsPage => {
        const targetFilename = `${hbsPage
            .replace(templatesPath, "")
            .split(".")
            .slice(0, -1)
            .join(".")}.html`;

        const staticView = {
            template: hbsPage,
            filename: targetFilename,
            excludeChunks: []
        };

        staticViewsConfigArray.push(staticView);
    });

    return staticViewsConfigArray;
};

// Generate an array of HtmlWebpackPlugin instances in order to create all the html pages from hbs templates
const getHtmlWebpackPluginList = function(hbsTemplatesPath) {
    const htmlWebpackPluginArray = [];
    const staticViewsConfigs = getStaticViewsConfigList(hbsTemplatesPath);

    staticViewsConfigs.map(staticViewConfig => {
        const htmlWebpackPlugin = new HtmlWebpackPlugin(merge.smart(pluginConfigDefaults, staticViewConfig));

        htmlWebpackPluginArray.push(htmlWebpackPlugin);
    });

    return htmlWebpackPluginArray;
};

const htmlWebpackPluginList = getHtmlWebpackPluginList(absoluteTemplatesPath);

export default htmlWebpackPluginList;
