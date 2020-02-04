import React, {Component} from 'react';
import './CocktailDetailPage.css';

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
        this.props.addDrink(this.state);
    }

    checkValid = () => {
        let result = false;
        this.props.user.favDrinks.forEach((drink) => {
            if(drink.cocktail === this.state.cocktail) {
                result = true;
            }
        })
        return result; 
    }

    componentDidMount() {
        let ingredients = [];
        for(let i = 1; i <= 15; i++) {
            let ingrEnding = 'strIngredient' + i.toString();
            let measEnding = 'strMeasure' + i.toString();
            if(this.props.cocktail[ingrEnding]) {
                let output = `${this.props.cocktail[ingrEnding]}: ${this.props.cocktail[measEnding]}`
                ingredients.push(output);
            }
        }
        this.setState({
            ingredients: ingredients, 
            cocktail: this.props.cocktail.strDrink,
            glass: this.props.cocktail.strGlass,
            instructions: this.props.cocktail.strInstructions,
            image: this.props.cocktail.strDrinkThumb
        });
    }

    render() {

        return (
            <div className="DetailPage-container">
                <h1 className="DetailPage-emphasize" > 
                    {this.props.cocktail.strDrink}
                </h1>
                <div className="DetailPage-content">
                    <div className="DetailPage-text">
                        <h3><span className="DetailPage-emphasize">Cup Type</span>: {this.props.cocktail.strGlass}</h3>
                        <h3>
                        <span className="DetailPage-emphasize">Ingredients</span>: {this.state.ingredients.map((ingredient, idx) =>
                                <div key={idx} >
                                    - {ingredient}
                                </div>
                            )}
                        </h3>
                        <h3><span className="DetailPage-emphasize">Instructions</span>: {this.props.cocktail.strInstructions}</h3>
                        <div className="DetailPage-btn">
                            {this.props.user && <button className="btn btn-default heart" disabled={this.checkValid()} onClick={this.handleFavClick}>
                                &hearts;
                            </button>}
                            <button className="btn btn-default new" onClick={this.props.handleNewSearch}>
                                <span className="DetailPage-emphasize">New Search</span>
                            </button>
                        </div>
                    </div>
                    <img className="DetailPage-image" src={this.props.cocktail.strDrinkThumb} alt="Drink"></img>
                </div>
            </div>
        )
    }
}

export default CocktailDetailPage;