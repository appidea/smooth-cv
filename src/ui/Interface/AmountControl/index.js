import React from 'react';

import './AmountControl.scss';

const AmountControl = ({onChange, value, step = 10, size, min, max}) => (
  <div className={'amount-control ' + size}>
    <button className="amount-control-btn" onClick={() => onChange(value - step)}
            disabled={value <= min}>-</button>
    <span className="amount-control-value">{value}</span>
    <button className="amount-control-btn" onClick={() => onChange(value + step)}
            disabled={value >= max}>+</button>
  </div>
);

export default AmountControl;
