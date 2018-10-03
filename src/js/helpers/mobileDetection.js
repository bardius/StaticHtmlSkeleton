/* global navigator */

class MobileDetection {
    constructor(props) {
        this.props = props;
    }

    // mobile or desktop compatible event name, to be used with '.on' function
    static TOUCH_DOWN_EVENT_NAME = "mousedown touchstart";
    static TOUCH_UP_EVENT_NAME = "mouseup touchend";
    static TOUCH_MOVE_EVENT_NAME = "mousemove touchmove";
    static TOUCH_DOUBLE_TAB_EVENT_NAME = "dblclick dbltap";

    static isAndroid() {
        return navigator.userAgent.match(/Android/i);
    }

    static isBlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    }

    static isIOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }

    static isOpera() {
        return navigator.userAgent.match(/Opera Mini/i);
    }

    static isWindows() {
        return navigator.userAgent.match(/IEMobile/i);
    }

    static isMobile() {
        return navigator.userAgent.toLowerCase().match(/mobile/i);
    }

    static isChrome() {
        return navigator.userAgent.toLowerCase().match(/chrome/i);
    }

    static isAndroidNativeBrowser() {
        return MobileDetection.isAndroid() && MobileDetection.isMobile() && !MobileDetection.isChrome();
    }

    static isMobile() {
        return (
            MobileDetection.isAndroid() ||
            MobileDetection.isBlackBerry() ||
            MobileDetection.isIOS() ||
            MobileDetection.isOpera() ||
            MobileDetection.isWindows() ||
            MobileDetection.isMobile()
        );
    }
}

export default MobileDetection;
