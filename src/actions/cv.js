export const ADD_COMPONENT = 'cvAddComponent';
export const REMOVE_COMPONENT = 'removeComponent';
export const SET_COMPONENT_VALUE = 'setComponentValue';
export const SET_COMPONENT_VALUE_IN_OBJECT = 'setComponentValueInObject';
export const ADD_COMPONENT_VALUE_IN_OBJECT = 'addComponentValueInObject';
export const REMOVE_COMPONENT_VALUE_IN_OBJECT = 'removeComponentValueInObject';
export const SET_COMPONENTS_SIZES = 'setComponentsSizes';
export const MOVE_TO_CLOSET = 'moveComponentToCloset';

export const setComponentValue = (componentUniqueId, field, value) => ({
  type: SET_COMPONENT_VALUE,
  field,
  componentUniqueId,
  value
});

export const setComponentValueInObject = (componentUniqueId, field, index, fieldInObject, value) => ({
  type: SET_COMPONENT_VALUE_IN_OBJECT,
  field,
  componentUniqueId,
  index,
  fieldInObject,
  value
});

export const addComponentValueInObject = (componentUniqueId, field, newItem) => ({
  type: ADD_COMPONENT_VALUE_IN_OBJECT,
  field,
  componentUniqueId,
  newItem
});

export const removeComponentValueInObject = (componentUniqueId, field, index) => ({
  type: REMOVE_COMPONENT_VALUE_IN_OBJECT,
  field,
  componentUniqueId,
  index
});

export const addComponent = (component, params, zoneId, size) => ({
  type: ADD_COMPONENT,
  component,
  params,
  zoneId,
  size
});

export const moveToCloset = (componentUniqueIds) => ({
  type: MOVE_TO_CLOSET,
  componentUniqueIds
});

export const safelyAddComponent = (component, params, zoneId) => (dispatch, getState) => {
  const existingComponents = getState().present.cv
          .filter(component => component.zoneId === zoneId),
        occupiedSpaceInRow = existingComponents.length === 0 ? 0 : existingComponents
          .map(component => component.size)
          .reduce((a, b) => a + b);

  let size;

  if (occupiedSpaceInRow > 75) {
    const diff = occupiedSpaceInRow - 75;
    existingComponents.map(component => {
      const proportion = component.size / occupiedSpaceInRow;

      dispatch(setComponentSize(component.uniqueId, -(diff * proportion)));
    });
    size = 25;
  } else if (occupiedSpaceInRow === 0) {
    size = 100;
  }

  dispatch(addComponent(component, params, zoneId, size))
};

export const removeComponent = (componentUniqueId) => ({
  type: REMOVE_COMPONENT,
  componentUniqueId
});

export const setComponentsSizes = (componentSizes) => ({
  type: SET_COMPONENTS_SIZES,
  componentSizes
})

export const setComponentSize = (componentUniqueId, sizeIncrementation) => (dispatch, getState) => {
  const state = getState().present.cv,
    resizedComponent = state
      .find(component => component.uniqueId === componentUniqueId),
    // get all other components from same zone
    restComponents = state
      .filter(component => component.uniqueId !== resizedComponent.uniqueId
                            && component.zone === resizedComponent.zone),
    // sum up the size of all other components
    restCollectedSize = restComponents.length === 0 ? 0 : restComponents
      .map(component => component.size)
      .reduce((a, b) => a + b),
    // get proportions of the each from all components, to apply the new sizes later
    restComponentsProportions = restComponents
      .map(component => component.size / restCollectedSize),
    // calculate the new size of the main component
    changedResizedComponentSize = resizedComponent.size + sizeIncrementation,
    // create the "changedSizes" array and store there new calculated sizes for the other components
    changedSizes = restComponents.map((component, index) => ({
      uniqueId: component.uniqueId,
      newSize: component.size
        - (sizeIncrementation * restComponentsProportions[index])
    }));

  // add the main components' new size to "changedSizes" array
  changedSizes.push({
    uniqueId: resizedComponent.uniqueId,
    newSize: changedResizedComponentSize
  });

  dispatch(setComponentsSizes(changedSizes))
}
