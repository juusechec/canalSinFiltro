import React from 'react';

// Import Style
import styles from './BannerSeries.css';

// Import Images
// import imgSerie from './serie.jpg';

export function BannerSeries(props) {
  const indice = props.last - 1;
  const listaSerie = ['eba15d39e9bb427f4ea47e3a950b7f17725a67629beabab11a8843c041ea98ee.jpg', 'd743001ee3639288029ffcadf7dd3913e6cc311502cbafa2afe0cca255594390.jpg'];
  const listaContent = ['0cecbc71653984959408e09717633f581548e22568e64bdfdc17762c987b494d.jpg', '1bb7aa60ced48256c50615db409d9d1860744fc0fdf5784e7c5570008ec049ac.jpg'];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-6">
          <img src={"shared/images/" + listaSerie[indice]} className={styles['full-width']} alt="serie"/>
        </div>
        <div className="col-xs-6">
          <img src={"shared/images/" + listaContent[indice]} className={styles['full-width']} alt="contenido"/>
        </div>
      </div>
    </div>
  );
}

export default BannerSeries;
