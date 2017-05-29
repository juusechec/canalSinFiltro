import React from 'react';
//import 'bootstrap/js/ListaHorizontal';

// Import Style
import styles from './ListaHorizontal.css';

// Import Images
import defaultPreview from './preview.jpg';

export function ListaHorizontal(props) {
  const lista = ['Video 1', 'Video 2', 'Otro Vídeo'];
  return (
    <div className={"container " + styles.marco}>
      <div className={"row " + styles.title}>
        <h1>{props.title}</h1>
      </div>
      <div className="row">
        {lista.map((title) => <Video key={title} title={title}/>)}
      </div>
    </div>
  );
}

function Video(props) {
  return (
    <div className="col-sm-6 col-md-4">
      <div className={"thumbnail " +  styles.item}>
        <img src={defaultPreview} alt={props.title}/>
        <div className="caption">
          <h3>{props.title}</h3>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
           dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListaHorizontal;
