import React from 'react'
import searchIcon from "../assets/icons/search.svg"
import "../styles/Search.css"
function Search({searchText}) {
  return (
    <div className='search'>
        <label htmlFor="search"><img className='imgsearch' src={searchIcon} /></label>
        <input id='search' type="text" placeholder='Search Pokemons' onChange={searchText} />
    </div>
  )
}

export default Search