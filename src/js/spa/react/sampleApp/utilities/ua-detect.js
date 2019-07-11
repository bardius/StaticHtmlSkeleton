/* global navigator */
import toLower from "lodash/toLower";
import includes from "lodash/includes";

const isIE = () => {
    const ua = toLower(navigator.userAgent);
    return includes(ua, "msie") || includes(ua, "trident") || includes(ua, "edge");
};

const isIE8 = () => {
    const ua = toLower(navigator.userAgent);
    if (includes(ua, "msie")) {
        const getVersionRegExp = new RegExp("msie ([0-9]{1,}[.0-9]{0,})");
        const version = getVersionRegExp.exec(ua) !== null ? parseFloat(RegExp.$1) : 11;
        return version < 9;
    }
    return false;
};

export { isIE, isIE8 };
