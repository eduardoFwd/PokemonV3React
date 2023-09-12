import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import {
  AddPokemon,
  getPokemonMockApi,
  getPokemonData,
  deletePokemon,
} from "./functions/Apis";
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsCopy, setPokemonsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [update, setUpdate] = useState(false);
  const pokemonsLimit = 20;
  useEffect(() => {
    const fetchData = async () => {
      try {
        //get favorites
        const favoritePokemons = await getPokemonMockApi();
        setFavorites(favoritePokemons);
        //
        const pokemonData = await getPokemonData({
          currentPage: currentPage,
          pokemonsLimit: pokemonsLimit,
        });
        const pokemonData2 = await getPokemonData({ pokemonsLimit: 1000 });
        setPokemons(pokemonData);
        setPokemonsCopy(pokemonData2);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [update]);
  function updatePage(e) {
    setCurrentPage(e.target.value);
    setUpdate(!update);
  }
  async function redirect(id) {
    window.open(`/pokedex/${id}`);
  }
  async function likePokemon(pokemon) {
    const verify = await AddPokemon(pokemon.id);
    //verify
    if (verify === true) {
      console.log("ya existe");
    } else {
      setUpdate(!update);
      console.log("agregado");
    }
  }
  async function deleteFavorite(id) {
    const verify = await deletePokemon(id);
    console.log(verify);
    //verify
    if (verify === true) {
      console.log("ya existe");
    } else {
      setUpdate(!update);
      console.log("agregado");
    }
  }
  function searchText(e) {
    let regex = new RegExp(e.target.value, "i"); //  'i'  insensible a mayusculas/minusculas
    if (e.target.value !== "") {
      console.log(pokemons);
      const filterData = pokemonsCopy.filter(({ name }) => regex.test(name));
      setPokemons(filterData);
    } else {
      setUpdate(!update);
    }
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
            likePokemon={likePokemon}
            favorites={favorites}
            deleteFavorite={deleteFavorite}
            searchText={searchText}
          ></AppRouter>
        </>
      )}
    </div>
  );
};
export default App;
