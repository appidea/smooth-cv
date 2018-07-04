import React, { Component } from 'react';

import Document from '../Document';
import Toolbar from '../Interface/Toolbar';
import Topbar from '../Interface/Topbar';
import Zoom from '../Interface/Zoom';
// import Toolbar from '../Toolbar';

class AppForm extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <Document />
        <Toolbar />
        <Topbar />
        <Zoom />
      </div>
    );
  }

}

export default AppForm;
