import React, {Component} from 'react';

class CocktailDetailPage extends Component {
    
    render() {
        let ingredients = [];
        for(let i = 1; i <= 15; i++) {
            let ingrEnding = 'strIngredient' + i.toString();
            let measEnding = 'strMeasure' + i.toString();
            if(this.props.cocktail[ingrEnding]) {
                let output = <li key={i} >{this.props.cocktail[ingrEnding]}: {this.props.cocktail[measEnding]}</li>
                ingredients.push(output);
            }
        }

        return (
            <div>
                <h1>
                    {this.props.cocktail.strDrink}
                </h1>
                <h3>Glass: {this.props.cocktail.strGlass}</h3>
                <h3>
                    Ingredients: {ingredients}
                </h3>
                <h3>Instructions: {this.props.cocktail.strInstructions}</h3>
                <button onClick={this.props.handleNewSearch} >New Search</button>
                <img src={this.props.cocktail.strDrinkThumb} alt="Drink"></img>
            </div>
        )
    }
}

export default CocktailDetailPage;