import { ActionTypes } from "../constants";
import { sortArrayCompare } from "../utilities";

export default class SortingService {
    static sortArray = sortDataByConfig => dispatch => {
        const defaultSortingConfig = {
            arrayData: null,
            arrayName: null,
            isObjectArray: false,
            sortByAttribute: null,
            sortOrder: "ASC" // ASC | DESC
        };

        const config = {
            ...defaultSortingConfig,
            ...sortDataByConfig
        };

        const isValidConfig = config.isObjectArray
            ? config.arrayData && config.arrayName && config.sortByAttribute
            : config.arrayData && config.arrayName;

        if (!isValidConfig) {
            dispatch({
                type: ActionTypes.ARRAY_SORTING_FAILURE,
                value: {
                    error: "invalid.config"
                }
            });
        }

        try {
            const sortedArray = []
                .concat(config.arrayData)
                .sort(sortArrayCompare(config.sortByAttribute, config.sortOrder));

            dispatch({
                type: ActionTypes.ARRAY_SORTING_SUCCESS,
                value: {
                    [config.arrayName]: sortedArray
                }
            });
        } catch (error) {
            dispatch({
                type: ActionTypes.ARRAY_SORTING_FAILURE,
                value: {
                    error: error
                }
            });
        }
    };
}
