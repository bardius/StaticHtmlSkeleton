import glob from "glob";
import { srcPathAbsolute } from "./paths.config";

/*
 All available options & documentation from:
 https://www.npmjs.com/package/sitemap-webpack-plugin
 */
const absoluteTemplatesPath = `${srcPathAbsolute}views/pages/`;

// Generate the configuration object for sitemap webpack plugin based on provided Handlebars page templates
const getSitemapPageList = function(templatesPath) {
    const sitemapConfigArray = [];
    const hbsPages = glob.sync(`${templatesPath}**/*.hbs`);

    hbsPages.map(hbsPage => {
        const targetFilename = `${hbsPage
            .replace(templatesPath, "")
            .split(".")
            .slice(0, -1)
            .join(".")}.html`;

        const sitemapPage = {
            "path": targetFilename,
            "lastMod": new Date().toISOString(),
            "priority": "0.5",
            "changeFreq": "weekly"
        };

        sitemapConfigArray.push(sitemapPage);
    });

    return sitemapConfigArray;
};

const sitemapPages = getSitemapPageList(absoluteTemplatesPath);

export default sitemapPages;
