import React from "react";
import noop from "lodash/noop";
import map from "lodash/map";
import { DataTableHead, DataTableRow } from "components/block";

const propTypes = {
    hasSorting: React.PropTypes.bool,
    isObjectsArray: React.PropTypes.bool,
    tableIdentifier: React.PropTypes.string,
    dataArrayStateKey: React.PropTypes.string,
    dataTitles: React.PropTypes.array,
    arrayData: React.PropTypes.array,
    dataSortingPrefs: React.PropTypes.array,
    sortingAction: React.PropTypes.func,
    dataFormats: React.PropTypes.array
};

const defaultProps = {
    hasSorting: true,
    isObjectsArray: false,
    tableIdentifier: null,
    dataArrayStateKey: null,
    dataTitles: null,
    arrayData: null,
    dataSortingPrefs: null,
    sortingAction: noop,
    dataFormats: null
};

export default function DataTable(props) {
    const {
        hasSorting,
        isObjectsArray,
        tableIdentifier,
        dataArrayStateKey,
        dataTitles,
        arrayData,
        dataSortingPrefs,
        sortingAction,
        dataFormats
    } = props;
    return (
        <table className={`table-${tableIdentifier}`}>
            <DataTableHead
                hasSorting
                isObjectsArray
                className={tableIdentifier}
                dataArrayStateKey={dataArrayStateKey}
                dataTitles={dataTitles}
                arrayData={arrayData}
                dataSortingPrefs={dataSortingPrefs}
                sortingAction={sortingAction}
            />
            {map(arrayData, (arrayRowData, i) => (
                <DataTableRow
                    key={`${tableIdentifier}-table-row-${i}`}
                    className={tableIdentifier}
                    dataFormats={dataFormats}
                    arrayRowData={arrayRowData}
                    rowIndex={i}
                />
            ))}
        </table>
    );
}

DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;
