/*
 Project: Project Name
 Authors: George SkeletonApp
 */

// Create a closure to maintain scope of the '$' and SkeletonApp
(function(SkeletonApp, $, window, document, undefined) {
    SkeletonApp.cookiePolicy = function() {
        /**
         * Test if user has been to site before and accepted cookies
         * If so, keep message hidden
         * If not, keep visible and allow user to accept
         */
        const $cookiePolicyEl = $("#cookie-acceptance");

        if (SkeletonApp.cookies.getItem("cookies-agreed") !== "true") {
            $cookiePolicyEl.removeClass("is-hidden");

            $cookiePolicyEl.find(".accept-button").on("click", e => {
                SkeletonApp.cookies.setItem("cookies-agreed", "true", Infinity, "/");
            });
        }
    };
})((window.SkeletonApp = window.SkeletonApp || {}), jQuery, window, document);
