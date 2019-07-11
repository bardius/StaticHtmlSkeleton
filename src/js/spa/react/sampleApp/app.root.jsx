/* global document, window */
import React, { Component } from "react";
import { Router, useRouterHistory } from "react-router";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import routes from "./app.routes";

const browserHistory = useRouterHistory(createHashHistory)({
    basename: `${webpack.basePath}`,
    queryKey: false
});

export default class Root extends Component {
    static propTypes = {
        store: React.PropTypes.object.isRequired
    };

    static defaultProps = {
        store: {}
    };

    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}
