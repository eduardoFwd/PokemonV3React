import React from 'react'
import "../styles/Navigation.css"
import { Outlet, Link } from "react-router-dom";
function Navigation() {
  return (
    <>
    <nav className='navigation'>
      <ul className='links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pokedex">pokedex</Link></li>      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Navigation