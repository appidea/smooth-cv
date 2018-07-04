import React from 'react';
import { connect } from 'react-redux';

import AmountControl from '../AmountControl';

import './Zoom.scss';

import { setZoom } from '../../../actions/document';

const Zoom = ({zoomValue, setZoom}) => (
  <div className="zoom-control">
    <AmountControl min={30} max={300}
                   onChange={(value) => setZoom(value)}
                   size="m"
                   step={10}
                   value={zoomValue} />
  </div>
);

const mapStateToProps = (state) => ({
  zoomValue: state.present.document.zoom
})

const mapDispatchToProps = (dispatch) => ({
  setZoom: (zoomValue) => dispatch(setZoom(zoomValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(Zoom);
