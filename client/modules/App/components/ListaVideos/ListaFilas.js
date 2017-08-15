import React from 'react';
//import 'bootstrap/js/ListaFilas';

// Import Style
import styles from './ListaFilas.css';

// Import Images
import imgBackFff from './img/backFff.jpg';
import imgPlayIcon from './img/playIcon.png';

export function ListaFilas(props) {
  const lista = ['Video 1', 'Video 2', 'Otro Vídeo'];
  return (
    <div className={styles.marco}>
      {lista.map((title) => <Video key={title} title={title}/>)}
    </div>
  );
}

function Video(props) {
  return (
    <div className={"col-xs-12 col-sm-4 " + styles.item + " " + styles['text-left']}>
      <div className={styles.tumb}>
        <img src={imgBackFff} alt=""/>
        <div className={styles.over}>
          <img src={imgPlayIcon} alt=""/>
        </div>
      </div>
      <div className={styles.titleitem}>
        <h5 className={styles.upper}>{props.title}</h5>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis ligula non neque finibus volutpat.</p>
    </div>
  );
}

export default ListaFilas;
