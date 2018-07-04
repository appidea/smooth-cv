import { mapping } from '../layouts';

export const SAVE_IMPORTED_CV = 'saveImportedCv';

export const saveImportedCv = (json) => {
  const {layoutId, cv} = json;

  const layoutConfig = mapping[layoutId].config;

  return {
    type: SAVE_IMPORTED_CV,
    cv,
    layoutConfig
  };
}
