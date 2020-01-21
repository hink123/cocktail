import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import SearchCocktailPage from '../SearchCocktailPage/SearchCocktailPage';
import CocktailDetailPage from '../CocktailDetailPage/CocktailDetailPage';
import {getCocktail} from '../../services/cocktail-api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      cocktail: null,
      msg: ''
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleCocktailSearch = async (cocktail) => {
    let searchResult = await getCocktail(cocktail);
    if(!searchResult.drinks) {
      return this.setState({msg: 'Invalid Cocktail'})
    }
    console.log('SEARCH RESULT: ', searchResult);
    searchResult = searchResult.drinks[0];
    this.setState({cocktail: searchResult});
  }

  handleNewSearch = () => {
    this.setState({cocktail: null, msg: ''});
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
        <Switch>
          <Route exact path="/" render={() => (
              !this.state.cocktail ?
              <SearchCocktailPage msg={this.state.msg} handleCocktailSearch={this.handleCocktailSearch}/>
              :
              <CocktailDetailPage 
                user={this.state.user} 
                cocktail={this.state.cocktail} 
                handleNewSearch={this.handleNewSearch}
              />
          )}/>

          <Route exact path="/login" render={({history}) => (
            <LoginPage history={history} handleLogin={this.handleSignupOrLogin} />
          )}/>

          <Route exact path="/signup" render={({history}) => 
            <SignupPage history={history} handleSignup={this.handleSignupOrLogin} />
          }/>
        </Switch>

      </div>
    );
  }
}

export default App;
