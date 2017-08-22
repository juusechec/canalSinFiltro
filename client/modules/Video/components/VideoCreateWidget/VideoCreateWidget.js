import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './VideoCreateWidget.css';

export class VideoCreateWidget extends Component {
  addVideo = () => {
    console.log('VideoCreateWidget addVideo', this.refs);
    const tituloRef = this.refs.titulo;
    const autorRef = this.refs.autor;
    const urlRef = this.refs.url;
    const descripcionRef = this.refs.descripcion;
    if (tituloRef.value && autorRef.value && urlRef.value && descripcionRef.value) {
      console.log('VideoCreateWidget valid', tituloRef.value, autorRef.value, urlRef.value, descripcionRef.value);
      this.props.addVideo(tituloRef.value, autorRef.value, urlRef.value, descripcionRef.value);
      tituloRef.value = autorRef.value = urlRef.value = descripcionRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${ (this.props.showAddVideo
      ? styles.appear
      : '')}`;
    return (
      <div>
        <div className={"btn-group " + styles['nav-buttons']} role="group">
          <a className="btn btn-default" href="#" onClick={this.props.toggleAddVideo}><FormattedMessage id="addVideo"/></a>
        </div>
        <div className={cls}>
          <div className={styles['form-content']}>
            <h2 className={styles['form-title']}><FormattedMessage id="createNewVideo"/></h2>
            <input placeholder={this.props.intl.messages.titulo} className={styles['form-field']} ref="titulo"/>
            <input placeholder={this.props.intl.messages.autor} className={styles['form-field']} ref="autor"/>
            <input placeholder={this.props.intl.messages.url} className={styles['form-field']} ref="url"/>
            <textarea placeholder={this.props.intl.messages.descripcion} className={styles['form-field']} ref="descripcion"/>
            <a className={styles['post-submit-button']} href="#" onClick={this.addVideo}><FormattedMessage id="submit"/></a>
          </div>
        </div>
      </div>
    );
  }
}

VideoCreateWidget.propTypes = {
  addVideo: PropTypes.func.isRequired,
  showAddVideo: PropTypes.bool.isRequired,
  toggleAddVideo: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(VideoCreateWidget);
