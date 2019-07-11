import React from "react";
import map from "lodash/map";
import DataTableColumn from "./data-table-column";

const propTypes = {
    className: React.PropTypes.string,
    dataFormats: React.PropTypes.array,
    arrayRowData: React.PropTypes.any,
    rowIndex: React.PropTypes.number
};

const defaultProps = {
    className: null,
    dataFormats: null,
    arrayRowData: null,
    rowIndex: 0
};

export default function DataTableRow(props) {
    const { className, dataFormats, arrayRowData, rowIndex } = props;
    return (
        <tr className={`row row-${className} row-${rowIndex}`}>
            {map(Object.keys(arrayRowData), (key, i) => (
                <DataTableColumn
                    key={`${className}-column-${rowIndex}-${i}`}
                    className={`column column-${className} column-${i}`}
                    format={dataFormats[i] || "default"}
                    content={arrayRowData[key]}
                />
            ))}
        </tr>
    );
}

DataTableRow.propTypes = propTypes;
DataTableRow.defaultProps = defaultProps;
