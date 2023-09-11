import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokemonInfo.css";
import fetchEvolutionChain, { getPokemon } from "../functions/Apis";
import Evolutions from "./Evolutions";
import { selectType } from "../assets/imports/imports";
function PokemonInfo({ redirect }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataEvolutions, setDataEvolutions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pokemonData = await getPokemon(id);
        const pokemonEvolutions = await fetchEvolutionChain(id);
        const promises = pokemonEvolutions.evolutions.map((i) => getPokemon(i));
        const evolutionsData = await Promise.all(promises);
        setDataEvolutions(evolutionsData);
        setData({ ...pokemonData, flavorText: pokemonEvolutions.flavorText });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="info-container">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="info-title">
            <h2>{data.name}</h2>
          </div>
          <div className="info">
            <div className="column">
              <div className="info-img">
                <img src={data.img} alt={data.name} />
              </div>
              
            </div>
            {/*column 2*/}
            <div className="column">
              <div className="info-text">{data.flavorText}</div>
              <div className="extra-stats">
                {data.stats.map((item, index) => (
                  <div key={index}>
                    <p>{Object.keys(item)[0]}</p>
                    <span>{Object.values(item)[0]}</span>
                  </div>
                ))}
              </div>
              <div className="types">
                  <h1>Types</h1>
                  {data.types.map((type, indextype) => (
                    <div className={selectType(type)[1]} key={indextype}>
                      {type}
                    </div>
                  ))}
                </div>
            </div>
            <Evolutions dataEvolutions={dataEvolutions} redirect={redirect} />
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonInfo;
