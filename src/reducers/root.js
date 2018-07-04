import {combineReducers} from 'redux';
import cv from './cv';
import layout from './layout';
import components from './components';
import editables from './editables';
import document from './document';

export default combineReducers({
  cv,
  layout,
  components,
  editables,
  document
});
