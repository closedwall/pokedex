import React, { useContext } from "react";
import "./card-list.styles.css";
import Card from "./Card";
import pokemonContext from "../../context/pokemonContext";


const CardList = ({pokemon, imgUrl}) => {
  const {search} = useContext(pokemonContext);

  const filteredPokemon = pokemon.filter((nameobj,index) =>
    nameobj.name.toLowerCase().includes(search.toLowerCase()) || index+1 == search
  );

  return <div className="card-list">
    {filteredPokemon.map((nameobj,index)=>{
        return <Card key={nameobj.id} id = {nameobj.id} name={nameobj.name} url={nameobj.url} imgUrl ={`${imgUrl}${nameobj.id}.svg`}/>
    })} 
  </div>;
};

export default CardList;
