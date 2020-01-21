import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import SearchCocktailPage from '../SearchCocktailPage/SearchCocktailPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Welcome to Cocktail
        </header>

        <div>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        </div>

        <Route exact path="/" render={() => (
          <SearchCocktailPage />
        )}/>

        <Route exact path="/login" render={({history}) => (
          <LoginPage history={history} handleLogin={this.handleSignupOrLogin} />
        )}/>

        <Route exact path="/signup" render={({history}) => 
          <SignupPage history={history} handleSignup={this.handleSignupOrLogin} />
        }/>

      </div>
    );
  }
}

export default App;
