import React, {Component} from 'react';

class CocktailDetailPage extends Component {
    
    state = {
        cocktail: '',
        glass: '',
        instructions: '',
        ingredients: [],
        image: ''
    }

    handleFavClick = (e) => {
        e.preventDefault();
        this.setState(state => ({
            cocktail: this.props.cocktail.strDrink,
            glass: this.props.cocktail.strGlass,
            instructions: this.props.cocktail.strInstructions,
            image: this.props.cocktail.strDrinkThumb
        }), function() {
            this.props.addDrink(this.state);
        }
        )}

    componentDidMount() {
        let ingredients = [];
        for(let i = 1; i <= 15; i++) {
            let ingrEnding = 'strIngredient' + i.toString();
            let measEnding = 'strMeasure' + i.toString();
            if(this.props.cocktail[ingrEnding]) {
                let output = <li key={i} >{this.props.cocktail[ingrEnding]}: {this.props.cocktail[measEnding]}</li>
                ingredients.push(output);
            }
        }
        this.setState({ingredients: ingredients});
    }

    render() {

        return (
            <div>
                <h1>
                    {this.props.cocktail.strDrink}
                </h1>
                <h3>Cup Type: {this.props.cocktail.strGlass}</h3>
                <h3>
                    Ingredients: {this.state.ingredients}
                </h3>
                <h3>Instructions: {this.props.cocktail.strInstructions}</h3>
                <button onClick={this.props.handleNewSearch} >New Search</button>
                {this.props.user && <button onClick={this.handleFavClick} >Favorite</button>}
                <img src={this.props.cocktail.strDrinkThumb} alt="Drink"></img>
            </div>
        )
    }
}

export default CocktailDetailPage;