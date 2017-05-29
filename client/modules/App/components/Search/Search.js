import React from 'react';
//import 'bootstrap/js/Search';

// Import Style
import styles from './Search.css';

// Import Images
//import slide1 from './Slide1.jpg';

export function Search() {
  return (
    <div className={"col-md-4 col-md-offset-3 " + styles.search}>
      <form action="" className={"search-form " + styles['search-form']}>
        <div className={"has-feedback form-group " + styles['form-group']}>
          <label for="search" className="sr-only">Buscar</label>
          <input type="text" className={"form-control " + styles['form-control']} name="search" id="search" placeholder="Buscar"/>
          <span className={"glyphicon glyphicon-search form-control-feedback " + styles['form-control-feedback']}></span>
        </div>
      </form>
    </div>
  );
}

export default Search;
