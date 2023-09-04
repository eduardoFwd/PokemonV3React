import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import { getPokemon, getPokemonData } from "./functions/Apis";
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setupdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const pokemonsLimit = 30;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemonData(currentPage, pokemonsLimit);
        setPokemons(pokemonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);
  function updatePage(e) {
    setCurrentPage(e.target.value);
  }
  async function redirect(id) {
    const data=await getPokemon(id)

    window.open(`/pokedex/${id}`);
  }
  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Header pokemons={pokemons}></Header>
          <AppRouter
            pokemons={pokemons}
            updatePage={updatePage}
            pokemonsLimit={pokemonsLimit}
            redirect={redirect}
          ></AppRouter>
        </>
      )}
    </div>
  );
};
export default App;
