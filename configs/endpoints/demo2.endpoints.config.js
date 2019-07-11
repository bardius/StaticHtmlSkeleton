export default {
    demo2: {
        endpoint2: {
            method: "get",
            url: "endpoint2/part1",
            mockData: {
                happyJourney: "mocks/happyJourney/endpoint2Part1Data.json",
                500: "mocks/500/endpoint2Part1Data.json"
            },
            headers: {
                "Content-Type": "application/json"
            },
            params: {},
            dispatchActionNames: {
                start: "GET_DEMO2_ENDPOINT2_PART1",
                success: "GET_DEMO2_ENDPOINT2_PART1_SUCCESS",
                error: "GET_DEMO2_ENDPOINT2_PART1_FAILURE"
            }
        },
        endpoint3: {
            method: "get",
            url: "endpoint3/part2",
            mockData: {
                happyJourney: "mocks/happyJourney/endpoint2Part1Data.json",
                500: "mocks/500/endpoint2Part1Data.json"
            },
            headers: {
                "Content-Type": "application/json"
            },
            params: {},
            dispatchActionNames: {
                start: "GET_DEMO2_ENDPOINT3_PART2",
                success: "GET_DEMO2_ENDPOINT3_PART2_SUCCESS",
                error: "GET_DEMO2_ENDPOINT3_PART2_FAILURE"
            }
        }
    }
};
