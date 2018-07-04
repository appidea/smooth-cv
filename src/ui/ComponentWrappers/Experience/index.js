import React, { Component } from 'react';

import Remove from '../ComponentActions/Remove';
import Resize from '../ComponentActions/Resize';

const Experience = ({children, component, ...props}) => (
  <div className="component-wrapper experience" {...props}>
    { children }

    <div className="component-wrapper-toolbar">
      <Remove {...component} />
      <Resize {...component} />
    </div>
  </div>
);

export default Experience;
