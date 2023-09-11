import React from "react";
import "../styles/Evolutions.css";
import { selectType } from "../assets/imports/imports";
function Evolutions({ dataEvolutions,redirect }) {
  return (
    <div>
      <h1>Evolutions</h1>
      <div className="evolutions-container">
        {dataEvolutions.map((item, index) => (
          <article className="card" key={index}>
            <div className="card-img" onClick={() => redirect(item.id)}>
              <img  src={item.img} alt={item.name} />
            </div>
            <div className="pokemon-info">
              <p>N°{item.id}</p>
              <h5>{item.name}</h5>
              <div className="types">
                {item.types.map((type, indextype) => (
                  <div className={selectType(type)[1]} key={indextype}>
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Evolutions;
