/* global window */
class NotificationDispatcher {
    constructor(props) {
        this.props = props;
        this.eventListeners = [];
    }

    static WINDOW_RESIZE = "WINDOW_RESIZE";

    addListener(type, handler, destroyOnUse) {
        if (!this.hasListener(type, handler)) {
            this.eventListeners.push({
                destroyOnUse,
                handler,
                type
            });
        }
    }

    hasListener(type, handler) {
        for (let i = 0, n = this.eventListeners.length; i < n; i += 1) {
            const listener = this.eventListeners[i];

            if (type === listener.type && handler === listener.handler) {
                return true;
            }
        }

        return false;
    }

    removeListener(type, handler) {
        for (let i = 0, n = this.eventListeners.length; i < n; i += 1) {
            const listener = this.eventListeners[i];

            if (type === listener.type && handler === listener.handler) {
                this.eventListeners.splice(i, 1);

                return;
            }
        }
    }

    sendNotification(type, params) {
        for (let i = this.eventListeners.length - 1; i >= 0; i -= 1) {
            let listener = this.eventListeners[i];

            if (type === listener.type) {
                if (listener.destroyOnUse) {
                    this.removeListener(listener.type, listener.handler);
                }

                listener.handler(params);
            }
        }
    }
}

export default NotificationDispatcher;
