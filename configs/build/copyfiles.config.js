import { srcPath, distPath } from "./paths.config";

/*
 All available options & documentation from:
 https://www.npm.org/package/copy-webpack-plugin
 */
const vendorFiles = [];
const staticViewsAssets = [{ from: `${srcPath}/assets/static`, to: "" }];
const mockEndpointResponses = [{ from: `${srcPath}/assets/mocks/json`, to: "" }];

const copyFilesList = [].concat(vendorFiles, staticViewsAssets, mockEndpointResponses);

export default copyFilesList;
