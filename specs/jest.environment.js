require("@babel/register");
require("@babel/polyfill");

const $ = require("jquery");
const shallow = require("enzyme").shallow;
const mount = require("enzyme").mount;
const render = require("enzyme").render;
const toJson = require("enzyme-to-json");
const JSDOMEnvironment = require("jest-environment-jsdom");
const spaConfig = require("../configs/build/define.config").default.spaConfig;

const documentHTML = '<main id="main-content"></main>';

/*
Exposing JSDOM object as global, extending the default jest-environment-jsdom in order to allow objects like window
location to be mutated within tests & adding initial HTML markup for the tests
 */
class JSDOMEnvironmentGlobal extends JSDOMEnvironment {
    constructor(config) {
        super(config);
        this.dom.window.document.body.innerHTML = documentHTML;
        this.global.$ = this.global.jQuery = $(this.global);
        this.global.jsdom = this.dom;
        this.global.spaConfig = spaConfig;
        this.global.shallow = shallow;
        this.global.mount = mount;
        this.global.render = render;
        this.global.toJson = toJson;
    }

    async setup() {
        await super.setup();
    }

    async teardown() {
        this.global.jsdom = null;
        await super.teardown();
    }

    runScript(script) {
        return super.runScript(script);
    }
}

module.exports = JSDOMEnvironmentGlobal;
