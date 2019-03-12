import assemble from "assemble";
import loaderUtils from "loader-utils";
import validateOptions from "schema-utils";

const assembleApp = assemble();
const handlebarsHelpers = require("handlebars-helpers")();

handlebarsHelpers.data = function(data) {
    return JSON.parse(JSON.stringify(data));
};

const schema = {
    type: "object",
    properties: {
        hbsRootPath: {
            type: "string"
        },
        layouts: {
            type: "string"
        },
        partials: {
            type: "string"
        },
        helpers: {
            anyOf: [{ type: "array" }, { type: "object" }, { type: "null" }]
        },
        data: {
            type: "object"
        },
        define: {
            type: "object"
        }
    }
};

const webpackAssembleLoader = function(content) {
    this.cacheable && this.cacheable();
    const callback = this.async();
    const options = loaderUtils.getOptions(this) || {};
    validateOptions(schema, options, "Webpack Assemble Loader");

    if (!options.hbsRootPath) {
        throw new Error("Root Path is required in the Assemble loader config");
    }

    if (!options.layouts) {
        throw new Error("Layouts is required in the Assemble loader config");
    }

    if (!options.partials) {
        throw new Error("Partials is required in the Assemble loader config");
    }

    this.addContextDependency(options.hbsRootPath);

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
