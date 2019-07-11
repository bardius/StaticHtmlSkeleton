/* global document */
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer as HotLoaderAppContainer } from "react-hot-loader";
import Root from "./app.root";
import configureStore from "./store/configure-store";

const rootElement = document.getElementById("app-mount");
const store = configureStore();

// TODO: Implement https://github.com/alibaba/react-intl-universal
// TODO: Add bootstrap as a dependency

const render = Component => {
    ReactDOM.render(
        <HotLoaderAppContainer>
            <Component store={store} />
        </HotLoaderAppContainer>,
        rootElement
    );
};

render(Root);

if (module.hot) {
    module.hot.accept("./app.root", () => {
        const nextRoot = require("./app.root");
        render(nextRoot);
    });
    module.hot.accept("./reducers", () => {
        const nextReducers = require("./reducers");
        return store.replaceReducer(nextReducers);
    });
}
