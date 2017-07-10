import React from 'react';

// Import Components
import NavLink from '../NavLink'
import Search from '../Search/Search';

// Import Style
import styles from './Header.css';

// Import Images
import imgLogo from './img/logo.png';
import imgMenu from './img/menu.png';

export function Header(props, context) {
  return (
    <header className={styles['pAbs'] + " " + styles['fullW'] + " " + styles['pT10']}>
      <div className="col-xs-12">
        <nav className={styles['navbar'] + " " + styles['navbar-default']}>
          <div className="container-fluid">
            <div className={styles['navbar-header']}>
              <img src={imgLogo} className="img-responsive"/>
            </div>
            <div className={"hidden-sm hidden-md hidden-lg " + styles['menuMovil'] + " " + styles['pull-right']}>
              <img src={imgMenu}/>
            </div>
            <div className={"hidden-xs " + styles['menu'] + " " + styles['pull-right']}>
              <a className={styles['btn-ingresos'] + " " + styles['text-upp'] + " " + styles['pull-right']} href="#">iniciar sesión</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
