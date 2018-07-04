import React from 'react';

import Rheostat from 'rheostat';
import { FaTrashO } from 'react-icons/lib/fa';

const yearPoints = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];

const pitComponent = ({ style, children }) => (
  <div className="slider-pit" style={style}>{children}</div>
)

const ExperienceField = ({value, onChange, onAdd, onRemove, onLeaveRequested}) => (
  <div className="editable-editor experience-field">
    <div className="experience-field-inner">
      { value.map((entry, key) => (
        <div key={key} className="experience-group">
          <div className="experience-group-caption">
            Pozycja #{key}
            <button onClick={() => onRemove(key)}>
              <FaTrashO />
            </button>
          </div>
          <div className="slider">
            <Rheostat min={2010}
              max={2018}
              pitPoints={yearPoints}
              pitComponent={pitComponent}
              snapPoints={yearPoints}
              values={[entry.yearFrom, entry.yearTo]}
              onChange={state => {
                if (state.values[0] !== entry.yearFrom) {
                  onChange(key, 'yearFrom', state.values[0]);
                } else if (state.values[1] !== entry.yearTo) {
                  onChange(key, 'yearTo', state.values[1]);
                }
              }} />
          </div>

          <div className="other-descriptions">
            <div className="text-field-group">
              <label>Firma:</label>
              <input className="text-field" type="text" value={entry.place}
                     onChange={(e) => onChange(key, 'place', e.target.value)} />
            </div>

            <div className="text-field-group">
              <label>Funkcja:</label>
              <input className="text-field" type="text" value={entry.role}
                     onChange={(e) => onChange(key, 'role', e.target.value)} />
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

export default ExperienceField;
