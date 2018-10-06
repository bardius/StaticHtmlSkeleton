// eslint-disable-next-line no-unused-vars
import { shallow, mount } from "enzyme";
import Forms from "../../../src/js/core/Forms";

describe("Forms", () => {
    const mockFdatepicker = () => true;

    beforeEach(() => {
        $.fn.fdatepicker = mockFdatepicker;
    });

    it("Starts Forms UI", () => {
        expect(Forms.init).toBeTruthy();
    });
});
