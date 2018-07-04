import React from 'react';
import Editable, {TYPE_FILE} from '../../../../ui/Editable';

import './Photo.scss';

const Photo = ({url, uniqueId}) => (
  <div className="component-actual photo">
    <Editable field="url" type={TYPE_FILE} componentUniqueId={uniqueId}>
      <div className="photo" style={{backgroundImage: 'url("' + url + '")'}}></div>
    </Editable>
  </div>
);

export default Photo;
