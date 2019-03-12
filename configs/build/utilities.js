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
    let enhanceEntries = {};

    Object.keys(entries).forEach(entryKey => {
        enhanceEntries[entryKey] = [
            `webpack-dev-server/client?http://${serverHost}:${serverPort}`,
            `webpack/hot/only-dev-server`
        ];
    });

    return enhanceEntries;
};

export { enhanceEntriesWithHMR };
