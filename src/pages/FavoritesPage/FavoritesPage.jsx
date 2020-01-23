import React, {Component} from 'react';
import './FavoritesPage.css';

class FavoritesPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('EVENT', e.target.id);
        try {
          this.props.handleDrinkDelete(e.target.id);
        } catch (err) {
          //UPDATE THE ALERT LATER
          alert('Invalid Credentials!');
        }
      }

    render() {
        return (
            <div>
                <h1>Favorites Page</h1>
                <div className="FavoritesPage-scroll">
                    {this.props.favDrinks.map((drink, idx) => 
                        <div key={idx} className="FavoritesPage-container">
                            <h1>
                                {drink.cocktail}
                            </h1>
                            <div className="FavoritePage-content">
                                <div className="FavoritePage-text">
                                    <h3>Cup Type: {drink.glass}</h3>
                                    <h3>
                                        Ingredients: {drink.ingredients.map((ingredient, idx) =>
                                                <div key={idx} >
                                                    {ingredient}
                                                </div>
                                        )}
                                    </h3>
                                    <h3>Instructions: {drink.instructions}</h3>
                                    <button className="btn btn-default delete" onClick={this.handleSubmit} id={drink._id} >Remove</button>
                                </div>
                                <img src={drink.image} alt="Drink" className="FavoritesPage-image"></img>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default FavoritesPage;