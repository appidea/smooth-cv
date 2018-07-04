import React, { Component } from 'react';
import './App.scss';
import './slider.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';
import { Provider } from 'react-redux';
import undoable, { distinctState } from 'redux-undo'

import AppForm from './ui/AppForm';

let middleware;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
} else {
  middleware = applyMiddleware(thunk);
}

const store = createStore(
  undoable(rootReducer, {
    filter: distinctState()
  }),
  middleware
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppForm />
      </Provider>
    );
  }
}

export default App;
