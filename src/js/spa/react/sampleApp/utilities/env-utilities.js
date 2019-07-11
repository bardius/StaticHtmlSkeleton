/* global window */
import toLower from "lodash/toLower";
import includes from "lodash/includes";

const isLocalHost = () => {
    const hostname = toLower(window.location.hostname);
    return includes(hostname, "localhost");
};

export { isLocalHost };
