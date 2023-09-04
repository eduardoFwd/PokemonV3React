import React from "react";
import "../styles/PokedexV2.css";
import CardPokemon from "./CardPokemon";
import Pagination from "./Pagination";

function PokedexV2({ pokemons,pokemonsLimit,updatePage,redirect }) {
  return (
    <div className="main-container">
      <div className="cards-container">
        <CardPokemon pokemons={pokemons} redirect={redirect}/>
      </div>
      <Pagination pokemonsLimit={pokemonsLimit} updatePage={updatePage} />
    </div>
  );
}

export default PokedexV2;
