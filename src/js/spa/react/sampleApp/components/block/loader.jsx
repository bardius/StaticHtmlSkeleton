import React from "react";
import InlineImage from "./inline-image";

const propTypes = {
    text: React.PropTypes.string,
    alt: React.PropTypes.string
};

const defaultProps = {
    text: "Loading...",
    alt: "Loading Icon"
};

export default function Loader(props) {
    const { text, alt } = props;
    return (
        <div className={`row`}>
            <div
                className={`col-xs-12`}
                style={{ paddingBottom: "32px", paddingTop: "32px", textAlign: "center" }}
                aria-busy="true"
            >
                {text}
                <InlineImage
                    alt={`${alt}`}
                    src={`brand/spinner.gif`}
                    className={`loading-spinner`}
                    width={`32`}
                    height={`32`}
                />
            </div>
        </div>
    );
}

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;
