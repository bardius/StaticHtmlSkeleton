import React, { Component } from "react";
import { formatContent } from "../../utilities";

const propTypes = {
    copyKeyContext: React.PropTypes.string,
    message: React.PropTypes.string,
    type: React.PropTypes.string,
    classes: React.PropTypes.string
};

const defaultProps = {
    copyKeyContext: "",
    message: "",
    type: "",
    classes: ""
};

export default function Notification(props) {
    const { copyKeyContext, message, type, typeInfo, classes } = props;
    const messageCopyKey =
        copyKeyContext !== "" ? [type, copyKeyContext, message].join(".") : [type, message].join(".");
    const messageCopy = messageCopyKey;
    return (
        <div className={`col-xs-12`}>
            <div className={`notification notification-${type} ${type} ${classes}`}>
                <p dangerouslySetInnerHTML={{ __html: messageCopy }} />
            </div>
        </div>
    );
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
