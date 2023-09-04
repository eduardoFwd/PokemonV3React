import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokemonInfo.css";
import { getPokemon } from "../functions/Apis";
function PokemonInfo() {
  const { id } = useParams();
  const [data,setData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemon(id);
        setData(pokemonData)
        console.log(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="info-container">
      <div className="info">
        <div className="info-title">
          <h2>{data.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;
