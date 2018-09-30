import assemble from "assemble";
import loaderUtils from "loader-utils";

const assembleApp = assemble();
const handlebarsHelpers = require("handlebars-helpers")();

const webpackAssembleLoader = function(content) {
    this.cacheable && this.cacheable();
    const callback = this.async();
    const options = loaderUtils.getOptions(this) || {};

    if (!options.layouts) {
        throw new Error("Layouts is required in the Assemble loader config");
    }

    if (!options.partials) {
        throw new Error("Partials is required in the Assemble loader config");
    }

    assembleApp.layouts(options.layouts);
    assembleApp.partials(options.partials);
    assembleApp.data(options.data);
    assembleApp.option("engine", options.engine || "hbs");
    assembleApp.helpers(options.helpers || handlebarsHelpers);
    assembleApp.page("page.hbs", { content });

    assembleApp.render("page.hbs", options.define || {}, (error, view) => {
        if (error) {
            throw new Error(error.message);
        }
        callback(null, view.content);
    });
};

export default webpackAssembleLoader;
