/* ==========================================================================
 SkeletonApp.Trak - Universal event tracking API

 # Default implementation uses is Google Analytics:
 https://developers.google.com/analytics/devguides/collection/analyticsjs/

 ## Page and event tracking
 https://developers.google.com/analytics/devguides/collection/analyticsjs/events

 ### Usage:
 SkeletonApp.Trak.event('category', 'action');
 SkeletonApp.Trak.event('category', 'action', 'label');
 SkeletonApp.Trak.event('category', 'action', 'label', value); // value is a number
 ========================================================================== */
(function(SkeletonApp) {
    SkeletonApp.Trak = {
        clean(str) {
            return str.toString().replace(/\s|'|"/g, "-");
        },
        event(category, action, label, value) {
            if (typeof ga !== "undefined") {
                // use _gaq for old style
                ga("send", "event", this.clean(category), this.clean(action), this.clean(label), value);
            }
        }
    };
})((window.SkeletonApp = window.SkeletonApp || {}));
