/* global webpack */
import axios from "axios";
import { ActionTypes, PayloadTypes, HTTPVerbs } from "../constants";
import AxiosRequestObjectFactory from "../factories/axios-request-object-factory";

export default class DataService {
    /*
     * Takes an array of action/payload objects and returns a single Promise that resolves all
     * Example:
     * input - [{ action: getAPIData, payload: { type: 'dataType' }}]
     *
     * @param {array} fetchDataActions
     *
     * @returns promise
     */
    static getAPIDataFromActions = fetchDataActions => {
        const fetchDataPromises = [];

        fetchDataActions.map(fetchDataAction =>
            fetchDataPromises.push(fetchDataAction.action(fetchDataAction.payload))
        );

        return Promise.all(fetchDataPromises);
    };

    static createFetchDataAction = (action, data, dataType, env) => ({
        action: action,
        payload: {
            data: data,
            dataType: dataType,
            env: env
        }
    });

    static handleResponseError = error => {
        if (error.response) {
            // Got a response that does not fall in range of 2xx
            return {
                statusCode: error.response.status,
                message: error.response.data || error.message
            };
        } else if (error.request) {
            // Got no response, error.request is an instance of XMLHttpRequest for browser
            // and an instance of http.ClientRequest in nodeJs
            return {
                statusCode: 500,
                message: error.request
            };
        }

        // The request could not be set or fired
        return {
            statusCode: 500,
            message: error.message
        };
    };

    static getAPIData = payload => dispatch => {
        const brandProps = { ...webpack };
        let environment = payload.env;
        let payloadType = payload.dataType;
        let payloadValueKey = null;
        let payloadValue = null;
        let payloadData = null;
        let endpointDetails = {};
        let requestObject = null;
        let dispatchActionNames = {
            start: null,
            success: null,
            error: null
        };

        try {
            switch (payloadType) {
                case PayloadTypes.SAMPLE_DATA:
                    payloadValueKey = "sampleItems";
                    payloadValue = payload.data.sampleIds.join();
                    endpointDetails = brandProps.endpoints.demo1.endpoint1;
                    dispatchActionNames = endpointDetails.dispatchActionNames;
                    requestObject = AxiosRequestObjectFactory.createRequestObject(
                        HTTPVerbs.GET,
                        payloadValue,
                        endpointDetails,
                        environment,
                        payloadData
                    );
                    break;

                case PayloadTypes.SAMPLE_DATA_2:
                    payloadValueKey = "sampleItems";
                    payloadValue = null;
                    endpointDetails = brandProps.endpoints.demo2.endpoint2;
                    dispatchActionNames = endpointDetails.dispatchActionNames;
                    requestObject = AxiosRequestObjectFactory.createRequestObject(
                        HTTPVerbs.GET,
                        payloadValue,
                        endpointDetails,
                        environment,
                        payloadData
                    );
                    break;

                case PayloadTypes.SAMPLE_DATA_3:
                    payloadValueKey = "sampleItems";
                    payloadValue = null;
                    endpointDetails = brandProps.endpoints.demo2.endpoint3;
                    dispatchActionNames = endpointDetails.dispatchActionNames;
                    requestObject = AxiosRequestObjectFactory.createRequestObject(
                        HTTPVerbs.GET,
                        payloadValue,
                        endpointDetails,
                        environment,
                        payloadData
                    );
                    break;

                default:
                    return;
            }
        } catch (error) {
            console.error(error);
            // The request could not be constructed
            dispatch({
                type: ActionTypes.APPLICATION_ERROR,
                value: {
                    statusCode: 500,
                    message: error.message
                }
            });

            return false;
        }

        dispatch({
            type: dispatchActionNames.start,
            value: {
                [payloadValueKey]: payloadValue
            }
        });

        axios
            .request(requestObject)
            .then(response => {
                dispatch({
                    type: dispatchActionNames.success,
                    value: response.data
                });

                return true;
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: dispatchActionNames.error,
                    value: DataService.handleResponseError(error)
                });
            });
    };
}
