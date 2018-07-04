import React, { Component } from 'react';
import { connect } from 'react-redux';

import './EditorialZone.css';

import { safelyAddComponent, setComponentValue } from '../../actions/cv';
import { getMappedComponentWrapper } from '../ComponentWrappers';
import { getMappedLayoutComponent } from '../../layouts';

const getComponentsForZone = (cv, zoneId) => cv.filter(component => component.zoneId === zoneId);

class EditorialZone extends Component {

  onDragOver(e) {
    e.preventDefault();
    this.el.className = 'editorial-zone over';
  }

  onDragLeave(e) {
    this.el.className = 'editorial-zone'
  }

  onDrop(e, zoneId) {
    this.el.className = 'editorial-zone'

    const movementData = JSON.parse(e.dataTransfer.getData('text'));
    let component;

    switch (movementData.movementType) {
      case 'fromComponentsPane':
        component = this.props.components.find(component => component.id === movementData.componentId);
        break;

      case 'fromOtherSide':
      case 'fromCloset':
        component = this.props.cv.find(component => component.uniqueId === movementData.componentUniqueId);
        break;
    }

    if (getComponentsForZone(this.props.cv, zoneId).length + 1 > this.props.max) {
      return alert('Próbujesz umieścić komponent w strefie, która przyjęła już maksymalną ilość komponentów.');
    }

    if (this.props.layout.zones
          .find(zone => zone.id === zoneId)
          .accepts.indexOf(component.id) === -1) {
      return alert('Ta strefa nie przyjmuje tego typu komponentu. Spróbuj przeciągnąć inny komponent.');
    }

    switch (movementData.movementType) {
      case 'fromComponentsPane':
        return this.props.safelyAddComponent(
          component,
          {},
          zoneId
        );

      case 'fromOtherSide':
      case 'fromCloset':
        return this.props.setComponentValue(
          component.uniqueId,
          'zoneId',
          zoneId
        );
    }


  }

  render() {
    const {cv, layout, id} = this.props;

    return (
      <div className="editorial-zone"
           ref={el => this.el = el}
           onDragOver={(e) => this.onDragOver(e)}
           onDragLeave={(e) => this.onDragLeave(e)}
           onDrop={(e) => this.onDrop(e, id)}>

        { getComponentsForZone(cv, id)
          .map((component, idx) => getMappedComponentWrapper(idx, component, [
            getMappedLayoutComponent(idx, layout, component)
          ])) }
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  cv: state.present.cv,
  components: state.present.components,
  layout: state.present.layout
});

const mapDispatchToProps = (dispatch) => ({
  safelyAddComponent: (...props) => dispatch(safelyAddComponent(...props)),
  setComponentValue: (...props) => dispatch(setComponentValue(...props))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorialZone);
