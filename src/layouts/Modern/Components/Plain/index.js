import React, { Component } from 'react';
import { transformToHtml } from '../../../helpers';

import Editable, {TYPE_RICH_TEXT_FIELD} from '../../../../ui/Editable';

const Plain = ({content, uniqueId}) => (
  <div className="component-actual plain">
    <Editable field="content" type={TYPE_RICH_TEXT_FIELD} componentUniqueId={uniqueId}>
      <p dangerouslySetInnerHTML={{__html: transformToHtml(content)}}></p>
    </Editable>
  </div>
);

export default Plain;
