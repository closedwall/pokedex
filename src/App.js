import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import Loader from './assets/loading.gif';


const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonCount, setPokemonCount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 50;
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const IMGURLBASE = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/`;


  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(URL);
    const { results, count } = await res.json();
    console.log(count);
    setPokemonCount(count);
    const pokedata = results.map((pokeobj, index) => (
      {
        name: pokeobj.name,
        id: index + 1 + offset,
        url: pokeobj.url,
      }
    ));
    setPokemon(prev=>[...prev,...pokedata]);
    setIsLoading(false);
  }

  const fetchMoreData = async() => {
    setOffset(prev=>prev+limit);
  };


  useEffect(() => {
    fetchData();
  }, [offset])


  return (
    <div className="App">
      <h1 className='app-title'>Pokedex</h1>
      <SearchBox className="monster-search-box" placeholder="search monsters" />
      {isLoading ? <img className='loader' height={50} width={50} src={Loader} alt='loader' /> : <CardList fetchMoreData={fetchMoreData} pokemon={pokemon} offset={offset} limit={limit} pokemonCount={pokemonCount} imgUrl={IMGURLBASE} />}
    </div>
  );
}
export default App;
