import React from 'react';

// Import Style
import styles from './BannerPromo.css';

// Import Components
import ListaFilas from '../ListaVideos/ListaFilas';

// Import Images
import imgFondo from './fondo.jpg';

export function BannerPromo(props) {
  return (
    <div className={"container-fluid " + styles['marco']} style={{ backgroundImage: `url(${imgFondo})` }}>
      <div className="row">
        <h1 className="text-center">Capsulas de Promoción</h1>
      </div>
      <div className="row">
        <ListaFilas/>
        <ListaFilas/>
      </div>
    </div>
  );
}

export default BannerPromo;
