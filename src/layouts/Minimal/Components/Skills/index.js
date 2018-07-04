import React, { Component } from 'react';
import Editable, {TYPE_SKILLS} from '../../../../ui/Editable';

import './Skills.scss';

const groupSkillsByYear = (skills) => {
  const byYear = {};

  skills.forEach(el => {
    if (typeof byYear[el.year] === 'undefined') {
      byYear[el.year] = [];
    }

    byYear[el.year].push(el.thing);
  });

  return byYear;
}

const Skills = ({entries, uniqueId}) => (
  <div className="component-actual skills">
    <Editable field="entries" type={TYPE_SKILLS} componentUniqueId={uniqueId}>
      <ul className="timeline">
        { Object.entries(groupSkillsByYear(entries)).map(([key, entry]) => (
          <li key={key}>
            <div className="year">{key}</div>
            <div className="skill-list">{entry.join(', ')}</div>
          </li>
        )) }
      </ul>
    </Editable>
  </div>
)

export default Skills;
