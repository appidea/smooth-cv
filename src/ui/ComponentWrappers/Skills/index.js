import React, { Component } from 'react';

import Remove from '../ComponentActions/Remove';
import Resize from '../ComponentActions/Resize';

const Skills = ({children, component, ...props}) => (
  <div className="component-wrapper skills" {...props}>
    { children }

    <div className="component-wrapper-toolbar">
      <Remove {...component} />
      <Resize {...component} />
    </div>
  </div>
);

export default Skills;
