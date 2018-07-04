import React from 'react';
import Editable, {TYPE_TEXT_FIELD} from '../../../../ui/Editable';

const PersonalData = ({firstName, lastName, address, birthDate, uniqueId}) => (
  <div className="component-actual personal-data">
    <div>
      <Editable field="firstName" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        <b>Imię</b>: {firstName}
      </Editable>
    </div>
    <div>
      <Editable field="lastName" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        <b>Nazwisko</b>: {lastName}
      </Editable>
    </div>
    <div>
      <Editable field="address" type={TYPE_TEXT_FIELD} componentUniqueId={uniqueId}>
        <b>Adres</b>: {address}
      </Editable>
    </div>
  </div>
)

export default PersonalData;
