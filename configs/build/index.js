import aliases from "./alias.config";
import staticViews from "./assemble.config";
import cleanupConfig from "./cleanup.config";
import copyFilesList from "./copyfiles.config";
import cspConfig from "./csp.config";
import extractCSS from "./css.extract.config";
import entrypoints from "./entrypoints.config";
import externalLibs from "./externals.config";
import defineConfig from "./define.config";
import imageOptimizationConfig from "./image.optimization.config";
import manifestConfig from "./manifest.config";
import metaTagsConfig from "./metatags.config";
import webpackProvides from "./provides.config";
import webpackRules from "./rules.config";
import scriptLoadConfig from "./script.load.config";
import sitemapPages from "./sitemap.config";
import { enhanceEntriesWithHMR } from "./utilities";

export {
    aliases,
    staticViews,
    cleanupConfig,
    copyFilesList,
    cspConfig,
    extractCSS,
    entrypoints,
    externalLibs,
    defineConfig,
    imageOptimizationConfig,
    manifestConfig,
    metaTagsConfig,
    webpackProvides,
    webpackRules,
    scriptLoadConfig,
    sitemapPages,
    enhanceEntriesWithHMR
};
