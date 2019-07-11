/* global document */
import React, { Component } from "react";
import { render } from "react-dom";
import forEach from "lodash/forEach";
import keys from "lodash/keys";

const propTypes = {
    targetSelector: React.PropTypes.string
};

const defaultProps = {
    targetSelector: "spa-append-layout-content-target"
};

const appendedElements = {};

function getAppendedElements() {
    const elements = [];
    const elementsKeys = keys(appendedElements);
    const elementsKeysLength = elementsKeys.length;

    if (elementsKeysLength > 0) {
        forEach(elementsKeys, key => {
            elements.push(appendedElements[key]);
        });
    }
    return elements;
}

export default class AppendLayoutContentContainer extends Component {
    constructor(props) {
        super(props);
        this.appendElementContainer = document.querySelector(props.targetSelector);
    }

    setAppendElementId(id) {
        this.appendElementId = id;
    }

    updateAppendElement(content) {
        appendedElements[this.appendElementId] = content;
        this.updateAppendElements();
    }

    updateAppendElements() {
        render(
            <div className={`app`}>
                <div className={`container-fluid`}>{getAppendedElements()}</div>
            </div>
        );
    }

    removeAppendElement() {
        delete appendedElements[this.appendElementId];
        this.updateAppendElements();
    }
}

AppendLayoutContentContainer.propTypes = propTypes;
AppendLayoutContentContainer.defaultProps = defaultProps;
