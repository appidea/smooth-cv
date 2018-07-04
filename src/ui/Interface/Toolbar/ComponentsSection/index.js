import React, { Component } from 'react';
import { connect } from 'react-redux';

import Popover from 'react-popover';

import Section from '../Section';

const getPopoverContent = (component) => (
  <div className="toolbar-popover">
    <h4>{component.description.name}</h4>
    <p>{component.description.longtext}</p>
  </div>
);

class ComponentsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpened: {}
    };
  }

  startDrag(event, componentId) {
    event.dataTransfer.setData("text", JSON.stringify(
      {
        movementType: 'fromComponentsPane',
        componentId
      }
    ));
  }

  render() {
    const {components} = this.props;

    return (
      <Section caption="Komponenty">
        <ul className="toolbar-components">
          { components.map((component, idx) => (
            <li key={idx}>
              <Popover body={getPopoverContent(component)} isOpen={this.state.isPopoverOpened[component.id]}>
                <div className="toolbar-component"
                     draggable="true"
                     onDragStart={(e) => this.startDrag(e, component.id)}>
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
  components: state.present.components
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsSection);
