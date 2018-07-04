import React, { Component } from 'react';
import Editable, {TYPE_EXPERIENCE} from '../../../../ui/Editable';

import './Experience.scss';

const Experience = ({entries, uniqueId}) => (
  <div className="component-actual experience">
    <Editable field="entries" type={TYPE_EXPERIENCE} componentUniqueId={uniqueId}>
      <ul className="experience-entries">
        { entries.map((entry, key) => (
          <li>
            <div className="experience-entries-heading-row">
              <div className="year">{entry.yearFrom} - {entry.yearTo}</div>
              <h3>{entry.place}</h3>
            </div>
            <div className="experience-entries-role-row">
              {entry.role}
            </div>
          </li>
        )) }
      </ul>
    </Editable>
  </div>
)

export default Experience;
