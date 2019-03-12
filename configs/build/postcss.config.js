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
        precss: {},
        "postcss-custom-properties": {},
        "postcss-calc": {},
        "postcss-custom-media": {},
        "postcss-pxtorem": {
            propList: ["font", "font-size", "padding*", "margin*"]
        },
        "postcss-preset-env": {
            stage: 2
        },
        autoprefixer: {},
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
