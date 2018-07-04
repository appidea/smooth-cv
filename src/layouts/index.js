import React from 'react';

import Classic from './Classic';
import Modern from './Modern';
import Minimal from './Minimal';

export const mapping = {
  'classic': Classic,
  'modern': Modern,
  'minimal': Minimal
};

const getMappedLayout = (layout, children) => {
  const MappedLayout = mapping[layout.id];

  return (
    <MappedLayout {...layout} />
  );
}

const getMappedLayoutComponent = (idx, layout, component) => {
  const Component = mapping[layout.id].config.componentMapping[component.id];

  return (
    <Component key={idx} {...component} />
  )
}

export { Classic, getMappedLayout, getMappedLayoutComponent };
