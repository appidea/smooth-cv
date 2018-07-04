import React, { Component } from 'react';
import Editable, {TYPE_EXPERIENCE} from '../../../../ui/Editable';

import './Experience.css';

const Experience = ({entries, uniqueId}) => (
  <div className="component-actual experience">
    <Editable field="entries" type={TYPE_EXPERIENCE} componentUniqueId={uniqueId}>
      <table>
        <tbody>
          { entries.map((entry, key) => (
            <tr key={key}>
              <td colSpan="2">{entry.yearFrom} - {entry.yearTo}</td>
              <td colSpan="10">
                 <b>{entry.place}</b>
                 <br />
                 {entry.role}
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </Editable>
  </div>
)

export default Experience;
