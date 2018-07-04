import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Toolbar.scss';

import ComponentsSection from './ComponentsSection';
import ActionsSection from './ActionsSection';
import ClosetSection from './ClosetSection';

class Toolbar extends Component {
  render() {
    const {editModeEnabled} = this.props;

    return (
      <div className="toolbar">
        { editModeEnabled && <ComponentsSection /> }

        <ActionsSection />

        { editModeEnabled && <ClosetSection /> }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  editModeEnabled: state.present.document.editModeEnabled
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
