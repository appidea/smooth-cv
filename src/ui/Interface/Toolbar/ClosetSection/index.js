import React, { Component } from 'react';
import { connect } from 'react-redux';

import Popover from 'react-popover';

import Section from '../Section';

import { setComponentValue } from '../../../../actions/cv';

const getPopoverContent = (component) => (
  <div className="toolbar-popover">
    <h4>{component.description.name}</h4>
    <p>{component.description.longtext}</p>
  </div>
);

class ClosetSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpened: {}
    };
  }

  startDrag(event, componentUniqueId) {
    event.dataTransfer.setData("text", JSON.stringify(
      {
        movementType: 'fromCloset',
        componentUniqueId
      }
    ));
  }

  onDragOver(e) {
    e.preventDefault();
    this.el.className = 'toolbar-components over';
  }

  onDragLeave(e) {
    this.el.className = 'toolbar-components'
  }

  onDrop(e) {
    this.el.className = 'toolbar-components'

    const movementData = JSON.parse(e.dataTransfer.getData('text'));
    let component;

    if (movementData.movementType === 'fromOtherSide') {
      component = this.props.cv.find(component => component.uniqueId === movementData.componentUniqueId);

      return this.props.setComponentValue(
        component.uniqueId,
        'zoneId',
        null
      );
    }
  }

  render() {
    const {cvOutElements} = this.props;

    return (
      <Section caption="Szuflada">
        <ul className="toolbar-components"
            ref={el => this.el = el}
            onDragOver={(e) => this.onDragOver(e)}
            onDragLeave={(e) => this.onDragLeave(e)}
            onDrop={(e) => this.onDrop(e)}>
          { cvOutElements.map((component, idx) => (
            <li key={idx}>
              <Popover body={getPopoverContent(component)} isOpen={this.state.isPopoverOpened[component.id]}>
                <div className="toolbar-component"
                     draggable="true"
                     onDragStart={(e) => this.startDrag(e, component.uniqueId)}>
                     <i className={component.description.icon}></i>
                     <i className="help toolbar-component-help" onMouseOver={() => this.setState({
                       isPopoverOpened: {
                         [component.id]: true
                       }
                     })} onMouseOut={() => this.setState({
                       isPopoverOpened: {
                         [component.id]: false
                       }
                     })}>?</i>
                </div>
              </Popover>
            </li>
          )) }
        </ul>
      </Section>
    );
  }

}

const mapStateToProps = (state) => ({
  cvOutElements: state.present.cv
    .filter(component => component.zoneId === null)
    .map(component => ({
      ...component,
      description: {
        ...state.present.components.find(iteratedComponent => iteratedComponent.id === component.id).description,
      }
    })),
  cv: state.present.cv
});

const mapDispatchToProps = (dispatch) => ({
  setComponentValue: (...props) => dispatch(setComponentValue(...props))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClosetSection);
