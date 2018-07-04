import { ACTIVATE_EDITOR, TERMINATE_ALL_EDITS } from '../actions/editables';

const editables = (state = {}, params) => {
  switch (params.type) {
    case ACTIVATE_EDITOR:
      return {
        ...state,
        [params.address]: {
          enabled: true
        }
      }

    case TERMINATE_ALL_EDITS:
      return {};

    default:
      return state;
  }
}

export default editables;
