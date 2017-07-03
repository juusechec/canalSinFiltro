import {ADD_POST, ADD_POSTS, DELETE_POST, EDIT_VIDEO, TOGGLE_ADD_VIDEO} from './VideoActions';

// Initial State
const initialState = {
  data: [],
  showAddVideo: false
};

const VideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        data: [
          action.video, ...state.data
        ]
      };

    case ADD_POSTS:
      return {data: action.videos};

    case DELETE_POST:
      return {
        data: state.data.filter(video => video.cuid !== action.cuid)
      };

    case EDIT_VIDEO:
      return {
        data: [
          action.video, ...state.data
        ]
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all videos
//export const getVideos = state => state.videos.data;
export const getVideos = function(state) {
  return state.videos.data;
};

// Get video by cuid
//export const getVideo = (state, cuid) => state.videos.data.filter(video => video.cuid === cuid)[0];
export const getVideo = function (state, cuid) {
  return state.videos.data.filter(video => video.cuid === cuid)[0];
}

// Export Reducer
export default VideoReducer;
