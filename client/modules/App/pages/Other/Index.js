import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import ListaHorizontal from '../../components/ListaVideos/ListaHorizontal';
import BannerSeries from '../../components/BannerSeries/BannerSeries';
import BannerPromo from '../../components/BannerPromo/BannerPromo';
import BannerClaro from '../../components/BannerPromo/BannerClaro';

// // Import Style
// import styles from '../.../components/PostListItem/PostListItem.css';
//
// // Import Actions
// import { fetchPost } from '../../PostActions';

// Import Selectors
// import { getPost } from '../../PostReducer';

export function PostDetailPage(props) {
  return (
    <div>
      {/*<Helmet title={props.post.title} />*/}
      <Header />
      <br/><br/><br/>
      <h1>Contenido personalizado.</h1>
      <Footer />
    </div>
  );
}

// // Actions required to provide data for this component to render in sever side.
// PostDetailPage.need = [params => {
//   return fetchPost(params.cuid);
// }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    //post: getPost(state, props.params.cuid),
  };
}

// PostDetailPage.propTypes = {
//   post: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default connect(mapStateToProps)(PostDetailPage);
