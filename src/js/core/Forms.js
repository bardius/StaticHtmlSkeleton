/* global Foundation, $ */
class Forms {
    constructor(props) {
        this.props = props;
    }

    static init() {
        Forms.initDatepicker();
    }

    static initDatepicker() {
        const $datepickerInputs = $(".datepickerField");

        $datepickerInputs.fdatepicker({
            autoShow: true,
            // initialDate: new Date().toJSON().slice(0, 10),
            disableDblClickSelection: false,
            closeButton: true,
            pickTime: false,
            isInline: false
        });
    }
}

export default Forms;
