import uuidv4 from 'uuid/v4';

import {ADD_COMPONENT, REMOVE_COMPONENT,
  SET_COMPONENT_VALUE, SET_COMPONENT_VALUE_IN_OBJECT,
  REMOVE_COMPONENT_VALUE_IN_OBJECT, ADD_COMPONENT_VALUE_IN_OBJECT,
  SET_COMPONENTS_SIZES, MOVE_TO_CLOSET} from '../actions/cv';

import {SAVE_IMPORTED_CV} from '../actions/general';

const defaultState = [];

const cv = (state = defaultState, params) => {
  switch (params.type) {

    case SAVE_IMPORTED_CV:
      return params.cv;

    case ADD_COMPONENT:
      const allOrders = state
              .filter(component => component.zoneId === params.zoneId)
              .map(component => component.order),
            maxOrder = allOrders.length > 0 ? Math.max.apply(null, allOrders) : 1;

      const preparedComponent = {
        ...params.component
      };

      delete preparedComponent.description;

      return [
        ...state,
        {
          ...preparedComponent,
          uniqueId: uuidv4(),
          zoneId: params.zoneId,
          order: maxOrder + 1,
          size: params.size
        }
      ];

    case MOVE_TO_CLOSET:
      return state.map(component => {
        const newComponent = {...component};

        if (params.componentUniqueIds.indexOf(component.uniqueId) !== -1) {
          newComponent.zoneId = null;
        }

        return newComponent;
      });

    case REMOVE_COMPONENT:
      return state
        .filter(component => component.uniqueId !== params.componentUniqueId)
        .map(component => ({...component}));

    case SET_COMPONENTS_SIZES: {
      const {componentSizes} = params;

      // create new state with new sizes
      return state.map(component => {
        const changedComponent = componentSizes.find(changedComponent => changedComponent.uniqueId === component.uniqueId);
        const newComponent = {...component};
        if (!changedComponent) {
          return newComponent;
        }

        newComponent.size = changedComponent.newSize;

        return newComponent;
      });
    }

    case SET_COMPONENT_VALUE: {
      const {componentUniqueId, field, value} = params;

      return state
          .map(component => {
            const newComponent = {...component};

            if (newComponent.uniqueId === componentUniqueId) {
              newComponent[field] = value;
            }

            return newComponent;
          });
    }

    case SET_COMPONENT_VALUE_IN_OBJECT: {
      const {componentUniqueId, field, index, fieldInObject, value} = params;

      return state
          .map(component => {
            const newComponent = {...component};

            if (newComponent.uniqueId === componentUniqueId) {
              const newComponentField = newComponent[field].map((entry, fieldIndex) => {
                const newEntry = {...entry};

                if (index === fieldIndex) {
                  newEntry[fieldInObject] = value;
                }

                return newEntry;
              })

              newComponent[field] = newComponentField;
            }

            return newComponent;
          });
    }

    case ADD_COMPONENT_VALUE_IN_OBJECT: {
      const {componentUniqueId, field, newItem} = params;

      return state
          .map(component => {
            const newComponent = {...component};

            if (newComponent.uniqueId === componentUniqueId) {
              newComponent[field].push(newItem);
            }

            return newComponent;
          });
    }

    case REMOVE_COMPONENT_VALUE_IN_OBJECT: {
      const {componentUniqueId, field, index} = params;

      return state
          .map(component => {
            const newComponent = {...component};

            if (newComponent.uniqueId === componentUniqueId) {
              const newComponentField = newComponent[field]
                .filter((entry, fieldIndex) => fieldIndex !== index);

              newComponent[field] = newComponentField;
            }

            return newComponent;
          });
    }

    default:
      return state;
  }
}

export default cv;
