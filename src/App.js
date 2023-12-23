import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const URL = `https://pokeapi.co/api/v2/pokemon`;
  const IMGURLBASE =`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/` 

  const fetchData = async () => {
    const res = await fetch(URL);
    const {results} = await res.json();
    setPokemon(results)
    // console.log(results);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Pokedex</h1>
      <SearchBox className="monster-search-box" placeholder="search monsters"  />
      <CardList pokemon={pokemon} imgUrl ={IMGURLBASE} />
    </div>
  );
}
export default App;
