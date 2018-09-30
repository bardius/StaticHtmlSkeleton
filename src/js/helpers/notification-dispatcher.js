const notifications = window.notifications || {};

(function(SkeletonApp, $) {
    var events = {
        eventListeners: [],
        addListener(type, handler, destroyOnUse) {
            if (!events.listenerExists(type, handler)) {
                events.eventListeners.push({
                    destroyOnUse,
                    handler,
                    type
                });
            }
        },
        listenerExists(type, handler) {
            let listener = {};

            for (let i = 0, n = events.eventListeners.length; i < n; i += 1) {
                listener = events.eventListeners[i];

                if (type === listener.type && handler === listener.handler) {
                    return true;
                }
            }

            return false;
        },
        removeListener(type, handler) {
            let listener = {};

            for (let i = 0, n = events.eventListeners.length; i < n; i += 1) {
                listener = events.eventListeners[i];

                if (type === listener.type && handler === listener.handler) {
                    events.eventListeners.splice(i, 1);

                    return;
                }
            }
        },
        sendNotification(type, params) {
            let listener = {};
            let handler;

            for (let i = events.eventListeners.length - 1; i >= 0; i -= 1) {
                listener = events.eventListeners[i];

                if (type === listener.type) {
                    handler = listener.handler;

                    if (listener.destroyOnUse) {
                        events.removeListener(listener.type, listener.handler);
                    }

                    handler(params);
                }
            }
        }
    };

    // Public interface
    window.notifications = {
        sendNotification(type, params) {
            events.sendNotification(type, params);
        },
        addListener(type, handler, destroyOnUse) {
            if (destroyOnUse !== true) {
                destroyOnUse = false;
            }

            events.addListener(type, handler, destroyOnUse);
        },
        removeListener(type, handler) {
            events.removeListener(type, handler);
        },
        WINDOW_RESIZE: "WINDOW_RESIZE"
    };
})((window.SkeletonApp = window.SkeletonApp || {}), jQuery);
