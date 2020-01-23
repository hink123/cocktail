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
        // this.setState(state => ({
        //     cocktail: this.props.cocktail.strDrink,
        //     glass: this.props.cocktail.strGlass,
        //     instructions: this.props.cocktail.strInstructions,
        //     image: this.props.cocktail.strDrinkThumb
        // }), function() {
            this.props.addDrink(this.state);
        // }
        // )
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
            <div className="card">
                <h1>
                    {this.props.cocktail.strDrink}
                </h1>
                <h3>Cup Type: {this.props.cocktail.strGlass}</h3>
                <h3>
                    Ingredients: {this.state.ingredients.map((ingredient, idx) =>
                        <div key={idx} >
                            {ingredient}
                        </div>
                    )}
                </h3>
                <h3>Instructions: {this.props.cocktail.strInstructions}</h3>
                <button onClick={this.props.handleNewSearch} >New Search</button>
                {this.props.user && <button disabled={this.checkValid()} onClick={this.handleFavClick} >Favorite</button>}
                <img src={this.props.cocktail.strDrinkThumb} alt="Drink"></img>
            </div>
        )
    }
}

export default CocktailDetailPage;