import appState from ".././../../../src/js/spa/react/sampleApp/reducers/app-state-reducer";
import { ActionTypes } from ".././../../../src/js/spa/react/sampleApp/constants";

describe("App State reducer", () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            env: "prod",
            isLoading: false,
            sample: ""
        };
    });

    describe("Receive a random event", () => {
        it("Should return unchanged state", () => {
            const nextState = appState();
            expect(nextState).toEqual(initialState);
        });
    });

    describe("Receive a api call event", () => {
        it("Should return altered state", () => {
            const nextState = appState(initialState, {
                type: ActionTypes.GET_DEMO_ENDPOINT1,
                value: null
            });
            expect(nextState.isLoading).toEqual(true);
        });
    });
});
