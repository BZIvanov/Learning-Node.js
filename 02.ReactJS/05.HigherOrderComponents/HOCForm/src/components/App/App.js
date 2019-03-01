import React, { Component } from 'react'
import './App.css';
import Article from '../Article/Article';
import RegisterForm from '../RegisterForm/RegisterForm';
import Navigation from '../Navigation/Navigation';
import warningWrapper from '../../hocs/WarningWrapper';
import errorHandlingWrapper from '../../hocs/ErrorHandlingWrapper';
import BindingForm from '../BindingForm/BindingForm';

const ArticleWithWarning = warningWrapper(errorHandlingWrapper(Article));
const NavigationWithWarning = warningWrapper(errorHandlingWrapper(Navigation));
const RegisterFormWithWarning = warningWrapper(errorHandlingWrapper(RegisterForm));

class App extends Component {
  onSubmit(e, data) {
    e.preventDefault();
    console.log(data);
  }

  render() {
    return (
      <section className="App">
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Login form</h1>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
        </BindingForm>
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Create movie form</h1>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="description" placeholder="description" />
          <input type="text" name="posterUrl" placeholder="posterUrl" />
        </BindingForm>

        <ArticleWithWarning />
        <NavigationWithWarning />
        <RegisterFormWithWarning />
      </section>
    );
  }
}

export default App;
