import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import imgSinFiltro from './sin-filtro-digital.png';

export function Footer() {
  return (
    <footer className="text-center">
      <div className={styles['footer-above']}>
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-4">
              <img src={imgSinFiltro} alt="canal sin filtro"/>
              <p className={styles['text-rules']}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea coma voluptas sit aspernatur aut odit aut.
              </p>
              <RedesSociales />
            </div>
            <div className={styles['footer-col'],
            'col-md-4'}>
              <h3></h3>
            </div>
            <div className={styles['footer-col'],
            'col-md-4'}>
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-below']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Copyright &copy; 2016 YERBABUENA FILMS TODOS LOS DERECHOS RESERVADOS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

class RedesSociales extends React.Component {
  render(props) {
    return (
      <ul className="list-inline">
        <li>
          <a href="#" className="btn">
            <span className="glyphicon glyphicon-globe"></span>
          </a>
        </li>
        <li>
          <a href="#" className="btn">
            <span className="glyphicon glyphicon-globe"></span>
          </a>
        </li>
        <li>
          <a href="#" className="btn">
            <span className="glyphicon glyphicon-globe"></span>
          </a>
        </li>
        <li>
          <a href="#" className="btn">
            <span className="glyphicon glyphicon-globe"></span>
          </a>
        </li>
        <li>
          <a href="#" className="btn">
            <span className="glyphicon glyphicon-globe"></span>
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;
