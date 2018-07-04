import React, { Component } from 'react';

import Remove from '../ComponentActions/Remove';
import Resize from '../ComponentActions/Resize';

class Plain extends Component {

  render() {
    const {children, component, ...props} = this.props;

    return (
      <div className="component-wrapper plain" {...props}>
        { children }

        <div className="component-wrapper-toolbar">
          <Remove {...component} />
          <Resize {...component} />
        </div>
      </div>
    );
  }

}

export default Plain;
