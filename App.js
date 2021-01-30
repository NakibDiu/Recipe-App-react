import { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipes';

function App() {

  const APP_ID = "2221fda5";
  const APP_KEY = "6e34294ef6eee364e4dc00e251c98313";

  const [items, setRecipes] = useState([])
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('food');


  useEffect(() => {
    getRecipe();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }



  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" id="input" placeholder="Search Recipe.." value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit" onClick={getSearch}>Search</button>
      </form>
      <div className="recipe">
        {items.map(item => (
          <Recipe
            key={item.recipe.calories}
            title={item.recipe.label}
            calory={item.recipe.calories}
            img={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
