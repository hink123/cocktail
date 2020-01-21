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
                <h1>Search a Cocktail</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.cocktail} name="cocktail" onChange={this.handleChange}>

                    </input>
                    {this.props.user && <button>Submit</button>}
                    <h3>{this.props.msg}</h3>
                </form>
            </div>
        );
    }
}

export default SearchCocktailPage;
