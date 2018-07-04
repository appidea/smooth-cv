import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popover from 'react-popover';

import { setComponentValue, setComponentValueInObject,
  addComponentValueInObject, removeComponentValueInObject } from '../../actions/cv';
import { activateEditor } from '../../actions/editables';
import { terminateAllEdits } from '../../actions/editables';

import './Editable.scss';
import './EditableTypes/ExperienceField.scss';

import TextField from './EditableTypes/TextField';
import RichTextField from './EditableTypes/RichTextField';
import ExperienceField from './EditableTypes/ExperienceField';
import FileField from './EditableTypes/FileField';
import SkillsField from './EditableTypes/SkillsField';

export const TYPE_TEXT_FIELD = 'plainText';
export const TYPE_RICH_TEXT_FIELD = 'richText';
export const TYPE_EXPERIENCE = 'experience';
export const TYPE_FILE = 'file';
export const TYPE_SKILLS = 'skills';

class Editable extends Component {

  getEditor(props) {
    const {componentUniqueId, field, fieldValue, type,
      setComponentValue, setComponentValueInObject, addComponentValueInObject,
      removeComponentValueInObject, terminateAllEdits, editModeEnabled,
      isEditorActive, activateEditor, children} = props;

    switch (type) {
      case TYPE_TEXT_FIELD:
        return <TextField value={fieldValue}
                   onChange={value => setComponentValue(
                     componentUniqueId,
                     field,
                     value
                   )}
                   isEditorActive={isEditorActive}
                   onLeaveRequested={() => terminateAllEdits()} />
      case TYPE_RICH_TEXT_FIELD:
        return <RichTextField value={fieldValue}
                   onChange={value => setComponentValue(
                     componentUniqueId,
                     field,
                     value
                   )}
                   isEditorActive={isEditorActive}
                   onLeaveRequested={() => terminateAllEdits()} />
      case TYPE_FILE:
        return <FileField value={fieldValue}
                   onChange={value => setComponentValue(
                     componentUniqueId,
                     field,
                     value
                   )}
                   onLeaveRequested={() => terminateAllEdits()} />;

      case TYPE_EXPERIENCE:
        return <ExperienceField value={fieldValue}
                  onChange={(objectIndex, fieldInObject, value) => setComponentValueInObject(
                    componentUniqueId,
                    field,
                    objectIndex,
                    fieldInObject,
                    value)}
                  onAdd={() => addComponentValueInObject(
                    componentUniqueId,
                    field,
                    {
                      place: 'Organizacja',
                      role: 'Dodatkowe informacje',
                      yearFrom: 2010,
                      yearTo: 2011
                    })}
                  onRemove={(objectIndex) => removeComponentValueInObject(
                    componentUniqueId,
                    field,
                    objectIndex)}
                  onLeaveRequested={() => terminateAllEdits()} />

        case TYPE_SKILLS:
          return <SkillsField value={fieldValue}
                    onChange={(objectIndex, fieldInObject, value) => setComponentValueInObject(
                      componentUniqueId,
                      field,
                      objectIndex,
                      fieldInObject,
                      value)}
                    onAdd={() => addComponentValueInObject(
                      componentUniqueId,
                      field,
                      {
                        thing: 'JavaScript',
                        year: '2001',
                        level: 5,
                        logo: ''
                      })}
                    onRemove={(objectIndex) => removeComponentValueInObject(
                      componentUniqueId,
                      field,
                      objectIndex)}
                    onLeaveRequested={() => terminateAllEdits()} />
    }
  }

  render() {
    const {editModeEnabled, activateEditor, isEditorActive, children, ...props} = this.props;

    return (
      <div className={'editable' + (isEditorActive ? ' edit-mode' : '')}>
        <Popover className="editable-popover" body={this.getEditor(props)} isOpen={isEditorActive} preferPlace="below">
          <div className="editable-view"
               onClick={(e) => editModeEnabled && activateEditor(this.props.componentUniqueId + ':' + this.props.field)}>
            {children}
          </div>
        </Popover>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const editable = state.present.editables[ownProps.componentUniqueId + ':' + ownProps.field];

  return {
    fieldValue: state.present.cv
      .find(component => component.uniqueId === ownProps.componentUniqueId)[ownProps.field],
    isEditorActive: editable && editable.enabled,
    editModeEnabled: state.present.document.editModeEnabled
  }
};

const mapDispatchToProps = (dispatch) => ({
  setComponentValue: (...props) => dispatch(setComponentValue(...props)),
  setComponentValueInObject: (...props) => dispatch(setComponentValueInObject(...props)),
  addComponentValueInObject: (...props) => dispatch(addComponentValueInObject(...props)),
  removeComponentValueInObject: (...props) => dispatch(removeComponentValueInObject(...props)),
  activateEditor: (...props) => dispatch(activateEditor(...props)),
  terminateAllEdits: () => dispatch(terminateAllEdits())
});

export default connect(mapStateToProps, mapDispatchToProps)(Editable);
