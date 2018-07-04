import React from 'react';

import Photo from './Photo';
import PersonalData from './PersonalData';
import Plain from './Plain';
import Experience from './Experience';
import Skills from './Skills';

import './ComponentWrapper.scss';

import {PHOTO, PLAIN, EXPERIENCE, PERSONAL_DATA, SKILLS} from '../../componentsEnum';

const mapping = {
  [PHOTO]: Photo,
  [PLAIN]: Plain,
  [EXPERIENCE]: Experience,
  [PERSONAL_DATA]: PersonalData,
  [SKILLS]: Skills
};

const getMappedComponentWrapper = (idx, component, children) => {
  const MappedComponentWrapper = mapping[component.id];

  const componentDraggingProps = {
    draggable: true,
    onDragStart: (event) => {
      event.dataTransfer.setData("text", JSON.stringify(
        {
          movementType: 'fromOtherSide',
          componentUniqueId: component.uniqueId
        }
      ));
    }
  };

  return (
    <MappedComponentWrapper key={idx} component={component} {...componentDraggingProps}
                            style={{flexBasis: component.size + '%'}} >
      { children }
    </MappedComponentWrapper>
  );
}

export {
  getMappedComponentWrapper
};
