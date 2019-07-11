/* global document */
const rootElement = document.getElementById("app-mount");

export default {
    appStateReducer: {
        env: rootElement.getAttribute("data-env") || "prod",
        channel: rootElement.getAttribute("data-channel") || "EMEA",
        entrypoint: rootElement.getAttribute("data-entrypoint") || "/home/part1"
    }
};
