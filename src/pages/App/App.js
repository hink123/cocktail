import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import cocktailService from '../../utils/cocktailService';
import SearchCocktailPage from '../SearchCocktailPage/SearchCocktailPage';
import CocktailDetailPage from '../CocktailDetailPage/CocktailDetailPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
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
    searchResult = searchResult.drinks[0];
    this.setState({cocktail: searchResult});
  }

  handleNewSearch = () => {
    this.setState({cocktail: null, msg: ''});
  }

  addDrink = async (cocktailData) => {
    let user = await cocktailService.create(cocktailData);
    this.setState(state => ({
      user: user
    }), () => this.props.history.push('/'));
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
              <SearchCocktailPage 
                user={this.state.user} 
                msg={this.state.msg} 
                handleCocktailSearch={this.handleCocktailSearch}
              />
              :
              <CocktailDetailPage 
                user={this.state.user} 
                cocktail={this.state.cocktail} 
                handleNewSearch={this.handleNewSearch}
                addDrink={this.addDrink}
              />
          )}/>

          <Route exact path="/login" render={({history}) => (
            <LoginPage history={history} handleLogin={this.handleSignupOrLogin} />
          )}/>

          <Route exact path="/signup" render={({history}) => 
            <SignupPage history={history} handleSignup={this.handleSignupOrLogin} />
          }/>
          
          <Route exact path="/favorites" render={() => (
            <FavoritesPage favDrinks={this.state.user.favDrinks} />
          )}/>
        </Switch>

      </div>
    );
  }
}

export default App;
