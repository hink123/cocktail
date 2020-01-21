export function getCocktail(cocktail) {
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail;
    return fetch(endpoint).then(res => res.json());
}