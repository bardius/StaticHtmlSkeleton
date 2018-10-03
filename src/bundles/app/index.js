import jQuery from "jquery";
import Foundation from "foundation-sites";
import whatInput from "what-input";
import NotificationDispatcher from "../../js/helpers/NotificationDispatcher";
import CookiePolicy from "../../js/CookiePolicy";
import App from "../../js/scripts";

window.jQuery = window.$ = jQuery;
window.whatInput = whatInput;
Foundation.addToJquery($);

const dataPicker = require("../../../node_modules/foundation-datepicker/js/foundation-datepicker.js");

window.SkeletonApp = {
    notificationDispatcher: new NotificationDispatcher(),
    CookiePolicy: new CookiePolicy("#cookie-acceptance"),
    App: new App()
};
