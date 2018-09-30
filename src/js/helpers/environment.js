/*	Author:  */

(function(SkeletonApp) {
    SkeletonApp.environment = {
        // mobile or desktop compatible event name, to be used with '.on' function
        TOUCH_DOWN_EVENT_NAME: "mousedown touchstart",
        TOUCH_UP_EVENT_NAME: "mouseup touchend",
        TOUCH_MOVE_EVENT_NAME: "mousemove touchmove",
        TOUCH_DOUBLE_TAB_EVENT_NAME: "dblclick dbltap",
        isAndroid() {
            return navigator.userAgent.match(/Android/i);
        },
        isBlackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        isIOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        isOpera() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        isWindows() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        isMobile() {
            if (
                SkeletonApp.environment.isAndroid() ||
                SkeletonApp.environment.isBlackBerry() ||
                SkeletonApp.environment.isIOS() ||
                SkeletonApp.environment.isOpera() ||
                SkeletonApp.environment.isWindows()
            ) {
                return true;
            }
            return false;
        }
    };
})((window.SkeletonApp = window.SkeletonApp || {}));
