import jQuery from "jquery";
import Foundation from "foundation-sites";
import whatInput from "what-input";

window.jQuery = window.$ = jQuery;
window.whatInput = whatInput;
Foundation.addToJquery($);

const dataPicker = require("../../../node_modules/foundation-datepicker/js/foundation-datepicker.js");
const console = require("../../js/helpers/console.js");
const environment = require("../../js/helpers/environment.js");
const notifications = require("../../js/helpers/notification-dispatcher.js");
const supports = require("../../js/helpers/supports.js");
const cookies = require("../../js/helpers/cookies.js");
const cookiePolicy = require("../../js/cookiePolicy.js");
const scripts = require("../../js/scripts.js");
