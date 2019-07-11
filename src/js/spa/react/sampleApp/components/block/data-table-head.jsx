import React from "react";
import noop from "lodash/noop";
import map from "lodash/map";
import SortingButton from "./sorting-button";

const propTypes = {
    hasSorting: React.PropTypes.bool,
    isObjectsArray: React.PropTypes.bool,
    className: React.PropTypes.string,
    dataArrayStateKey: React.PropTypes.string,
    dataTitles: React.PropTypes.array,
    arrayData: React.PropTypes.array,
    dataSortingPrefs: React.PropTypes.array,
    sortingAction: React.PropTypes.func
};

const defaultProps = {
    hasSorting: true,
    isObjectsArray: false,
    className: null,
    dataArrayStateKey: null,
    dataTitles: null,
    arrayData: null,
    dataSortingPrefs: null,
    sortingAction: noop
};

export default function DataTableHeadRow(props) {
    const {
        hasSorting,
        isObjectsArray,
        className,
        dataTitles,
        arrayData,
        dataSortingPrefs,
        sortingAction,
        dataArrayStateKey
    } = props;
    return (
        <thead>
            <tr className={className}>
                {map(dataTitles, (dataTitle, index) => (
                    <th
                        key={`${className}-column-head-${index}`}
                        className={`column-head column-head-${className} column-head-${index}`}
                    >
                        <span dangerouslySetInnerHTML={{ __html: dataTitle }} />
                        {hasSorting && dataSortingPrefs[index] ? (
                            <SortingButton
                                title={`Sort by ${dataTitle}`}
                                arrayName={dataArrayStateKey}
                                arrayData={arrayData}
                                sortByAttribute={dataSortingPrefs[index]}
                                isObjectsArray={isObjectsArray}
                                onClick={sortingAction}
                            />
                        ) : null}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

DataTableHeadRow.propTypes = propTypes;
DataTableHeadRow.defaultProps = defaultProps;
