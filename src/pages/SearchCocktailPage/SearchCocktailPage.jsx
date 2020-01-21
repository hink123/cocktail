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

    render() {
        return (
            <div>
                <h1>Search a Cocktail</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.cocktail} name="cocktail" onChange={this.handleChange}>

                    </input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default SearchCocktailPage;
