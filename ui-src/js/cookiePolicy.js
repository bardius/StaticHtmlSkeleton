/*
 Project: Project Name
 Authors: George Bardis
 */

// Create a closure to maintain scope of the '$' and BARDIS
(function (BARDIS, $, window, document, undefined) {
    BARDIS.cookiePolicy = function () {
        /**
         * Test if user has been to site before and accepted cookies
         * If so, keep message hidden
         * If not, keep visible and allow user to accept
         */
        var $cookiePolicyEl = $('#cookie-acceptance');

        if (BARDIS.cookies.getItem('cookies-agreed') !== 'true') {
            $cookiePolicyEl.removeClass('is-hidden');

            $cookiePolicyEl.find('.accept-button').on('click', function (e) {
                BARDIS.cookies.setItem('cookies-agreed', 'true', Infinity, '/');
            });
        }
    };

})(window.BARDIS = window.BARDIS || {}, jQuery, window, document);
