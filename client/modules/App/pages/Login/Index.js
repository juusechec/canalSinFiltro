import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerLogin from '../../components/BannerLogin/BannerLogin';

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
      <BannerLogin />
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

PostDetailPage.propTypes = {
//   post: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   }).isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
