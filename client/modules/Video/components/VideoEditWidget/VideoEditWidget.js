import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import NavLink from '../../../App/components/NavLink';

// Import Style
import styles from './VideoEditWidget.css';

export class VideoCreateWidget extends Component {
  updateVideo = () => {
    //console.log('VideoCreateWidget saveVideo', this.props, this.props.video.cuid);
    const tituloRef = this.refs.titulo;
    const autorRef = this.refs.autor;
    const urlRef = this.refs.url;
    const descripcionRef = this.refs.descripcion;
    if (tituloRef.value && autorRef.value && urlRef.value && descripcionRef.value) {
      console.log('VideoEditWidget valid', tituloRef.value, autorRef.value, urlRef.value, descripcionRef.value);
      const video = this.props.updateVideo(this.props.video.cuid, tituloRef.value, autorRef.value, urlRef.value, descripcionRef.value);
      //tituloRef.value = autorRef.value = urlRef.value = descripcionRef.value = '';
    }
  };

  render() {
    //console.log('VideoEditWidget render this.props.video', this.props.video);
    const cls = `${styles.form} ${ (this.props.showAddVideo
      ? styles.appear
      : '')}`;
    return (
      <div>
        <div className={"btn-group " + styles['nav-buttons']} role="group">
        <NavLink className="btn btn-default" to="/videos"><FormattedMessage id="backToVideos"/></NavLink>
          <a className="btn btn-default" href="#" onClick={this.props.toggleAddVideo}><FormattedMessage id="editVideo"/></a>
        </div>
        <div className={cls}>
          <div className={styles['form-content']}>
            <h2 className={styles['form-title']}><FormattedMessage id="editVideo"/></h2>
            <input defaultValue={this.props.video.titulo} placeholder={this.props.intl.messages.titulo} className={styles['form-field']} ref="titulo"/>
            <input defaultValue={this.props.video.autor} placeholder={this.props.intl.messages.autor} className={styles['form-field']} ref="autor"/>
            <input defaultValue={this.props.video.url} placeholder={this.props.intl.messages.url} className={styles['form-field']} ref="url"/>
            <textarea defaultValue={this.props.video.descripcion} placeholder={this.props.intl.messages.descripcion} className={styles['form-field']} ref="descripcion"/>
            <a className={styles['post-submit-button']} href="#" onClick={this.updateVideo}><FormattedMessage id="submit"/></a>
          </div>
        </div>
      </div>
    );
  }
}

VideoCreateWidget.propTypes = {
  video: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    idsCategorias: PropTypes.arrayOf(PropTypes.string),
    categorias: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  updateVideo: PropTypes.func.isRequired,
  showAddVideo: PropTypes.bool.isRequired,
  toggleAddVideo: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(VideoCreateWidget);
