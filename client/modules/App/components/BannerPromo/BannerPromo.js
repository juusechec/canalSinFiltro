import React from 'react';

// Import Style
import styles from './BannerPromo.css';

// Import Components
import ListaFilas from '../ListaVideos/ListaFilas';

// Import Images
import imgFondo from './img/back-capsulas.jpg';
import imgRightArrow from './img/rightArrow.png';
import imgLeftArrow from './img/leftArrow.png';

export function BannerPromo(props) {
  return (
    <div className={"col-xs-12 " + styles['marco']} style={{
      backgroundImage: `url(${imgFondo})`
    }}>
      <div className={styles.leftArrow + " " + styles.l20px}>
        <img src={imgRightArrow} alt=""/>
      </div>
      <div className={styles.rightArrow + " " + styles.r20px}>
        <img src={imgLeftArrow} alt=""/>
      </div>
      <div className={styles.mainContent + " " + styles['text-center']}>
        <h2 className={styles.mB20px}>CAPSULAS DE PROMOCIÓN</h2>
        <ListaFilas/>
        <ListaFilas/>
      </div>
    </div>
  );
}

export default BannerPromo;
