import React from "react";
import InlineImagePattern from "../pattern/inline-image";

const propTypes = {
    alt: React.PropTypes.string,
    src: React.PropTypes.string,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    className: React.PropTypes.string
};

const defaultProps = {
    alt: null,
    src: null,
    width: null,
    height: null,
    className: null
};

export default function InlineImage(props) {
    const { alt, src, width, height, className } = props;
    return <img className={className} src={InlineImagePattern(src)} alt={alt} width={width} height={height} />;
}

InlineImage.propTypes = propTypes;
InlineImage.defaultProps = defaultProps;
