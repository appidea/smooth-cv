import React from 'react';

const FileField = ({value, onChange, onLeaveRequested}) => (
  <div className="editable-editor file-field">
    <div className="text-field-group">
      <label>URL pliku:</label>
      <input className="text-field"
             type="text" value={value}
             onChange={(e) => onChange(e.target.value)} />
    </div>
    <div>ALBO</div>
    <div className="text-field-group">
      <label>URL pliku:</label>
      <input className="text-field"
             type="file"
             onChange={(e) => {
               var reader = new FileReader();
               reader.readAsDataURL(e.target.files[0]);
               reader.onload = function () {
                 onChange(reader.result)
               };
               reader.onerror = function (error) {
                 console.log('Error: ', error);
               };
             }} />
    </div>

    <div className="btn-row">
      <button className="btn btn-right" onClick={(e) => {
        e.preventDefault();
        onLeaveRequested()
      }}>Opuść edytor</button>
    </div>
  </div>
);

export default FileField;
