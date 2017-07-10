import React from 'react';

// Import Style
import styles from './BannerLogin.css';

// Import Components
//import ListaFilas from '../ListaVideos/ListaFilas';

// Import Images
//import imgFondo from './fondo.jpg';

function enlarge () {
  var ventana_ancho = $(window).height();
  $('#ingresos').css('height', ventana_ancho + 'px');
}

if (typeof window !== 'undefined') {
  require('./jquery.mb.YTPlayer');
  console.log('Cargué');
  $(function() {
    enlarge();
    $("#bgndVideo").YTPlayer();
  });
  $('.menuMovil').on('click', function() {
    $('.popUpmenu').fadeIn();
  });
  $('.close').on('click', function() {
    $('.popUpmenu').fadeOut();
  });
}

const dataProperty = "{videoURL:'https://youtu.be/2r1GzseJclI', containment:'body', autoPlay:true, mute:true, startAt:0, opacity:1}";


function unhide_mbYTP_wrapper() {
  var mbYTP_wrapper = document.getElementsByClassName("mbYTP_wrapper");
  if (mbYTP_wrapper.length > 0) {
    mbYTP_wrapper = mbYTP_wrapper[0];
    mbYTP_wrapper.style.display = 'block';
  }
}

function hide_mbYTP_wrapper(){
  var mbYTP_wrapper = document.getElementsByClassName("mbYTP_wrapper");
  if(mbYTP_wrapper.length > 0){
    mbYTP_wrapper = mbYTP_wrapper[0];
    mbYTP_wrapper.style.display = 'none';
  }
}

class BannerLogin extends React.Component {

  componentDidMount() {
    console.log('BannerLogin componentDidMount');
    enlarge();
    unhide_mbYTP_wrapper();
  }

  componentWillUnmount() {
    console.log('BannerLogin componentWillUnmount');
    hide_mbYTP_wrapper();
  }

  render() {
    return (
      <div id="ingresos" className={"col-md-12 " + styles.b0}>
        <div id="bgndVideo" className={"player " + styles.bgndVideo} data-property={dataProperty}>
          <div className={"col-md-12 " + styles['content-ingresos'] + " " + styles['text-upp']}>
            <h1 className="title">entra y disfruta</h1>
            <div className="description">
              de tus series
              <br/>
              y personajes favoritos
            </div>
            <a className={styles['btn-ingresos'] + " " + styles['text-upp'] + " " + styles['pull-left']} href="#">registrate gratis</a>
          </div>
        </div>
      </div>
    );
  }
};

export default BannerLogin;
