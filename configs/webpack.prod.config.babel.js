import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import merge from "webpack-merge";
import webpackBaseConfig from "./webpack.base.config.babel";
import { extractCSS } from "./build";

// Getting values from the CLI arguments
const argv = require("yargs").argv;
const isProdModeOn = argv.p || false;
const isDebugModeOn = (argv.env && argv.env.debug) || false;
const mode = "production";

let webpackProdConfig = {
    mode: mode,
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(mode),
                BABEL_ENV: JSON.stringify(mode)
            }
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    ecma: 8,
                    warnings: false,
                    compress: {
                        warnings: false,
                        sequences: false,
                        dead_code: false,
                        conditionals: false,
                        booleans: false,
                        unused: false,
                        if_return: false,
                        join_vars: false,
                        drop_console: false
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false
                },
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

export default merge.smart(webpackBaseConfig, webpackProdConfig);
