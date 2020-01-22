import React, {Component} from 'react';

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
            <div>
                {this.props.user ? 
                <div>
                    <h1>Search a Cocktail</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.cocktail} name="cocktail" onChange={this.handleChange}>

                        </input>
                        <button>Submit</button>
                        <h3>{this.props.msg}</h3>
                    </form>
                </div>
                : 
                <h1>Please Login to Search a Cocktail</h1>
                }
            </div>
        );
    }
}

export default SearchCocktailPage;
