import configureStore from ".././../../../src/js/spa/react/sampleApp/store/configure-store";

jest.mock(".././../../../src/js/spa/react/sampleApp/store/initial-state");
jest.mock(".././../../../src/js/spa/react/sampleApp/reducers/app-state-reducer");
jest.mock(".././../../../src/js/spa/react/sampleApp/reducers/app-header-reducer");

describe("Configure Store Helper", () => {
    beforeEach(() => {});

    it("Should return a redux store", () => {
        const store = configureStore();
        expect(store).toBeDefined();
    });
});
