import React from 'react';

import Remove from '../ComponentActions/Remove';
import Resize from '../ComponentActions/Resize';

const PersonalData = ({children, component, ...props}) => (
  <div className="component-wrapper personal-data" {...props}>
    { children }

    <div className="component-wrapper-toolbar">
      <Remove {...component} />
      <Resize {...component} />
    </div>
  </div>
);

export default PersonalData;
