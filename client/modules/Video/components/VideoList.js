import React, { PropTypes } from 'react';

// Import Components
import VideoListItem from './VideoListItem/VideoListItem';

function VideoList(props) {
  //console.log('VideoList props', props);
  var videos = (typeof props.videos !== 'undefined') ? props.videos : [];
  return (
    <div className="listView">
      {
        videos.map(video => (
          <VideoListItem
            video={video}
            key={video.cuid}
            onDelete={() => props.handleDeleteVideo(video.cuid)}
          />
        ))
      }
    </div>
  );
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteVideo: PropTypes.func.isRequired,
};

export default VideoList;
