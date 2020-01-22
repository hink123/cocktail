import React from 'react';

const FavoritesPage = (props) => (
    <div>
        <h1>Favorites Page</h1>
        {props.favDrinks.map((drink, idx) => 
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
            </div>
        )}
    </div>
)

export default FavoritesPage;