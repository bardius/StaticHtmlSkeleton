import webpack from "webpack";
import merge from "webpack-merge";
import webpackBaseConfig from "./webpack.base.config.babel";
import { extractCSS } from "./build";

// Getting values from the CLI arguments
const argv = require("yargs").argv;
const isProdModeOn = argv.p || false;
const isDebugModeOn = (argv.env && argv.env.debug) || false;
const mode = "development";

let webpackDevConfig = {
    mode: mode,
    devtool: "inline-source-map",
    cache: true,
    output: {
        pathinfo: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(mode),
                BABEL_ENV: JSON.stringify(mode)
            }
        })
    ]
};

export default merge.smart(webpackBaseConfig, webpackDevConfig);
