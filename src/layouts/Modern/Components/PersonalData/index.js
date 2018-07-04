import React from 'react';
import Editable, {TYPE_TEXT_FIELD} from '../../../../ui/Editable';

import './PersonalData.scss';

const PersonalData = ({firstName, lastName, address, birthDate, uniqueId}) => (
  <div className="component-actual personal-data">
    <Editable field="firstName" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
      {firstName}
    </Editable>
    <Editable field="lastName" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
      {lastName}
    </Editable>
    <Editable field="address" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
      {address}
    </Editable>
  </div>
)

export default PersonalData;
