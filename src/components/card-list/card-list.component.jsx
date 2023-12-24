import React, { useContext } from "react";
import "./card-list.styles.css";
import Card from "./Card";
import pokemonContext from "../../context/pokemonContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../assets/loading.gif";

const CardList = ({ pokemon, imgUrl, offset, limit, pokemonCount,fetchMoreData }) => {
  const { search } = useContext(pokemonContext);

  const filteredPokemon = pokemon.filter(
    (nameobj, index) =>
      nameobj.name.toLowerCase().includes(search.toLowerCase()) ||
      index + 1 == search
  );


  return(
  <InfiniteScroll
    dataLength={limit}
    next={fetchMoreData}
    hasMore={pokemonCount > offset}
    // style={{}}
    loader={
        <img src={Loader} width={60} height={60} alt="loader" />
    }
  >
    <div className="card-list">
      {filteredPokemon.map((nameobj, index) => {
        return (
          <Card
            key={nameobj.id}
            offset={offset}
            id={nameobj.id}
            name={nameobj.name}
            url={nameobj.url}
            imgUrl={`${imgUrl}${nameobj.id}.svg`}
          />
        );
      })}
    </div>
  </InfiniteScroll>
  )
};

export default CardList;
