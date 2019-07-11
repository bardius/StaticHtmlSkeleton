import React, { Component } from "react";

export default class App extends Component {
    static propTypes = {
        children: React.PropTypes.node
    };

    static defaultProps = {
        children: []
    };

    render() {
        return <div>{this.props.children && React.cloneElement(this.props.children, { ...this.state })}</div>;
    }
}
