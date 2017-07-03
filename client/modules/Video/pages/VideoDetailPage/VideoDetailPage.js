import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/VideoListItem/VideoListItem.css';

// Import Components
import VideoEditWidget from '../../components/VideoEditWidget/VideoEditWidget';

// Import Actions
import { fetchVideo } from '../../VideoActions';
import { toggleAddVideo } from '../../../App/AppActions';

// Import Selectors
import { getVideo } from '../../VideoReducer';
import { getShowAddVideo } from '../../../App/AppReducer';

class VideoDetailPage extends Component {

  handleSaveVideo = (name, title, content) => {
    console.log('VideoListPage handleAddVideo');
    // this.props.dispatch(toggleAddVideo());
    // this.props.dispatch(addVideoRequest({ name, title, content }));
  };

  handleToggleAddVideo = () => {
    console.log('VideoListPage handleToggleAddVideo');
    this.props.dispatch(toggleAddVideo());
  };

  render(){
    return (
      <div>
        <Helmet title={this.props.video.title} />
        <VideoEditWidget video={this.props.video} saveVideo={this.handleSaveVideo} showAddVideo={this.props.showAddVideo} toggleAddVideo={this.handleToggleAddVideo} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3 className={styles['post-title']}>{this.props.video.title}</h3>
          <p className={styles['author-name']}><FormattedMessage id="by" /> {this.props.video.name}</p>
          <p className={styles['post-desc']}>{this.props.video.content}</p>
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
VideoDetailPage.need = [params => {
  return fetchVideo(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    video: getVideo(state, props.params.cuid),
    showAddVideo: getShowAddVideo(state),
  };
}

VideoDetailPage.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  showAddVideo: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(VideoDetailPage);
