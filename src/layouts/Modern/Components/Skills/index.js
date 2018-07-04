import React, { Component } from 'react';
import Editable, {TYPE_SKILLS} from '../../../../ui/Editable';

import './Experience.css';

const Skills = ({entries, uniqueId}) => (
  <div className="component-actual skills">
    <Editable field="entries" type={TYPE_SKILLS} componentUniqueId={uniqueId}>
      <table>
        <tbody>
          { entries.map((entry, key) => (
            <tr key={key}>
              <td colSpan="2">{entry.level}</td>
              <td colSpan="10">
                 <b>{entry.thing}</b>
                 <br />
                 {entry.year}
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </Editable>
  </div>
)

export default Skills;
