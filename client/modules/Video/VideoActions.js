import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addVideo(video) {
  return {
    type: ADD_POST,
    video,
  };
}

export function addVideoRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addVideo(res.post)));
  };
}

export function addVideos(videos) {
  // Debe llamarse videos o lo que corresponga.
  return {
    type: ADD_POSTS,
    videos,
  };
}

export function fetchVideos() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addVideos(res.posts));
    });
  };
}

export function fetchVideo(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addVideo(res.post)));
  };
}

export function deleteVideo(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deleteVideoRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deleteVideo(cuid)));
  };
}
