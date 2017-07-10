import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import imgSinFiltro from './img/logoColor.png';
import imgFacebook from './img/facebook.png';
import imgTwitter from './img/twitter.png';
import imgInstagram from './img/instagram.png';

export function Footer() {
  return (
    <footer>
      <div className={"col-md-12 " + styles.footer}>
        <div className={styles['main-footer']}>
          <div className={"col-md-7 " + styles.descripFooter}>
            <img src={imgSinFiltro} />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
              magna sit amet mauris aliquet malesuada sit amet at erat. Nunc ex
              turpis, tincidunt eu feugiat vitae, porttitor ut dolor
            </div>
          </div>
          <div className={"col-md-3 " + styles['acercaDe-footer']}>
            <div>
              <a href="#">Acercas de SIN FILTRO DIGITAL</a>
            </div>
            <div>
              <a href="#">Prensa y Medios</a>
            </div>
            <div>
              <a href="#">Politicas de privasidad</a>
            </div>
            <div>
              <a href="#">Contáctanon</a>
            </div>
          </div>
          <RedesSociales />
        </div>
        <div className={"col-md-12 " + styles.refer}>© SIN FILTRO DIGITAL. 2017</div>
      </div>
    </footer>
  );
}

class RedesSociales extends React.Component {
  render(props) {
    return (
      <div className={"col-md-2 " + styles.redesFooter}>
        <a href="#" className={styles.paRi25}><img src={imgTwitter} /></a>
        <a href="#" className={styles.paRi25}><img src={imgFacebook} /></a>
        <a href="#"><img src={imgInstagram} /></a>
      </div>
    );
  }
}

export default Footer;
