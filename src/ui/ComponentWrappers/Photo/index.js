import React from 'react';

import Remove from '../ComponentActions/Remove';
import Resize from '../ComponentActions/Resize';

import './Photo.scss';

const Photo = ({children, component, ...props}) => (
  <div className="component-wrapper photo" {...props}>
    { children }

    <div className="component-wrapper-toolbar">
      <Remove {...component} />
      <Resize {...component} />
    </div>
  </div>
);

export default Photo;
