import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokemonInfo.css";
import { getPokemon } from "../functions/Apis";
function PokemonInfo() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemon(id);
        setData(pokemonData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div className="loading">Cargando...</div>;
  }
  return (
    <div className="info-container">
      <div className="info-title">
        <h2>{data.name}</h2>
      </div>
      <div className="info">
        <div className="column">
          <div className="info-img">
            <img src={data.img} alt={data.name} />
          </div>
          <div className="info-stats">stats</div>
        </div>
        {/*column 2*/}
        <div className="column">
          <div className="info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            magni minima, alias qui amet similique unde ab ex, nisi reiciendis
            necessitatibus optio dicta praesentium. Est officia culpa possimus
            molestias unde?
          </div>
          <div className="extra-stats">
            <dl >
              {data.stats.map((item, index) => (
                <React.Fragment key={index}>
                  <dt>{Object.keys(item)[0]}</dt>
                  <dd>{Object.values(item)[0]}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;
