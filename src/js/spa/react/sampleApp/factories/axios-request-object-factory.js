import replace from "lodash/replace";
import assignIn from "lodash/assignIn";
import isEmpty from "lodash/isEmpty";
import isLocalHost from "../utilities/env-utilities";
import RequestObjectFactory from "./request-object-factory";

export default class AxiosRequestObjectFactory extends RequestObjectFactory {
    static createRequestObject = (method, payloadParamValue, endpointDetails, env, postData) => {
        let isPOST = method === "post";
        let requestObject = {
            method,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            params: {},
            url: ""
        };

        let mockDataUrl = endpointDetails.mockData[RequestObjectFactory.getMockScenario()];
        let endpointUrl = replace(endpointDetails.url, "<PAYLOAD_PARAM>", payloadParamValue);

        requestObject.method = endpointDetails.method;
        requestObject.headers = assignIn({}, requestObject.headers, endpointDetails.headers);
        requestObject.params = assignIn({}, requestObject.params, endpointDetails.params);

        if (isPOST) {
            requestObject.data = postData;
        }

        if (isLocalHost) {
            env = "dev";
        }

        switch (env) {
            case "dev":
                requestObject.url = mockDataUrl;
                break;
            default:
                requestObject.url = endpointUrl;
        }

        return requestObject;
    };
}
