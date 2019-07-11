export default {
    demo1: {
        endpoint1: {
            method: "get",
            url: "endpoint1/<PAYLOAD_PARAM>/part1",
            mockData: {
                happyJourney: "mocks/happyJourney/endpoint1Part1Data.json",
                500: "mocks/500/endpoint1Part1Data.json"
            },
            headers: {
                "Content-Type": "application/json"
            },
            params: {},
            dispatchActionNames: {
                start: "GET_DEMO1_ENDPOINT1_PART1",
                success: "GET_DEMO1_ENDPOINT1_PART1_SUCCESS",
                error: "GET_DEMO1_ENDPOINT1_PART1_FAILURE"
            }
        }
    }
};
