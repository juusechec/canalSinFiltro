import {ADD_VIDEO, ADD_VIDEOS, DELETE_VIDEOS, EDIT_VIDEO, TOGGLE_ADD_VIDEO} from './VideoActions';

// Initial State
const initialState = {
  data: [],
  showAddVideo: false
};

const VideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEO:
      return {
        data: [
          action.video, ...state.data
        ]
      };

    case ADD_VIDEOS:
      return {data: action.videos};

    case DELETE_VIDEOS:
      return {
        data: state.data.filter(video => video.cuid !== action.cuid)
      };

    case EDIT_VIDEO:
      //console.log('reducer EDIT_VIDEO select last data', action, state);
      return {
        data: [action.video]
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all videos
export const getVideos = state => state.videos.data;

// Get video by cuid
//export const getVideo = (state, cuid) => state.videos.data.filter(video => video.cuid === cuid)[0];
export const getVideo = function (state, cuid) {
  //console.log('reducer getVideo', state, cuid);
  return state.videos.data.filter(video => video.cuid === cuid)[0];
}

// Export Reducer
export default VideoReducer;
