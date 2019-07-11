import React from "react";
import uuidv1 from "uuid/v1";
import AppendLayoutContentContainer from "../../containers/append-layout-content-container";

const propTypes = {
    targetSelector: React.PropTypes.string
};

const defaultProps = {
    targetSelector: null
};

export default class AppendLayoutContent extends AppendLayoutContentContainer {
    constructor(props) {
        super(props);

        this.uniqueId = uuidv1();
        this.setAppendElementId(this.uniqueId);
    }

    componentDidMount() {
        this.updateSelf();
    }

    componentDidUpdate() {
        this.updateSelf();
    }

    componentWillUnmount() {
        this.removeAppendElement();
    }

    updateSelf() {
        this.updateAppendElement(
            <div className={`row`} key={this.uniqueId}>
                <div className={`col-xs-12`}>{this.props.children}</div>
            </div>
        );
    }

    render() {
        return null;
    }
}

AppendLayoutContent.propTypes = propTypes;
AppendLayoutContent.defaultProps = defaultProps;
