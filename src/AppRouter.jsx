import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import PokedexV2 from "./components/PokedexV2";
import PokemonInfo from "./components/PokemonInfo";
function AppRouter({ pokemons, updatePage, pokemonsLimit,redirect,likePokemon,favorites,deleteFavorite,searchText}) {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/pokedex"
          element={
            <PokedexV2
              pokemons={pokemons}
              updatePage={updatePage}
              pokemonsLimit={pokemonsLimit}
              redirect={redirect}
              likePokemon={likePokemon}
              favorites={favorites}
              deleteFavorite={deleteFavorite}
              searchText={searchText}
            />
          }
        />
        <Route path="/pokedex/:id" element={<PokemonInfo redirect={redirect}/>}/>
      </Routes>
    </div>
  );
}


export default AppRouter;
