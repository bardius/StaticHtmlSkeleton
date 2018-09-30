import path from "path";
import { nodeModulesPathRelative, srcPathRelative } from "./paths.config";

/*
All available options & documentation from:
https://webpack.js.org/configuration/resolve
 */

const aliases = {
    core: path.resolve(__dirname, `${srcPathRelative}core`),
    assets: path.resolve(__dirname, `${srcPathRelative}assets`),
    sample: path.resolve(__dirname, `${srcPathRelative}bundles/sample`),
    components: path.resolve(__dirname, `${srcPathRelative}components`),
    iifes: path.resolve(__dirname, `${srcPathRelative}iifes`),
    views: path.resolve(__dirname, `${srcPathRelative}views`)
};

export default aliases;
