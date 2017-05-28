import React from 'react';
//import { Card, CardImg, CardText, CardBlock,
//  CardTitle, CardSubtitle, Button } from 'reactstrap';
// Import Style
//import styles from './Header.css';

export function Header(props, context) {
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom affix">
        <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll active">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>
  );
}

export default Header;
