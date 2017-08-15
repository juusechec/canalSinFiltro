import React from 'react';
//import 'bootstrap/js/ListaHorizontal';

// Import Style
import styles from './ListaHorizontal.css';

// Import Images
import imgBackFff from './img/backFff.jpg';
import imgPlayIcon from './img/playIcon.png';
import imgHeart from './img/heart.png';

export function ListaHorizontal(props) {
  const lista = ['Video 1', 'Video 2', 'Otro Vídeo'];
  return (
    <div className={"col-xs-12 " + styles.marco}>
      <div className={styles.mainContent + " " + styles.bgfff}>
        <div className="col-xs-12 ">
          <h4 className={styles['pull-left'] + " " + styles.pL15px}>{props.title}</h4>
          <h5 className={styles['pull-right'] + " " + styles.pL15px}>VER TODO</h5>
        </div>
        <div className="col-xs-12">
          {lista.map((title) => <Video key={title} title={title}/>)}
        </div>
      </div>
    </div>
  );
}

function Video(props) {
  return (
    <div className={"col-xs-12 col-sm-4 " + styles.item}>
      <div className={styles.tumb}>
        <img src={imgBackFff} alt=""/>
        <div className={styles.over}>
          <img src={imgPlayIcon} alt=""/>
        </div>
      </div>
      <div className={styles.titleitem}>
        <h5 className={styles.upper}>{props.title}</h5>
        <img src={imgHeart} alt=""/>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis ligula non neque finibus volutpat. Maecenas semper nunc vitae leo condimentum consequat. In ultricies ullamcorper eros at dapibus.</p>
    </div>
  );
}

export default ListaHorizontal;
