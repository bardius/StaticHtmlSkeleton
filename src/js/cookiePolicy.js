/* global $ */
import Cookies from "./helpers/Cookies";

class CookiePolicy {
    constructor(cookiePolicySelector, props) {
        this.cookiePolicySelector = cookiePolicySelector;
        this.props = props;
        this.init();
    }

    init() {
        const $cookiePolicyEl = $(this.cookiePolicySelector);

        if (Cookies.getItem("cookies-agreed") !== "true") {
            $cookiePolicyEl.removeClass("is-hidden");

            $cookiePolicyEl.find(".accept-button").on("click", () => {
                Cookies.setItem("cookies-agreed", "true", Infinity, "/");
            });
        }
    }
}

export default CookiePolicy;
