import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './VideoEditWidget.css';

export class VideoCreateWidget extends Component {
  saveVideo = () => {
    console.log('VideoCreateWidget saveVideo', this.props, this.props.video.cuid);
    const cuidRef = this.props.video.cuid;
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      const video = this.props.saveVideo(cuidRef, nameRef.value, titleRef.value, contentRef.value);
      // nameRef.value = video.name;
      // titleRef.value = video.title;
      // contentRef.value = video.content;
      //nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${ (this.props.showAddVideo
      ? styles.appear
      : '')}`;
    return (
      <div>
        <div className={"btn-group " + styles['nav-buttons']} role="group">
          <a className="btn btn-default" href="#" onClick={this.props.toggleAddVideo}><FormattedMessage id="editVideo"/></a>
        </div>
        <div className={cls}>
          <div className={styles['form-content']}>
            <h2 className={styles['form-title']}><FormattedMessage id="editVideo"/></h2>
            <input defaultValue={this.props.video.name} placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name"/>
            <input defaultValue={this.props.video.title} placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title"/>
            <textarea defaultValue={this.props.video.content} placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content"/>
            <a className={styles['post-submit-button']} href="#" onClick={this.saveVideo}><FormattedMessage id="submit"/></a>
          </div>
        </div>
      </div>
    );
  }
}

VideoCreateWidget.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  saveVideo: PropTypes.func.isRequired,
  showAddVideo: PropTypes.bool.isRequired,
  toggleAddVideo: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(VideoCreateWidget);
