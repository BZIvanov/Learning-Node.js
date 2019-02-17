import React, { Component } from 'react';
import './MainData.css';

class MainData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: this.props.brands
        }  
    }

    render() {
        return (
            <div>Hi</div>
        )
    }
}

export default MainData;
