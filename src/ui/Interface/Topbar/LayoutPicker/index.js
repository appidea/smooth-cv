import React, { Component } from 'react';
import { connect } from 'react-redux';

import { migrateToNewLayout } from '../../../../actions/layout'

import { mapping } from '../../../../layouts';

import './LayoutPicker.scss';

class LayoutPicker extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.layout.name !== this.props.layout.name) {
      this.preventAction = true;

      setTimeout(() => {
        this.preventAction = false;
      }, 600)
    }
  }

  render() {
    const { layout, migrateToNewLayout } = this.props,
          layouts = Object.entries(mapping).map(([key, layout]) => key),
          prevItem = layouts.indexOf(layout.id) - 1,
          nextItem = layouts.indexOf(layout.id) + 1;

    return (
      <div className="layout-picker">
        <button className={'layout-picker-nav-left' + ( !mapping[layouts[prevItem]] ? ' disabled' : '' )}
           onClick={() => !this.preventAction && mapping[layouts[prevItem]]
            && migrateToNewLayout(mapping[layouts[prevItem]].config)}>
              <i className="fas fa-chevron-left"></i>
            </button>

        <span className="layout-picker-current">
          <i className="fas fa-paint-brush"></i>
          &nbsp;
          {layout.name}
        </span>

        <button className={'layout-picker-nav-right' + ( !mapping[layouts[nextItem]] ? ' disabled' : '' )}
           onClick={() => !this.preventAction && mapping[layouts[nextItem]]
            && migrateToNewLayout(mapping[layouts[nextItem]].config)}>
              <i className="fas fa-chevron-right"></i>
            </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  layout: state.present.layout
})

const mapDispatchToProps = (dispatch) => ({
  migrateToNewLayout: (...props) => dispatch(migrateToNewLayout(...props))
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPicker);
