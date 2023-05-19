import React from 'react';
import { Link } from 'react-router-dom';
import "../header/Header.css"
import "../css/Style.css"

const Header = () => {
  return (
    <header className='header'>
      <img src="/assets/img/Museo.png"/>
      <h3 className='tittle'>Museo Alquitran</h3>
      <div className="nav-container">
        <nav>
          <ul className='header-list'>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/helicopters">Helicópteros</Link>
            </li>
            <li>
              <Link to="/pilots">Pilotos</Link>
            </li>
            <li>
              <Link to="/comments">Comentarios</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
