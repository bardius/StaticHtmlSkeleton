/* global document */

/* ==========================================================================
 Complete cookie reader/writer
 From https://developer.mozilla.org/en-US/docs/DOM/document.cookie

 Usage:
 cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
 cookies.getItem(name)
 cookies.removeItem(name[, path])
 cookies.hasItem(name)
 cookies.keys()
 ========================================================================== */

class Cookies {
    constructor(props) {
        this.props = props;
    }

    static hasItem(sKey) {
        return new RegExp(`(?:^|;\\s*)${escape(sKey).replace(/[\-\.\+\*]/g, "\\$&")}\\s*\\=`).test(document.cookie);
    }

    static getItem(sKey) {
        if (!sKey || !Cookies.hasItem(sKey)) {
            return null;
        }
        return unescape(
            document.cookie.replace(
                new RegExp(
                    `(?:^|.*;\\s*)${escape(sKey).replace(/[\-\.\+\*]/g, "\\$&")}\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*`
                ),
                "$1"
            )
        );
    }

    static setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return;
        }

        let sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : `; max-age=${vEnd}`;
                    break;
                case String:
                    sExpires = `; expires=${vEnd}`;
                    break;
                case Date:
                    sExpires = `; expires=${vEnd.toGMTString()}`;
                    break;
            }
        }

        document.cookie = `${escape(sKey)}=${escape(sValue)}${sExpires}${sDomain ? `; domain=${sDomain}` : ""}${
            sPath ? `; path=${sPath}` : ""
        }${bSecure ? "; secure" : ""}`;
    }

    static removeItem(sKey, sPath) {
        if (!sKey || !Cookies.hasItem(sKey)) {
            return;
        }

        document.cookie = `${escape(sKey)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${sPath ? `; path=${sPath}` : ""}`;
    }

    static keys() {
        const aKeys = document.cookie
            .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
            .split(/\s*(?:\=[^;]*)?;\s*/);
        for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
            aKeys[nIdx] = unescape(aKeys[nIdx]);
        }
        return aKeys;
    }
}

export default Cookies;
