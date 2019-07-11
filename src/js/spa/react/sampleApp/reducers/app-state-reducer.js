import * as ActionTypes from "../constants/action-types";
import merge from "lodash/merge";

const initialState = {
    channel: "EMEA",
    env: "prod",
    entrypoint: "/home/part1",
    error: {
        home: null,
        part1: null,
        part2: null
    },
    isLoading: {
        home: false,
        part1: false,
        part2: false
    },
    sampleDataIds: null,
    sampleDataList: null,
    sampleData2List: null,
    sampleData3List: null
};

export default function appStateReducer(state = initialState, action = "") {
    let nextIsLoading;
    let nextError;
    switch (action.type) {
        case ActionTypes.GET_DEMO1_ENDPOINT1_PART1:
            nextIsLoading = merge(state.isLoading, { home: true });
            nextError = merge(state.error, { home: "" });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError
            };

        case ActionTypes.GET_DEMO1_ENDPOINT1_PART1_SUCCESS:
            nextIsLoading = merge(state.isLoading, { home: false });
            nextError = merge(state.error, { home: "" });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError,
                sampleDataList: action.value.sample
            };

        case ActionTypes.GET_DEMO1_ENDPOINT1_PART1_FAILURE:
        case ActionTypes.APPLICATION_ERROR:
            nextIsLoading = merge(state.isLoading, { home: false });
            nextError = merge(state.error, { home: action.value.statusCode });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError,
                sampleDataList: null
            };

        case ActionTypes.GET_DEMO2_ENDPOINT2_PART1:
            nextIsLoading = merge(state.isLoading, { part1: true });
            nextError = merge(state.error, { part1: "" });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError
            };

        case ActionTypes.GET_DEMO2_ENDPOINT2_PART1_SUCCESS:
            nextIsLoading = merge(state.isLoading, { part1: false });
            nextError = merge(state.error, { part1: "" });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError,
                sampleData2List: action.value
            };

        case ActionTypes.GET_DEMO2_ENDPOINT2_PART1_FAILURE:
            nextIsLoading = merge(state.isLoading, { part1: false });
            nextError = merge(state.error, { part1: action.value.statusCode });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError,
                sampleData2List: null
            };
        case ActionTypes.GET_DEMO2_ENDPOINT3_PART2:
            nextIsLoading = merge(state.isLoading, { part2: true });
            nextError = merge(state.error, { part2: "" });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError
            };

        case ActionTypes.GET_DEMO2_ENDPOINT3_PART2_SUCCESS:
            nextIsLoading = merge(state.isLoading, { part2: false });
            nextError = merge(state.error, { part2: "" });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError,
                sampleData3List: action.value
            };

        case ActionTypes.GET_DEMO2_ENDPOINT3_PART2_FAILURE:
            nextIsLoading = merge(state.isLoading, { part2: false });
            nextError = merge(state.error, { part2: action.value.statusCode });
            return {
                ...state,
                isLoading: nextIsLoading,
                error: nextError,
                sampleData3List: null
            };

        case ActionTypes.ARRAY_SORTING_SUCCESS:
            nextError = merge(state.error, { part1: "", part2: "" });
            return {
                ...state,
                ...action.value,
                error: nextError
            };

        case ActionTypes.ARRAY_SORTING_FAILURE:
            nextError = merge(state.error, { part1: "error.sorting.failure", part2: "error.sorting.failure" });
            return {
                ...state,
                error: nextError
            };

        default:
            return state;
    }
}
