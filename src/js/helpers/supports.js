/*	Author:  */

(function(SkeletonApp) {
    SkeletonApp.Supports = {
        // SkeletonApp.Supports.touch
        touch:
            "ontouchstart" in document.documentElement || !!(window.DocumentTouch && document instanceof DocumentTouch),
        touch2: !!("onorientationchange" in window && "ontouchstart" in window),

        // SkeletonApp.Supports.isAndroidNativeBrowser
        isAndroidNativeBrowser: (function() {
            const ua = navigator.userAgent.toLowerCase();
            return ua.indexOf("android") !== -1 && ua.indexOf("mobile") !== -1 && ua.indexOf("chrome") === -1;
        })(),

        // SkeletonApp.Supports.viewportW()
        viewportW() {
            const a = document.documentElement.clientWidth;

            const b = window.innerWidth;
            return a < b ? b : a;
        },

        // SkeletonApp.Supports.viewportH()
        viewportH() {
            const a = document.documentElement.clientHeight;

            const b = window.innerHeight;
            return a < b ? b : a;
        }
    };
})((window.SkeletonApp = window.SkeletonApp || {}));
