import React from "react";
import { formatContent } from "../../utilities";

const propTypes = {
    format: React.PropTypes.string,
    content: React.PropTypes.any
};

const defaultProps = {
    format: "default",
    content: null
};

export default function DataTableColumn(props) {
    return <td dangerouslySetInnerHTML={{ __html: formatContent(props.format, props.content) }} />;
}

DataTableColumn.propTypes = propTypes;
DataTableColumn.defaultProps = defaultProps;
