import moment from "moment";

const formatDate = (date, isUnixTimestamp) => {
    try {
        if (!date) {
            return "";
        }

        if (isUnixTimestamp) {
            return moment.unix(date).format("D MMMM YYYY");
        }
        return moment(date).format("D MMMM YYYY");
    } catch (error) {
        return date;
    }
};

const contentDateFormat = date => formatDate(date);

export default contentDateFormat;
