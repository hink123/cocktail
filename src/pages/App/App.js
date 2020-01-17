import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Welcome to Cocktail
        </header>

        <div>
          <NavBar />
        </div>

        <Route exact path="/" render={() => (
          <h3>Home Page</h3>
        )}/>

        <Route exact path="/login" render={() => (
          <LoginPage />
        )}/>

        <Route exact path="/signup" render={() => (
          <SignupPage />
        )}/>

      </div>
    );
  }
}

export default App;
