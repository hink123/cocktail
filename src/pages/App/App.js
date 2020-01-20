import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Welcome to Cocktail
        </header>

        <div>
          <NavBar user={this.state.user} />
        </div>

        <Route exact path="/" render={() => (
          <h3>Home Page</h3>
        )}/>

        <Route exact path="/login" render={() => (
          <LoginPage />
        )}/>

        <Route exact path="/signup" render={({history}) => 
          <SignupPage history={history} />
        }/>

      </div>
    );
  }
}

export default App;
