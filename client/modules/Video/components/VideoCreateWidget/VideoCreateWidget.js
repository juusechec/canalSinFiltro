import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './VideoCreateWidget.css';

export class VideoCreateWidget extends Component {
  addVideo = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addVideo(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
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
            <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name"/>
            <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title"/>
            <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content"/>
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
