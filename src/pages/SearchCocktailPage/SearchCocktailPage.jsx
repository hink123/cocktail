import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SearchCocktailPage.css';

class SearchCocktailPage extends Component {
    state = {
        cocktail: ''
    }

    handleChange = (e) => {
        this.setState({
            cocktail: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleCocktailSearch(this.state.cocktail);
    }

    //TODO fix the authentication to search
    render() {
        return (
            <div className="Search-container">
                {this.props.user ? 
                <div>
                    <h1 className="Search-title">Search a Cocktail</h1>
                    <form className="Search-form" onSubmit={this.handleSubmit}>
                        <input className="Search-input" value={this.state.cocktail} name="cocktail" onChange={this.handleChange}>

                        </input>
                        <button className="btn btn-default submit">Submit</button>
                        <h3 className="invalid">{this.props.msg}</h3>
                    </form>
                    <button onClick={this.props.handleRandomSearch} className="btn btn-default submit">Suprise Me!</button>
                </div>
                : 
                <div>
                    <h1 className="Search-welcome">Welcome to Cocktail</h1>
                    <h3>Please Login to Find a Drink</h3>
                    <Link className="btn btn-default login" to='/login'>Login</Link>
                </div>
                }
            </div>
        );
    }
}

export default SearchCocktailPage;
