import React, { useContext } from "react";
import pokemonContext from '../../context/pokemonContext'

const SearchBox =({placeholder, onChangeHandler, className})=> {
  const {search,setSearch} = useContext(pokemonContext);
  console.log(search);
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      value={search}
      onChange={e=>setSearch(e.target.value)}
    />
  );
}

export default SearchBox;