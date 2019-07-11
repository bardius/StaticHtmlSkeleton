import toUpper from "lodash/toUpper";
import isString from "lodash/isString";

const sortArrayCompare = (key, order = "ASC") => {
    return function(a, b) {
        let comparison = 0;

        if (!key) {
            if (a > b) {
                comparison = 1;
            } else if (b > a) {
                comparison = -1;
            }

            return order === "DESC" ? comparison * -1 : comparison;
        }

        if (!a.hasOwnProperty(key) || !a.hasOwnProperty(key)) {
            return comparison;
        }

        const normalizedValueA = isString(a[key]) ? toUpper(a[key]) : a[key];
        const normalizedValueB = isString(b[key]) ? toUpper(b[key]) : b[key];

        if (normalizedValueA > normalizedValueB) {
            comparison = 1;
        } else if (normalizedValueB > normalizedValueA) {
            comparison = -1;
        }

        return order === "DESC" ? comparison * -1 : comparison;
    };
};

export default sortArrayCompare;
