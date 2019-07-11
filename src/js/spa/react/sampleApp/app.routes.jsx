/* global document */
import React from "react";
import { Route, IndexRoute, IndexRedirect, Redirect } from "react-router";
import { Home, HomePart1, HomePart2, ErrorPage404 } from "./routes";
import App from "./app";

const rootElement = document.getElementById("app-mount");
const indexPath = rootElement.getAttribute("data-entrypoint") || "/home/part1";

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to={indexPath} />
        <Route path="home" component={Home}>
            <IndexRoute component={HomePart1} />
            <Route path="part1" component={HomePart1} />
            <Route path="part2" component={HomePart2} />
        </Route>
        <Route path="/404" component={ErrorPage404} />
        <Redirect from="*" to="/404" />
    </Route>
);

export default routes;
