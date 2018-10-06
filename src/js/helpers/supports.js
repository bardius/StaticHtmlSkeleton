/* global window, document, DocumentTouch */

class Supports {
    constructor(props) {
        this.props = props;
    }

    static touch() {
        return (
            "ontouchstart" in document.documentElement || !!(window.DocumentTouch && document instanceof DocumentTouch)
        );
    }

    static touch2() {
        return !!("onorientationchange" in window && "ontouchstart" in window);
    }

    static viewportW() {
        const a = document.documentElement.clientWidth;

        const b = window.innerWidth;
        return a < b ? b : a;
    }

    static viewportH() {
        const a = document.documentElement.clientHeight;

        const b = window.innerHeight;
        return a < b ? b : a;
    }
}

export default Supports;
