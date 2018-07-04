import React from 'react';
import { connect } from 'react-redux';

import { FaArrowsH } from 'react-icons/lib/fa';
import AmountControl from '../../../../ui/Interface/AmountControl';

import { setComponentSize } from '../../../../actions/cv'

const calculateDiff = (oldSize, newSize) => (newSize - oldSize) || 1;

const Resize = ({uniqueId, size, setComponentSize}) => (
  <div className="control-group">
    <FaArrowsH />
    <AmountControl min={0} max={100} value={size}
                   onChange={value => setComponentSize(uniqueId, calculateDiff(size, parseInt(value)))}
                   step={1}
                   size="s" />
  </div>
);

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  setComponentSize: (...props) => dispatch(setComponentSize(...props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Resize);
