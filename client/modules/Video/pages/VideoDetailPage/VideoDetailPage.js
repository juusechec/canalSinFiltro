import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/VideoListItem/VideoListItem.css';

// Import Components
import VideoEditWidget from '../../components/VideoEditWidget/VideoEditWidget';

// Import Actions
import { fetchVideo, editVideoRequest } from '../../VideoActions';
import { toggleAddVideo } from '../../../App/AppActions';

// Import Selectors
import { getVideo } from '../../VideoReducer';
import { getShowAddVideo } from '../../../App/AppReducer';

class VideoDetailPage extends Component {

  handleUpdateVideo = (cuid, titulo, autor, url, descripcion) => {
    //console.log('VideoDetailPage handleSaveVideo', { cuid, name, title, content });
    // this.props.dispatch(toggleAddVideo());
    this.props.dispatch(editVideoRequest({ cuid, titulo, autor, url, descripcion }));
    //console.log('VideoDetailPage handleSaveVideo fetchVideo new data', cuid);
    this.props.dispatch(fetchVideo(cuid));
  };

  handleToggleAddVideo = () => {
    //console.log('VideoListPage handleToggleAddVideo');
    this.props.dispatch(toggleAddVideo());
  };

  render(){
    return (
      <div>
        <Helmet title={this.props.video.title} />
        <VideoEditWidget video={this.props.video} updateVideo={this.handleUpdateVideo} showAddVideo={this.props.showAddVideo} toggleAddVideo={this.handleToggleAddVideo} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3 className={styles['post-title']}>{this.props.video.titulo}</h3>
          <p className={styles['author-name']}><FormattedMessage id="by" /> {this.props.video.autor}</p>
          <p className={styles['post-desc']}>{this.props.video.descripcion}</p>
          <p>
            <iframe width="420" height="315" src={this.props.video.url}></iframe>
          </p>
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
    cuid: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    idsCategorias: PropTypes.arrayOf(PropTypes.string),
    categorias: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  showAddVideo: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(VideoDetailPage);
