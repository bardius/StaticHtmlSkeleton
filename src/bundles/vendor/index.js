/* global window */
import jQuery from "jquery";
import Foundation from "foundation-sites";
import whatInput from "what-input";

// eslint-disable-next-line no-multi-assign
window.jQuery = window.$ = jQuery;
window.whatInput = whatInput;
Foundation.addToJquery($);

const datePicker = require("../../../node_modules/foundation-datepicker/js/foundation-datepicker.js");

window.Skeleton = window.Skeleton || {};
window.Skeleton.datePicker = datePicker;
