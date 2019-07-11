/* global webpack */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import map from "lodash/map";
import * as Actions from "../actions";
import PayloadTypes from "../constants/payload-types";
import { DataService } from "../services";
import { Loader, Notification } from "../components/block";

const propTypes = {
    actions: React.PropTypes.object,
    channel: React.PropTypes.string,
    children: React.PropTypes.object,
    copydeck: React.PropTypes.object,
    env: React.PropTypes.string,
    error: React.PropTypes.object,
    isLoading: React.PropTypes.object,
    sampleDataIds: React.PropTypes.array,
    sampleDataList: React.PropTypes.array
};

const defaultProps = {
    actions: {
        getAPIData: x => x
    },
    channel: undefined,
    children: undefined,
    copydeck: {
        title: "Test Title",
        body: "Test body"
    },
    env: undefined,
    error: undefined,
    isLoading: undefined,
    sampleDataIds: ["test1", "test2", "test3"],
    sampleDataList: undefined
};

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const fetchDataActions = [];

        if (!this.props.sampleDataList && this.props.sampleDataIds) {
            fetchDataActions.push(
                DataService.createFetchDataAction(
                    this.props.actions.getAPIData,
                    { sampleIds: this.props.sampleDataIds },
                    PayloadTypes.SAMPLE_DATA,
                    this.props.env
                )
            );
        }

        if (fetchDataActions.length > 0) {
            DataService.getAPIDataFromActions(fetchDataActions);
        }
    }

    componentDidMount() {}

    componentDidUpdate() {}

    render() {
        const { children, copydeck, error, isLoading, sampleDataList } = this.props;
        const { brandName } = webpack;
        const hasError = error && !!error.home;

        return (
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-xs-12`}>
                        <h1>
                            {copydeck.title} {brandName}
                        </h1>
                        <p>{copydeck.body}</p>

                        {!hasError && sampleDataList ? (
                            <ul>
                                {map(sampleDataList, (sampleListItem, index) => (
                                    <li key={`sampleListItem-${index}`}>{sampleListItem}</li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </div>

                {isLoading && isLoading.home ? <Loader /> : null}

                {hasError ? (
                    <div className={`row`}>
                        <Notification
                            copyKeyContext={`home.api`}
                            message={`${error.home}`}
                            type={`error`}
                            classes={`alert alert-error`}
                        />
                    </div>
                ) : null}

                {children}
            </div>
        );
    }
}

Home.defaultProps = defaultProps;
Home.propTypes = propTypes;

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

const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default ConnectedHome;
