export const SET_EDIT_MODE = 'setDocumentEditMode';
export const SET_ZOOM = 'setDocumentZoom';

export const setEditMode = (editModeEnabled) => ({
  type: SET_EDIT_MODE,
  editModeEnabled
});

export const setZoom = (zoomValue) => ({
  type: SET_ZOOM,
  zoomValue
});
