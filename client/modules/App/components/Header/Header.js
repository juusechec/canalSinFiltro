import React from 'react';

// Import Components
import NavLink from '../NavLink'
import Search from '../Search/Search';

// Import Style
import styles from './Header.css';

// Import Images
import imgLogo from './logo.png';

export function Header(props, context) {
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom affix">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <NavLink className={styles['navbar-brand']} to="/" onlyActiveOnIndex>
            <img src={imgLogo} alt="Logo Canal Sin Límite"/>
          </NavLink>
        </div>
        <div>
        <Search />
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className={"collapse navbar-collapse " + styles.enlaces} id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="hidden active">
              <a href="#page-top"></a>
            </li>
            <li className="page-scroll">
              <NavLink to="/ingresar">Iniciar Sesión</NavLink>
            </li>
            <li className={"page-scroll " + styles['boton-oscuro']}>
              <NavLink to="/registro">Registro</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
