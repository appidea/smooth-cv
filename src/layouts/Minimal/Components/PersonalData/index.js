import React from 'react';
import Editable, {TYPE_TEXT_FIELD} from '../../../../ui/Editable';

const PersonalData = ({firstName, lastName, address, birthDate, email, uniqueId}) => (
  <div className="component-actual personal-data">
    <div className="names">
      <Editable field="firstName" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        {firstName}
      </Editable>
      <Editable field="lastName" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        {lastName}
      </Editable>
    </div>
    <div className="contact">
      <Editable field="birthDate" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        urodzony {birthDate}
      </Editable>
      <span>&nbsp;||&nbsp;</span>
      <Editable field="address" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        {address}
      </Editable>
      <span>&nbsp;||&nbsp;</span>
      <Editable field="email" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        {email}
      </Editable>
    </div>
  </div>
)

export default PersonalData;
