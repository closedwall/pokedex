import React from "react";
import "./card-list.styles.css";
import Card from "./Card";
const CardList = ({pokemon, imgUrl}) => {
  
  return <div className="card-list">
    {pokemon.map((nameobj,index)=>(
         <Card name={nameobj.name} url={nameobj.url} imgUrl ={`${imgUrl}${index+1}.svg`}/>
      ))} 
  </div>;
};

export default CardList;
