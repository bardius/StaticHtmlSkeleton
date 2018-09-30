import aliases from "./alias.config";
import staticViews from "./assemble.config";
import foldersToClean from "./cleanup.config";
import copyFilesList from "./copyfiles.config";
import extractCSS from "./css.extract.config";
import entrypoints from "./entrypoints.config";
import externalLibs from "./externals.config";
import webpackProvides from "./provides.config";
import webpackRules from "./rules.config";
import sitemapPages from "./sitemap.config";
import { enhanceEntriesWithHMR } from "./utilities";

export {
    aliases,
    staticViews,
    foldersToClean,
    copyFilesList,
    extractCSS,
    entrypoints,
    externalLibs,
    webpackProvides,
    webpackRules,
    sitemapPages,
    enhanceEntriesWithHMR
};
