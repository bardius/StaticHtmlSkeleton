import { srcPath, distPath } from "./paths.config";

/*
 All available options & documentation from:
 https://www.npm.org/package/copy-webpack-plugin
 */
const vendorFiles = [];

const staticViewsAssets = [{ from: `${srcPath}/assets/static`, to: "" }];

const copyFilesList = [].concat(vendorFiles, staticViewsAssets);

export default copyFilesList;
