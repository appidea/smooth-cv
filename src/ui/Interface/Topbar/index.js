import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-toggle-switch';

import { setEditMode } from '../../../actions/document';
import './Topbar.scss';
import Image from '../../onlyName.svg';

import LayoutPicker from './LayoutPicker';

class Topbar extends Component {
  render() {
    const {setEditMode, editModeEnabled} = this.props;

    return (
      <div className="topbar">
        <div className="topbar-left">
          <LayoutPicker />
        </div>
        <div className="topbar-title">
          <img src={Image} />
        </div>
        <div className="topbar-right">
          <span>EDIT</span>
          <Switch on={editModeEnabled} onClick={() => setEditMode(!editModeEnabled)} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  editModeEnabled: state.present.document.editModeEnabled
});

const mapDispatchToProps = (dispatch) => ({
  setEditMode: (...props) => dispatch(setEditMode(...props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
