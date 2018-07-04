import React from 'react';

import Rheostat from 'rheostat';
import { FaTrashO } from 'react-icons/lib/fa';

const yearPoints = [0, 1, 2, 3, 4, 5];

const pitComponent = ({ style, children }) => (
  <div className="slider-pit" style={style}>{children}</div>
)

const SkillsField = ({value, onChange, onAdd, onRemove, onLeaveRequested}) => (
  <div className="editable-editor experience-field skills-field">
    <div className="experience-field-inner">
      { value.map((entry, key) => (
        <div key={key} className="experience-group">
          <div className="experience-group-caption">
            Pozycja #{key}
            <button onClick={() => onRemove(key)}>
              <FaTrashO />
            </button>
          </div>
          Jak bardzo to umiesz?

          <div className="slider">
            <Rheostat min={0} max={5}
              pitPoints={yearPoints}
              pitComponent={pitComponent}
              snapPoints={yearPoints}
              values={[entry.level]}
              onChange={state => {
                if (state.values[0] !== entry.level) {
                  onChange(key, 'level', state.values[0]);
                }
              }} />
          </div>

          <div className="other-descriptions">
            <div className="text-field-group">
              <label>Przedmiot:</label>
              <input className="text-field" type="text" value={entry.thing}
                     onChange={(e) => onChange(key, 'thing', e.target.value)} />
            </div>

            <div className="text-field-group">
              <label>Rok nabycia:</label>
              <input className="text-field" type="text" value={entry.year}
                     onChange={(e) => onChange(key, 'year', e.target.value)} />
            </div>

            <div className="text-field-group">
              <label>Logo:</label>
              <input className="text-field" type="text" value={entry.image}
                     onChange={(e) => onChange(key, 'image', e.target.value)} />
            </div>
          </div>
        </div>
      )) }

      <div className="btn-row">
        <button className="btn btn-left" onClick={() => onAdd()}>Dodaj pozycję</button>
        <button className="btn btn-right" onClick={() => onLeaveRequested()}>Opuść edytor</button>
      </div>
    </div>
  </div>
);

export default SkillsField;
