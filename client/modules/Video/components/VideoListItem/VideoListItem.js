import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './VideoListItem.css';

function VideoListItem(props) {
  return (
    <div className={styles['single-video']}>
      <h3 className={styles['video-title']}>
        <Link to={`/videos/${props.video.cuid}`} >
          {props.video.titulo}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.video.autor}</p>
      <a className={styles['video-url']} href="{props.video.url}">{props.video.url}</a>
      <p className={styles['video-desc']}>{props.video.descripcion}</p>
      <p className={styles['video-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteVideo" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    idsCategorias: PropTypes.arrayOf(PropTypes.string),
    categorias: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default VideoListItem;
