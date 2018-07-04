import React from 'react';
import { connect } from 'react-redux';

import { FaTrashO } from 'react-icons/lib/fa';

import { removeComponent } from '../../../../actions/cv'

const Remove = ({uniqueId, removeComponent}) => (
  <button className="component-toolbar-btn" onClick={() => removeComponent(uniqueId)}>
    <FaTrashO />
  </button>
);

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  removeComponent: (...props) => dispatch(removeComponent(...props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Remove);
