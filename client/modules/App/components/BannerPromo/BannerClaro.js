import React from 'react';

// Import Style
import styles from './BannerClaro.css';

// Import Images
import imgFondo from './claro.png';

export function BannerClaro(props) {
  return (
    <div className={"container-fluid " + styles.marco}>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div>
            <img src={imgFondo} alt="claro" className="center-block"/>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div>
            <img src={imgFondo} alt="claro" className="center-block"/>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div>
            <img src={imgFondo} alt="claro" className="center-block"/>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div>
            <img src={imgFondo} alt="claro" className="center-block"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerClaro;
