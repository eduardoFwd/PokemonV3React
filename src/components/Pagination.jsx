import React from "react";
import "../styles/Pagination.css";
const totalPokemons = 500;

function Pagination({ pokemonsLimit, updatePage }) {
  function createButtons() {
    const buttons = [];
    const totalButtons = Math.ceil(totalPokemons / pokemonsLimit);
    for (let i = 0; i < totalButtons; i++) {
      buttons.push(
        <button
          className="btnPagination"
          key={i}
          value={i}
          onClick={updatePage}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  }

  return <div className="container-buttons">{createButtons()}</div>;
}

export default Pagination;
//
