// eslint-disable-next-line no-unused-vars
import { shallow, mount } from "enzyme";
import App from "../../src/js/App";

describe("App", () => {
    let testApp;
    const mockprops = {
        test: true
    };

    beforeEach(() => {
        testApp = new App(mockprops);
    });

    it("Starts App", () => {
        expect(testApp.props.test).toBeTruthy();
    });
});
