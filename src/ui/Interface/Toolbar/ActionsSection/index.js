import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveImportedCv } from '../../../../actions/general';

import { ActionCreators as UndoActionCreators } from 'redux-undo';

import Section from '../Section';

class ActionSection extends Component {

  save() {
    const filename = 'cv.json',
          blob = new Blob([this.props.stateToDownload], {type: 'text/json'});

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
  }

  importCV(file) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      this.props.saveImportedCv(JSON.parse(reader.result))
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  render() {
    const {onUndo, onRedo, canUndo, canRedo} = this.props;

    return (
      <Section caption="Akcje">
        <ul className="toolbar-buttons">
          <li>
            <button className="toolbar-button"
                disabled={!canUndo}
                 onClick={() => onUndo()}>
                 <i className="fas fa-undo-alt"></i>
                 Cofnij
            </button>
          </li>
          <li>
            <button className="toolbar-button"
                disabled={!canRedo}
                 onClick={() => onRedo()}>
                 <i className="fas fa-redo-alt"></i>
                 Powtórz
            </button>
          </li>
          <li>
            <button className="toolbar-button"
                 onClick={() => this.save()}>
                 <i className="fas fa-download"></i>
                 Zapisz
            </button>
          </li>
          <li>
            <div className="toolbar-button">
                 <i className="fas fa-upload"></i>
                 Importuj
                 <input type="file" onChange={(e) => this.importCV(e.target.files[0])} />
            </div>
          </li>
        </ul>
      </Section>
    );
  }

}

const mapStateToProps = (state) => ({
  canUndo: state.past.length > 0,
  canRedo: state.future.length > 0,
  stateToDownload: JSON.stringify({
    cv: state.present.cv,
    layoutId: state.present.layout.id
  })
});

const mapDispatchToProps = (dispatch) => ({
  onUndo: () => dispatch(UndoActionCreators.undo()),
  onRedo: () => dispatch(UndoActionCreators.redo()),
  saveImportedCv: (cv) => dispatch(saveImportedCv(cv))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionSection);
