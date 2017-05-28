import React from 'react';
//import { Card, CardImg, CardText, CardBlock,
//  CardTitle, CardSubtitle, Button } from 'reactstrap';
// Import Style
import styles from './Header.css';

import imgLogo from './logo.png';

export function Header(props, context) {
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom affix">
        <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className={styles['navbar-brand']} href="#page-top"><img src={imgLogo} alt="Logo Canal Sin Límite" /></a>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className={'collapse navbar-collapse ' + styles.enlaces} id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden active">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll">
                        <a href="#ingresar">Iniciar Sesión</a>
                    </li>
                    <li className={'page-scroll ' + styles['boton-oscuro']}>
                        <a href="#registro">Registro</a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>
  );
}

export default Header;
