import React, { Component } from 'react';
import EditorialZone from '../../ui/EditorialZone';

import config from './config';

import './Minimal.scss';

class Minimal extends Component {

  render() {
    const {...props} = this.props;

    return (
      <div className="theme minimal-theme">
        <EditorialZone { ...props } { ...config.zones[0] } />

        <EditorialZone { ...props } { ...config.zones[2] } />

        <h2>Doświadczenie</h2>

        <EditorialZone { ...props } { ...config.zones[1] } />

        <EditorialZone { ...props } { ...config.zones[3] } />

      </div>
    );
  }
}

Minimal.config = config;

export default Minimal;
