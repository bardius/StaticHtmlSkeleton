import path from "path";
import { nodeModulesPathRelative, srcPathRelative } from "./paths.config";

/*
All available options & documentation from:
https://webpack.js.org/configuration/resolve
 */
const aliases = {
    core: path.resolve(__dirname, `${srcPathRelative}/js/core`),
    assets: path.resolve(__dirname, `${srcPathRelative}assets`),
    app: path.resolve(__dirname, `${srcPathRelative}bundles/app`),
    helpers: path.resolve(__dirname, `${srcPathRelative}/js/helpers`),
    js: path.resolve(__dirname, `${srcPathRelative}/js`),
    views: path.resolve(__dirname, `${srcPathRelative}views`)
};

export default aliases;
