import contentDateFormat from "../components/pattern";

const formatContent = (format, content) => {
    switch (format) {
        case "date":
            return contentDateFormat(content);

        default:
            return content;
    }
};

export default formatContent;
