/* global webpack */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import map from "lodash/map";
import * as Actions from "../actions";
import { PayloadTypes } from "../constants";
import { DataService } from "../services";
import { Loader, Notification, DataTableHead, DataTableRow } from "../components/block";

const propTypes = {
    actions: React.PropTypes.object,
    channel: React.PropTypes.string,
    copydeck: React.PropTypes.object,
    env: React.PropTypes.string,
    error: React.PropTypes.object,
    isLoading: React.PropTypes.object,
    sampleDataIds: React.PropTypes.array,
    sampleData3List: React.PropTypes.array
};

const defaultProps = {
    actions: {
        getAPIData: x => x,
        sortDataArray: x => x
    },
    channel: undefined,
    copydeck: {
        title: "Test Title",
        body: "Test body",
        table: {
            headings: ["Name 2", "Surname 2"],
            formats: ["plain", "plain"]
        }
    },
    env: undefined,
    error: undefined,
    isLoading: undefined,
    sampleDataIds: undefined,
    sampleData3List: undefined
};

class HomePart2 extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const fetchDataActions = [];

        if (!this.props.sampleData3List) {
            fetchDataActions.push(
                DataService.createFetchDataAction(
                    this.props.actions.getAPIData,
                    this.props.sampleDataIds,
                    PayloadTypes.SAMPLE_DATA_3,
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
        const { actions, copydeck, error, isLoading, sampleData3List } = this.props;
        const { brandName } = webpack;
        const hasError = error && !!error.part2;

        return (
            <div className={`row`}>
                <div className={`col-xs-12`}>
                    <div className={`row`}>
                        <div className={`col-xs-12`}>
                            <h2>
                                {copydeck.title} {brandName}
                            </h2>
                            <p>{copydeck.body}</p>
                        </div>
                    </div>

                    {isLoading && isLoading.part1 ? <Loader /> : null}

                    {hasError ? (
                        <div className={`row`}>
                            <Notification
                                copyKeyContext={`home.api`}
                                message={`${error.part2}`}
                                type={`error`}
                                classes={`alert alert-error`}
                            />
                        </div>
                    ) : null}

                    <div className={`row`}>
                        <div className={`col-xs-12`}>
                            {!hasError && sampleData3List ? (
                                <table className={`table table-sampleTable2`}>
                                    <DataTableHead
                                        hasSorting
                                        isObjectsArray
                                        className={`sampleTable2`}
                                        dataArrayStateKey={`sampleData3List`}
                                        dataTitles={copydeck.table.headings}
                                        arrayData={sampleData3List}
                                        dataSortingPrefs={Object.keys(sampleData3List[0])}
                                        sortingAction={actions.sortDataArray}
                                    />

                                    <tbody>
                                        {map(sampleData3List, (sampleListItem, index) => (
                                            <DataTableRow
                                                key={`sampleList2Item-row-${index}`}
                                                className={`sampleTable2`}
                                                dataFormats={copydeck.table.formats}
                                                arrayRowData={sampleListItem}
                                                rowIndex={index}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomePart2.defaultProps = defaultProps;
HomePart2.propTypes = propTypes;

const mapStateToProps = function(state) {
    return state.appStateReducer;
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            getAPIData: Actions.getAPIData,
            sortDataArray: Actions.sortDataArray
        },
        dispatch
    )
});

const ConnectedHomePart2 = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePart2);

export default ConnectedHomePart2;
