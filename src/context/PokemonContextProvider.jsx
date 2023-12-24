import React, { useState } from "react";
import pokemonContext from "./pokemonContext";

const PokemonContextProvider =({children})=>{
    const [search, setSearch] = useState("");
    return(
        <pokemonContext.Provider value={{search, setSearch}}>
            {children}
        </pokemonContext.Provider>
    )
}
export {PokemonContextProvider};