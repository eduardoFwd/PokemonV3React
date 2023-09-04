import React from 'react';
import BubblesPokemon from './bubblesPokemon';
import "../styles/Header.css"

const Header = ({ pokemons, isLoading }) => {
  return (
    <header className="header">
      <div className="imgContainer">
        {/* Puedes agregar la imagen de fondo si lo deseas */}
        <div className="bubbles-container">
          {isLoading ? (
            <p>Cargando...</p>
          ) : (
            <>
              {pokemons.slice(0, 10).map((pokemon, index) => (
                <BubblesPokemon url={pokemon.img} key={index}> </BubblesPokemon>
              ))}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
