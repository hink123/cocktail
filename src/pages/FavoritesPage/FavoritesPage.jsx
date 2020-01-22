import React, {Component} from 'react';

class FavoritesPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('EVENT', e.target.id);
        try {
          this.props.handleDrinkDelete(e.target.id);
          this.props.history.push('/');
        } catch (err) {
          //UPDATE THE ALERT LATER
          alert('Invalid Credentials!');
        }
      }

    render() {
        return (

            <div>
                <h1>Favorites Page</h1>
                {this.props.favDrinks.map((drink, idx) => 
                    <div key={idx} >
                        <h1>
                            {drink.cocktail}
                        </h1>
                        <h3>Cup Type: {drink.glass}</h3>
                        {/* <h3>
                            Ingredients: {drink.ingredients}
                        </h3> */}
                        <h3>Instructions: {drink.instructions}</h3>
                        <img src={drink.image} alt="Drink"></img>
                        <button onClick={this.handleSubmit} id={drink._id} >Delete</button>
                    </div>
                )}
            </div>
        )
    }
}

export default FavoritesPage;