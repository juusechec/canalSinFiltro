import React from 'react';

// Import Style
import styles from './BannerClaro.css';

// Import Images
import imgClaro from './img/claro-logo.png';

export function BannerClaro(props) {
  return (
    <div className={"col-xs-12 " + styles.marco}>
      <div className={styles.mainContent + " " + styles['text-center']}>
        <h3 className={styles.mB40px}>NUESTROS PARTNERS</h3>
        <div className={"col-sm-3 col-xs-6 " + " " + styles['text-center']}>
          <img className={"img-responsive " + styles.mA} src={imgClaro} alt=""/>
        </div>
        <div className={"col-sm-3 col-xs-6 " + styles['text-center']}>
          <img className={"img-responsive " + styles.mA} src={imgClaro} alt=""/>
        </div>
        <div className={"col-sm-3 col-xs-6 " + styles['text-center']}>
          <img className={"img-responsive " + styles.mA} src={imgClaro} alt=""/>
        </div>
        <div className={"col-sm-3 col-xs-6 " + styles['text-center']}>
          <img className={"img-responsive " + styles.mA} src={imgClaro} alt=""/>
        </div>
      </div>
      <div className={"col-xs-12 " + styles.h40px}></div>
    </div>
  );
}

export default BannerClaro;
