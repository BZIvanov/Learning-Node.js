import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import './App.css';
import Header from './Header/Header';

class App extends Component {
  handleChange() {
    
  }
  render() {
    return (
      <div className="App">
         <Header />
         <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route render={() => <h1>Not found!</h1>} />
         </Switch>
      </div>
    );
  }
}

export default App;
