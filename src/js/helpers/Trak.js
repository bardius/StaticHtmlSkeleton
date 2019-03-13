/* global ga */

/* ==========================================================================
 Trak - Universal event tracking API

 # Default implementation uses is Google Analytics:
 https://developers.google.com/analytics/devguides/collection/analyticsjs/

 ## Page and event tracking
 https://developers.google.com/analytics/devguides/collection/analyticsjs/events

 ### Usage:
 Trak.event('category', 'action');
 Trak.event('category', 'action', 'label');
 Trak.event('category', 'action', 'label', value); // value is a number
 ========================================================================== */

class Trak {
    constructor(props) {
        this.props = props;
    }

    static sanitizeValue(value) {
        return value.toString().replace(/\s|'|"/g, "-");
    }

    static sendEvent(category, action, label, value) {
        if (typeof ga !== "undefined") {
            ga(
                "send",
                "event",
                Trak.sanitizeValue(category),
                Trak.sanitizeValue(action),
                Trak.sanitizeValue(label),
                value
            );
        }
    }
}

export default Trak;
