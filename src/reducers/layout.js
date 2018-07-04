import {SAVE_IMPORTED_CV} from '../actions/general';
import {SET_LAYOUT} from '../actions/layout';

import classicConfig from '../layouts/Modern/config';

const defaultState = classicConfig;

const layout = (state = defaultState, params) => {
  switch (params.type) {
    case SAVE_IMPORTED_CV:
    case SET_LAYOUT:
      return {
        ...params.layoutConfig,
        zones: [
          ...params.layoutConfig.zones.map(zone => ({
            ...zone,
            accepts: [
              ...zone.accepts
            ]
          }))
        ]
      };

    default:
      return state;
  }
};

export default layout;
