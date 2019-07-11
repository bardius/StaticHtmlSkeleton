/*
 All available options & documentation from:
 https://github.co./webpack/webpack-dev-server
 https://webpack.js.org/configuration/dev-server
 https://webpack.js.org/guides/hot-module-replacement
 */

// Getting values from the CLI arguments
const argv = require("yargs").argv;
const serverHost = (argv.env && argv.env.serverHost) || "localhost";
const serverPort = (argv.env && argv.env.serverPort) || "9001";

// Appending the webpack HMR and dev-server entries in the existing webpack entrypoints
const enhanceEntriesWithHMR = entries => {
    const enhanceEntries = {};

    Object.keys(entries).forEach(entryKey => {
        enhanceEntries[entryKey] = [];

        if (entryKey.indexOf("spa/") > -1) {
            enhanceEntries[entryKey].push(`react-hot-loader/patch`);
        }
        enhanceEntries[entryKey].push(`webpack-dev-server/client?http://${serverHost}:${serverPort}`);
        enhanceEntries[entryKey].push(`webpack/hot/only-dev-server`);
    });

    return enhanceEntries;
};

export { enhanceEntriesWithHMR };
