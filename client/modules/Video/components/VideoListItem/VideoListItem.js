import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './VideoListItem.css';

function VideoListItem(props) {
  return (
    <div className={styles['single-video']}>
      <h3 className={styles['video-title']}>
        <Link to={`/videos/${props.video.slug}-${props.video.cuid}`} >
          {props.video.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.video.name}</p>
      <p className={styles['video-desc']}>{props.video.content}</p>
      <p className={styles['video-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteVideo" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default VideoListItem;
