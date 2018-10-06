/*
Preparing the paths that are used in the webpack configuration files
 */

const srcPath = "src";
const nodeModulesPath = "node_modules";
const distPath = "dist";
const postCSSConfigPath = "./configs/build/postcss.config.js";
const assembleLoaderPath = "./configs/loaders/webpack-assemble-loader.js";

// Variations of the src path
const srcPathAbsolute = `./${srcPath}/`;
const srcPathRelative = `../../${srcPath}/`;

// Variations of the node modules path
const nodeModulesPathAbsolute = `./${nodeModulesPath}/`;
const nodeModulesPathRelative = `../../${nodeModulesPath}/`;

// Variations of the dist path
const distPathAbsolute = `./${distPath}/`;
const distPathRelative = `../../${distPath}/`;

export {
    srcPath,
    nodeModulesPath,
    distPath,
    postCSSConfigPath,
    srcPathRelative,
    srcPathAbsolute,
    nodeModulesPathAbsolute,
    nodeModulesPathRelative,
    distPathAbsolute,
    distPathRelative,
    assembleLoaderPath
};
