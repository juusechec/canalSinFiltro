// Import Actions
import { TOGGLE_ADD_VIDEO } from './AppActions';

// Initial State
const initialState = {
  showAddVideo: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_VIDEO:
      return {
        showAddVideo: !state.showAddVideo,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddVideo = state => state.app.showAddVideo;

// Export Reducer
export default AppReducer;
