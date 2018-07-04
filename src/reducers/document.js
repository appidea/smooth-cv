import { SET_EDIT_MODE, SET_ZOOM } from '../actions/document';

const defaultState = {
  editModeEnabled: false,
  zoom: 100
}

const document = (state = defaultState, params) => {
  switch (params.type) {
    case SET_EDIT_MODE:
      return {
        ...state,
        editModeEnabled: params.editModeEnabled
      };

    case SET_ZOOM:
      return {
        ...state,
        zoom: params.zoomValue
      };
    default:
      return state;
  }
}

export default document;
