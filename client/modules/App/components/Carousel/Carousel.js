import React from 'react';
//import 'bootstrap/js/carousel';

// Import Style
import styles from './Carousel.css';

// Import Images
import slide1 from './Slide2.jpg';
import slide2 from './Slide1.jpg';
import slide3 from './Slide3.jpg';

export function Carousel() {
  //$('.carousel').carousel();
  return (
    <div className={styles.container}>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img src={slide1} alt="Los Angeles" className={styles.slide}/>
          </div>

          <div className="item">
            <img src={slide2} alt="Chicago" className={styles.slide}/>
          </div>

          <div className="item">
            <img src={slide3} alt="Chicago" className={styles.slide}/>
          </div>
        </div>

        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
