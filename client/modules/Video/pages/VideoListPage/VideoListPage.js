import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import VideoList from '../../components/VideoList';
import VideoCreateWidget from '../../components/VideoCreateWidget/VideoCreateWidget';

// Import Actions
import { addVideoRequest, fetchVideos, deleteVideoRequest } from '../../VideoActions';
import { toggleAddVideo } from '../../../App/AppActions';

// Import Selectors
import { getShowAddVideo } from '../../../App/AppReducer';
import { getVideos } from '../../VideoReducer';

class VideoListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchVideos());
  }

  handleDeleteVideo = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteVideoRequest(post));
    }
  };

  handleAddVideo = (name, title, content) => {
    this.props.dispatch(toggleAddVideo());
    this.props.dispatch(addVideoRequest({ name, title, content }));
  };

  handleToggleAddVideo = () => {
    console.log('VideoListPage handleToggleAddVideo');
    this.props.dispatch(toggleAddVideo());
  };

  render() {
    return (
      <div>
        <VideoCreateWidget addVideo={this.handleAddVideo} showAddVideo={this.props.showAddVideo} toggleAddVideo={this.handleToggleAddVideo} />
        <VideoList handleDeleteVideo={this.handleDeleteVideo} videos={this.props.videos} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
VideoListPage.need = [() => { return fetchVideos(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  console.log('VideoListPage mapStateToProps state', state);
  return {
    videos: getVideos(state),
    showAddVideo: getShowAddVideo(state),
  };
}

VideoListPage.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddVideo: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

VideoListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(VideoListPage);
