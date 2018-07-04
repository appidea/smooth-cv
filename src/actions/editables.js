export const ACTIVATE_EDITOR = 'activateEditor';
export const TERMINATE_ALL_EDITS = 'terminateAllEdits';

export const activateEditor = (address) => ({
  type: ACTIVATE_EDITOR,
  address
});

export const terminateAllEdits = () => ({
  type: TERMINATE_ALL_EDITS
});
