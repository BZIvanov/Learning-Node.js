import React, { Component } from 'react';
import './YearsList.css';

class YearList extends Component {
    render() {
        return (
            <div className="yearBox" onMouseOver={() => this.props.hoverEvent(this.props.year)}>{this.props.year}</div>
        )
    }
}

export default YearList;
