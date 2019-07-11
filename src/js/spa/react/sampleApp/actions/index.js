import { ActionTypes } from "../constants";
import { DataService, SortingService } from "../services";

const getAPIData = requestConfig => DataService.getAPIData(requestConfig);
const sortDataArray = sortDataConfig => SortingService.sortArray(sortDataConfig);

export default {
    getAPIData,
    sortDataArray
};
