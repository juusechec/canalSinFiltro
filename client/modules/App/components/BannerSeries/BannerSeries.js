import React from 'react';

// Import Style
import styles from './BannerSeries.css';

// Import Images
// import imgSerie from './serie.jpg';

export function BannerSeries(props) {
  const indice = props.last - 1;
  const listaSerie = ['928a0a75946bf1e744b04f087adde6231880621d61a90cd7b078255f36ec7629.jpg', '2671ada6632e152db6c8e95761abb6b5e545bb01c8f83ab22822229477960c15.jpg'];
  const listaContent = ['55a5ef69bcd5a0fefa62c9b8126691dad902b134ffc0414043cebd5a2009d06d.jpg', '4a48962a4825330f39e8169158e2c0eb9b58e4b2b5c4f308dd6dde452da6414e.jpg'];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={"col-xs-6 " + styles['mi-col']}>
          <img src={"shared/images/" + listaSerie[indice]} className={styles['full-width']} alt="serie"/>
        </div>
        <div className={"col-xs-6 " + styles['mi-col']}>
          <img src={"shared/images/" + listaContent[indice]} className={styles['full-width']} alt="contenido"/>
        </div>
      </div>
    </div>
  );
}

export default BannerSeries;
