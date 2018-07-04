import React, {Component} from 'react';

import './RichTextField.scss';

class RichTextField extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.isEditorActive && this.props.isEditorActive === true) {
      this.inputEl.focus();
    }
  }

  boldSelection() {
    const txtarea = this.inputEl,
          start = txtarea.selectionStart,
          end = txtarea.selectionEnd,
          parts = [
             txtarea.value.substr(0, start),
             txtarea.value.substr(start, end),
             txtarea.value.substr(end)
          ];

    txtarea.value = parts.join('_');
  }

  render() {
    const {value, onChange, onLeaveRequested, ...props} = this.props;
    return (
      <div className="editable-editor text-field">
        <form>
          <div className="rich-text-editor">
            <div className="rich-text-editor-toolbar">
              <button type="button" onClick={() => this.boldSelection()}><b>B</b></button>
              <button type="button" onClick={() => this.italizeSelection()}><i>I</i></button>
            </div>
            <textarea ref={el => this.inputEl = el} onChange={(e) => onChange(e.target.value)}>
              {value}
            </textarea>
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

export default RichTextField;
