const JSDOMEnvironment = require("jest-environment-jsdom");

const documentHTML = '<main id="main-content"></main>';

/*
Exposing JSDOM object as global, extending the default jest-environment-jsdom in order to allow objects like window
location to be mutated within tests & adding initail HTML markup for the tests
 */
class JSDOMEnvironmentGlobal extends JSDOMEnvironment {
    constructor(config) {
        super(config);
        this.dom.window.document.body.innerHTML = documentHTML;
        this.global.jsdom = this.dom;
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
