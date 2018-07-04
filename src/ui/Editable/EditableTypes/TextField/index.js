import React, {Component} from 'react';

class TextField extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.isEditorActive && this.props.isEditorActive === true) {
      this.fieldEl.focus();
    }
  }

  render() {
    const {value, onChange, onLeaveRequested, ...props} = this.props;
    return (
      <div className="editable-editor text-field">
        <form>
          <div className="text-field-group">
            <label>Wartość:</label>
            <input className="text-field"
                   ref={el => this.fieldEl = el}
                   type="text" value={value}
                   onChange={(e) => onChange(e.target.value)} />
          </div>

          <div className="btn-row">
            <button type="submit" className="btn btn-right" onClick={(e) => {
              e.preventDefault();
              onLeaveRequested()
            }}>Opuść edytor</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TextField;
