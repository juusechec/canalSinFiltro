import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_VIDEO = 'ADD_VIDEO';
export const ADD_VIDEOS = 'ADD_VIDEOS';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const EDIT_VIDEO = 'EDIT_VIDEO';
export const TOGGLE_ADD_VIDEO = 'TOGGLE_ADD_VIDEO';

// Export Actions
export function addVideo(video) {
  console.log('VideoActions addVideo', video);
  return {
    type: ADD_VIDEO,
    video,
  };
}

export function addVideoRequest(video) {
  console.log('VideoActions addVideoRequest', video);
  video.idsCategorias = [];
  video.categorias = [];
  return (dispatch) => {
    return callApi('videos', 'post', {
      video: {
        cuid: video.cuid,
        titulo: video.titulo,
        autor: video.autor,
        descripcion: video.descripcion,
        url: video.url,
        idsCategorias: video.idsCategorias,
        categorias: video.categorias,
      },
    }).then(res => dispatch(addVideo(res.video)));
  };
}

export function addVideos(videos) {
  console.log('VideoActions addVideos', videos);
  // Debe llamarse videos o lo que corresponga.
  return {
    type: ADD_VIDEOS,
    videos,
  };
}

export function fetchVideos() {
  console.log('VideoActions fetchVideos');
  return (dispatch) => {
    return callApi('videos').then(res => {
      console.log('VideoActions fetchVideos', res, res.videos);
      dispatch(addVideos(res.videos));
    });
  };
}

export function fetchVideo(cuid) {
  return (dispatch) => {
    return callApi(`videos/${cuid}`).then(res => dispatch(addVideo(res.video)));
  };
}

export function deleteVideo(cuid) {
  return {
    type: DELETE_VIDEO,
    cuid,
  };
}

export function deleteVideoRequest(cuid) {
  return (dispatch) => {
    return callApi(`videos/${cuid}`, 'delete').then(() => dispatch(deleteVideo(cuid)));
  };
}

export function editVideo(video) {
  return {
    type: EDIT_VIDEO,
    video,
  };
}

export function editVideoRequest(video) {
  //console.log('actions editVideoRequest', video);
  return (dispatch) => {
    return callApi('videos', 'put', {
      video: {
        cuid: video.cuid,
        titulo: video.titulo,
        autor: video.autor,
        descripcion: video.descripcion,
        url: video.url,
        idsCategorias: video.idsCategorias,
        categorias: video.categorias,
      },
    }).then(res => dispatch(editVideo(res.video)));
  };
}
