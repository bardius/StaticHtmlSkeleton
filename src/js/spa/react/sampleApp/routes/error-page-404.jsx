/* global webpack */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import noop from "lodash/noop";
import * as Actions from "../actions";

const propTypes = {
    actions: React.PropTypes.object,
    channel: React.PropTypes.string,
    env: React.PropTypes.string,
    error: React.PropTypes.array,
    isLoading: React.PropTypes.bool,
    copydeck: React.PropTypes.object
};

const defaultProps = {
    actions: {
        getAPIData: noop
    },
    channel: "EMEA",
    env: "prod",
    error: null,
    isLoading: false,
    copydeck: {
        title: "Test Title 404",
        body: "Test body 404"
    }
};

class ErrorPage404 extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    componentDidMount() {}

    componentDidUpdate() {}

    render() {
        const { copydeck } = this.props;
        const { brandName } = webpack;

        return (
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-xs-12`}>
                        <h1>
                            {copydeck.title} {brandName}
                        </h1>
                        <p>{copydeck.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

ErrorPage404.defaultProps = defaultProps;
ErrorPage404.propTypes = propTypes;

const mapStateToProps = function(state) {
    return state.appStateReducer;
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            getAPIData: Actions.getAPIData
        },
        dispatch
    )
});

const ConnectedErrorPage404 = connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorPage404);

export default ConnectedErrorPage404;
