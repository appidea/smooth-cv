import React, { Component } from 'react';
import EditorialZone from '../../ui/EditorialZone';

import config from './config';

import './Classic.scss';

class Classic extends Component {

  render() {
    const {...props} = this.props;

    return (
      <div className="theme classic-theme">

        <h1>Curicullum Vitae</h1>
        <EditorialZone { ...props } { ...config.zones[0] } />

        <h2>Historia nauki</h2>

        <EditorialZone { ...props } { ...config.zones[1] } />

        <h2>Doświadczenie zawodowe</h2>

        <EditorialZone { ...props } { ...config.zones[2] } />

        <h2>Inne</h2>

        <EditorialZone { ...props } { ...config.zones[3] } />
      </div>
    );
  }
}

Classic.config = config;

export default Classic;
