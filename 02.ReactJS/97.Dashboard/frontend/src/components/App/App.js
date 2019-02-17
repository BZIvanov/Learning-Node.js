import React, { Component } from 'react';
import YearsList from '../YearsList/YearsList';
import MainData from '../MainData/MainData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      selectedYear: 2018,
      hasFetched: false
    }
  }

  componentWillMount() {
    fetch('http://localhost:9999/feed/brand/all')
      .then(response => response.json())
      .then(data => {
        this.setState({
          brands: data.brands,
          hasFetched: true
        });
      });
  }

  getAllUniqueYearsSorted() {
    let result = [];
    this.state.brands.map(x => x.year).forEach(y => {
      if (!result.includes(y)) {
        result.push(y);
      }
    });
    result = result.sort((a, b) => {
      return a - b;
    })
    return result;
  }

  hoverEvent(year) {
    this.setState({
      selectedYear: year
    });
  }

  render() {
    return (
      <div className="App">
        <div className="years-field">
          {this.getAllUniqueYearsSorted().map((el, idx) => (
            <YearsList year={el} key={idx} hoverEvent={this.hoverEvent.bind(this)} />
          ))}
        </div>

        <div className="main-field">
            <MainData brands={this.state.brands} />
        </div>
      </div>
    );
  }
}

export default App;
