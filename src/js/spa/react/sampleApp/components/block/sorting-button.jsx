/* global document */
import React, { Component } from "react";
import includes from "lodash/includes";
import toLower from "lodash/toLower";
import noop from "lodash/noop";

const propTypes = {
    arrayData: React.PropTypes.array,
    sortByAttribute: React.PropTypes.string,
    arrayName: React.PropTypes.string,
    isObjectsArray: React.PropTypes.bool,
    title: React.PropTypes.string,
    onClick: React.PropTypes.func,
    sortingButtonSelector: React.PropTypes.string
};

const defaultProps = {
    arrayData: null,
    sortByAttribute: null,
    arrayName: null,
    isObjectsArray: false,
    title: "Sort",
    onClick: noop,
    sortingButtonSelector: "button-sorting"
};

class SortingButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortOrder: "ASC",
            isActive: false
        };

        this.bodyElement = document.getElementsByTagName("body")[0];
        this.sortingButton = null;
        this.sortingButtonSelector = props.sortingButtonSelector;
        this.deactivateOnClickOutside = this.deactivateOnClickOutside.bind(this);
        this.deactivateSorting = this.deactivateSorting.bind(this);
    }

    componentDidMount() {
        this.bodyElement.addEventListener("click", this.deactivateOnClickOutside, false);
    }

    componentWillMount() {
        this.bodyElement.removeEventListener("click", this.deactivateOnClickOutside, false);
    }

    deactivateOnClickOutside(e) {
        const targetClassname = e.target.getAttribute("class");
        const isClickOutsideBtn =
            this.sortingButton &&
            !this.sortingButton.contains(e.target) &&
            targetClassname &&
            includes(targetClassname, this.sortingButtonSelector);

        if (isClickOutsideBtn && this.state.isActive) {
            this.deactivateSorting();
        }
    }

    activateSorting() {
        this.setState({
            sortOrder: this.state.sortOrder === "ASC" ? "DESC" : "ASC",
            isActive: true
        });
    }

    deactivateSorting() {
        this.setState({
            sortOrder: "ASC",
            isActive: false
        });
    }

    render() {
        const { arrayData, sortByAttribute, arrayName, isObjectsArray, title } = this.props;
        const { sortOrder, isActive } = this.state;
        return (
            <button
                role="button"
                ref={node => (this.sortingButton = node)}
                title={`${title} ${sortOrder}`}
                aria-label={`${title} ${sortOrder}`}
                className={`button button-sorting ${isActive ? toLower(`button-sorting-${sortOrder}`) : ""}`}
                onClick={e => {
                    e.preventDefault();
                    this.activateSorting();
                    this.props.onClick({
                        arrayData: arrayData,
                        arrayName: arrayName,
                        isObjectsArray: isObjectsArray,
                        sortByAttribute: sortByAttribute,
                        sortOrder: sortOrder
                    });
                }}
            />
        );
    }
}

SortingButton.propTypes = propTypes;
SortingButton.defaultProps = defaultProps;

export default SortingButton;
