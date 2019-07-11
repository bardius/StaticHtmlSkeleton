import React from "react";
import { formatContent } from "../../utilities";

const propTypes = {
    format: React.PropTypes.string,
    className: React.PropTypes.string,
    content: React.PropTypes.any,
    title: React.PropTypes.string
};

const defaultProps = {
    format: "default",
    className: null,
    content: null,
    title: null
};

export default function Span(props) {
    return (
        <span
            className={props.className}
            title={props.title}
            dangerouslySetInnerHTML={{ __html: formatContent(props.format, props.content) }}
        />
    );
}

Span.propTypes = propTypes;
Span.defaultProps = defaultProps;
