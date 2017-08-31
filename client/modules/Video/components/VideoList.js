import React, {
  PropTypes
} from 'react';

// Import Components
import VideoListItem from './VideoListItem/VideoListItem';

function VideoList(props) {
  console.log('VideoList props', props.videos, props.videos === undefined);
  var videos = (typeof props.videos !== 'undefined') ?
    props.videos :
    [];
  console.log('VideoList videos', videos);
  return ( <div className="listView">
  {
    videos.map(video => (
      <VideoListItem video={video} key={video.cuid} onDelete={() => props.handleDeleteVideo(video.cuid)}/>
    ))
  }
  </div>);
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    idsCategorias: PropTypes.arrayOf(PropTypes.string),
    categorias: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  handleDeleteVideo: PropTypes.func.isRequired,
};

export default VideoList;
