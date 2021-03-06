import MiniCssExtractplugin from "mini-css-extract-plugin";
import path from "path";
import viewsData from "../../src/views/data";
import {
    srcPath,
    srcPathAbsolute,
    nodeModulesPath,
    distPath,
    postCSSConfigPath,
    assembleLoaderPath
} from "./paths.config.js";

/*
 All available options & documentation from:
 https://webpack.js.org/concepts/loaders
 https://github.com/webpack-contrib/url-loader
 https://github.com/webpack-contrib/html-loader
 https://www.npm.js.org/package/assemble-webpack-loader
 https://github.com/babel/babel-loader
 https://github.com/postcss/postcss-loader
 https://github.com/bholloway/resolve-url-loader
 https://github.com/webpack-contrib/css-loader
 https://github.com/webpack-contrib/style-loader
 */

const argv = require("yargs").argv;
const isProdModeOn = argv.p || false;
const isdebugModeOn = (argv.env && argv.env.debug) || false;

const webpackRules = [
    // HTML file loader
    {
        test: /\.(html)$/,
        use: {
            loader: "html-loader",
            options: {
                minimize: false
            }
        }
    },
    // Handlebars Assemble HBS to HTML file loader
    {
        test: /\.(hbs)$/,
        use: [
            {
                loader: "html-loader",
                options: {
                    minimize: false
                }
            },
            {
                loader: path.resolve(assembleLoaderPath),
                options: {
                    hbsRootPath: `${srcPathAbsolute}views`,
                    layouts: `${srcPathAbsolute}views/layouts/**/*.hbs`,
                    partials: `${srcPathAbsolute}views/partials/**/*.hbs`,
                    helpers: null,
                    data: viewsData,
                    define: Object.assign({ favicon: `${srcPathAbsolute}assets/images/favicon.ico` })
                }
            }
        ]
    },
    // JavaScript ES6 with Babel loader
    {
        test: /\.(js)$/,
        exclude: new RegExp(`${nodeModulesPath}`),
        loader: "babel-loader",
        options: {
            cacheDirectory: true,
            cacheCompression: false
        }
    },
    // CSS with postCSS via loaders & extracted to file via mini CSS extract plugin
    {
        test: /\.(scss|sass|css)$/,
        exclude: [],
        use: [
            MiniCssExtractplugin.loader,
            {
                loader: "css-loader",
                options: {
                    importLoaders: 3,
                    sourceMap: isProdModeOn
                }
            },
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: isProdModeOn,
                    config: {
                        ctx: { mode: isProdModeOn ? "production" : "development" },
                        path: postCSSConfigPath
                    }
                }
            },
            { loader: "resolve-url-loader", options: { debug: isdebugModeOn } },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    sourceMapContents: false,
                    includePaths: [
                        path.resolve(__dirname, "node_modules/foundation-sites/scss"),
                        path.resolve(__dirname, "node_modules/motion-ui/src")
                    ]
                }
            }
        ]
    },
    // Font file loader rules
    {
        test: /\.(eot|svg|ttf|TTF|woff|woff2)$/,
        include: [new RegExp(`${srcPath}`)],
        exclude: [new RegExp(`img`), new RegExp(`image`)],
        use: {
            loader: "url-loader",
            options: {
                limit: 1,
                name: "[path][name].[ext]",
                outputPath: "",
                context: `${srcPathAbsolute}`,
                pathPublic: `${distPath}`
            }
        }
    },
    // Image file loader rules
    {
        test: /\.(gif|jpg|jpe?g|svg|png)$/,
        include: [new RegExp(`${srcPath}`)],
        exclude: [new RegExp(`font`)],
        use: {
            loader: "url-loader",
            options: {
                limit: 1,
                name: "[path][name].[ext]",
                outputPath: "",
                context: `${srcPathAbsolute}`,
                pathPublic: `${distPath}`
            }
        }
    }
];

export default webpackRules;
