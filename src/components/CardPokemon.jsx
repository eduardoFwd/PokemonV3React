import React from "react";
import { selectType } from "../assets/imports/imports";
function CardPokemon({ pokemons,redirect }) {
  return (
    <>
      {pokemons.map((item, index) => (
        <article className="card" key={index} onClick={()=>redirect(item.id)}>
          <div className="card-img">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="pokemon-info">
            <p>N° {item.id}</p>
            <h5>{item.name}</h5>
            <div className="types">
              {item.types.map((type, index) => (
                <div className={selectType(type)[1]} key={index}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default CardPokemon;
