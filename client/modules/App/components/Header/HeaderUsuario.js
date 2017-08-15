import React from 'react';

// Import Components
import NavLink from '../NavLink'

// Import Style
import styles from './HeaderUsuario.css';

// Import Images
import imgLogo from './img/logo.png';
import imgMenu from './img/menu.png';
import imgBuscar from './img/buscar.png';

export function Header(props, context) {
  return (
    <header className={styles['pAbs'] + " " + styles['fullW'] + " " + styles['pT10']}>
      <div className="col-xs-12">
        <nav className={styles['navbar'] + " " + styles['navbar-default']}>
          <div className="container-fluid">
            <div className={styles['navbar-header']}>
              <NavLink className={styles['navbar-brand']} to="/" onlyActiveOnIndex>
                <img src={imgLogo} className="img-responsive" alt="Logo Canal Sin Límite"/>
              </NavLink>
            </div>
            <div className={"hidden-sm hidden-md hidden-lg " + styles['menuMovil'] + " " + styles['pull-right']}>
              <img src={imgMenu}/>
            </div>
            <div className={"hidden-xs menu " + styles['pull-right'] + " " + styles.lista}>
              <ul className={"nav " + styles['navbar'] + " " + styles['fullW']}>
                <li>
                  <img src={imgMenu}/>
                </li>
                <li className={styles.searchMenu}>
                  <input name="" type="text"/>
                  <img src={imgBuscar}/>
                </li>
                <li>
                  <a href="#">Series</a>
                </li>
                <li>
                  <a href="#">Inicio</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
