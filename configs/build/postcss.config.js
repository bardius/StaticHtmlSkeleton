/*
 All available options & documentation from:
 https://github.com/postcss/postcss
 */

const argv = require("yargs").argv;
const isProdModeOn = argv.p || false;

module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-url": { url: "rebase" },
        "postcss-custom-properties": {},
        "postcss-calc": {},
        "postcss-custom-media": {},
        "postcss-pxtorem": {
            propList: ["font", "font-size", "padding*", "margin*"]
        },
        "postcss-preset-env": {
            browsers: ["last 2 versions", "not ie < 9"],
            autoprefixer: {
                grid: true
            },
            stage: 2,
            features: {
                "nesting-rules": true
            }
        },
        "postcss-filter-gradient": {},
        cssnano: isProdModeOn
            ? {
                  preset: [
                      "default",
                      {
                          autoprefixer: false,
                          mergeRules: false,
                          safe: true,
                          discardComments: {
                              removeAll: true
                          }
                      }
                  ]
              }
            : false
    }
};
