// eslint-disable-next-line no-unused-vars
import { shallow, mount } from "enzyme";
import FoundationConfig from "../../../src/js/core/FoundationConfig";

describe("Forms", () => {
    beforeEach(() => {});

    it("Starts Foundation Config", () => {
        expect(FoundationConfig.setConfig).toBeTruthy();
    });
});
