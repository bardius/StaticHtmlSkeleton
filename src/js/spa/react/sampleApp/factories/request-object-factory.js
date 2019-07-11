/* global window */
import split from "lodash/split";

export default class RequestObjectFactory {
    constructor() {}

    static getMockScenario = (defaultScenario = "happyJourney") => {
        const defaultMockScenario = defaultScenario;
        const queryString = window.location.search.substr(1);
        const params = split(queryString, "&");
        const paramsLength = params.length;

        for (let i = 0; i < paramsLength; i += 1) {
            const mockScenarioParam = split(params[i], "=");
            if (mockScenarioParam[0] === "mockScenario") {
                return mockScenarioParam[1];
            }
        }
        return defaultMockScenario;
    };

    static createRequestObject = method => {
        return {
            method,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            params: {},
            url: ""
        };
    };
}
